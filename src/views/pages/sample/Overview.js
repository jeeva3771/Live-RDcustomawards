import React, { useState } from 'react'
import mainImage from '../../../../public/a1.avif'

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
    mainImage: mainImage,
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
    console.log(`Downloading ${filename} from ${url}`)
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
    <div className="product-info-page">
      <style jsx>{`
        .product-info-page {
          min-height: 100vh;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          background: rgb(255, 160, 122);
        }

        .header1 {
          text-align: center;
          padding: 15px 0 0;
          background: rgb(255, 160, 122);
        }

        .main-title {
          font-size: 2rem;
          font-weight: 700;
          margin: 0 0 5px 0;
          color: black;
        }

        .main-subtitle {
          font-size: 1rem;
          margin: 0;
          color: #0a0a0a;
          opacity: 0.9;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 15px;
        }

        .back-btn {
          background: #6c757d;
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 6px;
          cursor: pointer;
          font-size: 0.9rem;
          margin-bottom: 15px;
          transition: background 0.3s ease;
        }

        .back-btn:hover {
          background: #5a6268;
        }

        .info-grid {
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: 15px;
          margin-bottom: 15px;
        }

        .image-section {
          background: white;
          border-radius: 8px;
          padding: 15px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          height: fit-content;
        }

        .product-image {
          width: 100%;
          height: 200px;
          object-fit: contain;
          border-radius: 6px;
          border: 1px solid #e9ecef;
        }

        .basic-info {
          background: white;
          border-radius: 8px;
          padding: 15px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .section-title {
          font-size: 1.2rem;
          font-weight: 600;
          color: #333;
          margin: 0 0 12px 0;
          padding-bottom: 8px;
          border-bottom: 2px solid #0061ed;
        }

        .info-grid-inner {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 8px;
        }

        .info-item {
          display: flex;
          align-items: center;
          padding: 8px 0;
          border-bottom: 1px solid #f1f3f4;
          gap: 10px;
        }

        .info-label {
          font-weight: 500;
          color: #0061ed;
          font-size: 0.85rem;
          flex-shrink: 0;
        }

        .info-value {
          color: #333;
          font-size: 0.9rem;
          text-align: right;
        }

        .details-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 15px;
          margin-bottom: 15px;
        }

        .detail-card {
          background: white;
          border-radius: 8px;
          padding: 15px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .full-width-card {
          background: white;
          border-radius: 8px;
          padding: 15px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          margin-bottom: 15px;
        }

        .recipe-materials {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 10px;
        }

        .material-tag {
          background: #e3f2fd;
          color: #1976d2;
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .table-container {
          overflow-x: auto;
          margin-top: 10px;
        }

        .bom-table,
        .department-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.85rem;
        }

        .bom-table th,
        .bom-table td,
        .department-table th,
        .department-table td {
          padding: 8px;
          text-align: left;
          border-bottom: 1px solid #e9ecef;
        }

        .bom-table th,
        .department-table th {
          background: #f8f9fa;
          font-weight: 600;
          color: #495057;
          font-size: 0.8rem;
        }

        .bom-table tr:hover,
        .department-table tr:hover {
          background: #f8f9fa;
        }

        .download-btn {
          background: #0061ed;
          color: white;
          border: none;
          padding: 4px 8px;
          border-radius: 4px;
          cursor: pointer;
          font-size: 0.8rem;
          transition: background 0.3s ease;
        }

        .download-btn:hover {
          background: #0052cc;
        }

        .document-section {
          background: #f8f9fa;
          border-radius: 6px;
          padding: 10px;
          margin-top: 10px;
        }

        .document-files {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .document-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px;
          background: white;
          border-radius: 4px;
          border: 1px solid #e9ecef;
        }

        .document-info {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.85rem;
        }

        .document-icon {
          color: #0061ed;
        }

        /* Mobile Responsive Styles */
        @media (max-width: 768px) {
          .container {
            padding: 10px;
          }

          .main-title {
            font-size: 1.5rem;
          }

          .info-grid {
            grid-template-columns: 1fr;
            gap: 10px;
          }

          .info-grid-inner {
            grid-template-columns: 1fr;
          }

          .details-grid {
            grid-template-columns: 1fr;
            gap: 10px;
          }

          .info-item {
            flex-direction: column;
            align-items: flex-start;
            gap: 4px;
          }

          .info-value {
            text-align: left;
          }

          .section-title {
            font-size: 1rem;
          }

          .detail-card,
          .full-width-card {
            padding: 12px;
          }

          .document-item {
            flex-direction: column;
            gap: 8px;
            text-align: center;
          }
        }

        @media (max-width: 480px) {
          .main-title {
            font-size: 1.3rem;
          }

          .section-title {
            font-size: 0.95rem;
          }

          .bom-table,
          .department-table {
            font-size: 0.75rem;
          }

          .bom-table th,
          .bom-table td,
          .department-table th,
          .department-table td {
            padding: 6px 4px;
          }

          .detail-card,
          .full-width-card {
            padding: 10px;
          }

          .material-tag {
            font-size: 0.75rem;
            padding: 3px 6px;
          }
        }
      `}</style>

      <div className="header1">
        <h1 className="main-title">{product.name}</h1>
        <p className="main-subtitle">
          Job Number: {product.jobNo} | Status: {product.status}
        </p>
      </div>

      <div className="container">
        <button className="back-btn" onClick={() => window.history.back()}>
          ← Back
        </button>

        {/* Basic Information */}
        <div className="info-grid">
          <div className="image-section">
            <img src={product.mainImage} alt={product.name} className="product-image" />
          </div>

          <div className="basic-info">
            <h2 className="section-title">Product Information</h2>
            <div className="info-grid-inner">
              <div className="info-item">
                <span className="info-label">Job Number:</span>
                <span className="info-value">{product.jobNo}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Job Quantity:</span>
                <span className="info-value">{product.quantity}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Product Size:</span>
                <span className="info-value">{product.size}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Price per Piece:</span>
                <span className="info-value">{product.pricePerPiece}</span>
              </div>
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
          <p style={{ margin: '0 0 10px 0', fontSize: '0.9rem' }}>
            Total materials selected: <strong>{selectedMaterials.length}</strong>
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
                  </tr>
                ))}
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
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {departmentAssignments.map((dept) => (
                  <tr key={dept.id}>
                    <td>{dept.serialNo}</td>
                    <td>{dept.department}</td>
                    <td>{dept.fileName}</td>
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
          </div>

          <div className="detail-card">
            <h2 className="section-title">💳 Payment & Billing</h2>
            <div className="info-item">
              <span className="info-label">Payment Terms:</span>
              <span className="info-value">{product.paymentTerms}</span>
            </div>
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
            <div style={{ fontSize: '0.9rem', color: '#333' }}>
              {product.packingInstructions}
            </div>
          </div>

          <div className="detail-card">
            <h2 className="section-title">📄 Documents</h2>
            <div className="document-section">
              <div className="document-files">
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
                {/* <div className="document-item">
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
                </div> */}
                {/* <div className="document-item">
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
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductInfoPage








