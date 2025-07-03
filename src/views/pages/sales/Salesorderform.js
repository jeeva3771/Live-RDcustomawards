import React, { useState, useRef } from 'react'
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  Camera,
  Upload,
  Clock,
  Bold,
  Italic,
  Underline,
  Link,
  List,
  Image,
  Smile,
  Check,
  Edit,
  Briefcase,
  ChevronDown,
  ChevronUp,
  User,
  Package,
  Gift,
  Settings,
  Award,
  CreditCard,
  Building,
  Truck,
  FileText,
  X,
  Box,
  Shield,
  Layers,
} from 'lucide-react'

const MultiStepWizard = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [uploadedImages, setUploadedImages] = useState([])
  const fileInputRef = useRef(null)
  const [dragActive, setDragActive] = useState(false)

  const [formData, setFormData] = useState({
    jobDetails: {
      jobQty: '',
      jobCompletionDate: '',
    },
    clientDetails: {
      clientName: '',
      contactPerson: '',
      phoneNumber: '',
      email: '',
      billingStreetAddress: '',
      billingStreetAddress2: '',
      billingCity: '',
      billingState: '',
      billingPostalCode: '',
      deliveryStreetAddress: '',
      deliveryStreetAddress2: '',
      deliveryCity: '',
      deliveryState: '',
      deliveryPostalCode: '',
      deliveryType: 'Single Point',
      courier: 'RD Courier',
      productName: '',
      productSize: '',
      pricePerPc: '',
    },
    packaging: {
      packingType: '',
      innerPackingType: '',
      premiumPackingOptions: [],
      packingInstructions: '',
      packingMode: '',
    },
    payment: {
      paymentType: '',
    },
    productImages: {
      images: [],
    },
    timeDetails: {
      time: '',
    },
    bankDetails: {
      bankName: '',
      accountNumber: '',
      ifscCode: '',
      accountHolderName: '',
      branch: '',
    },
    remarks: {
      remarks: '',
    },
  })

  const [completedSteps, setCompletedSteps] = useState(new Set())
  const [expandedSteps, setExpandedSteps] = useState(new Set())

  const formSteps = [
    {
      id: 'jobDetails',
      title: 'Job Details',
      icon: Briefcase,
      fields: [
        { name: 'jobQty', label: 'Job QTY', type: 'number', required: true },
        {
          name: 'jobCompletionDate',
          label: 'Job Completion Date',
          type: 'date',
          required: true,
        },
      ],
    },
    {
      id: 'clientDetails',
      title: 'Client Details',
      icon: User,
      fields: [
        {
          name: 'clientName',
          label: 'Client Name',
          type: 'text',
          required: true,
        },
        {
          name: 'contactPerson',
          label: 'Contact Person',
          type: 'text',
          required: true,
        },
        {
          name: 'phoneNumber',
          label: 'Phone Number',
          type: 'tel',
          required: true,
          placeholder: 'Enter phone number',
        },
        {
          name: 'email',
          label: 'Email',
          type: 'email',
          required: true,
          placeholder: 'example@example.com',
        },
        {
          name: 'billingAddressHeader',
          label: 'Billing Address',
          type: 'header',
        },
        {
          name: 'billingStreetAddress',
          label: 'Street Address',
          type: 'text',
          required: false,
        },
        {
          name: 'billingStreetAddress2',
          label: 'Street Address Line 2',
          type: 'text',
          required: false,
        },
        {
          name: 'billingCity',
          label: 'City',
          type: 'text',
          required: false,
          width: 'half',
        },
        {
          name: 'billingState',
          label: 'State / Province',
          type: 'text',
          required: false,
          width: 'half',
        },
        {
          name: 'billingPostalCode',
          label: 'Postal / Zip Code',
          type: 'text',
          required: false,
        },
        {
          name: 'deliveryAddressHeader',
          label: 'Delivery Address',
          type: 'header',
        },
        {
          name: 'deliveryStreetAddress',
          label: 'Street Address',
          type: 'text',
          required: true,
        },
        {
          name: 'deliveryStreetAddress2',
          label: 'Street Address Line 2',
          type: 'text',
          required: false,
        },
        {
          name: 'deliveryCity',
          label: 'City',
          type: 'text',
          required: true,
          width: 'half',
        },
        {
          name: 'deliveryState',
          label: 'State / Province',
          type: 'text',
          required: true,
          width: 'half',
        },
        {
          name: 'deliveryPostalCode',
          label: 'Postal / Zip Code',
          type: 'text',
          required: true,
        },
        { name: 'deliveryTypeHeader', label: 'Delivery Type', type: 'header' },
        {
          name: 'deliveryType',
          label: 'Delivery Type',
          type: 'radio',
          required: true,
          options: [
            { value: 'Single Point', label: 'Single Point' },
            { value: 'Multi Point', label: 'Multi Point' },
          ],
        },
        { name: 'courierHeader', label: 'Courier', type: 'header' },
        {
          name: 'courier',
          label: 'Courier',
          type: 'radio',
          required: true,
          options: [
            { value: 'Client Courier', label: 'Client Courier' },
            { value: 'RD Courier', label: 'RD Courier' },
            { value: 'Hand Delivery', label: 'Hand Delivery' },
          ],
        },
        { name: 'productHeader', label: 'Product Information', type: 'header' },
        {
          name: 'productName',
          label: 'Product Name',
          type: 'text',
          required: true,
        },
        {
          name: 'productSize',
          label: 'Product Size',
          type: 'text',
          required: true,
        },
        {
          name: 'pricePerPc',
          label: 'Price Per Piece',
          type: 'number',
          required: true,
          placeholder: 'Enter price per piece',
        },
      ],
    },
    {
      id: 'packaging',
      title: 'Packaging Details',
      icon: Package,
      fields: [
        {
          name: 'packingType',
          label: 'Select Type of Packing',
          type: 'radio',
          required: true,
          options: [
            { value: 'Standard', label: 'Standard' },
            { value: 'Premium', label: 'Premium' },
            { value: 'Custom', label: 'Custom' },
            { value: 'Gift Box', label: 'Gift Box' },
          ],
        },
        {
          name: 'innerPackingType',
          label: 'Inner Packing Type',
          type: 'select',
          required: true,
          options: [
            'Please Select',
            'Foam Padding',
            'Tissue Paper',
            'Bubble Wrap',
            'Velvet Pouch',
            'Air Cushions',
            'None',
          ],
        },
        {
          name: 'premiumPackingOptions',
          label: 'Premium Packing Options',
          type: 'checkbox-group',
          required: false,
          options: [
            { value: 'Certificate', label: 'Certificate' },
            { value: 'Gift Card', label: 'Gift Card' },
            { value: 'Ribbon', label: 'Ribbon' },
            { value: 'Custom Tag', label: 'Custom Tag' },
            { value: 'Instruction Manual', label: 'Instruction Manual' },
          ],
        },
        {
          name: 'packingInstructions',
          label: 'Packing Instructions',
          type: 'textarea',
          required: false,
          placeholder: 'Enter detailed packing instructions...',
        },
        {
          name: 'packingMode',
          label: 'Packing Mode',
          type: 'radio',
          required: true,
          options: [
            { value: 'Individual', label: 'Individual' },
            { value: 'Consolidated', label: 'Consolidated' },
          ],
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
          label: 'Payment Type',
          type: 'radio',
          required: true,
          options: [
            { value: '100% Advance', label: '100% Advance' },
            { value: '50% Advance & Balance when Material is Ready', label: '50% Advance & Balance when Material is Ready' },
            { value: 'Corporate Credit', label: 'Corporate Credit' },
          ],
        },
      ],
    },
    {
      id: 'productImages',
      title: 'Product Images',
      icon: Image,
      fields: [
        {
          name: 'images',
          label: '',
          type: 'image-upload',
          required: false,
        },
      ],
    },
    {
      id: 'timeDetails',
      title: 'Time',
      icon: Clock,
      fields: [
        {
          name: 'time',
          label: 'Time',
          type: 'time',
          required: true,
        },
      ],
    },
    {
      id: 'bankDetails',
      title: 'Bank Details',
      icon: Building,
      fields: [
        {
          name: 'bankName',
          label: 'Bank Name',
          type: 'text',
          required: true,
        },
        {
          name: 'accountNumber',
          label: 'Account Number',
          type: 'text',
          required: true,
        },
        {
          name: 'ifscCode',
          label: 'IFSC Code',
          type: 'text',
          required: true,
          placeholder: 'Enter IFSC code',
        },
        {
          name: 'accountHolderName',
          label: 'Account Holder Name',
          type: 'text',
          required: true,
        },
        {
          name: 'branch',
          label: 'Branch',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      id: 'remarks',
      title: 'Remarks',
      icon: FileText,
      fields: [
        {
          name: 'remarks',
          label: 'Remarks',
          type: 'textarea',
          required: false,
          placeholder: 'Additional remarks or notes...',
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
    const newImages = Array.from(files).slice(0, 3 - uploadedImages.length)
    const imageUrls = newImages.map(file => URL.createObjectURL(file))
    setUploadedImages(prev => [...prev, ...imageUrls])
    handleInputChange('productImages', 'images', [...uploadedImages, ...imageUrls])
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
    handleInputChange('productImages', 'images', newImages)
  }

  const validateStep = (stepIndex) => {
    const step = formSteps[stepIndex]
    const stepData = formData[step.id]

    return step.fields.every((field) => {
      if (field.type === 'header' || field.type === 'checkbox-group' || field.type === 'image-upload') return true

      if (field.required) {
        const value = stepData[field.name]
        if (field.type === 'select') {
          return value && value.trim() !== '' && value !== 'Please Select'
        }
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
      alert('Sales Order Form submitted successfully!\n\nJob Number will be generated.')
    }
  }

  const isCurrentStepValid = validateStep(currentStep)

  const renderField = (field, stepId) => {
    if (field.type === 'header') {
      return (
        <div key={field.name} className="col-12 mb-4 mt-5 first:mt-0">
          <h3 className="h5 fw-semibold text-dark mb-3 pb-2 border-bottom d-flex align-items-center">
            {field.label}
          </h3>
        </div>
      )
    }

    if (field.type === 'radio') {
      return (
        <div key={field.name} className="col-12 mb-4">
          <label className="form-label fw-medium fs-6 mb-3">
            {field.label}
            {field.required && <span className="text-danger ms-1">*</span>}
          </label>
          <div className="row g-2">
            {field.options.map((option) => (
              <div key={option.value} className="col-12 col-sm-6 col-md-4">
                <div className="form-check border rounded p-3 h-100">
                  <input
                    className="form-check-input"
                    type="radio"
                    name={field.name}
                    id={`${field.name}_${option.value.replace(/\s+/g, '_')}`}
                    value={option.value}
                    checked={formData[stepId][field.name] === option.value}
                    onChange={(e) => handleInputChange(stepId, field.name, e.target.value)}
                    required={field.required}
                  />
                  <label
                    className="form-check-label fw-medium"
                    htmlFor={`${field.name}_${option.value.replace(/\s+/g, '_')}`}
                  >
                    {option.label}
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    }

    if (field.type === 'checkbox-group') {
      return (
        <div key={field.name} className="col-12 mb-4">
          <label className="form-label fw-medium fs-6 mb-3">
            {field.label}
            {field.required && <span className="text-danger ms-1">*</span>}
          </label>
          <div className="row g-2">
            {field.options.map((option) => (
              <div key={option.value} className="col-12 col-sm-6 col-lg-4">
                <div className="form-check border rounded p-3 h-100">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={`${field.name}_${option.value.replace(/\s+/g, '_')}`}
                    checked={
                      formData[stepId][field.name] &&
                      formData[stepId][field.name].includes(option.value)
                    }
                    onChange={(e) => {
                      const currentValues = formData[stepId][field.name] || []
                      const newValues = e.target.checked
                        ? [...currentValues, option.value]
                        : currentValues.filter((v) => v !== option.value)
                      handleInputChange(stepId, field.name, newValues)
                    }}
                  />
                  <label
                    className="form-check-label fw-medium"
                    htmlFor={`${field.name}_${option.value.replace(/\s+/g, '_')}`}
                  >
                    {option.label}
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    }

    if (field.type === 'image-upload') {
      return (
        <div key={field.name} className="col-12 mb-4">
          <label className="form-label fw-medium fs-6 mb-3">
            {field.label}
            {field.required && <span className="text-danger ms-1">*</span>}
          </label>

          <div
            className={`border-2 border-dashed rounded-lg p-4 text-center ${
              dragActive ? 'border-primary bg-light' : 'border-muted'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <Upload size={48} className="mx-auto mb-3 text-muted" />
            <p className="mb-3">Drag and drop images here, or click to browse</p>
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
              className="btn btn-outline-primary"
              onClick={() => fileInputRef.current?.click()}
              disabled={uploadedImages.length >= 3}
            >
              Choose Images
            </button>
            <p className="small text-muted mt-2">Maximum 3 images allowed</p>
          </div>

          {uploadedImages.length > 0 && (
            <div className="mt-3">
              <div className="row g-3">
                {uploadedImages.map((image, index) => (
                  <div key={index} className="col-4">
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
                        onClick={() => removeImage(index)}
                        style={{ padding: '2px 6px' }}
                      >
                        <X size={12} />
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
            value={formData[stepId][field.name]}
            onChange={(e) => handleInputChange(stepId, field.name, e.target.value)}
            placeholder={field.placeholder || `Enter ${field.label.toLowerCase()}`}
            required={field.required}
          />
        </div>
      )
    }

    const isHalfWidth = field.width === 'half'
    const containerClass = isHalfWidth ? 'col-md-6' : 'col-12'

    return (
      <div key={field.name} className={`${containerClass} mb-4`}>
        <label htmlFor={field.name} className="form-label fw-medium fs-6">
          {field.label}
          {field.required && <span className="text-danger ms-1">*</span>}
        </label>
        {field.type === 'select' ? (
          <select
            className="form-select form-select-lg"
            id={field.name}
            name={field.name}
            value={formData[stepId][field.name]}
            onChange={(e) => handleInputChange(stepId, field.name, e.target.value)}
            required={field.required}
          >
            {field.options.map((option, index) => (
              <option key={index} value={option}
              // disabled={option === 'Please Select'}
              >
                {option}
              </option>
            ))}
          </select>
        ) : (
          <input
            type={field.type}
            className="form-control form-control-lg"
            id={field.name}
            name={field.name}
            value={formData[stepId][field.name]}
            onChange={(e) => handleInputChange(stepId, field.name, e.target.value)}
            placeholder={
              field.placeholder ||
              (field.type === 'date'
                ? 'yyyy-mm-dd'
                : field.type === 'time'
                ? 'HH:MM'
                : `Enter ${field.label.toLowerCase()}`)
            }
            required={field.required}
            step={field.type === 'number' ? '0.01' : undefined}
          />
        )}
      </div>
    )
  }

  return (
    <>
      <style>{`
        .step-indicator {
          width: 50px;
          height: 50px;
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
          gap: 0.5rem;
          max-width: 100%;
          overflow-x: auto;
          padding: 0 10px;
        }

        .step-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          min-width: 80px;
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
          background-color: #0061ed;
          color: white;
        }

        /* Enhanced mobile responsiveness */
        @media (max-width: 768px) {
          .step-indicator {
            width: 40px;
            height: 40px;
          }

          .steps-container {
            // gap: 0.3rem;
            justify-content: flex-start;
            padding: 0 5px;
          }

          .step-item {
            min-width: 70px;
          }

          .container-fluid {
            padding-left: 15px;
            padding-right: 15px;
          }

          .card-body {
            padding: 1.5rem !important;
          }

          .form-control-lg, .form-select-lg {
            font-size: 1rem;
            padding: 0.75rem;
          }

          .btn {
            padding: 0.5rem 1rem;
          }

          .h4 {
            font-size: 1.25rem;
          }

          .display-5 {
            font-size: 2rem;
          }

          .col-sm-6 {
            flex: 0 0 auto;
            width: 100%;
          }

          .col-md-4 {
            flex: 0 0 auto;
            width: 50%;
          }

          .col-lg-4 {
            flex: 0 0 auto;
            width: 100%;
          }
        }

        @media (max-width: 576px) {
          .step-indicator {
            width: 35px;
            height: 35px;
          }

          .step-item {
            min-width: 60px;
          }

          .card-body {
            padding: 1rem !important;
          }

          .btn {
            font-size: 0.875rem;
            padding: 0.375rem 0.75rem;
          }

          .col-4 {
            flex: 0 0 auto;
            width: 100%;
          }

          .col-md-4, .col-sm-6 {
            flex: 0 0 auto;
            width: 100%;
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

        @media (min-width: 769px) and (max-width: 1024px) {
          .col-md-4 {
            flex: 0 0 auto;
            width: 50%;
          }

          .col-lg-4 {
            flex: 0 0 auto;
            width: 33.333333%;
          }
        }

        /* Enhanced form styling */
        .form-check {
          transition: all 0.2s ease;
        }

        .form-check:hover {
          background-color: #f8f9fa;
        }

        .form-check input:checked + label {
          color: #0061ed;
          font-weight: 600;
        }

        .border-dashed {
          border-style: dashed !important;
        }

        .bg-light {
          background-color: #f8f9fa !important;
        }
      `}</style>

      <div className="container-fluid bg-light min-vh-100">
        <div className="container py-4 py-md-5">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="mb-4 mb-md-5 text-center">
                <h1 className="display-5 fw-bold text-dark mb-3">Sales Order Form</h1>
                <p className="text-muted fs-5">Complete all steps to generate job number</p>
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
                          } ${isClickable ? 'clickable' : ''} mb-2`}
                        >
                          {isCompleted ? <Check size={22} /> : <Icon size={22} />}
                        </button>
                        <div className="text-center">
                          <p
                            className={`small fw-medium mb-1 ${
                              isCurrent ? 'clr-blue' : isCompleted ? 'text-success' : 'text-muted'
                            }`}
                            style={{ fontSize: '10px' }}
                          >
                            Step {index + 1}
                          </p>
                          <p
                            className={`small mb-0 ${
                              isCurrent ? 'clr-blue' : isCompleted ? 'text-success' : 'text-muted'
                            }`}
                            style={{ fontSize: '9px', lineHeight: '1.2' }}
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
                                <div className="row g-3">
                                  {step.fields
                                    .filter((field) => field.type !== 'header')
                                    .map((field) => {
                                      const value = formData[step.id][field.name]
                                      let displayValue = ''

                                      if (Array.isArray(value)) {
                                        displayValue = value.length > 0 ? value.join(', ') : 'None selected'
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
                          isCurrentStepValid ? 'btn-success' : 'btn-outline-success'
                        } d-flex align-items-center justify-content-center px-4 py-2`}
                      >
                        <Check size={22} className="me-2" />
                        Submit & Generate Job Number
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

export default MultiStepWizard
