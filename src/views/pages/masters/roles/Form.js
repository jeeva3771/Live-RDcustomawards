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
  const { roleId } = useParams()
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
        <CFormLabel htmlFor="role" className="clr-black fw-medium">
          Role
        </CFormLabel>
        <CFormInput type="text" id="role" required />
        {/* <CFormFeedback tooltip invalid>
          Please provide a valid process name.
        </CFormFeedback> */}
      </CCol>

      <CCol xs={12} className="d-flex gap-2 flex-wrap">
        {roleId ? (
          // <CButton color="primary" type="submit" onClick={() => navigate('/process')}>
          //   Update
          // </CButton>
          <button
            className="px-3 bg-blue clr-white button-sizing"
            onClick={() => navigate('/roles')}
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
              onClick={() => navigate('/roles')}
            >
              Submit
            </button>
          </>
        )}
      </CCol>
    </CForm>
  )
}

const RoleForm = () => {
  return (
    <>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong className="clr-blue fs-5">Role Form</strong>
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

export default RoleForm
