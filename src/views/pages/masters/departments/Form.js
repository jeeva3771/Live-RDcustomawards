import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormFeedback,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import { DocsComponents, DocsExample } from 'src/components'
import { useNavigate, useParams } from 'react-router-dom'

const Tooltips = () => {
  const { departmentId } = useParams()
  const navigate = useNavigate()
  const [selectedProcesses, setSelectedProcesses] = useState([])

  const availableProcesses = [
    'DTP',
    'UV Printing',
    'Screen Printing',
    'Laser Cutting',
    'CNC Machining',
    'Assembly',
    'Quality Control',
    'Packaging',
    'Welding',
    'Painting',
    'Polishing',
    'Drilling',
    'Material Cutting',
    'Design Review',
    'Testing',
    'Finishing',
  ]

  const handleSubmit = (event) => {
    event.preventDefault()
    event.stopPropagation()
  }

  const handleProcessChange = (event) => {
    const value = event.target.value
    if (value && !selectedProcesses.includes(value)) {
      setSelectedProcesses([...selectedProcesses, value])
    }
    // Reset select to default
    event.target.value = ''
  }

  const removeProcess = (processToRemove) => {
    setSelectedProcesses(selectedProcesses.filter((process) => process !== processToRemove))
  }

  return (
    <CForm className="row g-3 needs-validation" noValidate onSubmit={handleSubmit}>
      <CCol md={4} className="position-relative">
        <CFormLabel htmlFor="departmentName" className="clr-black fw-medium">
          Department Name
        </CFormLabel>
        <CFormInput type="text" id="departmentName" required />
      </CCol>
      <CCol md={4} className="position-relative">
        <CFormLabel htmlFor="code" className="clr-black fw-medium">
          Code
        </CFormLabel>
        <CFormInput type="text" id="code" required />
      </CCol>
      <CCol md={4} className="position-relative mb-2">
        <CFormLabel htmlFor="status" className="clr-black fw-medium">
          Status
        </CFormLabel>
        <CFormSelect id="status" required>
          <option defaultValue="">Select status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </CFormSelect>
      </CCol>

      {/* Assignment Process Dropdown */}
      <CCol md={4} className="position-relative mb-3">
        <CFormLabel htmlFor="assignmentProcess" className="clr-black fw-medium">
          Process Under this Department
        </CFormLabel>
        <CFormSelect id="assignmentProcess" onChange={handleProcessChange} className="mb-2">
          <option value="">Select a process</option>
          {availableProcesses
            .filter((process) => !selectedProcesses.includes(process))
            .map((process) => (
              <option key={process} value={process}>
                {process}
              </option>
            ))}
        </CFormSelect>

        {/* Selected Processes Display */}
        {selectedProcesses.length > 0 && (
          <div className="selected-processes mt-2">
            <style>{`
                .material-tag {
                  display: inline-block;
                  background: #e3f2fd;
                  color: #1976d2;
                  padding: 6px 10px;
                  margin: 3px;
                  border-radius: 16px;
                  font-size: 12px;
                }

                .remove-btn {
                  margin-left: 6px;
                  cursor: pointer;
                  font-weight: bold;
                  transition: color 0.2s ease;
                }
                  .remove-btn:hover {
                  color: #d32f2f;
                }
              }
                `}</style>
            <div className="mb-2">
              <small className="text-muted">Selected Processes:</small>
            </div>
            <div className="d-flex flex-wrap gap-2">
              {selectedProcesses.map((process) => (
                <span key={process} className="material-tag" style={{ fontSize: '0.875rem' }}>
                  {process}
                  {/* <button
                    type="button"
                    className="btn-close"
                    style={{ fontSize: '0.75rem' }}
                    onClick={() => removeProcess(process)}
                    aria-label={`Remove ${process}`}
                  ></button> */}
                  <span onClick={() => removeProcess(process)} className="remove-btn">
                    ×
                  </span>
                </span>
              ))}
            </div>
          </div>
        )}
      </CCol>

      <CCol xs={12} className="d-flex justify-content-center gap-2 flex-wrap">
        {departmentId ? (
          <button
            className="px-3 bg-blue clr-white button-sizing"
            onClick={() => navigate('/departments')}
          >
            Update
          </button>
        ) : (
          <>
            <CButton color="danger" type="reset" className="text-white">
              Reset
            </CButton>
            <button
              className="px-3 bg-blue clr-white button-sizing"
              onClick={() => navigate('/departments')}
            >
              Submit
            </button>
          </>
        )}
      </CCol>
    </CForm>
  )
}

const ProcessForm = () => {
  return (
    <>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong className="clr-blue fs-5">Department Form</strong>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="forms/validation#tooltips">{Tooltips()}</DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </>
  )
}

export default ProcessForm
