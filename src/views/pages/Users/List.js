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
  cilEyedropper,
  cilLockLocked,
} from '@coreui/icons'
import { useNavigate } from 'react-router-dom'

const UsersList = () => {
  const navigate = useNavigate()
  // Sample data
  const [users] = useState([
    {
      id: 1,
      name: 'John Doe',
      username: 'john_doe',
      department: 'Laser Engraving Unit',
      password: 'John@123',
      role: 'Admin',
      createdAt: '2024-01-15 09:30 AM',
      createdBy: 'System Admin',
      updatedAt: '2024-12-20 4:25 PM',
      updatedBy: 'Ram Kumar',
    },
    {
      id: 2,
      name: 'RD',
      username: 'rd_domain',
      password: 'Jane@456',
      department: 'Laser Engraving Unit',
      role: 'Manager',
      createdAt: '2024-02-10 11:15 AM',
      createdBy: 'John Doe',
      updatedAt: '2024-12-18 6:30 PM',
      updatedBy: 'Kumar',
    },
    {
      id: 3,
      name: 'Mike Johnson',
      username: 'mike_johnson',
      department: 'Client Design Approvals',
      password: 'Mike@789',
      role: 'Design Lead',
      createdAt: '2024-03-05 11:20 AM',
      createdBy: 'Jane Smith',
      updatedAt: '2024-12-19 11:45 PM',
      updatedBy: 'Siva',
    },
    {
      id: 4,
      name: 'Sarah Wilson',
      username: 'sarah.wilson',
      department: 'Procurement & Vendor Management',
      password: 'Sarah@321',
      role: 'Design Lead',
      createdAt: '2024-04-12 08:45 AM',
      createdBy: 'Mike Johnson',
      updatedAt: '2024-12-17 3:20 PM',
      updatedBy: 'Ravi',
    },
    {
      id: 5,
      name: 'David Chen',
      username: 'david.chen',
      department: 'Procurement & Vendor Management',
      password: 'David@654',
      role: 'Manager',
      createdAt: '2024-05-18 08:45 AM',
      createdBy: 'Sarah Wilson',
      updatedAt: '2024-12-21 07:45 AM',
      updatedBy: 'Ravi',
    },
    {
      id: 6,
      name: 'Lisa Anderson',
      department: 'Packaging & Logistics',
      username: 'lisa.anderson',
      password: 'Lisa@987',
      role: 'Data Entry',
      createdAt: '2024-06-22 09:45 AM',
      createdBy: 'David Chen',
      updatedAt: '2024-12-20 10:45 AM',
      updatedBy: 'Suresh',
    },
    {
      id: 7,
      name: 'Robert Taylor',
      username: 'robert.taylor',
      department: 'Order Fulfilment & Dispatch',
      password: 'Robert@147',
      role: 'Photographer',
      createdAt: '2024-07-08 09:45 AM',
      createdBy: 'Lisa Anderson',
      updatedAt: '2024-12-16 02:45 AM',
      updatedBy: 'Dinesh',
    },
    {
      id: 8,
      name: 'Emily Davis',
      username: 'emily.davis',
      department: 'Order Fulfilment & Dispatch',
      password: 'Emily@258',
      role: 'Manager',
      createdAt: '2024-08-14 04:45 AM',
      createdBy: 'Robert Taylor',
      updatedAt: '2024-12-22 09:45 AM',
      updatedBy: 'Dinesh',
    },
    {
      id: 9,
      name: 'Tom Brown',
      department: 'Quality Control & Assurance',
      username: 'tom.brown',
      password: 'Tom@369',
      role: 'Proofing Manager',
      createdAt: '2024-09-03 02:45 AM',
      createdBy: 'Emily Davis',
      updatedAt: '2024-12-19 09:45 AM',
      updatedBy: 'Suresh',
    },
    {
      id: 10,
      name: 'Anna White',
      department: 'Metal Casting & Finishing',
      username: 'anna.white',
      password: 'Anna@741',
      role: 'Admin',
      createdAt: '2024-10-11 09:45 AM',
      createdBy: 'Tom Brown',
      updatedAt: '2024-12-15 09:45 AM',
      updatedBy: 'Praveen',
    },
    {
      id: 11,
      name: 'Chris Green',
      department: 'Metal Casting & Finishing',
      username: 'chris.green',
      password: 'Chris@852',
      role: 'Manager',
      createdAt: '2024-11-07 01:45 AM',
      createdBy: 'Anna White',
      updatedAt: '2024-12-21 09:45 PM',
      updatedBy: 'Praveen',
    },
    {
      id: 12,
      name: 'Mark Wilson',
      username: 'mark.wilson',
      department: 'Metal Casting & Finishing',
      password: 'Mark@963',
      role: 'Vendor Liaison',
      createdAt: '2024-12-01 11:45 AM',
      createdBy: 'Chris Green',
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
  const [selectedUser, setSelectedUser] = useState(null)
  const [showPasswords, setShowPasswords] = useState({})

  // Filtering
  const filteredUsers = useMemo(() => {
    return users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.role.toLowerCase().includes(searchTerm.toLowerCase()),
    )
  }, [users, searchTerm])

  // Sorting
  const sortedUsers = useMemo(() => {
    if (!sortConfig.key) return filteredUsers

    return [...filteredUsers].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1
      }
      return 0
    })
  }, [filteredUsers, sortConfig])

  // Pagination
  const totalPages = itemsPerPage === 'all' ? 1 : Math.ceil(sortedUsers.length / itemsPerPage)
  const startIndex = itemsPerPage === 'all' ? 0 : (currentPage - 1) * itemsPerPage
  const paginatedUsers =
    itemsPerPage === 'all' ? sortedUsers : sortedUsers.slice(startIndex, startIndex + itemsPerPage)

  // Reset to first page when search changes
  React.useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm])

  const handleAction = (action, user) => {
    if (action === 'info' || action === 'delete') {
      setModalType(action)
      setSelectedUser(user)
      setShowModal(true)
    } else if (action === 'edit') {
      console.log('Edit action for user:', user)
      // Implement edit logic here (e.g., navigate to edit page)
    }
  }

  const handleModalClose = () => {
    setShowModal(false)
    setModalType('')
    setSelectedUser(null)
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

  const getRoleBadge = (role) => {
    //  * @type 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | 'primary-emphasis' | 'secondary-emphasis' | 'success-emphasis' | 'danger-emphasis' | 'warning-emphasis' | 'info-emphasis' | 'light-emphasis' | 'body' | 'body-emphasis' | 'body-secondary' | 'body-tertiary' | 'black' | 'black-50' | 'white' | 'white-50' | string

    const roleColors = {
      Photographer: 'danger',
      Manager: 'warning',
      Awards: 'secondary',
      Admin: 'success',
      Inventory: 'info',
    }
    return <CBadge color={roleColors[role] || 'secondary'}>{role}</CBadge>
  }

  const togglePasswordVisibility = (userId) => {
    setShowPasswords((prev) => ({
      ...prev,
      [userId]: !prev[userId],
    }))
  }

  return (
    <CCol xs={12}>
      <CCard className="mb-4">
        <CCardHeader>
          <strong className="clr-blue fs-5">Users List</strong>
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
                onClick={() => navigate('/users/add')}
              >
                Add
              </button>
            </CCol>
          </CRow>

          {/* Table */}
          {/* Custom CSS Classes */}
          <style>
            {`
  .responsive-table-container {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  .table-min-widths th:nth-child(1) {
    min-width: 60px;
  }

  .table-min-widths th:nth-child(2) {
    min-width: 150px;
  }

  .table-min-widths th:nth-child(3) {
    min-width: 120px;
  }

  .table-min-widths th:nth-child(4) {
    min-width: 130px;
  }

  .table-min-widths th:nth-child(5) {
    min-width: 100px;
  }

  .table-min-widths th:nth-child(6) {
    min-width: 150px;
  }

  .sortable-header {
    cursor: pointer;
  }

  .no-wrap {
    white-space: nowrap;
  }

  .actions-container {
    min-width: 150px;
  }

  .pagination-container {
    overflow-x: auto;
  }

  .pagination-nowrap {
    flex-wrap: nowrap;
  }

  .pagination-item-min {
    min-width: 40px;
  }

  .dropdown-auto-width {
    width: auto;
    min-width: 70px;
  }

  .text-nowrap {
    white-space: nowrap;
  }


`}
          </style>

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
                    Name{getSortIcon('name')}
                  </CTableHeaderCell>
                  <CTableHeaderCell
                    scope="col"
                    className="sortable-header"
                    onClick={() => handleSort('username')}
                  >
                    Username{getSortIcon('username')}
                  </CTableHeaderCell>
                  <CTableHeaderCell
                    scope="col"
                    className="sortable-header"
                    onClick={() => handleSort('department')}
                  >
                    Department{getSortIcon('department')}
                  </CTableHeaderCell>
                  <CTableHeaderCell
                    scope="col"
                    className="sortable-header"
                    onClick={() => handleSort('role')}
                  >
                    Role{getSortIcon('role')}
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col" className="text-center">
                    Actions
                  </CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {paginatedUsers.length > 0 ? (
                  paginatedUsers.map((user, index) => (
                    <CTableRow key={user.id}>
                      <CTableDataCell>{startIndex + index + 1}</CTableDataCell>
                      <CTableDataCell className="no-wrap">{user.name}</CTableDataCell>
                      <CTableDataCell className="no-wrap">{user.username}</CTableDataCell>
                      <CTableDataCell className="no-wrap">{user.department}</CTableDataCell>
                      <CTableDataCell>{getRoleBadge(user.role)}</CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div className="d-flex justify-content-center gap-1 actions-container">
                          <CButton
                            color="primary"
                            variant="outline"
                            size="sm"
                            onClick={() => handleAction('info', user)}
                            title="View Details"
                          >
                            <CIcon icon={cilInfo} size="sm" />
                          </CButton>
                          <CButton
                            color="success"
                            variant="outline"
                            size="sm"
                            onClick={() => navigate(`/users/${user.id}`)}
                            title="Edit User"
                          >
                            <CIcon icon={cilPencil} size="sm" />
                          </CButton>
                          <CButton
                            color="danger"
                            variant="outline"
                            size="sm"
                            onClick={() => handleAction('delete', user)}
                            title="Delete User"
                          >
                            <CIcon icon={cilTrash} size="sm" />
                          </CButton>
                        </div>
                      </CTableDataCell>
                    </CTableRow>
                  ))
                ) : (
                  <CTableRow>
                    <CTableDataCell colSpan={6} className="text-center py-4">
                      No users found
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
                  ? `Showing all ${sortedUsers.length} entries`
                  : `Showing ${startIndex + 1} to ${Math.min(startIndex + itemsPerPage, sortedUsers.length)} of ${sortedUsers.length} entries`}
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
            {modalType === 'info' && 'User Details'}
            {modalType === 'delete' && 'Delete User'}
          </strong>
        </CModalHeader>

        <CModalBody>
          {selectedUser && modalType === 'info' && (
            <div>
              <CRow className="mb-2">
                <CCol sm={4} className="fw-semibold">
                  Name
                </CCol>
                <CCol sm={1} className="text-center fw-bold">
                  :
                </CCol>
                <CCol sm={7}>{selectedUser.name}</CCol>
              </CRow>

              <CRow className="mb-2">
                <CCol sm={4} className="fw-semibold">
                  Username
                </CCol>
                <CCol sm={1} className="text-center fw-bold">
                  :
                </CCol>
                <CCol sm={7}>{selectedUser.username}</CCol>
              </CRow>

              <CRow className="mb-2">
                <CCol sm={4} className="fw-semibold">
                  Department
                </CCol>
                <CCol sm={1} className="text-center fw-bold">
                  :
                </CCol>
                <CCol sm={7}>{selectedUser.department}</CCol>
              </CRow>

              <CRow className="mb-2">
                <CCol sm={4} className="fw-semibold">
                  Role
                </CCol>
                <CCol sm={1} className="text-center fw-bold">
                  :
                </CCol>
                <CCol sm={7}>{getRoleBadge(selectedUser.role)}</CCol>
              </CRow>

              <CRow className="mb-2">
                <CCol sm={4} className="fw-semibold">
                  Created At
                </CCol>
                <CCol sm={1} className="text-center fw-bold">
                  :
                </CCol>
                <CCol sm={7}>{selectedUser.createdAt}</CCol>
              </CRow>

              <CRow className="mb-2">
                <CCol sm={4} className="fw-semibold">
                  Created By
                </CCol>
                <CCol sm={1} className="text-center fw-bold">
                  :
                </CCol>
                <CCol sm={7}>{selectedUser.createdBy}</CCol>
              </CRow>

              <CRow className="mb-2">
                <CCol sm={4} className="fw-semibold">
                  Updated At
                </CCol>
                <CCol sm={1} className="text-center fw-bold">
                  :
                </CCol>
                <CCol sm={7}>{selectedUser.updatedAt}</CCol>
              </CRow>

              <CRow className="mb-2">
                <CCol sm={4} className="fw-semibold">
                  Updated By
                </CCol>
                <CCol sm={1} className="text-center fw-bold">
                  :
                </CCol>
                <CCol sm={7}>{selectedUser.updatedBy}</CCol>
              </CRow>
            </div>
          )}

          {selectedUser && modalType === 'delete' && (
            <div className="text-center">
              <div className="mb-4">
                <CIcon icon={cilTrash} size="xxl" className="text-danger mb-3" />
                <h5>Confirm Deletion</h5>
              </div>
              <p className="mb-4">
                Are you sure you want to delete the user{' '}
                <strong className="clr-black">"{selectedUser.name}"</strong>?
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

export default UsersList
