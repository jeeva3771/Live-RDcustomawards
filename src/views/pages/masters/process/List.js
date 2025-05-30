import React, { useState, useMemo } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CFormInput,
  CFormSelect,
  CButton,
  CBadge,
  CPagination,
  CPaginationItem,
  CInputGroup,
  CInputGroupText,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cilSearch,
  cilPencil,
  cilTrash,
  cilInfo,
} from '@coreui/icons'

const ProcessList = () => {
  // Sample data
  const [processes] = useState([
    { id: 1, name: 'Customer Registration', code: 'CUST001', status: 'Active' },
    { id: 2, name: 'Payment Processing', code: 'PAY002', status: 'Inactive' },
    { id: 3, name: 'Order Management', code: 'ORD003', status: 'Active' },
    { id: 4, name: 'Inventory Update', code: 'INV004', status: 'Inactive' },
    { id: 5, name: 'Email Notification', code: 'EML005', status: 'Active' },
    { id: 6, name: 'Data Backup', code: 'BAK006', status: 'Active' },
    { id: 7, name: 'Report Generation', code: 'RPT007', status: 'Inactive' },
    { id: 8, name: 'Security Scan', code: 'SEC008', status: 'Active' },
    { id: 9, name: 'System Maintenance', code: 'SYS009', status: 'Active' },
    { id: 10, name: 'Data Migration', code: 'MIG010', status: 'Inactive' },
    { id: 11, name: 'API Integration', code: 'API011', status: 'Active' },
    { id: 12, name: 'Log Cleanup', code: 'LOG012', status: 'Inactive' },
  ])

  // State management
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(5)

  // Filtering
  const filteredProcesses = useMemo(() => {
    return processes.filter(process =>
      process.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      process.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      process.status.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [processes, searchTerm])

  // Pagination
  const totalPages = Math.ceil(filteredProcesses.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedProcesses = filteredProcesses.slice(startIndex, startIndex + itemsPerPage)

  // Reset to first page when search changes
  React.useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm])

  const handleAction = (action, process) => {
    console.log(`${action} action for process:`, process)
    // Implement your action logic here
  }

  const getStatusBadge = (status) => {
    return (
      <CBadge color={status === 'Active' ? 'success' : 'secondary'}>
        {status}
      </CBadge>
    )
  }

  return (
    <CCol xs={12}>
      <CCard className="mb-4">
        <CCardHeader>
          <strong className="clr-blue fs-5">Process List</strong>
        </CCardHeader>
        <CCardBody>
          {/* Search Bar and Button */}
          <CRow className="mb-3">
            <CCol md={4}>
              <CInputGroup size="sm">
                <CInputGroupText>
                  <CIcon icon={cilSearch} size="sm" />
                </CInputGroupText>
                <CFormInput
                  placeholder="Search processes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </CInputGroup>
            </CCol>
            <CCol md={8} className="d-flex justify-content-end">
              <CButton color="primary" size="sm">
                Add
              </CButton>
            </CCol>
          </CRow>

          {/* Table */}
          <CTable striped hover>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">S.No</CTableHeaderCell>
                <CTableHeaderCell scope="col">Process Name</CTableHeaderCell>
                <CTableHeaderCell scope="col">Code</CTableHeaderCell>
                <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                <CTableHeaderCell scope="col" className="text-center">Actions</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {paginatedProcesses.length > 0 ? (
                paginatedProcesses.map((process, index) => (
                  <CTableRow key={process.id}>
                    <CTableHeaderCell scope="row">{startIndex + index + 1}</CTableHeaderCell>
                    <CTableDataCell>{process.name}</CTableDataCell>
                    <CTableDataCell>{process.code}</CTableDataCell>
                    <CTableDataCell>{getStatusBadge(process.status)}</CTableDataCell>
                    <CTableDataCell className="text-center">
                      <CButton
                        color="primary"
                        variant="outline"
                        size="sm"
                        className="me-1"
                        onClick={() => handleAction('info', process)}
                        title="View Details"
                      >
                        <CIcon icon={cilInfo} size="sm" />
                      </CButton>
                      <CButton
                        color="success"
                        variant="outline"
                        size="sm"
                        className="me-1"
                        onClick={() => handleAction('edit', process)}
                        title="Edit Process"
                      >
                        <CIcon icon={cilPencil} size="sm" />
                      </CButton>
                      <CButton
                        color="danger"
                        variant="outline"
                        size="sm"
                        onClick={() => handleAction('delete', process)}
                        title="Delete Process"
                      >
                        <CIcon icon={cilTrash} size="sm" />
                      </CButton>
                    </CTableDataCell>
                  </CTableRow>
                ))
              ) : (
                <CTableRow>
                  <CTableDataCell colSpan={5} className="text-center py-4">
                    No processes found
                  </CTableDataCell>
                </CTableRow>
              )}
            </CTableBody>
          </CTable>

          {/* Bottom Controls */}
          <CRow className="mt-3 align-items-center">
            {/* Page Size Dropdown - Bottom Left */}
            <CCol md={6} className="d-flex align-items-center">
              <span className="me-2">Show</span>
              <CFormSelect
                size="sm"
                style={{ width: 'auto' }}
                value={itemsPerPage}
                onChange={(e) => {
                  setItemsPerPage(Number(e.target.value))
                  setCurrentPage(1)
                }}
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
              </CFormSelect>
              <span className="ms-2">entries</span>
              <small className="text-muted ms-3">
                Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredProcesses.length)} of {filteredProcesses.length} entries
              </small>
            </CCol>

            {/* Pagination - Right */}
            <CCol md={6} className="d-flex justify-content-end">
              {totalPages > 1 && (
                <CPagination>
                  <CPaginationItem
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(currentPage - 1)}
                  >
                    Previous
                  </CPaginationItem>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <CPaginationItem
                      key={page}
                      active={page === currentPage}
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </CPaginationItem>
                  ))}
                  <CPaginationItem
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(currentPage + 1)}
                  >
                    Next
                  </CPaginationItem>
                </CPagination>
              )}
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </CCol>
  )
}

export default ProcessList
