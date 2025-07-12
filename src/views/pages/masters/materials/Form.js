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
import { useNavigate, useParams } from 'react-router-dom'fff


const Tooltips = () => {
  const { materialId } = useParams()
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
        <CFormLabel htmlFor="materialName" className="clr-black fw-medium">
          Material Name
        </CFormLabel>
        <CFormInput type="text" id="materialName" required />
        {/* <CFormFeedback tooltip invalid>
          Please provide a valid process name.
        </CFormFeedback> */}
      </CCol>
      <CCol md={4} className="position-relative mb-2">
        <CFormLabel htmlFor="typeOfMaterial" className="clr-black fw-medium">
          Type of Material
        </CFormLabel>
        <CFormSelect id="typeOfMaterial" required>
          <option defaultValue="">Select Type of Material</option>
          <option value="active">Recipe Materials</option>
          <option value="Inactive">Consumables</option>
          <option value="Inactive">Packing Materials</option>
          {/* <option>...</option> */}
        </CFormSelect>
        {/* <CFormFeedback tooltip invalid>
          Please provide a valid city.
        </CFormFeedback> */}
      </CCol>
      <CCol md={4} className="position-relative">
        <CFormLabel htmlFor="price" className="clr-black fw-medium">
          Price
        </CFormLabel>
        <CFormInput type="text" id="price" required />
        {/* <CFormFeedback tooltip invalid>
          Please provide a valid code.
        </CFormFeedback> */}
      </CCol>

      <CCol md={4} className="position-relative">
        <CFormLabel htmlFor="cost" className="clr-black fw-medium">
          Cost
        </CFormLabel>
        <CFormInput type="text" id="cost" required />
        {/* <CFormFeedback tooltip invalid>
          Please provide a valid code.
        </CFormFeedback> */}
      </CCol>

      <CCol md={4} className="position-relative">
        <CFormLabel htmlFor="stock" className="clr-black fw-medium">
          Stock
        </CFormLabel>
        <CFormInput type="number" id="stock" required />
        {/* <CFormFeedback tooltip invalid>
          Please provide a valid code.
        </CFormFeedback> */}
      </CCol>

      <CCol md={4} className="position-relative">
        <CFormLabel htmlFor="unit" className="clr-black fw-medium">
          Unit
        </CFormLabel>
        <CFormInput type="text" id="unit" required />
        {/* <CFormFeedback tooltip invalid>
          Please provide a valid code.
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
        {materialId ? (
          // <CButton color="primary" type="submit" onClick={() => navigate('/materials')}>
          //   Update
          // </CButton>
          <button
            className="px-3 bg-blue clr-white button-sizing"
            onClick={() => navigate('/materials')}
          >
            Update
          </button>
        ) : (
          <>
            <CButton color="danger" type="reset" className="text-white">
              Reset
            </CButton>
            {/* <CButton color="primary" type="submit" onClick={() => navigate('/materials')}>
              Submit
            </CButton> */}
            <button
              className="px-3 bg-blue clr-white button-sizing"
              onClick={() => navigate('/materials')}
            >
              Submit
            </button>
          </>
        )}
      </CCol>
    </CForm>
  )
}

const Material = () => {
  return (
    <>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong className="clr-blue fs-5">Material Form</strong>
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

export default Material
