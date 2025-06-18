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
  Briefcase,
  ChevronDown,
  ChevronUp,
  User,
} from 'lucide-react'
import AdvancedRichTextEditor from '../Textarea'
// import React, { useState } from "react";
// import {
// ChevronLeft,
// ChevronRight,
// Check,
// Calendar,

// } from "lucide-react";

const MultiStepWizard = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    // date: {
    //   date: '',
    // },
    jobDetails: {
      jobOwner: '',
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
    },
  })

  const [completedSteps, setCompletedSteps] = useState(new Set())
  const [expandedSteps, setExpandedSteps] = useState(new Set())

  const formSteps = [
    // {
    //   id: 'date',
    //   title: 'Date',
    //   icon: Calendar,
    //   fields: [{ name: 'date', label: 'Date', type: 'date', required: true }],
    // },
    {
      id: 'jobDetails',
      title: 'Job Details',
      icon: Briefcase,
      fields: [
        {
          name: 'jobOwner',
          label: 'Job Owner',
          type: 'select',
          required: true,
          options: ['Please Select', 'John Doe', 'RD', 'Mike Johnson', 'David Chen'],
        },
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

        // Billing Address Section
        {
          name: 'billingAddressHeader',
          label: 'Billing Address',
          type: 'header',
        },
        {
          name: 'billingStreetAddress',
          label: 'Street Address',
          type: 'text',
          required: true,
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
          required: true,
          width: 'half',
        },
        {
          name: 'billingState',
          label: 'State / Province',
          type: 'text',
          required: true,
          width: 'half',
        },
        {
          name: 'billingPostalCode',
          label: 'Postal / Zip Code',
          type: 'text',
          required: true,
        },

        // Delivery Address Section
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

        // Delivery Options
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
          ],
        },

        // Product Information
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

  const validateStep = (stepIndex) => {
    const step = formSteps[stepIndex]
    const stepData = formData[step.id]

    return step.fields.every((field) => {
      if (field.type === 'header') return true

      if (field.required) {
        const value = stepData[field.name]
        if (field.type === 'select') {
          return value && value.trim() !== '' && value !== 'Please Select'
        }
        return value && value.trim() !== ''
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
    alert('Form submitted successfully!')
  }

  const isCurrentStepValid = validateStep(currentStep)

  const renderField = (field, stepId) => {
    if (field.type === 'header') {
      return (
        <div key={field.name} className="mb-4 mt-5 first:mt-0">
          <h3 className="h5 fw-semibold text-dark mb-3 pb-2 border-bottom">{field.label}</h3>
        </div>
      )
    }

    if (field.type === 'radio') {
      return (
        <div key={field.name} className="mb-4">
          <label className="form-label fw-medium fs-6 mb-3">
            {field.label}
            {field.required && <span className="text-danger ms-1">*</span>}
          </label>
          <div className="d-flex gap-4">
            {field.options.map((option) => (
              <div key={option.value} className="form-check">
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
                  className="form-check-label"
                  htmlFor={`${field.name}_${option.value.replace(/\s+/g, '_')}`}
                >
                  {option.label}
                </label>
              </div>
            ))}
          </div>
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
              <option
                key={index}
                value={option}
                // disabled={option === "Please Select"}
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
              (field.type === 'date' ? 'yyyy-mm-dd' : `Enter ${field.label.toLowerCase()}`)
            }
            required={field.required}
          />
        )}
      </div>
    )
  }

  return (
    <>
      {/* Bootstrap CSS */}
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css"
        rel="stylesheet"
      />

      {/* Custom CSS for specific styling */}
      <style>{`
        .step-indicator {
          width: 60px;
          height: 60px;
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
          transform: scale(1.05);
        }

        .step-connector {
          height: 2px;
          background-color: #dee2e6;
          flex: 1;
          margin: 0 1rem;
        }

        .step-connector.completed {
          background-color: #198754;
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

        .accordion-item {
          height: fit-content;
        }
      `}</style>

      <div className="container-fluid bg-light min-vh-100">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              {/* Header */}
              <div className="mb-5 text-center">
                <h1 className="display-5 fw-bold text-dark mb-3">Sales Order Form</h1>
                <p className="text-muted fs-5">Complete all steps to submit your information</p>
              </div>

              {/* Progress Steps */}
              <div className="mb-5">
                <div className="d-flex align-items-center justify-content-center">
                  {formSteps.map((step, index) => {
                    const Icon = step.icon
                    const isCompleted = completedSteps.has(index)
                    const isCurrent = index === currentStep
                    const isClickable = index <= currentStep || completedSteps.has(index)

                    return (
                      <React.Fragment key={step.id}>
                        <div className="d-flex flex-column align-items-center position-relative">
                          <button
                            onClick={() => isClickable && handleStepClick(index)}
                            disabled={!isClickable}
                            className={`step-indicator ${
                              isCompleted ? 'completed' : isCurrent ? 'current' : 'pending'
                            } ${isClickable ? 'clickable' : ''} mb-2`}
                          >
                            {isCompleted ? <Check size={24} /> : <Icon size={24} />}
                          </button>
                          <div className="text-center">
                            <p
                              className={`small fw-medium mb-1 ${
                                isCurrent ? 'clr-blue' : isCompleted ? 'text-success' : 'text-muted'
                              }`}
                            >
                              Step {index + 1}
                            </p>
                            <p
                              className={`small mb-0 ${
                                isCurrent ? 'clr-blue' : isCompleted ? 'text-success' : 'text-muted'
                              }`}
                            >
                              {step.title}
                            </p>
                          </div>
                        </div>
                        {index < formSteps.length - 1 && (
                          <div
                            className={`step-connector mx-4 ${isCompleted ? 'completed' : ''}`}
                            style={{ marginTop: '-40px', width: '100px' }}
                          />
                        )}
                      </React.Fragment>
                    )
                  })}
                </div>
              </div>

              {/* Previous Steps Content */}
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
                                {step.title === 'Date' && (
                                  <>
                                    <span className="text-muted fw-medium ms-2">Date: </span>
                                    {step.fields
                                      .filter((field) => field.type !== 'header')
                                      .map((field) => {
                                        const value = formData[step.id][field.name]
                                        const displayValue = value || ''

                                        return (
                                          <span
                                            key={field.name}
                                            className="fw-medium text-dark me-3 d-block ms-2"
                                          >
                                            {displayValue ? (
                                              displayValue
                                            ) : (
                                              <em className="text-muted">Not filled</em>
                                            )}
                                          </span>
                                        )
                                      })}
                                  </>
                                )}
                              </div>
                              {!(step.title === 'Date') && (
                                <div className="d-flex align-items-center">
                                  <span className="text-muted small me-2">
                                    {isExpanded ? 'Hide Details' : 'Show Details'}
                                  </span>
                                  {isExpanded ? (
                                    <ChevronUp size={18} className="text-muted" />
                                  ) : (
                                    <ChevronDown size={18} className="text-muted" />
                                  )}
                                </div>
                              )}
                              {step.title === 'Date' && (
                                <div>
                                  <button
                                    className="btn btn-outline-primary btn-sm"
                                    onClick={() => handleStepClick(index)}
                                  >
                                    <ChevronLeft size={16} className="me-1" />
                                    Go back to edit this step
                                  </button>
                                </div>
                              )}
                            </button>

                            {isExpanded && !(step.title === 'Date') && (
                              <div className="border-top p-3">
                                <div className="row g-3">
                                  {step.fields
                                    .filter((field) => field.type !== 'header')
                                    .map((field) => {
                                      const value = formData[step.id][field.name]
                                      const displayValue = value || ''

                                      return (
                                        <div key={field.name} className="col-12">
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
                                    className="btn btn-outline-primary btn-sm"
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

              {/* Current Form */}
              <div className="card shadow-sm">
                <div className="card-body p-5">
                  <h2 className="h4 fw-semibold text-dark mb-4 text-center">
                    {formSteps[currentStep].title}
                  </h2>

                  {/* Form Fields */}
                  <div className="row justify-content-center">
                    <div className="col-md-10">
                      <div className="form-field-column">
                        <div className="row">
                          {formSteps[currentStep].fields.map((field) =>
                            renderField(field, formSteps[currentStep].id),
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Navigation Buttons */}
                  <div className="d-flex justify-content-between mt-5 pt-4 border-top">
                    <button
                      onClick={handlePrev}
                      disabled={currentStep === 0}
                      className={`btn ${
                        currentStep === 0 ? 'btn-outline-secondary' : 'btn-secondary'
                      } d-flex align-items-center px-4 py-2`}
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
                        } d-flex align-items-center px-4 py-2`}
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
                        } d-flex align-items-center px-4 py-2`}
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

      {/* Bootstrap JS */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
    </>
  )
}

export default MultiStepWizard

// import React, { useState } from 'react';
// import { ChevronLeft, ChevronRight, Check, User, Mail, Phone, MapPin, CreditCard, ChevronDown, ChevronUp } from 'lucide-react';

// const MultiFormHandler = () => {
//   const [currentStep, setCurrentStep] = useState(0);
//   const [formData, setFormData] = useState({
//     personal: {
//       firstName: '',
//       lastName: '',
//       email: '',
//       phone: ''
//     },
//     address: {
//       street: '',
//       city: '',
//       state: '',
//       zipCode: ''
//     },
//     payment: {
//       cardNumber: '',
//       expiryDate: '',
//       cvv: '',
//       cardholderName: ''
//     }
//   });

//   const [completedSteps, setCompletedSteps] = useState(new Set());
//   const [expandedSteps, setExpandedSteps] = useState(new Set());

//   const formSteps = [
//     {
//       id: 'personal',
//       title: 'Personal Information',
//       icon: User,
//       fields: [
//         { name: 'firstName', label: 'First Name', type: 'text', required: true },
//         { name: 'lastName', label: 'Last Name', type: 'text', required: true },
//         { name: 'email', label: 'Email', type: 'email', required: true },
//         { name: 'phone', label: 'Phone', type: 'tel', required: true }
//       ]
//     },
//     {
//       id: 'address',
//       title: 'Address Information',
//       icon: MapPin,
//       fields: [
//         { name: 'street', label: 'Street Address', type: 'text', required: true },
//         { name: 'city', label: 'City', type: 'text', required: true },
//         { name: 'state', label: 'State', type: 'text', required: true },
//         { name: 'zipCode', label: 'ZIP Code', type: 'text', required: true }
//       ]
//     },
//     {
//       id: 'payment',
//       title: 'Payment Information',
//       icon: CreditCard,
//       fields: [
//         { name: 'cardNumber', label: 'Card Number', type: 'text', required: true },
//         { name: 'expiryDate', label: 'Expiry Date (MM/YY)', type: 'text', required: true },
//         { name: 'cvv', label: 'CVV', type: 'text', required: true },
//         { name: 'cardholderName', label: 'Cardholder Name', type: 'text', required: true }
//       ]
//     }
//   ];

//   const handleInputChange = (stepId, fieldName, value) => {
//     setFormData(prev => ({
//       ...prev,
//       [stepId]: {
//         ...prev[stepId],
//         [fieldName]: value
//       }
//     }));
//   };

//   const validateStep = (stepIndex) => {
//     const step = formSteps[stepIndex];
//     const stepData = formData[step.id];

//     return step.fields.every(field => {
//       if (field.required) {
//         return stepData[field.name] && stepData[field.name].trim() !== '';
//       }
//       return true;
//     });
//   };

//   const handleNext = () => {
//     if (validateStep(currentStep)) {
//       setCompletedSteps(prev => new Set([...prev, currentStep]));
//       if (currentStep < formSteps.length - 1) {
//         setCurrentStep(currentStep + 1);
//       }
//     }
//   };

//   const handlePrev = () => {
//     if (currentStep > 0) {
//       setCurrentStep(currentStep - 1);
//     }
//   };

//   const handleStepClick = (stepIndex) => {
//     setCurrentStep(stepIndex);
//   };

//   const toggleStepExpansion = (stepIndex) => {
//     setExpandedSteps(prev => {
//       const newExpanded = new Set(prev);
//       if (newExpanded.has(stepIndex)) {
//         newExpanded.delete(stepIndex);
//       } else {
//         newExpanded.add(stepIndex);
//       }
//       return newExpanded;
//     });
//   };

//   const handleSubmit = () => {
//     if (validateStep(currentStep)) {
//       setCompletedSteps(prev => new Set([...prev, currentStep]));
//       alert('Form submitted successfully!\n\n' + JSON.stringify(formData, null, 2));
//     }
//   };

//   const isStepValid = (stepIndex) => validateStep(stepIndex);
//   const isCurrentStepValid = isStepValid(currentStep);
//   const allStepsCompleted = formSteps.every((_, index) => completedSteps.has(index));

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white">
//       <div className="mb-8">
//         <h1 className="text-3xl font-bold text-gray-900 mb-2">Multi-Step Form</h1>
//         <p className="text-gray-600">Complete all steps to submit your information</p>
//       </div>

//       {/* Progress Steps */}
//       <div className="mb-8">
//         <div className="flex items-center justify-between">
//           {formSteps.map((step, index) => {
//             const Icon = step.icon;
//             const isCompleted = completedSteps.has(index);
//             const isCurrent = index === currentStep;
//             const isClickable = index <= currentStep || completedSteps.has(index);

//             return (
//               <div key={step.id} className="flex items-center">
//                 <button
//                   onClick={() => isClickable && handleStepClick(index)}
//                   disabled={!isClickable}
//                   className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-200 ${
//                     isCompleted
//                       ? 'bg-green-500 border-green-500 text-white'
//                       : isCurrent
//                       ? 'bg-blue-500 border-blue-500 text-white'
//                       : isClickable
//                       ? 'bg-white border-gray-300 text-gray-400 hover:border-blue-300'
//                       : 'bg-gray-100 border-gray-200 text-gray-300 cursor-not-allowed'
//                   }`}
//                 >
//                   {isCompleted ? <Check size={20} /> : <Icon size={20} />}
//                 </button>
//                 <div className="ml-3 text-left">
//                   <p className={`text-sm font-medium ${isCurrent ? 'text-blue-600' : isCompleted ? 'text-green-600' : 'text-gray-500'}`}>
//                     Step {index + 1}
//                   </p>
//                   <p className={`text-xs ${isCurrent ? 'text-blue-600' : isCompleted ? 'text-green-600' : 'text-gray-400'}`}>
//                     {step.title}
//                   </p>
//                 </div>
//                 {index < formSteps.length - 1 && (
//                   <div className={`mx-4 h-0.5 w-16 ${isCompleted ? 'bg-green-500' : 'bg-gray-300'}`} />
//                 )}
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* Previous Steps Content - Above Current Form */}
//       {currentStep > 0 && (
//         <div className="mb-8 bg-white border border-gray-200 rounded-lg p-6">
//           <h3 className="text-lg font-semibold text-gray-900 mb-4">Previous Steps Summary</h3>

//           <div className="space-y-4">
//             {formSteps.slice(0, currentStep).map((step, index) => {
//               const isExpanded = expandedSteps.has(index);
//               return (
//                 <div key={step.id} className="border border-gray-200 rounded-lg overflow-hidden">
//                   {/* Clickable Header */}
//                   <button
//                     onClick={() => toggleStepExpansion(index)}
//                     className="w-full px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between text-left"
//                   >
//                     <div className="flex items-center">
//                       <div className={`w-4 h-4 rounded-full mr-3 ${
//                         completedSteps.has(index) ? 'bg-green-500' : 'bg-gray-300'
//                       }`} />
//                       <h4 className={`font-medium ${
//                         completedSteps.has(index) ? 'text-green-700' : 'text-gray-500'
//                       }`}>
//                         {step.title}
//                       </h4>
//                       <span className="ml-2 text-xs text-gray-400">
//                         (Step {index + 1})
//                       </span>
//                     </div>

//                     <div className="flex items-center">
//                       <span className="text-xs text-gray-500 mr-2">
//                         {isExpanded ? 'Hide Details' : 'Show Details'}
//                       </span>
//                       {isExpanded ? (
//                         <ChevronUp size={16} className="text-gray-400" />
//                       ) : (
//                         <ChevronDown size={16} className="text-gray-400" />
//                       )}
//                     </div>
//                   </button>

//                   {/* Expandable Content */}
//                   {isExpanded && (
//                     <div className="px-4 py-3 bg-white border-t border-gray-100">
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         {step.fields.map((field) => {
//                           const value = formData[step.id][field.name];
//                           return (
//                             <div key={field.name} className="text-sm">
//                               <span className="font-medium text-gray-700">{field.label}:</span>{' '}
//                               {value ? (
//                                 <span className="text-gray-900">{value}</span>
//                               ) : (
//                                 <span className="text-gray-400 italic">Not filled</span>
//                               )}
//                             </div>
//                           );
//                         })}
//                       </div>

//                       {/* Edit Button */}
//                       <div className="mt-3 pt-3 border-t border-gray-100">
//                         <button
//                           onClick={() => handleStepClick(index)}
//                           className="text-blue-600 hover:text-blue-800 text-xs font-medium transition-colors duration-200"
//                         >
//                           ← Go back to edit this step
//                         </button>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       )}

//       {/* Current Form */}
//       <div className="bg-gray-50 rounded-lg p-6">
//         <h2 className="text-xl font-semibold text-gray-900 mb-4">
//           {formSteps[currentStep].title}
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {formSteps[currentStep].fields.map((field) => (
//             <div key={field.name} className="space-y-2">
//               <label className="block text-sm font-medium text-gray-700">
//                 {field.label}
//                 {field.required && <span className="text-red-500 ml-1">*</span>}
//               </label>
//               <input
//                 type={field.type}
//                 value={formData[formSteps[currentStep].id][field.name]}
//                 onChange={(e) => handleInputChange(formSteps[currentStep].id, field.name, e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 placeholder={`Enter ${field.label.toLowerCase()}`}
//               />
//             </div>
//           ))}
//         </div>

//         {/* Navigation Buttons */}
//         <div className="flex justify-between mt-8">
//           <button
//             onClick={handlePrev}
//             disabled={currentStep === 0}
//             className={`flex items-center px-4 py-2 rounded-md ${
//               currentStep === 0
//                 ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
//                 : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//             }`}
//           >
//             <ChevronLeft size={20} className="mr-1" />
//             Previous
//           </button>

//           {currentStep === formSteps.length - 1 ? (
//             <button
//               onClick={handleSubmit}
//               disabled={!isCurrentStepValid}
//               className={`flex items-center px-6 py-2 rounded-md ${
//                 isCurrentStepValid
//                   ? 'bg-green-600 text-white hover:bg-green-700'
//                   : 'bg-gray-300 text-gray-500 cursor-not-allowed'
//               }`}
//             >
//               <Check size={20} className="mr-1" />
//               Submit
//             </button>
//           ) : (
//             <button
//               onClick={handleNext}
//               disabled={!isCurrentStepValid}
//               className={`flex items-center px-4 py-2 rounded-md ${
//                 isCurrentStepValid
//                   ? 'bg-blue-600 text-white hover:bg-blue-700'
//                   : 'bg-gray-300 text-gray-500 cursor-not-allowed'
//               }`}
//             >
//               Next
//               <ChevronRight size={20} className="ml-1" />
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MultiFormHandler
