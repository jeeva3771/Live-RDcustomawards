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
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cilSearch,
  cilPencil,
  cilTrash,
  cilInfo,
  cilSortAscending,
  cilSortDescending,
} from '@coreui/icons'
import { useNavigate } from 'react-router-dom'

const DepartmentList = () => {
  const navigate = useNavigate()
  // Sample data
  const [processes] = useState([
    {
      name: 'DTP',
      code: 'RD001',
      status: 'Active',
      process: 'DTP, UV Printing, Screen Printing, Laser Cutting',
      createdAt: '2024-01-12 09:30 AM',
      createdBy: 'Arun Prakash',
      updatedAt: '2024-12-10 02:15 PM',
      updatedBy: 'Lavanya S',
    },
    {
      name: 'CNC',
      code: 'RD002',
      status: 'Active',
      process: 'CNC, MachiningAssembly, Quality, Control, Packaging',
      createdAt: '2024-02-05 10:00 AM',
      createdBy: 'Lavanya S',
      updatedAt: '2024-12-09 01:00 PM',
      updatedBy: 'Karthik R',
    },
    {
      name: 'UV Printing',
      code: 'RD003',
      status: 'Inactive',
      process: 'Welding, Painting, Polishing, Drilling',
      createdAt: '2024-03-10 11:45 AM',
      createdBy: 'Karthik R',
      updatedAt: '2024-12-07 11:30 AM',
      updatedBy: 'Dinesh Kumar',
    },
    {
      name: 'Screen Printing',
      code: 'RD004',
      status: 'Active',
      process: 'CNC, MachiningAssembly, Quality, Control, Packaging',
      createdAt: '2024-04-01 08:20 AM',
      createdBy: 'Sowmya K',
      updatedAt: '2024-12-06 04:45 PM',
      updatedBy: 'Sowmya K',
    },
    {
      name: 'Quality Control & Assurance',
      code: 'RD005',
      status: 'Active',
      process: 'CNC, MachiningAssembly, Quality, Control, Packaging',
      createdAt: '2024-05-18 09:30 AM',
      createdBy: 'Rajiv Menon',
      updatedAt: '2024-12-05 03:20 PM',
      updatedBy: 'Rajiv Menon',
    },
    {
      name: 'Order Fulfilment & Dispatch',
      code: 'RD006',


      status: 'Inactive',
      process: 'CNC, MachiningAssembly, Quality, Control, Packaging',
      createdAt: '2024-06-22 01:00 PM',
      createdBy: 'Bharath S',
      updatedAt: '2024-12-03 12:45 PM',
      updatedBy: 'Lavanya S',
    },
    {
      name: 'Client Design Approvals',
      code: 'RD007',
      status: 'Active',
      process: 'CNC, MachiningAssembly, Quality, Control, Packaging',
      createdAt: '2024-07-08 10:45 AM',
      createdBy: 'Karthik R',
      updatedAt: '2024-12-01 10:30 AM',
      updatedBy: 'Sowmya K',
    },
    {
      name: 'Packaging & Logistics',
      code: 'RD008',
      status: 'Active',
      process: 'CNC, MachiningAssembly, Quality, Control, Packaging',
      createdAt: '2024-08-14 03:15 PM',
      createdBy: 'Arun Prakash',
      updatedAt: '2024-12-02 05:15 PM',
      updatedBy: 'Dinesh Kumar',
    },
    {
      name: 'Client Support & Order Coordination',
      code: 'RD009',
      status: 'Active',
      process: 'CNC, MachiningAssembly, Quality, Control, Packaging',

      createdAt: '2024-09-12 11:00 AM',
      createdBy: 'Megha Jain',
      updatedAt: '2024-12-11 03:10 PM',
      updatedBy: 'Megha Jain',
    },
    {
      name: 'Digital Artwork & Proofing',
      code: 'RD010',
      process: 'CNC, MachiningAssembly, Quality, Control, Packaging',
      status: 'Active',
      createdAt: '2024-10-05 02:30 PM',
      createdBy: 'Sakthi Vel',
      updatedAt: '2024-12-12 11:40 AM',
      updatedBy: 'Anjali Devi',
    },
    {
      name: 'Procurement & Vendor Management',
      code: 'RD011',
      status: 'Inactive',
      process: 'CNC, MachiningAssembly, Quality, Control, Packaging',
      createdAt: '2024-11-01 10:15 AM',
      createdBy: 'Mohan R',
      updatedAt: '2024-12-04 09:00 AM',
      updatedBy: 'Dinesh Kumar',
    },
    {
      name: 'Event Branding & Custom Orders',
      code: 'RD012',
      status: 'Active',
      process: 'CNC, MachiningAssembly, Quality, Control, Packaging',
      createdAt: '2024-12-01 04:00 PM',
      createdBy: 'Divya Ramesh',
      updatedAt: '2024-12-15 01:00 PM',
      updatedBy: 'Sathish N',
    },
  ])

  // State management
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(5)
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' })
  const [showModal, setShowModal] = useState(false)
  const [modalType, setModalType] = useState('')
  const [selectedProcess, setSelectedProcess] = useState(null)

  // Filtering
  const filteredProcesses = useMemo(() => {
    return processes.filter(
      (process) =>
        process.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        process.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
        process.status.toLowerCase().includes(searchTerm.toLowerCase()),
    )
  }, [processes, searchTerm])

  // Sorting
  const sortedProcesses = useMemo(() => {
    if (!sortConfig.key) return filteredProcesses

    return [...filteredProcesses].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1
      }
      return 0
    })
  }, [filteredProcesses, sortConfig])

  // Pagination
  const totalPages = itemsPerPage === 'all' ? 1 : Math.ceil(sortedProcesses.length / itemsPerPage)
  const startIndex = itemsPerPage === 'all' ? 0 : (currentPage - 1) * itemsPerPage
  const paginatedProcesses =
    itemsPerPage === 'all'
      ? sortedProcesses
      : sortedProcesses.slice(startIndex, startIndex + itemsPerPage)

  // Reset to first page when search changes
  React.useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm])

  const handleAction = (action, process) => {
    if (action === 'info' || action === 'delete') {
      setModalType(action)
      setSelectedProcess(process)
      setShowModal(true)
    } else if (action === 'edit') {
      console.log('Edit action for process:', process)
      // Implement edit logic here (e.g., navigate to edit page)
    }
  }

  const handleModalClose = () => {
    setShowModal(false)
    setModalType('')
    setSelectedProcess(null)
  }

  const handleDeleteConfirm = () => {
    console.log('Delete process:', selectedProcess)
    // Implement actual delete logic here
    handleModalClose()
  }

  const handleSort = (key) => {
    setSortConfig((prevConfig) => ({
      key,
      direction: prevConfig.key === key && prevConfig.direction === 'asc' ? 'desc' : 'asc',
    }))
  }

  const getSortIcon = (columnKey) => {
    if (sortConfig.key !== columnKey) return null
    return (
      <CIcon
        icon={sortConfig.direction === 'asc' ? cilSortAscending : cilSortDescending}
        size="sm"
        className="ms-1"
      />
    )
  }

  const getStatusBadge = (status) => {
    return <CBadge color={status === 'Active' ? 'success' : 'secondary'}>{status}</CBadge>
  }

  return (
    <CCol xs={12}>
      <CCard className="mb-4">
        <CCardHeader>
          <strong className="clr-blue fs-5">Departments List</strong>
        </CCardHeader>
        <CCardBody>
          {/* Search Bar and Button */}
          <CRow className="mb-3">
            <CCol md={3}>
              <CInputGroup>
                <CInputGroupText>
                  <CIcon icon={cilSearch} />
                </CInputGroupText>
                <CFormInput
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="inputFocus"
                />
              </CInputGroup>
            </CCol>
            <CCol md={9} className="d-flex justify-content-end">
              <button
                className="px-3 bg-blue clr-white button-sizing"
                onClick={() => navigate('/departments/add')}
              >
                Add
              </button>
            </CCol>
          </CRow>

          {/* Table */}
          <CTable striped hover>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">S.No</CTableHeaderCell>
                <CTableHeaderCell
                  scope="col"
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleSort('name')}
                >
                  Department Name{getSortIcon('name')}
                </CTableHeaderCell>
                <CTableHeaderCell
                  scope="col"
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleSort('code')}
                >
                  Code{getSortIcon('code')}
                </CTableHeaderCell>

                <CTableHeaderCell
                  scope="col"
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleSort('process')}
                >
                  Process Under This Department{getSortIcon('process')}
                </CTableHeaderCell>
                <CTableHeaderCell
                  scope="col"
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleSort('status')}
                >
                  Status{getSortIcon('status')}
                </CTableHeaderCell>
                <CTableHeaderCell scope="col" className="text-center">
                  Actions
                </CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {paginatedProcesses.length > 0 ? (
                paginatedProcesses.map((process, index) => (
                  <CTableRow key={process.code}>
                    <CTableDataCell>{startIndex + index + 1}</CTableDataCell>
                    <CTableDataCell>{process.name}</CTableDataCell>
                    <CTableDataCell>{process.code}</CTableDataCell>
                    <CTableDataCell>{process.process}</CTableDataCell>
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
                        onClick={() => navigate('/departments/1')}
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
                    No departments found
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
                  const value = e.target.value === 'all' ? 'all' : Number(e.target.value)
                  setItemsPerPage(value)
                  setCurrentPage(1)
                }}
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value="all">All</option>
              </CFormSelect>
              <span className="ms-2">entries</span>
              <small className="text-muted ms-3">
                {itemsPerPage === 'all'
                  ? `Showing all ${sortedProcesses.length} entries`
                  : `Showing ${startIndex + 1} to ${Math.min(startIndex + itemsPerPage, sortedProcesses.length)} of ${sortedProcesses.length} entries`}
              </small>
            </CCol>

            {/* Pagination - Right */}
            <CCol md={6} className="d-flex justify-content-end">
              {totalPages > 1 && itemsPerPage !== 'all' && (
                <CPagination>
                  <CPaginationItem
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(currentPage - 1)}
                    style={{ cursor: currentPage === 1 ? 'not-allowed' : 'pointer' }}
                  >
                    Previous
                  </CPaginationItem>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <CPaginationItem
                      key={page}
                      active={page === currentPage}
                      onClick={() => setCurrentPage(page)}
                      style={{ cursor: 'pointer' }}
                    >
                      {page}
                    </CPaginationItem>
                  ))}
                  <CPaginationItem
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(currentPage + 1)}
                    style={{ cursor: currentPage === totalPages ? 'not-allowed' : 'pointer' }}
                  >
                    Next
                  </CPaginationItem>
                </CPagination>
              )}
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>

      {/* Modal for View/Delete */}
      <CModal
        visible={showModal}
        onClose={handleModalClose}
        size="md"
        alignment="center"
        backdrop="static"
      >
        <CModalHeader closeButton>
          <strong className="clr-blue fs-5">
            {modalType === 'info' && 'Department Details'}
            {modalType === 'delete' && 'Delete Department'}
          </strong>
        </CModalHeader>

        <CModalBody>
          {selectedProcess && modalType === 'info' && (
            <div>
              <CRow className="mb-2">
                <CCol sm={4} className="fw-semibold">
                  Department Name
                </CCol>
                <CCol sm={1} className="text-center fw-bold">
                  :
                </CCol>
                <CCol sm={7}>{selectedProcess.name}</CCol>
              </CRow>

              <CRow className="mb-2">
                <CCol sm={4} className="fw-semibold">
                  Code
                </CCol>
                <CCol sm={1} className="text-center fw-bold">
                  :
                </CCol>
                <CCol sm={7}>{selectedProcess.code}</CCol>
              </CRow>

              <CRow className="mb-2">
                <CCol sm={4} className="fw-semibold">
                  Process Under This Department
                </CCol>
                <CCol sm={1} className="text-center fw-bold">
                  :
                </CCol>
                <CCol sm={7}>{selectedProcess.process}</CCol>
              </CRow>

              <CRow className="mb-2">
                <CCol sm={4} className="fw-semibold">
                  Status
                </CCol>
                <CCol sm={1} className="text-center fw-bold">
                  :
                </CCol>
                <CCol sm={7}>{getStatusBadge(selectedProcess.status)}</CCol>
              </CRow>

              <CRow className="mb-2">
                <CCol sm={4} className="fw-semibold">
                  CreatedAt
                </CCol>
                <CCol sm={1} className="text-center fw-bold">
                  :
                </CCol>
                <CCol sm={7}>{selectedProcess.createdAt}</CCol>
              </CRow>
              <CRow className="mb-2">
                <CCol sm={4} className="fw-semibold">
                  CreatedBy
                </CCol>
                <CCol sm={1} className="text-center fw-bold">
                  :
                </CCol>
                <CCol sm={7}>{selectedProcess.createdBy}</CCol>
              </CRow>

              <CRow className="mb-2">
                <CCol sm={4} className="fw-semibold">
                  UpdatedAt
                </CCol>
                <CCol sm={1} className="text-center fw-bold">
                  :
                </CCol>
                <CCol sm={7}>{selectedProcess.updatedAt}</CCol>
              </CRow>
              <CRow className="mb-2">
                <CCol sm={4} className="fw-semibold">
                  UpdatedBy
                </CCol>
                <CCol sm={1} className="text-center fw-bold">
                  :
                </CCol>
                <CCol sm={7}>{selectedProcess.updatedBy}</CCol>
              </CRow>
            </div>
          )}

          {selectedProcess && modalType === 'delete' && (
            <div className="text-center">
              <div className="mb-4">
                <CIcon icon={cilTrash} size="xxl" className="text-danger mb-3" />
                <h5>Confirm Deletion</h5>
              </div>
              <p className="mb-4">
                Are you sure you want to delete the process{' '}
                <strong className="clr-black">"{selectedProcess.name}"</strong>?
                <br />
                <small className="text-muted">This action cannot be undone.</small>
              </p>
            </div>
          )}
        </CModalBody>

        <CModalFooter className="justify-content-center">
          {modalType === 'info' && (
            // <CButton color="secondary" onClick={handleModalClose} className='bg-blue'>
            //   Close
            // </CButton>
            <button className="px-3 bg-blue clr-white button-sizing" onClick={handleModalClose}>
              Close
            </button>
          )}
          {modalType === 'delete' && (
            <>
              <CButton color="secondary" onClick={handleModalClose}>
                Cancel
              </CButton>
              {/* <CButton color="danger" className="text-white" onClick={handleDeleteConfirm}>
                Yes, Delete
              </CButton> */}
              <button
                className="px-3 bg-blue clr-white button-sizing"
                onClick={handleDeleteConfirm}
              >
                Yes, Delete
              </button>
            </>
          )}
        </CModalFooter>
      </CModal>
    </CCol>
  )
}

export default DepartmentList
