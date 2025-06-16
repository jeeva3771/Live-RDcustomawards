import React, { useState } from 'react'
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
} from 'lucide-react'
import AdvancedRichTextEditor from '../Textarea'

const MultiStepWizard = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    date: '',
    jobOwner: '',
    jobQty: '',
    jobCompletionDate: '',
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
    deliveryType: '',
    courier: '',
    productName: '',
    productSize: '',
    packaging: '',
    packingType: '',
    outerPack: '',
    innerPack: '',
    accessories: [],
    payment: '',
    takePhoto: null,
    imageUpload: null,
    time: '',
    bankDetails: '',
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [editingFromReview, setEditingFromReview] = useState(false)

  const steps = [
    {
      id: 'welcome',
      title: 'Sales Order Form',
      type: 'welcome',
      subtitle: 'Welcome! Please fill out this form to submit your sales order.',
    },
    {
      id: 'date',
      title: 'Date',
      field: 'date',
      type: 'date',
      placeholder: 'yyyy-mm-dd',
      required: true,
    },
    {
      id: 'job-info',
      title: 'JOB NO',
      subtitle: '3 Questions',
      isSection: true,
      required: true,
    },
    {
      id: 'job-owner',
      title: 'Job Owner',
      field: 'jobOwner',
      type: 'select',
      placeholder: 'Please Select',
      options: ['John Doe', 'RD', '	Mike Johnson', 'David Chen'],
      required: true,
    },
    {
      id: 'job-qty',
      title: 'JOB QTY',
      field: 'jobQty',
      type: 'number',
      placeholder: 'e.g. 23',
      required: true,
    },
    {
      id: 'job-completion',
      title: 'JOB COMPLETION DATE',
      field: 'jobCompletionDate',
      type: 'date',
      placeholder: 'yyyy-mm-dd',
      required: true,
    },
    {
      id: 'client-section',
      title: 'CLIENT DETAILS',
      subtitle: '15 Questions',
      isSection: true,
      required: true,
    },
    {
      id: 'client-name',
      title: 'Client Name',
      field: 'clientName',
      type: 'text',
      placeholder: '',
      required: true,
    },
    {
      id: 'contact-person',
      title: 'Contact Person',
      field: 'contactPerson',
      type: 'text',
      placeholder: '',
      required: true,
    },
    {
      id: 'phone-number',
      title: 'Phone Number',
      field: 'phoneNumber',
      type: 'tel',
      placeholder: '(___) ___-____',
      helper: 'Please enter a valid phone number.',
      required: true,
    },
    {
      id: 'email',
      title: 'Email',
      field: 'email',
      type: 'email',
      placeholder: '',
      helper: 'example@example.com',
      required: true,
    },
    {
      id: 'billing-address',
      title: 'Billing Address',
      type: 'address',
      fields: [
        { field: 'billingStreetAddress', placeholder: '', label: 'Street Address' },
        { field: 'billingStreetAddress2', placeholder: 'Street Address Line 2', label: '' },
        { field: 'billingCity', placeholder: 'City', label: '' },
        { field: 'billingState', placeholder: 'State / Province', label: '' },
        { field: 'billingPostalCode', placeholder: 'Postal / Zip Code', label: '' },
      ],
      required: true,
    },
    {
      id: 'delivery-address',
      title: 'Delivery Address',
      type: 'address',
      fields: [
        { field: 'deliveryStreetAddress', placeholder: '', label: 'Street Address' },
        { field: 'deliveryStreetAddress2', placeholder: 'Street Address Line 2', label: '' },
        { field: 'deliveryCity', placeholder: 'City', label: '' },
        { field: 'deliveryState', placeholder: 'State / Province', label: '' },
        { field: 'deliveryPostalCode', placeholder: 'Postal / Zip Code', label: '' },
      ],
      required: true,
    },
    {
      id: 'delivery-type',
      title: 'Delivery Type',
      field: 'deliveryType',
      type: 'radio',
      options: ['Single Point', 'Multi Point'],
      required: true,
    },
    {
      id: 'courier',
      title: 'Courier',
      field: 'courier',
      type: 'radio',
      options: ['Client Courier', 'RD Courier'],
      required: true,
    },
    {
      id: 'product-name',
      title: 'Product Name',
      field: 'productName',
      type: 'text',
      placeholder: '',
      required: true,
    },
    {
      id: 'product-size',
      title: 'Product Size',
      field: 'productSize',
      type: 'text',
      placeholder: '',
      required: true,
    },
    {
      id: 'packaging-section',
      title: 'PACKAGING DETAILS',
      subtitle: '5 Questions',
      isSection: true,
    },
    {
      id: 'packaging',
      title: 'Packaging',
      field: 'packaging',
      type: 'text',
      placeholder: '',
      required: true,
    },
    {
      id: 'packing-type',
      title: 'Packing Type',
      field: 'packingType',
      type: 'radio',
      options: ['Standard', 'Premium', 'Gift Box', 'Custom'],
      required: true,
    },
    {
      id: 'outer-pack',
      title: 'Outer Pack',
      field: 'outerPack',
      type: 'select',
      placeholder: 'Please Select',
      options: ['Cardboard Box', 'Wooden Crate', 'Plastic Container', 'Bubble Wrap', 'None'],
      required: true,
    },
    {
      id: 'inner-pack',
      title: 'Inner Pack',
      field: 'innerPack',
      type: 'select',
      placeholder: 'Please Select',
      options: ['Foam Padding', 'Tissue Paper', 'Bubble Wrap', 'Velvet Pouch', 'None'],
      required: true,
    },
    {
      id: 'accessories',
      title: 'Accessories (Selection)',
      field: 'accessories',
      type: 'checkbox',
      options: ['Certificate', 'Gift Card', 'Ribbon', 'Custom Tag', 'Instruction Manual'],
    },
    {
      id: 'payment',
      title: 'Payment',
      field: 'payment',
      type: 'radio-vertical',
      options: ['100% Advance', '50% Advance & Balance when Material is Ready', 'Corporate Credit'],
      required: true,
    },
    {
      id: 'take-photo',
      title: 'Take Photo',
      field: 'takePhoto',
      type: 'camera',
      placeholder: '',
    },
    {
      id: 'image-upload',
      title: 'Image Upload',
      field: 'imageUpload',
      type: 'file',
      placeholder: '',
    },
    {
      id: 'time',
      title: 'Time',
      field: 'time',
      type: 'time',
      placeholder: '14:25',
      required: true,
    },
    {
      id: 'bank-details',
      title:
        "A/c Holder's Name : RD CUSTOM AWARDS PRIVATE LIMITED Bank Name : HDFC BANK A/c No. : 59209820490266 Branch : KALINA Branch IFS Code: HDFC0001573",
      field: 'bankDetails',
      type: 'textarea',
      placeholder: '',
      required: true,
    },
    {
      id: 'review',
      title: 'Review and Submit',
      type: 'review',
    },
  ]

  const totalSteps = steps.length
  const progressPercentage = ((currentStep + 1) / totalSteps) * 100

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1)
      setEditingFromReview(false)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = () => {
    setIsSubmitted(true)
  }

  const handleEditField = (fieldName) => {
    const stepIndex = steps.findIndex((step) => {
      if (step.field === fieldName) return true
      if (step.fields) {
        return step.fields.some((field) => field.field === fieldName)
      }
      return false
    })

    if (stepIndex !== -1) {
      setEditingFromReview(true)
      setCurrentStep(stepIndex)
    }
  }

  const getFieldValue = (fieldName) => {
    if (fieldName.includes('billing') || fieldName.includes('delivery')) {
      const prefix = fieldName.includes('billing') ? 'billing' : 'delivery'
      const addressParts = [
        formData[`${prefix}StreetAddress`],
        formData[`${prefix}StreetAddress2`],
        formData[`${prefix}City`],
        formData[`${prefix}State`],
        formData[`${prefix}PostalCode`],
      ]
        .filter((part) => part)
        .join(', ')
      return addressParts
    }
    return formData[fieldName]
  }

  const renderStepContent = () => {
    const step = steps[currentStep]

    if (step.type === 'welcome') {
      return (
        <div className="welcome-container">
          {/* <div className="welcome-icon">
            <div className="logo-icon"></div>
          </div> */}
          <h1 className="welcome-title">{step.title}</h1>
          <p className="welcome-subtitle">{step.subtitle}</p>
          <div className="welcome-features">
            <div className="feature-item">
              <div className="feature-number">20+</div>
              <div className="feature-text">Questions to complete</div>
            </div>
            {/* <div className="feature-item">
              <div className="feature-number">5</div>
              <div className="feature-text">Minutes to finish</div>
            </div> */}
          </div>
        </div>
      )
    }

    if (step.isSection) {
      return (
        <div className="section-header">
          <h2 className="section-title">{step.title}</h2>
          <p className="section-subtitle">{step.subtitle}</p>
        </div>
      )
    }

    if (step.type === 'review') {
      const reviewData = [
        { label: '1. Date', field: 'date', value: formData.date },
        { label: '2. Job Owner', field: 'jobOwner', value: formData.jobOwner },
        { label: '3. JOB QTY', field: 'jobQty', value: formData.jobQty },
        {
          label: '4. JOB COMPLETION DATE',
          field: 'jobCompletionDate',
          value: formData.jobCompletionDate,
        },
        { label: '5. Client Name', field: 'clientName', value: formData.clientName },
        { label: '6. Contact Person', field: 'contactPerson', value: formData.contactPerson },
        { label: '7. Phone Number', field: 'phoneNumber', value: formData.phoneNumber },
        { label: '8. Email', field: 'email', value: formData.email },
        {
          label: '9. Billing Address',
          field: 'billingStreetAddress',
          value: getFieldValue('billingStreetAddress'),
        },
        {
          label: '10. Delivery Address',
          field: 'deliveryStreetAddress',
          value: getFieldValue('deliveryStreetAddress'),
        },
        { label: '11. Delivery Type', field: 'deliveryType', value: formData.deliveryType },
        { label: '12. Courier', field: 'courier', value: formData.courier },
        { label: '13. Product Name', field: 'productName', value: formData.productName },
        { label: '14. Product Size', field: 'productSize', value: formData.productSize },
        { label: '15. Packaging', field: 'packaging', value: formData.packaging },
        { label: '16. Packing Type', field: 'packingType', value: formData.packingType },
        { label: '17. Outer Pack', field: 'outerPack', value: formData.outerPack },
        { label: '18. Inner Pack', field: 'innerPack', value: formData.innerPack },
        {
          label: '19. Accessories',
          field: 'accessories',
          value: Array.isArray(formData.accessories)
            ? formData.accessories.join(', ')
            : formData.accessories,
        },
        { label: '20. Payment', field: 'payment', value: formData.payment },
        {
          label: '21. Take Photo',
          field: 'takePhoto',
          value: formData.takePhoto ? 'Photo taken' : '',
        },
        {
          label: '22. Image Upload',
          field: 'imageUpload',
          value: formData.imageUpload ? 'Image uploaded' : '',
        },
        { label: '23. Time', field: 'time', value: formData.time, highlight: true },
        { label: '24. Bank Details', field: 'bankDetails', value: formData.bankDetails },
      ]

      return (
        <div className="review-container">
          <div className="review-card">
            <div className="review-header">
              <h2 className="review-title">Sales Order Form - Full Details</h2>
            </div>

            <div className="review-content">
              {reviewData.map((item, index) => (
                <div key={index} className="review-row">
                  <span className="review-label">{item.label}</span>
                  <div className="review-value-container">
                    <span className={`review-value ${item.highlight ? 'highlight' : ''}`}>
                      {item.value || '-'}
                    </span>
                    <button
                      onClick={() => handleEditField(item.field)}
                      className="edit-btn"
                      title="Edit this field"
                    >
                      <Edit size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className="form-step">
        <h2 className="step-title">{step.title}</h2>

        <div className="form-field">
          {step.type === 'select' ? (
            <div className="select-wrapper">
              <select
                value={formData[step.field] || ''}
                onChange={(e) => handleInputChange(step.field, e.target.value)}
                className="form-input form-select"
              >
                <option value="">{step.placeholder}</option>
                {step.options?.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <ChevronRight className="select-icon" />
            </div>
          ) : step.type === 'date' ? (
            <div className="date-wrapper">
              <input
                type="date"
                value={formData[step.field] || ''}
                onChange={(e) => handleInputChange(step.field, e.target.value)}
                className="form-input"
              />
              {/* {step.placeholder && <label className="date-label">{step.placeholder}</label>} */}
            </div>
          ) : step.type === 'time' ? (
            <div className="time-wrapper">
              <input
                type="time"
                value={formData[step.field] || ''}
                onChange={(e) => handleInputChange(step.field, e.target.value)}
                className="form-input"
              />
              {/* <Clock className="time-icon" /> */}
            </div>
          ) : step.type === 'textarea' ? (
            // <div className="textarea-wrapper">
            //   <textarea
            //     value={formData[step.field] || ''}
            //     onChange={(e) => handleInputChange(step.field, e.target.value)}
            //     placeholder={step.placeholder}
            //     rows={6}
            //     className="form-textarea"
            //   />
            //   <div className="toolbar">
            //     <Bold className="toolbar-icon" />
            //     <Italic className="toolbar-icon" />
            //     <Underline className="toolbar-icon" />
            //     <Link className="toolbar-icon" />
            //     <List className="toolbar-icon" />
            //     <Image className="toolbar-icon" />
            //     <Smile className="toolbar-icon" />
            //   </div>
            // </div>
            <AdvancedRichTextEditor />
          ) : step.type === 'camera' ? (
            <div className="camera-upload">
              <button
                onClick={() => handleInputChange(step.field, 'photo-taken')}
                className="upload-btn"
              >
                TAKE PHOTO
              </button>
              {formData[step.field] && <p className="success-text">Photo captured!</p>}
            </div>
          ) : step.type === 'file' ? (
            <div className="file-upload">
              <button
                onClick={() => handleInputChange(step.field, 'file-uploaded')}
                className="upload-btn"
              >
                BROWSE AND PREVIEW
              </button>
              {formData[step.field] && <p className="success-text">File uploaded!</p>}
            </div>
          ) : step.type === 'address' ? (
            <div className="address-fields">
              {step.fields.slice(0, 2).map((field, index) => (
                <div key={field.field} className="address-field">
                  {field.label && <label className="field-label">{field.label}{step.required === true ? <span className="text-danger fs-6">*</span> : ''}</label>}
                  <input
                    type="text"
                    value={formData[field.field] || ''}
                    onChange={(e) => handleInputChange(field.field, e.target.value)}
                    placeholder={field.placeholder}
                    className="form-input"
                  />
                </div>
              ))}
              <div className="address-row">
                <input
                  type="text"
                  value={formData[step.fields[2].field] || ''}
                  onChange={(e) => handleInputChange(step.fields[2].field, e.target.value)}
                  placeholder={step.fields[2].placeholder}
                  className="form-input"
                />
                <input
                  type="text"
                  value={formData[step.fields[3].field] || ''}
                  onChange={(e) => handleInputChange(step.fields[3].field, e.target.value)}
                  placeholder={step.fields[3].placeholder}
                  className="form-input"
                />
              </div>
              <div className="postal-field">
                <input
                  type="text"
                  value={formData[step.fields[4].field] || ''}
                  onChange={(e) => handleInputChange(step.fields[4].field, e.target.value)}
                  placeholder={step.fields[4].placeholder}
                  className="form-input"
                />
              </div>
            </div>
          ) : step.type === 'radio' ? (
            <div className="radio-grid">
              {step.options?.map((option, index) => (
                <label key={index} className="radio-option">
                  <input
                    type="radio"
                    name={step.field}
                    value={option}
                    checked={formData[step.field] === option}
                    onChange={(e) => handleInputChange(step.field, e.target.value)}
                    className="radio-input"
                  />
                  <span className="radio-label">{option}</span>
                </label>
              ))}
            </div>
          ) : step.type === 'radio-vertical' ? (
            <div className="radio-vertical">
              {step.options?.map((option, index) => (
                <label key={index} className="radio-option">
                  <input
                    type="radio"
                    name={step.field}
                    value={option}
                    checked={formData[step.field] === option}
                    onChange={(e) => handleInputChange(step.field, e.target.value)}
                    className="radio-input"
                  />
                  <span className="radio-label">{option}</span>
                </label>
              ))}
            </div>
          ) : step.type === 'checkbox' ? (
            <div className="checkbox-group">
              {step.options?.map((option, index) => (
                <label key={index} className="checkbox-option">
                  <input
                    type="checkbox"
                    value={option}
                    checked={
                      Array.isArray(formData[step.field])
                        ? formData[step.field].includes(option)
                        : false
                    }
                    onChange={(e) => {
                      const currentValues = Array.isArray(formData[step.field])
                        ? formData[step.field]
                        : []
                      const newValues = e.target.checked
                        ? [...currentValues, option]
                        : currentValues.filter((item) => item !== option)
                      handleInputChange(step.field, newValues)
                    }}
                    className="checkbox-input"
                  />
                  <span className="checkbox-label">{option}</span>
                </label>
              ))}
            </div>
          ) : (
            <input
              type={step.type}
              value={formData[step.field] || ''}
              onChange={(e) => handleInputChange(step.field, e.target.value)}
              placeholder={step.placeholder}
              className="form-input"
            />
          )}

          {step.helper && <p className="helper-text">{step.helper}</p>}
        </div>
      </div>
    )
  }

  const getButtonText = () => {
    const currentStepData = steps[currentStep]

    if (editingFromReview && currentStepData?.type !== 'review') {
      return 'SAVE & BACK TO REVIEW'
    }

    if (currentStepData?.type === 'review') {
      return 'REVIEW AND SUBMIT'
    }

    if (currentStepData?.type === 'welcome') {
      return 'START FORM'
    }

    return 'NEXT'
  }

  const handleButtonClick = () => {
    const currentStepData = steps[currentStep]

    if (editingFromReview && currentStepData?.type !== 'review') {
      setCurrentStep(steps.length - 1)
      setEditingFromReview(false)
    } else if (currentStepData?.type === 'review') {
      handleSubmit()
    } else {
      handleNext()
    }
  }

  return (
    <div className="wizard-container">
      <style>{`
        * {
          box-sizing: border-box;
        }

        .wizard-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #dbeafe 0%, #e0e7ff 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.5rem;
        }

        @media (min-width: 768px) {
          .wizard-container {
            padding: 1rem;
          }
        }

        .wizard-content {
          width: 100%;
          max-width: 48rem;
        }

        .welcome-container {
          text-align: center;
          padding: 1rem 0;
        }

        @media (min-width: 768px) {
          .welcome-container {
            padding: 2rem 0;
          }
        }

        .welcome-icon {
          display: flex;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        .welcome-title {
          font-size: 2rem;
          font-weight: bold;
          color: #1f2937;
          margin-bottom: 1rem;
          margin-top: 0;
        }

        @media (min-width: 768px) {
          .welcome-title {
            font-size: 2.5rem;
          }
        }

        .welcome-subtitle {
          color: #6b7280;
          font-size: 1rem;
          margin-bottom: 2rem;
          margin-top: 0;
          line-height: 1.6;
        }

        @media (min-width: 768px) {
          .welcome-subtitle {
            font-size: 1.125rem;
          }
        }

        .welcome-features {
          display: flex;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .feature-item {
          text-align: center;
          min-width: 120px;
        }

        .feature-number {
          font-size: 2rem;
          font-weight: bold;
          color: #0061ed;
          margin-bottom: 0.5rem;
        }

        .feature-text {
          color: #6b7280;
          font-size: 0.875rem;
        }

        .thank-you-card {
          background: white;
          border-radius: 1rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          padding: 2rem;
          text-align: center;
        }

        @media (min-width: 768px) {
          .thank-you-card {
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
            padding: 3rem;
          }
        }

        .success-icon {
          width: 4rem;
          height: 4rem;
          background: #22c55e;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
        }

        @media (min-width: 768px) {
          .success-icon {
            width: 5rem;
            height: 5rem;
          }
        }

        .thank-you-title {
          font-size: 1.5rem;
          font-weight: bold;
          color: #1f2937;
          margin-bottom: 1rem;
          margin-top: 0;
        }

        @media (min-width: 768px) {
          .thank-you-title {
            font-size: 1.875rem;
          }
        }

        .thank-you-text {
          color: #6b7280;
          font-size: 1rem;
          margin: 0;
        }

        @media (min-width: 768px) {
          .thank-you-text {
            font-size: 1.125rem;
          }
        }

        // .logo-icon {
        //   width: 2rem;
        //   height: 2rem;
        //   background: linear-gradient(135deg, #3b82f6 0%, #6366f1 100%);
        //   border-radius: 0.375rem;
        //   transform: rotate(12deg);
        // }

        // @media (min-width: 768px) {
        //   .logo-icon {
        //     width: 2.5rem;
        //     height: 2.5rem;
        //   }
        // }

        .form-card {
          background: white;
          border-radius: 0.75rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          overflow: hidden;
        }

        @media (min-width: 768px) {
          .form-card {
            border-radius: 1rem;
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
          }
        }

        .progress-bar {
          height: 0.375rem;
          background: #f3f4f6;
        }

        @media (min-width: 768px) {
          .progress-bar {
            height: 0.5rem;
          }
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #3b82f6 0%, #6366f1 100%);
          transition: width 0.5s ease-out;
        }

        .form-content {
          padding: 1.5rem;
        }

        @media (min-width: 768px) {
          .form-content {
            padding: 3rem;
          }
        }

        .section-header {
          text-align: center;
          background: #0061ed;
          color: white;
          padding: 1.5rem;
          border-radius: 0.5rem;
          margin-bottom: 1rem;
        }

        @media (min-width: 768px) {
          .section-header {
            padding: 2rem;
            margin-bottom: 2rem;
          }
        }

        .section-title {
          font-size: 1.25rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
          margin-top: 0;
          color: white;
        }

        @media (min-width: 768px) {
          .section-title {
            font-size: 1.5rem;
          }
        }

        .section-subtitle {
          margin-bottom: 0;
          margin-top: 0;
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.8);
        }

        @media (min-width: 768px) {
          .section-subtitle {
            font-size: 1rem;
          }
        }

        .form-step {
          width: 100%;
          max-width: 32rem;
          margin: 0 auto;
        }

        .step-title {
          font-size: 1.25rem;
          font-weight: bold;
          color: #1f2937;
          margin-bottom: 1.5rem;
          margin-top: 0;
          text-align: center;
          line-height: 1.4;
        }

        @media (min-width: 768px) {
          .step-title {
            font-size: 1.5rem;
            margin-bottom: 2rem;
          }
        }

        .form-field {
          margin-bottom: 1.5rem;
        }

        @media (min-width: 768px) {
          .form-field {
            margin-bottom: 2rem;
          }
        }

        .form-input,
        .form-select,
        .form-textarea {
          width: 100%;
          padding: 0.875rem 1rem;
          border: 2px solid #e5e7eb;
          border-radius: 0.5rem;
          font-size: 1rem;
          color: #374151;
          outline: none;
          transition: border-color 0.2s;
          box-sizing: border-box;
          -webkit-appearance: none;
        }

        @media (min-width: 768px) {
          .form-input,
          .form-select,
          .form-textarea {
            padding: 0.75rem 1rem;
          }
        }

        .form-input:focus,
        .form-select:focus,
        .form-textarea:focus {
          border-color: #3b82f6;
        }

        .form-textarea {
          resize: none;
          min-height: 120px;
        }

        .select-wrapper {
          position: relative;
        }

        .select-icon {
          position: absolute;
          right: 0.75rem;
          top: 50%;
          transform: translateY(-50%) rotate(-90deg);
          width: 1.25rem;
          height: 1.25rem;
          color: #9ca3af;
          pointer-events: none;
        }

        .date-wrapper,
        .time-wrapper {
          position: relative;
        }

        // .time-icon {
        //   position: absolute;
        //   left: 0.75rem;
        //   top: 50%;
        //   transform: translateY(-50%);
        //   width: 1.25rem;
        //   height: 1.25rem;
        //   color: #9ca3af;
        //   pointer-events: none;
        // }

        // .date-label {
        //   position: absolute;
        //   bottom: -1.5rem;
        //   left: 0;
        //   font-size: 0.75rem;
        //   color: #3b82f6;
        // }

        // @media (min-width: 768px) {
        //   .date-label {
        //     font-size: 0.875rem;
        //   }
        // }

        .textarea-wrapper {
          background: #f9fafb;
          padding: 1rem;
          border-radius: 0.5rem;
          border: 2px dashed #d1d5db;
        }

        .toolbar {
          display: flex;
          align-items: center;
          margin-top: 0.75rem;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .toolbar-icon {
          width: 1rem;
          height: 1rem;
          color: #6b7280;
          cursor: pointer;
          transition: color 0.2s;
        }

        .toolbar-icon:hover {
          color: #374151;
        }

        .camera-upload,
        .file-upload {
          border: 2px dashed #93c5fd;
          border-radius: 0.5rem;
          padding: 1.5rem;
          text-align: center;
        }

        @media (min-width: 768px) {
          .camera-upload,
          .file-upload {
            padding: 2rem;
          }
        }

        .file-upload {
          border-color: #d1d5db;
        }

        .upload-btn {
          background: #0061ed;
          color: white;
          padding: 0.75rem 1.25rem;
          border-radius: 0.5rem;
          border: none;
          cursor: pointer;
          font-size: 0.875rem;
          font-weight: 500;
          transition: background-color 0.2s;
          min-height: 44px;
        }

        @media (min-width: 768px) {
          .upload-btn {
            font-size: 1rem;
            padding: 0.5rem 1.5rem;
          }
        }

        .upload-btn:hover {
          background: #0061ed;
        }

        .success-text {
          color: #16a34a;
          margin-top: 0.5rem;
          margin-bottom: 0;
          font-size: 0.875rem;
        }

        .address-fields {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .address-field {
          display: flex;
          flex-direction: column;
        }

        .field-label {
          font-size: 0.875rem;
          color: #6b7280;
          margin-bottom: 0.25rem;
          display: block;
        }

        .address-row {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        @media (min-width: 768px) {
          .address-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
          }
        }

        .postal-field {
          width: 100%;
        }

        @media (min-width: 768px) {
          .postal-field {
            width: 50%;
          }
        }

        .radio-grid {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        @media (min-width: 768px) {
          .radio-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
          }
        }

        .radio-vertical {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .checkbox-group {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .radio-option,
        .checkbox-option {
          display: flex;
          align-items: center;
          padding: 1rem;
          border: 2px solid #e5e7eb;
          border-radius: 0.5rem;
          cursor: pointer;
          transition: border-color 0.2s;
          min-height: 44px;
        }

        .radio-option:hover,
        .checkbox-option:hover {
          border-color: #d1d5db;
        }

        .radio-input,
        .checkbox-input {
          margin-right: 0.75rem;
          width: 1rem;
          height: 1rem;
          flex-shrink: 0;
        }

        .radio-label,
        .checkbox-label {
          color: #374151;
          font-size: 0.875rem;
          line-height: 1.4;
        }

        @media (min-width: 768px) {
          .radio-label,
          .checkbox-label {
            font-size: 1rem;
          }
        }

        .helper-text {
          font-size: 0.875rem;
          color: #6b7280;
          margin-top: 0.5rem;
          margin-bottom: 0;
        }

        .review-container {
          width: 100%;
        }

        .review-card {
          background: #f9fafb;
          border-radius: 0.5rem;
          overflow: hidden;
        }

        .review-header {
          background: white;
          padding: 1rem;
          border-bottom: 1px solid #e5e7eb;
        }

        @media (min-width: 768px) {
          .review-header {
            padding: 1.5rem;
          }
        }

        .review-title {
          font-size: 1.25rem;
          font-weight: bold;
          color: #1f2937;
          margin: 0;
          text-align: center;
        }

        @media (min-width: 768px) {
          .review-title {
            font-size: 1.5rem;
          }
        }

        .review-content {
          padding: 1rem;
          max-height: 400px;
          overflow-y: auto;
        }

        @media (min-width: 768px) {
          .review-content {
            padding: 1.5rem;
            max-height: 500px;
          }
        }

        .review-row {
          display: flex;
          flex-direction: column;
          padding: 0.75rem 0;
          border-bottom: 1px solid #e5e7eb;
          gap: 0.25rem;
        }

        @media (min-width: 768px) {
          .review-row {
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
            gap: 1rem;
          }
        }

        .review-row:last-child {
          border-bottom: none;
        }

        .review-label {
          font-weight: 500;
          color: #374151;
          font-size: 0.875rem;
          min-width: 200px;
        }

        @media (min-width: 768px) {
          .review-label {
            font-size: 1rem;
          }
        }

        .review-value-container {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex: 1;
        }

        .review-value {
          color: #6b7280;
          font-size: 0.875rem;
          word-break: break-word;
          flex: 1;
        }

        @media (min-width: 768px) {
          .review-value {
            font-size: 1rem;
            text-align: right;
          }
        }

        .review-value.highlight {
          color: #3b82f6;
          font-weight: 600;
        }

        .edit-btn {
          background: #f3f4f6;
          border: 1px solid #d1d5db;
          border-radius: 0.375rem;
          padding: 0.25rem;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          flex-shrink: 0;
        }

        .edit-btn:hover {
          background: #e5e7eb;
          border-color: #9ca3af;
        }

        .edit-btn svg {
          color: #6b7280;
        }

        .navigation {
          padding: 1rem 1.5rem;
        }

        @media (min-width: 768px) {
          .navigation {
            padding: 0 3rem 2rem;
          }
        }

        .nav-buttons {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        @media (min-width: 768px) {
          .nav-buttons {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            gap: 0;
          }
        }

        .nav-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.875rem 1.5rem;
          border-radius: 0.5rem;
          font-weight: 500;
          border: none;
          cursor: pointer;
          font-size: 0.875rem;
          transition: background-color 0.2s;
          background: #0061ed;
          color: white;
          min-height: 44px;
          width: 100%;
        }

        @media (min-width: 768px) {
          .nav-btn {
            font-size: 1rem;
            padding: 0.75rem 1.5rem;
            width: auto;
          }
        }

        .nav-btn:hover:not(.disabled) {
          background: #2563eb;
        }

        .nav-btn.disabled {
          cursor: not-allowed;
          background: #f3f4f6;
          color: #9ca3af;
        }

        .step-indicators {
          padding: 1rem 1.5rem;
        }

        @media (min-width: 768px) {
          .step-indicators {
            padding: 0 3rem 2rem;
          }
        }

        .indicators {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.375rem;
          flex-wrap: wrap;
          margin-bottom: 0.75rem;
        }

        @media (min-width: 768px) {
          .indicators {
            gap: 0.5rem;
            margin-bottom: 1rem;
          }
        }

        .indicator {
          width: 0.625rem;
          height: 0.625rem;
          border-radius: 50%;
          transition: all 0.3s;
        }

        @media (min-width: 768px) {
          .indicator {
            width: 0.75rem;
            height: 0.75rem;
          }
        }

        .indicator.current {
          background: #0061ed;
          transform: scale(1.25);
        }

        .indicator.completed {
          background: #22c55e;
        }

        .indicator.pending {
          background: #e5e7eb;
        }

        .step-counter {
          text-align: center;
          font-size: 0.875rem;
          color: #6b7280;
          margin: 0;
        }

        @media (max-width: 767px) {
          .form-input,
          .form-select,
          .form-textarea,
          .upload-btn,
          .radio-option,
          .checkbox-option,
          .nav-btn {
            min-height: 44px;
          }

          .radio-input,
          .checkbox-input {
            min-width: 20px;
            min-height: 20px;
          }
        }

        @media (max-width: 767px) {
          .review-content {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }

          .review-content::-webkit-scrollbar {
            display: none;
          }
        }
      `}</style>

      {isSubmitted ? (
        <div className="wizard-content">
          <div className="thank-you-card">
            <div className="success-icon">
              <Check size={40} color="white" />
            </div>
            <h1 className="thank-you-title">Thank You!</h1>
            <p className="thank-you-text">Your submission has been received!</p>
          </div>
        </div>
      ) : (
        <div className="wizard-content">
          <div className="form-card">
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${progressPercentage}%` }}></div>
            </div>

            <div className="form-content">{renderStepContent()}</div>

            <div className="navigation">
              <div className="nav-buttons">
                <button
                  onClick={handlePrevious}
                  disabled={currentStep === 0}
                  className={`nav-btn ${currentStep === 0 ? 'disabled' : ''}`}
                >
                  <ChevronLeft size={20} />
                  {steps[currentStep]?.type === 'review' ? 'BACK TO FORM' : 'PREVIOUS'}
                </button>

                <button onClick={handleButtonClick} className="nav-btn">
                  {getButtonText()}
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            <div className="step-indicators">
              <div className="indicators">
                {steps.map((_, index) => (
                  <div
                    key={index}
                    className={`indicator ${
                      index === currentStep
                        ? 'current'
                        : index < currentStep
                          ? 'completed'
                          : 'pending'
                    }`}
                  ></div>
                ))}
              </div>
              <div className="step-counter">
                {currentStep + 1} of {totalSteps}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MultiStepWizard










import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Check, User, Mail, Phone, MapPin, CreditCard, ChevronDown, ChevronUp } from 'lucide-react';

const MultiFormHandler = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    personal: {
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
    },
    address: {
      street: '',
      city: '',
      state: '',
      zipCode: ''
    },
    payment: {
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      cardholderName: ''
    }
  });

  const [completedSteps, setCompletedSteps] = useState(new Set());
  const [expandedSteps, setExpandedSteps] = useState(new Set());

  const formSteps = [
    {
      id: 'personal',
      title: 'Personal Information',
      icon: User,
      fields: [
        { name: 'firstName', label: 'First Name', type: 'text', required: true },
        { name: 'lastName', label: 'Last Name', type: 'text', required: true },
        { name: 'email', label: 'Email', type: 'email', required: true },
        { name: 'phone', label: 'Phone', type: 'tel', required: true }
      ]
    },
    {
      id: 'address',
      title: 'Address Information',
      icon: MapPin,
      fields: [
        { name: 'street', label: 'Street Address', type: 'text', required: true },
        { name: 'city', label: 'City', type: 'text', required: true },
        { name: 'state', label: 'State', type: 'text', required: true },
        { name: 'zipCode', label: 'ZIP Code', type: 'text', required: true }
      ]
    },
    {
      id: 'payment',
      title: 'Payment Information',
      icon: CreditCard,
      fields: [
        { name: 'cardNumber', label: 'Card Number', type: 'text', required: true },
        { name: 'expiryDate', label: 'Expiry Date (MM/YY)', type: 'text', required: true },
        { name: 'cvv', label: 'CVV', type: 'text', required: true },
        { name: 'cardholderName', label: 'Cardholder Name', type: 'text', required: true }
      ]
    }
  ];

  const handleInputChange = (stepId, fieldName, value) => {
    setFormData(prev => ({
      ...prev,
      [stepId]: {
        ...prev[stepId],
        [fieldName]: value
      }
    }));
  };

  const validateStep = (stepIndex) => {
    const step = formSteps[stepIndex];
    const stepData = formData[step.id];

    return step.fields.every(field => {
      if (field.required) {
        return stepData[field.name] && stepData[field.name].trim() !== '';
      }
      return true;
    });
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCompletedSteps(prev => new Set([...prev, currentStep]));
      if (currentStep < formSteps.length - 1) {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleStepClick = (stepIndex) => {
    setCurrentStep(stepIndex);
  };

  const toggleStepExpansion = (stepIndex) => {
    setExpandedSteps(prev => {
      const newExpanded = new Set(prev);
      if (newExpanded.has(stepIndex)) {
        newExpanded.delete(stepIndex);
      } else {
        newExpanded.add(stepIndex);
      }
      return newExpanded;
    });
  };

  const handleSubmit = () => {
    if (validateStep(currentStep)) {
      setCompletedSteps(prev => new Set([...prev, currentStep]));
      alert('Form submitted successfully!\n\n' + JSON.stringify(formData, null, 2));
    }
  };

  const isStepValid = (stepIndex) => validateStep(stepIndex);
  const isCurrentStepValid = isStepValid(currentStep);
  const allStepsCompleted = formSteps.every((_, index) => completedSteps.has(index));

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Multi-Step Form</h1>
        <p className="text-gray-600">Complete all steps to submit your information</p>
      </div>

      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {formSteps.map((step, index) => {
            const Icon = step.icon;
            const isCompleted = completedSteps.has(index);
            const isCurrent = index === currentStep;
            const isClickable = index <= currentStep || completedSteps.has(index);

            return (
              <div key={step.id} className="flex items-center">
                <button
                  onClick={() => isClickable && handleStepClick(index)}
                  disabled={!isClickable}
                  className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-200 ${
                    isCompleted
                      ? 'bg-green-500 border-green-500 text-white'
                      : isCurrent
                      ? 'bg-blue-500 border-blue-500 text-white'
                      : isClickable
                      ? 'bg-white border-gray-300 text-gray-400 hover:border-blue-300'
                      : 'bg-gray-100 border-gray-200 text-gray-300 cursor-not-allowed'
                  }`}
                >
                  {isCompleted ? <Check size={20} /> : <Icon size={20} />}
                </button>
                <div className="ml-3 text-left">
                  <p className={`text-sm font-medium ${isCurrent ? 'text-blue-600' : isCompleted ? 'text-green-600' : 'text-gray-500'}`}>
                    Step {index + 1}
                  </p>
                  <p className={`text-xs ${isCurrent ? 'text-blue-600' : isCompleted ? 'text-green-600' : 'text-gray-400'}`}>
                    {step.title}
                  </p>
                </div>
                {index < formSteps.length - 1 && (
                  <div className={`mx-4 h-0.5 w-16 ${isCompleted ? 'bg-green-500' : 'bg-gray-300'}`} />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Previous Steps Content - Above Current Form */}
      {currentStep > 0 && (
        <div className="mb-8 bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Previous Steps Summary</h3>

          <div className="space-y-4">
            {formSteps.slice(0, currentStep).map((step, index) => {
              const isExpanded = expandedSteps.has(index);
              return (
                <div key={step.id} className="border border-gray-200 rounded-lg overflow-hidden">
                  {/* Clickable Header */}
                  <button
                    onClick={() => toggleStepExpansion(index)}
                    className="w-full px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between text-left"
                  >
                    <div className="flex items-center">
                      <div className={`w-4 h-4 rounded-full mr-3 ${
                        completedSteps.has(index) ? 'bg-green-500' : 'bg-gray-300'
                      }`} />
                      <h4 className={`font-medium ${
                        completedSteps.has(index) ? 'text-green-700' : 'text-gray-500'
                      }`}>
                        {step.title}
                      </h4>
                      <span className="ml-2 text-xs text-gray-400">
                        (Step {index + 1})
                      </span>
                    </div>

                    <div className="flex items-center">
                      <span className="text-xs text-gray-500 mr-2">
                        {isExpanded ? 'Hide Details' : 'Show Details'}
                      </span>
                      {isExpanded ? (
                        <ChevronUp size={16} className="text-gray-400" />
                      ) : (
                        <ChevronDown size={16} className="text-gray-400" />
                      )}
                    </div>
                  </button>

                  {/* Expandable Content */}
                  {isExpanded && (
                    <div className="px-4 py-3 bg-white border-t border-gray-100">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {step.fields.map((field) => {
                          const value = formData[step.id][field.name];
                          return (
                            <div key={field.name} className="text-sm">
                              <span className="font-medium text-gray-700">{field.label}:</span>{' '}
                              {value ? (
                                <span className="text-gray-900">{value}</span>
                              ) : (
                                <span className="text-gray-400 italic">Not filled</span>
                              )}
                            </div>
                          );
                        })}
                      </div>

                      {/* Edit Button */}
                      <div className="mt-3 pt-3 border-t border-gray-100">
                        <button
                          onClick={() => handleStepClick(index)}
                          className="text-blue-600 hover:text-blue-800 text-xs font-medium transition-colors duration-200"
                        >
                          ← Go back to edit this step
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Current Form */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          {formSteps[currentStep].title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {formSteps[currentStep].fields.map((field) => (
            <div key={field.name} className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                {field.label}
                {field.required && <span className="text-red-500 ml-1">*</span>}
              </label>
              <input
                type={field.type}
                value={formData[formSteps[currentStep].id][field.name]}
                onChange={(e) => handleInputChange(formSteps[currentStep].id, field.name, e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder={`Enter ${field.label.toLowerCase()}`}
              />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <button
            onClick={handlePrev}
            disabled={currentStep === 0}
            className={`flex items-center px-4 py-2 rounded-md ${
              currentStep === 0
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            <ChevronLeft size={20} className="mr-1" />
            Previous
          </button>

          {currentStep === formSteps.length - 1 ? (
            <button
              onClick={handleSubmit}
              disabled={!isCurrentStepValid}
              className={`flex items-center px-6 py-2 rounded-md ${
                isCurrentStepValid
                  ? 'bg-green-600 text-white hover:bg-green-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              <Check size={20} className="mr-1" />
              Submit
            </button>
          ) : (
            <button
              onClick={handleNext}
              disabled={!isCurrentStepValid}
              className={`flex items-center px-4 py-2 rounded-md ${
                isCurrentStepValid
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Next
              <ChevronRight size={20} className="ml-1" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MultiFormHandler;





