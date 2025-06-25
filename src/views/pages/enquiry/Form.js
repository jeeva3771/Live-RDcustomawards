import React, { useState, useRef, useEffect } from 'react'
import {
  ChevronLeft,
  ChevronRight,
  Upload,
  Check,
  ChevronDown,
  ChevronUp,
  User,
  Package,
  Truck,
  X,
  Image,
  CreditCard,
} from 'lucide-react'

const SimpleOrderWizard = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [uploadedImages, setUploadedImages] = useState([])
  const fileInputRef = useRef(null)
  const [dragActive, setDragActive] = useState(false)

  const [formData, setFormData] = useState({
    clientDetails: {
      client: '',
      email: '',
      contactNo: '',
    },
    imageUpload: {
      productImages: [],
    },
    productDetails: {
      productName: '',
      quantity: '',
      size: '',
    },
    deliveryDetails: {
      deliveryDate: '',
      deliveryLocation: '',
      deliveryMode: '',
    },
    payment: {
      paymentType: '',
    },

  })

  const [completedSteps, setCompletedSteps] = useState(new Set())
  const [expandedSteps, setExpandedSteps] = useState(new Set())

  // Effect to expand all previous steps by default
  useEffect(() => {
    if (currentStep > 0) {
      const previousSteps = Array.from({ length: currentStep }, (_, i) => i)
      setExpandedSteps(new Set(previousSteps))
    }
  }, [currentStep])

  const formSteps = [
    {
      id: 'clientDetails',
      title: 'Client Details',
      icon: User,
      fields: [

        {
          name: 'client',
          label: 'Client Name',
          type: 'text',
          required: true,
          placeholder: 'Enter client name',
        },
        {
          name: 'email',
          label: 'Email',
          type: 'email',
          required: true,
          placeholder: 'Enter email',
        },
        {
          name: 'contactNo',
          label: 'Contact Number',
          type: 'tel',
          required: true,
          placeholder: 'Enter contact number',
        },
        {
          name: 'enquiryOrigin',
          label: 'Enquiry Origin',
          type: 'text',
          required: true,
          placeholder: 'Enter enquiry origin',
        },
        {
          name: 'noOfOptionsRequired',
          label: 'Number of Options Required',
          type: 'number',
          required: true,
          placeholder: 'Enter number of options required',
        },
      ],
    },
    {
      id: 'imageUpload',
      title: 'Image Upload',
      icon: Image,
      fields: [
        {
          name: 'productImages',
          label: 'Product Images',
          type: 'image-upload',
          required: false,
        },
      ],
    },
    {
      id: 'productDetails',
      title: 'Product Details',
      icon: Package,
      fields: [
        {
          name: 'productName',
          label: 'Product Name / Theme',
          type: 'text',
          required: true,
          placeholder: 'Enter product name',
        },
        {
          name: 'quantity',
          label: 'Quantity',
          type: 'number',
          required: true,
          placeholder: 'Enter quantity',
        },
        {
          name: 'size',
          label: 'Size',
          type: 'text',
          required: true,
          placeholder: 'Enter size',
        },
        {
          name: 'budget',
          label: 'Budget',
          type: 'number',
          required: true,
          placeholder: 'Enter budget',
        },
        {
          name: 'preferedMaterial',
          label: 'Prefered Material',
          type: 'text',
          required: true,
          placeholder: 'Enter prefered material',
        },
      ],
    },
    {
      id: 'deliveryDetails',
      title: 'Delivery Details',
      icon: Truck,
      fields: [
        {
          name: 'deliveryDate',
          label: 'Delivery Date',
          type: 'date',
          required: true,
        },
        {
          name: 'deliveryLocation',
          label: 'Delivery Location',
          type: 'textarea',
          required: true,
          placeholder: 'Enter delivery location...',
        },
        {
          name: 'deliveryMode',
          label: 'Delivery Mode',
          type: 'radio',
          required: true,
          options: [
            { value: 'Hand Delivery', label: 'Hand Delivery' },
            { value: 'Courier', label: 'Courier' },
            { value: 'Self Pickup', label: 'Self Pickup' },
            { value: 'Express Delivery', label: 'Express Delivery' },
          ],
        },
        {
          name: 'briefing',
          label: 'Briefing',
          type: 'textarea',
          required: true,
          placeholder: 'Enter briefing...',
        },
      ],
    },
    {
      id: 'payment',
      title: 'Payment',
      icon: CreditCard,
      fields: [
        {
          name: 'paymentType',
          label: 'Payment Terms',
          type: 'radio',
          required: true,
          options: [
            { value: '100% Advance', label: '100% Advance' },
            { value: '50% advance & Bal before dispatch & delivery', label: '50% Advance & Bal before dispatch & delivery' },
            { value: 'Corporate Credit', label: 'Corporate Credit' },
          ],
        },
      ],
    },
  ]

  const handleInputChange = (stepId, fieldName, value) => {
    setFormData((prev) => ({
      ...prev,
      [stepId]: {
        ...prev[stepId],
        [fieldName]: value,
      },
    }))
  }

  const handleImageUpload = (files) => {
    const newImages = Array.from(files).slice(0, 5 - uploadedImages.length)
    const imageUrls = newImages.map((file) => URL.createObjectURL(file))
    setUploadedImages((prev) => [...prev, ...imageUrls])
    handleInputChange('imageUpload', 'productImages', [...uploadedImages, ...imageUrls])
  }

  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleImageUpload(e.dataTransfer.files)
    }
  }

  const removeImage = (index) => {
    const newImages = uploadedImages.filter((_, i) => i !== index)
    setUploadedImages(newImages)
    handleInputChange('imageUpload', 'productImages', newImages)
  }

  const validateStep = (stepIndex) => {
    const step = formSteps[stepIndex]
    if (!step) return true

    const stepData = formData[step.id] || {}

    return step.fields.every((field) => {
      if (!field || field.type === 'header' || field.type === 'image-upload') return true

      if (field.required) {
        const value = stepData[field.name]
        return value && value.toString().trim() !== ''
      }
      return true
    })
  }

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCompletedSteps((prev) => new Set([...prev, currentStep]))
      if (currentStep < formSteps.length - 1) {
        setCurrentStep(currentStep + 1)
      }
    }
  }

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleStepClick = (stepIndex) => {
    if (stepIndex <= currentStep || completedSteps.has(stepIndex)) {
      setCurrentStep(stepIndex)
    }
  }

  const toggleStepExpansion = (stepIndex) => {
    setExpandedSteps((prev) => {
      const newExpanded = new Set(prev)
      if (newExpanded.has(stepIndex)) {
        newExpanded.delete(stepIndex)
      } else {
        newExpanded.add(stepIndex)
      }
      return newExpanded
    })
  }

  const handleSubmit = () => {
    if (validateStep(currentStep)) {
      setCompletedSteps((prev) => new Set([...prev, currentStep]))
      alert('Form submitted successfully!')
    }
  }

  const isCurrentStepValid = validateStep(currentStep)

  const renderField = (field, stepId) => {
    if (!field || !stepId) return null

    const stepData = formData[stepId] || {}

    if (field.type === 'radio') {
      return (
        <div key={field.name} className="col-12 mb-4">
          <label className="form-label fw-medium fs-6 mb-3">
            {field.label}
            {field.required && <span className="text-danger ms-1">*</span>}
          </label>
          <div className="row g-2">
            {field.options &&
              field.options.map((option) => (
                <div key={option.value} className="col-12 col-sm-6 col-md-4">
                  <label
                    className="form-check-container border rounded p-3 h-100 d-block"
                    htmlFor={`${field.name}_${option.value.replace(/\s+/g, '_')}`}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name={field.name}
                        id={`${field.name}_${option.value.replace(/\s+/g, '_')}`}
                        value={option.value}
                        checked={stepData[field.name] === option.value}
                        onChange={(e) => handleInputChange(stepId, field.name, e.target.value)}
                        required={field.required}
                      />
                      <span className="form-check-label fw-medium">{option.label}</span>
                    </div>
                  </label>
                </div>
              ))}
          </div>
        </div>
      )
    }

    if (field.type === 'image-upload') {
      return (
        <div key={field.name} className="col-12 mb-4">
          <div
            className={`upload-area border-2 border-dashed rounded-lg p-4 text-center position-relative ${
              dragActive ? 'border-primary bg-light' : 'border-muted'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            style={{
              cursor: 'pointer',
              minHeight: '200px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: dragActive ? '#f8f9fa' : '#ffffff',
              transition: 'all 0.3s ease',
            }}
          >
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept="image/*"
              onChange={(e) => handleImageUpload(e.target.files)}
              className="d-none"
            />

            <button
              type="button"
              className="btn btn-primary px-4 py-2 mb-3"
              style={{
                fontSize: '1rem',
                fontWeight: '600',
                backgroundColor: '#0d6efd',
                border: 'none',
              }}
              disabled={uploadedImages.length >= 5}
            >
              BROWSE & UPLOAD
            </button>

            <p className="text-muted mb-0" style={{ fontSize: '0.9rem' }}>
              Click to browse files or drag and drop
            </p>
            <p className="small text-muted mt-2">
              Maximum 5 images allowed • Supported formats: JPG, PNG, GIF
            </p>
          </div>

          {uploadedImages.length > 0 && (
            <div className="mt-4">
              <h5 className="fw-semibold mb-3">Uploaded Images ({uploadedImages.length})</h5>
              <div className="row g-3">
                {uploadedImages.map((image, index) => (
                  <div key={index} className="col-6 col-md-4 col-lg-3">
                    <div className="position-relative">
                      <img
                        src={image}
                        alt={`Product ${index + 1}`}
                        className="img-fluid rounded border"
                        style={{ aspectRatio: '1/1', objectFit: 'cover' }}
                      />
                      <button
                        type="button"
                        className="btn btn-danger btn-sm position-absolute top-0 end-0 m-1"
                        onClick={(e) => {
                          e.stopPropagation()
                          removeImage(index)
                        }}
                        style={{ padding: '2px 4px', color: 'white', display: 'flex' }}
                      >
                        <X size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )
    }

    if (field.type === 'textarea') {
      return (
        <div key={field.name} className="col-12 mb-4">
          <label htmlFor={field.name} className="form-label fw-medium fs-6">
            {field.label}
            {field.required && <span className="text-danger ms-1">*</span>}
          </label>
          <textarea
            className="form-control form-control-lg"
            id={field.name}
            name={field.name}
            rows="4"
            value={stepData[field.name] || ''}
            onChange={(e) => handleInputChange(stepId, field.name, e.target.value)}
            placeholder={field.placeholder || `Enter ${field.label.toLowerCase()}`}
            required={field.required}
          />
        </div>
      )
    }

    const containerClass = 'col-12 mb-4'

    return (
      <div key={field.name} className={containerClass}>
        <label htmlFor={field.name} className="form-label fw-medium fs-6">
          {field.label}
          {field.required && <span className="text-danger ms-1">*</span>}
        </label>
        <input
          type={field.type}
          className="form-control form-control-lg"
          id={field.name}
          name={field.name}
          value={stepData[field.name] || ''}
          onChange={(e) => handleInputChange(stepId, field.name, e.target.value)}
          placeholder={field.placeholder}
          required={field.required}
          step={field.type === 'number' ? '0.01' : undefined}
        />
      </div>
    )
  }

  return (
    <>
      <style>{`
        .step-indicator {
          width: 65px;
          height: 65px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 3px solid;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .step-indicator.completed {
          background-color: #198754;
          border-color: #198754;
          color: white;
        }

        .step-indicator.current {
          background-color: #0061ed;
          border-color: #0061ed;
          color: white;
        }

        .step-indicator.pending {
          background-color: #f8f9fa;
          border-color: #dee2e6;
          color: #6c757d;
          cursor: not-allowed;
        }

        .step-indicator.clickable:hover:not(.pending) {
          transform: scale(1.0);
        }

        .previous-step-header {
          background-color: #f8f9fa;
          border: none;
          width: 100%;
          text-align: left;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }

        .previous-step-header:hover {
          background-color: #e9ecef;
        }

        .status-dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          display: inline-block;
          margin-right: 0.5rem;
        }

        .status-dot.completed {
          background-color: #198754;
        }

        .status-dot.pending {
          background-color: #6c757d;
        }

        .form-field-column .mb-4:last-child {
          margin-bottom: 0 !important;
        }

        .card {
          height: fit-content;
        }

        .steps-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.8rem;
          max-width: 100%;
          overflow-x: auto;
          padding: 0 10px;
        }

        .step-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          min-width: 100px;
          flex-shrink: 0;
        }

        .bg-blue {
          background-color: #0061ed;
        }

        .clr-white {
          color: white;
        }

        .clr-blue {
          color: #0061ed;
        }

        .clr-hover:hover {
          background-color: #0061ed !important;
          color: white !important;
        }

        .border-dashed {
          border-style: dashed !important;
        }

        .bg-light {
          background-color: #f8f9fa !important;
        }

        .form-check-container {
          transition: all 0.2s ease;
        }

        .form-check-container:hover {
          background-color: #f8f9fa;
        }

        .form-check-container input:checked + span {
          color: #0061ed;
          font-weight: 600;
        }

        .form-check-container input:checked {
          background-color: #0061ed;
          border-color: #0061ed;
        }

        .upload-area:hover {
          background-color: #f8f9fa !important;
          border-color: #0d6efd !important;
        }

        .upload-area:active {
          transform: scale(0.98);
        }

        .summary-header-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .step-indicator {
            width: 55px;
            height: 55px;
          }

          .steps-container {
            gap: 0.6rem;
            justify-content: flex-start;
            padding: 0 5px;
          }

          .step-item {
            min-width: 90px;
          }

          .card-body {
            padding: 1.5rem !important;
          }

          .col-sm-6 {
            flex: 0 0 auto;
            width: 100%;
          }

          .col-md-4 {
            flex: 0 0 auto;
            width: 50%;
          }

          .d-flex.justify-content-between {
            flex-direction: column;
            gap: 1rem;
          }

          .d-flex.justify-content-between > button {
            width: 100%;
            justify-content: center;
          }

          .summary-header-actions {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }
        }

        @media (max-width: 576px) {
          .step-indicator {
            width: 50px;
            height: 50px;
          }

          .step-item {
            min-width: 80px;
          }

          .card-body {
            padding: 1rem !important;
          }

          .col-6 {
            flex: 0 0 auto;
            width: 100%;
          }

          .col-md-4, .col-sm-6 {
            flex: 0 0 auto;
            width: 100%;
          }
        }
      `}</style>

      <div className="container-fluid bg-light min-vh-100">
        <div className="container py-4 py-md-5">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="mb-4 mb-md-5 text-center">
                <h1 className="display-5 fw-bold text-dark mb-3">Enquiry Form</h1>
                <p className="text-muted fs-5">Complete all steps to submit your order</p>
              </div>

              <div className="mb-4 mb-md-5">
                <div className="steps-container">
                  {formSteps.map((step, index) => {
                    const Icon = step.icon
                    const isCompleted = completedSteps.has(index)
                    const isCurrent = index === currentStep
                    const isClickable = index <= currentStep || completedSteps.has(index)

                    return (
                      <div key={step.id} className="step-item">
                        <button
                          onClick={() => isClickable && handleStepClick(index)}
                          disabled={!isClickable}
                          className={`step-indicator ${
                            isCompleted ? 'completed' : isCurrent ? 'current' : 'pending'
                          } ${isClickable ? 'clickable' : ''} mb-3`}
                        >
                          {isCompleted ? <Check size={20} /> : <Icon size={20} />}
                        </button>
                        <div className="text-center">
                          <p
                            className={`fw-medium mb-1 ${
                              isCurrent ? 'clr-blue' : isCompleted ? 'text-success' : 'text-muted'
                            }`}
                            style={{ fontSize: '13px' }}
                          >
                            Step {index + 1}
                          </p>
                          <p
                            className={`small mb-0 ${
                              isCurrent ? 'clr-blue' : isCompleted ? 'text-success' : 'text-muted'
                            }`}
                            style={{ fontSize: '12px', lineHeight: '1.3', fontWeight: '500' }}
                          >
                            {step.title}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {currentStep > 0 && (
                <div className="mb-4">
                  <div className="card shadow-sm">
                    <div className="card-body">
                      <h3 className="h5 fw-semibold text-dark mb-4">Previous Steps Summary</h3>

                      {formSteps.slice(0, currentStep).map((step, index) => {
                        const isExpanded = expandedSteps.has(index)

                        return (
                          <div key={step.id} className="border rounded mb-3">
                            <button
                              className="previous-step-header w-100 p-3 d-flex justify-content-between align-items-center"
                              type="button"
                              onClick={() => toggleStepExpansion(index)}
                            >
                              <div className="d-flex align-items-center">
                                <span
                                  className={`status-dot ${
                                    completedSteps.has(index) ? 'completed' : 'pending'
                                  }`}
                                ></span>
                                <span
                                  className={`fw-medium ${
                                    completedSteps.has(index) ? 'text-success' : 'text-muted'
                                  }`}
                                >
                                  {step.title}
                                </span>
                                <span className="text-muted small ms-2">(Step {index + 1})</span>
                              </div>
                              <div className="summary-header-actions">
                                <button
                                  className="btn btn-outline-primary btn-sm clr-hover"
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    handleStepClick(index)
                                  }}
                                >
                                  <ChevronLeft size={16} className="me-1" />
                                  Go back to edit this step
                                </button>
                                <span className="text-muted small d-none d-sm-inline">
                                  {isExpanded ? 'Hide Details' : 'Show Details'}
                                </span>
                                {isExpanded ? (
                                  <ChevronUp size={18} className="text-muted" />
                                ) : (
                                  <ChevronDown size={18} className="text-muted" />
                                )}
                              </div>
                            </button>

                            {isExpanded && (
                              <div className="border-top p-3">
                                {/* Show uploaded images if this is the image upload step */}
                                {step.id === 'imageUpload' && uploadedImages.length > 0 && (
                                  <div className="mb-4">
                                    <h6 className="fw-semibold mb-3">
                                      Uploaded Images ({uploadedImages.length})
                                    </h6>
                                    <div className="row g-2">
                                      {uploadedImages.map((image, index) => (
                                        <div key={index} className="col-6 col-sm-4 col-md-3">
                                          <img
                                            src={image}
                                            alt={`Product ${index + 1}`}
                                            className="img-fluid rounded border"
                                            style={{ aspectRatio: '1/1', objectFit: 'cover' }}
                                          />
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )}

                                <div className="row g-3">
                                  {step.fields
                                    .filter(
                                      (field) =>
                                        field.type !== 'header' && field.type !== 'image-upload',
                                    )
                                    .map((field) => {
                                      const value = formData[step.id][field.name]
                                      let displayValue = ''

                                      if (Array.isArray(value)) {
                                        displayValue =
                                          value.length > 0 ? value.join(', ') : 'None selected'
                                      } else {
                                        displayValue = value || ''
                                      }

                                      return (
                                        <div key={field.name} className="col-12 col-md-6">
                                          <div>
                                            <small className="text-muted fw-medium">
                                              {field.label}:
                                            </small>
                                            <span className="fw-medium text-dark ms-2">
                                              {displayValue ? (
                                                displayValue
                                              ) : (
                                                <em className="text-muted">Not filled</em>
                                              )}
                                            </span>
                                          </div>
                                        </div>
                                      )
                                    })}
                                </div>
                              </div>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              )}

              <div className="card shadow-sm">
                <div className="card-body p-3 p-md-5">
                  <h2 className="h4 fw-semibold text-dark mb-4 text-center">
                    {formSteps[currentStep].title}
                  </h2>

                  <div className="row justify-content-center">
                    <div className="col-12 col-md-10">
                      <div className="form-field-column">
                        <div className="row">
                          {formSteps[currentStep].fields.map((field) =>
                            renderField(field, formSteps[currentStep].id),
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex flex-column flex-md-row justify-content-between mt-4 mt-md-5 pt-4 border-top">
                    <button
                      onClick={handlePrev}
                      disabled={currentStep === 0}
                      className={`btn ${
                        currentStep === 0 ? 'btn-outline-secondary' : 'btn-secondary'
                      } d-flex align-items-center justify-content-center px-4 py-2 mb-3 mb-md-0`}
                      style={{
                        visibility: currentStep === 0 ? 'hidden' : 'visible',
                      }}
                    >
                      <ChevronLeft size={22} className="me-2" />
                      Previous
                    </button>

                    {currentStep === formSteps.length - 1 ? (
                      <button
                        onClick={handleSubmit}
                        disabled={!isCurrentStepValid}
                        className={`btn ${
                          isCurrentStepValid ? 'btn-success clr-white' : 'btn-outline-success'
                        } d-flex align-items-center justify-content-center px-4 py-2`}
                      >
                        <Check size={22} className="me-2" />
                        Submit
                      </button>
                    ) : (
                      <button
                        onClick={handleNext}
                        disabled={!isCurrentStepValid}
                        className={`btn ${
                          isCurrentStepValid ? 'bg-blue clr-white' : 'btn-outline-primary'
                        } d-flex align-items-center justify-content-center px-4 py-2`}
                      >
                        Next
                        <ChevronRight size={22} className="ms-2" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SimpleOrderWizard
