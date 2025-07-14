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
  const [selectedColumns, setSelectedColumns] = useState([])
  const { processId } = useParams()
  const navigate = useNavigate()
  const [inputValue, setInputValue] = useState('')

  const addColumn = () => {
    const trimmed = inputValue.trim()
    if (trimmed && !selectedColumns.includes(trimmed)) {
      setSelectedColumns([...selectedColumns, trimmed])
    }
    setInputValue('')
  }

  const handleRemove = (col) => {
    setSelectedColumns(selectedColumns.filter((item) => item !== col))
  }

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
        <CFormInput required />
      </CCol>

      {/* Input Field to Add Columns */}
      <CCol md={4}>
        <CFormLabel>Add Column Name</CFormLabel>
        <div className="d-flex gap-2">
          <CFormInput
            placeholder="Enter column name"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <CButton
            type="button"
            className="px-3 bg-blue clr-white button-sizing"
            onClick={addColumn}
          >
            Add
          </CButton>
        </div>

        {/* Horizontal Drag List */}
        {selectedColumns.length > 0 && (
          <div
            className="mt-4 d-flex flex-wrap gap-2"
            style={{
              minHeight: '60px',
              border: '1px dashed #ccc',
              padding: '10px',
              borderRadius: '6px',
            }}
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
                <span>
                  {index + 1}. {col}
                </span>
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
        )}
      </CCol>

      <CCol xs={12} className="d-flex justify-content-center gap-2 flex-wrap">
        {processId ? (
          // <CButton color="primary" type="submit" onClick={() => navigate('/materials')}>
          //   Update
          // </CButton>
          <button
            className="px-3 bg-blue clr-white button-sizing"
            onClick={() => navigate('/process')}
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
              onClick={() => navigate('/process')}
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
