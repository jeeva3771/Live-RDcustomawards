import React, { useState } from 'react'
import award1 from '../../../../public/award1.avif'
import award2 from '../../../../public/awards3.webp'
import award4 from '../../../../public/award4.webp'
import award5 from '../../../../public/award5.jpg'
import award6 from '../../../../public/award6.jpeg'

const EnhancedOrdersSystem = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeTab, setActiveTab] = useState('All')
  const [viewMode, setViewMode] = useState('grid')
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [modalProduct, setModalProduct] = useState(null)
  const [departmentModal, setDepartmentModal] = useState(null)
  const [selectedDepartments, setSelectedDepartments] = useState({})
  const [departmentFiles, setDepartmentFiles] = useState({})

  // 8 Departments with color codes
  const departments = [
    { id: 'dtp', name: 'DTP', color: '#FF6B6B' },
    { id: 'laser_cutting', name: 'Laser Cutting', color: '#4ECDC4' },
    { id: 'engraving', name: 'Engraving', color: '#45B7D1' },
    { id: 'printing', name: 'Printing', color: '#96CEB4' },
    { id: 'assembly', name: 'Assembly', color: '#FFEAA7' },
    { id: 'quality_check', name: 'Quality Check', color: '#DDA0DD' },
    { id: 'packaging', name: 'Packaging', color: '#98D8C8' },
    { id: 'dispatch', name: 'Dispatch', color: '#F7DC6F' },
  ]

  // Sample products with only Pending and Completed status
  const products = [
    {
      id: 1,
      name: 'MIC TROPHY',
      jobNo: '14888a',
      client: 'CLEONETT EVENTS',
      email: 'steffie@cleonett.com',
      contactNo: '98337 40939',
      quantity: 46,
      size: '10 Inches',
      deliveryDate: '19-03-2025',
      status: 'Pending',
      mainImage:
        award4,
      pricePerPiece: '₹1,100',
      priority: 'High',
    },
    {
      id: 2,
      name: 'CRYSTAL AWARD',
      jobNo: '14889',
      client: 'CORPORATE SOLUTIONS',
      email: 'info@corpsol.com',
      contactNo: '98765 43210',
      quantity: 25,
      size: '8 Inches',
      deliveryDate: '17-04-2025',
      status: 'Pending',
      mainImage: award1,
      pricePerPiece: '₹3,000',
      priority: 'Very High',
    },
    {
      id: 3,
      name: 'GLASS TROPHY',
      jobNo: '14893c',
      client: 'EXCELLENCE AWARDS',
      email: 'awards@excellence.com',
      contactNo: '98123 45678',
      quantity: 12,
      size: '16 Inches',
      deliveryDate: '11-01-2025',
      status: 'Completed',
      mainImage: award5,
      pricePerPiece: '₹7,000',
      priority: 'Medium',
    },
    {
      id: 4,
      name: 'GOLD MEDAL',
      jobNo: '14890',
      client: 'SPORTS FEDERATION',
      email: 'awards@sports.com',
      contactNo: '91234 56789',
      quantity: 100,
      size: '3 Inches',
      deliveryDate: '19-01-2026',
      status: 'Completed',
      mainImage: award2,
      pricePerPiece: '₹1,200',
      priority: 'Low',
    },
  ]

  // Get available statuses for tabs
  const statusTabs = ['All', 'Pending', 'Completed']

  // Filter products based on active tab and search term
  const filteredProducts = products.filter((product) => {
    const matchesTab = activeTab === 'All' || product.status === activeTab
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.jobNo.includes(searchTerm)
    return matchesTab && matchesSearch
  })

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'Very High':
        return 'rgb(220, 66, 66)'
      case 'High':
        return 'rgb(230, 190, 33)'
      case 'Medium':
        return 'rgb(52, 216, 132)'
      case 'Low':
        return 'rgb(94, 156, 233)'
      case 'Very Low':
        return '#e9d5ff'
      default:
        return '#95A5A6'
    }
  }

  const openModal = (product) => {
    setModalProduct(product)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setModalProduct(null)
    document.body.style.overflow = 'unset'
  }

  const openDepartmentModal = (product) => {
    setDepartmentModal(product)
    document.body.style.overflow = 'hidden'
  }

  const closeDepartmentModal = () => {
    setDepartmentModal(null)
    document.body.style.overflow = 'unset'
  }

  const handleDepartmentToggle = (productId, departmentId) => {
    setSelectedDepartments((prev) => ({
      ...prev,
      [productId]: {
        ...prev[productId],
        [departmentId]: !prev[productId]?.[departmentId],
      },
    }))
  }

  const handleFileUpload = (productId, departmentId, file) => {
    if (file) {
      setDepartmentFiles((prev) => ({
        ...prev,
        [`${productId}_${departmentId}`]: file,
      }))
    }
  }

  const saveDepartments = () => {
    alert('Departments and files saved successfully!')
    closeDepartmentModal()
  }

  // Department Modal Component
  const DepartmentModal = ({ product }) => {
    if (!product) return null

    return (
      <div className="modal-overlay" onClick={closeDepartmentModal}>
        <div className="department-modal" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h2 className="modal-title">Manage Departments - {product.name}</h2>
            <button className="close-button" onClick={closeDepartmentModal}>
              ×
            </button>
          </div>

          <div className="department-modal-body">
            <div className="departments-grid">
              {departments.map((dept) => {
                const isSelected = selectedDepartments[product.id]?.[dept.id]
                const hasFile = departmentFiles[`${product.id}_${dept.id}`]

                return (
                  <div key={dept.id} className="department-card">
                    <div className="department-header" style={{ backgroundColor: dept.color }}>
                      <label className="department-checkbox">
                        <input
                          type="checkbox"
                          checked={isSelected || false}
                          onChange={() => handleDepartmentToggle(product.id, dept.id)}
                        />
                        <span className="department-name">{dept.name}</span>
                      </label>
                    </div>

                    {isSelected && (
                      <div className="department-content">
                        <div className="file-upload-section">
                          <label className="file-upload-label">
                            <input
                              type="file"
                              accept=".pdf,.doc,.docx,.jpg,.png"
                              onChange={(e) =>
                                handleFileUpload(product.id, dept.id, e.target.files[0])
                              }
                              className="file-input"
                            />
                            <div className="file-upload-button">📁 Upload File</div>
                          </label>
                          {hasFile && <div className="uploaded-file">✅ {hasFile.name}</div>}
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            <div className="department-actions">
              <button onClick={closeDepartmentModal} className="btn-cancel">
                Cancel
              </button>
              <button onClick={saveDepartments} className="btn-save">
                Save Departments
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Product Card Component
  const ProductCard = ({ product }) => {
    const selectedDepts = selectedDepartments[product.id] || {}
    const selectedCount = Object.values(selectedDepts).filter(Boolean).length

    return (
      <div className="product-card">
        {/* Priority Ribbon */}
        <div
          className="priority-ribbon"
          style={{ backgroundColor: getPriorityColor(product.priority) }}
        >
          {product.priority}
        </div>

        <div className="image-container">
          <img src={product.mainImage} alt={product.name} className="product-image" />
        </div>

        <div className="card-content">
          <div>
            <h2 className="product-name">{product.name}</h2>
            <div className="job-number">
              Job No: <span>{product.jobNo}</span>
            </div>
          </div>

          <div className="details-container">
            <div className="detail-row">
              <span className="detail-label">CLIENT: </span>
              <span className="detail-value">{product.client}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">QUANTITY: </span>
              <span className="detail-value">{product.quantity}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">DELIVERY DATE: </span>
              <span className="detail-value">{product.deliveryDate}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">STATUS: </span>
              <span className={`status-badge status-${product.status.toLowerCase()}`}>
                {product.status}
              </span>
            </div>

            {selectedCount > 0 && (
              <div className="detail-row">
                <span className="detail-label">DEPARTMENTS: </span>
                <span className="detail-value">{selectedCount} selected</span>
              </div>
            )}

            <div className="action-icons-container">
              <button
                className="action-btn view-btn"
                onClick={() => openModal(product)}
                title="View Details"
              >
                👁️ View
              </button>

              {product.status === 'Pending' && (
                <button
                  className="action-btn dept-btn"
                  onClick={() => openDepartmentModal(product)}
                  title="Manage Departments"
                >
                  🏭 Departments
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Detail Modal Component
  const DetailModal = ({ product }) => {
    if (!product) return null

    return (
      <div className="modal-overlay" onClick={closeModal}>
        <div className="detail-modal" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h2 className="modal-title">{product.name}</h2>
            <button className="close-button" onClick={closeModal}>
              ×
            </button>
          </div>

          <div className="modal-body">
            <div className="modal-content-wrapper">
              <div className="modal-image-section">
                <img src={product.mainImage} alt={product.name} className="modal-image" />
              </div>

              <div className="modal-details-section">
                <div className="modal-section">
                  <h3 className="modal-section-title">Product Information</h3>
                  <div className="modal-detail-item">
                    <span className="modal-label">Job Number:</span>
                    <span className="modal-value">{product.jobNo}</span>
                  </div>
                  <div className="modal-detail-item">
                    <span className="modal-label">Quantity:</span>
                    <span className="modal-value">{product.quantity}</span>
                  </div>
                  <div className="modal-detail-item">
                    <span className="modal-label">Size:</span>
                    <span className="modal-value">{product.size}</span>
                  </div>
                  <div className="modal-detail-item">
                    <span className="modal-label">Price per Piece:</span>
                    <span className="modal-value">{product.pricePerPiece}</span>
                  </div>
                  <div className="modal-detail-item">
                    <span className="modal-label">Priority:</span>
                    <span
                      className="priority-badge"
                      style={{ backgroundColor: getPriorityColor(product.priority) }}
                    >
                      {product.priority}
                    </span>
                  </div>
                </div>

                <div className="modal-section">
                  <h3 className="modal-section-title">Client Information</h3>
                  <div className="modal-detail-item">
                    <span className="modal-label">Client Name:</span>
                    <span className="modal-value">{product.client}</span>
                  </div>
                  <div className="modal-detail-item">
                    <span className="modal-label">Email:</span>
                    <span className="modal-value">{product.email}</span>
                  </div>
                  <div className="modal-detail-item">
                    <span className="modal-label">Contact:</span>
                    <span className="modal-value">{product.contactNo}</span>
                  </div>
                  <div className="modal-detail-item">
                    <span className="modal-label">Delivery Date:</span>
                    <span className="modal-value">{product.deliveryDate}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <style jsx>{`
        .main-container {
          min-height: 100vh;
          padding: 1rem;
        }

        .inner-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .header-controls-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .main-title {
          font-size: 2.5rem;
          font-weight: bold;
          color: #1a202c;
          margin: 0;
        }

        .search-container {
          flex: 1;
          max-width: 400px;
        }

        .search-input {
          width: 100%;
          padding: 0.875rem 1.25rem;
          font-size: 1rem;
          border: 2px solid #e2e8f0;
          border-radius: 0.5rem;
          background-color: white;
          outline: none;
          transition: border-color 0.3s ease;
        }

        .search-input:focus {
          border-color: #3182ce;
        }

        .view-controls {
          display: flex;
          gap: 0.5rem;
        }

        .view-btn {
          padding: 0.5rem;
          border: 2px solid #3182ce;
          background: white;
          color: #3182ce;
          cursor: pointer;
          border-radius: 0.375rem;
          transition: all 0.2s ease;
        }

        .view-btn.active {
          background: #3182ce;
          color: white;
        }

        .tabs-container {
          margin-bottom: 2rem;
          border-bottom: 2px solid #e2e8f0;
        }

        .tabs-list {
          display: flex;
          gap: 0;
        }

        .tab-button {
          padding: 1rem 1.5rem;
          background: none;
          border: none;
          border-bottom: 3px solid transparent;
          color: #718096;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .tab-button.active {
          color: #3182ce;
          border-bottom-color: #3182ce;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
          gap: 1.5rem;
        }

        .product-card {
          background-color: white;
          border-radius: 0.75rem;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          display: flex;
          height: 260px;
          position: relative;
          transition: transform 0.2s ease;
        }

        // .product-card:hover {
        //   // transform: translateY(-2px);
        //   box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        // }

        .priority-ribbon {
          position: absolute;
          top: 0;
          left: 0;
          color: white;
          padding: 0.25rem 0.75rem;
          font-size: 0.75rem;
          font-weight: bold;
          border-bottom-right-radius: 0.5rem;
          z-index: 10;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .image-container {
          width: 180px;
          background-color: #f7fafc;
          flex-shrink: 0;
        }

        .product-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .card-content {
          padding: 1rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .product-name {
          font-size: 1.25rem;
          font-weight: bold;
          color: #1a202c;
          margin-bottom: 0.25rem;
        }

        .job-number {
          font-size: 0.875rem;
          font-weight: bold;
          color: #0061ed;
          margin-bottom: 0.75rem;
        }

        .job-number span {
          color: #1a202c;
        }

        .detail-row {
          margin-bottom: 0.5rem;
          font-size: 0.875rem;
        }

        .detail-label {
          color: #0061ed;
          font-weight: bold;
        }

        .detail-value {
          color: #4a5568;
        }

        .status-badge {
          padding: 0.25rem 0.5rem;
          border-radius: 0.25rem;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .status-pending {
          background-color: #fed7d7;
          color: #c53030;
        }

        .status-completed {
          background-color: #c6f6d5;
          color: #38a169;
        }

        .action-icons-container {
          display: flex;
          gap: 0.5rem;
          margin-top: 0.75rem;
        }

        .action-btn {
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 0.375rem;
          cursor: pointer;
          font-size: 0.875rem;
          font-weight: 500;
          transition: all 0.2s ease;
        }

        .view-btn {
          background-color: #0061ed;
          color: white;
        }

        .view-btn:hover {
          background-color: #2c5aa0;
        }

        .dept-btn {
          background-color: #38a169;
          color: white;
        }

        .dept-btn:hover {
          background-color: #2f855a;
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 1rem;
        }

        .detail-modal {
          background-color: white;
          border-radius: 0.75rem;
          width: 100%;
          max-width: 800px;
          max-height: 90vh;
          overflow: hidden;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
        }

        .department-modal {
          background-color: white;
          border-radius: 0.75rem;
          width: 100%;
          max-width: 900px;
          max-height: 90vh;
          overflow: hidden;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem;
          border-bottom: 1px solid #e2e8f0;
          background-color: #f7fafc;
        }

        .modal-title {
          font-size: 1.5rem;
          font-weight: bold;
          color: #1a202c;
          margin: 0;
        }

        .close-button {
          background: none;
          border: none;
          color: #718096;
          cursor: pointer;
          font-size: 1.5rem;
          font-weight: bold;
          width: 2rem;
          height: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 0.25rem;
        }

        .close-button:hover {
          color: #4a5568;
          background-color: #edf2f7;
        }

        .modal-body {
          padding: 1.5rem;
          overflow-y: auto;
          max-height: calc(90vh - 120px);
        }

        .modal-content-wrapper {
          display: flex;
          gap: 2rem;
        }

        .modal-image-section {
          flex-shrink: 0;
          width: 250px;
        }

        .modal-image {
          width: 100%;
          height: 250px;
          object-fit: cover;
          border-radius: 0.5rem;
        }

        .modal-details-section {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .modal-section {
          background-color: #f7fafc;
          padding: 1rem;
          border-radius: 0.5rem;
          border: 1px solid #e2e8f0;
        }

        .modal-section-title {
          font-size: 1rem;
          font-weight: bold;
          color: ##0061ed;
          margin: 0 0 0.75rem 0;
        }

        .modal-detail-item {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
        }

        .modal-label {
          font-weight: 600;
          color: #4a5568;
          min-width: 120px;
        }

        .modal-value {
          color: #1a202c;
        }

        .priority-badge {
          padding: 0.25rem 0.5rem;
          border-radius: 0.25rem;
          color: white;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .department-modal-body {
          padding: 1.5rem;
          max-height: calc(90vh - 120px);
          overflow-y: auto;
        }

        .departments-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .department-card {
          border: 1px solid #e2e8f0;
          border-radius: 0.5rem;
          overflow: hidden;
          background-color: white;
        }

        .department-header {
          padding: 1rem;
          color: white;
        }

        .department-checkbox {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          margin: 0;
        }

        .department-checkbox input {
          width: 1.25rem;
          height: 1.25rem;
        }

        .department-name {
          font-weight: bold;
          font-size: 1rem;
        }

        .department-content {
          padding: 1rem;
          background-color: #f7fafc;
        }

        .file-upload-section {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .file-upload-label {
          cursor: pointer;
        }

        .file-input {
          display: none;
        }

        .file-upload-button {
          display: inline-block;
          padding: 0.5rem 1rem;
          background-color: ##0061ed;
          color: white;
          border-radius: 0.375rem;
          font-size: 0.875rem;
          text-align: center;
          transition: background-color 0.2s ease;
        }

        .file-upload-button:hover {
          background-color: #2c5aa0;
        }

        .uploaded-file {
          font-size: 0.875rem;
          color: #38a169;
          font-weight: 500;
        }

        .department-actions {
          display: flex;
          gap: 1rem;
          justify-content: flex-end;
          padding-top: 1rem;
          border-top: 1px solid #e2e8f0;
        }

        .btn-cancel {
          padding: 0.75rem 1.5rem;
          background-color: #718096;
          color: white;
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
          font-weight: 500;
        }

        .btn-save {
          padding: 0.75rem 1.5rem;
          background-color: #38a169;
          color: white;
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
          font-weight: 500;
        }

        .btn-cancel:hover {
          background-color: #4a5568;
        }

        .btn-save:hover {
          background-color: #2f855a;
        }

        @media (max-width: 768px) {
          .header-controls-container {
            flex-direction: column;
            gap: 1rem;
          }

          .products-grid {
            grid-template-columns: 1fr;
          }

          .product-card {
            flex-direction: column;
            height: auto;
          }

          .image-container {
            width: 100%;
            height: 200px;
          }

          .modal-content-wrapper {
            flex-direction: column;
          }

          .modal-image-section {
            width: 100%;
          }

          .departments-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="main-container">
        <div className="inner-container">
          {/* Header */}
          <div className="header-controls-container">
            <h1 className="main-title">Orders Management</h1>

            <div className="search-container">
              <input
                type="text"
                placeholder="🔍 Search by product, client, job number..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>

            <div className="view-controls">
              <button
                className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
              >
                Grid
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="tabs-container">
            <div className="tabs-list">
              {statusTabs.map((status) => (
                <button
                  key={status}
                  className={`tab-button ${activeTab === status ? 'active' : ''}`}
                  onClick={() => setActiveTab(status)}
                >
                  {status} (
                  {status === 'All'
                    ? products.length
                    : products.filter((p) => p.status === status).length}
                  )
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Modals */}
          {modalProduct && <DetailModal product={modalProduct} />}
          {departmentModal && <DepartmentModal product={departmentModal} />}
        </div>
      </div>
    </>
  )
}

export default EnhancedOrdersSystem




///


import React, { useState } from 'react'

import { CButton, CCol, CFormLabel, CFormSelect } from '@coreui/react'
import { useNavigate } from 'react-router-dom'
import CIcon from '@coreui/icons-react'
import award1 from '../../../../public/award1.avif'
import award2 from '../../../../public/awards3.webp'
import award4 from '../../../../public/award4.webp'
import award5 from '../../../../public/award5.jpg'
import award6 from '../../../../public/award6.jpeg'
import noImage from '../../../../public/noimage.jpg'
import a1 from '../../../../public/a1.avif'
import a2 from '../../../../public/a2.jpg'
import a3 from '../../../../public/a3.jpg'
import a4 from '../../../../public/a4.webp'

import invoiceUrl from '../../../../public/sampleinvoice.pdf'

const EnhancedProductCards = () => {
  const [expandedCards, setExpandedCards] = useState(new Set())
  const [submit, setSubmit] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [productImages, setProductImages] = useState({})
  const [modalProduct, setModalProduct] = useState(null)
  const [assignedPersons, setAssignedPersons] = useState({})
  const [productRemarks, setProductRemarks] = useState({})
  const [personModalProduct, setPersonModalProduct] = useState(null)
  const [tempSelectedPerson, setTempSelectedPerson] = useState('')
  const [tempRemarks, setTempRemarks] = useState('')
  const [uploadModalProduct, setUploadModalProduct] = useState(null)
  const [selectedFile, setSelectedFile] = useState(null)
  const [acceptedProducts, setAcceptedProducts] = useState(new Set())
  const [showUploadForProducts, setShowUploadForProducts] = useState(new Set())
  const [currentImageIndex, setCurrentImageIndex] = useState({})
  const [modalImageIndex, setModalImageIndex] = useState({})
  const [processedProducts, setProcessedProducts] = useState(new Set([7, 8, 9]))
  const [activeTab, setActiveTab] = useState('All')
  const [viewMode, setViewMode] = useState('grid') // grid, table, super-grid
  const [selectedProduct, setSelectedProduct] = useState(null) // For super-grid detail view
  const [showPriorityModal, setShowPriorityModal] = useState(false)
  const [selectedPriority, setSelectedPriority] = useState('')
  const [priorityProductId, setPriorityProductId] = useState(null)
    const [departmentModal, setDepartmentModal] = useState(null)
    const [selectedDepartments, setSelectedDepartments] = useState({})
    const [departmentFiles, setDepartmentFiles] = useState({})
  const navigate = useNavigate()

  // Available persons list
  const availablePersons = ['Ronald', 'Melroy', 'Kaushal', 'Priya', 'Arun', 'Neha', 'Vikram']

  // Product data with additional fields
  const products = [
    {
      id: 1,
      name: 'MIC TROPHY',
      jobNo: '14888a',
      client: 'CLEONETT EVENTS',
      email: 'steffie@cleonett.com',
      invoiceUrl: invoiceUrl,
      contactNo: '98337 40939',
      quantity: 46,
      size: '10 Inches',
      startTime: '2025-02-09 09:10 AM',
      endTime: '2025-02-10 10:10 AM',
      status: 'Pending',
      deliveryDate: '19-03-2025',
      deliveryLocation: 'ITC Central - Parel - MUMBAI',
      deliveryMode: 'HAND DELIVERY',
      mainImage: award1,
      enquiryOrigin: 'Website Form',
      budget: '₹50,000',
      preferedMaterial: 'Crystal Glass',
      briefing:
        'High-quality microphone trophy for annual corporate event. Should include company logo engraving.',
      paymentTerms: '50% advance & Bal before dispatch & delivery',
      maxImages: 1,
      remarks: 'Special product',
      time: '2025-02-08 04:00 PM',
      phoneNumber: '98337 40939',
      pricePerPiece: '₹1,100',
      deliveryType: 'Express Hand Delivery',
      billingAddress: 'Cleonett Events, 1st Floor, Andheri East, Mumbai, MH 400059',
      packingType: 'Bubble Wrap & Box',
      innerPackingType: 'Foam Cutout',
      premiumPackingOptions: 'Branded Gift Box',
      packingInstructions: 'Keep upright, handle with care.',
      packingMode: 'Individual Pack',
      deliveryAddress: 'ITC Central, Parel, Mumbai, MH 400012',
    },
    {
      id: 2,
      name: 'MIC TROPHY',
      jobNo: '14888b',
      client: 'CLEONETT EVENTS',
      email: 'steffie@cleonett.com',
      contactNo: '98337 40939',
      quantity: 46,
      size: '10 Inches',
      startTime: '2025-02-09 09:10 AM',
      endTime: '2025-02-10 10:10 AM',
      status: 'Pending',
      deliveryDate: '19-03-2025',
      deliveryLocation: 'ITC Central - Parel - MUMBAI',
      deliveryMode: 'HAND DELIVERY',
      mainImage: award5,
      enquiryOrigin: 'Website Form',
      deliveryAddress: {
        street: 'ITC Central, Parel',
        city: 'Mumbai',
        state: 'MH',
        postalCode: '400012',
      },
      billingAddress: {
        street: '1st Floor, Cleonett House, Andheri East',
        city: 'Mumbai',
        state: 'MH',
        postalCode: '400059',
      },
      budget: '₹50,000',
      preferedMaterial: 'Crystal Glass',
      briefing: 'Duplicate batch for same event — same engraving and specs.',
      paymentTerms: '50% advance & Bal before dispatch & delivery',
      maxImages: 1,
      remarks: 'Special product',
      time: '2025-02-08 04:30 PM',
      phoneNumber: '98337 40939',
      pricePerPiece: '₹1,100',
      deliveryType: 'Express Hand Delivery',
      billingAddress: 'Cleonett Events, 1st Floor, Andheri East, Mumbai, MH 400059',
      packingType: 'Bubble Wrap & Box',
      innerPackingType: 'Foam Cutout',
      premiumPackingOptions: 'Branded Gift Box',
      packingInstructions: 'Keep same as previous lot.',
      packingMode: 'Individual Pack',
      deliveryAddress: 'ITC Central, Parel, Mumbai, MH 400012',
    },
    {
      id: 7,
      name: 'CRYSTAL AWARD',
      jobNo: '14889',
      client: 'CORPORATE SOLUTIONS',
      email: 'info@corpsol.com',
      contactNo: '98765 43210',
      quantity: 25,
      size: '8 Inches',
      startTime: '2025-02-09 09:10 AM',
      endTime: '2025-02-10 10:10 AM',
      status: 'Pending',
      deliveryDate: '17-04-2025',
      deliveryLocation: 'Bandra Kurla Complex - MUMBAI',
      deliveryAddress: {
        street: 'ITC Central, Parel',
        city: 'Mumbai',
        state: 'MH',
        postalCode: '400012',
      },
      billingAddress: {
        street: '1st Floor, Cleonett House, Andheri East',
        city: 'Mumbai',
        state: 'MH',
        postalCode: '400059',
      },
      deliveryMode: 'COURIER',
      mainImage: award2,
      enquiryOrigin: 'Direct Call',
      budget: '₹75,000',
      preferedMaterial: 'Premium Crystal',
      briefing: 'Elegant crystal awards for employees.',
      paymentTerms: '100% Advance',
      maxImages: 4,
      remarks: 'Special product',
      time: '2025-04-15 05:00 PM',
      phoneNumber: '98765 43210',
      pricePerPiece: '₹3,000',
      deliveryType: 'Secure Courier',
      billingAddress: 'Corporate Solutions Ltd, Bandra East, Mumbai, MH 400051',
      packingType: 'Bubble Wrap & Hard Box',
      innerPackingType: 'Cushion Foam',
      premiumPackingOptions: 'Velvet Pouch',
      packingInstructions: 'No scratches on crystal surface.',
      packingMode: 'Individual Pack',
      deliveryAddress: 'BKC, Mumbai, MH 400051',
    },
    {
      id: 6,
      name: 'GLASS TROPHY',
      jobNo: '14893c',
      client: 'EXCELLENCE AWARDS',
      email: 'awards@excellence.com',
      deliveryAddress: {
        street: 'ITC Central, Parel',
        city: 'Mumbai',
        state: 'MH',
        postalCode: '400012',
      },
      invoiceUrl: invoiceUrl,
      billingAddress: {
        street: '1st Floor, Cleonett House, Andheri East',
        city: 'Mumbai',
        state: 'MH',
        postalCode: '400059',
      },
      contactNo: '98123 45678',
      quantity: 12,
      size: '16 Inches',
      startTime: '2025-02-09 09:10 AM',
      endTime: '2025-02-10 10:10 AM',
      status: 'Completed',
      deliveryDate: '11-01-2025',
      deliveryLocation: 'Andheri - MUMBAI',
      deliveryMode: 'EXPRESS DELIVERY',
      mainImage: a2,
      enquiryOrigin: 'LinkedIn',
      budget: '₹85,000',
      preferedMaterial: 'Borosilicate Glass',
      briefing: 'Premium trophies with LED base.',
      paymentTerms: 'Corporate Credit',
      maxImages: 3,
      remarks: 'Good product',
      time: '2025-01-10 02:00 PM',
      phoneNumber: '98123 45678',
      pricePerPiece: '₹7,000',
      deliveryType: 'Express Courier',
      billingAddress: 'Excellence Awards Pvt Ltd, 14th Floor, Andheri West, MH 400053',
      packingType: 'Hard Foam & Wooden Box',
      innerPackingType: 'Thermocol Mold',
      premiumPackingOptions: 'Custom LED Box',
      packingInstructions: 'Secure LED base separately.',
      invoiceFileName: 'sampledetails.pdf',
      packingMode: 'Individual Pack',
      deliveryAddress: 'Andheri West, Mumbai, MH 400053',
      designFile: 'design_file.pdf',
    },
    {
      id: 8,
      name: 'GOLD MEDAL',
      jobNo: '14890',
      client: 'SPORTS FEDERATION',
      email: 'awards@sports.com',
      contactNo: '91234 56789',
      quantity: 100,
      size: '3 Inches',
      startTime: '2025-02-09 09:10 AM',
      endTime: '2025-02-10 10:10 AM',
      status: 'Completed',
      deliveryDate: '19-01-2026',
      deliveryLocation: 'Worli Sports Complex - MUMBAI',
      invoiceFileName: 'invoice.pdf',
      deliveryAddress: {
        street: 'ITC Central, Parel',
        city: 'Mumbai',
        state: 'MH',
        postalCode: '400012',
      },
      billingAddress: {
        street: '1st Floor, Cleonett House, Andheri East',
        city: 'Mumbai',
        state: 'MH',
        postalCode: '400059',
      },
      deliveryMode: 'PICKUP',
      mainImage: award4,
      enquiryOrigin: 'Email Inquiry',
      budget: '₹1,20,000',
      preferedMaterial: 'Gold Plated Metal',
      briefing: 'Olympic-style medals with different icons.',
      paymentTerms: 'Corporate Credit',
      maxImages: 1,
      remarks: 'Special product',
      time: '2026-01-15 03:00 PM',
      phoneNumber: '91234 56789',
      pricePerPiece: '₹1,200',
      deliveryType: 'Self Pickup',
      billingAddress: 'Sports Federation India, Worli, Mumbai, MH 400030',
      packingType: 'Velvet Pouches',
      innerPackingType: 'Individual Slot',
      invoiceUrl: invoiceUrl,
      premiumPackingOptions: 'Branded Medal Case',
      packingInstructions: 'Group by sport type.',
      packingMode: 'Batch Pack of 10',
      deliveryAddress: 'Worli Sports Complex, Mumbai, MH 400030',
    },
    {
      id: 9,
      name: 'WOODEN SHIELD',
      jobNo: '14892',
      client: 'HERITAGE CLUB',
      email: 'heritage@club.com',
      contactNo: '99887 76543',
      quantity: 30,
      size: '14 Inches',
      startTime: '2025-02-09 09:10 AM',
      endTime: '2025-02-10 10:10 AM',
      status: 'Completed',
      deliveryDate: '19-02-2025',
      deliveryLocation: 'Fort - MUMBAI',
      deliveryMode: 'COURIER',
      mainImage: award6,
      enquiryOrigin: 'Referral',
      budget: '₹90,000',
      preferedMaterial: 'Teak Wood',
      briefing: 'Traditional shields with carving.',
      paymentTerms: '50% advance & Bal before dispatch & delivery',
      maxImages: 1,
      remarks: 'Special product',
      time: '2025-02-18 02:00 PM',
      phoneNumber: '99887 76543',
      pricePerPiece: '₹3,000',
      deliveryType: 'Secure Courier',
      billingAddress: 'Heritage Club, Fort, Mumbai, MH 400001',
      packingType: 'Cardboard & Bubble Wrap',
      innerPackingType: 'Foam Corner Pads',
      premiumPackingOptions: 'Wooden Crate',
      packingInstructions: 'Keep away from moisture.',
      packingMode: 'Batch Pack',
      deliveryAddress: 'Heritage Club, Fort, Mumbai, MH 400001',
      designFile: 'design_file.pdf',
      invoiceUrl: invoiceUrl,
    },

    // {
    //   id: 10,
    //   name: 'MIC TROPHY',
    //   jobNo: '14887b',
    //   client: 'CLEONETT EVENTS',
    //   email: 'steffie@cleonett.com',
    //   contactNo: '98337 40939',
    //   quantity: 46,
    //   size: '10 Inches',
    //   startTime: '2025-02-09 09:10 AM',
    //   endTime: '2025-02-10 10:10 AM',
    //   status: 'Completed',
    //   deliveryDate: '19-03-2025',
    //   deliveryLocation: 'ITC Central - Parel - MUMBAI',
    //   deliveryMode: 'HAND DELIVERY',
    //   mainImage: award5,
    //   enquiryOrigin: 'Website Form',
    //   deliveryAddress: {
    //     street: 'ITC Central, Parel',
    //     city: 'Mumbai',
    //     state: 'MH',
    //     postalCode: '400012',
    //   },
    //   billingAddress: {
    //     street: '1st Floor, Cleonett House, Andheri East',
    //     city: 'Mumbai',
    //     state: 'MH',
    //     postalCode: '400059',
    //   },
    //   budget: '₹50,000',
    //   preferedMaterial: 'Crystal Glass',
    //   briefing: 'Duplicate batch for same event — same engraving and specs.',
    //   paymentTerms: '50% advance & Bal before dispatch & delivery',
    //   maxImages: 1,
    //   remarks: 'Special product',
    //   time: '2025-02-08 04:30 PM',
    //   phoneNumber: '98337 40939',
    //   pricePerPiece: '₹1,100',
    //   deliveryType: 'Express Hand Delivery',
    //   billingAddress: 'Cleonett Events, 1st Floor, Andheri East, Mumbai, MH 400059',
    //   packingType: 'Bubble Wrap & Box',
    //   innerPackingType: 'Foam Cutout',
    //   premiumPackingOptions: 'Branded Gift Box',
    //   packingInstructions: 'Keep same as previous lot.',
    //   packingMode: 'Individual Pack',
    //   deliveryAddress: 'ITC Central, Parel, Mumbai, MH 400012',
    // },
  ]

  // Get available statuses for tabs (remove duplicate completed)
  // const statusTabs = ['All', ...new Set(products.map((product) => product.status))]

  // Filter products based on active tab and search term
  // const filteredProducts = products.filter((product) => {
  //   const matchesTab = activeTab === 'All' || product.status === activeTab
  //   const matchesSearch =
  //     product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     product.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     product.jobNo.includes(searchTerm)
  //   return matchesTab && matchesSearch
  // })

  const getDeliveryModeClass = (mode) => {
    switch (mode) {
      case 'Under Process':
        return 'status-printing'
      case 'Awaiting Approval':
        return 'status-green'
      case 'Process':
        return 'status-process'
      case 'Design Uploaded':
        return 'status-enquiry'
      case 'PI Uploaded':
        return 'status-production'
      case 'SAMPLING':
        return 'status-sampling'
      case 'DISPATCH':
        return 'status-dispatch'
      case 'BILLING':
        return 'status-billing'
      case 'Approve':
        return 'status-green'
      case 'Reject':
        return 'status-red'
      case 'Completed':
        return 'status-completed'
      default:
        return 'status-default'
    }
  }

  const getProductImages = (productId) => {
    return productImages[productId] || []
  }

  const getUploadedCount = (productId) => {
    const images = getProductImages(productId)
    const product = products.find((p) => p.id === productId)
    let count = images.length

    if (product && product.mainImage) {
      count += 1
    }

    return count
  }

  const getMaxImages = (product) => {
    return product.maxImages || 4
  }

   const statusTabs = ['All', 'Pending', 'Completed']

  // Filter products based on active tab and search term
  const filteredProducts = products.filter((product) => {
    const matchesTab = activeTab === 'All' || product.status === activeTab
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.jobNo.includes(searchTerm)
    return matchesTab && matchesSearch
  })

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'Very High':
        return 'rgb(220, 66, 66)'
      case 'High':
        return 'rgb(230, 190, 33)'
      case 'Medium':
        return 'rgb(52, 216, 132)'
      case 'Low':
        return 'rgb(94, 156, 233)'
      case 'Very Low':
        return '#e9d5ff'
      default:
        return '#95A5A6'
    }
  }

    const departments = [
    { id: 'dtp', name: 'DTP', color: '#FF6B6B' },
    { id: 'laser_cutting', name: 'Laser Cutting', color: '#4ECDC4' },
    { id: 'engraving', name: 'Engraving', color: '#45B7D1' },
    { id: 'printing', name: 'Printing', color: '#96CEB4' },
    { id: 'assembly', name: 'Assembly', color: '#FFEAA7' },
    { id: 'quality_check', name: 'Quality Check', color: '#DDA0DD' },
    { id: 'packaging', name: 'Packaging', color: '#98D8C8' },
    { id: 'dispatch', name: 'Dispatch', color: '#F7DC6F' },
  ]



  const openDepartmentModal = (product) => {
    setDepartmentModal(product)
    document.body.style.overflow = 'hidden'
  }

  const closeDepartmentModal = () => {
    setDepartmentModal(null)
    document.body.style.overflow = 'unset'
  }

  const handleDepartmentToggle = (productId, departmentId) => {
    setSelectedDepartments((prev) => ({
      ...prev,
      [productId]: {
        ...prev[productId],
        [departmentId]: !prev[productId]?.[departmentId],
      },
    }))
  }

  const handleFileUpload = (productId, departmentId, file) => {
    if (file) {
      setDepartmentFiles((prev) => ({
        ...prev,
        [`${productId}_${departmentId}`]: file,
      }))
    }
  }

  const saveDepartments = () => {
    alert('Departments and files saved successfully!')
    closeDepartmentModal()
  }


  const getCurrentImage = (product) => {
    const images = getProductImages(product.id)
    const allImages = [...(product.mainImage ? [product.mainImage] : []), ...images]
    const currentIndex = currentImageIndex[product.id] || 0

    if (allImages.length > 0) {
      return allImages[currentIndex] || allImages[0]
    }

    return product.mainImage || noImage
  }

  const getCurrentModalImage = (product) => {
    const images = getProductImages(product.id)
    const allImages = [...(product.mainImage ? [product.mainImage] : []), ...images]
    const currentIndex = modalImageIndex[product.id] || 0

    if (allImages.length > 0) {
      return allImages[currentIndex] || allImages[0]
    }

    return product.mainImage || noImage
  }

  const handlePreviousImage = (productId) => {
    const images = getProductImages(productId)
    const product = products.find((p) => p.id === productId)
    const totalImages = images.length + (product.mainImage ? 1 : 0)

    if (totalImages <= 1) return

    setCurrentImageIndex((prev) => ({
      ...prev,
      [productId]: ((prev[productId] || 0) - 1 + totalImages) % totalImages,
    }))
  }

  const handleNextImage = (productId) => {
    const images = getProductImages(productId)
    const product = products.find((p) => p.id === productId)
    const totalImages = images.length + (product.mainImage ? 1 : 0)

    if (totalImages <= 1) return

    setCurrentImageIndex((prev) => ({
      ...prev,
      [productId]: ((prev[productId] || 0) + 1) % totalImages,
    }))
  }

  const handlePreviousModalImage = (productId) => {
    const images = getProductImages(productId)
    const product = products.find((p) => p.id === productId)
    const totalImages = images.length + (product.mainImage ? 1 : 0)

    if (totalImages <= 1) return

    setModalImageIndex((prev) => ({
      ...prev,
      [productId]: ((prev[productId] || 0) - 1 + totalImages) % totalImages,
    }))
  }

  const handleNextModalImage = (productId) => {
    const images = getProductImages(productId)
    const product = products.find((p) => p.id === productId)
    const totalImages = images.length + (product.mainImage ? 1 : 0)

    if (totalImages <= 1) return

    setModalImageIndex((prev) => ({
      ...prev,
      [productId]: ((prev[productId] || 0) + 1) % totalImages,
    }))
  }

  const openModal = (product) => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
    setModalProduct(product)
    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = `${scrollbarWidth}px`
  }

  const closeModal = () => {
    setModalProduct(null)
    document.body.style.overflow = 'unset'
    document.body.style.paddingRight = '0px'
  }

  const openUploadModal = (product) => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
    setUploadModalProduct(product)
    setSelectedFile(null)
    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = `${scrollbarWidth}px`
  }

  const closeUploadModal = () => {
    setUploadModalProduct(null)
    setSelectedFile(null)
    document.body.style.overflow = 'unset'
    document.body.style.paddingRight = '0px'
  }

  const openPriorityModal = (productId) => {
    setPriorityProductId(productId)
    setSelectedPriority('')
    setShowPriorityModal(true)
  }

  const closePriorityModal = () => {
    setShowPriorityModal(false)
    setPriorityProductId(null)
    setSelectedPriority('')
  }

  const handlePrioritySubmit = () => {
    if (selectedPriority) {
      alert(
        `Product ${priorityProductId} added to Production Plan with ${selectedPriority} priority!`,
      )
      closePriorityModal()
    }
  }

  const handleAcceptProduct = (productId) => {
    setAcceptedProducts((prev) => {
      const newAccepted = new Set(prev)
      newAccepted.add(productId)
      return newAccepted
    })
    setShowUploadForProducts((prev) => {
      const newShowUpload = new Set(prev)
      newShowUpload.add(productId)
      return newShowUpload
    })
  }

  const handleEditClick = (productId) => {
    setProcessedProducts((prev) => {
      const newProcessed = new Set(prev)
      newProcessed.add(productId)
      return newProcessed
    })
  }

  const handleToProcessClick = (productId) => {
    alert(`Product ${productId} is now being processed!`)
  }

  const confirmUpload = () => {
    if (selectedFile && uploadModalProduct) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setProductImages((prev) => ({
          ...prev,
          [uploadModalProduct.id]: [...(prev[uploadModalProduct.id] || []), e.target.result],
        }))

        setShowUploadForProducts((prev) => {
          const newShowUpload = new Set(prev)
          newShowUpload.delete(uploadModalProduct.id)
          return newShowUpload
        })

        closeUploadModal()
      }
      reader.readAsDataURL(selectedFile)
    }
  }

  const downloadFile = (url, filename) => {
    const link = document.createElement('a')
    link.href = url
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // Priority Modal Component
  const PriorityModal = () => {
    if (!showPriorityModal) return null

    return (
      <div className="modal-overlay" onClick={closePriorityModal}>
        <div className="priority-modal" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h2 className="modal-title">Set Priority</h2>
            <button className="close-button" onClick={closePriorityModal}>
              ×
            </button>
          </div>

          <div className="priority-modal-body">
            <div className="priority-options">
              {['Very High', 'High', 'Medium', 'Low', 'Very Low'].map((priority) => (
                <label
                  key={priority}
                  className={`priority-option priority-${priority.toLowerCase().replace(' ', '-')}`}
                >
                  <input
                    type="radio"
                    name="priority"
                    className="priority"
                    value={priority}
                    checked={selectedPriority === priority}
                    onChange={(e) => setSelectedPriority(e.target.value)}
                  />
                  <span className="priority-label">{priority}</span>
                </label>
              ))}
            </div>

            <div className="priority-actions">
              <button onClick={closePriorityModal} className="btn-cancel">
                Cancel
              </button>
              <button
                onClick={handlePrioritySubmit}
                className="btn-submit"
                disabled={!selectedPriority}
              >
                Add to Production Plan
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Super Grid Detail Card Component
  const SuperGridDetailCard = ({ product }) => {
    if (!product) return null

    const currentImage = getCurrentImage(product)
    const isProcessed = processedProducts.has(product.id)
    const showUploadIcons = showUploadForProducts.has(product.id)
    const uploadedCount = getUploadedCount(product.id)
    const maxImages = getMaxImages(product)
    const allImages = [
      ...(product.mainImage ? [product.mainImage] : []),
      ...getProductImages(product.id),
    ]
    const showSlideControls = allImages.length > 1

    const handleSubmit = () => {
      openPriorityModal(product.id)
    }

    return (
      <div className="super-grid-card-view">
        {/* Image Section */}
        <div className="super-grid-image-section">
          <img src={currentImage} alt={product.name} className="super-grid-main-image" />
        </div>

        {/* Content Section */}
        <div className="super-grid-content">
          <div>
            <h2 className="super-grid-product-name">{product.name}</h2>
            <div className="super-grid-job-number">
              Job No: <span>{product.jobNo}</span>
            </div>
          </div>

          <div className="super-grid-details">
            <div className="super-grid-detail-row">
              <span className="detail-label">CLIENT: </span>
              <span className="detail-value">{product.client}</span>
            </div>
            <div className="super-grid-detail-row">
              <span className="detail-label">QUANTITY: </span>
              <span className="detail-value">{product.quantity}</span>
            </div>
            <div className="super-grid-detail-row">
              <span className="detail-label">DELIVERY DATE: </span>
              <span className="detail-value">{product.deliveryDate}</span>
            </div>
            <div className="super-grid-detail-row">
              <span className="detail-label">STATUS: </span>
              <span className={`status-badge ${getDeliveryModeClass(product.status)}`}>
                {product.status}
              </span>
            </div>



            <div className="super-grid-actions">
              {/* Show only eye icon for completed status, otherwise show all actions */}
              {product.status === 'Completed' ? (
                <div
                  className="action-icon"
                  onClick={() => openModal(product)}
                  title="View All Details"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                  </svg>
                </div>
              ) : (
                <>
                  {/* Always show eye icon */}
                  {['14892', '14890', '14889', '14893c'].includes(product.jobNo) && (
                    <div
                      className="action-icon"
                      onClick={() => openModal(product)}
                      title="View All Details"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                      </svg>
                    </div>
                  )}

                  {['14889'].includes(product.jobNo) && (
                    <button
                      className={`process-btn ${getDeliveryModeClass('Process')}`}
                      onClick={() => handleToProcessClick(product.id)}
                    >
                      To Process
                    </button>
                  )}

                  {!isProcessed && !['14893c', '14890'].includes(product.jobNo) ? (
                    <button className="edit-btn" onClick={() => navigate('/salesorder')}>
                      Edit
                    </button>
                  ) : (
                    !['14889', '14890', '14892', '14893c'].includes(product.jobNo) && (
                      <button
                        className={`process-btn ${getDeliveryModeClass('Process')}`}
                        onClick={() => handleToProcessClick(product.id)}
                      >
                        To Process
                      </button>
                    )
                  )}

                  {['14892'].includes(product.jobNo) && (
                    <button className="submit-btn" onClick={handleSubmit}>
                      To Production Plan
                    </button>
                  )}

                  {showUploadIcons && uploadedCount < maxImages && (
                    <div
                      className="action-icon"
                      title="Upload Image"
                      onClick={() => openUploadModal(product)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="currentColor"
                        className="bi bi-cloud-arrow-up"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708z"
                        />
                        <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383m.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
                      </svg>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Upload Modal Component
  const UploadModal = ({ product, onClose }) => {
    if (!product) return null

    const [dragActive, setDragActive] = useState(false)
    const [previewUrl, setPreviewUrl] = useState(null)

    const handleDrag = (e) => {
      e.preventDefault()
      e.stopPropagation()
      if (e.type === 'dragenter' || e.type === 'dragover') {
        setDragActive(true)
      } else if (e.type === 'dragleave') {
        setDragActive(false)
      }
    }

    const handleDrop = (e) => {
      e.preventDefault()
      e.stopPropagation()
      setDragActive(false)

      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        const file = e.dataTransfer.files[0]
        handleFileSelection(file)
      }
    }

    const handleFileSelection = (file) => {
      if (!file.type.startsWith('image/')) {
        alert('Please select a valid image file.')
        return
      }
      if (file.size > 5 * 1024 * 1024) {
        alert('File size should be less than 5MB.')
        return
      }

      setSelectedFile(file)

      const reader = new FileReader()
      reader.onload = (e) => {
        setPreviewUrl(e.target.result)
      }
      reader.readAsDataURL(file)
    }

    const handleFileInputChange = (e) => {
      if (e.target.files && e.target.files[0]) {
        handleFileSelection(e.target.files[0])
      }
    }

    const removeFile = () => {
      setSelectedFile(null)
      setPreviewUrl(null)
    }

    const uploadedCount = getUploadedCount(product.id)
    const maxImages = getMaxImages(product)

    return (
      <div className="upload-modal-overlay" onClick={onClose}>
        <div className="upload-modal-content" onClick={(e) => e.stopPropagation()}>
          <h3 className="upload-modal-title">Image Upload</h3>

          <div className="upload-progress">
            <div className="upload-progress-text">
              Upload Progress: {uploadedCount}/{maxImages}
            </div>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <div
                className="upload-drop-zone"
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                onClick={() => document.getElementById('fileInput').click()}
              >
                <input
                  id="fileInput"
                  type="file"
                  accept="image/*"
                  onChange={handleFileInputChange}
                  className="hidden-input"
                />

                <div>
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#6B7280"
                    strokeWidth="1.5"
                    className="upload-icon"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7,10 12,15 17,10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                </div>

                <button type="button" className="upload-browse-btn">
                  BROWSE & UPLOAD
                </button>

                <p className="upload-text-primary">Click to browse files or drag and drop</p>

                <p className="upload-text-secondary">
                  Maximum 1 image allowed • Supported formats: JPG, PNG, GIF
                </p>
              </div>

              {previewUrl && (
                <div className="upload-preview-container">
                  <div className="upload-preview-header">
                    <h4 className="upload-preview-title">Image Preview</h4>
                    <button onClick={removeFile} className="upload-remove-btn">
                      X
                    </button>
                  </div>

                  <div className="upload-preview-content">
                    <img src={previewUrl} alt="Preview" className="upload-preview-image" />
                    <div className="upload-file-info">
                      <h4>{selectedFile?.name}</h4>
                      <p>
                        {selectedFile ? `${(selectedFile.size / 1024 / 1024).toFixed(2)} MB` : ''}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="upload-actions">
            <button onClick={onClose} className="upload-btn-cancel">
              Cancel
            </button>
            <button onClick={confirmUpload} className="upload-btn-submit" disabled={!selectedFile}>
              Confirm Upload
            </button>
          </div>
        </div>
      </div>
    )
  }

  const Modal = ({ product, onClose }) => {
    if (!product) return null

    const currentModalImage = getCurrentModalImage(product)
    const allImages = [
      ...(product.mainImage ? [product.mainImage] : []),
      ...getProductImages(product.id),
    ]
    const showSlideControls = allImages.length > 1

    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="detail-modal" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h2 className="modal-title">{product.name}</h2>
            <button className="close-button" onClick={onClose}>
              ×
            </button>
          </div>

          <div className="modal-body">
            {/* 📌 Wrap Image + Info in same row */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
              {/* Image Section */}
              <div className="modal-image-section">
                <img src={currentModalImage} alt={product.name} className="modal-image" />
              </div>

              {/* Product Info Section */}
              <div className="modal-section" style={{ flex: '1 1 300px' }}>
                <h3 className="modal-section-title">Product Information</h3>
                <div className="modal-detail-item">
                  <span className="modal-label">Job Number:</span>
                  <span className="modal-value">{product.jobNo}</span>
                </div>
                <div className="modal-detail-item">
                  <span className="modal-label">Job Quantity:</span>
                  <span className="modal-value">{product.quantity}</span>
                </div>
                <div className="modal-detail-item">
                  <span className="modal-label">Product Size:</span>
                  <span className="modal-value">{product.size}</span>
                </div>
                <div className="modal-detail-item">
                  <span className="modal-label">Job Completion Date:</span>
                  <span className="modal-value">{product.deliveryDate}</span>
                </div>
                <div className="modal-detail-item">
                  <span className="modal-label">Time:</span>
                  <span className="modal-value">{product.time}</span>
                </div>
                <div className="modal-detail-item">
                  <span className="modal-label">Price per Piece:</span>
                  <span className="modal-value">{product.pricePerPiece}</span>
                </div>
              </div>
            </div>

            <div className="modal-two-column-row">
              <div className="modal-section">
                <h3 className="modal-section-title">Client Information</h3>

                <div className="modal-detail-item">
                  <span className="modal-label">Client Name:</span>
                  <span className="modal-value">{product.client}</span>
                </div>
                <div className="modal-detail-item">
                  <span className="modal-label">Email:</span>
                  <a href={`mailto:${product.email}`} className="modal-link">
                    {product.email}
                  </a>
                </div>
                <div className="modal-detail-item">
                  <span className="modal-label">Contact:</span>
                  <a href={`tel:${product.contactNo}`} className="modal-link">
                    {product.contactNo}
                  </a>
                </div>
              </div>

              <div className="modal-section">
                <h3 className="modal-section-title">Payment & Billing</h3>
                <div className="modal-detail-item">
                  <span className="modal-label">Payment Terms:</span>
                  <span className="modal-value">{product.paymentTerms}</span>
                </div>
                <div className="modal-detail-item">
                  <span className="modal-label">Billing Address:</span>
                  <span className="modal-value">{product.billingAddress}</span>
                </div>
                <div className="modal-detail-item">
                  <span className="modal-label">Remarks:</span>
                  <span className="modal-value">{product.remarks}</span>
                </div>
              </div>
            </div>

            <div className="modal-two-column-row">
              <div className="modal-section">
                <h3 className="modal-section-title">Delivery Information</h3>
                <div className="modal-detail-item">
                  <span className="modal-label">Delivery Address:</span>
                  <span className="modal-value">{product.deliveryAddress}</span>
                </div>
                <div className="modal-detail-item">
                  <span className="modal-label">Courier:</span>
                  <span className="modal-value">{product.deliveryMode}</span>
                </div>
                <div className="modal-detail-item">
                  <span className="modal-label">Delivery Type:</span>
                  <span className="modal-value">{product.deliveryType}</span>
                </div>
                <div className="modal-detail-item">
                  <span className="modal-label">Phone Number:</span>
                  <span className="modal-value">{product.phoneNumber}</span>
                </div>
              </div>

              <div className="modal-section">
                <h3 className="modal-section-title">Packing Details</h3>
                <div className="modal-detail-item">
                  <span className="modal-label">Packing Type:</span>
                  <span className="modal-value">{product.packingType}</span>
                </div>
                <div className="modal-detail-item">
                  <span className="modal-label">Inner Packing Type:</span>
                  <span className="modal-value">{product.innerPackingType}</span>
                </div>
                <div className="modal-detail-item">
                  <span className="modal-label">Premium Packing Options:</span>
                  <span className="modal-value">{product.premiumPackingOptions}</span>
                </div>
                <div className="modal-detail-item">
                  <span className="modal-label">Packing Mode:</span>
                  <span className="modal-value">{product.packingMode}</span>
                </div>
              </div>
            </div>

            <div className="modal-two-column-row">
              <div className="modal-section">
                <h3 className="modal-section-title">Packing Instructions</h3>
                <div className="modal-detail-item">
                  <span className="modal-value">{product.packingInstructions}</span>
                </div>
              </div>

              {/* Document Files Section */}
              {(product.invoiceUrl || product.designFile || product.status === 'Completed') && (
                <div className="modal-documents-section">
                  <h3 className="modal-section-title">Documents</h3>
                  <div className="document-files">
                    {product.status === 'PI Uploaded' && product.invoiceUrl && (
                      <div className="document-item">
                        <div className="document-info">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="document-icon"
                          >
                            <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                          </svg>
                          <span>Invoice.pdf</span>
                        </div>
                        <button
                          className="download-btn"
                          onClick={() => downloadFile(product.invoiceUrl, 'invoice.pdf')}
                        >
                          Download
                        </button>
                      </div>
                    )}
                    {product.status === 'Design Uploaded' && product.designFile && (
                      <div className="document-item">
                        <div className="document-info">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="document-icon"
                          >
                            <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                          </svg>
                          <span>Design_File.pdf</span>
                        </div>
                        <button
                          className="download-btn"
                          onClick={() => downloadFile('#', 'design_file.pdf')}
                        >
                          Download
                        </button>
                      </div>
                    )}
                    {['Awaiting Approval', 'Completed'].includes(product.status) && (
                      <>
                        <div className="document-item">
                          <div className="document-info">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="document-icon"
                            >
                              <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                            </svg>
                            <span>Invoice.pdf</span>
                          </div>
                          <button
                            className="download-btn"
                            onClick={() => downloadFile(product.invoiceUrl, 'invoice.pdf')}
                          >
                            Download
                          </button>
                        </div>
                        <div className="document-item">
                          <div className="document-info">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="document-icon"
                            >
                              <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                            </svg>
                            <span>Delivery_Receipt.pdf</span>
                          </div>
                          <button
                            className="download-btn"
                            onClick={() => downloadFile('#', 'delivery_receipt.pdf')}
                          >
                            Download
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }

    const DepartmentModal = ({ product }) => {
    if (!product) return null

    return (
      <div className="modal-overlay" onClick={closeDepartmentModal}>
        <div className="department-modal" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h2 className="modal-title">Manage Departments - {product.name}</h2>
            <button className="close-button" onClick={closeDepartmentModal}>
              ×
            </button>
          </div>

          <div className="department-modal-body">
            <div className="departments-grid">
              {departments.map((dept) => {
                const isSelected = selectedDepartments[product.id]?.[dept.id]
                const hasFile = departmentFiles[`${product.id}_${dept.id}`]

                return (
                  <div key={dept.id} className="department-card">
                    <div className="department-header" style={{color: 'black'}}>
                      <label className="department-checkbox">
                        <input
                          type="checkbox"
                          checked={isSelected || false}
                          onChange={() => handleDepartmentToggle(product.id, dept.id)}
                        />
                        <span className="department-name">{dept.name}</span>
                      </label>
                    </div>

                    {isSelected && (
                      <div className="department-content">
                        <div className="file-upload-section">
                          <label className="file-upload-label">
                            <input
                              type="file"
                              accept=".pdf,.doc,.docx,.jpg,.png"
                              onChange={(e) =>
                                handleFileUpload(product.id, dept.id, e.target.files[0])
                              }
                              className="file-input"
                            />
                            <div className="file-upload-button">📁 Upload File</div>
                          </label>
                          {hasFile && <div className="uploaded-file">✅ {hasFile.name}</div>}
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            <div className="department-actions">
              <button onClick={closeDepartmentModal} className="btn-cancel">
                Cancel
              </button>
              <button onClick={saveDepartments} className="btn-save">
                Save Departments
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }


  const ProductCard = ({ product }) => {
     const selectedDepts = selectedDepartments[product.id] || {}
    const selectedCount = Object.values(selectedDepts).filter(Boolean).length
    const isExpanded = expandedCards.has(product.id)
    const currentImage = getCurrentImage(product)
    const hasImage = currentImage !== null && currentImage !== undefined
    const isAccepted = acceptedProducts.has(product.id)
    const showUploadIcons = showUploadForProducts.has(product.id)
    const uploadedCount = getUploadedCount(product.id)
    const maxImages = getMaxImages(product)
    const allImages = [
      ...(product.mainImage ? [product.mainImage] : []),
      ...getProductImages(product.id),
    ]
    const showSlideControls = allImages.length > 1
    const isProcessed = processedProducts.has(product.id)

    const handleAccept = () => {
      handleAcceptProduct(product.id)
    }

    const handleSubmit = () => {
      openPriorityModal(product.id)
    }

    return (
      <div className="product-card">
        <div className="image-container">
          <img src={currentImage} alt={product.name} className="product-image" />
        </div>

        <div className="card-content">
          <div>
            <h2 className="product-name">{product.name}</h2>
            <div className="job-number">
              Job No: <span>{product.jobNo}</span>
            </div>
          </div>

          <div className="details-container">
            <div className="detail-row">
              <span className="detail-label">CLIENT: </span>
              <span className="detail-value">{product.client}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">QUANTITY: </span>
              <span className="detail-value">{product.quantity}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">DELIVERY DATE: </span>
              <span className="detail-value">{product.deliveryDate}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">STATUS: </span>
              <span className={`status-badge ${getDeliveryModeClass(product.status)}`}>
                {product.status}
              </span>
            </div>

            {selectedCount > 0 || product.status === 'Completed' && (
              <div className="detail-row">
                <span className="detail-label">DEPARTMENTS: </span>
                <span className="detail-value">{selectedCount || 3} selected</span>
              </div>
            )}

            <div className="action-icons-container">
              {/* Show only eye icon for completed status, otherwise show all actions */}
              {product.status === 'Completed' ? (
                <div
                  className="action-icon"
                  onClick={() => openModal(product)}
                  title="View All Details"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                  </svg>
                </div>
              ) : (
                <>
                  {/* {['14892', '14890', '14889', '14893c'].includes(product.jobNo) && ( */}
                    <div
                      className="action-icon"
                      onClick={() => openModal(product)}
                      title="View All Details"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                      </svg>
                    </div>
                  {/* )} */}
                   {product.status === 'Pending' && (
                <button
                  className="dept-btn "
                  onClick={() => openDepartmentModal(product)}
                  title="Manage Departments"
                >
                  🏭 Departments
                </button>
              )}
                  {/* {['14889'].includes(product.jobNo) && (
                    <button
                      className={`process-btn ${getDeliveryModeClass('Process')}`}
                      onClick={() => handleToProcessClick(product.id)}
                    >
                      To Process
                    </button>
                  )} */}

                  {/* {!isProcessed && !['14893c', '14890'].includes(product.jobNo) ? (
                    <button className="edit-btn" onClick={() => navigate('/salesorder')}>
                      Edit
                    </button>
                  ) : (
                    !['14889', '14890', '14892', '14893c'].includes(product.jobNo) && (
                      <button
                        className={`process-btn ${getDeliveryModeClass('Process')}`}
                        onClick={() => handleToProcessClick(product.id)}
                      >
                        To Process
                      </button>
                    )
                  )} */}

                  {/* {['14892'].includes(product.jobNo) && (
                    <button className="submit-btn" onClick={handleSubmit}>
                      To Production Plan
                    </button>
                  )} */}

                  {showUploadIcons && uploadedCount < maxImages && (
                    <div
                      className="action-icon"
                      title="Upload Image"
                      onClick={() => openUploadModal(product)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="currentColor"
                        className="bi bi-cloud-arrow-up"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708z"
                        />
                        <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383m.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
                      </svg>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Table Row Component
  const TableRow = ({ product }) => {
    const currentImage = getCurrentImage(product)
    const isProcessed = processedProducts.has(product.id)

    const handleSubmit = () => {
      openPriorityModal(product.id)
    }

    return (
      <tr>
        <td>
          <img
            src={currentImage}
            alt={product.name}
            className="table-image"
            onClick={() => openModal(product)}
          />
        </td>
        <td>{product.jobNo}</td>
        <td>{product.name}</td>
        <td>{product.client}</td>
        <td>{product.quantity}</td>
        <td>{product.deliveryDate}</td>
        <td>
          <span className={`status-badge ${getDeliveryModeClass(product.status)}`}>
            {product.status}
          </span>
        </td>
        <td>
          <div className="table-actions">
            <button
              className="table-view-btn"
              onClick={() => openModal(product)}
              title="View Details"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
              </svg>
            </button>

            {['14889'].includes(product.jobNo) && (
              <button
                className="table-process-btn"
                onClick={() => handleToProcessClick(product.id)}
              >
                To Process
              </button>
            )}

            {!isProcessed && !['14893c', '14890'].includes(product.jobNo) ? (
              <button className="table-edit-btn" onClick={() => navigate('/salesorder')}>
                Edit
              </button>
            ) : (
              !['14889', '14890', '14892', '14893c'].includes(product.jobNo) && (
                <button
                  className="table-process-btn"
                  onClick={() => handleToProcessClick(product.id)}
                >
                  To Process
                </button>
              )
            )}

            {['14892'].includes(product.jobNo) && (
              <button className="table-submit-btn" onClick={handleSubmit}>
                To Production Plan
              </button>
            )}
          </div>
        </td>
      </tr>
    )
  }

  // Super Grid Item Component
  const SuperGridItem = ({ product }) => {
    const currentImage = getCurrentImage(product)
    const isSelected = selectedProduct?.id === product.id

    return (
      <div
        className={`super-grid-item ${isSelected ? 'selected' : ''}`}
        onClick={() => setSelectedProduct(product)}
      >
        <img src={currentImage} alt={product.name} />
        <div className="super-grid-overlay">
          <span>{product.name}</span>
        </div>
      </div>
    )
  }

  // Close modal on Escape key
  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && modalProduct) {
        closeModal()
      }
      if (e.key === 'Escape' && uploadModalProduct) {
        closeUploadModal()
      }
      if (e.key === 'Escape' && showPriorityModal) {
        closePriorityModal()
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [modalProduct, uploadModalProduct, showPriorityModal])

  React.useEffect(() => {
    if (viewMode === 'super-grid' && filteredProducts.length > 0 && !selectedProduct) {
      setSelectedProduct(filteredProducts[0])
    }
  }, [viewMode, filteredProducts, selectedProduct])

  return (
    <>
      <style jsx>{`
        /* Base Styles */
        .main-container {
          min-height: 100vh;
          padding: 1rem;
        }

        .departments-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .department-card {
          border: 1px solid #e2e8f0;
          border-radius: 0.5rem;
          overflow: hidden;
          background-color: white;
        }

        .department-header {
          padding: 1rem;
          color: white;
        }

        .department-checkbox {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          margin: 0;
        }

        .department-checkbox input {
          width: 1.25rem;
          height: 1.25rem;
        }



        .dept-btn {
             padding: 0.25rem 0.5rem;
            border-radius: 0.25rem;
            font-size: 0.75rem;
            font-weight: 600;
            display: inline-block;
            background: green;
            color: white;
            border: none;
        }

        .department-name {
          font-weight: 600;
          font-size: 1rem;
        }

        .department-modal-body {
          padding: 1.5rem;
          max-height: calc(90vh - 120px);
          overflow-y: auto;
        }

        .department-content {
          padding: 1rem;
          background-color: #f7fafc;
        }

        .file-upload-section {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .file-upload-label {
          cursor: pointer;
        }

        .file-input {
          display: none;
        }

        .file-upload-button {
          display: inline-block;
          padding: 0.5rem 1rem;
          background-color: #0061ed;
          color: white;
          border-radius: 0.375rem;
          font-size: 0.875rem;
          text-align: center;
          transition: background-color 0.2s ease;
        }

        .file-upload-button:hover {
          background-color: #2970dc;
        }

        .uploaded-file {
          font-size: 0.875rem;
          color: #38a169;
          font-weight: 500;
        }

        .department-actions {
          display: flex;
          gap: 1rem;
          justify-content: flex-end;
          padding-top: 1rem;
          border-top: 1px solid #e2e8f0;
        }

        .btn-cancel {
          padding: 0.75rem 1.5rem;
          background-color: #718096;
          color: white;
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
          font-weight: 500;
        }

        .btn-save {
          padding: 0.75rem 1.5rem;
          background-color: #38a169;
          color: white;
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
          font-weight: 500;
        }

        .btn-cancel:hover {
          background-color: #4a5568;
        }

        .btn-save:hover {
          background-color: #2f855a;
        }

        .inner-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .modal-link {
          font-size: 0.875rem;
          color: #0061ed;
          text-decoration: underline;
          cursor: pointer;
          flex: 1;
        }

        .search-grid {
          display: flex;
          gap: 20px;
          height: max-content;
          justify-content: flex-end;
          align-items: center;
        }
        .priority {
          margin-right: 0.75rem;
          width: 1.25rem;
          height: 1.25rem;
          accent-color: #0061ed;
        }

        /* Header with all controls in one line */
        .header-controls-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .modal-image {
          width: 250px;
          height: 230px;
          object-fit: contain;
          border-radius: 0.5rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .main-title {
          font-size: 2.5rem;
          font-weight: bold;
          color: black;
          margin: 0;
          white-space: nowrap;
        }

        .search-container {
          flex: 1;
          max-width: 400px;
          min-width: 300px;
        }

        /* Controls - Moved above tabs */
        .controls-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .search-input {
          width: 100%;
          padding: 0.875rem 1.25rem;
          font-size: 1rem;
          border: 2px solid #374151;
          border-radius: 0.5rem;
          background-color: white;
          outline: none;
          transition: border-color 0.3s ease;
        }

        .search-input:focus {
          border-color: #f97316;
        }

        .view-controls {
          display: flex;
          gap: 0.5rem;
        }

        .view-btn {
          padding: 0.5rem;
          border: 2px solid #0061ed;
          background: white;
          color: #0061ed;
          cursor: pointer;
          border-radius: 0.375rem;
          transition: all 0.2s ease;
        }

        .view-btn.active {
          background: #0061ed;
          color: white;
        }

        .view-btn:hover {
          background: #0061ed;
          color: white;
        }

        /* Tabs */
        .tabs-container {
          margin-bottom: 2rem;
          border-bottom: 2px solid #e5e7eb;
        }

        .tabs-list {
          display: flex;
          gap: 0;
          overflow-x: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .tabs-list::-webkit-scrollbar {
          display: none;
        }

        .tab-button {
          padding: 1rem 1.5rem;
          background: none;
          border: none;
          border-bottom: 3px solid transparent;
          color: #6b7280;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
          min-width: fit-content;
        }

        .tab-button.active {
          color: #0061ed;
          border-bottom-color: #0061ed;
        }

        .tab-button:hover {
          color: #0061ed;
          background-color: #f8fafc;
        }

        /* Grid View - Center cards when searching */
        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
          gap: 1.5rem;
          justify-content: center;
          place-items: center;
        }

        /* Table View */
        .table-container {
          overflow-x: auto;
          background: white;
          border-radius: 0.5rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .products-table {
          width: 100%;
          border-collapse: collapse;
        }

        .products-table th {
          background: #f8fafc;
          padding: 1rem;
          text-align: left;
          font-weight: 600;
          color: #374151;
          border-bottom: 2px solid #e5e7eb;
        }

        .products-table td {
          padding: 1rem;
          border-bottom: 1px solid #e5e7eb;
          vertical-align: middle;
        }

        .products-table tbody tr:hover {
          background-color: #f8fafc;
        }

        .table-image {
          width: 60px;
          height: 60px;
          object-fit: contain;
          border-radius: 0.375rem;
          cursor: pointer;
          transition: transform 0.2s ease;
        }

        .table-image:hover {
          transform: scale(1.1);
        }

        .table-actions {
          display: flex;
          gap: 0.5rem;
          align-items: center;
          flex-wrap: wrap;
        }

        .table-view-btn {
          background: #0061ed;
          color: white;
          border: none;
          padding: 0.25rem;
          border-radius: 0.25rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .table-edit-btn {
          background: #6b7280;
          color: white;
          border: none;
          padding: 0.25rem 0.5rem;
          border-radius: 0.25rem;
          cursor: pointer;
          font-size: 0.75rem;
        }

        .table-process-btn {
          background: #0061ed;
          color: white;
          border: none;
          padding: 0.25rem 0.5rem;
          border-radius: 0.25rem;
          cursor: pointer;
          font-size: 0.75rem;
        }

        .table-submit-btn {
          background: green;
          color: white;
          border: none;
          padding: 0.25rem 0.5rem;
          border-radius: 0.25rem;
          cursor: pointer;
          font-size: 0.75rem;
          font-weight: 600;
        }

        /* Super Grid View */
        .super-grid-container {
          display: flex;
          gap: 1rem;
          height: 600px;
        }

        .super-grid-images {
          flex: 1;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
          gap: 0.5rem;
          overflow-y: auto;
          padding: 0.5rem;
          background: #f8fafc;
          border-radius: 0.5rem;
        }

        .super-grid-item {
          position: relative;
          aspect-ratio: 1;
          cursor: pointer;
          border-radius: 0.375rem;
          overflow: hidden;
          transition: transform 0.2s ease;
          border: 2px solid transparent;
        }

        .super-grid-item:hover {
          transform: scale(1.05);
        }

        .super-grid-item.selected {
          border-color: #0061ed;
          transform: scale(1.02);
        }

        .super-grid-item img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .super-grid-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
          color: white;
          padding: 0.5rem;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .super-grid-detail {
          width: 450px;
          background: white;
          border-radius: 0.5rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          height: fit-content;
        }

        .super-grid-card-view {
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .super-grid-detail-card {
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        /* Super Grid Card View Styles */
        .super-grid-image-section {
          background-color: #e5e7eb;
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .super-grid-main-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .super-grid-content {
          padding: 1rem;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .super-grid-product-name {
          font-size: 1.25rem;
          font-weight: bold;
          color: black;
          margin-bottom: 0.25rem;
        }

        .super-grid-job-number {
          font-size: 0.875rem;
          font-weight: bold;
          color: rgb(0, 97, 237);
          margin-bottom: 0.75rem;
        }

        .super-grid-job-number span {
          color: black;
        }

        .super-grid-details {
          margin-bottom: 1rem;
        }

        .super-grid-detail-row {
          margin-bottom: 0.5rem;
          font-size: 0.875rem;
          line-height: 1.4;
        }

        .super-grid-actions {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .detail-header {
          background: #0061ed;
          color: white;
          padding: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .detail-header h3 {
          margin: 0;
          font-size: 1.125rem;
        }

        .close-detail-btn {
          background: none;
          border: none;
          color: white;
          font-size: 1.5rem;
          cursor: pointer;
          padding: 0;
          width: 2rem;
          height: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 0.25rem;
        }

        .close-detail-btn:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .detail-content {
          flex: 1;
          padding: 1rem;
          overflow-y: auto;
        }

        .detail-group {
          margin-bottom: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .detail-group label {
          font-weight: 600;
          color: #374151;
          font-size: 0.875rem;
        }

        .detail-group span {
          color: #111827;
          font-size: 0.875rem;
        }

        /* Product Card Styles */
        .product-card {
          background-color: white;
          color: white;
          border-radius: 0.5rem;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          display: flex;
          flex-direction: row;
          transition: none;
          height: fit-content;
          max-height: 260px !important;
          transform: none;
          width: 100%;
          max-width: 450px;
        }

        .image-container {
          width: 180px;
          background-color: #e5e7eb;
          position: relative;
          flex-shrink: 0;
          overflow: hidden;
          align-self: stretch;
          display: flex;
          flex-direction: column;
        }

        .product-image {
          width: 100%;
          height: 100% !important;
          flex: 1;
          object-fit: cover;
        }

        .slide-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background-color: rgba(0, 0, 0, 0.5);
          color: white;
          border: none;
          border-radius: 50%;
          width: 25px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 1.2rem;
          font-weight: bold;
          transition: background-color 0.2s ease;
          z-index: 5;
        }

        .slide-arrow:hover {
          background-color: rgba(0, 0, 0, 0.7);
        }

        .slide-arrow-left {
          left: 5px;
        }

        .slide-arrow-right {
          right: 5px;
        }

        .card-content {
          padding: 0.7rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
        }

        .product-name {
          font-size: 1.375rem;
          font-weight: bold;
          color: black;
          margin-bottom: 0.25rem;
        }

        .job-number {
          font-size: 0.875rem;
          font-weight: bold;
          color: rgb(0, 97, 237);
          margin-bottom: 0.4rem;
        }

        .job-number span {
          color: black;
        }

        .details-container {
          margin-bottom: 1rem;
        }

        .detail-row {
          margin-bottom: 0.625rem;
          font-size: 0.8rem;
          line-height: 1.4;
        }

        .detail-label {
          color: #0061ed;
          font-weight: bold;
        }

        .detail-value {
          color: black;
        }

        .action-icons-container {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          margin-top: 0.5rem;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .action-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 1.9rem;
          height: 1.5rem;
          border-radius: 0.25rem;
          background-color: transparent;
          border: 1px solid #0061ed;
          color: #0061ed;
          cursor: pointer;
          margin: 3px 0;
          transition:
            background-color 0.2s ease,
            color 0.2s ease;
          flex-shrink: 0;
        }

        .action-icon:hover {
          background-color: #0061ed;
          color: white;
        }

        .edit-btn {
          width: auto;
          background: #5b5757;
          padding: 4px 10px;
          font-size: 14px;
          border: none;
          border-radius: 4px;
          color: #fff;
          cursor: pointer;
        }

        .edit-btn:hover {
          background: rgb(64, 62, 62);
        }

        .process-btn {
          width: auto;
          background: #0061ed;
          padding: 4px 10px;
          font-size: 14px;
          border: none;
          border-radius: 4px;
          color: #fff;
          cursor: pointer;
        }

        .process-btn:hover {
          background: rgb(9, 95, 214);
        }

        .submit-btn {
          width: auto;
          background: green;
          padding: 4px 12px;
          font-size: 14px;
          border: none;
          border-radius: 4px;
          color: #fff;
          cursor: pointer;
          font-weight: 600;
        }

        .submit-btn:hover {
          background: rgb(13, 138, 40);
        }

        /* Status Badges */
        .status-printing {
          background-color: #059669;
          color: white;
        }

        .status-process {
          background-color: #2563eb;
          color: white;
        }

        .status-enquiry {
          background-color: #944949;
          color: white;
        }

        .status-production {
          background-color: rgb(112 90 149);
          color: white;
        }

        .status-sampling {
          background-color: #3d983d;
          color: white;
        }

        .status-green {
          background-color: green;
          color: white;
        }

        .status-red {
          background-color: red;
          color: white;
        }

        .status-dispatch {
          background-color: red;
          color: white;
        }

        .status-billing {
          background-color: grey;
          color: white;
        }

        .status-completed {
          background-color: #10b981;
          color: white;
        }

        .status-default {
          background-color: #ea580c;
          color: white;
        }

        .status-badge {
          padding: 0.25rem 0.5rem;
          border-radius: 0.25rem;
          font-size: 0.75rem;
          font-weight: 600;
          display: inline-block;
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 1rem;
        }

        .detail-modal {
          background-color: white;
          border-radius: 0.75rem;
          width: 100%;
          max-width: 900px;
          max-height: 80vh;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          display: flex;
          flex-direction: column;
          margin: 6% auto 0 auto;
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem;
          border-bottom: 1px solid #e5e7eb;
          background-color: #f9fafb;
        }

        .modal-title {
          font-size: 1.5rem;
          font-weight: bold;
          color: #111827;
          margin: 0;
        }

        .close-button {
          background: none;
          border: none;
          color: #6b7280;
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 0.25rem;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: bold;
          width: 2rem;
          height: 2rem;
        }

        .close-button:hover {
          color: #374151;
          background-color: #f3f4f6;
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 1rem;
        }

        .detail-modal {
          background-color: white;
          border-radius: 0.75rem;
          width: 100%;
          max-width: 800px;
          max-height: 90vh;
          overflow: hidden;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
        }

        .department-modal {
          background-color: white;
          border-radius: 0.75rem;
          width: 100%;
          max-width: 900px;
          max-height: 90vh;
          overflow: hidden;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem;
          border-bottom: 1px solid #e2e8f0;
          background-color: #f7fafc;
        }

        .modal-title {
          font-size: 1.5rem;
          font-weight: bold;
          color: #1a202c;
          margin: 0;
        }

        .close-button {
          background: none;
          border: none;
          color: #718096;
          cursor: pointer;
          font-size: 1.5rem;
          font-weight: bold;
          width: 2rem;
          height: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 0.25rem;
        }

        .close-button:hover {
          color: #4a5568;
          background-color: #edf2f7;
        }

        .modal-body {
          padding: 1.5rem;
          overflow-y: auto;
          max-height: calc(90vh - 120px);
        }

        .modal-content-wrapper {
          display: flex;
          gap: 2rem;
        }

        .modal-image-section {
          flex-shrink: 0;
          width: 250px;
        }

        .modal-image {
          width: 100%;
          height: 250px;
          object-fit: contain;
          border-radius: 0.5rem;
        }

        .modal-details-section {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .modal-section {
          background-color: #f7fafc;
          padding: 1rem;
          border-radius: 0.5rem;
          border: 1px solid #e2e8f0;
        }

        .modal-section-title {
          font-size: 1rem;
          font-weight: bold;
          color: ##0061ed;
          margin: 0 0 0.75rem 0;
        }

        .modal-detail-item {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
        }

        .modal-label {
          font-weight: 600;
          color: #4a5568;
          min-width: 120px;
        }

        .modal-value {
          color: #1a202c;
        }

        .priority-badge {
          padding: 0.25rem 0.5rem;
          border-radius: 0.25rem;
          color: white;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .modal-body {
          padding: 1.5rem;
          overflow: auto;
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        /* Modal Content Layout */
        .modal-content-wrapper {
          display: flex;
          gap: 2rem;
          height: 100%;
        }

        .modal-details-section {
          flex: 2;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        /* Modal Image Section - Moved to right side */
        .modal-image-section {
          flex-shrink: 0;
          width: 280px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: #f9fafb;
          border-radius: 0.5rem;
          border: 1px solid #e5e7eb;
          padding: 0.75rem;
        }

        .modal-image-slider {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 350px;
        }

        .modal-main-image {
          max-width: 50%;
          max-height: 50%;
          object-fit: contain;
          border-radius: 0.5rem;
        }

        /* Document Files Section */
        .modal-documents-section {
          background-color: #f9fafb;
          padding: 1rem;
          border-radius: 0.5rem;
          border: 1px solid #e5e7eb;
        }

        .document-files {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .document-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem;
          background: white;
          border-radius: 0.375rem;
          border: 1px solid #e5e7eb;
        }

        .document-info {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .document-icon {
          color: #6b7280;
        }

        .download-btn {
          background: #0061ed;
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 0.375rem;
          cursor: pointer;
          font-size: 0.875rem;
          font-weight: 500;
          transition: background-color 0.2s ease;
        }

        .download-btn:hover {
          background: #0052cc;
        }

        .modal-two-column-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .modal-section {
          background-color: #f9fafb;
          padding: 1rem;
          border-radius: 0.5rem;
          border: 1px solid #e5e7eb;
          // height: 100%;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .modal-section-title {
          font-size: 1rem;
          font-weight: bold;
          color: #0061ed;
          margin: 0 0 0.75rem 0;
        }

        .modal-detail-item {
          display: flex;
          flex-direction: row;
          gap: 0.5rem;
          align-items: flex-start;
        }

        .modal-label {
          font-size: 0.875rem;
          font-weight: 600;
          color: #374151;
          min-width: 120px;
          flex-shrink: 0;
        }

        .modal-value {
          font-size: 0.875rem;
          color: #111827;
          line-height: 1.4;
          flex: 1;
        }

        /* Priority Modal Styles */
        .priority-modal {
          background-color: white;
          border-radius: 0.75rem;
          width: 100%;
          max-width: 400px;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          display: flex;
          flex-direction: column;
        }

        .priority-modal-body {
          padding: 1.5rem;
        }

        .priority-options {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .priority-option {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          cursor: pointer;
          padding: 0.75rem;
          border-radius: 0.5rem;
          border: 2px solid #e5e7eb;
          transition: all 0.2s ease;
        }

        // .priority-option:hover {
        //   border-color: #0061ed;
        //   background-color: #f8fafc;
        // }

        .priority-option.priority-very-high {
          background-color: rgb(220, 66, 66); /* light red */
        }

        .priority-option.priority-high {
          background-color: rgb(230, 190, 33); /* light yellow */
        }

        .priority-option.priority-medium {
          background-color: rgb(52, 216, 132); /* light green */
        }

        .priority-option.priority-low {
          background-color: rgb(94, 156, 233); /* light blue */
        }

        .priority-option.priority-very-low {
          background-color: #e9d5ff; /* light purple */
        }

        .priority-label {
          font-size: 1rem;
          color: black;
          transition: all 0.2s ease;
        }

        .priority-actions {
          display: flex;
          gap: 0.75rem;
          justify-content: flex-end;
        }

        .btn-cancel {
          padding: 0.75rem 1.5rem;
          background-color: #6b7280;
          color: white;
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
          font-size: 0.875rem;
          font-weight: 500;
          transition: background-color 0.2s ease;
        }

        .btn-cancel:hover {
          background-color: #4b5563;
        }

        .btn-submit {
          padding: 0.75rem 1.5rem;
          background-color: #28a745;
          color: white;
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
          font-size: 0.875rem;
          font-weight: 500;
          transition: background-color 0.2s ease;
        }

        .btn-submit:hover {
          background-color: #1e7e34;
        }

        .btn-submit:disabled {
          background-color: #9ca3af;
          cursor: not-allowed;
        }

        /* Upload Modal Styles */
        .upload-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 1rem;
        }

        .upload-modal-content {
          background-color: white;
          border-radius: 0.75rem;
          width: 100%;
          max-width: 600px;
          padding: 1.5rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          margin: auto;
          max-height: 90vh;
          overflow: auto;
        }

        .upload-modal-title {
          margin-bottom: 1.5rem;
          color: #111827;
          font-size: 1.25rem;
          font-weight: bold;
          text-align: center;
        }

        .upload-progress {
          background-color: #f3f4f6;
          padding: 1rem;
          border-radius: 0.5rem;
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .upload-progress-text {
          font-size: 1rem;
          font-weight: 600;
          color: #374151;
        }

        .upload-drop-zone {
          border: 2px dashed #d1d5db;
          border-radius: 0.5rem;
          padding: 2rem;
          text-align: center;
          background-color: #f9fafb;
          cursor: pointer;
          transition:
            border-color 0.2s ease,
            background-color 0.2s ease;
          position: relative;
        }

        .upload-icon {
          margin: 0 auto 1rem auto;
          display: block;
        }

        .upload-browse-btn {
          background-color: #0061ed;
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          border: none;
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          margin-bottom: 1rem;
        }

        .upload-text-primary {
          color: #6b7280;
          font-size: 0.875rem;
          margin: 0.5rem 0;
          line-height: 1.4;
        }

        .upload-text-secondary {
          color: #9ca3af;
          font-size: 0.75rem;
          margin: 0;
        }

        .upload-preview-container {
          margin-top: 1rem;
          border: 1px solid #e5e7eb;
          border-radius: 0.5rem;
          padding: 1rem;
          background-color: white;
        }

        .upload-preview-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.75rem;
        }

        .upload-preview-title {
          font-size: 0.875rem;
          font-weight: 600;
          color: #374151;
          margin: 0;
        }

        .upload-remove-btn {
          background-color: #ef4444;
          color: white;
          border: none;
          border-radius: 0.25rem;
          padding: 0.25rem 0.5rem;
          font-size: 0.75rem;
          cursor: pointer;
        }

        .upload-preview-content {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .upload-preview-image {
          width: 80px;
          height: 80px;
          object-fit: cover;
          border-radius: 0.375rem;
          border: 1px solid #e5e7eb;
        }

        .upload-file-info h4 {
          font-size: 0.875rem;
          font-weight: 500;
          color: #111827;
          margin: 0 0 0.25rem 0;
        }

        .upload-file-info p {
          font-size: 0.75rem;
          color: #6b7280;
          margin: 0;
        }

        .upload-actions {
          display: flex;
          gap: 0.75rem;
          justify-content: flex-end;
        }

        .upload-btn-cancel {
          padding: 0.75rem 1.5rem;
          background-color: #6b7280;
          color: white;
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
          font-size: 0.875rem;
          font-weight: 500;
        }

        .upload-btn-submit {
          padding: 0.75rem 1.5rem;
          background-color: #28a745;
          color: white;
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
          font-size: 0.875rem;
          font-weight: 500;
        }

        .upload-btn-submit:disabled {
          background-color: rgb(100 176 100);
          cursor: not-allowed;
        }

        .hidden-input {
          display: none;
        }

        .no-results {
          grid-column: 1 / -1;
          text-align: center;
          color: #9ca3af;
          font-size: 1.125rem;
          padding: 3rem 1rem;
          border-radius: 0.5rem;
        }

        .no-results h3 {
          margin-bottom: 0.5rem;
        }

        .no-results p {
          margin-bottom: 1rem;
        }

        .clear-search-btn {
          width: auto;
          background-color: #0061ed;
          color: white;
          padding: 0.5rem 1.5rem;
          border-radius: 0.5rem;
          font-weight: 500;
          font-size: 0.875rem;
          border: none;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .clear-search-btn:hover {
          background-color: #0052cc;
        }

        /* Media Queries */
        @media (max-width: 480px) {
          .main-container {
            padding: 0.5rem;
          }

          .main-title {
            font-size: 1.75rem;
          }

          .controls-container {
            flex-direction: column;
            align-items: stretch;
            gap: 1rem;
          }

          .search-container {
            order: 1;
            max-width: none;
          }

          .view-controls {
            order: 2;
            justify-content: center;
          }

          .products-grid {
            grid-template-columns: 1fr;
          }

          .product-card {
            flex-direction: column;
            max-height: none;
          }

          .image-container {
            width: 100%;
            height: 200px;
          }

          .image-slider {
            height: 200px;
          }

          .product-image {
            height: 200px;
            object-fit: contain;
          }

          .card-content {
            padding: 1rem;
          }

          .product-name {
            font-size: 1.125rem;
          }

          .job-number {
            font-size: 0.75rem;
          }

          .detail-row {
            font-size: 0.75rem;
          }

          .action-icon {
            width: 2.5rem;
            height: 2rem;
          }

          .status-badge {
            font-size: 0.625rem;
          }

          .modal-two-column-row {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .modal-label {
            min-width: 80px;
            font-size: 0.75rem;
          }

          .modal-value {
            font-size: 0.75rem;
          }

          .super-grid-container {
            flex-direction: column;
            height: auto;
          }

          .super-grid-detail {
            width: 100%;
          }

          .tabs-list {
            justify-content: flex-start;
          }

          .tab-button {
            padding: 0.75rem 1rem;
            font-size: 0.875rem;
          }

          .table-actions {
            flex-direction: column;
            gap: 0.25rem;
          }
        }

        @media (max-width: 768px) {
          .main-container {
            padding: 0.75rem;
          }

          .main-title {
            font-size: 2rem;
          }

          .controls-container {
            flex-direction: column;
            align-items: stretch;
            gap: 1.5rem;
          }

          .search-container {
            order: 1;
          }

          .view-controls {
            order: 2;
            justify-content: center;
          }

          .products-grid {
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          }

          .product-card {
            flex-direction: column;
            max-height: none;
          }

          .image-container {
            width: 100%;
            height: 200px;
          }

          .image-slider {
            height: 200px;
          }

          .product-image {
            height: 200px;
            object-fit: contain;
          }

          .slide-arrow-left {
            left: 10px;
          }

          .slide-arrow-right {
            right: 10px;
          }

          .table-container {
            font-size: 0.875rem;
          }

          .products-table th,
          .products-table td {
            padding: 0.75rem 0.5rem;
          }

          .super-grid-container {
            flex-direction: column;
            height: auto;
          }

          .super-grid-detail {
            width: 100%;
            margin-top: 1rem;
          }

          .table-actions {
            flex-direction: column;
            gap: 0.25rem;
            align-items: flex-start;
          }
        }

        @media (max-width: 1024px) {
          .products-grid {
            grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          }

          .super-grid-detail {
            width: 350px;
          }
        }
      `}</style>

      <div className="main-container">
        <div className="inner-container">
          {/* Header with title, search, and controls in one line */}
          <div className="header-controls-container row">
            <h1 className="main-title col-md-4">Production Planning List</h1>

            <div className="col-md-6 search-grid">
              <div className="search-container">
                <input
                  type="text"
                  placeholder="🔍 Search by product name, client, job number..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
              </div>

              {/* <div className="view-controls">
                <button
                  className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                  onClick={() => setViewMode('grid')}
                  title="Grid View"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 3h8v8H3V3zm0 10h8v8H3v-8zm10-10h8v8h-8V3zm0 10h8v8h-8v-8z" />
                  </svg>
                </button>

                <button
                  className={`view-btn ${viewMode === 'table' ? 'active' : ''}`}
                  onClick={() => setViewMode('table')}
                  title="Table View"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 3h18v4H3V3zm0 6h18v4H3V9zm0 6h18v6H3v-6z" />
                  </svg>
                </button>

                <button
                  className={`view-btn ${viewMode === 'super-grid' ? 'active' : ''}`}
                  onClick={() => setViewMode('super-grid')}
                  title="Super Grid View"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4 4h4v4H4V4zm6 0h4v4h-4V4zm6 0h4v4h-4V4zM4 10h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4zM4 16h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4z" />
                  </svg>
                </button>
              </div> */}
            </div>
          </div>

          {/* Tabs */}
          {/* <div className="tabs-container">
            <div className="tabs-list">
              {statusTabs.map((status) => (
                <button
                  key={status}
                  className={`tab-button ${activeTab === status ? 'active' : ''}`}
                  onClick={() => setActiveTab(status)}
                >
                  {status} (
                  {status === 'All'
                    ? products.length
                    : products.filter((p) => p.status === status).length}
                  )
                </button>
              ))}
            </div>
          </div> */}

          {/* Content based on view mode */}
          {viewMode === 'grid' && (
            <div className="products-grid">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
              ) : (
                <div className="no-results">
                  <h3>No products found</h3>
                  <p>Try adjusting your search terms: "{searchTerm}"</p>
                  <button onClick={() => setSearchTerm('')} className="clear-search-btn">
                    Clear Search
                  </button>
                </div>
              )}
            </div>
          )}

          {viewMode === 'table' && (
            <div className="table-container">
              <table className="table table-hover table-striped">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Job No</th>
                    <th>Product</th>
                    <th>Client</th>
                    <th>Quantity</th>
                    <th>Delivery Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                      <TableRow key={product.id} product={product} />
                    ))
                  ) : (
                    <tr>
                      <td colSpan="8" style={{ textAlign: 'center', padding: '2rem' }}>
                        <div>
                          <h3>No products found</h3>
                          <p>Try adjusting your search terms: "{searchTerm}"</p>
                          <button onClick={() => setSearchTerm('')} className="clear-search-btn">
                            Clear Search
                          </button>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}

          {viewMode === 'super-grid' && (
            <div className="super-grid-container">
              <div className="super-grid-images">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <SuperGridItem key={product.id} product={product} />
                  ))
                ) : (
                  <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '2rem' }}>
                    <h3>No products found</h3>
                    <p>Try adjusting your search terms: "{searchTerm}"</p>
                    <button onClick={() => setSearchTerm('')} className="clear-search-btn">
                      Clear Search
                    </button>
                  </div>
                )}
              </div>

              <div className="super-grid-detail">
                {selectedProduct ? (
                  <SuperGridDetailCard product={selectedProduct} />
                ) : (
                  <div className="super-grid-detail-card">
                    <div className="detail-header">
                      <h3>Product Details</h3>
                    </div>
                    <div
                      className="detail-content"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fed7d7',
                      }}
                    >
                      <p>Click on an image to view details</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Priority Modal */}
        <PriorityModal />

        {/* Upload Modal */}
        {uploadModalProduct && (
          <UploadModal product={uploadModalProduct} onClose={closeUploadModal} />
        )}

        {/* Detail View Modal */}
        {modalProduct && <Modal product={modalProduct} onClose={closeModal} />}
                  {departmentModal && <DepartmentModal product={departmentModal} />}

      </div>
    </>
  )
}

export default EnhancedProductCards
