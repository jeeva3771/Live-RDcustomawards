import React, { useState, useEffect } from 'react'

const RecipeWizard = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [bomMaterials, setBomMaterials] = useState([])
  const [departments, setDepartments] = useState([{ id: 1, department: '', file: null }])
  const [searchTerm, setSearchTerm] = useState('')

  const allMaterials = [
    'BLACK ACRYLIC 2MM',
    'BLACK ACRYLIC 3MM',
    'BLACK ACRYLIC 6MM',
    'BLACK ACRYLIC 8MM',
    'BLACK ACRYLIC 12MM',
    'WHITE ACRYLIC 2MM',
  ]

  const allDepartments = ['DTP', 'Laser Cutting', 'CNC', 'Assembly', 'Quality Control', 'Packaging']
  const sizeOptions = ["8' x 4'", "4' x 4'", "6' x 3'", "10' x 5'", "12' x 6'"]

  const filteredMaterials = allMaterials.filter((material) =>
    material.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleMaterialClick = (material) => {
    if (!selectedMaterials.includes(material)) {
      setSelectedMaterials([...selectedMaterials, material])
    }
  }

  const removeMaterial = (material) => {
    setSelectedMaterials(selectedMaterials.filter((m) => m !== material))
  }

  const generateBOM = () => {
    const newBomMaterials = selectedMaterials.map((material) => ({
      id: Date.now() + Math.random(),
      name: material,
      size: '',
      ups: '',
      quantity: '',
    }))
    setBomMaterials(newBomMaterials)
  }

  const updateBOMMaterial = (id, field, value) => {
    setBomMaterials(
      bomMaterials.map((material) =>
        material.id === id ? { ...material, [field]: value } : material,
      ),
    )
  }

  const addMaterial = () => {
    const newMaterial = {
      id: Date.now(),
      name: 'Select Material',
      size: '',
      ups: '',
      quantity: '',
    }
    setBomMaterials([...bomMaterials, newMaterial])
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

  const changeStep = (direction) => {
    if (direction === 1 && currentStep < 3) {
      if (currentStep === 1) {
        generateBOM()
      }
      setCurrentStep(currentStep + 1)
    } else if (direction === -1 && currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
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

        .material-tag .remove-btn {
          margin-left: 8px;
          cursor: pointer;
          font-weight: bold;
          transition: color 0.2s ease;
        }

        .material-tag .remove-btn:hover {
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

        .department-table {
          width: 100%;
          border-collapse: collapse;
          min-width: 600px;
        }

        .department-table th {
          padding: 12px;
          text-align: left;
          border-bottom: 1px solid #e9ecef;
          font-weight: 600;
          color: #495057;
          background: #f8f9fa;
        }

        .department-table td {
          padding: 12px;
          border-bottom: 1px solid #e9ecef;
        }

        .department-table tr {
          transition: background-color 0.2s ease;
        }

        .department-table tr:hover {
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
          .department-table td {
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
            font-size: 16px; /* Prevents zoom on iOS */
          }

          .search-input {
            font-size: 16px;
          }

          .material-tag {
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

          {/* Steps */}
          <div className="steps-container">
            {[
              { num: 1, title: 'Recipe Selection' },
              { num: 2, title: 'BOM Creation' },
              { num: 3, title: 'Department Assignment' },
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
                    if (step.num === 2 && selectedMaterials.length > 0) {
                      generateBOM()
                    }
                    setCurrentStep(step.num)
                  }
                }}
              >
                <div className="step-number">Step {step.num}</div>
                <div className="step-title">{step.title}</div>
                {index < 2 && <div className="step-separator"></div>}
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="content">
            {/* Step 1: Recipe Selection */}
            {currentStep === 1 && (
              <div>
                <h3 className="section-title">Select Recipe Materials</h3>

                {/* Search Box */}
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

                {/* Materials Dropdown */}
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

                {/* Selected Materials */}
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
                    </div>
                  ))}
                </div>

                {/* <button onClick={addMaterial} className="btn btn-success">
                  Add Material
                </button> */}
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
              {currentStep === 3 ? 'Finish' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default RecipeWizard
