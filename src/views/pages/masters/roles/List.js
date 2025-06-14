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


const RoleList = () => {
  const navigate = useNavigate()
  // Sample data
  const [roles] = useState([
    {
      id: 1,
      name: 'Admin',
      createdAt: '2024-01-15 09:30 AM',
      createdBy: 'John Doe',
      updatedAt: '2024-12-20 4:25 PM',
      updatedBy: 'Ram Kumar',
    },
    {
      id: 2,
      name: 'Manager',
      createdAt: '2024-02-10 11:15 AM',
      createdBy: 'Jane Smith',
      updatedAt: '2024-12-18 6:30 PM',
      updatedBy: 'Kumar',
    },
    {
      id: 3,
      name: 'Awards Coordinator',
      createdAt: '2024-03-05 11:20 AM',
      createdBy: 'Mike Johnson',
      updatedAt: '2024-12-19 11:45 PM',
      updatedBy: 'Siva',
    },
    {
      id: 4,
      name: 'Design Lead',
      createdAt: '2024-04-12 08:45 AM',
      createdBy: 'Sarah Wilson',
      updatedAt: '2024-12-17 3:20 PM',
      updatedBy: 'Ravi',
    },
    {
      id: 5,
      name: 'Data Entry',
      createdAt: '2024-05-18 08:45 AM',
      createdBy: 'David Chen',
      updatedAt: '2024-12-21 07:45 AM',
      updatedBy: 'Ravi',
    },
    {
      id: 6,
      name: 'Proofing Manager',
      createdAt: '2024-06-22 09:45 AM',
      createdBy: 'Lisa Anderson',
      updatedAt: '2024-12-20 10:45 AM',
      updatedBy: 'Suresh',
    },
    {
      id: 7,
      name: 'Vendor Liaison',
      createdAt: '2024-07-08 09:45 AM',
      createdBy: 'Robert Taylor',
      updatedAt: '2024-12-16 02:45 AM',
      updatedBy: 'Dinesh',
    },
    {
      id: 8,
      name: 'Event Liaison',
      createdAt: '2024-08-14 04:45 AM',
      createdBy: 'Emily Davis',
      updatedAt: '2024-12-22 09:45 AM',
      updatedBy: 'Dinesh',
    },
    {
      id: 9,
      name: 'Inventory Manager',
      createdAt: '2024-09-03 02:45 AM',
      createdBy: 'Tom Brown',
      updatedAt: '2024-12-19 09:45 AM',
      updatedBy: 'Suresh',
    },
    {
      id: 10,
      name: 'Guest',
      createdAt: '2024-10-11 09:45 AM',
      createdBy: 'Anna White',
      updatedAt: '2024-12-15 09:45 AM',
      updatedBy: 'Praveen',
    },
    {
      id: 11,
      name: 'Photographer',
      createdAt: '2024-11-07 01:45 AM',
      createdBy: 'Chris Green',
      updatedAt: '2024-12-21 09:45 PM',
      updatedBy: 'Praveen',
    },
    {
      id: 12,
      name: 'Archivist',
      createdAt: '2024-12-01 11:45 AM',
      createdBy: 'Mark Wilson',
      updatedAt: '2024-12-18 09:45 AM',
      updatedBy: 'Praveen',
    },
  ])

  // State management
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(5)
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' })
  const [showModal, setShowModal] = useState(false)
  const [modalType, setModalType] = useState('')
  const [selectedRole, setSelectedRole] = useState(null)

  // Filtering
  const filteredRoles = useMemo(() => {
    return roles.filter(
      (role) =>
        role.name.toLowerCase().includes(searchTerm.toLowerCase()),
    )
  }, [roles, searchTerm])

  // Sorting
  const sortedRoles = useMemo(() => {
    if (!sortConfig.key) return filteredRoles

    return [...filteredRoles].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1
      }
      return 0
    })
  }, [filteredRoles, sortConfig])

  // Pagination
  const totalPages = itemsPerPage === 'all' ? 1 : Math.ceil(sortedRoles.length / itemsPerPage)
  const startIndex = itemsPerPage === 'all' ? 0 : (currentPage - 1) * itemsPerPage
  const paginatedRoles =
    itemsPerPage === 'all'
      ? sortedRoles
      : sortedRoles.slice(startIndex, startIndex + itemsPerPage)

  // Reset to first page when search changes
  React.useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm])

  const handleAction = (action, role) => {
    if (action === 'info' || action === 'delete') {
      setModalType(action)
      setSelectedRole(role)
      setShowModal(true)
    } else if (action === 'edit') {
      console.log('Edit action for role:', role)
      // Implement edit logic here (e.g., navigate to edit page)
    }
  }

  const handleModalClose = () => {
    setShowModal(false)
    setModalType('')
    setSelectedRole(null)
  }

  const handleDeleteConfirm = () => {
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

  return (
    <CCol xs={12}>
      <CCard className="mb-4">
        <CCardHeader>
          <strong className="clr-blue fs-5">Roles List</strong>
        </CCardHeader>
        <CCardBody>
          {/* Search Bar and Button */}

          <CRow className="mb-3">
            <CCol xs={12} sm={8} md={6} lg={4} xl={3} className="mb-2 mb-sm-0">
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
            <CCol xs={12} sm={4} md={6} lg={8} xl={9} className="d-flex justify-content-sm-end">
              <button
                className="px-3 bg-blue clr-white button-sizing"
                onClick={() => navigate('/roles/add')}
              >
                Add
              </button>
            </CCol>
          </CRow>


          {/* Responsive Table with Horizontal Scroll */}
          <div className="responsive-table-container">
            <CTable striped hover className="table-min-widths">
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">S.No</CTableHeaderCell>
                  <CTableHeaderCell
                    scope="col"
                    className="sortable-header"
                    onClick={() => handleSort('name')}
                  >
                    Role Name{getSortIcon('name')}
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col" className="text-center">
                    Actions
                  </CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {paginatedRoles.length > 0 ? (
                  paginatedRoles.map((role, index) => (
                    <CTableRow key={role.id}>
                      <CTableDataCell>{startIndex + index + 1}</CTableDataCell>
                      <CTableDataCell className="no-wrap">{role.name}</CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div className="d-flex justify-content-center gap-1 actions-container">
                          <CButton
                            color="primary"
                            variant="outline"
                            size="sm"
                            onClick={() => handleAction('info', role)}
                            title="View Details"
                          >
                            <CIcon icon={cilInfo} size="sm" />
                          </CButton>
                          <CButton
                            color="success"
                            variant="outline"
                            size="sm"
                            onClick={() => navigate(`/roles/${role.id}`)}
                            title="Edit Role"
                          >
                            <CIcon icon={cilPencil} size="sm" />
                          </CButton>
                          <CButton
                            color="danger"
                            variant="outline"
                            size="sm"
                            onClick={() => handleAction('delete', role)}
                            title="Delete Role"
                          >
                            <CIcon icon={cilTrash} size="sm" />
                          </CButton>
                        </div>
                      </CTableDataCell>
                    </CTableRow>
                  ))
                ) : (
                  <CTableRow>
                    <CTableDataCell colSpan={3} className="text-center py-4">
                      No roles found
                    </CTableDataCell>
                  </CTableRow>
                )}
              </CTableBody>
            </CTable>
          </div>

          {/* Responsive Bottom Controls */}
          <CRow className="align-items-center">
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
                  ? `Showing all ${sortedRoles.length} entries`
                  : `Showing ${startIndex + 1} to ${Math.min(startIndex + itemsPerPage, sortedRoles.length)} of ${sortedRoles.length} entries`}
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
            {modalType === 'info' && 'Role Details'}
            {modalType === 'delete' && 'Delete Role'}
          </strong>
        </CModalHeader>

        <CModalBody>
          {selectedRole && modalType === 'info' && (
            <div>
              <CRow className="mb-2">
                <CCol sm={4} className="fw-semibold">
                  Role Name
                </CCol>
                <CCol sm={1} className="text-center fw-bold">
                  :
                </CCol>
                <CCol sm={7}>{selectedRole.name}</CCol>
              </CRow>

              <CRow className="mb-2">
                <CCol sm={4} className="fw-semibold">
                  Created At
                </CCol>
                <CCol sm={1} className="text-center fw-bold">
                  :
                </CCol>
                <CCol sm={7}>{selectedRole.createdAt}</CCol>
              </CRow>

              <CRow className="mb-2">
                <CCol sm={4} className="fw-semibold">
                  Created By
                </CCol>
                <CCol sm={1} className="text-center fw-bold">
                  :
                </CCol>
                <CCol sm={7}>{selectedRole.createdBy}</CCol>
              </CRow>

              <CRow className="mb-2">
                <CCol sm={4} className="fw-semibold">
                  Updated At
                </CCol>
                <CCol sm={1} className="text-center fw-bold">
                  :
                </CCol>
                <CCol sm={7}>{selectedRole.updatedAt}</CCol>
              </CRow>

              <CRow className="mb-2">
                <CCol sm={4} className="fw-semibold">
                  Updated By
                </CCol>
                <CCol sm={1} className="text-center fw-bold">
                  :
                </CCol>
                <CCol sm={7}>{selectedRole.updatedBy}</CCol>
              </CRow>
            </div>
          )}

          {selectedRole && modalType === 'delete' && (
            <div className="text-center">
              <div className="mb-4">
                <CIcon icon={cilTrash} size="xxl" className="text-danger mb-3" />
                <h5>Confirm Deletion</h5>
              </div>
              <p className="mb-4">
                Are you sure you want to delete the role{' '}
                <strong className="clr-black">"{selectedRole.name}"</strong>?
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

export default RoleList
