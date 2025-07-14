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
  const { userId } = useParams()
  const navigate = useNavigate()
  // const [validated, setValidated] = useState(false)
  const handleSubmit = (event) => {
    event.preventDefault()
    event.stopPropagation()
  }
  return (
    <CForm
      className="row g-3 needs-validation"
      noValidate
      // validated={validated}
      onSubmit={handleSubmit}
    >
      <CCol md={4} className="position-relative">
        <CFormLabel htmlFor="name" className="clr-black fw-medium">
          Name
        </CFormLabel>
        <CFormInput type="text" id="name" required />
        {/* <CFormFeedback tooltip invalid>
          Please provide a valid process name.
        </CFormFeedback> */}
      </CCol>
      <CCol md={4} className="position-relative">
        <CFormLabel htmlFor="username" className="clr-black fw-medium">
          Username
        </CFormLabel>
        <CFormInput type="text" id="username" required />
        {/* <CFormFeedback tooltip invalid>
                Please provide a valid code.
              </CFormFeedback> */}
      </CCol>
      <CCol md={4} className="position-relative">
        <CFormLabel htmlFor="password" className="clr-black fw-medium">
          Password
        </CFormLabel>
        <CFormInput type="password" id="password" required />
        {/* <CFormFeedback tooltip invalid>
                Please provide a valid code.
              </CFormFeedback> */}
      </CCol>
      <CCol md={4} className="position-relative mb-2">
        <CFormLabel htmlFor="role" className="clr-black fw-medium">
          Department
        </CFormLabel>
        <CFormSelect id="role" name="role" required>
          <option value="">Select department</option>
          <option value="awards_coordinator">DTP</option>
          <option value="design_lead">CNC</option>
          <option value="data_entry">Data Entry</option>
          <option value="proofing_manager">UV Printing</option>
          <option value="vendor_liaison">Screen Printing</option>
          <option value="event_liaison">Event Liaison</option>
          <option value="inventory_manager">Inventory Manager</option>
          <option value="photographer">Photographer</option>
          <option value="archivist">Archivist</option>
        </CFormSelect>
      </CCol>
      <CCol md={4} className="position-relative mb-2">
        <CFormLabel htmlFor="role" className="clr-black fw-medium">
          Role
        </CFormLabel>
        <CFormSelect id="role" name="role" required>
          <option value="">Select role</option>
          <option value="awards_coordinator">Awards Coordinator</option>
          <option value="design_lead">Design Lead</option>
          <option value="data_entry">Data Entry</option>
          <option value="proofing_manager">Proofing Manager</option>
          <option value="vendor_liaison">Vendor Liaison</option>
          <option value="event_liaison">Event Liaison</option>
          <option value="inventory_manager">Inventory Manager</option>
          <option value="photographer">Photographer</option>
          <option value="archivist">Archivist</option>
        </CFormSelect>
      </CCol>

      <CCol xs={12} className="d-flex justify-content-center gap-2 flex-wrap">
        {userId ? (
          // <CButton color="primary" type="submit" onClick={() => navigate('/process')}>
          //   Update
          // </CButton>
          <button
            className="px-3 bg-blue clr-white button-sizing"
            onClick={() => navigate('/users')}
          >
            Update
          </button>
        ) : (
          <>
            <CButton color="danger" type="reset" className="text-white">
              Reset
            </CButton>
            {/* <CButton color="primary" type="submit" onClick={() => navigate('/process')}>
              Submit
            </CButton> */}
            <button
              className="px-3 bg-blue clr-white button-sizing"
              onClick={() => navigate('/users')}
            >
              Submit
            </button>
          </>
        )}
      </CCol>
    </CForm>
  )
}

const UserForm = () => {
  return (
    <>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong className="clr-blue fs-5">User Form</strong>
            {/* <small>Tooltips</small> */}
          </CCardHeader>
          <CCardBody>
            {/* <p className="text-body-secondary small">
              If your form layout allows it, you can swap the text for the tooltip to display
              validation feedback in a styled tooltip. Be sure to have a parent with{' '}
              <code>position: relative</code> on it for tooltip positioning. In the example below,
              our column classes have this already, but your project may require an alternative
              setup.
            </p> */}
            <DocsExample href="forms/validation#tooltips">{Tooltips()}</DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </>
  )
}

export default UserForm
