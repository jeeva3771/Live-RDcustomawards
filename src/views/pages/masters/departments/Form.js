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
        <CFormLabel htmlFor="processName" className="clr-black fw-medium">
          Department Name
        </CFormLabel>
        <CFormInput type="text" id="processName" required />
        {/* <CFormFeedback tooltip invalid>
          Please provide a valid process name.
        </CFormFeedback> */}
      </CCol>
      <CCol md={4} className="position-relative">
        <CFormLabel htmlFor="code" className="clr-black fw-medium">
          Code
        </CFormLabel>
        <CFormInput type="text" id="code" required />
        {/* <CFormFeedback tooltip invalid>
          Please provide a valid code.
        </CFormFeedback> */}
      </CCol>
      <CCol md={4} className="position-relative mb-2">
        <CFormLabel htmlFor="status" className="clr-black fw-medium">
          Status
        </CFormLabel>
        <CFormSelect id="status" required>
          <option defaultValue="">Select status</option>
          <option value="active">Active</option>
          <option value="Inactive">Inactive</option>
          {/* <option>...</option> */}
        </CFormSelect>
        {/* <CFormFeedback tooltip invalid>
          Please provide a valid city.
        </CFormFeedback> */}
      </CCol>
      {/* <CCol md={4} className="position-relative">
        <CFormLabel htmlFor="validationTooltipUsername">Status</CFormLabel>
        <CInputGroup className="has-validation">
          <CInputGroupText id="inputGroupPrepend">@</CInputGroupText>
          <CFormInput
            type="text"
            id="validationTooltipUsername"
            defaultValue=""
            aria-describedby="inputGroupPrepend"
            required
          />
          <CFormFeedback tooltip invalid>
            Please choose a username.
          </CFormFeedback>
        </CInputGroup>
      </CCol> */}
      {/* <CCol md={6} className="position-relative">
        <CFormLabel htmlFor="validationTooltip03">City</CFormLabel>
        <CFormInput type="text" id="validationTooltip03" required />
        <CFormFeedback tooltip invalid>
          Please provide a valid city.
        </CFormFeedback>
      </CCol>

      <CCol md={3} className="position-relative">
        <CFormLabel htmlFor="validationTooltip05">City</CFormLabel>
        <CFormInput type="text" id="validationTooltip05" required />
        <CFormFeedback tooltip invalid>
          Please provide a valid zip.
        </CFormFeedback>
      </CCol> */}
      <CCol xs={12} className="d-flex justify-content-center gap-2 flex-wrap">
        {departmentId ? (
          // <CButton color="primary" type="submit" onClick={() => navigate('/departments')}>
          //   Update
          // </CButton>
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
            {/* <CButton color="primary" type="submit" onClick={() => navigate('/departments')}>
              Submit
            </CButton> */}
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

export default ProcessForm
