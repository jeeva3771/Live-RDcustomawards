import React, { useState, useRef } from 'react'
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
            { value: 'HAND DELIVERY', label: 'Hand Delivery' },
            { value: 'COURIER', label: 'Courier' },
            { value: 'PICKUP', label: 'Self Pickup' },
            { value: 'EXPRESS DELIVERY', label: 'Express Delivery' },
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
                        style={{ padding: '4px 8px' }}
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

        // .clr-hover:hover {
        //   background-color: #0061ed !important;
        //   color: white;
        // }

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
                              <div className="d-flex align-items-center">
                                <span className="text-muted small me-2 d-none d-sm-inline">
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

                                <div className="mt-3 pt-3 border-top">
                                  <button
                                    className="btn btn-outline-primary clr-hover btn-sm"
                                    onClick={() => handleStepClick(index)}
                                  >
                                    <ChevronLeft size={16} className="me-1" />
                                    Go back to edit this step
                                  </button>
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























import React, { useState } from 'react'
import award1 from '../../../../public/award1.avif'
import award2 from '../../../../public/awards3.webp'
import award4 from '../../../../public/award4.webp'
import award5 from '../../../../public/award5.jpg'
import award6 from '../../../../public/award6.jpeg'
import { CButton, CCol } from '@coreui/react'
import { useNavigate } from 'react-router-dom'
import CIcon from '@coreui/icons-react'
import noImage from '../../../../public/noimage.jpg'
// import { CInfo } from '@coreui/icons'
import {
  cilSearch,
  cilPencil,
  cilTrash,
  cilInfo,
  cilSortAscending,
  cilSortDescending,
  cilCloudUpload,
  cilShare,
  cilEnvelopeClosed,
} from '@coreui/icons'

const EnhancedProductCards = () => {
  const [expandedCards, setExpandedCards] = useState(new Set())
  const [searchTerm, setSearchTerm] = useState('')
  const [productImages, setProductImages] = useState({}) // New state to store uploaded images
  const [modalProduct, setModalProduct] = useState(null) // New state for modal
  const navigate = useNavigate()

  // Product data with additional fields
  const products = [
    {
      id: 1,
      name: 'MIC TROPHY',
      jobNo: '14888',
      client: 'CLEONETT EVENTS',
      email: 'steffie@cleonett.com',
      contactNo: '98337 40939',
      product: 'MIC TROPHY',
      quantity: 46,
      size: '10 Inches',
      status: 'COMPLETED',
      deliveryDate: '19-03-2025',
      deliveryLocation: 'ITC Central - Parel - MUMBAI',
      deliveryMode: 'HAND DELIVERY',
      mainImage: award1,
      enquiryOrigin: 'Website Form',
      budget: '₹50,000',
      preferedMaterial: 'Crystal Glass',
      briefing:
        'High-quality microphone trophy for annual corporate event. Should include company logo engraving.',
      paymentTerms: '50% advance & Bal before dispatch & delivery',
    },
    {
      id: 2,
      name: 'CRYSTAL AWARD',
      jobNo: '14889',
      client: 'CORPORATE SOLUTIONS',
      email: 'info@corpsol.com',
      contactNo: '98765 43210',
      status: 'PENDING',
      product: 'CRYSTAL AWARD',
      quantity: 25,
      size: '8 Inches',
      deliveryDate: '17-04-2025',
      deliveryLocation: 'Bandra Kurla Complex - MUMBAI',
      deliveryMode: 'COURIER',
      mainImage: award2,
      enquiryOrigin: 'Direct Call',
      budget: '₹75,000',
      preferedMaterial: 'Premium Crystal',
      briefing:
        'Elegant crystal awards for employee recognition ceremony. Custom text engraving required.',
      paymentTerms: '100% Advance',
    },
    {
      id: 3,
      name: 'GOLD MEDAL',
      jobNo: '14890',
      client: 'SPORTS FEDERATION',
      email: 'awards@sports.com',
      contactNo: '91234 56789',
      status: 'IN PROGRESS',
      product: 'GOLD MEDAL',
      quantity: 100,
      size: '3 Inches',
      deliveryDate: '19-01-2026',
      deliveryLocation: 'Worli Sports Complex - MUMBAI',
      deliveryMode: 'PICKUP',
      mainImage: award4,
      enquiryOrigin: 'Email Inquiry',
      budget: '₹1,20,000',
      preferedMaterial: 'Gold Plated Metal',
      briefing:
        'Olympic-style gold medals for inter-school sports competition. Different sports icons required.',
      paymentTerms: 'Corporate Credit',
    },
    {
      id: 4,
      name: 'ACRYLIC PLAQUE',
      jobNo: '14891',
      client: 'TECH INNOVATIONS',
      email: 'contact@techinno.com',
      contactNo: '87654 32109',
      product: 'ACRYLIC PLAQUE',
      quantity: 15,
      status: 'IN PROGRESS',
      size: '12 Inches',
      deliveryDate: '19-09-2025',
      deliveryLocation: 'Powai - MUMBAI',
      deliveryMode: 'HAND DELIVERY',
      mainImage: null, // No image for this product
      enquiryOrigin: 'WhatsApp',
      budget: '₹30,000',
      preferedMaterial: 'Clear Acrylic',
      briefing:
        'Modern acrylic plaques for startup milestone celebration. Minimalist design preferred.',
      paymentTerms: '50% Advance & Balance when Material is Ready',
    },
    {
      id: 5,
      name: 'WOODEN SHIELD',
      jobNo: '14892',
      client: 'HERITAGE CLUB',
      email: 'heritage@club.com',
      contactNo: '99887 76543',
      product: 'WOODEN SHIELD',
      quantity: 30,
      status: 'ON HOLD',
      size: '14 Inches',
      deliveryDate: '19-02-2025',
      deliveryLocation: 'Fort - MUMBAI',
      deliveryMode: 'COURIER',
      mainImage: award6,
      enquiryOrigin: 'Referral',
      budget: '₹90,000',
      preferedMaterial: 'Teak Wood',
      briefing:
        'Traditional wooden shields for cultural event awards. Intricate carving work required.',
      paymentTerms: '50% advance & Bal before dispatch & delivery',
    },
    {
      id: 6,
      name: 'GLASS TROPHY',
      jobNo: '14893',
      client: 'EXCELLENCE AWARDS',
      email: 'awards@excellence.com',
      contactNo: '98123 45678',
      product: 'GLASS TROPHY',
      quantity: 12,
      size: '16 Inches',
      status: 'COMPLETED',
      deliveryDate: '11-01-2025',
      deliveryLocation: 'Andheri - MUMBAI',
      deliveryMode: 'EXPRESS DELIVERY',
      mainImage: null, // No image for this product
      enquiryOrigin: 'LinkedIn',
      budget: '₹85,000',
      preferedMaterial: 'Borosilicate Glass',
      briefing:
        'Premium glass trophies for annual excellence awards ceremony. LED base lighting required.',
      paymentTerms: 'Corporate Credit',
    },
  ]

  // Filter products based on search term
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.jobNo.includes(searchTerm) ||
      product.product.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getDeliveryModeClass = (mode) => {
    switch (mode) {
      case 'COMPLETED':
        return { backgroundColor: '#059669', color: 'white' }
      case 'PENDING':
        return { backgroundColor: '#2563EB', color: 'white' }
      case 'ON HOLD':
        return { backgroundColor: '#EA580C', color: 'white' }
      case 'IN PROGRESS':
        return { backgroundColor: '#7C3AED', color: 'white' }
      default:
        return { backgroundColor: '#EA580C', color: 'white' }
    }
  }

  const toggleCardExpansion = (productId) => {
    setExpandedCards((prev) => {
      const newExpanded = new Set(prev)
      if (newExpanded.has(productId)) {
        newExpanded.delete(productId)
      } else {
        newExpanded.add(productId)
      }
      return newExpanded
    })
  }

  const openModal = (product) => {
    setModalProduct(product)
    document.body.style.overflow = 'hidden' // Prevent background scrolling
  }

  const closeModal = () => {
    setModalProduct(null)
    document.body.style.overflow = 'unset' // Restore scrolling
  }

  const handleImageUpload = (productId, event) => {
    const file = event.target.files[0]
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        alert('Please select a valid image file.')
        return
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('File size should be less than 5MB.')
        return
      }

      // Create a FileReader to convert the file to a data URL
      const reader = new FileReader()
      reader.onload = (e) => {
        // Update the productImages state with the new image
        setProductImages((prev) => ({
          ...prev,
          [productId]: e.target.result,
        }))

        console.log('Image uploaded successfully for product:', productId)
        // You can also send this to your backend API here
        // uploadImageToServer(productId, file)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleWhatsAppShare = (product) => {
    const currentImage = productImages[product.id] || product.mainImage

    // Create comprehensive message with all details
    const message = `🏆 *${product.name}* (Job No: ${product.jobNo})

👤 *Client Details:*
• Client: ${product.client}
• Email: ${product.email}
• Contact: ${product.contactNo}

📦 *Product Information:*
• Product: ${product.product}
• Quantity: ${product.quantity}
• Size: ${product.size}
• Status: ${product.status}

💰 *Financial Details:*
• Budget: ${product.budget}
• Payment Terms: ${product.paymentTerms}

🚚 *Delivery Information:*
• Delivery Date: ${product.deliveryDate}
• Delivery Location: ${product.deliveryLocation}
• Delivery Mode: ${product.deliveryMode}

📋 *Additional Details:*
• Enquiry Origin: ${product.enquiryOrigin}
• Preferred Material: ${product.preferedMaterial}
• Briefing: ${product.briefing}

${currentImage ? '📸 Product image is available for reference.' : ''}

Best regards,
Your Team`

    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleEmailShare = (product) => {
    const subject = `Complete Product Details - ${product.name} (Job No: ${product.jobNo})`
    const body = `Dear Client,

Please find the complete details of your order:

=== PRODUCT DETAILS ===
Product Name: ${product.name}
Job Number: ${product.jobNo}
Client: ${product.client}
Quantity: ${product.quantity}
Size: ${product.size}
Status: ${product.status}

=== CONTACT INFORMATION ===
Email: ${product.email}
Contact Number: ${product.contactNo}

=== FINANCIAL DETAILS ===
Budget: ${product.budget}
Payment Terms: ${product.paymentTerms}

=== DELIVERY INFORMATION ===
Delivery Date: ${product.deliveryDate}
Delivery Location: ${product.deliveryLocation}
Delivery Mode: ${product.deliveryMode}

=== ADDITIONAL INFORMATION ===
Enquiry Origin: ${product.enquiryOrigin}
Preferred Material: ${product.preferedMaterial}
Briefing: ${product.briefing}

${productImages[product.id] || product.mainImage ? 'Product image is available for reference.' : 'Product image will be shared separately.'}

If you have any questions or need further clarification, please don't hesitate to contact us.

Best regards,
Your Team`

    const mailtoUrl = `mailto:${product.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoUrl
  }

  // Modal Component
  const Modal = ({ product, onClose }) => {
    if (!product) return null

    const currentImage = productImages[product.id] || product.mainImage
    const hasImage = currentImage !== null && currentImage !== undefined

    return (
      <div style={styles.modalOverlay} onClick={onClose}>
        <div
          style={{
            backgroundColor: 'white',
            borderRadius: '0.75rem',
            width: '100%',
            maxWidth: '900px',
            maxHeight: '80vh',
            overflow: 'hidden',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            display: 'flex',
            flexDirection: 'column',
            margin: '8% auto 0 auto',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {' '}
          {/* Modal Header */}
          <div style={styles.modalHeader}>
            <h2 style={styles.modalTitle}>{product.name}</h2>
            <button style={styles.closeButton} onClick={onClose}>
              ×
            </button>
          </div>
          {/* Modal Body */}
          <div style={styles.modalBody}>
            {/* Product Image */}
            <div style={styles.modalImageSection}>
              <img src={currentImage || noImage} alt={product.name} style={styles.modalImage} />
            </div>

            {/* Product Details Grid */}
            <div style={styles.modalDetailsGrid}>
              {/* Basic Information */}
              <div style={styles.modalSection}>
                <h3 style={styles.modalSectionTitle}>Product Information</h3>
                <div style={styles.modalDetailItem}>
                  <span style={styles.modalLabel}>Job Number:</span>
                  <span style={styles.modalValue}>{product.jobNo}</span>
                </div>
                <div style={styles.modalDetailItem}>
                  <span style={styles.modalLabel}>Product:</span>
                  <span style={styles.modalValue}>{product.product}</span>
                </div>
                <div style={styles.modalDetailItem}>
                  <span style={styles.modalLabel}>Quantity:</span>
                  <span style={styles.modalValue}>{product.quantity}</span>
                </div>
                <div style={styles.modalDetailItem}>
                  <span style={styles.modalLabel}>Size:</span>
                  <span style={styles.modalValue}>{product.size}</span>
                </div>
                <div style={styles.modalDetailItem}>
                  <span style={styles.modalLabel}>Status:</span>
                  <span style={{ ...styles.modalBadge, ...getDeliveryModeClass(product.status) }}>
                    {product.status}
                  </span>
                </div>
              </div>

              {/* Client Information */}
              <div style={styles.modalSection}>
                <h3 style={styles.modalSectionTitle}>Client Information</h3>
                <div style={styles.modalDetailItem}>
                  <span style={styles.modalLabel}>Client:</span>
                  <span style={styles.modalValue}>{product.client}</span>
                </div>
                <div style={styles.modalDetailItem}>
                  <span style={styles.modalLabel}>Email:</span>
                  <a href={`mailto:${product.email}`} style={styles.modalLink}>
                    {product.email}
                  </a>
                </div>
                <div style={styles.modalDetailItem}>
                  <span style={styles.modalLabel}>Contact:</span>
                  <a href={`tel:${product.contactNo}`} style={styles.modalLink}>
                    {product.contactNo}
                  </a>
                </div>
                <div style={styles.modalDetailItem}>
                  <span style={styles.modalLabel}>Enquiry Origin:</span>
                  <span style={styles.modalValue}>{product.enquiryOrigin}</span>
                </div>
              </div>

              {/* Financial Information */}
              <div style={styles.modalSection}>
                <h3 style={styles.modalSectionTitle}>Financial Details</h3>
                <div style={styles.modalDetailItem}>
                  <span style={styles.modalLabel}>Budget:</span>
                  <span style={styles.modalValue}>{product.budget}</span>
                </div>
                <div style={styles.modalDetailItem}>
                  <span style={styles.modalLabel}>Payment Terms:</span>
                  <span style={styles.modalValue}>{product.paymentTerms}</span>
                </div>
              </div>

              {/* Delivery Information */}
              <div style={styles.modalSection}>
                <h3 style={styles.modalSectionTitle}>Delivery Information</h3>
                <div style={styles.modalDetailItem}>
                  <span style={styles.modalLabel}>Delivery Date:</span>
                  <span style={styles.modalValue}>{product.deliveryDate}</span>
                </div>
                <div style={styles.modalDetailItem}>
                  <span style={styles.modalLabel}>Delivery Location:</span>
                  <span style={styles.modalValue}>{product.deliveryLocation}</span>
                </div>
                <div style={styles.modalDetailItem}>
                  <span style={styles.modalLabel}>Delivery Mode:</span>
                  <span style={styles.modalValue}>{product.deliveryMode}</span>
                </div>
              </div>

              {/* Product Specifications */}
              <div style={styles.modalSection}>
                <h3 style={styles.modalSectionTitle}>Product Specifications</h3>
                <div style={styles.modalDetailItem}>
                  <span style={styles.modalLabel}>Preferred Material:</span>
                  <span style={styles.modalValue}>{product.preferedMaterial}</span>
                </div>
                <div style={styles.modalDetailItem}>
                  <span style={styles.modalLabel}>Briefing:</span>
                  <span style={styles.modalValue}>{product.briefing}</span>
                </div>
              </div>
            </div>
          </div>
          {/* Modal Footer with Action Buttons */}
          <div style={styles.modalFooter}>
            {hasImage && (
              <>
                <button
                  style={styles.modalActionButton}
                  onClick={() => handleWhatsAppShare(product)}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516" />
                  </svg>
                </button>
                <button style={styles.modalActionButton} onClick={() => handleEmailShare(product)}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
                  </svg>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    )
  }

  const ProductCard = ({ product }) => {
    const isExpanded = expandedCards.has(product.id)
    // Check if product has image (either original or uploaded)
    const currentImage = productImages[product.id] || product.mainImage
    const hasImage = currentImage !== null && currentImage !== undefined

    return (
      <div style={styles.card}>
        {/* Main Image Section */}
        <div style={styles.imageContainer}>
          <img src={currentImage || noImage} alt={product.name} style={styles.image} />
        </div>

        {/* Content Section */}
        <div style={styles.content}>
          {/* Header */}
          <div style={styles.header1}>
            <h2 style={styles.productName}>{product.name}</h2>
            <div style={styles.jobNo}>
              Job No: <span style={{ color: 'black' }}>{product.jobNo}</span>
            </div>
          </div>

          {/* Basic Product Details - Always Visible */}
          <div style={styles.detailsContainer}>
            <div style={styles.detailRow}>
              <span style={styles.label}>CLIENT: </span>
              <span style={styles.value}>{product.client}</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.label}>PRODUCT: </span>
              <span style={styles.value}>{product.product}</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.label}>QUANTITY: </span>
              <span style={styles.value}>{product.quantity}</span>
            </div>

            <div style={styles.detailRow}>
              <span style={styles.label}>DELIVERY DATE: </span>
              <span style={styles.value}>{product.deliveryDate}</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.label}>DELIVERY MODE: </span>
              <span style={styles.value}>{product.deliveryMode}</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.label}>STATUS: </span>
              <span
                style={{
                  ...styles.badge,
                  ...getDeliveryModeClass(product.status),
                }}
              >
                {product.status}
              </span>
            </div>

            {/* Action Icons Row */}
            <div style={styles.actionIconsContainer}>
              {/* Eye Icon (View Details) - always show first */}
              <div
                style={styles.actionIcon}
                onClick={() => openModal(product)}
                title="View All Details"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                </svg>
              </div>

              {/* Upload Icon - show only for products without original image AND no uploaded image */}
              {!product.mainImage && !productImages[product.id] && (
                <div style={styles.actionIcon} title="Upload Image">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(product.id, e)}
                    style={styles.hiddenInput}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    className="bi bi-cloud-arrow-up"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708z"
                    />
                    <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383m.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
                  </svg>
                </div>
              )}

              {/* WhatsApp Icon - only show when image exists */}
              {hasImage && (
                <div
                  style={styles.actionIcon}
                  onClick={() => handleWhatsAppShare(product)}
                  title="Share on WhatsApp"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516" />
                  </svg>
                </div>
              )}

              {/* Email Icon - only show when image exists */}
              {hasImage && (
                <div
                  style={styles.actionIcon}
                  onClick={() => handleEmailShare(product)}
                  title="Share via Email"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
                  </svg>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Get screen size for responsive design
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Responsive breakpoints
  const isMobile = windowWidth <= 480
  const isTablet = windowWidth <= 768
  const isSmallDesktop = windowWidth <= 1024

  const styles = {
    container: {
      minHeight: '100vh',
      padding: isMobile ? '0.5rem' : isTablet ? '0.75rem' : '1rem',
    },
    innerContainer: {
      maxWidth: '1400px',
      margin: '0 auto',
    },
    header: {
      marginBottom: isMobile ? '1rem' : '2rem',
      textAlign: 'center',
    },
    header1: {
      marginBottom: '2px',
    },
    title: {
      fontSize: isMobile ? '1.75rem' : isTablet ? '2rem' : '2.5rem',
      fontWeight: 'bold',
      color: 'black',
      marginBottom: '0.5rem',
    },
    searchContainer: {
      marginBottom: isMobile ? '1rem' : '2rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: isMobile ? '0.5rem' : '1rem',
      flexWrap: 'wrap',
      flexDirection: isMobile ? 'column' : 'row',
    },
    addButton: {
      backgroundColor: '#0061ed',
      color: 'white',
      padding: isMobile ? '0.75rem 1.5rem' : '0.875rem 2rem',
      fontSize: isMobile ? '0.875rem' : '1rem',
      fontWeight: '600',
      border: 'none',
      borderRadius: '0.5rem',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
      whiteSpace: 'nowrap',
      flexShrink: 0,
      width: isMobile ? '100%' : 'auto',
    },
    searchInput: {
      width: '100%',
      maxWidth: isMobile ? '100%' : '600px',
      padding: isMobile ? '0.75rem 1rem' : '0.875rem 1.25rem',
      fontSize: isMobile ? '0.875rem' : '1rem',
      border: '2px solid #374151',
      borderRadius: '0.5rem',
      backgroundColor: 'white',
      outline: 'none',
      transition: 'border-color 0.3s ease',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: isMobile
        ? '1fr'
        : isTablet
          ? 'repeat(auto-fit, minmax(350px, 1fr))'
          : 'repeat(auto-fit, minmax(450px, 1fr))',
      gap: isMobile ? '1rem' : '1.5rem',
      justifyContent: 'center',
    },
    card: {
      backgroundColor: 'white',
      color: 'white',
      borderRadius: '0.5rem',
      overflow: 'hidden',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      display: 'flex',
      flexDirection: isMobile || isTablet ? 'column' : 'row',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      height: 'fit-content',
    },
    imageContainer: {
      width: isMobile || isTablet ? '100%' : '180px',
      height: isMobile || isTablet ? '200px' : 'initial',
      backgroundColor: '#E5E7EB',
      position: 'relative',
      flexShrink: 0,
      overflow: 'hidden',
      alignSelf: 'stretch',
      display: 'flex',
      flexDirection: 'column',
    },
    image: {
      width: '100%',
      height: isMobile || isTablet ? '200px' : 'auto',
      flex: isMobile || isTablet ? 'none' : 1,
      objectFit: 'fit',
    },
    actionIconsContainer: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginTop: '0.5rem',
      gap: '0.5rem',
      flexWrap: 'wrap',
    },
    actionIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: isMobile ? '2.5rem' : '1.9rem',
      height: isMobile ? '2rem' : '1.5rem',
      borderRadius: '0.25rem',
      backgroundColor: 'transparent',
      border: '1px solid #0061ed',
      color: '#0061ed',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      flexShrink: 0,
    },
    hiddenInput: {
      display: 'none',
    },
    content: {
      padding: isMobile ? '1rem' : '0.7rem',
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '100%',
    },
    productName: {
      fontSize: isMobile ? '1.125rem' : '1.375rem',
      fontWeight: 'bold',
      color: 'black',
      marginBottom: '0.25rem',
    },
    jobNo: {
      fontSize: isMobile ? '0.75rem' : '0.875rem',
      fontWeight: 'bold',
      color: 'rgb(0, 97, 237)',
      marginBottom: '0.4rem',
    },
    detailsContainer: {
      marginBottom: '1rem',
    },
    detailRow: {
      marginBottom: '0.625rem',
      fontSize: isMobile ? '0.75rem' : '0.8rem',
      lineHeight: '1.4',
    },
    label: {
      color: '#0061ed',
      fontWeight: 'bold',
    },
    value: {
      color: 'black',
    },
    link: {
      color: 'blue',
      textDecoration: 'underline',
    },
    badge: {
      padding: '0.25rem 0.5rem',
      borderRadius: '0.25rem',
      fontSize: isMobile ? '0.625rem' : '0.75rem',
      fontWeight: '600',
      display: 'inline-block',
    },
    noResults: {
      gridColumn: '1 / -1',
      textAlign: 'center',
      color: '#9CA3AF',
      fontSize: '1.125rem',
      padding: '3rem 1rem',
      borderRadius: '0.5rem',
    },
    button: {
      width: '100%',
      backgroundColor: '#0061ed',
      color: 'white',
      padding: '0.625rem 1rem',
      borderRadius: '0.5rem',
      fontWeight: '500',
      fontSize: '0.875rem',
      border: 'none',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    // Modal Styles
    modalOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: isMobile ? '0.5rem' : '1rem',
    },
    modalContent: {
      backgroundColor: 'white',
      borderRadius: '0.75rem',
      width: '100%',
      maxWidth: isMobile ? '100%' : isTablet ? '700px' : '900px',
      maxHeight: isMobile ? '95vh' : '90vh',
      overflow: 'hidden',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
      display: 'flex',
      flexDirection: 'column',
      margin: isMobile ? '0' : 'auto',
    },
    modalHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: isMobile ? '1rem' : '1.5rem',
      borderBottom: '1px solid #E5E7EB',
      backgroundColor: '#F9FAFB',
    },
    modalTitle: {
      fontSize: isMobile ? '1.25rem' : '1.5rem',
      fontWeight: 'bold',
      color: '#111827',
      margin: 0,
    },
    closeButton: {
      background: 'none',
      border: 'none',
      color: '#6B7280',
      cursor: 'pointer',
      padding: '0.5rem',
      borderRadius: '0.25rem',
      transition: 'all 0.2s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: isMobile ? '1.75rem' : '1.5rem',
      fontWeight: 'bold',
      width: '2rem',
      height: '2rem',
    },
    modalBody: {
      padding: isMobile ? '1rem' : '1.5rem',
      overflow: 'auto',
      flex: 1,
    },
    modalImageSection: {
      marginBottom: isMobile ? '1rem' : '2rem',
      textAlign: 'center',
    },
    modalImage: {
      maxWidth: isMobile ? '100%' : '300px',
      maxHeight: isMobile ? '200px' : '300px',
      objectFit: 'contain',
      borderRadius: '0.5rem',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      width: isMobile ? '100%' : 'auto',
    },
    modalDetailsGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile
        ? '1fr'
        : isTablet
          ? '1fr'
          : 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: isMobile ? '1rem' : '1.5rem',
    },
    modalSection: {
      backgroundColor: '#F9FAFB',
      padding: isMobile ? '0.75rem' : '1rem',
      borderRadius: '0.5rem',
      border: '1px solid #E5E7EB',
    },
    modalSectionTitle: {
      fontSize: isMobile ? '0.875rem' : '1rem',
      fontWeight: 'bold',
      color: '#0061ed',
      marginBottom: '0.75rem',
      margin: '0 0 0.75rem 0',
    },
    modalDetailItem: {
      marginBottom: '0.75rem',
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      gap: isMobile ? '0.25rem' : '0.5rem',
      alignItems: 'flex-start',
    },
    modalLabel: {
      fontSize: isMobile ? '0.75rem' : '0.875rem',
      fontWeight: '600',
      color: '#374151',
      minWidth: isMobile ? 'auto' : '100px',
      flexShrink: 0,
    },
    modalValue: {
      fontSize: isMobile ? '0.75rem' : '0.875rem',
      color: '#111827',
      lineHeight: '1.4',
      flex: 1,
    },
    modalLink: {
      fontSize: isMobile ? '0.75rem' : '0.875rem',
      color: '#0061ed',
      textDecoration: 'underline',
      cursor: 'pointer',
      flex: 1,
    },
    modalBadge: {
      padding: '0.25rem 0.75rem',
      borderRadius: '0.375rem',
      fontSize: isMobile ? '0.625rem' : '0.75rem',
      fontWeight: '600',
      display: 'inline-block',
    },
    modalFooter: {
      padding: isMobile ? '1rem' : '1rem 1.5rem',
      borderTop: '1px solid #E5E7EB',
      backgroundColor: '#F9FAFB',
      display: 'flex',
      gap: isMobile ? '0.5rem' : '1rem',
      justifyContent: 'flex-end',
      flexDirection: isMobile ? 'column' : 'row',
    },
    modalActionButton: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      padding: isMobile ? '0.875rem 1rem' : '0.75rem 1.5rem',
      backgroundColor: '#0061ed',
      color: 'white',
      border: 'none',
      borderRadius: '0.5rem',
      cursor: 'pointer',
      fontSize: isMobile ? '0.75rem' : '0.875rem',
      fontWeight: '500',
      transition: 'background-color 0.2s ease',
      width: isMobile ? '100%' : 'auto',
    },
  }

  // When only one search result, center it and limit width
  if (filteredProducts.length === 1 && !isMobile) {
    styles.grid.gridTemplateColumns = '1fr'
    styles.grid.maxWidth = '600px'
    styles.grid.margin = '0 auto'
  }

  // Close modal on Escape key
  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && modalProduct) {
        closeModal()
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [modalProduct])

  return (
    <div style={styles.container}>
      <div style={styles.innerContainer}>
        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.title}>Enquiries List</h1>
        </div>

        {/* Global Search */}
        <div style={styles.searchContainer}>
          <input
            type="text"
            placeholder="🔍 Search by product name, client, job number..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={styles.searchInput}
            onFocus={(e) => (e.target.style.borderColor = '#F97316')}
            onBlur={(e) => (e.target.style.borderColor = '#374151')}
          />
          <button
            style={styles.addButton}
            onMouseEnter={(e) => (e.target.style.backgroundColor = '#0052cc')}
            onMouseLeave={(e) => (e.target.style.backgroundColor = '#0061ed')}
            onClick={() => navigate('/enquiry/add')}
          >
            Add
          </button>
        </div>

        {/* Product Cards Grid */}
        <div style={styles.grid}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)
          ) : (
            <div style={styles.noResults}>
              <h3>No products found</h3>
              <p>Try adjusting your search terms: "{searchTerm}"</p>
              <button
                onClick={() => setSearchTerm('')}
                style={{
                  ...styles.button,
                  width: 'auto',
                  marginTop: '1rem',
                  padding: '0.5rem 1.5rem',
                }}
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {modalProduct && <Modal product={modalProduct} onClose={closeModal} />}
    </div>
  )
}

export default EnhancedProductCards
