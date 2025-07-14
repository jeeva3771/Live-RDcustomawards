import React, { useState } from 'react'
import mainImage from '../../../../public/a1.avif'
import { useNavigate } from 'react-router-dom'

const ProductInfoPage = () => {
  const navigate = useNavigate()
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

  // Enhanced department assignments with recipe-based structure
  const [departmentAssignments] = useState([
    {
      id: 1,
      serialNo: 1,
      department: 'DTP',
      time: '2 hours',
      machine: 'Machine 3',
      overallFiles: [
        { name: 'design_specifications.pdf', url: '#', uploadDate: '2024-12-01' },
        { name: 'dtp_layout.ai', url: '#', uploadDate: '2024-12-01' }
      ],
      materials: [
        {
          type: 'CONSUMABLE',
          name: 'SUPER GLUE',
          sizeOfCuttingSheet: '-',
          noOfUpsPerSheet: '-',
          qtyRequired: '-',
          qtyInSqft: '-',
          quantity: '2 bottles',
          files: [
            { name: 'glue_specs.pdf', url: '#' },
            { name: 'usage_guide.pdf', url: '#' }
          ]
        },
        {
          type: 'CONSUMABLE',
          name: 'EPOXY ADHESIVE',
          sizeOfCuttingSheet: '-',
          noOfUpsPerSheet: '-',
          qtyRequired: '-',
          qtyInSqft: '-',
          quantity: '1 tube',
          files: [
            { name: 'epoxy_guide.pdf', url: '#' },
            { name: 'safety_sheet.pdf', url: '#' }
          ]
        }
      ],
      status: 'Completed',
    },
    {
      id: 2,
      serialNo: 2,
      department: 'Laser Cutting',
      time: '3 hours',
      machine: 'Laser Machine 1',
      overallFiles: [
        { name: 'cutting_instructions.pdf', url: '#', uploadDate: '2024-12-02' },
        { name: 'laser_settings.txt', url: '#', uploadDate: '2024-12-02' }
      ],
      materials: [
        {
          type: 'MATERIAL',
          name: 'BLACK ACRYLIC 2MM',
          sizeOfCuttingSheet: "48' x 24'",
          noOfUpsPerSheet: '14',
          qtyRequired: '26.29',
          qtyInSqft: '210.29',
          quantity: '5 sheets',
          files: [
            { name: 'acrylic_cut_file.dxf', url: '#' },
            { name: 'cut_layout.pdf', url: '#' }
          ]
        },
        {
          type: 'MATERIAL',
          name: 'BLACK ACRYLIC 3MM',
          sizeOfCuttingSheet: "48' x 24'",
          noOfUpsPerSheet: '14',
          qtyRequired: '26.29',
          qtyInSqft: '210.29',
          quantity: '3 sheets',
          files: [
            { name: 'acrylic_3mm_cut.dxf', url: '#' },
            { name: 'thickness_specs.pdf', url: '#' }
          ]
        }
      ],
      status: 'In Progress',
    },
    {
      id: 3,
      serialNo: 3,
      department: 'CNC',
      time: '4 hours',
      machine: 'CNC Machine 2',
      overallFiles: [
        { name: 'cnc_program.nc', url: '#', uploadDate: '2024-12-03' },
        { name: 'tool_setup.pdf', url: '#', uploadDate: '2024-12-03' }
      ],
      materials: [
        {
          type: 'PACKING',
          name: 'BUBBLE WRAP',
          sizeOfCuttingSheet: '-',
          noOfUpsPerSheet: '-',
          qtyRequired: '-',
          qtyInSqft: '-',
          quantity: '10 meters',
          files: [
            { name: 'bubble_wrap_specs.pdf', url: '#' },
            { name: 'wrapping_guide.pdf', url: '#' }
          ]
        },
        {
          type: 'PACKING',
          name: 'CARDBOARD BOX',
          sizeOfCuttingSheet: '-',
          noOfUpsPerSheet: '-',
          qtyRequired: '-',
          qtyInSqft: '-',
          quantity: '50 boxes',
          files: [
            { name: 'box_dimensions.pdf', url: '#' },
            { name: 'assembly_instructions.pdf', url: '#' }
          ]
        }
      ],
      status: 'Pending',
    },
    {
      id: 4,
      serialNo: 4,
      department: 'UV Printing',
      time: '2 hours',
      machine: 'UV Printer 1',
      overallFiles: [
        { name: 'print_design.pdf', url: '#', uploadDate: '2024-12-04' },
        { name: 'color_profile.icc', url: '#', uploadDate: '2024-12-04' }
      ],
      materials: [
        {
          type: 'CONSUMABLE',
          name: 'UV INK CARTRIDGE',
          sizeOfCuttingSheet: '-',
          noOfUpsPerSheet: '-',
          qtyRequired: '-',
          qtyInSqft: '-',
          quantity: '4 cartridges',
          files: [
            { name: 'ink_specifications.pdf', url: '#' },
            { name: 'color_chart.pdf', url: '#' }
          ]
        },

      ],
      status: 'Pending',
    }
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

  const getTypeColor = (type) => {
    switch (type) {
      case 'CONSUMABLE':
        return '#ff6b35'
      case 'MATERIAL':
        return '#4285f4'
      case 'PACKING':
        return '#9c27b0'
      default:
        return '#6c757d'
    }
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
          padding: 15px 0;
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
          grid-template-columns: 280px 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }

        .image-section {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 12px;
          padding: 16px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          height: fit-content;
        }

        .product-image {
          width: 100%;
          height: 200px;
          object-fit: contain;
          border-radius: 8px;
          border: 1px solid #e9ecef;
          background: #f8f9fa;
        }

        .basic-info {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 12px;
          padding: 16px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
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
          gap: 12px;
        }

        .info-item {
          display: flex;
          align-items: center;
          padding: 10px 0;
          border-bottom: 1px solid #f1f3f4;
          gap: 10px;
        }

        .info-label {
          font-weight: 500;
          color: #0061ed;
          font-size: 0.9rem;
        }

        .info-value {
          color: #333;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .details-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin-bottom: 20px;
        }

        .detail-card {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 12px;
          padding: 20px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .full-width-card {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 12px;
          padding: 20px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          margin-bottom: 20px;
        }

        .recipe-materials {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 12px;
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
          margin-top: 12px;
          border-radius: 8px;
          border: 1px solid #e9ecef;
        }

        .bom-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.9rem;
          background: white;
        }

        .bom-table th,
        .bom-table td {
          padding: 12px;
          text-align: left;
          border-bottom: 1px solid #e9ecef;
        }

        .bom-table th {
          background: #f8f9fa;
          font-weight: 600;
          color: #333;
          font-size: 0.85rem;
        }

        .bom-table tr:hover {
          background: #f8f9fa;
        }

        .department-card {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 12px;
          padding: 20px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          margin-bottom: 20px;
          border-left: 4px solid #3498db;
        }

        .department-header {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 12px;
          padding-bottom: 8px;
          border-bottom: 1px solid #e9ecef;
        }

        .department-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: #333;
          margin: 0;
        }

        .department-info {
          display: flex;
          gap: 15px;
        }

        .department-info-item {
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .department-info-label {
          font-size: 0.9rem;
          color: #666;
          font-weight: 600;
        }

        .department-info-value {
          font-size: 0.9rem;
          color: #333;
          font-weight: 500;
        }

        .status-badge {
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 500;
          color: white;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        }

        .files-section {
          margin-bottom: 16px;
        }

        .files-section h4 {
          font-size: 1rem;
          margin: 0 0 10px 0;
          color: #2c3e50;
          font-weight: 600;
        }

        .files-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .file-item {
          background: #f8f9fa;
          border: 1px solid #e9ecef;
          border-radius: 8px;
          padding: 8px 12px;
          font-size: 0.85rem;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
        }

        .file-item:hover {
          background: #e9ecef;
          transform: translateY(-1px);
        }

        .materials-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.85rem;
          margin-top: 12px;
          background: white;
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid #e9ecef;
        }

        .materials-table th,
        .materials-table td {
          padding: 10px 8px;
          text-align: left;
          border-bottom: 1px solid #e9ecef;
        }

        .materials-table th {
          background: #f8f9fa;
          font-weight: 600;
          color: #333;
          font-size: 0.8rem;
        }

        .materials-table tr:hover {
          background: #f8f9fa;
        }

        .type-tag {
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 500;
          color: white;
          display: inline-block;
        }

        .material-files {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
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
          margin: 2px;
        }

        .download-btn:hover {
          background: #0052cc;
        }

        .material-file-btn {
          background: #28a745;
          color: white;
          border: none;
          padding: 4px 8px;
          border-radius: 4px;
          cursor: pointer;
          font-size: 0.75rem;
          transition: all 0.3s ease;
          margin: 2px;
        }

        .material-file-btn:hover {
          background: #218838;
          transform: translateY(-1px);
        }

        .document-section {
          background: #f8f9fa;
          border-radius: 8px;
          padding: 12px;
          margin-top: 12px;
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
          padding: 10px;
          background: white;
          border-radius: 6px;
          border: 1px solid #e9ecef;
          transition: all 0.3s ease;
        }

        .document-item:hover {
          transform: translateY(-1px);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .document-info {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.9rem;
        }

        .document-icon {
          color: #3498db;
        }

        /* Mobile Responsive Styles */
        @media (max-width: 768px) {
          .container {
            padding: 15px;
          }

          .main-title {
            font-size: 1.8rem;
          }

          .info-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .info-grid-inner {
            grid-template-columns: 1fr;
          }

          .details-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .department-info {
            flex-direction: column;
            gap: 8px;
          }

          .department-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }

          .materials-table {
            font-size: 0.75rem;
          }

          .materials-table th,
          .materials-table td {
            padding: 6px 4px;
          }
        }

        @media (max-width: 480px) {
          .main-title {
            font-size: 1.5rem;
          }

          .section-title {
            font-size: 1.1rem;
          }

          .container {
            padding: 10px;
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
        <button className="back-btn" onClick={() => navigate('/sampleordersadmin')}>
          ← Back
        </button>

        {/* Basic Information */}
        <div className="info-grid">
          <div className="image-section">
            <img src={product.mainImage} alt={product.name} className="product-image" />
          </div>

          <div className="basic-info">
            <h2 className="section-title">📋 Product Information</h2>
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
          <p style={{ margin: '0 0 12px 0', fontSize: '0.95rem', color: '#7f8c8d' }}>
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

        {/* Enhanced Department Assignments */}
        <div className="full-width-card">
          <h2 className="section-title">🏭 Department Assignments & Material Processing</h2>

          {departmentAssignments.map((dept) => (
            <div key={dept.id} className="department-card">
              <div className="department-header">
                <div className="department-title">
                  {dept.serialNo}. {dept.department}
                </div>
                <div className="department-info">
                  <div className="department-info-item">
                    <span className="department-info-label">Time:</span>
                    <span className="department-info-value">{dept.time}</span>
                  </div>
                  <div className="department-info-item">
                    <span className="department-info-label">Machine:</span>
                    <span className="department-info-value">{dept.machine}</span>
                  </div>
                </div>
              </div>

              {/* Overall Department Files */}
              <div className="files-section">
                <h4>📁 Department Files</h4>
                <div className="files-grid">
                  {dept.overallFiles.map((file, index) => (
                    <div key={index} className="file-item">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                      </svg>
                      <span>{file.name}</span>
                      <button
                        className="download-btn"
                        onClick={() => downloadFile(file.url, file.name)}
                      >
                        Download
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Materials Table */}
              {dept.materials && dept.materials.length > 0 && (
                <div>
                  <h4 style={{ margin: '15px 0 10px 0', fontSize: '1rem', color: '#333' }}>🧱 Materials, Consumables & Packing</h4>
                  <div className="table-container">
                    <table className="materials-table">
                      <thead>
                        <tr>
                          <th>S.No</th>
                          <th>Type</th>
                          <th>Name</th>
                          <th>Size of Sheet</th>
                          <th>UPS/Sheet</th>
                          <th>Qty Required</th>
                          <th>Qty SQFT</th>
                          <th>Quantity</th>
                          <th>Files</th>
                        </tr>
                      </thead>
                      <tbody>
                        {dept.materials.map((material, index) => (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>
                              <span
                                className="type-tag"
                                style={{ backgroundColor: getTypeColor(material.type) }}
                              >
                                {material.type}
                              </span>
                            </td>
                            <td>{material.name}</td>
                            <td>{material.sizeOfCuttingSheet}</td>
                            <td>{material.noOfUpsPerSheet}</td>
                            <td>{material.qtyRequired}</td>
                            <td>{material.qtyInSqft}</td>
                            <td>{material.quantity}</td>
                            <td>
                              <div className="material-files">
                                {material.files.map((file, fileIndex) => (
                                  <div key={fileIndex} className="file-display-item">
                                    <div className="file-name-display">
                                      {/* {file.name.replace('.pdf', '').replace('.dxf', '').replace('.txt', '')} */}
                                      {file.name}

                                    </div>
                                    <button
                                      className="download-btn"
                                      onClick={() => downloadFile(file.url, file.name)}
                                      title={`Download ${file.name}`}
                                    >
                                      Download
                                    </button>
                                  </div>
                                ))}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Client and Business Details */}
        <div className="details-grid">
          <div className="detail-card">
            <h2 className="section-title">👤 Client Information</h2>
            <div className="info-item">
              <span className="info-label">Client Name:</span>
              <span className="info-value">{product.client}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Email:</span>
              <span className="info-value">{product.email}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Contact:</span>
              <span className="info-value">{product.contactNo}</span>
            </div>
          </div>

          <div className="detail-card">
            <h2 className="section-title">💳 Payment & Billing</h2>
            <div className="info-item">
              <span className="info-label">Payment Terms:</span>
              <span className="info-value">{product.paymentTerms}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Billing Address:</span>
              <span className="info-value">{product.billingAddress}</span>
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
              <span className="info-label">Delivery Mode:</span>
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
              <span className="info-label">Inner Packing:</span>
              <span className="info-value">{product.innerPackingType}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Premium Options:</span>
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
            <div style={{ fontSize: '0.95rem', color: '#2c3e50', lineHeight: '1.5' }}>
              {product.packingInstructions}
            </div>
          </div>

          <div className="detail-card">
            <h2 className="section-title">📄 Project Documents</h2>
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
                    <span>Project_Specifications.pdf</span>
                  </div>
                  <button
                    className="download-btn"
                    onClick={() => downloadFile('#', 'project_specifications.pdf')}
                  >
                    Download
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductInfoPage
