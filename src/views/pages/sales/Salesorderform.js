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
} from 'lucide-react'

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
    payment: '',
    takePhoto: null,
    imageUpload: null,
    time: '',
    bankDetails: '',
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const steps = [
    {
      id: 'date',
      title: 'Date',
      field: 'date',
      type: 'date',
      placeholder: 'yyyy-mm-dd',
    },
    {
      id: 'job-info',
      title: 'JOB NO',
      subtitle: '3 Questions',
      isSection: true,
    },
    {
      id: 'job-owner',
      title: 'Job Owner',
      field: 'jobOwner',
      type: 'select',
      placeholder: 'Please Select',
      options: ['Project Manager A', 'Project Manager B', 'Team Lead C', 'Supervisor D'],
    },
    {
      id: 'job-qty',
      title: 'JOB QTY',
      field: 'jobQty',
      type: 'number',
      placeholder: 'e.g. 23',
    },
    {
      id: 'job-completion',
      title: 'JOB COMPLETION DATE',
      field: 'jobCompletionDate',
      type: 'date',
      placeholder: 'yyyy-mm-dd',
    },
    {
      id: 'client-section',
      title: 'CLIENT DETAILS',
      subtitle: '15 Questions',
      isSection: true,
    },
    {
      id: 'client-name',
      title: 'Client Name',
      field: 'clientName',
      type: 'text',
      placeholder: '',
    },
    {
      id: 'contact-person',
      title: 'Contact Person',
      field: 'contactPerson',
      type: 'text',
      placeholder: '',
    },
    {
      id: 'phone-number',
      title: 'Phone Number',
      field: 'phoneNumber',
      type: 'tel',
      placeholder: '(___) ___-____',
      helper: 'Please enter a valid phone number.',
    },
    {
      id: 'email',
      title: 'Email',
      field: 'email',
      type: 'email',
      placeholder: '',
      helper: 'example@example.com',
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
    },
    {
      id: 'delivery-type',
      title: 'Delivery Type',
      field: 'deliveryType',
      type: 'radio',
      options: ['Single Point', 'Multi Point'],
    },
    {
      id: 'courier',
      title: 'Courier',
      field: 'courier',
      type: 'radio',
      options: ['Client Courier', 'RD Courier'],
    },
    {
      id: 'product-name',
      title: 'Product Name',
      field: 'productName',
      type: 'text',
      placeholder: '',
    },
    {
      id: 'product-size',
      title: 'Product Size',
      field: 'productSize',
      type: 'text',
      placeholder: '',
    },
    {
      id: 'payment',
      title: 'Payment',
      field: 'payment',
      type: 'radio-vertical',
      options: ['100% Advance', '50% Advance & Balance when Material is Ready', 'Corporate Credit'],
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
    },
    {
      id: 'bank-details',
      title:
        "A/c Holder's Name : RD CUSTOM AWARDS PRIVATE LIMITED Bank Name : HDFC BANK A/c No. : 59209820490266 Branch : KALINA Branch IFS Code: HDFC0001573",
      field: 'bankDetails',
      type: 'textarea',
      placeholder: '',
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

  const renderStepContent = () => {
    const step = steps[currentStep]

    if (step.isSection) {
      return (
        <div className="section-header">
          <h2 className="section-title">{step.title}</h2>
          <p className="section-subtitle">{step.subtitle}</p>
        </div>
      )
    }

    if (step.type === 'review') {
      return (
        <div className="review-container">
          <div className="review-card">
            <div className="review-header">
              <h2 className="review-title">Sales Order Form</h2>
            </div>

            <div className="review-content">
              {[
                { label: '1. Date', value: formData.date },
                { label: '2. Job Owner', value: formData.jobOwner },
                { label: '3. JOB QTY', value: formData.jobQty },
                { label: '4. JOB COMPLETION DATE', value: formData.jobCompletionDate },
                { label: '5. Client Name', value: formData.clientName },
                { label: '6. Contact Person', value: formData.contactPerson },
                { label: '7. Phone Number', value: formData.phoneNumber },
                { label: '8. Email', value: formData.email },
                {
                  label: '9. Billing Address',
                  value:
                    `${formData.billingStreetAddress} ${formData.billingStreetAddress2} ${formData.billingCity}, ${formData.billingState} ${formData.billingPostalCode}`.trim(),
                },
                {
                  label: '10. Delivery Address',
                  value:
                    `${formData.deliveryStreetAddress} ${formData.deliveryStreetAddress2} ${formData.deliveryCity}, ${formData.deliveryState} ${formData.deliveryPostalCode}`.trim(),
                },
                { label: '11. Delivery Type', value: formData.deliveryType },
                { label: '12. Courier', value: formData.courier },
                { label: '13. Product Name', value: formData.productName },
                { label: '14. Product Size', value: formData.productSize },
                { label: '15. Payment', value: formData.payment },
                { label: '16. Take Photo', value: formData.takePhoto ? 'Photo taken' : '' },
                { label: '17. Image Upload', value: formData.imageUpload ? 'Image uploaded' : '' },
                { label: '18. Time', value: formData.time, highlight: true },
                { label: '19. Bank Details', value: formData.bankDetails },
              ].map((item, index) => (
                <div key={index} className="review-row">
                  <span className="review-label">{item.label}</span>
                  <span className={`review-value ${item.highlight ? 'highlight' : ''}`}>
                    {item.value || '-'}
                  </span>
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
              {/* <Calendar className="date-icon" /> */}
              {step.placeholder && <label className="date-label">{step.placeholder}</label>}
            </div>
          ) : step.type === 'time' ? (
            <div className="time-wrapper">
              <input
                type="time"
                value={formData[step.field] || ''}
                onChange={(e) => handleInputChange(step.field, e.target.value)}
                className="form-input"
              />
              <Clock className="time-icon" />
            </div>
          ) : step.type === 'textarea' ? (
            <div className="textarea-wrapper">
              <textarea
                value={formData[step.field] || ''}
                onChange={(e) => handleInputChange(step.field, e.target.value)}
                placeholder={step.placeholder}
                rows={6}
                className="form-textarea"
              />
              <div className="toolbar">
                <Bold className="toolbar-icon" />
                <Italic className="toolbar-icon" />
                <Underline className="toolbar-icon" />
                <Link className="toolbar-icon" />
                <List className="toolbar-icon" />
                <Image className="toolbar-icon" />
                <Smile className="toolbar-icon" />
              </div>
            </div>
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
                  {field.label && <label className="field-label">{field.label}</label>}
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

  return (
    <div className="wizard-container">
      <style>{`
        /* Reset and base styles */
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

        /* Thank You Page */
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

        /* Logo */
        // .logo-container {
        //   margin-bottom: 2rem;
        // }

        // @media (min-width: 768px) {
        //   .logo-container {
        //     margin-bottom: 3rem;
        //   }
        // }

        .logo {
          width: 3rem;
          height: 3rem;
          background: white;
          border-radius: 0.75rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
        }

        @media (min-width: 768px) {
          .logo {
            width: 4rem;
            height: 4rem;
            box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
            margin-bottom: 2rem;
          }
        }

        .logo-icon {
          width: 1.5rem;
          height: 1.5rem;
          background: linear-gradient(135deg, #3b82f6 0%, #6366f1 100%);
          border-radius: 0.25rem;
          transform: rotate(12deg);
        }

        @media (min-width: 768px) {
          .logo-icon {
            width: 2rem;
            height: 2rem;
          }
        }

        /* Form Card */
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

        /* Section Headers */
        .section-header {
          text-align: center;
        }

        .section-title {
          font-size: 1.25rem;
          font-weight: bold;
          color: #1f2937;
          margin-bottom: 0.5rem;
          margin-top: 0;
        }

        @media (min-width: 768px) {
          .section-title {
            font-size: 1.5rem;
          }
        }

        .section-subtitle {
          color: #6b7280;
          margin-bottom: 1.5rem;
          margin-top: 0;
          font-size: 0.875rem;
        }

        @media (min-width: 768px) {
          .section-subtitle {
            margin-bottom: 2rem;
            font-size: 1rem;
          }
        }

        /* Form Steps */
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

        /* Form Inputs */
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

        /* Select Wrapper */
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

        /* Date and Time Wrappers */
        .date-wrapper,
        .time-wrapper {
          position: relative;
        }

        // .date-icon {
        //   position: absolute;
        //   right: 0.75rem;
        //   top: 50%;
        //   transform: translateY(-50%);
        //   width: 1.25rem;
        //   height: 1.25rem;
        //   color: #9ca3af;
        //   pointer-events: none;
        // }

        .time-icon {
          position: absolute;
          left: 0.75rem;
          top: 50%;
          transform: translateY(-50%);
          width: 1.25rem;
          height: 1.25rem;
          color: #9ca3af;
          pointer-events: none;
        }

        .date-label {
          position: absolute;
          bottom: -1.5rem;
          left: 0;
          font-size: 0.75rem;
          color: #3b82f6;
        }

        @media (min-width: 768px) {
          .date-label {
            font-size: 0.875rem;
          }
        }

        /* Textarea Wrapper */
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

        /* Upload Areas */
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
          background: #3b82f6;
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
          background: #2563eb;
        }

        .success-text {
          color: #16a34a;
          margin-top: 0.5rem;
          margin-bottom: 0;
          font-size: 0.875rem;
        }

        /* Address Fields */
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

        /* Radio Buttons */
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

        .radio-option {
          display: flex;
          align-items: center;
          padding: 1rem;
          border: 2px solid #e5e7eb;
          border-radius: 0.5rem;
          cursor: pointer;
          transition: border-color 0.2s;
          min-height: 44px;
        }

        .radio-option:hover {
          border-color: #d1d5db;
        }

        .radio-input {
          margin-right: 0.75rem;
          width: 1rem;
          height: 1rem;
          flex-shrink: 0;
        }

        .radio-label {
          color: #374151;
          font-size: 0.875rem;
          line-height: 1.4;
        }

        @media (min-width: 768px) {
          .radio-label {
            font-size: 1rem;
          }
        }

        /* Helper Text */
        .helper-text {
          font-size: 0.875rem;
          color: #6b7280;
          margin-top: 0.5rem;
          margin-bottom: 0;
        }

        /* Review Section */
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

        /* Navigation */
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
          background: #3b82f6;
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

        /* Step Indicators */
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
          background: #3b82f6;
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

        // /* Footer */
        // .footer {
        //   text-align: center;
        //   margin-top: 1.5rem;
        //   padding: 0 1rem;
        // }

        // @media (min-width: 768px) {
        //   .footer {
        //     margin-top: 2rem;
        //     padding: 0;
        //   }
        // }

        // .footer-text {
        //   color: #6b7280;
        //   font-size: 0.875rem;
        //   margin: 0;
        // }

        /* Touch improvements for mobile */
        @media (max-width: 767px) {
          .form-input,
          .form-select,
          .form-textarea,
          .upload-btn,
          .radio-option,
          .nav-btn {
            min-height: 44px;
          }

          .radio-input {
            min-width: 20px;
            min-height: 20px;
          }
        }

        /* Hide scrollbars on mobile for review content */
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
          {/* <div className="logo-container">
            <div className="logo">
              <div className="logo-icon"></div>
            </div>
          </div> */}

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

                <button
                  onClick={steps[currentStep]?.type === 'review' ? handleSubmit : handleNext}
                  className="nav-btn"
                >
                  {steps[currentStep]?.type === 'review' ? 'REVIEW AND SUBMIT' : 'NEXT'}
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

          {/* <div className="footer">
            <p className="footer-text">Now create your own JotForm - It's free!</p>
          </div> */}
        </div>
      )}
    </div>
  )
}

export default MultiStepWizard
