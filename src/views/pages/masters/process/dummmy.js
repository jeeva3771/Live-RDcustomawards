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

// import React, { useState } from 'react'
// import {
//   CButton,
//   CCol,
//   CForm,
//   CFormInput,
//   CFormLabel,
//   CFormSelect,
// } from '@coreui/react'


const Tooltips = () => {
  const [selectedColumns, setSelectedColumns] = useState([])
  const allColumns = [
    'Laser',
    'DTP',
    'Size of Cutting Sheet',
    'No of UPS per Sheet',
    'Qty Required',
    'Qty in SQFT',
    'Quantity',
  ]

  const availableOptions = allColumns.filter((col) => !selectedColumns.includes(col))

  const handleSelectChange = (e) => {
    const value = e.target.value
    if (value && !selectedColumns.includes(value)) {
      setSelectedColumns([...selectedColumns, value])
    }
    e.target.selectedIndex = 0
  }

  const handleRemove = (value) => {
    setSelectedColumns(selectedColumns.filter((item) => item !== value))
  }

  // Drag logic
  const handleDragStart = (e, index) => {
    e.dataTransfer.setData('dragIndex', index)
  }

  const handleDragOver = (e) => {
    e.preventDefault()
  }

  const handleDrop = (e, dropIndex) => {
    const dragIndex = parseInt(e.dataTransfer.getData('dragIndex'), 10)
    const items = [...selectedColumns]
    const [movedItem] = items.splice(dragIndex, 1)
    items.splice(dropIndex, 0, movedItem)
    setSelectedColumns(items)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Final column order:', selectedColumns)
  }

  return (
    <CForm className="row g-3" onSubmit={handleSubmit}>
      <CCol md={4}>
        <CFormLabel>Process Name</CFormLabel>
        <CFormInput required />
      </CCol>

      <CCol md={4}>
        <CFormLabel>Code</CFormLabel>
        <CFormInput required />
      </CCol>

      <CCol md={4}>
        <CFormLabel>Status</CFormLabel>
        <CFormSelect required>
          <option value="">Select</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </CFormSelect>
      </CCol>

      <CCol md={4}>
        <CFormLabel>Add Column</CFormLabel>
        <CFormSelect onChange={handleSelectChange}>
          <option value="">Select a column</option>
          {availableOptions.map((col, i) => (
            <option key={i} value={col}>
              {col}
            </option>
          ))}
        </CFormSelect>

        {/* Horizontal Drag List */}
        <div
          className="mt-4 d-flex flex-wrap gap-2"
          style={{ minHeight: '60px', border: '1px dashed #ccc', padding: '10px', borderRadius: '6px' }}
        >
          {selectedColumns.map((col, index) => (
            <div
              key={col}
              draggable
              onDragStart={(e) => handleDragStart(e, index)}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, index)}
              style={{
                padding: '8px 12px',
                borderRadius: '20px',
                border: '1px solid #ccc',
                background: '#f1f1f1',
                cursor: 'grab',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
              }}
            >
              <span>{index + 1}. {col}</span>
              <span
                style={{
                  color: 'red',
                  marginLeft: '5px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                }}
                onClick={() => handleRemove(col)}
              >
                ✕
              </span>
            </div>
          ))}
        </div>
      </CCol>

      <CCol xs={12} className="d-flex justify-content-center gap-2 mt-3">
        <CButton color="danger" type="reset">
          Reset
        </CButton>
        <CButton color="primary" type="submit">
          Submit
        </CButton>
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
            <strong className="clr-blue fs-5">Process Form</strong>
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
