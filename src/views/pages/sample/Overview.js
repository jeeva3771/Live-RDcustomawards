import React, { useState } from 'react'
import image from '../../../../public/a3.jpg'

const ProductInfoPage = () => {
  // Sample product data
  const [product] = useState({
    id: 1,
    name: 'MIC TROPHY',
    jobNo: '14888a',
    quantity: 100,
    size: "8' x 4'",
    deliveryDate: '2024-12-15',
    time: '10:00 AM',
    pricePerPiece: '$25.00',
    client: 'ABC Corporation',
    email: 'contact@abc.com',
    contactNo: '+1-234-567-8900',
    paymentTerms: 'Net 30',
    billingAddress: '123 Business St, City, State 12345',
    remarks: 'High priority project',
    deliveryAddress: '456 Delivery Ave, City, State 12345',
    deliveryMode: 'Express Courier',
    deliveryType: 'Door-to-door',
    phoneNumber: '+1-234-567-8901',
    packingType: 'Cardboard Box',
    innerPackingType: 'Bubble Wrap',
    premiumPackingOptions: 'Gift Box',
    packingMode: 'Individual',
    packingInstructions: 'Handle with care, fragile items inside',
    status: 'Pending',
    invoiceUrl: '#',
    designFile: '#',
    mainImage: image,
  })

  // Recipe materials selected
  const [selectedMaterials] = useState([
    'BLACK ACRYLIC 3MM',
    'MOUNTING BRACKETS',
    'SCREWS & FASTENERS',
    'CLEAR ACRYLIC 5MM',
    'ALUMINUM SHEET 2MM',
  ])

  // BOM details
  const [bomDetails] = useState([
    {
      id: 1,
      name: 'BLACK ACRYLIC 3MM',
      size: "8' x 4'",
      ups: '2',
      quantity: '10',
      unitPrice: '$12.50',
      totalPrice: '$125.00',
    },
    {
      id: 2,
      name: 'MOUNTING BRACKETS',
      size: "4' x 4'",
      ups: '8',
      quantity: '50',
      unitPrice: '$2.00',
      totalPrice: '$100.00',
    },
    {
      id: 3,
      name: 'SCREWS & FASTENERS',
      size: "6' x 3'",
      ups: '100',
      quantity: '200',
      unitPrice: '$0.25',
      totalPrice: '$50.00',
    },
    {
      id: 4,
      name: 'CLEAR ACRYLIC 5MM',
      size: "8' x 4'",
      ups: '1',
      quantity: '5',
      unitPrice: '$18.00',
      totalPrice: '$90.00',
    },
    {
      id: 5,
      name: 'ALUMINUM SHEET 2MM',
      size: "10' x 5'",
      ups: '1',
      quantity: '3',
      unitPrice: '$25.00',
      totalPrice: '$75.00',
    },
  ])

  // Department assignments
  const [departmentAssignments] = useState([
    {
      id: 1,
      serialNo: 1,
      department: 'DTP',
      fileName: 'design_specifications.pdf',
      fileUrl: '#',
      uploadDate: '2024-12-01',
      status: 'Completed',
    },
    {
      id: 2,
      serialNo: 2,
      department: 'Laser Cutting',
      fileName: 'cutting_instructions.pdf',
      fileUrl: '#',
      uploadDate: '2024-12-02',
      status: 'In Progress',
    },
    {
      id: 3,
      serialNo: 3,
      department: 'CNC',
      fileName: 'cnc_program.nc',
      fileUrl: '#',
      uploadDate: '2024-12-03',
      status: 'Pending',
    },
    {
      id: 4,
      serialNo: 4,
      department: 'Assembly',
      fileName: 'assembly_guide.pdf',
      fileUrl: '#',
      uploadDate: '2024-12-04',
      status: 'Pending',
    },
    {
      id: 5,
      serialNo: 5,
      department: 'Quality Control',
      fileName: 'quality_checklist.pdf',
      fileUrl: '#',
      uploadDate: '2024-12-05',
      status: 'Pending',
    },
    {
      id: 6,
      serialNo: 6,
      department: 'Packaging',
      fileName: 'packaging_instructions.pdf',
      fileUrl: '#',
      uploadDate: '2024-12-06',
      status: 'Pending',
    },
  ])

  const downloadFile = (url, filename) => {
    // Mock download function
    console.log(`Downloading ${filename} from ${url}`)
    // In a real application, this would trigger a file download
    alert(`Downloading ${filename}`)
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return '#28a745'
      case 'In Progress':
        return '#ffc107'
      case 'Pending':
        return '#6c757d'
      default:
        return '#6c757d'
    }
  }

  const getTotalBOMValue = () => {
    return bomDetails
      .reduce((total, item) => {
        return total + parseFloat(item.totalPrice.replace('$', ''))
      }, 0)
      .toFixed(2)
  }

  return (
    <>
      <style jsx>{`
        .product-info-page {
          min-height: 100vh;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          background: rgb(255, 160, 122);
        }

        .header1 {
          width: fit-content;
          margin: 0 auto;
          padding: 22px 0;
          text-align: center;
        }

        .header-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          background: rgb(255, 160, 122);
          border-radius: 10px;
        }

        .breadcrumb {
          font-size: 0.9rem;
          opacity: 0.8;
          margin-bottom: 0.5rem;
        }

        .breadcrumb a {
          color: white;
          text-decoration: none;
        }

        .breadcrumb a:hover {
          text-decoration: underline;
        }

        .main-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .main-subtitle {
          font-size: 1.1rem;
          opacity: 0.9;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem 20px;
        }

        .info-grid {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .image-section {
          background: white;
          border-radius: 12px;
          padding: 1.5rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          height: fit-content;
        }

        .product-image {
          width: 100%;
          height: 300px;
          object-fit: contain;
          border-radius: 8px;
          border: 1px solid #e9ecef;
        }

        .basic-info {
          background: white;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .section-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #333;
          margin-bottom: 1.5rem;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid #0061ed;
        }

        .info-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .info-item {
          display: flex;
          // justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
          padding: 0.75rem 0;
          border-bottom: 1px solid #f1f3f4;
        }

        .info-label {
          font-weight: 500;
          color: #0061ed;
          margin-right: 1rem;
          font-size: 0.9rem;
          flex-shrink: 0;
          min-width: 120px;
        }

        .info-value {
          color: black;
          font-size: 1rem;
          flex-grow: 1;
        }

        .info-link {
          color: #0061ed;
          text-decoration: underline;
          transition: color 0.3s ease;
        }

        .info-link:hover {
          color: #0052cc;
          text-decoration: underline;
        }

        .details-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .detail-card {
          background: white;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .full-width-card {
          background: white;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          margin-bottom: 2rem;
        }

        .recipe-materials {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 1rem;
        }

        .material-tag {
          background: #e3f2fd;
          color: #1976d2;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .bom-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 1rem;
        }

        .bom-table th,
        .bom-table td {
          padding: 1rem;
          text-align: left;
          border-bottom: 1px solid #e9ecef;
        }

        .bom-table th {
          background: #f8f9fa;
          font-weight: 600;
          color: #495057;
        }

        .bom-table tr:hover {
          background: #f8f9fa;
        }

        .bom-total {
          background: #e3f2fd;
          font-weight: 600;
          color: #1976d2;
        }

        .department-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 1rem;
        }

        .department-table th,
        .department-table td {
          padding: 1rem;
          text-align: left;
          border-bottom: 1px solid #e9ecef;
        }

        .department-table th {
          background: #f8f9fa;
          font-weight: 600;
          color: #495057;
        }

        .department-table tr:hover {
          background: #f8f9fa;
        }

        .status-badge {
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 500;
          color: white;
        }

        .download-btn {
          background: #0061ed;
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          cursor: pointer;
          font-size: 0.9rem;
          transition: background 0.3s ease;
        }

        .download-btn:hover {
          background: #0052cc;
        }

        .document-section {
          background: #f8f9fa;
          border-radius: 8px;
          padding: 1.5rem;
          margin-top: 1rem;
        }

        .document-files {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .document-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          background: white;
          border-radius: 8px;
          border: 1px solid #e9ecef;
        }

        .document-info {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .document-icon {
          color: #0061ed;
        }

        .back-btn {
          background: #6c757d;
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 6px;
          cursor: pointer;
          font-size: 1rem;
          transition: background 0.3s ease;
          margin-bottom: 2rem;
        }

        .back-btn:hover {
          background: #5a6268;
        }

        .summary-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .stat-card {
          background: white;
          border-radius: 8px;
          padding: 1.5rem;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          text-align: center;
        }

        .stat-value {
          font-size: 1.5rem;
          font-weight: 700;
          color: #0061ed;
        }

        .stat-label {
          font-size: 0.9rem;
          color: #6c757d;
          margin-top: 0.25rem;
        }

        /* Mobile Responsive Styles */
        @media (max-width: 768px) {
          .header-content {
            padding: 0 1rem;
          }

          .main-title {
            font-size: 2rem;
          }

          .container {
            padding: 1rem;
          }

          .info-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .details-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .info-row {
            grid-template-columns: 1fr;
          }

          .info-item {
            flex-direction: column;
            align-items: flex-start;
          }

          .info-label {
            margin-bottom: 0.25rem;
            min-width: auto;
          }

          .info-value {
            text-align: left;
          }

          .bom-table,
          .department-table {
            font-size: 0.9rem;
          }

          .bom-table th,
          .bom-table td,
          .department-table th,
          .department-table td {
            padding: 0.75rem 0.5rem;
          }

          .summary-stats {
            grid-template-columns: repeat(2, 1fr);
          }

          .document-item {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }

          .material-tag {
            font-size: 0.8rem;
            padding: 0.4rem 0.8rem;
          }
        }

        @media (max-width: 480px) {
          .main-title {
            font-size: 1.5rem;
          }

          .section-title {
            font-size: 1.2rem;
          }

          .summary-stats {
            grid-template-columns: 1fr;
          }

          .bom-table,
          .department-table {
            font-size: 0.8rem;
          }

          .bom-table th,
          .bom-table td,
          .department-table th,
          .department-table td {
            padding: 0.5rem 0.25rem;
          }

          .detail-card,
          .full-width-card {
            padding: 1rem;
          }
        }

        /* Table responsive scrolling */
        @media (max-width: 768px) {
          .table-container {
            overflow-x: auto;
          }

          .bom-table,
          .department-table {
            min-width: 600px;
          }
        }
      `}</style>

      <div className="product-info-page">
        <div className="header1">
          <div className="header-content">
            {/* <div className="breadcrumb">
              <a href="#">Home</a> / <a href="#">Projects</a> / Product Details
            </div> */}
            <h1 className="main-title">{product.name}</h1>
            <p className="main-subtitle">
              Job Number: {product.jobNo} | Status: {product.status}
            </p>
          </div>
        </div>

        <div className="container">
          <button className="back-btn" onClick={() => window.history.back()}>
            ← Back
          </button>

          {/* Summary Statistics */}
          {/* <div className="summary-stats">
            <div className="stat-card">
              <div className="stat-value">{selectedMaterials.length}</div>
              <div className="stat-label">Materials Selected</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">{bomDetails.length}</div>
              <div className="stat-label">BOM Items</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">{departmentAssignments.length}</div>
              <div className="stat-label">Departments</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">${getTotalBOMValue()}</div>
              <div className="stat-label">Total BOM Value</div>
            </div>
          </div> */}

          {/* Basic Information */}
          <div className="info-grid">
            <div className="image-section">
              <img src={product.mainImage} alt={product.name} className="product-image" />
            </div>

            <div className="basic-info">
              <h2 className="section-title">Product Information</h2>
              <div className="info-row">
                <div className="info-item">
                  <span className="info-label">Job Number:</span>
                  <span className="info-value">{product.jobNo}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Job Quantity:</span>
                  <span className="info-value">{product.quantity}</span>
                </div>
              </div>
              <div className="info-row">
                <div className="info-item">
                  <span className="info-label">Product Size:</span>
                  <span className="info-value">{product.size}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Price per Piece:</span>
                  <span className="info-value">{product.pricePerPiece}</span>
                </div>
              </div>
              <div className="info-row">
                <div className="info-item">
                  <span className="info-label">Completion Date:</span>
                  <span className="info-value">{product.deliveryDate}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Time:</span>
                  <span className="info-value">{product.time}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Recipe Materials */}
          <div className="full-width-card">
            <h2 className="section-title">📦 Recipe Materials Selected</h2>
            <p>
              Total materials selected for this job: <strong>{selectedMaterials.length}</strong>
            </p>
            <div className="recipe-materials">
              {selectedMaterials.map((material, index) => (
                <span key={index} className="material-tag">
                  {material}
                </span>
              ))}
            </div>
          </div>

          {/* BOM Details */}
          <div className="full-width-card">
            <h2 className="section-title">📋 Bill of Materials (BOM)</h2>
            <div className="table-container">
              <table className="bom-table">
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Material Name</th>
                    <th>Size</th>
                    <th>Ups</th>
                    <th>Quantity</th>
                    {/* <th>Unit Price</th> */}
                    {/* <th>Total Price</th> */}
                  </tr>
                </thead>
                <tbody>
                  {bomDetails.map((item, index) => (
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.size}</td>
                      <td>{item.ups}</td>
                      <td>{item.quantity}</td>
                      {/* <td>{item.unitPrice}</td> */}
                      {/* <td>{item.totalPrice}</td> */}
                    </tr>
                  ))}
                  {/* <tr className="bom-total">
                    <td colSpan="6"><strong>Total BOM Value:</strong></td>
                    <td><strong>${getTotalBOMValue()}</strong></td>
                  </tr> */}
                </tbody>
              </table>
            </div>
          </div>

          {/* Department Assignments */}
          <div className="full-width-card">
            <h2 className="section-title">🏭 Department Assignments</h2>
            <div className="table-container">
              <table className="department-table">
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Department</th>
                    <th>File Name</th>
                    {/* <th>Upload Date</th>
                    <th>Status</th> */}
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {departmentAssignments.map((dept) => (
                    <tr key={dept.id}>
                      <td>{dept.serialNo}</td>
                      <td>{dept.department}</td>
                      <td>{dept.fileName}</td>
                      {/* <td>{dept.uploadDate}</td>
                      <td>
                        <span
                          className="status-badge"
                          style={{ backgroundColor: getStatusColor(dept.status) }}
                        >
                          {dept.status}
                        </span>
                      </td> */}
                      <td>
                        <button
                          className="download-btn"
                          onClick={() => downloadFile(dept.fileUrl, dept.fileName)}
                        >
                          Download
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Client and Business Details */}
          <div className="details-grid">
            <div className="detail-card">
              <h2 className="section-title">👤 Client Information</h2>
              <div className="info-item">
                <span className="info-label">Client Name:</span>
                <span className="info-value">{product.client}</span>
              </div>
              {/* <div className="info-item">
                <span className="info-label">Email:</span>
                <a href={`mailto:${product.email}`} className="info-link">
                  {product.email}
                </a>
              </div>
              <div className="info-item">
                <span className="info-label">Contact:</span>
                <a href={`tel:${product.contactNo}`} className="info-link">
                  {product.contactNo}
                </a>
              </div> */}
            </div>

            <div className="detail-card">
              <h2 className="section-title">💳 Payment & Billing</h2>
              <div className="info-item">
                <span className="info-label">Payment Terms:</span>
                <span className="info-value">{product.paymentTerms}</span>
              </div>
              {/* <div className="info-item">
                <span className="info-label">Billing Address:</span>
                <span className="info-value">{product.billingAddress}</span>
              </div> */}
              <div className="info-item">
                <span className="info-label">Remarks:</span>
                <span className="info-value">{product.remarks}</span>
              </div>
            </div>
          </div>

          <div className="details-grid">
            <div className="detail-card">
              <h2 className="section-title">🚚 Delivery Information</h2>
              <div className="info-item">
                <span className="info-label">Delivery Address:</span>
                <span className="info-value">{product.deliveryAddress}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Courier:</span>
                <span className="info-value">{product.deliveryMode}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Delivery Type:</span>
                <span className="info-value">{product.deliveryType}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Phone Number:</span>
                <span className="info-value">{product.phoneNumber}</span>
              </div>
            </div>

            <div className="detail-card">
              <h2 className="section-title">📦 Packing Details</h2>
              <div className="info-item">
                <span className="info-label">Packing Type:</span>
                <span className="info-value">{product.packingType}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Inner Packing Type:</span>
                <span className="info-value">{product.innerPackingType}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Premium Packing Options:</span>
                <span className="info-value">{product.premiumPackingOptions}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Packing Mode:</span>
                <span className="info-value">{product.packingMode}</span>
              </div>
            </div>
          </div>

          {/* Packing Instructions and Documents */}
          <div className="details-grid">
            <div className="detail-card">
              <h2 className="section-title">📝 Packing Instructions</h2>
              <div className="info-item">
                <span className="info-value">{product.packingInstructions}</span>
              </div>
            </div>

            <div className="detail-card">
              <h2 className="section-title">📄 Documents</h2>
              <div className="document-section">
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
                  {/* {product.status === 'Design Uploaded' && product.designFile && ( */}
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
                  {/* )} */}
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
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductInfoPage
