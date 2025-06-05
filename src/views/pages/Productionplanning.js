import React, { useState, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { CToastBody, CToaster } from '@coreui/react'
import AdvancedRichTextEditor from './Textarea'
import ToastColorSchemesExample from '../../components/Toast'

function BOMProcessWizard() {
  const [currentStep, setCurrentStep] = useState(0)
  const [selectedItems, setSelectedItems] = useState([])
  const [uploadedFiles, setUploadedFiles] = useState([])
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)
  const [currentFormat, setCurrentFormat] = useState(null)
  const [bomEntries, setBomEntries] = useState([]) // New state for BOM entries

  const fileInputRef = useRef(null)
  const textareaRef = useRef(null)
  const imageInputRef = useRef(null)
  const [submit, setSubmit] =useState(false)

  const { register, handleSubmit, getValues, setValue, watch } = useForm({
    defaultValues: {
      jobNumber: '',
      materialType: '',
      size: '',
      quantity: '',
      process: '',
      timeTaken: '',
      productionRemarks: '',
    },
  })

  const materialOptions = [
    'BLACK ACRYLIC 2MM',
    'BLACK ACRYLIC 3MM',
    'BLACK ACRYLIC 6MM',
    'BLACK ACRYLIC 8MM',
    'BLACK ACRYLIC 12MM',
    'WHITE ACRYLIC 2MM',
  ]

  const sizeOptions = ["8' x 4'", "4' x 4'"]

  const processOptions = ['LASER CUTTING', 'LASER CUTTING OUTSOURCED']

  const emojis = [
    '😊',
    '😂',
    '🥰',
    '😍',
    '🤔',
    '👍',
    '👎',
    '❤️',
    '🔥',
    '💯',
    '🎉',
    '🚀',
    '⭐',
    '✅',
    '❌',
    '⚠️',
    '💡',
    '🎯',
    '📝',
    '📊',
    '🔧',
    '⚙️',
    '🛠️',
    '📋',
    '📁',
    '💼',
    '🏭',
    '🔬',
    '📈',
    '📉',
  ]

  // Initialize BOM entries when selected items change
  React.useEffect(() => {
    if (selectedItems.length > 0) {
      const newBomEntries = selectedItems.map((material, index) => ({
        id: index,
        material: material,
        size: '',
        quantity: '',
        process: '',
        timeTaken: '',
      }))
      setBomEntries(newBomEntries)
    } else {
      setBomEntries([])
    }
  }, [selectedItems])

  // Update BOM entry
  const updateBomEntry = (entryId, field, value) => {
    setBomEntries((prev) =>
      prev.map((entry) => (entry.id === entryId ? { ...entry, [field]: value } : entry)),
    )
  }

  const applyFormat = (format) => {
    const selectedText = textareaRef.current

    // const start = textarea.selectionStart
    // alert(start)
    // const end = textarea.selectionEnd
    // alert(start, end)
    // const selectedText = textarea.value.substring(start, end)

    setCurrentFormat(format)
    setTimeout(() => setCurrentFormat(null), 200)

    let formattedText = ''
    let newCursorPos = start

    switch (format) {
      case 'bold':
        if (selectedText) {
          formattedText = `**${selectedText}**`
          newCursorPos = start + formattedText.length
        } else {
          formattedText = '****'
          newCursorPos = start + 2
        }
        break
      case 'italic':
        if (selectedText) {
          formattedText = `*${selectedText}*`
          newCursorPos = start + formattedText.length
        } else {
          formattedText = '**'
          newCursorPos = start + 1
        }
        break
      case 'underline':
        if (selectedText) {
          formattedText = `<u>${selectedText}</u>`
          newCursorPos = start + formattedText.length
        } else {
          formattedText = '<u></u>'
          newCursorPos = start + 3
        }
        break
      case 'link':
        if (selectedText) {
          formattedText = `[${selectedText}](url)`
          newCursorPos = start + formattedText.length - 4
        } else {
          formattedText = '[link text](url)'
          newCursorPos = start + 1
        }
        break
      case 'bullet':
        formattedText = selectedText ? `\n• ${selectedText}` : '\n• '
        newCursorPos = start + formattedText.length
        break
      case 'numbered':
        formattedText = selectedText ? `\n1. ${selectedText}` : '\n1. '
        newCursorPos = start + formattedText.length
        break
      case 'quote':
        formattedText = selectedText ? `> ${selectedText}` : '> '
        newCursorPos = start + formattedText.length
        break
      case 'line':
        formattedText = '\n---\n'
        newCursorPos = start + formattedText.length
        break
      default:
        formattedText = selectedText
        newCursorPos = end
    }

    const newValue =
      textarea.value.substring(0, start) + formattedText + textarea.value.substring(end)

    setValue('productionRemarks', newValue)

    // Reset cursor position
    setTimeout(() => {
      textarea.focus()
      textarea.setSelectionRange(newCursorPos, newCursorPos)
    }, 0)
  }

  const insertEmoji = (emoji) => {
    const textarea = textareaRef.current

    const start = textarea.selectionStart
    const end = textarea.selectionEnd

    const newValue = textarea.value.substring(0, start) + emoji + textarea.value.substring(end)

    setValue('productionRemarks', newValue)

    setTimeout(() => {
      textarea.focus()
      textarea.setSelectionRange(start + emoji.length, start + emoji.length)
    }, 0)

    setShowEmojiPicker(false)
  }

  const handleImageInsert = (event) => {
    const file = event.target.files[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (e) => {
      const textarea = textareaRef.current

      const start = textarea.selectionStart
      const imageMarkdown = `![${file.name}](${e.target.result})\n`

      const newValue =
        textarea.value.substring(0, start) + imageMarkdown + textarea.value.substring(start)

      setValue('productionRemarks', newValue)

      setTimeout(() => {
        textarea.focus()
        textarea.setSelectionRange(start + imageMarkdown.length, start + imageMarkdown.length)
      }, 0)
    }
    reader.readAsDataURL(file)

    // Reset the input
    event.target.value = ''
  }

  const toggleItemSelection = (item) => {
    setSelectedItems((prev) => {
      if (prev.includes(item)) {
        return prev.filter((i) => i !== item)
      } else {
        return [...prev, item]
      }
    })
  }

  const removeSelectedItem = (item) => {
    setSelectedItems((prev) => prev.filter((i) => i !== item))
  }

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files)
    setUploadedFiles((prev) => [...prev, ...files])
  }

  const removeFile = (index) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index))
  }

  const stepLabels = [
    { id: 'job', label: 'Job Details', icon: '📋' },
    { id: 'recipe', label: 'Recipe', icon: '📝' },
    { id: 'process', label: 'Process Info', icon: '⚙️' },
    { id: 'bom', label: 'BOM Details', icon: '📋' },
    { id: 'upload', label: 'Upload', icon: '📁' },
    { id: 'remarks', label: 'Remarks', icon: '💬' },
  ]

  const steps = [
    {
      title: 'JOB NO',
      subtitle: 'pls enter the JOB No. you are planning for',
      content: (
        <div className="step-content">
          <div className="job-input-container">
            <input
              type="number"
              min="0"
              {...register('jobNumber')}
              className="job-input"
              placeholder="Enter Job Number"
            />
          </div>
        </div>
      ),
    },
    {
      title: 'RECEIPE',
      subtitle: 'PLS SELECT THE LIST OF ITEMS U WANT TO USE TO PROCESS THIS JOB',
      content: (
        <div className="step-content">
          <div className="recipe-container">
            <div className="recipe-section">
              <h3>Options</h3>
              <div className="options-list">
                {materialOptions.map((material, index) => (
                  <div
                    key={index}
                    className={`option-item ${selectedItems.includes(material) ? 'selected' : ''}`}
                    onClick={() => toggleItemSelection(material)}
                  >
                    <span>{material}</span>
                    <span className="arrow">›</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="recipe-section">
              <h3>Selected</h3>
              <div className="selected-list">
                {selectedItems.map((item, index) => (
                  <div key={index} className="selected-item">
                    <span className="remove-btn" onClick={() => removeSelectedItem(item)}>
                      ‹
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
                {selectedItems.length === 0 && <div className="empty-state">No items selected</div>}
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'BOM & PROCESS',
      subtitle: 'CREATE LIST OF ITEMS ITS SIZE AND QTY',
      content: (
        <div className="step-content">
          <div className="bom-form-container">
            {selectedItems.length === 0 ? (
              <div className="empty-state bom-empty-state">
                <p>Please select materials from the Recipe step first.</p>
              </div>
            ) : (
              <div className="bom-entries">
                {bomEntries.map((entry, index) => (
                  <div key={entry.id} className="bom-entry-card">
                    <h4 className="bom-entry-title">Material {index + 1}</h4>
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label">Material Type</label>
                        <input
                          type="text"
                          value={entry.material}
                          className="form-input readonly"
                          readOnly
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label">Size</label>
                        <select
                          value={entry.size}
                          onChange={(e) => updateBomEntry(entry.id, 'size', e.target.value)}
                          className="form-select"
                        >
                          <option value="">Please Select</option>
                          {sizeOptions.map((size, sizeIndex) => (
                            <option key={sizeIndex} value={size}>
                              {size}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label">Quantity</label>
                        <input
                          type="number"
                          value={entry.quantity}
                          onChange={(e) => updateBomEntry(entry.id, 'quantity', e.target.value)}
                          className="form-input"
                          placeholder="Please enter a number"
                          min="0"
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label">Process</label>
                        <select
                          value={entry.process}
                          onChange={(e) => updateBomEntry(entry.id, 'process', e.target.value)}
                          className="form-select"
                        >
                          <option value="">Please Select</option>
                          {processOptions.map((process, processIndex) => (
                            <option key={processIndex} value={process}>
                              {process}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ),
    },
    {
      title: 'BOM LASER PROCESS TIME MANAGEMENT',
      subtitle: 'CREATE LIST OF ITEMS QTY AND TIME TAKEN IN LASER',
      content: (
        <div className="step-content">
          <div className="bom-form-container">
            {selectedItems.length === 0 ? (
              <div className="empty-state bom-empty-state">
                <p>Please select materials from the Recipe step first.</p>
              </div>
            ) : (
              <div className="bom-entries">
                {bomEntries.map((entry, index) => (
                  <div key={entry.id} className="bom-entry-card">
                    <h4 className="bom-entry-title">Laser Process {index + 1}</h4>
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label">Material Type</label>
                        <input
                          type="text"
                          value={entry.material}
                          className="form-input readonly"
                          readOnly
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label">Size</label>
                        <select
                          value={entry.size}
                          onChange={(e) => updateBomEntry(entry.id, 'size', e.target.value)}
                          className="form-select"
                        >
                          <option value="">Please Select</option>
                          {sizeOptions.map((size, sizeIndex) => (
                            <option key={sizeIndex} value={size}>
                              {size}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label"></label>
                        <input
                          type="number"
                          min="0"
                          value={entry.timeTaken}
                          onChange={(e) => updateBomEntry(entry.id, 'timeTaken', e.target.value)}
                          className="form-input"
                          placeholder="Please enter a number"
                          step="0.1"
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label"></label>
                        <input
                          type="number"
                          min="0"
                          value={entry.timeTaken}
                          onChange={(e) => updateBomEntry(entry.id, 'timeTaken', e.target.value)}
                          className="form-input"
                          placeholder="Please enter a number"
                          step="0.1"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ),
    },
    {
      title: 'IMAGE UPLOAD',
      subtitle: '',
      content: (
        <div className="step-content">
          <div className="upload-container">
            <div className="upload-area" onClick={() => fileInputRef.current?.click()}>
              <div className="upload-content">
                <div className="upload-icon">📁</div>
                <button type="button" className="upload-button">
                  BROWSE & UPLOAD
                </button>
                <p className="upload-text">Click to browse files or drag and drop</p>
              </div>
            </div>

            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept="image/*,.pdf,.doc,.docx"
              onChange={handleFileUpload}
              style={{ display: 'none' }}
            />

            {uploadedFiles.length > 0 && (
              <div className="uploaded-files">
                <h4>Uploaded Files ({uploadedFiles.length}):</h4>
                <div className="files-grid">
                  {uploadedFiles.map((file, index) => (
                    <div key={index} className="file-item">
                      <div className="file-info">
                        <span className="file-name">{file.name}</span>
                        <span className="file-size">
                          {parseFloat((file.size / 1024 / 1024).toFixed(2)).toString()} MB
                        </span>
                      </div>
                      <button
                        type="button"
                        className="remove-file"
                        onClick={() => removeFile(index)}
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ),
    },
    {
      title: 'PRODUCTION REMARKS',
      subtitle: '',
      content: (
        // <div className="step-content">
        //   <div className="editor-container">
        //     <div className="editor-toolbar">
        //       <button
        //         type="button"
        //         className={`toolbar-btn ${currentFormat === 'text' ? 'active' : ''}`}
        //         title="Text"
        //         onClick={() => applyFormat('text')}
        //       >
        //         T
        //       </button>
        //       <button
        //         type="button"
        //         className={`toolbar-btn bold-btn ${currentFormat === 'bold' ? 'active' : ''}`}
        //         title="Bold"
        //         onClick={() => applyFormat('bold')}
        //       >
        //         <strong>B</strong>
        //       </button>
        //       <button
        //         type="button"
        //         className={`toolbar-btn italic-btn ${currentFormat === 'italic' ? 'active' : ''}`}
        //         title="Italic"
        //         onClick={() => applyFormat('italic')}
        //       >
        //         <em>I</em>
        //       </button>
        //       <button
        //         type="button"
        //         className={`toolbar-btn underline-btn ${currentFormat === 'underline' ? 'active' : ''}`}
        //         title="Underline"
        //         onClick={() => applyFormat('underline')}
        //       >
        //         <u>U</u>
        //       </button>
        //       <button
        //         type="button"
        //         className={`toolbar-btn ${currentFormat === 'link' ? 'active' : ''}`}
        //         title="Link"
        //         onClick={() => applyFormat('link')}
        //       >
        //         🔗
        //       </button>
        //       <button
        //         type="button"
        //         className={`toolbar-btn ${currentFormat === 'bullet' ? 'active' : ''}`}
        //         title="Bullet List"
        //         onClick={() => applyFormat('bullet')}
        //       >
        //         •
        //       </button>
        //       <button
        //         type="button"
        //         className={`toolbar-btn ${currentFormat === 'numbered' ? 'active' : ''}`}
        //         title="Numbered List"
        //         onClick={() => applyFormat('numbered')}
        //       >
        //         1.
        //       </button>
        //       <button
        //         type="button"
        //         className={`toolbar-btn ${currentFormat === 'quote' ? 'active' : ''}`}
        //         title="Quote"
        //         onClick={() => applyFormat('quote')}
        //       >
        //         "
        //       </button>
        //       <button
        //         type="button"
        //         className={`toolbar-btn ${currentFormat === 'line' ? 'active' : ''}`}
        //         title="Horizontal Line"
        //         onClick={() => applyFormat('line')}
        //       >
        //         —
        //       </button>
        //       <button
        //         type="button"
        //         className="toolbar-btn"
        //         title="Insert Image"
        //         onClick={() => imageInputRef.current?.click()}
        //       >
        //         🖼️
        //       </button>
        //       <button
        //         type="button"
        //         className={`toolbar-btn ${showEmojiPicker ? 'active' : ''}`}
        //         title="Emoji"
        //         onClick={() => setShowEmojiPicker(!showEmojiPicker)}
        //       >
        //         😊
        //       </button>
        //     </div>

        //     {showEmojiPicker && (
        //       <div className="emoji-picker">
        //         <div className="emoji-picker-header">
        //           <span>Select an emoji</span>
        //           <button
        //             type="button"
        //             className="emoji-close"
        //             onClick={() => setShowEmojiPicker(false)}
        //           >
        //             ×
        //           </button>
        //         </div>
        //         <div className="emoji-grid">
        //           {emojis.map((emoji, index) => (
        //             <button
        //               key={index}
        //               type="button"
        //               className="emoji-item"
        //               onClick={() => insertEmoji(emoji)}
        //               title={emoji}
        //             >
        //               {emoji}
        //             </button>
        //           ))}
        //         </div>
        //       </div>
        //     )}

        //     <input
        //       ref={imageInputRef}
        //       type="file"
        //       accept="image/*"
        //       onChange={handleImageInsert}
        //       style={{ display: 'none' }}
        //     />

        //     <textarea
        //       ref={textareaRef}
        //       {...register('productionRemarks')}
        //       className="editor-textarea"
        //       placeholder="Enter your production remarks here..."
        //       rows="8"
        //     />
        //   </div>
        // </div>
        <AdvancedRichTextEditor />
      ),
    },
  ]

  const onSubmit = (data) => {
    const formData = {
      ...data,
      selectedItems,
      bomEntries,
      uploadedFiles: uploadedFiles.map((f) => ({ name: f.name, size: f.size })),
    }
  }

  const nextStep = () => {
    setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    setCurrentStep(currentStep - 1)
  }

  const submitWizard = () => {
    setSubmit(true)
  }

  return (
    <>
      {submit === true && (
        <div>
          <CToaster placement="top-end">
            <ToastColorSchemesExample value={'Form submitted successfully...'} />
          </CToaster>
        </div>
      )}

      <div className="wizard-container">
        {/* Top Progress Steps */}
        <div className="progress-steps-container">
          <div className="progress-line">
            <div
              className="progress-line-fill"
              style={{ width: `${(currentStep / (stepLabels.length - 1)) * 100}%` }}
            />
          </div>
          <div className="progress-steps">
            {stepLabels.map((step, index) => (
              <div
                key={step.id}
                className={`progress-step-item ${index <= currentStep ? 'active' : ''} ${index < currentStep ? 'completed' : ''}`}
              >
                <div className="step-circle">
                  {index < currentStep ? (
                    <span className="step-check">✓</span>
                  ) : (
                    <span className="step-icon">{step.icon}</span>
                  )}
                </div>
                <span className="step-label">{step.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <form onSubmit={handleSubmit(onSubmit)} className="wizard-form">
          <div>
            <div className="step-header">
              <h2 className="step-title">{steps[currentStep].title}</h2>
              {steps[currentStep].subtitle && (
                <p className="step-subtitle">{steps[currentStep].subtitle}</p>
              )}
            </div>

            <div className="step-body">{steps[currentStep].content}</div>
          </div>

          {/* Navigation */}
          <div className="wizard-navigation">
            {currentStep > 0 && (
              <button type="button" onClick={prevStep} className="nav-button prev-button">
                ← PREVIOUS
              </button>
            )}

            <div className="nav-spacer"></div>

            {currentStep < steps.length - 1 ? (
              <button type="button" onClick={nextStep} className="nav-button next-button">
                NEXT →
              </button>
            ) : (
              <button type="submit" className="nav-button submit-button" onClick={submitWizard}>
                SUBMIT
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  )
}

export default BOMProcessWizard
