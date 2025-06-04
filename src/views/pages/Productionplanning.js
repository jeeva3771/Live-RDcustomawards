import React, { useState, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { CToastBody } from '@coreui/react'


function BOMProcessWizard() {
  const [currentStep, setCurrentStep] = useState(0)
  const [selectedItems, setSelectedItems] = useState([])
  const [uploadedFiles, setUploadedFiles] = useState([])
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)
  const [currentFormat, setCurrentFormat] = useState(null)

  const fileInputRef = useRef(null)
  const textareaRef = useRef(null)
  const imageInputRef = useRef(null)

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

  const bomOptions = ['BLACK ACRYLIC 2MM', 'BLACK ACRYLIC 3MM']

  const sizeOptions = ["8' x 4'", "4' x 4'"]

  const processOptions = ['LASER CUTTING', 'LASER CUTTING OUTSOURCED']

  const emojis = [
    '😊', '😂', '🥰', '😍', '🤔', '👍', '👎', '❤️', '🔥', '💯',
    '🎉', '🚀', '⭐', '✅', '❌', '⚠️', '💡', '🎯', '📝', '📊',
    '🔧', '⚙️', '🛠️', '📋', '📁', '💼', '🏭', '🔬', '📈', '📉'
  ]

  const applyFormat = (format) => {
    const textarea = textareaRef.current
    if (!textarea) return

    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const selectedText = textarea.value.substring(start, end)

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
      textarea.value.substring(0, start) +
      formattedText +
      textarea.value.substring(end)

    setValue('productionRemarks', newValue)

    // Reset cursor position
    setTimeout(() => {
      textarea.focus()
      textarea.setSelectionRange(newCursorPos, newCursorPos)
    }, 0)
  }

  const insertEmoji = (emoji) => {
    const textarea = textareaRef.current
    if (!textarea) return

    const start = textarea.selectionStart
    const end = textarea.selectionEnd

    const newValue =
      textarea.value.substring(0, start) +
      emoji +
      textarea.value.substring(end)

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
      if (!textarea) return

      const start = textarea.selectionStart
      const imageMarkdown = `![${file.name}](${e.target.result})\n`

      const newValue =
        textarea.value.substring(0, start) +
        imageMarkdown +
        textarea.value.substring(start)

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
            <div className="form-row">
              <div className="form-group">
                {/* <label className="form-label">Material Type</label> */}
                <select {...register('bomMaterialType')} className="form-select">
                  <option value="">Please Select</option>
                  {bomOptions.map((material, index) => (
                    <option key={index} value={material}>
                      {material}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                {/* <label className="form-label">Size</label> */}
                <select {...register('bomSize')} className="form-select">
                  <option value="">Please Select</option>
                  {sizeOptions.map((size, index) => (
                    <option key={index} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                {/* <label className="form-label">Quantity</label> */}
                <input
                  type="number"
                  {...register('bomQuantity')}
                  className="form-input"
                  placeholder="Please enter a number"
                  min="1"
                />
              </div>

              <div className="form-group">
                {/* <label className="form-label">Process</label> */}
                <select {...register('process')} className="form-select">
                  <option value="">Please Select</option>
                  {processOptions.map((process, index) => (
                    <option key={index} value={process}>
                      {process}
                    </option>
                  ))}
                </select>
              </div>
            </div>
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
            <div className="form-row">
              <div className="form-group">
                {/* <label className="form-label">Material Type</label> */}
                <select {...register('materialType')} className="form-select">
                  <option value="">Please Select</option>
                  {bomOptions.map((material, index) => (
                    <option key={index} value={material}>
                      {material}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                {/* <label className="form-label">Size</label> */}
                <select {...register('size')} className="form-select">
                  <option value="">Please Select</option>
                  {sizeOptions.map((size, index) => (
                    <option key={index} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                {/* <label className="form-label">Quantity</label> */}
                <input
                  type="number"
                  {...register('quantity')}
                  className="form-input"
                  placeholder="Please enter a number"
                  min="1"
                />
              </div>

              <div className="form-group">
                {/* <label className="form-label">Time Taken (hours)</label> */}
                <input
                  type="number"
                  {...register('timeTaken')}
                  className="form-input"
                  placeholder="Please enter a number"
                  min="0"
                  step="0.1"
                />
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'IMAGE UPLOAD & PREVIEW',
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
                        <span className="file-size">{(file.size / 1024 / 1024).toFixed(2)} MB</span>
                      </div>
                      <button type="button" className="remove-file" onClick={() => removeFile(index)}>
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
        <div className="step-content">
          <div className="editor-container">
            <div className="editor-toolbar">
              <button
                type="button"
                className={`toolbar-btn ${currentFormat === 'text' ? 'active' : ''}`}
                title="Text"
                onClick={() => applyFormat('text')}
              >
                T
              </button>
              <button
                type="button"
                className={`toolbar-btn bold-btn ${currentFormat === 'bold' ? 'active' : ''}`}
                title="Bold"
                onClick={() => applyFormat('bold')}
              >
                <strong>B</strong>
              </button>
              <button
                type="button"
                className={`toolbar-btn italic-btn ${currentFormat === 'italic' ? 'active' : ''}`}
                title="Italic"
                onClick={() => applyFormat('italic')}
              >
                <em>I</em>
              </button>
              <button
                type="button"
                className={`toolbar-btn underline-btn ${currentFormat === 'underline' ? 'active' : ''}`}
                title="Underline"
                onClick={() => applyFormat('underline')}
              >
                <u>U</u>
              </button>
              <button
                type="button"
                className={`toolbar-btn ${currentFormat === 'link' ? 'active' : ''}`}
                title="Link"
                onClick={() => applyFormat('link')}
              >
                🔗
              </button>
              <button
                type="button"
                className={`toolbar-btn ${currentFormat === 'bullet' ? 'active' : ''}`}
                title="Bullet List"
                onClick={() => applyFormat('bullet')}
              >
                •
              </button>
              <button
                type="button"
                className={`toolbar-btn ${currentFormat === 'numbered' ? 'active' : ''}`}
                title="Numbered List"
                onClick={() => applyFormat('numbered')}
              >
                1.
              </button>
              <button
                type="button"
                className={`toolbar-btn ${currentFormat === 'quote' ? 'active' : ''}`}
                title="Quote"
                onClick={() => applyFormat('quote')}
              >
                "
              </button>
              <button
                type="button"
                className={`toolbar-btn ${currentFormat === 'line' ? 'active' : ''}`}
                title="Horizontal Line"
                onClick={() => applyFormat('line')}
              >
                —
              </button>
              <button
                type="button"
                className="toolbar-btn"
                title="Insert Image"
                onClick={() => imageInputRef.current?.click()}
              >
                🖼️
              </button>
              <button
                type="button"
                className={`toolbar-btn ${showEmojiPicker ? 'active' : ''}`}
                title="Emoji"
                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
              >
                😊
              </button>
            </div>

            {showEmojiPicker && (
              <div className="emoji-picker">
                <div className="emoji-picker-header">
                  <span>Select an emoji</span>
                  <button
                    type="button"
                    className="emoji-close"
                    onClick={() => setShowEmojiPicker(false)}
                  >
                    ×
                  </button>
                </div>
                <div className="emoji-grid">
                  {emojis.map((emoji, index) => (
                    <button
                      key={index}
                      type="button"
                      className="emoji-item"
                      onClick={() => insertEmoji(emoji)}
                      title={emoji}
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <input
              ref={imageInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageInsert}
              style={{ display: 'none' }}
            />

            <textarea
              ref={textareaRef}
              {...register('productionRemarks')}
              className="editor-textarea"
              placeholder="Enter your production remarks here..."
              rows="8"
            />
          </div>
        </div>
      ),
    },
  ]

  const onSubmit = (data) => {
    const formData = {
      ...data,
      selectedItems,
      uploadedFiles: uploadedFiles.map((f) => ({ name: f.name, size: f.size })),
    }
    console.log('Form submitted:', formData)
    alert('Form submitted successfully!')
  }

  const nextStep = () => {
    setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    setCurrentStep(currentStep - 1)
  }

  return (

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
            <button type="submit" className="nav-button submit-button">
              SUBMIT
            </button>
          )}
        </div>
      </form>

      <style jsx>{`
        .wizard-container {
          max-width: 900px;
          margin: 2rem auto;
          background: #0061ed;
          border-radius: 20px;
          padding: 2rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          min-height: 500px;
        }

        .progress-steps-container {
          margin-bottom: 2rem;
          padding: 1rem 0;
        }

        .progress-line {
          background: rgba(255, 255, 255, 0.3);
          height: 3px;
          border-radius: 2px;
          overflow: hidden;
          margin-bottom: 2rem;
          position: relative;
        }

        .progress-line-fill {
          background: white;
          height: 100%;
          border-radius: 2px;
          transition: width 0.5s ease;
        }

        .progress-steps {
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
        }

        .progress-step-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex: 1;
          position: relative;
        }

        .step-circle {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          border: 2px solid rgba(255, 255, 255, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0.5rem;
          transition: all 0.3s ease;
        }

        .progress-step-item.active .step-circle {
          background: white;
          border-color: white;
          color: #0061ed;
        }

        .progress-step-item.completed .step-circle {
          background: white;
          border-color: white;
          color: #0061ed;
        }

        .step-icon {
          font-size: 1rem;
        }

        .step-check {
          font-size: 1.2rem;
          font-weight: bold;
          color: #0061ed;
        }

        .step-label {
          color: white;
          font-size: 0.75rem;
          text-align: center;
          opacity: 0.8;
          font-weight: 500;
        }

        .progress-step-item.active .step-label,
        .progress-step-item.completed .step-label {
          opacity: 1;
          font-weight: 600;
        }

        .wizard-form {
          background: white;
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
          position: relative;
        }

        .step-header {
          text-align: center;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 2px solid #f1f5f9;
        }

        .step-title {
          color: #374151;
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .step-subtitle {
          color: #6b7280;
          font-size: 0.9rem;
          margin: 0.5rem 0 0 0;
          text-transform: uppercase;
          letter-spacing: 0.3px;
        }

        .step-content {
          max-width: 600px;
          margin: 0 auto;
        }

        .job-input-container {
          text-align: center;
          margin: 2rem 0;
        }

        .job-input {
          width: 100%;
          max-width: 500px;
          padding: 1rem 1.5rem;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          font-size: 1.1rem;
          text-align: center;
          transition: all 0.3s ease;
          background: white;
          color: #374151;
        }

        .job-input:focus {
          outline: none;
          border-color: #0061ed;
          box-shadow: 0 0 0 3px rgba(0, 97, 237, 0.1);
        }

        .bom-form-container {
          max-width: 100%;
          margin: 0 auto;
          padding: 0;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
          width: 100%;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          width: 100%;
          min-width: 0;
        }

        .form-label {
          color: #374151;
          font-weight: 600;
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
        }

        .form-select,
        .form-input {
          padding: 0.875rem 1rem;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          font-size: 1rem;
          transition: all 0.3s ease;
          background: white;
          color: #374151;
          width: 100%;
          min-width: 0;
          box-sizing: border-box;
        }

        .form-select:focus,
        .form-input:focus {
          outline: none;
          border-color: #0061ed;
          box-shadow: 0 0 0 3px rgba(0, 97, 237, 0.1);
        }

        .recipe-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-top: 1rem;
        }

        .recipe-section h3 {
          color: #374151;
          font-size: 1.1rem;
          margin-bottom: 1rem;
          padding: 0.5rem 1rem;
          background: #f9fafb;
          border-radius: 8px;
          text-align: center;
          border: 2px dashed #d1d5db;
        }

        .options-list,
        .selected-list {
          border: 2px dashed #d1d5db;
          border-radius: 8px;
          padding: 1rem;
          min-height: 200px;
          background: #f9fafb;
        }

        .option-item,
        .selected-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem 1rem;
          margin-bottom: 0.5rem;
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .option-item:hover {
          border-color: #0061ed;
          transform: translateX(4px);
        }

        .option-item.selected {
          background: #dbeafe;
          border-color: #60a5fa;
        }

        .selected-item {
          background: #ecfdf5;
          border-color: #86efac;
        }

        .selected-item:hover {
          transform: translateX(-4px);
        }

        .arrow,
        .remove-btn {
          color: #6b7280;
          font-weight: bold;
          font-size: 1.2rem;
        }

        .remove-btn {
          color: #ef4444;
          cursor: pointer;
        }

        .empty-state {
          text-align: center;
          color: #9ca3af;
          font-style: italic;
          padding: 2rem;
        }

        .upload-container {
          text-align: center;
        }

        .upload-area {
          border: 3px dashed #d1d5db;
          border-radius: 12px;
          padding: 3rem 2rem;
          background: #f9fafb;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-bottom: 2rem;
        }

        .upload-area:hover {
          border-color: #0061ed;
          background: #f0f9ff;
        }

        .upload-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .upload-icon {
          font-size: 3rem;
          color: #6b7280;
        }

        .upload-button {
          background: #0061ed;
          color: white;
          border: none;
          padding: 0.75rem 2rem;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .upload-button:hover {
          background: #0052cc;
          transform: translateY(-2px);
        }

        .upload-text {
          color: #6b7280;
          margin: 0;
        }

        .uploaded-files {
          text-align: left;
          background: #f9fafb;
          padding: 1.5rem;
          border-radius: 12px;
          border: 2px solid #e5e7eb;
        }

        .uploaded-files h4 {
          margin: 0 0 1rem 0;
          color: #374151;
          font-size: 1.1rem;
          font-weight: 600;
        }

        .files-grid {
          display: grid;
          gap: 0.75rem;
        }

        .file-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          background: white;
          border-radius: 8px;
          margin-bottom: 0;
          border: 1px solid #e5e7eb;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
          transition: all 0.2s ease;
        }

        .file-item:hover {
          border-color: #0061ed;
          box-shadow: 0 4px 8px rgba(0, 97, 237, 0.1);
        }

        .file-info {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          flex: 1;
        }

        .file-name {
          color: #374151;
          font-weight: 500;
          word-break: break-all;
        }

        .file-size {
          color: #6b7280;
          font-size: 0.875rem;
        }

        .remove-file {
          background: #ef4444;
          color: white;
          border: none;
          width: 28px;
          height: 28px;
          cursor: pointer;
        }

        .remove-file:hover {
          background: #dc2626;
          transform: scale(1.1);
        }

        .editor-container {
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          overflow: visible;
          position: relative;
        }

        .editor-toolbar {
          background: #f9fafb;
          padding: 0.75rem;
          border-bottom: 1px solid #e5e7eb;
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .toolbar-btn {
          background: white;
          border: 1px solid #d1d5db;
          border-radius: 4px;
          padding: 0.375rem 0.75rem;
          cursor: pointer;
          transition: all 0.2s ease;
          font-size: 0.875rem;
        }

        .toolbar-btn:hover {
          background: #e5e7eb;
          border-color: #9ca3af;
        }

        .toolbar-btn:active,
        .toolbar-btn.active {
          background: #0061ed;
          color: white;
          border-color: #0061ed;
          transform: scale(0.95);
        }

        .bold-btn:active,
        .italic-btn:active,
        .underline-btn:active,
        .bold-btn.active,
        .italic-btn.active,
        .underline-btn.active {
          background: #0061ed;
          color: white;
          border-color: #0061ed;
        }

        .emoji-picker {
          background: white;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
          position: absolute;
          top: 100%;
          right: 0;
          z-index: 1000;
          width: 280px;
          max-height: 300px;
          overflow: hidden;
        }

        .emoji-picker-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem 1rem;
          background: #f9fafb;
          border-bottom: 1px solid #e5e7eb;
          font-size: 0.875rem;
          font-weight: 600;
          color: #374151;
        }

        .emoji-close {
          background: #ef4444;
          color: white;
          border: none;
          border-radius: 50%;
          width: 24px;
          height: 24px;
          cursor: pointer;
          font-size: 1rem;
          line-height: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .emoji-close:hover {
          background: #dc2626;
        }

        .emoji-grid {
          display: grid;
          grid-template-columns: repeat(8, 1fr);
          gap: 0.25rem;
          padding: 0.75rem;
          max-height: 200px;
          overflow-y: auto;
        }

        .emoji-item {
          background: transparent;
          border: 1px solid transparent;
          border-radius: 4px;
          padding: 0.5rem;
          cursor: pointer;
          font-size: 1.25rem;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
        }

        .emoji-item:hover {
          background: #f3f4f6;
          border-color: #d1d5db;
          transform: scale(1.1);
        }

        .emoji-item:active {
          background: #e5e7eb;
          transform: scale(0.95);
        }

        .editor-textarea {
          width: 100%;
          border: none;
          padding: 1rem;
          font-size: 1rem;
          font-family: inherit;
          resize: vertical;
          outline: none;
          background: white;
          box-sizing: border-box;
        }

        .wizard-navigation {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 2rem;
          padding-top: 1.5rem;
          border-top: 2px solid #f1f5f9;
        }

        .nav-spacer {
          flex: 1;
        }

        .nav-button {
          padding: 0.875rem 2rem;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .prev-button {
          background: #f3f4f6;
          color: #0061ed;
          border: 2px solid #0061ed;
        }

        .prev-button:hover {
          background: #0061ed;
          color: white;
          transform: translateY(-2px);
        }

        .next-button,
        .submit-button {
          background: #0061ed;
          color: white;
        }

        .next-button:hover,
        .submit-button:hover {
          background: #0052cc;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 97, 237, 0.3);
        }

        .submit-button {
          background: linear-gradient(135deg, #10b981, #059669);
        }

        .submit-button:hover {
          background: linear-gradient(135deg, #059669, #047857);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .wizard-container {
            margin: 1rem;
            padding: 1rem;
          }

          .wizard-form {
            padding: 1.5rem;
          }

          .step-title {
            font-size: 1.25rem;
          }

          .bom-form-container {
            width: 100%;
            overflow: hidden;
          }

          .form-row {
            grid-template-columns: 1fr;
            gap: 1rem;
            width: 100%;
          }

          .form-group {
            width: 100%;
            min-width: 0;
          }

          .form-select,
          .form-input {
            width: 100%;
            min-width: 0;
            box-sizing: border-box;
          }

          .recipe-container {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .wizard-navigation {
            flex-direction: column;
            gap: 1rem;
          }

          .nav-spacer {
            display: none;
          }

          .nav-button {
            width: 100%;
          }

          .progress-steps {
            flex-wrap: wrap;
            gap: 0.5rem;
            justify-content: center;
          }

          .progress-step-item {
            flex: none;
            min-width: 80px;
          }

          .step-circle {
            width: 30px;
            height: 30px;
          }

          .step-label {
            font-size: 0.65rem;
          }

          .editor-toolbar {
            flex-wrap: wrap;
            gap: 0.25rem;
          }

          .toolbar-btn {
            padding: 0.25rem 0.5rem;
            font-size: 0.75rem;
          }

          .editor-container {
            position: relative;
            overflow: visible;
          }

          .emoji-picker {
            width: 240px;
            right: -20px;
          }

          .emoji-grid {
            grid-template-columns: repeat(6, 1fr);
            padding: 0.5rem;
          }

          .emoji-item {
            width: 28px;
            height: 28px;
            font-size: 1.1rem;
          }

          .uploaded-files {
            padding: 1rem;
          }

          .file-item {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.75rem;
            padding: 0.75rem;
          }

          .file-info {
            width: 100%;
          }

          .remove-file {
            align-self: flex-end;
            margin-left: 0;
          }
        }

        @media (max-width: 480px) {
          .wizard-container {
            margin: 0.5rem;
            padding: 0.75rem;
          }

          .wizard-form {
            padding: 1rem;
          }

          .step-title {
            font-size: 1.1rem;
          }

          .step-subtitle {
            font-size: 0.8rem;
          }

          .step-content {
            max-width: 100%;
          }

          .bom-form-container {
            padding: 0;
            margin: 0;
          }

          .form-row {
            gap: 0.75rem;
            margin-bottom: 1rem;
          }

          .form-select,
          .form-input {
            padding: 0.75rem 0.875rem;
            font-size: 0.9rem;
          }

          .upload-area {
            padding: 2rem 1rem;
          }

          .upload-icon {
            font-size: 2rem;
          }

          .job-input {
            font-size: 1rem;
            padding: 0.875rem 1rem;
          }

          .progress-steps {
            justify-content: center;
          }

          .progress-step-item {
            min-width: 70px;
          }

          .step-circle {
            width: 28px;
            height: 28px;
          }

          .step-icon {
            font-size: 0.875rem;
          }

          .step-check {
            font-size: 1rem;
          }

          .step-label {
            font-size: 0.6rem;
          }

          .nav-button {
            padding: 0.75rem 1.5rem;
            font-size: 0.9rem;
          }

          .recipe-container {
            gap: 1rem;
          }

          .options-list,
          .selected-list {
            min-height: 150px;
            padding: 0.75rem;
          }

          .option-item,
          .selected-item {
            padding: 0.5rem 0.75rem;
            font-size: 0.875rem;
          }

          .editor-textarea {
            font-size: 0.9rem;
            padding: 0.875rem;
          }

          .emoji-picker {
            width: 200px;
            right: -10px;
            max-height: 250px;
          }

          .emoji-grid {
            grid-template-columns: repeat(5, 1fr);
            padding: 0.5rem;
          }

          .emoji-item {
            width: 24px;
            height: 24px;
            font-size: 1rem;
          }

          .emoji-picker-header {
            padding: 0.5rem;
            font-size: 0.75rem;
          }

          .toolbar-btn {
            padding: 0.25rem 0.4rem;
            font-size: 0.7rem;
          }

          .file-item {
            padding: 0.5rem;
          }

          .file-name {
            font-size: 0.875rem;
          }

          .file-size {
            font-size: 0.75rem;
          }

          .remove-file {
            width: 24px;
            height: 24px;
            font-size: 1rem;
          }
        }

        @media (max-width: 360px) {
          .wizard-container {
            margin: 0.25rem;
            padding: 0.5rem;
          }

          .progress-steps {
            gap: 0.25rem;
          }

          .progress-step-item {
            min-width: 60px;
          }

          .step-circle {
            width: 24px;
            height: 24px;
          }

          .step-icon {
            font-size: 0.75rem;
          }

          .step-check {
            font-size: 0.875rem;
          }

          .step-label {
            font-size: 0.55rem;
          }

          .bom-form-container {
            width: 100%;
          }

          .form-select,
          .form-input {
            padding: 0.625rem 0.75rem;
            font-size: 0.875rem;
          }
        }
      `}</style>
    </div>
  )
}

export default BOMProcessWizard
