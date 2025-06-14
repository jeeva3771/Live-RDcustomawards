import React, { useRef, useState, useEffect, useCallback } from 'react'
import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  AlignLeft,
  AlignCenter,
  AlignRight,
  List,
  ListOrdered,
  Quote,
  Link,
  Image,
  Type,
  Palette,
  Undo,
  Redo,
  Code,
  Subscript,
  Superscript,
  Indent,
  Outdent,
  Save,
  Download,
  Upload,
} from 'lucide-react'

const AdvancedRichTextEditor = () => {
  const editorRef = useRef(null)
  const fileInputRef = useRef(null)
  const [fontSize, setFontSize] = useState('16')
  const [fontFamily, setFontFamily] = useState('Arial')
  const [textColor, setTextColor] = useState('#000000')
  const [backgroundColor, setBackgroundColor] = useState('#ffffff')
  const [history, setHistory] = useState([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [wordCount, setWordCount] = useState(0)
  const [isLinkModalOpen, setIsLinkModalOpen] = useState(false)
  const [linkUrl, setLinkUrl] = useState('')
  const [linkText, setLinkText] = useState('')
  const [savedSelection, setSavedSelection] = useState(null)
  const [activeFormats, setActiveFormats] = useState({
    bold: false,
    italic: false,
    underline: false,
    strikethrough: false,
    subscript: false,
    superscript: false,
    justifyLeft: false,
    justifyCenter: false,
    justifyRight: false,
    insertUnorderedList: false,
    insertOrderedList: false
  })

  // Check active formatting states
  const updateActiveFormats = useCallback(() => {
    if (!editorRef.current) return

    const newActiveFormats = {
      bold: document.queryCommandState('bold'),
      italic: document.queryCommandState('italic'),
      underline: document.queryCommandState('underline'),
      strikethrough: document.queryCommandState('strikethrough'),
      subscript: document.queryCommandState('subscript'),
      superscript: document.queryCommandState('superscript'),
      justifyLeft: document.queryCommandState('justifyLeft'),
      justifyCenter: document.queryCommandState('justifyCenter'),
      justifyRight: document.queryCommandState('justifyRight'),
      insertUnorderedList: document.queryCommandState('insertUnorderedList'),
      insertOrderedList: document.queryCommandState('insertOrderedList')
    }

    setActiveFormats(newActiveFormats)

    // Update font family and size from current selection
    const fontName = document.queryCommandValue('fontName')
    const fontSize = document.queryCommandValue('fontSize')

    if (fontName && fontName !== fontFamily) {
      setFontFamily(fontName.replace(/['"]/g, ''))
    }

    // Convert fontSize value to pixel size if needed
    if (fontSize) {
      const sizeMap = { '1': '8', '2': '10', '3': '12', '4': '14', '5': '16', '6': '18', '7': '20' }
      const pixelSize = sizeMap[fontSize] || fontSize
      if (pixelSize !== fontSize) {
        setFontSize(pixelSize)
      }
    }
  }, [fontFamily, fontSize])

  // Save state to history for undo/redo
  const saveToHistory = useCallback(() => {
    if (!editorRef.current) return
    const content = editorRef.current.innerHTML
    const newHistory = history.slice(0, historyIndex + 1)
    newHistory.push(content)
    setHistory(newHistory)
    setHistoryIndex(newHistory.length - 1)
  }, [history, historyIndex])

  // Execute formatting commands
  const execCommand = (command, value = null) => {
    document.execCommand(command, false, value)
    editorRef.current?.focus()
    setTimeout(() => {
      saveToHistory()
      updateActiveFormats()
    }, 10)
  }

  // Undo/Redo functionality
  const handleUndo = () => {
    if (historyIndex > 0) {
      const newIndex = historyIndex - 1
      setHistoryIndex(newIndex)
      editorRef.current.innerHTML = history[newIndex]
    }
  }

  const handleRedo = () => {
    if (historyIndex < history.length - 1) {
      const newIndex = historyIndex + 1
      setHistoryIndex(newIndex)
      editorRef.current.innerHTML = history[newIndex]
    }
  }

  // Save and restore selection
  const saveSelection = () => {
    const selection = window.getSelection()
    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0)
      setSavedSelection({
        startContainer: range.startContainer,
        startOffset: range.startOffset,
        endContainer: range.endContainer,
        endOffset: range.endOffset,
        collapsed: range.collapsed
      })
      return range.toString()
    }
    return ''
  }

  const restoreSelection = () => {
    if (savedSelection && editorRef.current) {
      const selection = window.getSelection()
      const range = document.createRange()

      try {
        range.setStart(savedSelection.startContainer, savedSelection.startOffset)
        range.setEnd(savedSelection.endContainer, savedSelection.endOffset)
        selection.removeAllRanges()
        selection.addRange(range)
        return true
      } catch (e) {
        console.warn('Could not restore selection:', e)
        return false
      }
    }
    return false
  }

  // Handle link button click
  const handleLinkClick = () => {
    if (!editorRef.current) return

    // Save current selection
    const selectedText = saveSelection()

    // Pre-fill link text if there's a selection
    if (selectedText.trim()) {
      setLinkText(selectedText.trim())
    } else {
      setLinkText('')
    }

    setLinkUrl('')
    setIsLinkModalOpen(true)
  }
  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = () => {
      const img = `<img src="${reader.result}" class="editor-image" />`
      execCommand('insertHTML', img)
    }
    reader.readAsDataURL(file)
  }

  // Handle link insertion
  const insertLink = () => {
    if (!linkUrl.trim()) {
      alert('Please enter a valid URL')
      return
    }

    if (!linkText.trim()) {
      alert('Please enter link text')
      return
    }

    // Focus the editor first
    editorRef.current?.focus()

    // Try to restore selection first
    const selectionRestored = restoreSelection()

    if (selectionRestored && savedSelection && !savedSelection.collapsed) {
      // If we have a saved selection and it's not collapsed, wrap it with a link
      execCommand('createLink', linkUrl)
    } else {
      // Otherwise, insert new link HTML
      const link = `<a href="${linkUrl}" target="_blank">${linkText}</a>`
      execCommand('insertHTML', link)
    }

    // Close modal and reset
    setIsLinkModalOpen(false)
    setLinkUrl('')
    setLinkText('')
    setSavedSelection(null)
  }

  // Handle modal close
  const handleModalClose = () => {
    setIsLinkModalOpen(false)
    setLinkUrl('')
    setLinkText('')
    setSavedSelection(null)
    editorRef.current?.focus()
  }

  // Update word count
  const updateWordCount = () => {
    if (editorRef.current) {
      const text = editorRef.current.innerText || ''
      const words = text
        .trim()
        .split(/\s+/)
        .filter((word) => word.length > 0)
      setWordCount(words.length)
    }
  }

  // Save content as HTML file
  const saveAsHTML = () => {
    const content = editorRef.current?.innerHTML || ''
    const blob = new Blob(
      [`<!DOCTYPE html><html><head><title>Document</title></head><body>${content}</body></html>`],
      { type: 'text/html' },
    )
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'document.html'
    a.click()
    URL.revokeObjectURL(url)
  }

  // Load HTML file
  const loadHTML = (e) => {
    const file = e.target.files[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (event) => {
      const parser = new DOMParser()
      const doc = parser.parseFromString(event.target.result, 'text/html')
      const bodyContent = doc.body.innerHTML
      if (editorRef.current) {
        editorRef.current.innerHTML = bodyContent
        saveToHistory()
      }
    }
    reader.readAsText(file)
  }

  // Initialize history
  useEffect(() => {
    if (editorRef.current && history.length === 0) {
      saveToHistory()
    }
  }, [saveToHistory, history.length])

  // Update word count on content change
  useEffect(() => {
    const editor = editorRef.current
    if (editor) {
      const handleInput = () => {
        updateWordCount()
      }

      const handleSelectionChange = () => {
        updateActiveFormats()
      }

      const handleKeyUp = () => {
        updateActiveFormats()
      }

      const handleMouseUp = () => {
        updateActiveFormats()
      }

      editor.addEventListener('input', handleInput)
      editor.addEventListener('keyup', handleKeyUp)
      editor.addEventListener('mouseup', handleMouseUp)
      document.addEventListener('selectionchange', handleSelectionChange)

      return () => {
        editor.removeEventListener('input', handleInput)
        editor.removeEventListener('keyup', handleKeyUp)
        editor.removeEventListener('mouseup', handleMouseUp)
        document.removeEventListener('selectionchange', handleSelectionChange)
      }
    }
  }, [updateActiveFormats])

  return (
    <div className="rich-text-editor">
      {/* Main Toolbar */}
      <div className="toolbar">
        {/* Basic Formatting */}
        <button
          className={`toolbar-btn ${activeFormats.bold ? 'active' : ''}`}
          onClick={() => execCommand('bold')}
          title="Bold"
        >
          <Bold size={16} />
        </button>
        <button
          className={`toolbar-btn ${activeFormats.italic ? 'active' : ''}`}
          onClick={() => execCommand('italic')}
          title="Italic"
        >
          <Italic size={16} />
        </button>
        <button
          className={`toolbar-btn ${activeFormats.underline ? 'active' : ''}`}
          onClick={() => execCommand('underline')}
          title="Underline"
        >
          <Underline size={16} />
        </button>
        <button
          className={`toolbar-btn ${activeFormats.strikethrough ? 'active' : ''}`}
          onClick={() => execCommand('strikethrough')}
          title="Strikethrough"
        >
          <Strikethrough size={16} />
        </button>

        <div className="toolbar-divider"></div>

        {/* Font Controls */}
        <select
          value={fontFamily}
          onChange={(e) => {
            setFontFamily(e.target.value)
            execCommand('fontName', e.target.value)
          }}
          className="toolbar-select font-family-select"
        >
          <option value="Arial">Arial</option>
          <option value="Helvetica">Helvetica</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Courier New">Courier New</option>
          <option value="Georgia">Georgia</option>
          <option value="Verdana">Verdana</option>
        </select>

        <select
          value={fontSize}
          onChange={(e) => {
            setFontSize(e.target.value)
            execCommand('fontSize', e.target.value)
          }}
          className="toolbar-select font-size-select"
        >
          {[8, 10, 12, 14, 16, 18, 20, 24, 28, 32, 36].map((size) => (
            <option key={size} value={size}>
              {size}px
            </option>
          ))}
        </select>

        <div className="toolbar-divider"></div>

        {/* Colors */}
        <div className="color-controls">
          <input
            type="color"
            value={textColor}
            onChange={(e) => {
              setTextColor(e.target.value)
              execCommand('foreColor', e.target.value)
            }}
            className="color-picker text-color"
            title="Text Color"
          />
          <input
            type="color"
            value={backgroundColor}
            onChange={(e) => {
              setBackgroundColor(e.target.value)
              execCommand('backColor', e.target.value)
            }}
            className="color-picker bg-color"
            title="Background Color"
          />
        </div>

        <div className="toolbar-divider"></div>

        {/* Alignment */}
        <button
          className={`toolbar-btn ${activeFormats.justifyLeft ? 'active' : ''}`}
          onClick={() => execCommand('justifyLeft')}
          title="Align Left"
        >
          <AlignLeft size={16} />
        </button>
        <button
          className={`toolbar-btn ${activeFormats.justifyCenter ? 'active' : ''}`}
          onClick={() => execCommand('justifyCenter')}
          title="Align Center"
        >
          <AlignCenter size={16} />
        </button>
        <button
          className={`toolbar-btn ${activeFormats.justifyRight ? 'active' : ''}`}
          onClick={() => execCommand('justifyRight')}
          title="Align Right"
        >
          <AlignRight size={16} />
        </button>

        <div className="toolbar-divider"></div>

        {/* Lists */}
        <button
          className={`toolbar-btn ${activeFormats.insertUnorderedList ? 'active' : ''}`}
          onClick={() => execCommand('insertUnorderedList')}
          title="Bullet List"
        >
          <List size={16} />
        </button>
        <button
          className={`toolbar-btn ${activeFormats.insertOrderedList ? 'active' : ''}`}
          onClick={() => execCommand('insertOrderedList')}
          title="Numbered List"
        >
          <ListOrdered size={16} />
        </button>
        <button className="toolbar-btn" onClick={() => execCommand('indent')} title="Indent">
          <Indent size={16} />
        </button>
        <button className="toolbar-btn" onClick={() => execCommand('outdent')} title="Outdent">
          <Outdent size={16} />
        </button>
      </div>

      {/* Secondary Toolbar */}
      <div className="toolbar secondary-toolbar">
        {/* Special Formatting */}
        {/* <button className="toolbar-btn" onClick={() => execCommand('formatBlock', 'blockquote')} title="Quote">
          <Quote size={16} />
        </button>
        <button className="toolbar-btn" onClick={() => execCommand('formatBlock', 'pre')} title="Code Block">
          <Code size={16} />
        </button> */}
        <button className="toolbar-btn" onClick={() => execCommand('subscript')} title="Subscript">
          <Subscript size={16} />
        </button>
        <button className="toolbar-btn" onClick={() => execCommand('superscript')} title="Superscript">
          <Superscript size={16} />
        </button>

        <div className="toolbar-divider"></div>

        {/* Media & Links */}
        {/* <button className="toolbar-btn" onClick={handleLinkClick} title="Insert Link">
          <Link size={16} />
        </button> */}
        <button className="toolbar-btn" onClick={() => fileInputRef.current?.click()} title="Insert Image">
          <Image size={16} />
        </button>

        <div className="toolbar-divider"></div>

        {/* History */}
        <button
          className={`toolbar-btn ${historyIndex <= 0 ? 'disabled' : ''}`}
          onClick={handleUndo}
          disabled={historyIndex <= 0}
          title="Undo"
        >
          <Undo size={16} />
        </button>
        <button
          className={`toolbar-btn ${historyIndex >= history.length - 1 ? 'disabled' : ''}`}
          onClick={handleRedo}
          disabled={historyIndex >= history.length - 1}
          title="Redo"
        >
          <Redo size={16} />
        </button>

        <div className="toolbar-divider"></div>

        {/* File Operations */}
        <button className="toolbar-btn" onClick={saveAsHTML} title="Save as HTML">
          <Save size={16} />
        </button>
        <label className="toolbar-btn file-upload-btn" title="Load HTML">
          <Upload size={16} />
          <input type="file" accept=".html,.htm" onChange={loadHTML} className="hidden-input" />
        </label>
      </div>

      {/* Status Bar */}
      {/* <div className="status-bar">
        <span className="word-count">Words: {wordCount}</span>
      </div> */}

      {/* Hidden file input for images */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden-input"
        onChange={handleImageUpload}
      />

      {/* Link Modal */}
      {isLinkModalOpen && (
        <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && handleModalClose()}>
          <div className="modal">
            <h3 className="modal-title">Insert Link</h3>
            <div className="form-group">
              <label className="form-label">Link Text:</label>
              <input
                type="text"
                value={linkText}
                onChange={(e) => setLinkText(e.target.value)}
                className="form-input"
                placeholder="Enter link text"
                autoFocus
              />
            </div>
            <div className="form-group">
              <label className="form-label">URL:</label>
              <input
                type="url"
                value={linkUrl}
                onChange={(e) => setLinkUrl(e.target.value)}
                className="form-input"
                placeholder="https://example.com"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && linkUrl.trim() && linkText.trim()) {
                    insertLink()
                  } else if (e.key === 'Escape') {
                    handleModalClose()
                  }
                }}
              />
            </div>
            <div className="modal-actions">
              <button
                onClick={handleModalClose}
                className="btn btn-secondary"
              >
                Cancel
              </button>
              <button
                onClick={insertLink}
                className="btn btn-primary"
                disabled={!linkUrl.trim() || !linkText.trim()}
              >
                Insert Link
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Editable Area */}
      <div
        ref={editorRef}
        contentEditable
        className="editor-content"
        suppressContentEditableWarning={true}
      ></div>
    </div>

  )
}

export default AdvancedRichTextEditor
