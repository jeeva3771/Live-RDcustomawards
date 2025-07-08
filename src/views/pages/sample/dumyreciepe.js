import React, { useState, useEffect } from 'react'

const RecipeWizard = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [selectedConsumables, setSelectedConsumables] = useState([])
  const [bomMaterials, setBomMaterials] = useState([])
  const [bomConsumables, setBomConsumables] = useState([])
  const [departments, setDepartments] = useState([{ id: 1, department: '', file: null }])
  const [processes, setProcesses] = useState([{ id: 1, processName: '', description: '', estimatedTime: '', department: '' }])
  const [searchTerm, setSearchTerm] = useState('')
  const [consumableSearchTerm, setConsumableSearchTerm] = useState('')

  // Job information
  const jobNo = 'JOB-001'

  const allMaterials = [
    'BLACK ACRYLIC 2MM',
    'BLACK ACRYLIC 3MM',
    'BLACK ACRYLIC 6MM',
    'BLACK ACRYLIC 8MM',
    'BLACK ACRYLIC 12MM',
    'WHITE ACRYLIC 2MM',
  ]

  const allConsumables = [
    'SUPER GLUE',
    'EPOXY ADHESIVE',
    'DOUBLE SIDED TAPE',
    'MASKING TAPE',
    'CLEANING ALCOHOL',
    'POLISHING COMPOUND',
    'PROTECTIVE FILM',
    'SANDPAPER',
    'CUTTING OIL',
    'PRIMER SPRAY'
  ]

  const allDepartments = ['DTP', 'Laser Cutting', 'CNC', 'Assembly', 'Quality Control', 'Packaging']
  const sizeOptions = ["8' x 4'", "4' x 4'", "6' x 3'", "10' x 5'", "12' x 6'"]
  const processOptions = ['Cutting', 'Drilling', 'Polishing', 'Assembly', 'Finishing', 'Packaging', 'Quality Check']

  const filteredMaterials = allMaterials.filter((material) =>
    material.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const filteredConsumables = allConsumables.filter((consumable) =>
    consumable.toLowerCase().includes(consumableSearchTerm.toLowerCase()),
  )

  const handleMaterialClick = (material) => {
    if (!selectedMaterials.includes(material)) {
      setSelectedMaterials([...selectedMaterials, material])
    }
  }

  const handleConsumableClick = (consumable) => {
    if (!selectedConsumables.includes(consumable)) {
      setSelectedConsumables([...selectedConsumables, consumable])
    }
  }

  const removeMaterial = (material) => {
    setSelectedMaterials(selectedMaterials.filter((m) => m !== material))
  }

  const removeConsumable = (consumable) => {
    setSelectedConsumables(selectedConsumables.filter((c) => c !== consumable))
  }

  const generateBOM = () => {
    const newBomMaterials = selectedMaterials.map((material) => ({
      id: Date.now() + Math.random(),
      name: material,
      size: '',
      ups: '',
      quantity: '',
      process: ''
    }))

    const newBomConsumables = selectedConsumables.map((consumable) => ({
      id: Date.now() + Math.random(),
      name: consumable,
      quantity: '',
      process: ''
    }))

    setBomMaterials(newBomMaterials)
    setBomConsumables(newBomConsumables)
  }

  const updateBOMMaterial = (id, field, value) => {
    setBomMaterials(
      bomMaterials.map((material) =>
        material.id === id ? { ...material, [field]: value } : material,
      ),
    )
  }

  const updateBOMConsumable = (id, field, value) => {
    setBomConsumables(
      bomConsumables.map((consumable) =>
        consumable.id === id ? { ...consumable, [field]: value } : consumable,
      ),
    )
  }

  const getUsedDepartments = () => {
    return departments.map((dept) => dept.department).filter((dept) => dept !== '')
  }

  const getAvailableDepartments = (currentDept) => {
    const used = getUsedDepartments()
    return allDepartments.filter((dept) => !used.includes(dept) || dept === currentDept)
  }

  const updateDepartment = (id, field, value) => {
    setDepartments(departments.map((dept) => (dept.id === id ? { ...dept, [field]: value } : dept)))
  }

  const addDepartmentRow = () => {
    const newId = Math.max(...departments.map((d) => d.id)) + 1
    setDepartments([...departments, { id: newId, department: '', file: null }])
  }

  const deleteRow = (id) => {
    setDepartments(departments.filter((dept) => dept.id !== id))
  }

  const updateProcess = (id, field, value) => {
    setProcesses(processes.map((process) => (process.id === id ? { ...process, [field]: value } : process)))
  }

  const addProcessRow = () => {
    const newId = Math.max(...processes.map((p) => p.id)) + 1
    setProcesses([...processes, { id: newId, processName: '', description: '', estimatedTime: '', department: '' }])
  }

  const deleteProcessRow = (id) => {
    setProcesses(processes.filter((process) => process.id !== id))
  }

  const changeStep = (direction) => {
    if (direction === 1 && currentStep < 4) {
      if (currentStep === 1) {
        generateBOM()
      }
      setCurrentStep(currentStep + 1)
    } else if (direction === -1 && currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const downloadDesignFile = () => {
    // Mock download function
    alert('Downloading design file...')
  }

  return (
    <>
      <style jsx>{`
        .recipe-wizard {
          max-width: 1200px;
          margin: 0 auto;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .wizard-container {
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }

        .wizard-header {
          background: linear-gradient(135deg, #0061ed 0%, #0052cc 100%);
          color: white;
          padding: 20px 32px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .job-info {
          font-size: 18px;
          font-weight: 600;
        }

        .download-btn-header {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.3);
          padding: 8px 16px;
          border-radius: 6px;
          cursor: pointer;
          font-size: 14px;
          transition: all 0.3s ease;
        }

        .download-btn-header:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        .steps-container {
          display: flex;
          background: #f8f9fa;
          border-bottom: 1px solid #e9ecef;
        }

        .step-item {
          flex: 1;
          padding: 16px;
          text-align: center;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
        }

        .step-item.active {
          background: #e3dfdf;
          color: #0061ed;
          font-weight: 600;
        }

        .step-item.completed {
          background: #28a745;
          color: white;
        }

        .step-item.inactive {
          background: #f8f9fa;
          color: #6c757d;
        }

        .step-separator {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 1px;
          height: 24px;
          background: #dee2e6;
        }

        .step-number {
          font-size: 16px;
        }

        .step-title {
          font-size: 14px;
        }

        .content {
          padding: 32px;
        }

        .section-title {
          font-size: 18px;
          font-weight: 600;
          color: #495057;
          margin-bottom: 16px;
        }

        .two-column-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
        }

        .column-section {
          background: #f8f9fa;
          border-radius: 8px;
          padding: 20px;
        }

        .search-container {
          position: relative;
          margin-bottom: 16px;
        }

        .search-icon {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 16px;
        }

        .search-input {
          width: 100%;
          padding: 12px 16px 12px 44px;
          border: 2px solid #e9ecef;
          border-radius: 8px;
          font-size: 16px;
          outline: none;
          transition: border-color 0.3s ease;
        }

        .search-input:focus {
          border-color: #0061ed;
        }

        .materials-dropdown {
          border: 2px solid #e9ecef;
          border-radius: 8px;
          background: white;
          max-height: 200px;
          overflow-y: auto;
        }

        .material-item {
          padding: 12px 16px;
          cursor: pointer;
          transition: background-color 0.2s ease;
          border-bottom: 1px solid #f8f9fa;
        }

        .material-item:hover {
          background: #f8f9fa;
        }

        .material-item.selected {
          background: #0061ed;
          color: white;
        }

        .material-item.selected:hover {
          background: #0061ed;
        }

        .selected-materials {
          margin-top: 16px;
        }

        .material-tag {
          display: inline-block;
          background: #e3f2fd;
          color: #1976d2;
          padding: 8px 12px;
          margin: 4px;
          border-radius: 20px;
          font-size: 14px;
        }

        .consumable-tag {
          display: inline-block;
          background: #fff3e0;
          color: #f57c00;
          padding: 8px 12px;
          margin: 4px;
          border-radius: 20px;
          font-size: 14px;
        }

        .material-tag .remove-btn,
        .consumable-tag .remove-btn {
          margin-left: 8px;
          cursor: pointer;
          font-weight: bold;
          transition: color 0.2s ease;
        }

        .material-tag .remove-btn:hover,
        .consumable-tag .remove-btn:hover {
          color: #d32f2f;
        }

        .bom-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
          margin-bottom: 20px;
        }

        .bom-card {
          background: #f8f9fa;
          border: 2px solid #e9ecef;
          border-radius: 8px;
          padding: 20px;
        }

        .bom-card.consumable {
          background: #fff8f0;
          border-color: #ffcc80;
        }

        .bom-card-title {
          font-size: 16px;
          font-weight: 500;
          color: #495057;
          margin-bottom: 16px;
        }

        .form-group {
          margin-bottom: 16px;
        }

        .form-label {
          display: block;
          margin-bottom: 4px;
          font-weight: 500;
          color: #495057;
          font-size: 14px;
        }

        .form-input {
          width: 100%;
          padding: 8px 12px;
          border: 1px solid #ced4da;
          border-radius: 4px;
          font-size: 14px;
          outline: none;
          transition: border-color 0.3s ease;
        }

        .form-input:focus {
          border-color: #0061ed;
        }

        .form-input[readonly] {
          background: #f8f9fa;
        }

        .table-container {
          overflow-x: auto;
          border: 1px solid #e9ecef;
          border-radius: 8px;
          background: white;
        }

        .department-table,
        .process-table {
          width: 100%;
          border-collapse: collapse;
          min-width: 600px;
        }

        .department-table th,
        .process-table th {
          padding: 12px;
          text-align: left;
          border-bottom: 1px solid #e9ecef;
          font-weight: 600;
          color: #495057;
          background: #f8f9fa;
        }

        .department-table td,
        .process-table td {
          padding: 12px;
          border-bottom: 1px solid #e9ecef;
        }

        .department-table tr,
        .process-table tr {
          transition: background-color 0.2s ease;
        }

        .department-table tr:hover,
        .process-table tr:hover {
          background: #f8f9fa;
        }

        .file-input {
          width: 100%;
          padding: 8px;
          border: 1px solid #ced4da;
          border-radius: 4px;
          font-size: 12px;
        }

        .btn {
          border: none;
          padding: 10px 20px;
          border-radius: 6px;
          cursor: pointer;
          font-size: 14px;
          transition: all 0.3s ease;
          outline: none;
        }

        .btn-primary {
          background: #0061ed;
          color: white;
        }

        .btn-primary:hover {
          background: #0052cc;
        }

        .btn-success {
          background: #28a745;
          color: white;
        }

        .btn-success:hover {
          background: #218838;
        }

        .btn-danger {
          background: #dc3545;
          color: white;
          padding: 6px 12px;
          font-size: 12px;
        }

        .btn-danger:hover {
          background: #c82333;
        }

        .btn-secondary {
          background: #6c757d;
          color: white;
          padding: 12px 24px;
          font-size: 16px;
        }

        .btn-secondary:hover {
          background: #5a6268;
        }

        .btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .btn:disabled:hover {
          background: #6c757d;
        }

        .actions-container {
          display: flex;
          justify-content: space-between;
          padding: 24px;
          border-top: 1px solid #e9ecef;
        }

        .btn-large {
          padding: 12px 24px;
          font-size: 16px;
        }

        /* Mobile Responsive Styles */
        @media (max-width: 768px) {
          .recipe-wizard {
            padding: 10px;
          }

          .wizard-header {
            flex-direction: column;
            gap: 12px;
            text-align: center;
          }

          .two-column-layout {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .steps-container {
            flex-direction: column;
          }

          .step-item {
            padding: 12px;
            border-bottom: 1px solid #e9ecef;
          }

          .step-separator {
            display: none;
          }

          .content {
            padding: 16px;
          }

          .section-title {
            font-size: 16px;
          }

          .bom-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .bom-card {
            padding: 16px;
          }

          .table-container {
            font-size: 14px;
          }

          .department-table th,
          .department-table td,
          .process-table th,
          .process-table td {
            padding: 8px;
          }

          .actions-container {
            flex-direction: column;
            gap: 12px;
            padding: 16px;
          }

          .btn-large {
            width: 100%;
          }
        }

        @media (max-width: 480px) {
          .recipe-wizard {
            padding: 5px;
          }

          .content {
            padding: 12px;
          }

          .bom-card {
            padding: 12px;
          }

          .form-input {
            font-size: 16px;
          }

          .search-input {
            font-size: 16px;
          }

          .material-tag,
          .consumable-tag {
            font-size: 12px;
            padding: 6px 10px;
          }
        }

        /* Tablet Styles */
        @media (min-width: 769px) and (max-width: 1024px) {
          .bom-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* Large Screen Styles */
        @media (min-width: 1200px) {
          .bom-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>

      <div className="recipe-wizard">
        <div className="wizard-container" style={{background: '#FFA07A'}}>
          {/* Header */}
          <div className="wizard-header">
            <div className="job-info">Job No: {jobNo}</div>
            {currentStep === 1 && (
              <button className="download-btn-header" onClick={downloadDesignFile}>
                📄 Download Design File
              </button>
            )}
          </div>

          {/* Steps */}
          <div className="steps-container">
            {[
              { num: 1, title: 'Recipe Selection' },
              { num: 2, title: 'BOM Creation' },
              { num: 3, title: 'Department Assignment' },
              { num: 4, title: 'Process' },
            ].map((step, index) => (
              <div
                key={step.num}
                className={`step-item ${
                  step.num === currentStep
                    ? 'active'
                    : step.num < currentStep
                      ? 'completed'
                      : 'inactive'
                }`}
                onClick={() => {
                  if (step.num <= currentStep + 1) {
                    if (step.num === 2 && (selectedMaterials.length > 0 || selectedConsumables.length > 0)) {
                      generateBOM()
                    }
                    setCurrentStep(step.num)
                  }
                }}
              >
                <div className="step-number">Step {step.num}</div>
                <div className="step-title">{step.title}</div>
                {index < 3 && <div className="step-separator"></div>}
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="content">
            {/* Step 1: Recipe Selection */}
            {currentStep === 1 && (
              <div className="two-column-layout">
                {/* Materials Section */}
                <div className="column-section">
                  <h3 className="section-title">📦 Select Recipe Materials</h3>

                  <div className="search-container">
                    <div className="search-icon">🔍</div>
                    <input
                      type="text"
                      placeholder="Search materials..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="search-input"
                    />
                  </div>

                  <div className="materials-dropdown">
                    {filteredMaterials.map((material) => (
                      <div
                        key={material}
                        onClick={() => handleMaterialClick(material)}
                        className={`material-item ${selectedMaterials.includes(material) ? 'selected' : ''}`}
                      >
                        {material}
                      </div>
                    ))}
                  </div>

                  <div className="selected-materials">
                    {selectedMaterials.map((material) => (
                      <span key={material} className="material-tag">
                        {material}
                        <span onClick={() => removeMaterial(material)} className="remove-btn">
                          ×
                        </span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Consumables Section */}
                <div className="column-section">
                  <h3 className="section-title">🧪 Consumables</h3>

                  <div className="search-container">
                    <div className="search-icon">🔍</div>
                    <input
                      type="text"
                      placeholder="Search consumables..."
                      value={consumableSearchTerm}
                      onChange={(e) => setConsumableSearchTerm(e.target.value)}
                      className="search-input"
                    />
                  </div>

                  <div className="materials-dropdown">
                    {filteredConsumables.map((consumable) => (
                      <div
                        key={consumable}
                        onClick={() => handleConsumableClick(consumable)}
                        className={`material-item ${selectedConsumables.includes(consumable) ? 'selected' : ''}`}
                      >
                        {consumable}
                      </div>
                    ))}
                  </div>

                  <div className="selected-materials">
                    {selectedConsumables.map((consumable) => (
                      <span key={consumable} className="consumable-tag">
                        {consumable}
                        <span onClick={() => removeConsumable(consumable)} className="remove-btn">
                          ×
                        </span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: BOM Creation */}
            {currentStep === 2 && (
              <div>
                <h3 className="section-title">Create Bill of Materials</h3>

                <div className="bom-grid">
                  {bomMaterials.map((material, index) => (
                    <div key={material.id} className="bom-card">
                      <h4 className="bom-card-title">Material {index + 1}</h4>

                      <div className="form-group">
                        <label className="form-label">Material Type</label>
                        <input type="text" value={material.name} readOnly className="form-input" />
                      </div>

                      <div className="form-group">
                        <label className="form-label">Size</label>
                        <select
                          value={material.size}
                          onChange={(e) => updateBOMMaterial(material.id, 'size', e.target.value)}
                          className="form-input"
                        >
                          <option value="">Select Size</option>
                          {sizeOptions.map((size) => (
                            <option key={size} value={size}>
                              {size}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="form-group">
                        <label className="form-label">Ups</label>
                        <input
                          type="text"
                          placeholder="Enter Ups"
                          value={material.ups}
                          onChange={(e) => updateBOMMaterial(material.id, 'ups', e.target.value)}
                          className="form-input"
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label">Quantity</label>
                        <input
                          type="number"
                          placeholder="Enter Quantity"
                          value={material.quantity}
                          onChange={(e) =>
                            updateBOMMaterial(material.id, 'quantity', e.target.value)
                          }
                          className="form-input"
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label">Process</label>
                        <select
                          value={material.process}
                          onChange={(e) => updateBOMMaterial(material.id, 'process', e.target.value)}
                          className="form-input"
                        >
                          <option value="">Select Process</option>
                          {processOptions.map((process) => (
                            <option key={process} value={process}>
                              {process}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  ))}

                  {bomConsumables.map((consumable, index) => (
                    <div key={consumable.id} className="bom-card consumable">
                      <h4 className="bom-card-title">Consumable {index + 1}</h4>

                      <div className="form-group">
                        <label className="form-label">Consumable Type</label>
                        <input type="text" value={consumable.name} readOnly className="form-input" />
                      </div>

                      <div className="form-group">
                        <label className="form-label">Quantity</label>
                        <input
                          type="number"
                          placeholder="Enter Quantity"
                          value={consumable.quantity}
                          onChange={(e) =>
                            updateBOMConsumable(consumable.id, 'quantity', e.target.value)
                          }
                          className="form-input"
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label">Process</label>
                        <select
                          value={consumable.process}
                          onChange={(e) => updateBOMConsumable(consumable.id, 'process', e.target.value)}
                          className="form-input"
                        >
                          <option value="">Select Process</option>
                          {processOptions.map((process) => (
                            <option key={process} value={process}>
                              {process}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Department Assignment */}
            {currentStep === 3 && (
              <div>
                <h3 className="section-title">Department Assignment</h3>

                <div className="table-container" style={{ marginBottom: '10px' }}>
                  <table className="department-table">
                    <thead>
                      <tr>
                        <th>S.No</th>
                        <th>Department</th>
                        <th>File Upload</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {departments.map((dept, index) => (
                        <tr key={dept.id}>
                          <td>{index + 1}</td>
                          <td>
                            <select
                              value={dept.department}
                              onChange={(e) =>
                                updateDepartment(dept.id, 'department', e.target.value)
                              }
                              className="form-input"
                            >
                              <option value="">Select Department</option>
                              {getAvailableDepartments(dept.department).map((department) => (
                                <option key={department} value={department}>
                                  {department}
                                </option>
                              ))}
                            </select>
                          </td>
                          <td>
                            <input
                              type="file"
                              accept=".pdf,.doc,.docx,.jpg,.png"
                              onChange={(e) => updateDepartment(dept.id, 'file', e.target.files[0])}
                              className="file-input"
                            />
                          </td>
                          <td>
                            <button onClick={() => deleteRow(dept.id)} className="btn btn-danger">
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <button onClick={addDepartmentRow} className="btn btn-primary">
                  Add Department
                </button>
              </div>
            )}

            {/* Step 4: Process */}
            {currentStep === 4 && (
              <div>
                <h3 className="section-title">⚙️ Process Management</h3>

                <div className="table-container" style={{ marginBottom: '10px' }}>
                  <table className="process-table">
                    <thead>
                      <tr>
                        <th>S.No</th>
                        <th>Process Name</th>
                        <th>Description</th>
                        <th>Estimated Time</th>
                        <th>Department</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {processes.map((process, index) => (
                        <tr key={process.id}>
                          <td>{index + 1}</td>
                          <td>
                            <select
                              value={process.processName}
                              onChange={(e) =>
                                updateProcess(process.id, 'processName', e.target.value)
                              }
                              className="form-input"
                            >
                              <option value="">Select Process</option>
                              {processOptions.map((processOption) => (
                                <option key={processOption} value={processOption}>
                                  {processOption}
                                </option>
                              ))}
                            </select>
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter description"
                              value={process.description}
                              onChange={(e) =>
                                updateProcess(process.id, 'description', e.target.value)
                              }
                              className="form-input"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder="e.g., 2 hours"
                              value={process.estimatedTime}
                              onChange={(e) =>
                                updateProcess(process.id, 'estimatedTime', e.target.value)
                              }
                              className="form-input"
                            />
                          </td>
                          <td>
                            <select
                              value={process.department}
                              onChange={(e) =>
                                updateProcess(process.id, 'department', e.target.value)
                              }
                              className="form-input"
                            >
                              <option value="">Select Department</option>
                              {allDepartments.map((department) => (
                                <option key={department} value={department}>
                                  {department}
                                </option>
                              ))}
                            </select>
                          </td>
                          <td>
                            <button onClick={() => deleteProcessRow(process.id)} className="btn btn-danger">
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <button onClick={addProcessRow} className="btn btn-primary">
                  Add Process
                </button>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="actions-container">
            <button
              onClick={() => changeStep(-1)}
              disabled={currentStep === 1}
              className="btn btn-secondary btn-large"
            >
              Previous
            </button>
            <button onClick={() => changeStep(1)} className="btn btn-primary btn-large">
              {currentStep === 4 ? 'Finish' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default RecipeWizard
