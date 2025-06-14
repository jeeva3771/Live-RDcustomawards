import React, { useState, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { CFormInput, CInputGroup, CInputGroupText, CToastBody, CToaster } from '@coreui/react'
import AdvancedRichTextEditor from './Textarea'
import ToastColorSchemesExample from '../../components/Toast'
import CIcon from '@coreui/icons-react'
import { cilSearch } from '@coreui/icons'

function BOMProcessWizard() {
  const [currentStep, setCurrentStep] = useState(0)
  const [selectedItems, setSelectedItems] = useState([])
  const [uploadedFiles, setUploadedFiles] = useState([])
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)
  const [currentFormat, setCurrentFormat] = useState(null)
  const [bomEntries, setBomEntries] = useState([]) // BOM entries for step 3
  const [timeEntries, setTimeEntries] = useState([]) // Time entries for step 4
  const [searchTerm, setSearchTerm] = useState('') // Search functionality

  // New state for collapsible materials
  const [expandedBomMaterials, setExpandedBomMaterials] = useState(new Set([0])) // First material expanded by default
  const [expandedProcessMaterials, setExpandedProcessMaterials] = useState(new Set([0])) // First material expanded by default

  const fileInputRef = useRef(null)
  const textareaRef = useRef(null)
  const imageInputRef = useRef(null)
  const [submit, setSubmit] = useState(false)

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

  // Filter materials based on search term
  const filteredMaterials = materialOptions.filter((material) =>
    material.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const sizeOptions = ["8' x 4'", "4' x 4'"]
  const processOptions = ['LASER CUTTING', 'LASER CUTTING OUTSOURCED']

  // Toggle expanded state for BOM materials
  const toggleBomMaterial = (index) => {
    setExpandedBomMaterials((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        newSet.add(index)
      }
      return newSet
    })
  }

  // Toggle expanded state for Process materials
  const toggleProcessMaterial = (index) => {
    setExpandedProcessMaterials((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        newSet.add(index)
      }
      return newSet
    })
  }

  // Initialize BOM entries when selected items change
  React.useEffect(() => {
    if (selectedItems.length > 0) {
      const newBomEntries = selectedItems.map((material, index) => ({
        id: index,
        material: material,
        size: '',
        timing: '',
        quantity: '',
        process: '',
      }))
      setBomEntries(newBomEntries)
    } else {
      setBomEntries([])
    }
  }, [selectedItems])

  // Initialize time entries when selected items change
  React.useEffect(() => {
    if (selectedItems.length > 0) {
      const newTimeEntries = selectedItems.map((material, index) => ({
        id: index,
        material: material,
        size: '',
        timeTaken: '',
        additionalTime: '',
      }))
      setTimeEntries(newTimeEntries)
    } else {
      setTimeEntries([])
    }
  }, [selectedItems])

  // Update BOM entry
  const updateBomEntry = (entryId, field, value) => {
    setBomEntries((prev) =>
      prev.map((entry) => (entry.id === entryId ? { ...entry, [field]: value } : entry)),
    )
  }

  // Update time entry
  const updateTimeEntry = (entryId, field, value) => {
    setTimeEntries((prev) =>
      prev.map((entry) => (entry.id === entryId ? { ...entry, [field]: value } : entry)),
    )
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
    { id: 'upload', label: 'Upload', icon: '📁' },
    { id: 'recipe', label: 'Recipe', icon: '📝' },
    { id: 'bom', label: 'Bom', icon: '🧾' },
    { id: 'process', label: 'Process Info', icon: '⚙️' },
    { id: 'laser', label: 'Laser', icon: '📋' },
    { id: 'remarks', label: 'Remarks', icon: '💬' },
  ]

  // Function to render previous content for current step only
  const renderPreviousContent = () => {
    const currentFormValues = getValues()

    // Only show previous content for the immediate previous step
    if (currentStep === 0) return null

    return (
      <div className="previous-content-container">
        <h3 className="previous-content-title">Previous Step Summary</h3>
        {currentFormValues.jobNumber && (
          <div className="previous-item">
            <span className="previous-label">📋 Job Number:</span>
            <span className="previous-value">{currentFormValues.jobNumber}</span>
          </div>
        )}
      </div>
    )
  }

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
              className="d-none"
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
      title: 'RECEIPE',
      subtitle: 'PLS SELECT THE LIST OF ITEMS U WANT TO USE TO PROCESS THIS JOB',
      content: (
        <div className="step-content">
          <div className="search-container-top">
            <CInputGroup>
              <CInputGroupText>
                <CIcon icon={cilSearch} />
              </CInputGroupText>
              <CFormInput
                placeholder="Search materials..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="inputFocus"
              />
            </CInputGroup>
          </div>

          <div className="recipe-container">
            <div className="recipe-section">
              <h3>Options</h3>
              <div className="options-list">
                {filteredMaterials.length > 0 ? (
                  filteredMaterials.map((material, index) => (
                    <div
                      key={index}
                      className={`option-item ${selectedItems.includes(material) ? 'selected' : ''}`}
                      onClick={() => toggleItemSelection(material)}
                    >
                      <span>{material}</span>
                      <span className="arrow">›</span>
                    </div>
                  ))
                ) : (
                  <div className="no-results">
                    <div className="no-results-icon">🔍</div>
                    <p>No materials found matching "{searchTerm}"</p>
                  </div>
                )}
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
      title: 'BOM',
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
                    <div className="bom-entry-header" onClick={() => toggleBomMaterial(index)}>
                     <label className="form-label-material">Material Type</label> <h4 className="bom-entry-title">
                        Material {index + 1}

                        <span
                          className="toggle-icon"
                          style={{
                            fontSize: '14px',
                            transition: 'transform 0.3s',
                            transform: expandedBomMaterials.has(index)
                              ? 'rotate(90deg)'
                              : 'rotate(0deg)',
                          }}
                        >
                          ▶
                        </span>
                      </h4>
                    </div>

                    {/* Show first form-group (Material Type) for all materials */}
                    <div className="form-col">
                      <div className="form-group">
                        <input
                          type="text"
                          value={entry.material}
                          className="form-input readonly"
                          readOnly
                        />
                      </div>

                      {/* Collapsible content - show only if expanded */}
                      {expandedBomMaterials.has(index) && (
                        <>
                          <div className="form-group">
                            <label className="form-label">Size </label>
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

                          <div className="form-group">
                            <label className="form-label">Ups</label>
                            <input
                              type="text"
                              value={entry.ups}
                              onChange={(e) => updateBomEntry(entry.id, 'ups', e.target.value)}
                              className="form-input"
                              placeholder="Enter Ups"
                              min="0"
                            />
                          </div>

                          <div className="form-group">
                            <label className="form-label">Quantity</label>
                            <input
                              type="number"
                              value={entry.quantity}
                              onChange={(e) => updateBomEntry(entry.id, 'quantity', e.target.value)}
                              className="form-input"
                              placeholder="Enter Quantity"
                              min="0"
                            />
                          </div>
                        </>
                      )}
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
      title: 'Process',
      subtitle: 'CREATE PROCESS LIST AND PROCESSING INSTRUCTIONS',
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
                    <div className="bom-entry-header" onClick={() => toggleProcessMaterial(index)}>
                      <label className="form-label-material">Material Type</label><h4 className="bom-entry-title">
                        Material {index + 1}
                        <span
                          className="toggle-icon"
                          style={{
                            fontSize: '14px',
                            transition: 'transform 0.3s',
                            transform: expandedProcessMaterials.has(index)
                              ? 'rotate(90deg)'
                              : 'rotate(0deg)',
                          }}
                        >
                          ▶
                        </span>
                      </h4>
                    </div>

                    {/* Show first form-group (Material Type) for all materials */}
                    <div className="form-col">
                      <div className="form-group">
                        <input
                          type="text"
                          value={entry.material}
                          className="form-input readonly"
                          readOnly
                        />
                      </div>

                      {/* Collapsible content - show only if expanded */}
                      {expandedProcessMaterials.has(index) && (
                        <>
                          <div className="form-group">
                            <label className="form-label">Size</label>
                            <select
                              value={entry.size}
                              onChange={(e) => updateBomEntry(entry.id, 'size', e.target.value)}
                              className="form-select readonly"
                              disabled
                            >
                              <option value="">Please Select</option>
                              {sizeOptions.map((size, sizeIndex) => (
                                <option key={sizeIndex} value={size}>
                                  {size}
                                </option>
                              ))}
                            </select>
                          </div>

                          <div className="form-group">
                            <label className="form-label">Ups</label>
                            <input
                              type="text"
                              value={entry.ups}
                              className="form-input readonly"
                              placeholder="Enter Ups"
                              min="0"
                              readOnly
                            />
                          </div>

                          <div className="form-group">
                            <label className="form-label">Quantity</label>
                            <input
                              type="number"
                              value={entry.quantity}
                              // onChange={(e) => updateBomEntry(entry.id, 'quantity', e.target.value)}
                              className="form-input readonly"
                              placeholder="Enter Quantity"
                              min="0"
                              readOnly
                            />
                          </div>

                          <div className="form-group">
                            <label className="form-label">Timing</label>
                            <input
                              type="text"
                              value={entry.timing}
                              onChange={(e) => updateBomEntry(entry.id, 'timing', e.target.value)}
                              className="form-input"
                              placeholder="Enter Timing"
                            />
                          </div>
                        </>
                      )}
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
                {timeEntries.map((entry, index) => (
                  <div key={entry.id} className="bom-entry-card">
                    <h4 className="bom-entry-title">Laser Process {index + 1}</h4>
                    <div className="form-col">
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
                          onChange={(e) => updateTimeEntry(entry.id, 'size', e.target.value)}
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

                      <div className="form-group">
                        <input
                          type="number"
                          min="0"
                          value={entry.timeTaken}
                          onChange={(e) => updateTimeEntry(entry.id, 'timeTaken', e.target.value)}
                          className="form-input"
                          placeholder="Please enter a number"
                          step="0.1"
                        />
                      </div>

                      <div className="form-group">
                        <input
                          type="number"
                          min="0"
                          value={entry.additionalTime}
                          onChange={(e) =>
                            updateTimeEntry(entry.id, 'additionalTime', e.target.value)
                          }
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
      title: 'PRODUCTION REMARKS',
      subtitle: '',
      content: <AdvancedRichTextEditor />,
    },
  ]

  const onSubmit = (data) => {
    const formData = {
      ...data,
      selectedItems,
      bomEntries,
      timeEntries,
      uploadedFiles: uploadedFiles.map((f) => ({ name: f.name, size: f.size })),
    }
    console.log('Form Data:', formData)
  }

  const nextStep = () => {
    setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    setCurrentStep(currentStep - 1)
  }

  const submitWizard = () => {
    setSubmit(true)
    handleSubmit(onSubmit)()
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
            {/* Previous Content Display */}
            {currentStep > 0 && renderPreviousContent()}

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
