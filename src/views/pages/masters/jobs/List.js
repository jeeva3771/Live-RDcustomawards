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

const JobsList = () => {
  const navigate = useNavigate()

  // Sample job process data
  const [processes] = useState([
    {
      id: 1,
      jobNumber: 'JOB-2025-001',
      // salesOrderNo: 'SO-2025-075',
      customerName: 'Vikarta Life Sciences',
      productName: 'Metal Name Badge – Gold',
      quantity: 500,
      dueDate: '2025-06-25',
      jobStatus: 'In Progress',
      assignedTo: 'Ravi Kumar',
      createdDate: '2025-06-18',
      createdAt: '2025-06-18 09:30 AM',
      createdBy: 'John Doe',
      updatedAt: '2025-06-20 04:25 PM',
      updatedBy: 'Dinesh',
    },
    {
      id: 2,
      jobNumber: 'JOB-2025-002',
      // salesOrderNo: 'SO-2025-076',
      customerName: 'TechCorp Solutions',
      productName: 'Custom Metal Plates',
      quantity: 250,
      dueDate: '2025-07-15',
      jobStatus: 'Pending',
      assignedTo: 'Priya Sharma',
      createdDate: '2025-06-19',
      createdAt: '2025-06-19 10:15 AM',
      createdBy: 'Jane Smith',
      updatedAt: '2025-06-21 02:30 PM',
      updatedBy: 'Mike',
    },
    {
      id: 3,
      jobNumber: 'JOB-2025-003',
      // salesOrderNo: 'SO-2025-077',
      customerName: 'Alpha Industries',
      productName: 'Aluminum Signage Boards',
      quantity: 100,
      dueDate: '2025-07-01',
      jobStatus: 'Completed',
      assignedTo: 'Amit Singh',
      createdDate: '2025-06-10',
      createdAt: '2025-06-10 02:30 PM',
      createdBy: 'Mike Johnson',
      updatedAt: '2025-06-22 09:30 AM',
      updatedBy: 'Siva',
    },
    {
      id: 4,
      jobNumber: 'JOB-2025-004',
      // salesOrderNo: 'SO-2025-078',
      customerName: 'Global Manufacturing',
      productName: 'Steel Component Parts',
      quantity: 750,
      dueDate: '2025-08-10',
      jobStatus: 'In Progress',
      assignedTo: 'Rajesh Patel',
      createdDate: '2025-06-15',
      createdAt: '2025-06-15 01:30 PM',
      createdBy: 'Sarah Wilson',
      updatedAt: '2025-06-23 03:30 PM',
      updatedBy: 'Siva',
    },
    {
      id: 5,
      jobNumber: 'JOB-2025-005',
      // salesOrderNo: 'SO-2025-079',
      customerName: 'Design Studio Pro',
      productName: 'Custom Engraved Panels',
      quantity: 300,
      dueDate: '2025-07-20',
      jobStatus: 'On Hold',
      assignedTo: 'Neha Gupta',
      createdDate: '2025-06-12',
      createdAt: '2025-06-12 05:10 AM',
      createdBy: 'David Chen',
      updatedAt: '2025-06-24 03:15 PM',
      updatedBy: 'Saran',
    },
    {
      id: 6,
      jobNumber: 'JOB-2025-006',
      // salesOrderNo: 'SO-2025-080',
      customerName: 'Precision Tools Ltd',
      productName: 'Machined Components',
      quantity: 150,
      dueDate: '2025-07-30',
      jobStatus: 'In Progress',
      assignedTo: 'Suresh Kumar',
      createdDate: '2025-06-14',
      createdAt: '2025-06-14 03:15 PM',
      createdBy: 'Lisa Anderson',
      updatedAt: '2025-06-25 04:15 PM',
      updatedBy: 'Saran',
    },
    {
      id: 7,
      jobNumber: 'JOB-2025-007',
      // salesOrderNo: 'SO-2025-081',
      customerName: 'Metro Construction',
      productName: 'Structural Steel Elements',
      quantity: 1000,
      dueDate: '2025-08-15',
      jobStatus: 'Pending',
      assignedTo: 'Arun Krishnan',
      createdDate: '2025-06-16',
      createdAt: '2025-06-16 04:15 PM',
      createdBy: 'Robert Taylor',
      updatedAt: '2025-06-26 06:15 PM',
      updatedBy: 'Saran',
    },
    {
      id: 8,
      jobNumber: 'JOB-2025-008',
      // salesOrderNo: 'SO-2025-082',
      customerName: 'Automotive Solutions',
      productName: 'Precision Engine Parts',
      quantity: 400,
      dueDate: '2025-09-01',
      jobStatus: 'Completed',
      assignedTo: 'Karthik Reddy',
      createdDate: '2025-06-08',
      createdAt: '2025-06-08 04:15 PM',
      createdBy: 'Emily Davis',
      updatedAt: '2025-06-27 08:45 AM',
      updatedBy: 'Saran',
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
        process.jobNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
        // process.salesOrderNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        process.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        process.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        process.jobStatus.toLowerCase().includes(searchTerm.toLowerCase()) ||
        process.assignedTo.toLowerCase().includes(searchTerm.toLowerCase()),
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
      navigate(`/jobs/${process.id}`)
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
    const statusColors = {
      'In Progress': 'primary',
      'Completed': 'success',
      'Pending': 'warning',
      'On Hold': 'secondary',
      'Cancelled': 'danger'
    }
    return <CBadge color={statusColors[status] || 'secondary'}>{status}</CBadge>
  }

  return (
    <CCol xs={12}>
      <CCard className="mb-4">
        <CCardHeader>
          <strong className="clr-blue fs-5">Jobs List</strong>
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
                onClick={() => navigate('/salesorder')}
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
                  onClick={() => handleSort('jobNumber')}
                >
                  Job Number{getSortIcon('jobNumber')}
                </CTableHeaderCell>
                {/* <CTableHeaderCell
                  scope="col"
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleSort('salesOrderNo')}
                >
                  Sales Order No{getSortIcon('salesOrderNo')}
                </CTableHeaderCell> */}
                <CTableHeaderCell
                  scope="col"
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleSort('customerName')}
                >
                  Customer Name{getSortIcon('customerName')}
                </CTableHeaderCell>
                <CTableHeaderCell
                  scope="col"
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleSort('productName')}
                >
                  Product Name{getSortIcon('productName')}
                </CTableHeaderCell>
                <CTableHeaderCell
                  scope="col"
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleSort('quantity')}
                >
                  Quantity{getSortIcon('quantity')}
                </CTableHeaderCell>
                <CTableHeaderCell
                  scope="col"
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleSort('dueDate')}
                >
                  Due Date{getSortIcon('dueDate')}
                </CTableHeaderCell>
                <CTableHeaderCell
                  scope="col"
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleSort('jobStatus')}
                >
                  Job Status{getSortIcon('jobStatus')}
                </CTableHeaderCell>
                <CTableHeaderCell
                  scope="col"
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleSort('assignedTo')}
                >
                  Assigned To{getSortIcon('assignedTo')}
                </CTableHeaderCell>
                <CTableHeaderCell
                  scope="col"
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleSort('createdDate')}
                >
                  Created Date{getSortIcon('createdDate')}
                </CTableHeaderCell>
                <CTableHeaderCell scope="col" className="text-center">
                  Actions
                </CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {paginatedProcesses.length > 0 ? (
                paginatedProcesses.map((process, index) => (
                  <CTableRow key={process.id}>
                    <CTableDataCell>{startIndex + index + 1}</CTableDataCell>
                    <CTableDataCell>{process.jobNumber}</CTableDataCell>
                    {/* <CTableDataCell>{process.salesOrderNo}</CTableDataCell> */}
                    <CTableDataCell>{process.customerName}</CTableDataCell>
                    <CTableDataCell>{process.productName}</CTableDataCell>
                    <CTableDataCell>{process.quantity}</CTableDataCell>
                    <CTableDataCell>{process.dueDate}</CTableDataCell>
                    <CTableDataCell>{getStatusBadge(process.jobStatus)}</CTableDataCell>
                    <CTableDataCell>{process.assignedTo}</CTableDataCell>
                    <CTableDataCell>{process.createdDate}</CTableDataCell>
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
                        title="Edit Job"
                      >
                        <CIcon icon={cilPencil} size="sm" />
                      </CButton>
                      <CButton
                        color="danger"
                        variant="outline"
                        size="sm"
                        onClick={() => handleAction('delete', process)}
                        title="Delete Job"
                      >
                        <CIcon icon={cilTrash} size="sm" />
                      </CButton>
                    </CTableDataCell>
                  </CTableRow>
                ))
              ) : (
                <CTableRow>
                  <CTableDataCell colSpan={11} className="text-center py-4">
                    No jobs found
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
            {modalType === 'info' && 'Job Details'}
            {modalType === 'delete' && 'Delete Job'}
          </strong>
        </CModalHeader>

        <CModalBody>
          {selectedProcess && modalType === 'info' && (
            <div>
              <CRow className="mb-2">
                <CCol sm={4} className="fw-semibold">
                  Job Number
                </CCol>
                <CCol sm={1} className="text-center fw-bold">
                  :
                </CCol>
                <CCol sm={7}>{selectedProcess.jobNumber}</CCol>
              </CRow>

              {/* <CRow className="mb-2">
                <CCol sm={4} className="fw-semibold">
                  Sales Order No
                </CCol>
                <CCol sm={1} className="text-center fw-bold">
                  :
                </CCol>
                <CCol sm={7}>{selectedProcess.salesOrderNo}</CCol>
              </CRow> */}

              <CRow className="mb-2">
                <CCol sm={4} className="fw-semibold">
                  Customer Name
                </CCol>
                <CCol sm={1} className="text-center fw-bold">
                  :
                </CCol>
                <CCol sm={7}>{selectedProcess.customerName}</CCol>
              </CRow>

              <CRow className="mb-2">
                <CCol sm={4} className="fw-semibold">
                  Product Name
                </CCol>
                <CCol sm={1} className="text-center fw-bold">
                  :
                </CCol>
                <CCol sm={7}>{selectedProcess.productName}</CCol>
              </CRow>

              <CRow className="mb-2">
                <CCol sm={4} className="fw-semibold">
                  Quantity
                </CCol>
                <CCol sm={1} className="text-center fw-bold">
                  :
                </CCol>
                <CCol sm={7}>{selectedProcess.quantity}</CCol>
              </CRow>

              <CRow className="mb-2">
                <CCol sm={4} className="fw-semibold">
                  Due Date
                </CCol>
                <CCol sm={1} className="text-center fw-bold">
                  :
                </CCol>
                <CCol sm={7}>{selectedProcess.dueDate}</CCol>
              </CRow>

              <CRow className="mb-2">
                <CCol sm={4} className="fw-semibold">
                  Job Status
                </CCol>
                <CCol sm={1} className="text-center fw-bold">
                  :
                </CCol>
                <CCol sm={7}>{getStatusBadge(selectedProcess.jobStatus)}</CCol>
              </CRow>

              <CRow className="mb-2">
                <CCol sm={4} className="fw-semibold">
                  Assigned To
                </CCol>
                <CCol sm={1} className="text-center fw-bold">
                  :
                </CCol>
                <CCol sm={7}>{selectedProcess.assignedTo}</CCol>
              </CRow>

              {/* <CRow className="mb-2">
                <CCol sm={4} className="fw-semibold">
                  Created Date
                </CCol>
                <CCol sm={1} className="text-center fw-bold">
                  :
                </CCol>
                <CCol sm={7}>{selectedProcess.createdDate}</CCol>
              </CRow> */}

              <CRow className="mb-2">
                <CCol sm={4} className="fw-semibold">
                  Created At
                </CCol>
                <CCol sm={1} className="text-center fw-bold">
                  :
                </CCol>
                <CCol sm={7}>{selectedProcess.createdAt}</CCol>
              </CRow>

              <CRow className="mb-2">
                <CCol sm={4} className="fw-semibold">
                  Created By
                </CCol>
                <CCol sm={1} className="text-center fw-bold">
                  :
                </CCol>
                <CCol sm={7}>{selectedProcess.createdBy}</CCol>
              </CRow>

              <CRow className="mb-2">
                <CCol sm={4} className="fw-semibold">
                  Updated At
                </CCol>
                <CCol sm={1} className="text-center fw-bold">
                  :
                </CCol>
                <CCol sm={7}>{selectedProcess.updatedAt}</CCol>
              </CRow>

              <CRow className="mb-2">
                <CCol sm={4} className="fw-semibold">
                  Updated By
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
                Are you sure you want to delete the job{' '}
                <strong className="clr-black">"{selectedProcess.jobNumber}"</strong>?
                <br />
                <small className="text-muted">This action cannot be undone.</small>
              </p>
            </div>
          )}
        </CModalBody>

        <CModalFooter className="justify-content-center">
          {modalType === 'info' && (
            <button className="px-3 bg-blue clr-white button-sizing" onClick={handleModalClose}>
              Close
            </button>
          )}
          {modalType === 'delete' && (
            <>
              <CButton color="secondary" onClick={handleModalClose}>
                Cancel
              </CButton>
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

export default JobsList
