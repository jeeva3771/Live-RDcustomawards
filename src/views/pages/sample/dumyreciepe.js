// import React, { useState, useEffect } from 'react'

// const RecipeWizard = () => {
//   const [currentStep, setCurrentStep] = useState(1)
//   const [selectedMaterials, setSelectedMaterials] = useState([])
//   const [selectedConsumables, setSelectedConsumables] = useState([])
//   const [selectedProcesses, setSelectedProcesses] = useState([])
//   const [bomMaterials, setBomMaterials] = useState([])
//   const [bomConsumables, setBomConsumables] = useState([])
//   const [departments, setDepartments] = useState([])
//   const [searchTerm, setSearchTerm] = useState('')
//   const [consumableSearchTerm, setConsumableSearchTerm] = useState('')
//   const [processSearchTerm, setProcessSearchTerm] = useState('')

//   // Job information
//   const jobNo = '14888a'

//   const allMaterials = [
//     'BLACK ACRYLIC 2MM',
//     'BLACK ACRYLIC 3MM',
//     'BLACK ACRYLIC 6MM',
//     'BLACK ACRYLIC 8MM',
//     'BLACK ACRYLIC 12MM',
//     'WHITE ACRYLIC 2MM',
//   ]

//   const allConsumables = [
//     'SUPER GLUE',
//     'EPOXY ADHESIVE',
//     'DOUBLE SIDED TAPE',
//     'MASKING TAPE',
//     'CLEANING ALCOHOL',
//     'POLISHING COMPOUND',
//     'PROTECTIVE FILM',
//     'SANDPAPER',
//     'CUTTING OIL',
//     'PRIMER SPRAY',
//   ]

//   const allProcesses = [
//     'DTP',
//     'UV Printing',
//     'Screen Printing',
//     'Laser Cutting',
//     'CNC Machining',
//     'Assembly',
//     'Quality Control',
//     'Packaging',
//   ]

//   const allDepartments = [
//     'DTP',
//     'UV Printing',
//     'Screen Printing',
//     'Laser Cutting',
//     'CNC Machining',
//     'Assembly',
//     'Quality Control',
//     'Packaging',
//   ]
//   const sizeOptions = ["8' x 4'", "4' x 4'", "6' x 3'", "10' x 5'", "12' x 6'"]
//   const processOptions = [
//     'DTP',
//     'UV',
//     'SCREEN',
//     'LASER',
//     'Cutting',
//     'Drilling',
//     'Polishing',
//     'Assembly',
//     'Finishing',
//     'Packaging',
//     'Quality Check',
//   ]

//   const filteredMaterials = allMaterials.filter((material) =>
//     material.toLowerCase().includes(searchTerm.toLowerCase()),
//   )

//   const filteredConsumables = allConsumables.filter((consumable) =>
//     consumable.toLowerCase().includes(consumableSearchTerm.toLowerCase()),
//   )

//   const filteredProcesses = allProcesses.filter((process) =>
//     process.toLowerCase().includes(processSearchTerm.toLowerCase()),
//   )

//   const handleMaterialClick = (material) => {
//     if (!selectedMaterials.includes(material)) {
//       setSelectedMaterials([...selectedMaterials, material])
//     }
//   }

//   const handleConsumableClick = (consumable) => {
//     if (!selectedConsumables.includes(consumable)) {
//       setSelectedConsumables([...selectedConsumables, consumable])
//     }
//   }

//   const handleProcessClick = (process) => {
//     if (!selectedProcesses.includes(process)) {
//       setSelectedProcesses([...selectedProcesses, process])
//     }
//   }

//   const removeMaterial = (material) => {
//     setSelectedMaterials(selectedMaterials.filter((m) => m !== material))
//   }

//   const removeConsumable = (consumable) => {
//     setSelectedConsumables(selectedConsumables.filter((c) => c !== consumable))
//   }

//   const removeProcess = (process) => {
//     setSelectedProcesses(selectedProcesses.filter((p) => p !== process))
//   }

//   const generateBOM = () => {
//     const newBomMaterials = selectedMaterials.map((material) => ({
//       id: Date.now() + Math.random(),
//       name: material,
//       size: '',
//       ups: '',
//       quantity: '',
//       process: '',
//       processes: [],
//     }))

//     const newBomConsumables = selectedConsumables.map((consumable) => ({
//       id: Date.now() + Math.random(),
//       name: consumable,
//       quantity: '',
//       process: '',
//       processes: [],
//     }))

//     setBomMaterials(newBomMaterials)
//     setBomConsumables(newBomConsumables)
//   }

//   const generateDepartments = () => {
//     const allDepartments = []

//     // Get all unique processes from materials and consumables
//     const allProcesses = new Set()

//     bomMaterials.forEach((material) => {
//       if (material.processes) {
//         material.processes.forEach((process) => allProcesses.add(process))
//       }
//     })

//     bomConsumables.forEach((consumable) => {
//       if (consumable.processes) {
//         consumable.processes.forEach((process) => allProcesses.add(process))
//       }
//     })

//     // For each process, create entries for materials and consumables
//     Array.from(allProcesses).forEach((process) => {
//       // Add materials for this process
//       bomMaterials.forEach((material, index) => {
//         if (material.processes && material.processes.includes(process)) {
//           allDepartments.push({
//             id: `${process}-material-${material.id}`,
//             department: `Material ${index + 1} (${material.name})`,
//             process: process,
//             originalProcess: process,
//             type: 'material',
//             materialIndex: index + 1,
//             materialName: material.name,
//             ups: material.ups || '',
//             time: '',
//             machine: '',
//             status: 'pending',
//             files: [],
//           })
//         }
//       })

//       // Add consumables for this process
//       bomConsumables.forEach((consumable, index) => {
//         if (consumable.processes && consumable.processes.includes(process)) {
//           allDepartments.push({
//             id: `${process}-consumable-${consumable.id}`,
//             department: `Consumable ${index + 1} (${consumable.name})`,
//             process: process,
//             originalProcess: process,
//             type: 'consumable',
//             consumableIndex: index + 1,
//             consumableName: consumable.name,
//             ups: '',
//             time: '',
//             machine: '',
//             status: 'pending',
//             files: [],
//           })
//         }
//       })
//     })

//     setDepartments(allDepartments)
//   }

//   const updateDepartmentField = (deptId, field, value) => {
//     setDepartments(
//       departments.map((dept) => (dept.id === deptId ? { ...dept, [field]: value } : dept)),
//     )
//   }

//   const moveToNextStatus = (deptId) => {
//     const statusFlow = ['pending', 'in-progress', 'completed']
//     setDepartments(
//       departments.map((dept) => {
//         if (dept.id === deptId) {
//           const currentIndex = statusFlow.indexOf(dept.status)
//           const nextStatus =
//             currentIndex < statusFlow.length - 1 ? statusFlow[currentIndex + 1] : dept.status
//           return { ...dept, status: nextStatus }
//         }
//         return dept
//       }),
//     )
//   }

//   const moveToPrevStatus = (deptId) => {
//     const statusFlow = ['pending', 'in-progress', 'completed']
//     setDepartments(
//       departments.map((dept) => {
//         if (dept.id === deptId) {
//           const currentIndex = statusFlow.indexOf(dept.status)
//           const prevStatus = currentIndex > 0 ? statusFlow[currentIndex - 1] : dept.status
//           return { ...dept, status: prevStatus }
//         }
//         return dept
//       }),
//     )
//   }

//   const getAvailableProcessesForMaterial = (materialId) => {
//     const material = bomMaterials.find((m) => m.id === materialId)
//     const selectedProcesses = material?.processes || []
//     return allProcesses.filter((process) => !selectedProcesses.includes(process))
//   }

//   const getAvailableProcessesForConsumable = (consumableId) => {
//     const consumable = bomConsumables.find((c) => c.id === consumableId)
//     const selectedProcesses = consumable?.processes || []
//     return allProcesses.filter((process) => !selectedProcesses.includes(process))
//   }

//   const updateBOMMaterial = (id, field, value) => {
//     setBomMaterials(
//       bomMaterials.map((material) =>
//         material.id === id ? { ...material, [field]: value } : material,
//       ),
//     )
//   }

//   const updateBOMConsumable = (id, field, value) => {
//     setBomConsumables(
//       bomConsumables.map((consumable) =>
//         consumable.id === id ? { ...consumable, [field]: value } : consumable,
//       ),
//     )
//   }

//   const addProcessToMaterial = (materialId, process) => {
//     setBomMaterials(
//       bomMaterials.map((material) =>
//         material.id === materialId
//           ? {
//               ...material,
//               processes: material.processes
//                 ? material.processes.includes(process)
//                   ? material.processes
//                   : [...material.processes, process]
//                 : [process],
//             }
//           : material,
//       ),
//     )
//     // Add to global selected processes
//     if (!selectedProcesses.includes(process)) {
//       setSelectedProcesses([...selectedProcesses, process])
//     }
//   }

//   const addProcessToConsumable = (consumableId, process) => {
//     setBomConsumables(
//       bomConsumables.map((consumable) =>
//         consumable.id === consumableId
//           ? {
//               ...consumable,
//               processes: consumable.processes
//                 ? consumable.processes.includes(process)
//                   ? consumable.processes
//                   : [...consumable.processes, process]
//                 : [process],
//             }
//           : consumable,
//       ),
//     )
//     // Add to global selected processes
//     if (!selectedProcesses.includes(process)) {
//       setSelectedProcesses([...selectedProcesses, process])
//     }
//   }

//   const removeProcessFromMaterial = (materialId, process) => {
//     setBomMaterials(
//       bomMaterials.map((material) =>
//         material.id === materialId
//           ? {
//               ...material,
//               processes: material.processes ? material.processes.filter((p) => p !== process) : [],
//             }
//           : material,
//       ),
//     )
//   }

//   const removeProcessFromConsumable = (consumableId, process) => {
//     setBomConsumables(
//       bomConsumables.map((consumable) =>
//         consumable.id === consumableId
//           ? {
//               ...consumable,
//               processes: consumable.processes
//                 ? consumable.processes.filter((p) => p !== process)
//                 : [],
//             }
//           : consumable,
//       ),
//     )
//   }

//   const getUsedDepartments = () => {
//     return departments.map((dept) => dept.department).filter((dept) => dept !== '')
//   }

//   const getAvailableDepartments = (currentDept) => {
//     const used = getUsedDepartments()
//     return allDepartments.filter((dept) => !used.includes(dept) || dept === currentDept)
//   }

//   const updateDepartment = (id, field, value) => {
//     setDepartments(departments.map((dept) => (dept.id === id ? { ...dept, [field]: value } : dept)))
//   }

//   const addFileToDatarow = (deptId, file) => {
//     setDepartments(
//       departments.map((dept) =>
//         dept.id === deptId
//           ? { ...dept, files: [...dept.files, { id: Date.now() + Math.random(), file }] }
//           : dept,
//       ),
//     )
//   }

//   const removeFileFromDepartment = (deptId, fileId) => {
//     setDepartments(
//       departments.map((dept) =>
//         dept.id === deptId ? { ...dept, files: dept.files.filter((f) => f.id !== fileId) } : dept,
//       ),
//     )
//   }

//   const changeStep = (direction) => {
//     if (direction === 1 && currentStep < 5) {
//       if (currentStep === 2) {
//         generateBOM()
//       }
//       if (currentStep === 3) {
//         generateDepartments()
//       }
//       setCurrentStep(currentStep + 1)
//     } else if (direction === -1 && currentStep > 1) {
//       setCurrentStep(currentStep - 1)
//     }
//   }

//   const downloadDesignFile = () => {
//     // Mock download function
//     alert('Downloading design file...')
//   }

//   const downloadRecipeData = () => {
//     const recipeData = {
//       jobNo,
//       materials: selectedMaterials,
//       consumables: selectedConsumables,
//       processes: selectedProcesses,
//       timestamp: new Date().toISOString(),
//     }

//     const dataStr =
//       'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(recipeData, null, 2))
//     const downloadAnchorNode = document.createElement('a')
//     downloadAnchorNode.setAttribute('href', dataStr)
//     downloadAnchorNode.setAttribute(
//       'download',
//       `recipe_${jobNo}_${new Date().toISOString().split('T')[0]}.json`,
//     )
//     document.body.appendChild(downloadAnchorNode)
//     downloadAnchorNode.click()
//     downloadAnchorNode.remove()
//   }

//   return (
//     <div className="recipe-wizard">
//       <style jsx>{`
//         .recipe-wizard {
//           max-width: 1200px;
//           margin: 0 auto;
//           font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
//         }

//         .wizard-container {
//           background: white;
//           border-radius: 12px;
//           box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//           overflow: hidden;
//         }

//         .wizard-header {
//           background: linear-gradient(135deg, #0061ed 0%, #0052cc 100%);
//           color: white;
//           padding: 16px 24px;
//           text-align: center;
//         }

//         .job-info {
//           font-size: 18px;
//           font-weight: 600;
//         }

//         .download-section {
//           text-align: center;
//           padding: 40px;
//         }

//         .download-btn {
//           background: #0061ed;
//           color: white;
//           border: none;
//           padding: 12px 24px;
//           border-radius: 6px;
//           cursor: pointer;
//           font-size: 14px;
//           margin: 0 8px;
//           transition: all 0.3s ease;
//         }

//         .download-btn:hover {
//           background: #0052cc;
//         }

//         .steps-container {
//           display: flex;
//           background: #f8f9fa;
//           border-bottom: 1px solid #e9ecef;
//         }

//         .step-item {
//           flex: 1;
//           padding: 12px;
//           text-align: center;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           position: relative;
//         }

//         .step-item.active {
//           background: #e3dfdf;
//           color: #0061ed;
//           font-weight: 600;
//         }

//         .step-item.completed {
//           background: #28a745;
//           color: white;
//         }

//         .step-item.inactive {
//           background: #f8f9fa;
//           color: #6c757d;
//         }

//         .step-separator {
//           position: absolute;
//           right: 0;
//           top: 50%;
//           transform: translateY(-50%);
//           width: 1px;
//           height: 20px;
//           background: #dee2e6;
//         }

//         .step-number {
//           font-size: 14px;
//         }

//         .step-title {
//           font-size: 12px;
//           margin-top: 2px;
//         }

//         .content {
//           padding: 20px;
//         }

//         .section-title {
//           font-size: 16px;
//           font-weight: 600;
//           color: #495057;
//           margin-bottom: 12px;
//         }

//         .two-column-layout {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 20px;
//         }

//         .column-section {
//           background: #f8f9fa;
//           border-radius: 8px;
//           padding: 16px;
//         }

//         .search-container {
//           position: relative;
//           margin-bottom: 12px;
//         }

//         .search-icon {
//           position: absolute;
//           left: 12px;
//           top: 50%;
//           transform: translateY(-50%);
//           font-size: 14px;
//         }

//         .search-input {
//           width: 100%;
//           padding: 8px 12px 8px 36px;
//           border: 2px solid #e9ecef;
//           border-radius: 6px;
//           font-size: 14px;
//           outline: none;
//           transition: border-color 0.3s ease;
//         }

//         .search-input:focus {
//           border-color: #0061ed;
//         }

//         .materials-dropdown {
//           border: 2px solid #e9ecef;
//           border-radius: 6px;
//           background: white;
//           max-height: 160px;
//           overflow-y: auto;
//         }

//         .material-item {
//           padding: 8px 12px;
//           cursor: pointer;
//           transition: background-color 0.2s ease;
//           border-bottom: 1px solid #f8f9fa;
//           font-size: 14px;
//         }

//         .material-item:hover {
//           background: #f8f9fa;
//         }

//         .material-item.selected {
//           background: #0061ed;
//           color: white;
//         }

//         .material-item.selected:hover {
//           background: #0061ed;
//         }

//         .selected-materials {
//           margin-top: 12px;
//         }

//         .material-tag {
//           display: inline-block;
//           background: #e3f2fd;
//           color: #1976d2;
//           padding: 6px 10px;
//           margin: 3px;
//           border-radius: 16px;
//           font-size: 12px;
//         }

//         .consumable-tag {
//           display: inline-block;
//           background: #fff3e0;
//           color: #f57c00;
//           padding: 6px 10px;
//           margin: 3px;
//           border-radius: 16px;
//           font-size: 12px;
//         }

//         .process-tag {
//           display: inline-block;
//           background: #e8f5e8;
//           color: #2e7d32;
//           padding: 6px 10px;
//           margin: 3px;
//           border-radius: 16px;
//           font-size: 12px;
//         }

//         .selected-process-tag {
//           margin-top: 8px;
//           padding: 4px 0;
//         }

//         .type-badge {
//           padding: 4px 8px;
//           border-radius: 12px;
//           font-size: 10px;
//           font-weight: 600;
//           text-transform: uppercase;
//         }

//         .material-badge {
//           background: #e3f2fd;
//           color: #1976d2;
//         }

//         .consumable-badge {
//           background: #fff3e0;
//           color: #f57c00;
//         }

//         .material-tag .remove-btn,
//         .consumable-tag .remove-btn,
//         .process-tag .remove-btn {
//           margin-left: 6px;
//           cursor: pointer;
//           font-weight: bold;
//           transition: color 0.2s ease;
//         }

//         .material-tag .remove-btn:hover,
//         .consumable-tag .remove-btn:hover,
//         .process-tag .remove-btn:hover {
//           color: #d32f2f;
//         }

//         .bom-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
//           gap: 16px;
//           margin-bottom: 16px;
//         }

//         .bom-card {
//           background: #f8f9fa;
//           border: 2px solid #e9ecef;
//           border-radius: 8px;
//           padding: 16px;
//         }

//         .bom-card.consumable {
//           background: #fff8f0;
//           border-color: #ffcc80;
//         }

//         .bom-card.material {
//           background: #f0f8ff;
//           border-color: #87ceeb;
//         }

//         .bom-card-title {
//           font-size: 14px;
//           font-weight: 500;
//           color: #495057;
//           margin-bottom: 12px;
//         }

//         .form-group {
//           margin-bottom: 12px;
//         }

//         .form-label {
//           display: block;
//           margin-bottom: 3px;
//           font-weight: 500;
//           color: #495057;
//           font-size: 13px;
//         }

//         .form-input {
//           width: 100%;
//           padding: 6px 10px;
//           border: 1px solid #ced4da;
//           border-radius: 4px;
//           font-size: 13px;
//           outline: none;
//           transition: border-color 0.3s ease;
//         }

//         .form-input:focus {
//           border-color: #0061ed;
//         }

//         .form-input[readonly] {
//           background: #f8f9fa;
//         }

//         .table-container {
//           overflow-x: auto;
//           border: 1px solid #e9ecef;
//           border-radius: 8px;
//           background: white;
//         }

//         .department-table {
//           width: 100%;
//           border-collapse: collapse;
//           min-width: 600px;
//         }

//         .department-table th {
//           padding: 8px;
//           text-align: left;
//           border-bottom: 1px solid #e9ecef;
//           font-weight: 600;
//           color: #495057;
//           background: #f8f9fa;
//           font-size: 14px;
//         }

//         .department-table td {
//           padding: 8px;
//           border-bottom: 1px solid #e9ecef;
//           font-size: 12px;
//         }

//         .department-table tr {
//           transition: background-color 0.2s ease;
//         }

//         .department-table tr:hover {
//           background: #f8f9fa;
//         }

//         .file-input {
//           width: 100%;
//           padding: 6px;
//           border: 1px solid #ced4da;
//           border-radius: 4px;
//           font-size: 11px;
//           margin-bottom: 5px;
//         }

//         .file-list {
//           margin-top: 5px;
//         }

//         .file-item {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           background: #f8f9fa;
//           padding: 4px 8px;
//           border-radius: 4px;
//           margin-bottom: 3px;
//           font-size: 11px;
//         }

//         .file-name {
//           color: #495057;
//           flex: 1;
//           overflow: hidden;
//           text-overflow: ellipsis;
//           white-space: nowrap;
//         }

//         .file-remove {
//           color: #dc3545;
//           cursor: pointer;
//           font-weight: bold;
//           margin-left: 8px;
//         }

//         .file-remove:hover {
//           color: #c82333;
//         }

//         .btn {
//           border: none;
//           padding: 8px 16px;
//           border-radius: 6px;
//           cursor: pointer;
//           font-size: 12px;
//           transition: all 0.3s ease;
//           outline: none;
//         }

//         .btn-primary {
//           background: #0061ed;
//           color: white;
//         }

//         .btn-primary:hover {
//           background: #0052cc;
//         }

//         .btn-success {
//           background: #28a745;
//           color: white;
//         }

//         .btn-success:hover {
//           background: #218838;
//         }

//         .btn-danger {
//           background: #dc3545;
//           color: white;
//           padding: 4px 8px;
//           font-size: 11px;
//         }

//         .btn-danger:hover {
//           background: #c82333;
//         }

//         .download-buttons {
//           display: flex;
//           justify-content: center;
//           gap: 20px;
//           margin-top: 20px;
//         }

//         .btn-secondary {
//           background: #6c757d;
//           color: white;
//           padding: 10px 20px;
//           font-size: 14px;
//         }

//         .btn-secondary:hover {
//           background: #5a6268;
//         }

//         .btn:disabled {
//           opacity: 0.5;
//           cursor: not-allowed;
//         }

//         .btn:disabled:hover {
//           background: #6c757d;
//         }

//         .actions-container {
//           display: flex;
//           justify-content: space-between;
//           padding: 16px;
//           border-top: 1px solid #e9ecef;
//         }

//         .btn-large {
//           padding: 10px 20px;
//           font-size: 14px;
//         }

//         .processes-display {
//           background: #f8f9fa;
//           border-radius: 8px;
//           padding: 16px;
//           margin-bottom: 16px;
//         }

//         .processes-list {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 8px;
//         }

//         .process-display-tag {
//           background: #e8f5e8;
//           color: #2e7d32;
//           padding: 4px 8px;
//           border-radius: 12px;
//           font-size: 12px;
//           font-weight: 500;
//         }

//         /* Mobile Responsive Styles */
//         @media (max-width: 768px) {
//           .recipe-wizard {
//             padding: 8px;
//           }

//           .download-buttons {
//             flex-direction: column;
//             gap: 12px;
//           }

//           .wizard-header {
//             padding: 12px 16px;
//           }

//           .two-column-layout {
//             grid-template-columns: 1fr;
//             gap: 16px;
//           }

//           .steps-container {
//             flex-direction: column;
//           }

//           .step-item {
//             padding: 8px;
//             border-bottom: 1px solid #e9ecef;
//           }

//           .step-separator {
//             display: none;
//           }

//           .content {
//             padding: 12px;
//           }

//           .section-title {
//             font-size: 14px;
//           }

//           .bom-grid {
//             grid-template-columns: 1fr;
//             gap: 12px;
//           }

//           .bom-card {
//             padding: 12px;
//           }

//           .table-container {
//             font-size: 12px;
//           }

//           .department-table th,
//           .department-table td {
//             padding: 6px;
//           }

//           .actions-container {
//             flex-direction: column;
//             gap: 10px;
//             padding: 12px;
//           }

//           .btn-large {
//             width: 100%;
//           }
//         }

//         @media (max-width: 480px) {
//           .recipe-wizard {
//             padding: 4px;
//           }

//           .content {
//             padding: 8px;
//           }

//           .bom-card {
//             padding: 8px;
//           }

//           .form-input {
//             font-size: 14px;
//           }

//           .search-input {
//             font-size: 14px;
//           }

//           .material-tag,
//           .consumable-tag,
//           .process-tag {
//             font-size: 10px;
//             padding: 4px 8px;
//           }
//         }

//         /* Tablet Styles */
//         @media (min-width: 769px) and (max-width: 1024px) {
//           .bom-grid {
//             grid-template-columns: repeat(2, 1fr);
//           }
//         }

//         /* Large Screen Styles */
//         @media (min-width: 1200px) {
//           .bom-grid {
//             grid-template-columns: repeat(3, 1fr);
//           }
//         }
//       `}</style>

//       <div className="wizard-container" style={{ background: '#FFA07A' }}>
//         {/* Header - Centered Job Number Only */}
//         <div className="wizard-header">
//           <div className="job-info">Job No: {jobNo}</div>
//         </div>

//         {/* Steps */}
//         <div className="steps-container">
//           {[
//             { num: 1, title: 'Download' },
//             { num: 2, title: 'Recipe Selection' },
//             { num: 3, title: 'BOM & Process' },
//             { num: 4, title: 'Department Files' },
//             // { num: 5, title: 'Process Management' },
//           ].map((step, index) => (
//             <div
//               key={step.num}
//               className={`step-item ${
//                 step.num === currentStep
//                   ? 'active'
//                   : step.num < currentStep
//                     ? 'completed'
//                     : 'inactive'
//               }`}
//               onClick={() => {
//                 if (step.num <= currentStep + 1) {
//                   if (
//                     step.num === 3 &&
//                     (selectedMaterials.length > 0 || selectedConsumables.length > 0)
//                   ) {
//                     generateBOM()
//                   }
//                   if (step.num === 4 && selectedProcesses.length > 0) {
//                     generateDepartments()
//                   }
//                   setCurrentStep(step.num)
//                 }
//               }}
//             >
//               <div className="step-number">Step {step.num}</div>
//               <div className="step-title">{step.title}</div>
//               {index < 4 && <div className="step-separator"></div>}
//             </div>
//           ))}
//         </div>

//         {/* Content */}
//         <div className="content">
//           {/* Step 1: Download */}
//           {currentStep === 1 && (
//             <div className="download-section">
//               <h3 className="section-title">📥 Download File</h3>
//               <div className="download-buttons">
//                 <button className="download-btn" onClick={downloadRecipeData}>
//                   Download Design File
//                 </button>
//               </div>
//             </div>
//           )}

//           {/* Step 2: Recipe Selection */}
//           {currentStep === 2 && (
//             <div className="two-column-layout">
//               {/* Materials Section */}
//               <div className="column-section">
//                 <h3 className="section-title">📦 Select Recipe Materials</h3>

//                 <div className="search-container">
//                   <div className="search-icon">🔍</div>
//                   <input
//                     type="text"
//                     placeholder="Search materials..."
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                     className="search-input"
//                   />
//                 </div>

//                 <div className="materials-dropdown">
//                   {filteredMaterials.map((material) => (
//                     <div
//                       key={material}
//                       onClick={() => handleMaterialClick(material)}
//                       className={`material-item ${selectedMaterials.includes(material) ? 'selected' : ''}`}
//                     >
//                       {material}
//                     </div>
//                   ))}
//                 </div>

//                 <div className="selected-materials">
//                   {selectedMaterials.map((material) => (
//                     <span key={material} className="material-tag">
//                       {material}
//                       <span onClick={() => removeMaterial(material)} className="remove-btn">
//                         ×
//                       </span>
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               {/* Consumables Section */}
//               <div className="column-section">
//                 <h3 className="section-title">🧪 Consumables</h3>

//                 <div className="search-container">
//                   <div className="search-icon">🔍</div>
//                   <input
//                     type="text"
//                     placeholder="Search consumables..."
//                     value={consumableSearchTerm}
//                     onChange={(e) => setConsumableSearchTerm(e.target.value)}
//                     className="search-input"
//                   />
//                 </div>

//                 <div className="materials-dropdown">
//                   {filteredConsumables.map((consumable) => (
//                     <div
//                       key={consumable}
//                       onClick={() => handleConsumableClick(consumable)}
//                       className={`material-item ${selectedConsumables.includes(consumable) ? 'selected' : ''}`}
//                     >
//                       {consumable}
//                     </div>
//                   ))}
//                 </div>

//                 <div className="selected-materials">
//                   {selectedConsumables.map((consumable) => (
//                     <span key={consumable} className="consumable-tag">
//                       {consumable}
//                       <span onClick={() => removeConsumable(consumable)} className="remove-btn">
//                         ×
//                       </span>
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Step 3: BOM Creation & Process Selection */}
//           {currentStep === 3 && (
//             <div>
//               <h3 className="section-title">Create Bill of Materials</h3>

//               <div className="bom-grid">
//                 {bomMaterials.map((material, index) => (
//                   <div key={material.id} className="bom-card material">
//                     <h4 className="bom-card-title">Material {index + 1}</h4>

//                     <div className="form-group">
//                       <label className="form-label">Material Type</label>
//                       <input type="text" value={material.name} readOnly className="form-input" />
//                     </div>

//                     <div className="form-group">
//                       <label className="form-label">Size</label>
//                       <select
//                         value={material.size}
//                         onChange={(e) => updateBOMMaterial(material.id, 'size', e.target.value)}
//                         className="form-input"
//                       >
//                         <option value="">Select Size</option>
//                         {sizeOptions.map((size) => (
//                           <option key={size} value={size}>
//                             {size}
//                           </option>
//                         ))}
//                       </select>
//                     </div>

//                     <div className="form-group">
//                       <label className="form-label">Ups</label>
//                       <input
//                         type="text"
//                         placeholder="Enter Ups"
//                         value={material.ups}
//                         onChange={(e) => updateBOMMaterial(material.id, 'ups', e.target.value)}
//                         className="form-input"
//                       />
//                     </div>

//                     <div className="form-group">
//                       <label className="form-label">Quantity</label>
//                       <input
//                         type="number"
//                         placeholder="Enter Quantity"
//                         value={material.quantity}
//                         onChange={(e) => updateBOMMaterial(material.id, 'quantity', e.target.value)}
//                         className="form-input"
//                       />
//                     </div>

//                     <div className="form-group">
//                       <label className="form-label">Process</label>
//                       <select
//                         value=""
//                         onChange={(e) => {
//                           if (e.target.value) {
//                             addProcessToMaterial(material.id, e.target.value)
//                           }
//                         }}
//                         className="form-input"
//                       >
//                         <option value="">Select Process</option>
//                         {getAvailableProcessesForMaterial(material.id).map((process) => (
//                           <option key={process} value={process}>
//                             {process}
//                           </option>
//                         ))}
//                       </select>
//                     </div>

//                     {/* Show selected processes as tags below the dropdown */}
//                     {material.processes && material.processes.length > 0 && (
//                       <div className="selected-process-tag">
//                         {material.processes.map((process) => (
//                           <span key={process} className="process-tag">
//                             {process}
//                             <span
//                               onClick={() => removeProcessFromMaterial(material.id, process)}
//                               className="remove-btn"
//                             >
//                               ×
//                             </span>
//                           </span>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 ))}

//                 {bomConsumables.map((consumable, index) => (
//                   <div key={consumable.id} className="bom-card consumable">
//                     <h4 className="bom-card-title">Consumable {index + 1}</h4>

//                     <div className="form-group">
//                       <label className="form-label">Consumable Type</label>
//                       <input type="text" value={consumable.name} readOnly className="form-input" />
//                     </div>

//                     <div className="form-group">
//                       <label className="form-label">Quantity</label>
//                       <input
//                         type="number"
//                         placeholder="Enter Quantity"
//                         value={consumable.quantity}
//                         onChange={(e) =>
//                           updateBOMConsumable(consumable.id, 'quantity', e.target.value)
//                         }
//                         className="form-input"
//                       />
//                     </div>

//                     <div className="form-group">
//                       <label className="form-label">Process</label>
//                       <select
//                         value=""
//                         onChange={(e) => {
//                           if (e.target.value) {
//                             addProcessToConsumable(consumable.id, e.target.value)
//                           }
//                         }}
//                         className="form-input"
//                       >
//                         <option value="">Select Process</option>
//                         {getAvailableProcessesForConsumable(consumable.id).map((process) => (
//                           <option key={process} value={process}>
//                             {process}
//                           </option>
//                         ))}
//                       </select>
//                     </div>

//                     {/* Show selected processes as tags below the dropdown */}
//                     {consumable.processes && consumable.processes.length > 0 && (
//                       <div className="selected-process-tag">
//                         {consumable.processes.map((process) => (
//                           <span key={process} className="process-tag">
//                             {process}
//                             <span
//                               onClick={() => removeProcessFromConsumable(consumable.id, process)}
//                               className="remove-btn"
//                             >
//                               ×
//                             </span>
//                           </span>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Step 4: Department Files */}
//           {currentStep === 4 && (
//             <div>
//               <h3 className="section-title">📁 Department File Upload</h3>

//               <div className="table-container" style={{ marginBottom: '10px' }}>
//                 <table className="department-table">
//                   <thead>
//                     <tr>
//                       <th>S.No</th>
//                       <th>Department</th>
//                       <th>No of Ups</th>
//                       <th>Time</th>
//                       <th>Machine</th>
//                       {/* <th>Status</th> */}
//                       <th>File Upload</th>
//                       <th>Uploaded Files</th>
//                       {/* <th>Actions</th> */}
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {/* Group departments by process */}
//                     {(() => {
//                       // Get unique processes from departments
//                       const uniqueProcesses = [...new Set(departments.map((dept) => dept.process))]

//                       return uniqueProcesses.map((process) => {
//                         const materialDepartments = departments.filter(
//                           (dept) => dept.process === process && dept.type === 'material',
//                         )
//                         const consumableDepartments = departments.filter(
//                           (dept) => dept.process === process && dept.type === 'consumable',
//                         )

//                         return (
//                           <React.Fragment key={process}>
//                             {/* Process Header */}
//                             <tr>
//                               <td
//                                 colSpan="9"
//                                 style={{
//                                   background: '#e8f5e8',
//                                   fontWeight: 'bold',
//                                   padding: '12px 8px',
//                                   borderBottom: '2px solid #2e7d32',
//                                   fontSize: '16px',
//                                 }}
//                               >
//                                 {process}
//                               </td>
//                             </tr>

//                             {/* Materials first */}
//                             {materialDepartments.map((dept, index) => (
//                               <tr key={dept.id}>
//                                 <td>{index + 1}</td>
//                                 <td>
//                                   <div
//                                     className="form-input"
//                                     style={{
//                                       background: '#f0f8ff',
//                                       fontWeight: '600',
//                                     }}
//                                   >
//                                     {dept.department}
//                                   </div>
//                                 </td>
//                                 <td>
//                                   <input
//                                     type="number"
//                                     value={dept.ups}
//                                     onChange={(e) =>
//                                       updateDepartmentField(dept.id, 'ups', e.target.value)
//                                     }
//                                     className="form-input"
//                                     placeholder="Ups"
//                                     style={{ width: '80px' }}
//                                   />
//                                 </td>
//                                 <td>
//                                   <input
//                                     type="text"
//                                     value={dept.time}
//                                     onChange={(e) =>
//                                       updateDepartmentField(dept.id, 'time', e.target.value)
//                                     }
//                                     className="form-input"
//                                     placeholder="2 hours"
//                                     style={{ width: '100px' }}
//                                   />
//                                 </td>
//                                 <td>
//                                   <select
//                                     value=""
//                                     // onChange={(e) => {
//                                     //   if (e.target.value) {
//                                     //     addProcessToConsumable(consumable.id, e.target.value)
//                                     //   }
//                                     // }}
//                                     className="form-input"
//                                   >
//                                     <option>Select machine</option>
//                                   </select>
//                                   {/* <input
//                                     type="text"
//                                     value={dept.machine}
//                                     onChange={(e) =>
//                                       updateDepartmentField(dept.id, 'machine', e.target.value)
//                                     }
//                                     className="form-input"
//                                     placeholder="Machine"
//                                     style={{ width: '120px' }}
//                                   /> */}
//                                 </td>
//                                 {/* <td>
//                                   <span className={`status-badge ${dept.status}`}>
//                                     {dept.status.charAt(0).toUpperCase() + dept.status.slice(1).replace('-', ' ')}
//                                   </span>
//                                 </td> */}
//                                 <td>
//                                   <input
//                                     type="file"
//                                     accept=".pdf,.doc,.docx,.jpg,.png,.dwg,.ai,.psd"
//                                     onChange={(e) => {
//                                       if (e.target.files[0]) {
//                                         addFileToDatarow(dept.id, e.target.files[0])
//                                         e.target.value = '' // Reset file input
//                                       }
//                                     }}
//                                     className="file-input"
//                                   />
//                                 </td>
//                                 <td>
//                                   <div className="file-list">
//                                     {dept.files.length === 0 ? (
//                                       // <span style={{ color: '#6c757d', fontSize: '11px' }}>No files uploaded</span>
//                                       <span style={{ color: '#6c757d', fontSize: '11px' }}>
//                                         No files uploaded
//                                       </span>
//                                     ) : (
//                                       dept.files.map((fileObj) => (
//                                         <div key={fileObj.id} className="file-item">
//                                           <span className="file-name">{fileObj.file.name}</span>
//                                           <span
//                                             className="file-remove"
//                                             onClick={() =>
//                                               removeFileFromDepartment(dept.id, fileObj.id)
//                                             }
//                                           >
//                                             ×
//                                           </span>
//                                         </div>
//                                       ))
//                                     )}
//                                   </div>
//                                 </td>
//                                 {/* <td>
//                                   <div style={{ display: 'flex', gap: '4px' }}>
//                                     <button
//                                       onClick={() => moveToPrevStatus(dept.id)}
//                                       className="btn btn-secondary"
//                                       style={{ padding: '2px 6px', fontSize: '10px' }}
//                                       disabled={dept.status === 'pending'}
//                                     >
//                                       ←
//                                     </button>
//                                     <button
//                                       onClick={() => moveToNextStatus(dept.id)}
//                                       className="btn btn-primary"
//                                       style={{ padding: '2px 6px', fontSize: '10px' }}
//                                       disabled={dept.status === 'completed'}
//                                     >
//                                       →
//                                     </button>
//                                   </div>
//                                 </td> */}
//                               </tr>
//                             ))}

//                             {/* Consumables after materials */}
//                             {consumableDepartments.map((dept, index) => (
//                               <tr key={dept.id}>
//                                 <td>{materialDepartments.length + index + 1}</td>
//                                 <td>
//                                   <div
//                                     className="form-input"
//                                     style={{
//                                       background: '#fff8f0',
//                                       fontWeight: '600',
//                                     }}
//                                   >
//                                     {dept.department}
//                                   </div>
//                                 </td>
//                                 <td>
//                                   <input
//                                     type="number"
//                                     value={dept.ups}
//                                     onChange={(e) =>
//                                       updateDepartmentField(dept.id, 'ups', e.target.value)
//                                     }
//                                     className="form-input"
//                                     placeholder="Ups"
//                                     style={{ width: '80px' }}
//                                   />
//                                 </td>
//                                 <td>
//                                   <input
//                                     type="text"
//                                     value={dept.time}
//                                     onChange={(e) =>
//                                       updateDepartmentField(dept.id, 'time', e.target.value)
//                                     }
//                                     className="form-input"
//                                     placeholder="2 hours"
//                                     style={{ width: '100px' }}
//                                   />
//                                 </td>
//                                 <td>
//                                    <select
//                                     value=""
//                                     // onChange={(e) => {
//                                     //   if (e.target.value) {
//                                     //     addProcessToConsumable(consumable.id, e.target.value)
//                                     //   }
//                                     // }}
//                                     className="form-input"
//                                   >
//                                     <option>Select machine</option>
//                                   </select>
//                                   {/* <input
//                                     type="text"
//                                     value={dept.machine}
//                                     onChange={(e) =>
//                                       updateDepartmentField(dept.id, 'machine', e.target.value)
//                                     }
//                                     className="form-input"
//                                     placeholder="Machine"
//                                     style={{ width: '120px' }}
//                                   /> */}
//                                 </td>
//                                 {/* <td>
//                                   <span className={`status-badge ${dept.status}`}>
//                                     {dept.status.charAt(0).toUpperCase() + dept.status.slice(1).replace('-', ' ')}
//                                   </span>
//                                 </td> */}
//                                 <td>
//                                   <input
//                                     type="file"
//                                     accept=".pdf,.doc,.docx,.jpg,.png,.dwg,.ai,.psd"
//                                     onChange={(e) => {
//                                       if (e.target.files[0]) {
//                                         addFileToDatarow(dept.id, e.target.files[0])
//                                         e.target.value = '' // Reset file input
//                                       }
//                                     }}
//                                     className="file-input"
//                                   />
//                                 </td>
//                                 <td>
//                                   <div className="file-list">
//                                     {dept.files.length === 0 ? (
//                                       <span style={{ color: '#6c757d', fontSize: '11px' }}>
//                                         No files uploaded
//                                       </span>
//                                     ) : (
//                                       dept.files.map((fileObj) => (
//                                         <div key={fileObj.id} className="file-item">
//                                           <span className="file-name">{fileObj.file.name}</span>
//                                           <span
//                                             className="file-remove"
//                                             onClick={() =>
//                                               removeFileFromDepartment(dept.id, fileObj.id)
//                                             }
//                                           >
//                                             ×
//                                           </span>
//                                         </div>
//                                       ))
//                                     )}
//                                   </div>
//                                 </td>
//                                 {/* <td>
//                                   <div style={{ display: 'flex', gap: '4px' }}>
//                                     <button
//                                       onClick={() => moveToPrevStatus(dept.id)}
//                                       className="btn btn-secondary"
//                                       style={{ padding: '2px 6px', fontSize: '10px' }}
//                                       disabled={dept.status === 'pending'}
//                                     >
//                                       ←
//                                     </button>
//                                     <button
//                                       onClick={() => moveToNextStatus(dept.id)}
//                                       className="btn btn-primary"
//                                       style={{ padding: '2px 6px', fontSize: '10px' }}
//                                       disabled={dept.status === 'completed'}
//                                     >
//                                       →
//                                     </button>
//                                   </div>
//                                 </td> */}
//                               </tr>
//                             ))}
//                           </React.Fragment>
//                         )
//                       })
//                     })()}
//                   </tbody>
//                 </table>
//               </div>

//               {departments.length === 0 && (
//                 <div style={{ textAlign: 'center', padding: '20px', color: '#6c757d' }}>
//                   <p>No departments available. Please select processes in the previous step.</p>
//                 </div>
//               )}
//             </div>
//           )}

//           {/* Step 5: Process Management */}
//           {/* {currentStep === 5 && (
//             <div>
//               <h3 className="section-title">⚙️ Process Management</h3>
//               <div style={{ textAlign: 'center', padding: '40px', color: '#6c757d' }}>
//                 <p>Process Management section - Content to be added</p>
//               </div>
//             </div>
//           )} */}
//         </div>

//         {/* Actions */}
//         <div className="actions-container">
//           <button
//             onClick={() => changeStep(-1)}
//             disabled={currentStep === 1}
//             className="btn btn-secondary btn-large"
//           >
//             Previous
//           </button>
//           <button onClick={() => changeStep(1)} className="btn btn-primary btn-large">
//             {currentStep === 5 ? 'Finish' : 'Next'}
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default RecipeWizard

// import React, { useState, useEffect } from 'react'

// const RecipeWizard = () => {
//   const [currentStep, setCurrentStep] = useState(1)
//   const [selectedMaterials, setSelectedMaterials] = useState([])
//   const [selectedConsumables, setSelectedConsumables] = useState([])
//   const [selectedProcesses, setSelectedProcesses] = useState([])
//   const [bomMaterials, setBomMaterials] = useState([])
//   const [bomConsumables, setBomConsumables] = useState([])
//   const [departments, setDepartments] = useState([])
//   const [searchTerm, setSearchTerm] = useState('')
//   const [consumableSearchTerm, setConsumableSearchTerm] = useState('')
//   const [processSearchTerm, setProcessSearchTerm] = useState('')
//   const [departmentEntries, setDepartmentEntries] = useState([])
//   const [nextSerialNumber, setNextSerialNumber] = useState(1)

//   // Job information
//   const jobNo = '14888a'

//   const allMaterials = [
//     'BLACK ACRYLIC 2MM',
//     'BLACK ACRYLIC 3MM',
//     'BLACK ACRYLIC 6MM',
//     'BLACK ACRYLIC 8MM',
//     'BLACK ACRYLIC 12MM',
//     'WHITE ACRYLIC 2MM',
//   ]

//   const allConsumables = [
//     'SUPER GLUE',
//     'EPOXY ADHESIVE',
//     'DOUBLE SIDED TAPE',
//     'MASKING TAPE',
//     'CLEANING ALCOHOL',
//     'POLISHING COMPOUND',
//     'PROTECTIVE FILM',
//     'SANDPAPER',
//     'CUTTING OIL',
//     'PRIMER SPRAY',
//   ]

//   const allProcesses = [
//     'DTP',
//     'UV Printing',
//     'Screen Printing',
//     'Laser Cutting',
//     'CNC Machining',
//     'Assembly',
//     'Quality Control',
//     'Packaging',
//   ]

//   const allDepartments = [
//     'DTP',
//     'UV Printing',
//     'Screen Printing',
//     'Laser Cutting',
//     'CNC Machining',
//     'Assembly',
//     'Quality Control',
//     'Packaging',
//   ]
//   const sizeOptions = ["8' x 4'", "4' x 4'", "6' x 3'", "10' x 5'", "12' x 6'"]
//   const processOptions = [
//     'DTP',
//     'UV',
//     'SCREEN',
//     'LASER',
//     'Cutting',
//     'Drilling',
//     'Polishing',
//     'Assembly',
//     'Finishing',
//     'Packaging',
//     'Quality Check',
//   ]

//   const filteredMaterials = allMaterials.filter((material) =>
//     material.toLowerCase().includes(searchTerm.toLowerCase()),
//   )

//   const filteredConsumables = allConsumables.filter((consumable) =>
//     consumable.toLowerCase().includes(consumableSearchTerm.toLowerCase()),
//   )

//   const filteredProcesses = allProcesses.filter((process) =>
//     process.toLowerCase().includes(processSearchTerm.toLowerCase()),
//   )

//   const handleMaterialClick = (material) => {
//     if (!selectedMaterials.includes(material)) {
//       setSelectedMaterials([...selectedMaterials, material])
//     }
//   }

//   const handleConsumableClick = (consumable) => {
//     if (!selectedConsumables.includes(consumable)) {
//       setSelectedConsumables([...selectedConsumables, consumable])
//     }
//   }

//   const handleProcessClick = (process) => {
//     if (!selectedProcesses.includes(process)) {
//       setSelectedProcesses([...selectedProcesses, process])
//     }
//   }

//   const removeMaterial = (material) => {
//     setSelectedMaterials(selectedMaterials.filter((m) => m !== material))
//   }

//   const removeConsumable = (consumable) => {
//     setSelectedConsumables(selectedConsumables.filter((c) => c !== consumable))
//   }

//   const removeProcess = (process) => {
//     setSelectedProcesses(selectedProcesses.filter((p) => p !== process))
//   }

//   const generateBOM = () => {
//     const newBomMaterials = selectedMaterials.map((material) => ({
//       id: Date.now() + Math.random(),
//       name: material,
//       size: '',
//       ups: '',
//       quantity: '',
//       process: '',
//       processes: [],
//     }))

//     const newBomConsumables = selectedConsumables.map((consumable) => ({
//       id: Date.now() + Math.random(),
//       name: consumable,
//       quantity: '',
//       process: '',
//       processes: [],
//     }))

//     setBomMaterials(newBomMaterials)
//     setBomConsumables(newBomConsumables)
//   }

//   const generateDepartments = () => {
//     // Get all unique processes that were selected
//     const allProcesses = new Set()

//     bomMaterials.forEach((material) => {
//       if (material.processes) {
//         material.processes.forEach((process) => allProcesses.add(process))
//       }
//     })

//     bomConsumables.forEach((consumable) => {
//       if (consumable.processes) {
//         consumable.processes.forEach((process) => allProcesses.add(process))
//       }
//     })

//     // Reset department entries when regenerating
//     setDepartmentEntries([])
//     setNextSerialNumber(1)
//   }

//   const addDepartmentEntry = () => {
//     const newEntry = {
//       id: Date.now() + Math.random(),
//       serialNumber: nextSerialNumber,
//       selectedDepartment: '',
//       time: '',
//       machine: '',
//       files: [],
//       items: [] // Will contain selected materials and consumables
//     }
//     setDepartmentEntries([...departmentEntries, newEntry])
//     setNextSerialNumber(nextSerialNumber + 1)
//   }

//   const removeDepartmentEntry = (entryId) => {
//     setDepartmentEntries(departmentEntries.filter(entry => entry.id !== entryId))
//   }

//   const updateDepartmentEntry = (entryId, field, value) => {
//     setDepartmentEntries(departmentEntries.map(entry =>
//       entry.id === entryId ? { ...entry, [field]: value } : entry
//     ))
//   }

//   const addItemToEntry = (entryId, itemType, itemData) => {
//     setDepartmentEntries(departmentEntries.map(entry => {
//       if (entry.id === entryId) {
//         const newItem = {
//           id: Date.now() + Math.random(),
//           type: itemType,
//           data: itemData,
//           ups: ''
//         }
//         return { ...entry, items: [...entry.items, newItem] }
//       }
//       return entry
//     }))
//   }

//   const removeItemFromEntry = (entryId, itemId) => {
//     setDepartmentEntries(departmentEntries.map(entry => {
//       if (entry.id === entryId) {
//         return { ...entry, items: entry.items.filter(item => item.id !== itemId) }
//       }
//       return entry
//     }))
//   }

//   const updateItemUps = (entryId, itemId, ups) => {
//     setDepartmentEntries(departmentEntries.map(entry => {
//       if (entry.id === entryId) {
//         return {
//           ...entry,
//           items: entry.items.map(item =>
//             item.id === itemId ? { ...item, ups } : item
//           )
//         }
//       }
//       return entry
//     }))
//   }

//   const getAvailableItemsForDepartment = (selectedDepartment, entryId) => {
//     const currentEntry = departmentEntries.find(entry => entry.id === entryId)
//     const selectedItemIds = currentEntry?.items.map(item => item.data.id) || []

//     const availableItems = []

//     // Get materials for this department
//     bomMaterials.forEach((material, index) => {
//       if (material.processes && material.processes.includes(selectedDepartment) &&
//           !selectedItemIds.includes(material.id)) {
//         availableItems.push({
//           id: material.id,
//           name: `Material ${index + 1} (${material.name})`,
//           type: 'material',
//           data: material
//         })
//       }
//     })

//     // Get consumables for this department
//     bomConsumables.forEach((consumable, index) => {
//       if (consumable.processes && consumable.processes.includes(selectedDepartment) &&
//           !selectedItemIds.includes(consumable.id)) {
//         availableItems.push({
//           id: consumable.id,
//           name: `Consumable ${index + 1} (${consumable.name})`,
//           type: 'consumable',
//           data: consumable
//         })
//       }
//     })

//     return availableItems
//   }

//   const getSelectedProcesses = () => {
//     const allProcesses = new Set()

//     bomMaterials.forEach((material) => {
//       if (material.processes) {
//         material.processes.forEach((process) => allProcesses.add(process))
//       }
//     })

//     bomConsumables.forEach((consumable) => {
//       if (consumable.processes) {
//         consumable.processes.forEach((process) => allProcesses.add(process))
//       }
//     })

//     return Array.from(allProcesses)
//   }

//   const getAvailableDepartmentsForEntry = (currentEntryId) => {
//     // Get all selected departments from other entries
//     const selectedDepartments = departmentEntries
//       .filter(entry => entry.id !== currentEntryId && entry.selectedDepartment)
//       .map(entry => entry.selectedDepartment)

//     // Return only departments that haven't been selected by other entries
//     return getSelectedProcesses().filter(process => !selectedDepartments.includes(process))
//   }

//   const addFileToEntry = (entryId, file) => {
//     setDepartmentEntries(departmentEntries.map(entry =>
//       entry.id === entryId
//         ? { ...entry, files: [...entry.files, { id: Date.now() + Math.random(), file }] }
//         : entry
//     ))
//   }

//   const removeFileFromEntry = (entryId, fileId) => {
//     setDepartmentEntries(departmentEntries.map(entry =>
//       entry.id === entryId
//         ? { ...entry, files: entry.files.filter(f => f.id !== fileId) }
//         : entry
//     ))
//   }

//   const moveToNextStatus = (deptId) => {
//     const statusFlow = ['pending', 'in-progress', 'completed']
//     setDepartments(
//       departments.map((dept) => {
//         if (dept.id === deptId) {
//           const currentIndex = statusFlow.indexOf(dept.status)
//           const nextStatus =
//             currentIndex < statusFlow.length - 1 ? statusFlow[currentIndex + 1] : dept.status
//           return { ...dept, status: nextStatus }
//         }
//         return dept
//       }),
//     )
//   }

//   const moveToPrevStatus = (deptId) => {
//     const statusFlow = ['pending', 'in-progress', 'completed']
//     setDepartments(
//       departments.map((dept) => {
//         if (dept.id === deptId) {
//           const currentIndex = statusFlow.indexOf(dept.status)
//           const prevStatus = currentIndex > 0 ? statusFlow[currentIndex - 1] : dept.status
//           return { ...dept, status: prevStatus }
//         }
//         return dept
//       }),
//     )
//   }

//   const getAvailableProcessesForMaterial = (materialId) => {
//     const material = bomMaterials.find((m) => m.id === materialId)
//     const selectedProcesses = material?.processes || []
//     return allProcesses.filter((process) => !selectedProcesses.includes(process))
//   }

//   const getAvailableProcessesForConsumable = (consumableId) => {
//     const consumable = bomConsumables.find((c) => c.id === consumableId)
//     const selectedProcesses = consumable?.processes || []
//     return allProcesses.filter((process) => !selectedProcesses.includes(process))
//   }

//   const updateBOMMaterial = (id, field, value) => {
//     setBomMaterials(
//       bomMaterials.map((material) =>
//         material.id === id ? { ...material, [field]: value } : material,
//       ),
//     )
//   }

//   const updateBOMConsumable = (id, field, value) => {
//     setBomConsumables(
//       bomConsumables.map((consumable) =>
//         consumable.id === id ? { ...consumable, [field]: value } : consumable,
//       ),
//     )
//   }

//   const addProcessToMaterial = (materialId, process) => {
//     setBomMaterials(
//       bomMaterials.map((material) =>
//         material.id === materialId
//           ? {
//               ...material,
//               processes: material.processes
//                 ? material.processes.includes(process)
//                   ? material.processes
//                   : [...material.processes, process]
//                 : [process],
//             }
//           : material,
//       ),
//     )
//     // Add to global selected processes
//     if (!selectedProcesses.includes(process)) {
//       setSelectedProcesses([...selectedProcesses, process])
//     }
//   }

//   const addProcessToConsumable = (consumableId, process) => {
//     setBomConsumables(
//       bomConsumables.map((consumable) =>
//         consumable.id === consumableId
//           ? {
//               ...consumable,
//               processes: consumable.processes
//                 ? consumable.processes.includes(process)
//                   ? consumable.processes
//                   : [...consumable.processes, process]
//                 : [process],
//             }
//           : consumable,
//       ),
//     )
//     // Add to global selected processes
//     if (!selectedProcesses.includes(process)) {
//       setSelectedProcesses([...selectedProcesses, process])
//     }
//   }

//   const removeProcessFromMaterial = (materialId, process) => {
//     setBomMaterials(
//       bomMaterials.map((material) =>
//         material.id === materialId
//           ? {
//               ...material,
//               processes: material.processes ? material.processes.filter((p) => p !== process) : [],
//             }
//           : material,
//       ),
//     )
//   }

//   const removeProcessFromConsumable = (consumableId, process) => {
//     setBomConsumables(
//       bomConsumables.map((consumable) =>
//         consumable.id === consumableId
//           ? {
//               ...consumable,
//               processes: consumable.processes
//                 ? consumable.processes.filter((p) => p !== process)
//                 : [],
//             }
//           : consumable,
//       ),
//     )
//   }

//   const getUsedDepartments = () => {
//     return departments.map((dept) => dept.department).filter((dept) => dept !== '')
//   }

//   const getAvailableDepartments = (currentDept) => {
//     const used = getUsedDepartments()
//     return allDepartments.filter((dept) => !used.includes(dept) || dept === currentDept)
//   }

//   const updateDepartment = (id, field, value) => {
//     setDepartments(departments.map((dept) => (dept.id === id ? { ...dept, [field]: value } : dept)))
//   }

//   const addFileToDatarow = (deptId, file) => {
//     setDepartments(
//       departments.map((dept) =>
//         dept.id === deptId
//           ? { ...dept, files: [...dept.files, { id: Date.now() + Math.random(), file }] }
//           : dept,
//       ),
//     )
//   }

//   const removeFileFromDepartment = (deptId, fileId) => {
//     setDepartments(
//       departments.map((dept) =>
//         dept.id === deptId ? { ...dept, files: dept.files.filter((f) => f.id !== fileId) } : dept,
//       ),
//     )
//   }

//   const changeStep = (direction) => {
//     if (direction === 1 && currentStep < 5) {
//       if (currentStep === 2) {
//         generateBOM()
//       }
//       if (currentStep === 3) {
//         generateDepartments()
//       }
//       setCurrentStep(currentStep + 1)
//     } else if (direction === -1 && currentStep > 1) {
//       setCurrentStep(currentStep - 1)
//     }
//   }

//   const downloadDesignFile = () => {
//     // Mock download function
//     alert('Downloading design file...')
//   }

//   const downloadRecipeData = () => {
//     const recipeData = {
//       jobNo,
//       materials: selectedMaterials,
//       consumables: selectedConsumables,
//       processes: selectedProcesses,
//       timestamp: new Date().toISOString(),
//     }

//     const dataStr =
//       'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(recipeData, null, 2))
//     const downloadAnchorNode = document.createElement('a')
//     downloadAnchorNode.setAttribute('href', dataStr)
//     downloadAnchorNode.setAttribute(
//       'download',
//       `recipe_${jobNo}_${new Date().toISOString().split('T')[0]}.json`,
//     )
//     document.body.appendChild(downloadAnchorNode)
//     downloadAnchorNode.click()
//     downloadAnchorNode.remove()
//   }

//   return (
//     <div className="recipe-wizard">
//       <style jsx>{`
//         .recipe-wizard {
//           max-width: 1200px;
//           margin: 0 auto;
//           font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
//         }

//         .wizard-container {
//           background: white;
//           border-radius: 12px;
//           box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//           overflow: hidden;
//         }

//         .wizard-header {
//           background: linear-gradient(135deg, #0061ed 0%, #0052cc 100%);
//           color: white;
//           padding: 16px 24px;
//           text-align: center;
//         }

//         .job-info {
//           font-size: 18px;
//           font-weight: 600;
//         }

//         .download-section {
//           text-align: center;
//           padding: 40px;
//         }

//         .download-btn {
//           background: #0061ed;
//           color: white;
//           border: none;
//           padding: 12px 24px;
//           border-radius: 6px;
//           cursor: pointer;
//           font-size: 14px;
//           margin: 0 8px;
//           transition: all 0.3s ease;
//         }

//         .download-btn:hover {
//           background: #0052cc;
//         }

//         .steps-container {
//           display: flex;
//           background: #f8f9fa;
//           border-bottom: 1px solid #e9ecef;
//         }

//         .step-item {
//           flex: 1;
//           padding: 12px;
//           text-align: center;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           position: relative;
//         }

//         .step-item.active {
//           background: #e3dfdf;
//           color: #0061ed;
//           font-weight: 600;
//         }

//         .step-item.completed {
//           background: #28a745;
//           color: white;
//         }

//         .step-item.inactive {
//           background: #f8f9fa;
//           color: #6c757d;
//         }

//         .step-separator {
//           position: absolute;
//           right: 0;
//           top: 50%;
//           transform: translateY(-50%);
//           width: 1px;
//           height: 20px;
//           background: #dee2e6;
//         }

//         .step-number {
//           font-size: 14px;
//         }

//         .step-title {
//           font-size: 12px;
//           margin-top: 2px;
//         }

//         .content {
//           padding: 20px;
//         }

//         .section-title {
//           font-size: 16px;
//           font-weight: 600;
//           color: #495057;
//           margin-bottom: 12px;
//         }

//         .two-column-layout {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 20px;
//         }

//         .column-section {
//           background: #f8f9fa;
//           border-radius: 8px;
//           padding: 16px;
//         }

//         .search-container {
//           position: relative;
//           margin-bottom: 12px;
//         }

//         .search-icon {
//           position: absolute;
//           left: 12px;
//           top: 50%;
//           transform: translateY(-50%);
//           font-size: 14px;
//         }

//         .search-input {
//           width: 100%;
//           padding: 8px 12px 8px 36px;
//           border: 2px solid #e9ecef;
//           border-radius: 6px;
//           font-size: 14px;
//           outline: none;
//           transition: border-color 0.3s ease;
//         }

//         .search-input:focus {
//           border-color: #0061ed;
//         }

//         .materials-dropdown {
//           border: 2px solid #e9ecef;
//           border-radius: 6px;
//           background: white;
//           max-height: 160px;
//           overflow-y: auto;
//         }

//         .material-item {
//           padding: 8px 12px;
//           cursor: pointer;
//           transition: background-color 0.2s ease;
//           border-bottom: 1px solid #f8f9fa;
//           font-size: 14px;
//         }

//         .material-item:hover {
//           background: #f8f9fa;
//         }

//         .material-item.selected {
//           background: #0061ed;
//           color: white;
//         }

//         .material-item.selected:hover {
//           background: #0061ed;
//         }

//         .selected-materials {
//           margin-top: 12px;
//         }

//         .material-tag {
//           display: inline-block;
//           background: #e3f2fd;
//           color: #1976d2;
//           padding: 6px 10px;
//           margin: 3px;
//           border-radius: 16px;
//           font-size: 12px;
//         }

//         .consumable-tag {
//           display: inline-block;
//           background: #fff3e0;
//           color: #f57c00;
//           padding: 6px 10px;
//           margin: 3px;
//           border-radius: 16px;
//           font-size: 12px;
//         }

//         .process-tag {
//           display: inline-block;
//           background: #e8f5e8;
//           color: #2e7d32;
//           padding: 6px 10px;
//           margin: 3px;
//           border-radius: 16px;
//           font-size: 12px;
//         }

//         .selected-process-tag {
//           margin-top: 8px;
//           padding: 4px 0;
//         }

//         .type-badge {
//           padding: 4px 8px;
//           border-radius: 12px;
//           font-size: 10px;
//           font-weight: 600;
//           text-transform: uppercase;
//         }

//         .material-badge {
//           background: #e3f2fd;
//           color: #1976d2;
//         }

//         .consumable-badge {
//           background: #fff3e0;
//           color: #f57c00;
//         }

//         .material-tag .remove-btn,
//         .consumable-tag .remove-btn,
//         .process-tag .remove-btn {
//           margin-left: 6px;
//           cursor: pointer;
//           font-weight: bold;
//           transition: color 0.2s ease;
//         }

//         .material-tag .remove-btn:hover,
//         .consumable-tag .remove-btn:hover,
//         .process-tag .remove-btn:hover {
//           color: #d32f2f;
//         }

//         .bom-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
//           gap: 16px;
//           margin-bottom: 16px;
//         }

//         .bom-card {
//           background: #f8f9fa;
//           border: 2px solid #e9ecef;
//           border-radius: 8px;
//           padding: 16px;
//         }

//         .bom-card.consumable {
//           background: #fff8f0;
//           border-color: #ffcc80;
//         }

//         .bom-card.material {
//           background: #f0f8ff;
//           border-color: #87ceeb;
//         }

//         .bom-card-title {
//           font-size: 14px;
//           font-weight: 500;
//           color: #495057;
//           margin-bottom: 12px;
//         }

//         .form-group {
//           margin-bottom: 12px;
//         }

//         .form-label {
//           display: block;
//           margin-bottom: 3px;
//           font-weight: 500;
//           color: #495057;
//           font-size: 13px;
//         }

//         .form-input {
//           width: 100%;
//           padding: 6px 10px;
//           border: 1px solid #ced4da;
//           border-radius: 4px;
//           font-size: 13px;
//           outline: none;
//           transition: border-color 0.3s ease;
//         }

//         .form-input:focus {
//           border-color: #0061ed;
//         }

//         .form-input[readonly] {
//           background: #f8f9fa;
//         }

//         .table-container {
//           overflow-x: auto;
//           border: 1px solid #e9ecef;
//           border-radius: 8px;
//           background: white;
//         }

//         .department-table {
//           width: 100%;
//           border-collapse: collapse;
//           min-width: 600px;
//         }

//         .department-table th {
//           padding: 8px;
//           text-align: left;
//           border-bottom: 1px solid #e9ecef;
//           font-weight: 600;
//           color: #495057;
//           background: #f8f9fa;
//           font-size: 14px;
//         }

//         .department-table td {
//           padding: 8px;
//           border-bottom: 1px solid #e9ecef;
//           font-size: 12px;
//         }

//         .department-table tr {
//           transition: background-color 0.2s ease;
//         }

//         .department-table tr:hover {
//           background: #f8f9fa;
//         }

//         .file-input {
//           width: 100%;
//           padding: 6px;
//           border: 1px solid #ced4da;
//           border-radius: 4px;
//           font-size: 11px;
//           margin-bottom: 5px;
//         }

//         .file-list {
//           margin-top: 5px;
//         }

//         .file-item {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           background: #f8f9fa;
//           padding: 4px 8px;
//           border-radius: 4px;
//           margin-bottom: 3px;
//           font-size: 11px;
//         }

//         .file-name {
//           color: #495057;
//           flex: 1;
//           overflow: hidden;
//           text-overflow: ellipsis;
//           white-space: nowrap;
//         }

//         .file-remove {
//           color: #dc3545;
//           cursor: pointer;
//           font-weight: bold;
//           margin-left: 8px;
//         }

//         .file-remove:hover {
//           color: #c82333;
//         }

//         .btn {
//           border: none;
//           padding: 8px 16px;
//           border-radius: 6px;
//           cursor: pointer;
//           font-size: 12px;
//           transition: all 0.3s ease;
//           outline: none;
//         }

//         .btn-primary {
//           background: #0061ed;
//           color: white;
//         }

//         .btn-primary:hover {
//           background: #0052cc;
//         }

//         .btn-success {
//           background: #28a745;
//           color: white;
//         }

//         .btn-success:hover {
//           background: #218838;
//         }

//         .btn-danger {
//           background: #dc3545;
//           color: white;
//           padding: 4px 8px;
//           font-size: 11px;
//         }

//         .btn-danger:hover {
//           background: #c82333;
//         }

//         .download-buttons {
//           display: flex;
//           justify-content: center;
//           gap: 20px;
//           margin-top: 20px;
//         }

//         .btn-secondary {
//           background: #6c757d;
//           color: white;
//           padding: 10px 20px;
//           font-size: 14px;
//         }

//         .btn-secondary:hover {
//           background: #5a6268;
//         }

//         .btn:disabled {
//           opacity: 0.5;
//           cursor: not-allowed;
//         }

//         .btn:disabled:hover {
//           background: #6c757d;
//         }

//         .actions-container {
//           display: flex;
//           justify-content: space-between;
//           padding: 16px;
//           border-top: 1px solid #e9ecef;
//         }

//         .btn-large {
//           padding: 10px 20px;
//           font-size: 14px;
//         }

//         .processes-display {
//           background: #f8f9fa;
//           border-radius: 8px;
//           padding: 16px;
//           margin-bottom: 16px;
//         }

//         .processes-list {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 8px;
//         }

//         .process-display-tag {
//           background: #e8f5e8;
//           color: #2e7d32;
//           padding: 4px 8px;
//           border-radius: 12px;
//           font-size: 12px;
//           font-weight: 500;
//         }

//         /* Mobile Responsive Styles */
//         @media (max-width: 768px) {
//           .recipe-wizard {
//             padding: 8px;
//           }

//           .download-buttons {
//             flex-direction: column;
//             gap: 12px;
//           }

//           .wizard-header {
//             padding: 12px 16px;
//           }

//           .two-column-layout {
//             grid-template-columns: 1fr;
//             gap: 16px;
//           }

//           .steps-container {
//             flex-direction: column;
//           }

//           .step-item {
//             padding: 8px;
//             border-bottom: 1px solid #e9ecef;
//           }

//           .step-separator {
//             display: none;
//           }

//           .content {
//             padding: 12px;
//           }

//           .section-title {
//             font-size: 14px;
//           }

//           .bom-grid {
//             grid-template-columns: 1fr;
//             gap: 12px;
//           }

//           .bom-card {
//             padding: 12px;
//           }

//           .table-container {
//             font-size: 12px;
//           }

//           .department-table th,
//           .department-table td {
//             padding: 6px;
//           }

//           .actions-container {
//             flex-direction: column;
//             gap: 10px;
//             padding: 12px;
//           }

//           .btn-large {
//             width: 100%;
//           }
//         }

//         @media (max-width: 480px) {
//           .recipe-wizard {
//             padding: 4px;
//           }

//           .content {
//             padding: 8px;
//           }

//           .bom-card {
//             padding: 8px;
//           }

//           .form-input {
//             font-size: 14px;
//           }

//           .search-input {
//             font-size: 14px;
//           }

//           .material-tag,
//           .consumable-tag,
//           .process-tag {
//             font-size: 10px;
//             padding: 4px 8px;
//           }
//         }

//         /* Tablet Styles */
//         @media (min-width: 769px) and (max-width: 1024px) {
//           .bom-grid {
//             grid-template-columns: repeat(2, 1fr);
//           }
//         }

//         /* Large Screen Styles */
//         @media (min-width: 1200px) {
//           .bom-grid {
//             grid-template-columns: repeat(3, 1fr);
//           }
//         }
//       `}</style>

//       <div className="wizard-container" style={{ background: '#FFA07A' }}>
//         {/* Header - Centered Job Number Only */}
//         <div className="wizard-header">
//           <div className="job-info">Job No: {jobNo}</div>
//         </div>

//         {/* Steps */}
//         <div className="steps-container">
//           {[
//             { num: 1, title: 'Download' },
//             { num: 2, title: 'Recipe Selection' },
//             { num: 3, title: 'BOM & Process' },
//             { num: 4, title: 'Department Files' },
//             // { num: 5, title: 'Process Management' },
//           ].map((step, index) => (
//             <div
//               key={step.num}
//               className={`step-item ${
//                 step.num === currentStep
//                   ? 'active'
//                   : step.num < currentStep
//                     ? 'completed'
//                     : 'inactive'
//               }`}
//               onClick={() => {
//                 if (step.num <= currentStep + 1) {
//                   if (
//                     step.num === 3 &&
//                     (selectedMaterials.length > 0 || selectedConsumables.length > 0)
//                   ) {
//                     generateBOM()
//                   }
//                   if (step.num === 4 && selectedProcesses.length > 0) {
//                     generateDepartments()
//                   }
//                   setCurrentStep(step.num)
//                 }
//               }}
//             >
//               <div className="step-number">Step {step.num}</div>
//               <div className="step-title">{step.title}</div>
//               {index < 4 && <div className="step-separator"></div>}
//             </div>
//           ))}
//         </div>

//         {/* Content */}
//         <div className="content">
//           {/* Step 1: Download */}
//           {currentStep === 1 && (
//             <div className="download-section">
//               <h3 className="section-title">📥 Download File</h3>
//               <div className="download-buttons">
//                 <button className="download-btn" onClick={downloadRecipeData}>
//                   Download Design File
//                 </button>
//               </div>
//             </div>
//           )}

//           {/* Step 2: Recipe Selection */}
//           {currentStep === 2 && (
//             <div className="two-column-layout">
//               {/* Materials Section */}
//               <div className="column-section">
//                 <h3 className="section-title">📦 Select Recipe Materials</h3>

//                 <div className="search-container">
//                   <div className="search-icon">🔍</div>
//                   <input
//                     type="text"
//                     placeholder="Search materials..."
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                     className="search-input"
//                   />
//                 </div>

//                 <div className="materials-dropdown">
//                   {filteredMaterials.map((material) => (
//                     <div
//                       key={material}
//                       onClick={() => handleMaterialClick(material)}
//                       className={`material-item ${selectedMaterials.includes(material) ? 'selected' : ''}`}
//                     >
//                       {material}
//                     </div>
//                   ))}
//                 </div>

//                 <div className="selected-materials">
//                   {selectedMaterials.map((material) => (
//                     <span key={material} className="material-tag">
//                       {material}
//                       <span onClick={() => removeMaterial(material)} className="remove-btn">
//                         ×
//                       </span>
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               {/* Consumables Section */}
//               <div className="column-section">
//                 <h3 className="section-title">🧪 Consumables</h3>

//                 <div className="search-container">
//                   <div className="search-icon">🔍</div>
//                   <input
//                     type="text"
//                     placeholder="Search consumables..."
//                     value={consumableSearchTerm}
//                     onChange={(e) => setConsumableSearchTerm(e.target.value)}
//                     className="search-input"
//                   />
//                 </div>

//                 <div className="materials-dropdown">
//                   {filteredConsumables.map((consumable) => (
//                     <div
//                       key={consumable}
//                       onClick={() => handleConsumableClick(consumable)}
//                       className={`material-item ${selectedConsumables.includes(consumable) ? 'selected' : ''}`}
//                     >
//                       {consumable}
//                     </div>
//                   ))}
//                 </div>

//                 <div className="selected-materials">
//                   {selectedConsumables.map((consumable) => (
//                     <span key={consumable} className="consumable-tag">
//                       {consumable}
//                       <span onClick={() => removeConsumable(consumable)} className="remove-btn">
//                         ×
//                       </span>
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Step 3: BOM Creation & Process Selection */}
//           {currentStep === 3 && (
//             <div>
//               <h3 className="section-title">Create Bill of Materials</h3>

//               <div className="bom-grid">
//                 {bomMaterials.map((material, index) => (
//                   <div key={material.id} className="bom-card material">
//                     <h4 className="bom-card-title">Material {index + 1}</h4>

//                     <div className="form-group">
//                       <label className="form-label">Material Type</label>
//                       <input type="text" value={material.name} readOnly className="form-input" />
//                     </div>

//                     <div className="form-group">
//                       <label className="form-label">Size</label>
//                       <select
//                         value={material.size}
//                         onChange={(e) => updateBOMMaterial(material.id, 'size', e.target.value)}
//                         className="form-input"
//                       >
//                         <option value="">Select Size</option>
//                         {sizeOptions.map((size) => (
//                           <option key={size} value={size}>
//                             {size}
//                           </option>
//                         ))}
//                       </select>
//                     </div>

//                     <div className="form-group">
//                       <label className="form-label">Ups</label>
//                       <input
//                         type="text"
//                         placeholder="Enter Ups"
//                         value={material.ups}
//                         onChange={(e) => updateBOMMaterial(material.id, 'ups', e.target.value)}
//                         className="form-input"
//                       />
//                     </div>

//                     <div className="form-group">
//                       <label className="form-label">Quantity</label>
//                       <input
//                         type="number"
//                         placeholder="Enter Quantity"
//                         value={material.quantity}
//                         onChange={(e) => updateBOMMaterial(material.id, 'quantity', e.target.value)}
//                         className="form-input"
//                       />
//                     </div>

//                     <div className="form-group">
//                       <label className="form-label">Process</label>
//                       <select
//                         value=""
//                         onChange={(e) => {
//                           if (e.target.value) {
//                             addProcessToMaterial(material.id, e.target.value)
//                           }
//                         }}
//                         className="form-input"
//                       >
//                         <option value="">Select Process</option>
//                         {getAvailableProcessesForMaterial(material.id).map((process) => (
//                           <option key={process} value={process}>
//                             {process}
//                           </option>
//                         ))}
//                       </select>
//                     </div>

//                     {/* Show selected processes as tags below the dropdown */}
//                     {material.processes && material.processes.length > 0 && (
//                       <div className="selected-process-tag">
//                         {material.processes.map((process) => (
//                           <span key={process} className="process-tag">
//                             {process}
//                             <span
//                               onClick={() => removeProcessFromMaterial(material.id, process)}
//                               className="remove-btn"
//                             >
//                               ×
//                             </span>
//                           </span>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 ))}

//                 {bomConsumables.map((consumable, index) => (
//                   <div key={consumable.id} className="bom-card consumable">
//                     <h4 className="bom-card-title">Consumable {index + 1}</h4>

//                     <div className="form-group">
//                       <label className="form-label">Consumable Type</label>
//                       <input type="text" value={consumable.name} readOnly className="form-input" />
//                     </div>

//                     <div className="form-group">
//                       <label className="form-label">Quantity</label>
//                       <input
//                         type="number"
//                         placeholder="Enter Quantity"
//                         value={consumable.quantity}
//                         onChange={(e) =>
//                           updateBOMConsumable(consumable.id, 'quantity', e.target.value)
//                         }
//                         className="form-input"
//                       />
//                     </div>

//                     <div className="form-group">
//                       <label className="form-label">Process</label>
//                       <select
//                         value=""
//                         onChange={(e) => {
//                           if (e.target.value) {
//                             addProcessToConsumable(consumable.id, e.target.value)
//                           }
//                         }}
//                         className="form-input"
//                       >
//                         <option value="">Select Process</option>
//                         {getAvailableProcessesForConsumable(consumable.id).map((process) => (
//                           <option key={process} value={process}>
//                             {process}
//                           </option>
//                         ))}
//                       </select>
//                     </div>

//                     {/* Show selected processes as tags below the dropdown */}
//                     {consumable.processes && consumable.processes.length > 0 && (
//                       <div className="selected-process-tag">
//                         {consumable.processes.map((process) => (
//                           <span key={process} className="process-tag">
//                             {process}
//                             <span
//                               onClick={() => removeProcessFromConsumable(consumable.id, process)}
//                               className="remove-btn"
//                             >
//                               ×
//                             </span>
//                           </span>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Step 4: Department Files */}
//           {currentStep === 4 && (
//             <div>
//               <h3 className="section-title">📁 Department Assignment</h3>

//               <div style={{ marginBottom: '20px' }}>
//                 <button
//                   onClick={addDepartmentEntry}
//                   className="btn btn-primary"
//                   style={{ marginBottom: '15px' }}
//                 >
//                   + Add Department Entry
//                 </button>
//               </div>

//               {/* Department Table */}
//               <div className="table-container">
//                 <table className="department-table">
//                   <thead>
//                     <tr>
//                       <th style={{ width: '80px' }}>S.No</th>
//                       <th style={{ width: '200px' }}>Department</th>
//                       <th style={{ width: '120px' }}>Time</th>
//                       <th style={{ width: '150px' }}>Machine</th>
//                       <th style={{ width: '200px' }}>File Upload</th>
//                       <th style={{ width: '100px' }}>Action</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {departmentEntries.map((entry) => (
//                       <tr key={entry.id}>
//                         <td style={{ textAlign: 'center', fontWeight: '600' }}>
//                           {entry.serialNumber}
//                         </td>
//                         <td>
//                           <select
//                             value={entry.selectedDepartment}
//                             onChange={(e) => updateDepartmentEntry(entry.id, 'selectedDepartment', e.target.value)}
//                             className="form-input"
//                             style={{ width: '100%' }}
//                           >
//                             <option value="">Select Department</option>
//                             {/* Show current selection if already selected */}
//                             {entry.selectedDepartment && !getAvailableDepartmentsForEntry(entry.id).includes(entry.selectedDepartment) && (
//                               <option value={entry.selectedDepartment}>
//                                 {entry.selectedDepartment}
//                               </option>
//                             )}
//                             {/* Show available departments */}
//                             {getAvailableDepartmentsForEntry(entry.id).map((process) => (
//                               <option key={process} value={process}>
//                                 {process}
//                               </option>
//                             ))}
//                           </select>
//                         </td>
//                         <td>
//                           {entry.selectedDepartment ? (
//                             <input
//                               type="text"
//                               value={entry.time}
//                               onChange={(e) => updateDepartmentEntry(entry.id, 'time', e.target.value)}
//                               className="form-input"
//                               placeholder="2 hours"
//                               style={{ width: '100%' }}
//                             />
//                           ) : (
//                             <span style={{ color: '#6c757d', fontSize: '12px' }}>-</span>
//                           )}
//                         </td>
//                         <td>
//                           {entry.selectedDepartment ? (
//                             <select
//                               value={entry.machine}
//                               onChange={(e) => updateDepartmentEntry(entry.id, 'machine', e.target.value)}
//                               className="form-input"
//                               style={{ width: '100%' }}
//                             >
//                               <option value="">Select Machine</option>
//                               <option value="Machine 1">CNC Router</option>
//                               <option value="Machine 2">Cutting</option>
//                               <option value="Machine 3">Waterjet Cutting</option>
//                               <option value="Machine 4">Pad Printing</option>
//                             </select>
//                           ) : (
//                             <span style={{ color: '#6c757d', fontSize: '12px' }}>-</span>
//                           )}
//                         </td>
//                         <td>
//                           {entry.selectedDepartment ? (
//                             <div>
//                               <input
//                                 type="file"
//                                 multiple
//                                 accept=".pdf,.doc,.docx,.jpg,.png,.dwg,.ai,.psd"
//                                 onChange={(e) => {
//                                   Array.from(e.target.files).forEach(file => {
//                                     addFileToEntry(entry.id, file)
//                                   })
//                                   e.target.value = ''
//                                 }}
//                                 className="file-input"
//                                 style={{ marginBottom: '5px' }}
//                               />
//                               {entry.files.length > 0 && (
//                                 <div style={{ fontSize: '11px', color: '#495057' }}>
//                                   {entry.files.length} file(s) uploaded
//                                 </div>
//                               )}
//                             </div>
//                           ) : (
//                             <span style={{ color: '#6c757d', fontSize: '12px' }}>No file chosen</span>
//                           )}
//                         </td>
//                         <td style={{ textAlign: 'center' }}>
//                           <button
//                             onClick={() => removeDepartmentEntry(entry.id)}
//                             className="btn btn-danger"
//                             style={{ padding: '6px 12px', fontSize: '12px' }}
//                           >
//                             Delete
//                           </button>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>

//               {/* Department Materials and Consumables Display */}
//               {departmentEntries.filter(entry => entry.selectedDepartment).map((entry) => (
//                 <div key={`materials-${entry.id}`} style={{
//                   marginTop: '20px',
//                   border: '1px solid #dee2e6',
//                   borderRadius: '8px',
//                   overflow: 'hidden'
//                 }}>
//                   <div style={{
//                     background: '#e8f5e8',
//                     padding: '12px 16px',
//                     fontWeight: '600',
//                     fontSize: '16px',
//                     color: '#2e7d32',
//                     borderBottom: '1px solid #dee2e6'
//                   }}>
//                     {entry.selectedDepartment} - Materials & Consumables
//                   </div>

//                   <div className="table-container">
//                     <table className="department-table">
//                       <thead>
//                         <tr style={{ background: '#f8f9fa' }}>
//                           <th style={{ width: '80px' }}>S.No</th>
//                           <th style={{ width: '100px' }}>Type</th>
//                           <th>Name</th>
//                           <th style={{ width: '120px' }}>No of UPS</th>
//                           <th style={{ width: '100px' }}>Action</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {/* Materials for this department */}
//                         {bomMaterials
//                           .filter(material => material.processes && material.processes.includes(entry.selectedDepartment))
//                           .map((material, index) => (
//                             <tr key={`material-${material.id}`}>
//                               <td style={{ textAlign: 'center' }}>{index + 1}</td>
//                               <td>
//                                 <span className="type-badge material-badge">Material</span>
//                               </td>
//                               <td style={{ fontWeight: '500' }}>
//                                 📦 {material.name}
//                               </td>
//                               <td>
//                                 <input
//                                   type="number"
//                                   value={material.ups}
//                                   onChange={(e) => updateBOMMaterial(material.id, 'ups', e.target.value)}
//                                   className="form-input"
//                                   placeholder="UPS"
//                                   style={{ width: '100%' }}
//                                 />
//                               </td>
//                               <td style={{ textAlign: 'center' }}>
//                                 <button
//                                   onClick={() => removeProcessFromMaterial(material.id, entry.selectedDepartment)}
//                                   className="btn btn-danger"
//                                   style={{ padding: '4px 8px', fontSize: '11px' }}
//                                 >
//                                   Remove
//                                 </button>
//                               </td>
//                             </tr>
//                           ))}

//                         {/* Consumables for this department */}
//                         {bomConsumables
//                           .filter(consumable => consumable.processes && consumable.processes.includes(entry.selectedDepartment))
//                           .map((consumable, index) => {
//                             const materialCount = bomMaterials.filter(material =>
//                               material.processes && material.processes.includes(entry.selectedDepartment)
//                             ).length;
//                             return (
//                               <tr key={`consumable-${consumable.id}`}>
//                                 <td style={{ textAlign: 'center' }}>{materialCount + index + 1}</td>
//                                 <td>
//                                   <span className="type-badge consumable-badge">Consumable</span>
//                                 </td>
//                                 <td style={{ fontWeight: '500' }}>
//                                   🧪 {consumable.name}
//                                 </td>
//                                 <td>
//                                   <input
//                                     type="number"
//                                     value={consumable.quantity}
//                                     onChange={(e) => updateBOMConsumable(consumable.id, 'quantity', e.target.value)}
//                                     className="form-input"
//                                     placeholder="Quantity"
//                                     style={{ width: '100%' }}
//                                   />
//                                 </td>
//                                 <td style={{ textAlign: 'center' }}>
//                                   <button
//                                     onClick={() => removeProcessFromConsumable(consumable.id, entry.selectedDepartment)}
//                                     className="btn btn-danger"
//                                     style={{ padding: '4px 8px', fontSize: '11px' }}
//                                   >
//                                     Remove
//                                   </button>
//                                 </td>
//                               </tr>
//                             );
//                           })}
//                       </tbody>
//                     </table>
//                   </div>

//                   {/* Show message if no materials or consumables */}
//                   {bomMaterials.filter(material => material.processes && material.processes.includes(entry.selectedDepartment)).length === 0 &&
//                    bomConsumables.filter(consumable => consumable.processes && consumable.processes.includes(entry.selectedDepartment)).length === 0 && (
//                     <div style={{ padding: '20px', textAlign: 'center', color: '#6c757d' }}>
//                       No materials or consumables assigned to {entry.selectedDepartment}
//                     </div>
//                   )}
//                 </div>
//               ))}

//               {departmentEntries.length === 0 && (
//                 <div style={{ textAlign: 'center', padding: '40px', color: '#6c757d' }}>
//                   <p>No department entries added yet. Click "Add Department Entry" to get started.</p>
//                 </div>
//               )}
//             </div>
//           )}
//         </div>

//         {/* Actions */}
//         <div className="actions-container">
//           <button
//             onClick={() => changeStep(-1)}
//             disabled={currentStep === 1}
//             className="btn btn-secondary btn-large"
//           >
//             Previous
//           </button>
//           <button onClick={() => changeStep(1)} className="btn btn-primary btn-large">
//             {currentStep === 4 ? 'Finish' : 'Next'}
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default RecipeWizard

import React, { useState, useEffect } from 'react'

const RecipeWizard = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [selectedConsumables, setSelectedConsumables] = useState([])
  const [selectedProcesses, setSelectedProcesses] = useState([])
  const [bomMaterials, setBomMaterials] = useState([])
  const [bomConsumables, setBomConsumables] = useState([])
  const [departments, setDepartments] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [consumableSearchTerm, setConsumableSearchTerm] = useState('')
  const [processSearchTerm, setProcessSearchTerm] = useState('')
  const [departmentEntries, setDepartmentEntries] = useState([])
  const [nextSerialNumber, setNextSerialNumber] = useState(1)

  // Job information
  const jobNo = '14888a'

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
    'PRIMER SPRAY',
  ]

  const allProcesses = [
    'DTP',
    'UV Printing',
    'Screen Printing',
    'Laser Cutting',
    'CNC Machining',
    'Assembly',
    'Quality Control',
    'Packaging',
  ]

  const allDepartments = [
    'DTP',
    'UV Printing',
    'Screen Printing',
    'Laser Cutting',
    'CNC Machining',
    'Assembly',
    'Quality Control',
    'Packaging',
  ]
  const sizeOptions = ["8' x 4'", "4' x 4'", "6' x 3'", "10' x 5'", "12' x 6'"]
  const processOptions = [
    'DTP',
    'UV',
    'SCREEN',
    'LASER',
    'Cutting',
    'Drilling',
    'Polishing',
    'Assembly',
    'Finishing',
    'Packaging',
    'Quality Check',
  ]

  const filteredMaterials = allMaterials.filter((material) =>
    material.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const filteredConsumables = allConsumables.filter((consumable) =>
    consumable.toLowerCase().includes(consumableSearchTerm.toLowerCase()),
  )

  const filteredProcesses = allProcesses.filter((process) =>
    process.toLowerCase().includes(processSearchTerm.toLowerCase()),
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

  const handleProcessClick = (process) => {
    if (!selectedProcesses.includes(process)) {
      setSelectedProcesses([...selectedProcesses, process])
    }
  }

  const removeMaterial = (material) => {
    setSelectedMaterials(selectedMaterials.filter((m) => m !== material))
  }

  const removeConsumable = (consumable) => {
    setSelectedConsumables(selectedConsumables.filter((c) => c !== consumable))
  }

  const removeProcess = (process) => {
    setSelectedProcesses(selectedProcesses.filter((p) => p !== process))
  }

  const generateBOM = () => {
    const newBomMaterials = selectedMaterials.map((material) => ({
      id: Date.now() + Math.random(),
      name: material,
      size: '',
      ups: '',
      quantity: '',
      process: '',
      processes: [],
    }))

    const newBomConsumables = selectedConsumables.map((consumable) => ({
      id: Date.now() + Math.random(),
      name: consumable,
      quantity: '',
      process: '',
      processes: [],
    }))

    setBomMaterials(newBomMaterials)
    setBomConsumables(newBomConsumables)
  }

  const generateDepartments = () => {
    // Get all unique processes that were selected
    const allProcesses = new Set()

    bomMaterials.forEach((material) => {
      if (material.processes) {
        material.processes.forEach((process) => allProcesses.add(process))
      }
    })

    bomConsumables.forEach((consumable) => {
      if (consumable.processes) {
        consumable.processes.forEach((process) => allProcesses.add(process))
      }
    })

    // Reset department entries when regenerating and add first entry by default
    setDepartmentEntries([])
    setNextSerialNumber(1)

    // Add first department entry by default
    setTimeout(() => {
      addDepartmentEntry()
    }, 100)
  }

  const addDepartmentEntry = () => {
    const newEntry = {
      id: Date.now() + Math.random(),
      serialNumber: nextSerialNumber,
      selectedDepartment: '',
      time: '',
      machine: '',
      files: [],
      items: [], // Will contain selected materials and consumables
    }
    setDepartmentEntries([...departmentEntries, newEntry])
    setNextSerialNumber(nextSerialNumber + 1)
  }

  const removeDepartmentEntry = (entryId) => {
    setDepartmentEntries(departmentEntries.filter((entry) => entry.id !== entryId))
  }

  const updateDepartmentEntry = (entryId, field, value) => {
    setDepartmentEntries(
      departmentEntries.map((entry) =>
        entry.id === entryId ? { ...entry, [field]: value } : entry,
      ),
    )
  }

  const addItemToEntry = (entryId, itemType, itemData) => {
    setDepartmentEntries(
      departmentEntries.map((entry) => {
        if (entry.id === entryId) {
          const newItem = {
            id: Date.now() + Math.random(),
            type: itemType,
            data: itemData,
            ups: '',
          }
          return { ...entry, items: [...entry.items, newItem] }
        }
        return entry
      }),
    )
  }

  const removeItemFromEntry = (entryId, itemId) => {
    setDepartmentEntries(
      departmentEntries.map((entry) => {
        if (entry.id === entryId) {
          return { ...entry, items: entry.items.filter((item) => item.id !== itemId) }
        }
        return entry
      }),
    )
  }

  const updateItemUps = (entryId, itemId, ups) => {
    setDepartmentEntries(
      departmentEntries.map((entry) => {
        if (entry.id === entryId) {
          return {
            ...entry,
            items: entry.items.map((item) => (item.id === itemId ? { ...item, ups } : item)),
          }
        }
        return entry
      }),
    )
  }

  const getAvailableItemsForDepartment = (selectedDepartment, entryId) => {
    const currentEntry = departmentEntries.find((entry) => entry.id === entryId)
    const selectedItemIds = currentEntry?.items.map((item) => item.data.id) || []

    const availableItems = []

    // Get materials for this department
    bomMaterials.forEach((material, index) => {
      if (
        material.processes &&
        material.processes.includes(selectedDepartment) &&
        !selectedItemIds.includes(material.id)
      ) {
        availableItems.push({
          id: material.id,
          name: `Material ${index + 1} (${material.name})`,
          type: 'material',
          data: material,
        })
      }
    })

    // Get consumables for this department
    bomConsumables.forEach((consumable, index) => {
      if (
        consumable.processes &&
        consumable.processes.includes(selectedDepartment) &&
        !selectedItemIds.includes(consumable.id)
      ) {
        availableItems.push({
          id: consumable.id,
          name: `Consumable ${index + 1} (${consumable.name})`,
          type: 'consumable',
          data: consumable,
        })
      }
    })

    return availableItems
  }

  const getSelectedProcesses = () => {
    const allProcesses = new Set()

    bomMaterials.forEach((material) => {
      if (material.processes) {
        material.processes.forEach((process) => allProcesses.add(process))
      }
    })

    bomConsumables.forEach((consumable) => {
      if (consumable.processes) {
        consumable.processes.forEach((process) => allProcesses.add(process))
      }
    })

    return Array.from(allProcesses)
  }

  const getAvailableDepartmentsForEntry = (currentEntryId) => {
    // Get all selected departments from other entries
    const selectedDepartments = departmentEntries
      .filter((entry) => entry.id !== currentEntryId && entry.selectedDepartment)
      .map((entry) => entry.selectedDepartment)

    // Return only departments that haven't been selected by other entries
    return getSelectedProcesses().filter((process) => !selectedDepartments.includes(process))
  }

  const addFileToEntry = (entryId, file) => {
    setDepartmentEntries(
      departmentEntries.map((entry) =>
        entry.id === entryId
          ? { ...entry, files: [...entry.files, { id: Date.now() + Math.random(), file }] }
          : entry,
      ),
    )
  }

  const removeFileFromEntry = (entryId, fileId) => {
    setDepartmentEntries(
      departmentEntries.map((entry) =>
        entry.id === entryId
          ? { ...entry, files: entry.files.filter((f) => f.id !== fileId) }
          : entry,
      ),
    )
  }

  const moveToNextStatus = (deptId) => {
    const statusFlow = ['pending', 'in-progress', 'completed']
    setDepartments(
      departments.map((dept) => {
        if (dept.id === deptId) {
          const currentIndex = statusFlow.indexOf(dept.status)
          const nextStatus =
            currentIndex < statusFlow.length - 1 ? statusFlow[currentIndex + 1] : dept.status
          return { ...dept, status: nextStatus }
        }
        return dept
      }),
    )
  }

  const moveToPrevStatus = (deptId) => {
    const statusFlow = ['pending', 'in-progress', 'completed']
    setDepartments(
      departments.map((dept) => {
        if (dept.id === deptId) {
          const currentIndex = statusFlow.indexOf(dept.status)
          const prevStatus = currentIndex > 0 ? statusFlow[currentIndex - 1] : dept.status
          return { ...dept, status: prevStatus }
        }
        return dept
      }),
    )
  }

  const getAvailableProcessesForMaterial = (materialId) => {
    const material = bomMaterials.find((m) => m.id === materialId)
    const selectedProcesses = material?.processes || []
    return allProcesses.filter((process) => !selectedProcesses.includes(process))
  }

  const getAvailableProcessesForConsumable = (consumableId) => {
    const consumable = bomConsumables.find((c) => c.id === consumableId)
    const selectedProcesses = consumable?.processes || []
    return allProcesses.filter((process) => !selectedProcesses.includes(process))
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

  const addProcessToMaterial = (materialId, process) => {
    setBomMaterials(
      bomMaterials.map((material) =>
        material.id === materialId
          ? {
              ...material,
              processes: material.processes
                ? material.processes.includes(process)
                  ? material.processes
                  : [...material.processes, process]
                : [process],
            }
          : material,
      ),
    )
    // Add to global selected processes
    if (!selectedProcesses.includes(process)) {
      setSelectedProcesses([...selectedProcesses, process])
    }
  }

  const addProcessToConsumable = (consumableId, process) => {
    setBomConsumables(
      bomConsumables.map((consumable) =>
        consumable.id === consumableId
          ? {
              ...consumable,
              processes: consumable.processes
                ? consumable.processes.includes(process)
                  ? consumable.processes
                  : [...consumable.processes, process]
                : [process],
            }
          : consumable,
      ),
    )
    // Add to global selected processes
    if (!selectedProcesses.includes(process)) {
      setSelectedProcesses([...selectedProcesses, process])
    }
  }

  const removeProcessFromMaterial = (materialId, process) => {
    setBomMaterials(
      bomMaterials.map((material) =>
        material.id === materialId
          ? {
              ...material,
              processes: material.processes ? material.processes.filter((p) => p !== process) : [],
            }
          : material,
      ),
    )
  }

  const removeProcessFromConsumable = (consumableId, process) => {
    setBomConsumables(
      bomConsumables.map((consumable) =>
        consumable.id === consumableId
          ? {
              ...consumable,
              processes: consumable.processes
                ? consumable.processes.filter((p) => p !== process)
                : [],
            }
          : consumable,
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

  const addFileToDatarow = (deptId, file) => {
    setDepartments(
      departments.map((dept) =>
        dept.id === deptId
          ? { ...dept, files: [...dept.files, { id: Date.now() + Math.random(), file }] }
          : dept,
      ),
    )
  }

  const removeFileFromDepartment = (deptId, fileId) => {
    setDepartments(
      departments.map((dept) =>
        dept.id === deptId ? { ...dept, files: dept.files.filter((f) => f.id !== fileId) } : dept,
      ),
    )
  }

  const changeStep = (direction) => {
    if (direction === 1 && currentStep < 5) {
      if (currentStep === 2) {
        generateBOM()
      }
      if (currentStep === 3) {
        generateDepartments()
      }
      setCurrentStep(currentStep + 1)
    } else if (direction === -1 && currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  // Add useEffect to add first department entry when reaching step 4
  useEffect(() => {
    if (currentStep === 4 && departmentEntries.length === 0) {
      addDepartmentEntry()
    }
  }, [currentStep])

  const downloadDesignFile = () => {
    // Mock download function
    alert('Downloading design file...')
  }

  const downloadRecipeData = () => {
    const recipeData = {
      jobNo,
      materials: selectedMaterials,
      consumables: selectedConsumables,
      processes: selectedProcesses,
      timestamp: new Date().toISOString(),
    }

    const dataStr =
      'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(recipeData, null, 2))
    const downloadAnchorNode = document.createElement('a')
    downloadAnchorNode.setAttribute('href', dataStr)
    downloadAnchorNode.setAttribute(
      'download',
      `recipe_${jobNo}_${new Date().toISOString().split('T')[0]}.json`,
    )
    document.body.appendChild(downloadAnchorNode)
    downloadAnchorNode.click()
    downloadAnchorNode.remove()
  }

  return (
    <div className="recipe-wizard">
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
          padding: 16px 24px;
          text-align: center;
        }

        .job-info {
          font-size: 18px;
          font-weight: 600;
        }

        .download-section {
          text-align: center;
          padding: 40px;
        }

        .download-btn {
          background: #0061ed;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 6px;
          cursor: pointer;
          font-size: 14px;
          margin: 0 8px;
          transition: all 0.3s ease;
        }

        .download-btn:hover {
          background: #0052cc;
        }

        .steps-container {
          display: flex;
          background: #f8f9fa;
          border-bottom: 1px solid #e9ecef;
        }

        .step-item {
          flex: 1;
          padding: 12px;
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
          height: 20px;
          background: #dee2e6;
        }

        .step-number {
          font-size: 14px;
        }

        .step-title {
          font-size: 12px;
          margin-top: 2px;
        }

        .content {
          padding: 20px;
        }

        .section-title {
          font-size: 16px;
          font-weight: 600;
          color: #495057;
          margin-bottom: 12px;
        }

        .two-column-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .column-section {
          background: #f8f9fa;
          border-radius: 8px;
          padding: 16px;
        }

        .search-container {
          position: relative;
          margin-bottom: 12px;
        }

        .search-icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 14px;
        }

        .search-input {
          width: 100%;
          padding: 8px 12px 8px 36px;
          border: 2px solid #e9ecef;
          border-radius: 6px;
          font-size: 14px;
          outline: none;
          transition: border-color 0.3s ease;
        }

        .search-input:focus {
          border-color: #0061ed;
        }

        .materials-dropdown {
          border: 2px solid #e9ecef;
          border-radius: 6px;
          background: white;
          max-height: 160px;
          overflow-y: auto;
        }

        .material-item {
          padding: 8px 12px;
          cursor: pointer;
          transition: background-color 0.2s ease;
          border-bottom: 1px solid #f8f9fa;
          font-size: 14px;
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
          margin-top: 12px;
        }

        .material-tag {
          display: inline-block;
          background: #e3f2fd;
          color: #1976d2;
          padding: 6px 10px;
          margin: 3px;
          border-radius: 16px;
          font-size: 12px;
        }

        .consumable-tag {
          display: inline-block;
          background: #fff3e0;
          color: #f57c00;
          padding: 6px 10px;
          margin: 3px;
          border-radius: 16px;
          font-size: 12px;
        }

        .process-tag {
          display: inline-block;
          background: #e8f5e8;
          color: #2e7d32;
          padding: 6px 10px;
          margin: 3px;
          border-radius: 16px;
          font-size: 12px;
        }

        .selected-process-tag {
          margin-top: 8px;
          padding: 4px 0;
        }

        .type-badge {
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 10px;
          font-weight: 600;
          text-transform: uppercase;
        }

        .material-badge {
          background: #e3f2fd;
          color: #1976d2;
        }

        .consumable-badge {
          background: #fff3e0;
          color: #f57c00;
        }

        .material-tag .remove-btn,
        .consumable-tag .remove-btn,
        .process-tag .remove-btn {
          margin-left: 6px;
          cursor: pointer;
          font-weight: bold;
          transition: color 0.2s ease;
        }

        .material-tag .remove-btn:hover,
        .consumable-tag .remove-btn:hover,
        .process-tag .remove-btn:hover {
          color: #d32f2f;
        }

        .bom-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 16px;
          margin-bottom: 16px;
        }

        .bom-card {
          background: #f8f9fa;
          border: 2px solid #e9ecef;
          border-radius: 8px;
          padding: 16px;
        }

        .bom-card.consumable {
          background: #fff8f0;
          border-color: #ffcc80;
        }

        .bom-card.material {
          background: #f0f8ff;
          border-color: #87ceeb;
        }

        .bom-card-title {
          font-size: 14px;
          font-weight: 500;
          color: #495057;
          margin-bottom: 12px;
        }

        .form-group {
          margin-bottom: 12px;
        }

        .form-label {
          display: block;
          margin-bottom: 3px;
          font-weight: 500;
          color: #495057;
          font-size: 13px;
        }

        .form-input {
          width: 100%;
          padding: 6px 10px;
          border: 1px solid #ced4da;
          border-radius: 4px;
          font-size: 13px;
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
          padding: 8px;
          text-align: left;
          border-bottom: 1px solid #e9ecef;
          font-weight: 600;
          color: #495057;
          background: #f8f9fa;
          font-size: 14px;
        }

        .department-table td {
          padding: 8px;
          border-bottom: 1px solid #e9ecef;
          font-size: 12px;
        }

        .department-table tr {
          transition: background-color 0.2s ease;
        }

        .department-table tr:hover {
          background: #f8f9fa;
        }

        .file-input {
          width: 100%;
          padding: 6px;
          border: 1px solid #ced4da;
          border-radius: 4px;
          font-size: 11px;
          margin-bottom: 5px;
        }

        .file-list {
          margin-top: 5px;
        }

        .file-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #f8f9fa;
          padding: 4px 8px;
          border-radius: 4px;
          margin-bottom: 3px;
          font-size: 11px;
        }

        .file-name {
          color: #495057;
          flex: 1;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .file-remove {
          color: #dc3545;
          cursor: pointer;
          font-weight: bold;
          margin-left: 8px;
        }

        .file-remove:hover {
          color: #c82333;
        }

        .btn {
          border: none;
          padding: 8px 16px;
          border-radius: 6px;
          cursor: pointer;
          font-size: 12px;
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
          padding: 4px 8px;
          font-size: 11px;
        }

        .btn-danger:hover {
          background: #c82333;
        }

        .download-buttons {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-top: 20px;
        }

        .btn-secondary {
          background: #6c757d;
          color: white;
          padding: 10px 20px;
          font-size: 14px;
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
          padding: 16px;
          border-top: 1px solid #e9ecef;
        }

        .btn-large {
          padding: 10px 20px;
          font-size: 14px;
        }

        .processes-display {
          background: #f8f9fa;
          border-radius: 8px;
          padding: 16px;
          margin-bottom: 16px;
        }

        .processes-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .process-display-tag {
          background: #e8f5e8;
          color: #2e7d32;
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 500;
        }

        /* Mobile Responsive Styles */
        @media (max-width: 768px) {
          .recipe-wizard {
            padding: 8px;
          }

          .download-buttons {
            flex-direction: column;
            gap: 12px;
          }

          .wizard-header {
            padding: 12px 16px;
          }

          .two-column-layout {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .steps-container {
            flex-direction: column;
          }

          .step-item {
            padding: 8px;
            border-bottom: 1px solid #e9ecef;
          }

          .step-separator {
            display: none;
          }

          .content {
            padding: 12px;
          }

          .section-title {
            font-size: 14px;
          }

          .bom-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .bom-card {
            padding: 12px;
          }

          .table-container {
            font-size: 12px;
          }

          .department-table th,
          .department-table td {
            padding: 6px;
          }

          .actions-container {
            flex-direction: column;
            gap: 10px;
            padding: 12px;
          }

          .btn-large {
            width: 100%;
          }
        }

        @media (max-width: 480px) {
          .recipe-wizard {
            padding: 4px;
          }

          .content {
            padding: 8px;
          }

          .bom-card {
            padding: 8px;
          }

          .form-input {
            font-size: 14px;
          }

          .search-input {
            font-size: 14px;
          }

          .material-tag,
          .consumable-tag,
          .process-tag {
            font-size: 10px;
            padding: 4px 8px;
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

      <div className="wizard-container" style={{ background: '#FFA07A' }}>
        {/* Header - Centered Job Number Only */}
        <div className="wizard-header">
          <div className="job-info">Job No: {jobNo}</div>
        </div>

        {/* Steps */}
        <div className="steps-container">
          {[
            { num: 1, title: 'Download' },
            { num: 2, title: 'Recipe Selection' },
            { num: 3, title: 'BOM & Process' },
            { num: 4, title: 'Department Files' },
            // { num: 5, title: 'Process Management' },
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
                  if (
                    step.num === 3 &&
                    (selectedMaterials.length > 0 || selectedConsumables.length > 0)
                  ) {
                    generateBOM()
                  }
                  if (step.num === 4 && selectedProcesses.length > 0) {
                    generateDepartments()
                  }
                  setCurrentStep(step.num)
                }
              }}
            >
              <div className="step-number">Step {step.num}</div>
              <div className="step-title">{step.title}</div>
              {index < 4 && <div className="step-separator"></div>}
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="content">
          {/* Step 1: Download */}
          {currentStep === 1 && (
            <div className="download-section">
              <h3 className="section-title">📥 Download File</h3>
              <div className="download-buttons">
                <button className="download-btn" onClick={downloadRecipeData}>
                  Download Design File
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Recipe Selection */}
          {currentStep === 2 && (
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

          {/* Step 3: BOM Creation & Process Selection */}
          {currentStep === 3 && (
            <div>
              <h3 className="section-title">Create Bill of Materials</h3>

              <div className="bom-grid">
                {bomMaterials.map((material, index) => (
                  <div key={material.id} className="bom-card material">
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
                        onChange={(e) => updateBOMMaterial(material.id, 'quantity', e.target.value)}
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Process</label>
                      <select
                        value=""
                        onChange={(e) => {
                          if (e.target.value) {
                            addProcessToMaterial(material.id, e.target.value)
                          }
                        }}
                        className="form-input"
                      >
                        <option value="">Select Process</option>
                        {getAvailableProcessesForMaterial(material.id).map((process) => (
                          <option key={process} value={process}>
                            {process}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Show selected processes as tags below the dropdown */}
                    {material.processes && material.processes.length > 0 && (
                      <div className="selected-process-tag">
                        {material.processes.map((process) => (
                          <span key={process} className="process-tag">
                            {process}
                            <span
                              onClick={() => removeProcessFromMaterial(material.id, process)}
                              className="remove-btn"
                            >
                              ×
                            </span>
                          </span>
                        ))}
                      </div>
                    )}
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
                        value=""
                        onChange={(e) => {
                          if (e.target.value) {
                            addProcessToConsumable(consumable.id, e.target.value)
                          }
                        }}
                        className="form-input"
                      >
                        <option value="">Select Process</option>
                        {getAvailableProcessesForConsumable(consumable.id).map((process) => (
                          <option key={process} value={process}>
                            {process}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Show selected processes as tags below the dropdown */}
                    {consumable.processes && consumable.processes.length > 0 && (
                      <div className="selected-process-tag">
                        {consumable.processes.map((process) => (
                          <span key={process} className="process-tag">
                            {process}
                            <span
                              onClick={() => removeProcessFromConsumable(consumable.id, process)}
                              className="remove-btn"
                            >
                              ×
                            </span>
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Department Files */}
          {currentStep === 4 && (
            <div>
              <h3 className="section-title">📁 Department Assignment</h3>

              <div style={{ marginBottom: '20px' }}>
                <button
                  onClick={addDepartmentEntry}
                  className="btn btn-primary"
                  style={{ marginBottom: '15px' }}
                >
                  + Add Department Entry
                </button>
              </div>

              {/* Department Table */}
              <div className="table-container">
                <table className="department-table">
                  <thead>
                    <tr>
                      <th style={{ width: '80px' }}>S.No</th>
                      <th style={{ width: '200px' }}>Department</th>
                      <th style={{ width: '120px' }}>Time</th>
                      <th style={{ width: '150px' }}>Machine</th>
                      <th style={{ width: '200px' }}>File Upload</th>
                      <th style={{ width: '100px' }}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {departmentEntries.map((entry) => (
                      <tr key={entry.id}>
                        <td style={{ textAlign: 'center', fontWeight: '600' }}>
                          {entry.serialNumber}
                        </td>
                        <td>
                          <select
                            value={entry.selectedDepartment}
                            onChange={(e) =>
                              updateDepartmentEntry(entry.id, 'selectedDepartment', e.target.value)
                            }
                            className="form-input"
                            style={{ width: '100%' }}
                          >
                            <option value="">Select Department</option>
                            {/* Show current selection if already selected */}
                            {entry.selectedDepartment &&
                              !getAvailableDepartmentsForEntry(entry.id).includes(
                                entry.selectedDepartment,
                              ) && (
                                <option value={entry.selectedDepartment}>
                                  {entry.selectedDepartment}
                                </option>
                              )}
                            {/* Show available departments */}
                            {getAvailableDepartmentsForEntry(entry.id).map((process) => (
                              <option key={process} value={process}>
                                {process}
                              </option>
                            ))}
                          </select>
                        </td>
                        <td>
                          {entry.selectedDepartment ? (
                            <input
                              type="text"
                              value={entry.time}
                              onChange={(e) =>
                                updateDepartmentEntry(entry.id, 'time', e.target.value)
                              }
                              className="form-input"
                              placeholder="2 hours"
                              style={{ width: '100%' }}
                            />
                          ) : (
                            <span style={{ color: '#6c757d', fontSize: '12px' }}>-</span>
                          )}
                        </td>
                        <td>
                          {entry.selectedDepartment ? (
                            <select
                              value={entry.machine}
                              onChange={(e) =>
                                updateDepartmentEntry(entry.id, 'machine', e.target.value)
                              }
                              className="form-input"
                              style={{ width: '100%' }}
                            >
                              <option value="">Select Machine</option>
                              <option value="Machine 1">CNC Router</option>
                              <option value="Machine 2">Cutting</option>
                              <option value="Machine 3">Waterjet Cutting</option>
                              <option value="Machine 4">Pad Printing</option>
                            </select>
                          ) : (
                            <span style={{ color: '#6c757d', fontSize: '12px' }}>-</span>
                          )}
                        </td>
                        <td>
                          {entry.selectedDepartment ? (
                            <div>
                              <input
                                type="file"
                                multiple
                                accept=".pdf,.doc,.docx,.jpg,.png,.dwg,.ai,.psd"
                                onChange={(e) => {
                                  Array.from(e.target.files).forEach((file) => {
                                    addFileToEntry(entry.id, file)
                                  })
                                  e.target.value = ''
                                }}
                                className="file-input"
                                style={{ marginBottom: '5px' }}
                              />
                              {entry.files.length > 0 && (
                                <div style={{ fontSize: '11px', color: '#495057' }}>
                                  {entry.files.length} file(s) uploaded
                                </div>
                              )}
                            </div>
                          ) : (
                            <span style={{ color: '#6c757d', fontSize: '12px' }}>
                              No file chosen
                            </span>
                          )}
                        </td>
                        <td style={{ textAlign: 'center' }}>
                          <button
                            onClick={() => removeDepartmentEntry(entry.id)}
                            className="btn btn-danger"
                            style={{ padding: '6px 12px', fontSize: '12px' }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Department Materials and Consumables Display */}
              {departmentEntries
                .filter((entry) => entry.selectedDepartment)
                .map((entry) => (
                  <div
                    key={`materials-${entry.id}`}
                    style={{
                      marginTop: '20px',
                      border: '1px solid #dee2e6',
                      borderRadius: '8px',
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      style={{
                        background: '#e8f5e8',
                        padding: '12px 16px',
                        fontWeight: '600',
                        fontSize: '16px',
                        color: '#2e7d32',
                        borderBottom: '1px solid #dee2e6',
                      }}
                    >
                      {entry.selectedDepartment} - Materials & Consumables
                    </div>

                    <div className="table-container">
                      <table className="department-table">
                        <thead>
                          <tr style={{ background: '#f8f9fa' }}>
                            <th style={{ width: '80px' }}>S.No</th>
                            <th style={{ width: '100px' }}>Type</th>
                            <th>Name</th>
                            <th style={{ width: '120px' }}>No of UPS</th>
                            <th style={{ width: '100px' }}>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {/* Materials for this department */}
                          {bomMaterials
                            .filter(
                              (material) =>
                                material.processes &&
                                material.processes.includes(entry.selectedDepartment),
                            )
                            .map((material, index) => (
                              <tr key={`material-${material.id}`}>
                                <td style={{ textAlign: 'center' }}>{index + 1}</td>
                                <td>
                                  <span className="type-badge material-badge">Material</span>
                                </td>
                                <td style={{ fontWeight: '500' }}>📦 {material.name}</td>
                                <td>
                                  <input
                                    type="number"
                                    value={material.ups}
                                    onChange={(e) =>
                                      updateBOMMaterial(material.id, 'ups', e.target.value)
                                    }
                                    className="form-input"
                                    placeholder="UPS"
                                    style={{ width: '100%' }}
                                  />
                                </td>
                                <td style={{ textAlign: 'center' }}>
                                  <button
                                    onClick={() =>
                                      removeProcessFromMaterial(
                                        material.id,
                                        entry.selectedDepartment,
                                      )
                                    }
                                    className="btn btn-danger"
                                    style={{ padding: '4px 8px', fontSize: '11px' }}
                                  >
                                    Remove
                                  </button>
                                </td>
                              </tr>
                            ))}

                          {/* Consumables for this department */}
                          {bomConsumables
                            .filter(
                              (consumable) =>
                                consumable.processes &&
                                consumable.processes.includes(entry.selectedDepartment),
                            )
                            .map((consumable, index) => {
                              const materialCount = bomMaterials.filter(
                                (material) =>
                                  material.processes &&
                                  material.processes.includes(entry.selectedDepartment),
                              ).length
                              return (
                                <tr key={`consumable-${consumable.id}`}>
                                  <td style={{ textAlign: 'center' }}>
                                    {materialCount + index + 1}
                                  </td>
                                  <td>
                                    <span className="type-badge consumable-badge">Consumable</span>
                                  </td>
                                  <td style={{ fontWeight: '500' }}>🧪 {consumable.name}</td>
                                  <td>
                                    <input
                                      type="number"
                                      value={consumable.quantity}
                                      onChange={(e) =>
                                        updateBOMConsumable(
                                          consumable.id,
                                          'quantity',
                                          e.target.value,
                                        )
                                      }
                                      className="form-input"
                                      placeholder="Quantity"
                                      style={{ width: '100%' }}
                                    />
                                  </td>
                                  <td style={{ textAlign: 'center' }}>
                                    <button
                                      onClick={() =>
                                        removeProcessFromConsumable(
                                          consumable.id,
                                          entry.selectedDepartment,
                                        )
                                      }
                                      className="btn btn-danger"
                                      style={{ padding: '4px 8px', fontSize: '11px' }}
                                    >
                                      Remove
                                    </button>
                                  </td>
                                </tr>
                              )
                            })}
                        </tbody>
                      </table>
                    </div>

                    {/* Show message if no materials or consumables */}
                    {bomMaterials.filter(
                      (material) =>
                        material.processes && material.processes.includes(entry.selectedDepartment),
                    ).length === 0 &&
                      bomConsumables.filter(
                        (consumable) =>
                          consumable.processes &&
                          consumable.processes.includes(entry.selectedDepartment),
                      ).length === 0 && (
                        <div style={{ padding: '20px', textAlign: 'center', color: '#6c757d' }}>
                          No materials or consumables assigned to {entry.selectedDepartment}
                        </div>
                      )}
                  </div>
                ))}

              {departmentEntries.length === 0 && (
                <div style={{ textAlign: 'center', padding: '40px', color: '#6c757d' }}>
                  <p>
                    No department entries added yet. Click "Add Department Entry" to get started.
                  </p>
                </div>
              )}
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
  )
}

export default RecipeWizard




/////


import React, { useState, useEffect } from 'react'

const RecipeWizard = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [selectedConsumables, setSelectedConsumables] = useState([])
  const [selectedPackingMaterials, setSelectedPackingMaterials] = useState([])
  const [selectedProcesses, setSelectedProcesses] = useState([])
  const [bomMaterials, setBomMaterials] = useState([])
  const [bomConsumables, setBomConsumables] = useState([])
  const [bomPackingMaterials, setBomPackingMaterials] = useState([])
  const [departments, setDepartments] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [consumableSearchTerm, setConsumableSearchTerm] = useState('')
  const [packingMaterialSearchTerm, setPackingMaterialSearchTerm] = useState('')
  const [processSearchTerm, setProcessSearchTerm] = useState('')
  const [departmentEntries, setDepartmentEntries] = useState([])
  const [nextSerialNumber, setNextSerialNumber] = useState(1)

  // Job information
  const jobNo = '14888a'

  const allMaterials = [
    'BLACK ACRYLIC 2MM',
    'BLACK ACRYLIC 3MM',
    'BLACK ACRYLIC 6MM',
    'BLACK ACRYLIC 8MM',
    'BLACK ACRYLIC 12MM',
    'WHITE ACRYLIC 2MM',
    'CLEAR ACRYLIC 3MM',
    'CLEAR ACRYLIC 5MM',
    'ALUMINUM SHEET 1MM',
    'ALUMINUM SHEET 2MM',
    'STAINLESS STEEL 1MM',
    'WOOD PLYWOOD 6MM',
    'WOOD PLYWOOD 12MM',
    'FOAM BOARD 5MM',
    'FOAM BOARD 10MM',
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
    'PRIMER SPRAY',
    'ACETONE',
    'SILICONE SEALANT',
    'THREAD LOCKER',
    'LUBRICANT SPRAY',
    'RUST REMOVER',
  ]

  const allPackingMaterials = [
    'BUBBLE WRAP',
    'CARDBOARD BOX',
    'FOAM PADDING',
    'PACKING TAPE',
    'STRETCH FILM',
    'PACKING PEANUTS',
    'PLASTIC BAGS',
    'LABELS',
    'CORNER PROTECTORS',
    'TISSUE PAPER',
    'AIR PILLOWS',
    'VOID FILL',
    'FRAGILE STICKERS',
    'SHIPPING LABELS',
    'PALLETS',
  ]

  const allProcesses = [
    'DTP',
    'UV Printing',
    'Screen Printing',
    'Laser Cutting',
    'CNC Machining',
    'Assembly',
    'Quality Control',
    'Packaging',
    'Welding',
    'Painting',
    'Polishing',
    'Drilling',
  ]

  const allDepartments = [
    'DTP',
    'UV Printing',
    'Screen Printing',
    'Laser Cutting',
    'CNC Machining',
    'Assembly',
    'Quality Control',
    'Packaging',
    'Welding',
    'Painting',
    'Polishing',
    'Drilling',
  ]

  const sizeOptions = ["8' x 4'", "4' x 4'", "6' x 3'", "10' x 5'", "12' x 6'", "2' x 2'", "3' x 3'", "48' x 24'"]

  const filteredMaterials = allMaterials.filter((material) =>
    material.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const filteredConsumables = allConsumables.filter((consumable) =>
    consumable.toLowerCase().includes(consumableSearchTerm.toLowerCase()),
  )

  const filteredPackingMaterials = allPackingMaterials.filter((packingMaterial) =>
    packingMaterial.toLowerCase().includes(packingMaterialSearchTerm.toLowerCase()),
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

  const handlePackingMaterialClick = (packingMaterial) => {
    if (!selectedPackingMaterials.includes(packingMaterial)) {
      setSelectedPackingMaterials([...selectedPackingMaterials, packingMaterial])
    }
  }

  const removeMaterial = (material) => {
    setSelectedMaterials(selectedMaterials.filter((m) => m !== material))
  }

  const removeConsumable = (consumable) => {
    setSelectedConsumables(selectedConsumables.filter((c) => c !== consumable))
  }

  const removePackingMaterial = (packingMaterial) => {
    setSelectedPackingMaterials(selectedPackingMaterials.filter((p) => p !== packingMaterial))
  }

  const generateBOM = () => {
    const newBomMaterials = selectedMaterials.map((material) => ({
      id: Date.now() + Math.random(),
      name: material,
      size: '',
      ups: '',
      quantity: '',
      processes: [],
      sizeOfCuttingSheet: '',
      noOfUpsPerCuttingSheet: '',
      qtyOfCuttingSheetRequired: '',
      qtyOfCuttingSheetInSqft: '',
    }))

    const newBomConsumables = selectedConsumables.map((consumable) => ({
      id: Date.now() + Math.random(),
      name: consumable,
      quantity: '',
      processes: [],
    }))

    const newBomPackingMaterials = selectedPackingMaterials.map((packingMaterial) => ({
      id: Date.now() + Math.random(),
      name: packingMaterial,
      quantity: '',
      processes: [],
    }))

    setBomMaterials(newBomMaterials)
    setBomConsumables(newBomConsumables)
    setBomPackingMaterials(newBomPackingMaterials)
  }

  const generateDepartments = () => {
    setDepartmentEntries([])
    setNextSerialNumber(1)

    setTimeout(() => {
      addDepartmentEntry()
    }, 100)
  }

  const addDepartmentEntry = () => {
    const newEntry = {
      id: Date.now() + Math.random(),
      serialNumber: nextSerialNumber,
      selectedDepartment: '',
      time: '',
      machine: '',
      files: [],
    }
    setDepartmentEntries([...departmentEntries, newEntry])
    setNextSerialNumber(nextSerialNumber + 1)
  }

  const removeDepartmentEntry = (entryId) => {
    setDepartmentEntries(departmentEntries.filter(entry => entry.id !== entryId))
  }

  const updateDepartmentEntry = (entryId, field, value) => {
    setDepartmentEntries(departmentEntries.map(entry =>
      entry.id === entryId ? { ...entry, [field]: value } : entry
    ))
  }

  const getSelectedProcesses = () => {
    const allProcesses = new Set()

    bomMaterials.forEach((material) => {
      if (material.processes) {
        material.processes.forEach((process) => allProcesses.add(process))
      }
    })

    bomConsumables.forEach((consumable) => {
      if (consumable.processes) {
        consumable.processes.forEach((process) => allProcesses.add(process))
      }
    })

    bomPackingMaterials.forEach((packingMaterial) => {
      if (packingMaterial.processes) {
        packingMaterial.processes.forEach((process) => allProcesses.add(process))
      }
    })

    return Array.from(allProcesses)
  }

  const getAvailableDepartmentsForEntry = (currentEntryId) => {
    const selectedDepartments = departmentEntries
      .filter(entry => entry.id !== currentEntryId && entry.selectedDepartment)
      .map(entry => entry.selectedDepartment)

    return getSelectedProcesses().filter(process => !selectedDepartments.includes(process))
  }

  const addFileToEntry = (entryId, file) => {
    setDepartmentEntries(departmentEntries.map(entry =>
      entry.id === entryId
        ? { ...entry, files: [...entry.files, { id: Date.now() + Math.random(), file }] }
        : entry
    ))
  }

  const removeFileFromEntry = (entryId, fileId) => {
    setDepartmentEntries(departmentEntries.map(entry =>
      entry.id === entryId
        ? { ...entry, files: entry.files.filter(f => f.id !== fileId) }
        : entry
    ))
  }

  const getAvailableProcessesForMaterial = (materialId) => {
    const material = bomMaterials.find((m) => m.id === materialId)
    const selectedProcesses = material?.processes || []
    return allProcesses.filter((process) => !selectedProcesses.includes(process))
  }

  const getAvailableProcessesForConsumable = (consumableId) => {
    const consumable = bomConsumables.find((c) => c.id === consumableId)
    const selectedProcesses = consumable?.processes || []
    return allProcesses.filter((process) => !selectedProcesses.includes(process))
  }

  const getAvailableProcessesForPackingMaterial = (packingMaterialId) => {
    const packingMaterial = bomPackingMaterials.find((p) => p.id === packingMaterialId)
    const selectedProcesses = packingMaterial?.processes || []
    return allProcesses.filter((process) => !selectedProcesses.includes(process))
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

  const updateBOMPackingMaterial = (id, field, value) => {
    setBomPackingMaterials(
      bomPackingMaterials.map((packingMaterial) =>
        packingMaterial.id === id ? { ...packingMaterial, [field]: value } : packingMaterial,
      ),
    )
  }

  const addProcessToMaterial = (materialId, process) => {
    setBomMaterials(
      bomMaterials.map((material) =>
        material.id === materialId
          ? {
              ...material,
              processes: material.processes
                ? material.processes.includes(process)
                  ? material.processes
                  : [...material.processes, process]
                : [process],
            }
          : material,
      ),
    )
    if (!selectedProcesses.includes(process)) {
      setSelectedProcesses([...selectedProcesses, process])
    }
  }

  const addProcessToConsumable = (consumableId, process) => {
    setBomConsumables(
      bomConsumables.map((consumable) =>
        consumable.id === consumableId
          ? {
              ...consumable,
              processes: consumable.processes
                ? consumable.processes.includes(process)
                  ? consumable.processes
                  : [...consumable.processes, process]
                : [process],
            }
          : consumable,
      ),
    )
    if (!selectedProcesses.includes(process)) {
      setSelectedProcesses([...selectedProcesses, process])
    }
  }

  const addProcessToPackingMaterial = (packingMaterialId, process) => {
    setBomPackingMaterials(
      bomPackingMaterials.map((packingMaterial) =>
        packingMaterial.id === packingMaterialId
          ? {
              ...packingMaterial,
              processes: packingMaterial.processes
                ? packingMaterial.processes.includes(process)
                  ? packingMaterial.processes
                  : [...packingMaterial.processes, process]
                : [process],
            }
          : packingMaterial,
      ),
    )
    if (!selectedProcesses.includes(process)) {
      setSelectedProcesses([...selectedProcesses, process])
    }
  }

  const removeProcessFromMaterial = (materialId, process) => {
    setBomMaterials(
      bomMaterials.map((material) =>
        material.id === materialId
          ? {
              ...material,
              processes: material.processes ? material.processes.filter((p) => p !== process) : [],
            }
          : material,
      ),
    )
  }

  const removeProcessFromConsumable = (consumableId, process) => {
    setBomConsumables(
      bomConsumables.map((consumable) =>
        consumable.id === consumableId
          ? {
              ...consumable,
              processes: consumable.processes
                ? consumable.processes.filter((p) => p !== process)
                : [],
            }
          : consumable,
      ),
    )
  }

  const removeProcessFromPackingMaterial = (packingMaterialId, process) => {
    setBomPackingMaterials(
      bomPackingMaterials.map((packingMaterial) =>
        packingMaterial.id === packingMaterialId
          ? {
              ...packingMaterial,
              processes: packingMaterial.processes
                ? packingMaterial.processes.filter((p) => p !== process)
                : [],
            }
          : packingMaterial,
      ),
    )
  }

  const changeStep = (direction) => {
    if (direction === 1 && currentStep < 5) {
      if (currentStep === 2) {
        generateBOM()
      }
      if (currentStep === 3) {
        generateDepartments()
      }
      setCurrentStep(currentStep + 1)
    } else if (direction === -1 && currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  useEffect(() => {
    if (currentStep === 4 && departmentEntries.length === 0) {
      addDepartmentEntry()
    }
  }, [currentStep])

  const downloadRecipeData = () => {
    const recipeData = {
      jobNo,
      materials: selectedMaterials,
      consumables: selectedConsumables,
      packingMaterials: selectedPackingMaterials,
      processes: selectedProcesses,
      bomMaterials,
      bomConsumables,
      bomPackingMaterials,
      departmentEntries,
      timestamp: new Date().toISOString(),
    }

    const dataStr =
      'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(recipeData, null, 2))
    const downloadAnchorNode = document.createElement('a')
    downloadAnchorNode.setAttribute('href', dataStr)
    downloadAnchorNode.setAttribute(
      'download',
      `recipe_${jobNo}_${new Date().toISOString().split('T')[0]}.json`,
    )
    document.body.appendChild(downloadAnchorNode)
    downloadAnchorNode.click()
    downloadAnchorNode.remove()
  }

  return (
    <div className="recipe-wizard">
      <style>{`
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
          padding: 16px 24px;
          text-align: center;
        }

        .wizard-header-background {
          background: #FFA07A;
        }

        .job-info {
          font-size: 18px;
          font-weight: 600;
        }

        .download-section {
          text-align: center;
          padding: 40px;
        }

        .download-btn {
          background: #0061ed;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 6px;
          cursor: pointer;
          font-size: 14px;
          margin: 0 8px;
          transition: all 0.3s ease;
        }

        .download-btn:hover {
          background: #0052cc;
        }

        .steps-container {
          display: flex;
          background: #f8f9fa;
          border-bottom: 1px solid #e9ecef;
        }

        .step-item {
          flex: 1;
          padding: 12px;
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
          height: 20px;
          background: #dee2e6;
        }

        .step-number {
          font-size: 14px;
        }

        .step-title {
          font-size: 12px;
          margin-top: 2px;
        }

        .content {
          padding: 20px;
        }

        .section-title {
          font-size: 16px;
          font-weight: 600;
          color: #495057;
          margin-bottom: 12px;
        }

        .two-column-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .column-section {
          background: #f8f9fa;
          border-radius: 8px;
          padding: 16px;
        }

        .packing-materials-section {
          margin-top: 20px;
        }

        .search-container {
          position: relative;
          margin-bottom: 12px;
        }

        .search-icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 14px;
        }

        .search-input {
          width: 100%;
          padding: 8px 12px 8px 36px;
          border: 2px solid #e9ecef;
          border-radius: 6px;
          font-size: 14px;
          outline: none;
          transition: border-color 0.3s ease;
        }

        .search-input:focus {
          border-color: #0061ed;
        }

        .materials-dropdown {
          border: 2px solid #e9ecef;
          border-radius: 6px;
          background: white;
          max-height: 160px;
          overflow-y: auto;
        }

        .material-item {
          padding: 8px 12px;
          cursor: pointer;
          transition: background-color 0.2s ease;
          border-bottom: 1px solid #f8f9fa;
          font-size: 14px;
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
          margin-top: 12px;
        }

        .material-tag {
          display: inline-block;
          background: #e3f2fd;
          color: #1976d2;
          padding: 6px 10px;
          margin: 3px;
          border-radius: 16px;
          font-size: 12px;
        }

        .consumable-tag {
          display: inline-block;
          background: #fff3e0;
          color: #f57c00;
          padding: 6px 10px;
          margin: 3px;
          border-radius: 16px;
          font-size: 12px;
        }

        .process-tag {
          display: inline-block;
          background: #e8f5e8;
          color: #2e7d32;
          padding: 6px 10px;
          margin: 3px;
          border-radius: 16px;
          font-size: 12px;
        }

        .packing-tag {
          display: inline-block;
          background: #f3e5f5;
          color: #7b1fa2;
          padding: 6px 10px;
          margin: 3px;
          border-radius: 16px;
          font-size: 12px;
        }

        .selected-process-tag {
          margin-top: 8px;
          padding: 4px 0;
        }

        .type-badge {
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 10px;
          font-weight: 600;
          text-transform: uppercase;
        }

        .material-badge {
          background: #e3f2fd;
          color: #1976d2;
        }

        .consumable-badge {
          background: #fff3e0;
          color: #f57c00;
        }

        .packing-badge {
          background: #f3e5f5;
          color: #7b1fa2;
        }

        .material-tag .remove-btn,
        .consumable-tag .remove-btn,
        .process-tag .remove-btn,
        .packing-tag .remove-btn {
          margin-left: 6px;
          cursor: pointer;
          font-weight: bold;
          transition: color 0.2s ease;
        }

        .material-tag .remove-btn:hover,
        .consumable-tag .remove-btn:hover,
        .process-tag .remove-btn:hover,
        .packing-tag .remove-btn:hover {
          color: #d32f2f;
        }

        .bom-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 16px;
          margin-bottom: 16px;
        }

        .bom-card {
          background: #f8f9fa;
          border: 2px solid #e9ecef;
          border-radius: 8px;
          padding: 16px;
        }

        .bom-card.consumable {
          background: #fff8f0;
          border-color: #ffcc80;
        }

        .bom-card.material {
          background: #f0f8ff;
          border-color: #87ceeb;
        }

        .bom-card.packing {
          background: #f0fff0;
          border-color: #90ee90;
        }

        .bom-card-title {
          font-size: 14px;
          font-weight: 500;
          color: #495057;
          margin-bottom: 12px;
        }

        .form-group {
          margin-bottom: 12px;
        }

        .form-label {
          display: block;
          margin-bottom: 3px;
          font-weight: 500;
          color: #495057;
          font-size: 13px;
        }

        .form-input {
          width: 100%;
          padding: 6px 10px;
          border: 1px solid #ced4da;
          border-radius: 4px;
          font-size: 13px;
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
          min-width: 800px;
        }

        .department-table th {
          padding: 8px;
          text-align: left;
          border-bottom: 1px solid #e9ecef;
          font-weight: 600;
          color: #495057;
          background: #f8f9fa;
          font-size: 14px;
        }

        .department-table td {
          padding: 8px;
          border-bottom: 1px solid #e9ecef;
          font-size: 12px;
        }

        .department-table tr {
          transition: background-color 0.2s ease;
        }

        .department-table tr:hover {
          background: #f8f9fa;
        }

        .department-materials-header {
          background: #e8f5e8;
          padding: 12px 16px;
          font-weight: 600;
          font-size: 16px;
          color: #2e7d32;
          border-bottom: 1px solid #dee2e6;
        }

        .materials-container {
          margin-top: 20px;
          border: 1px solid #dee2e6;
          border-radius: 8px;
          overflow: hidden;
        }

        .materials-table-header {
          background: #f8f9fa;
        }

        .table-cell-center {
          text-align: center;
        }

        .table-cell-center-bold {
          text-align: center;
          font-weight: 600;
        }

        .table-cell-bold {
          font-weight: 500;
        }

        .table-cell-full-width {
          width: 100%;
        }

        .table-cell-placeholder {
          color: #6c757d;
          font-size: 12px;
        }

        .file-input {
          width: 100%;
          padding: 6px;
          border: 1px solid #ced4da;
          border-radius: 4px;
          font-size: 11px;
          margin-bottom: 5px;
        }

        .file-list {
          margin-top: 5px;
        }

        .file-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #f8f9fa;
          padding: 4px 8px;
          border-radius: 4px;
          margin-bottom: 3px;
          font-size: 11px;
        }

        .file-name {
          color: #495057;
          flex: 1;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .file-remove {
          color: #dc3545;
          cursor: pointer;
          font-weight: bold;
          margin-left: 8px;
        }

        .file-remove:hover {
          color: #c82333;
        }

        .file-info {
          font-size: 11px;
          color: #495057;
        }

        .btn {
          border: none;
          padding: 8px 16px;
          border-radius: 6px;
          cursor: pointer;
          font-size: 12px;
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

        .btn-primary-margin {
          margin-bottom: 15px;
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
          padding: 4px 8px;
          font-size: 11px;
        }

        .btn-danger:hover {
          background: #c82333;
        }

        .btn-danger-action {
          padding: 6px 12px;
          font-size: 12px;
        }

        .download-buttons {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-top: 20px;
        }

        .btn-secondary {
          background: #6c757d;
          color: white;
          padding: 10px 20px;
          font-size: 14px;
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
          padding: 16px;
          border-top: 1px solid #e9ecef;
        }

        .btn-large {
          padding: 10px 20px;
          font-size: 14px;
        }

        .department-box {
          border: 2px solid #e9ecef;
          border-radius: 8px;
          padding: 16px;
          margin-bottom: 20px;
          background: #f8f9fa;
        }

        .department-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }

        .department-title {
          margin: 0;
          color: #495057;
        }

       .empty-state {
         text-align: center;
         padding: 40px;
         color: #6c757d;
       }

       .empty-materials-message {
         padding: 20px;
         text-align: center;
         color: #6c757d;
       }

       .add-department-button-container {
         margin-bottom: 20px;
       }

       .column-width-80 {
         width: 80px;
       }

       .column-width-100 {
         width: 100px;
       }

       .column-width-120 {
         width: 120px;
       }

       .column-width-150 {
         width: 150px;
       }

       .column-width-200 {
         width: 200px;
       }

       @media (max-width: 768px) {
         .two-column-layout {
           grid-template-columns: 1fr;
           gap: 16px;
         }

         .steps-container {
           flex-direction: column;
         }

         .step-item {
           padding: 8px;
           border-bottom: 1px solid #e9ecef;
         }

         .step-separator {
           display: none;
         }

         .content {
           padding: 12px;
         }

         .bom-grid {
           grid-template-columns: 1fr;
           gap: 12px;
         }

         .actions-container {
           flex-direction: column;
           gap: 10px;
           padding: 12px;
         }

         .btn-large {
           width: 100%;
         }
       }

       @media (min-width: 1200px) {
         .bom-grid {
           grid-template-columns: repeat(3, 1fr);
         }
       }
     `}</style>

     <div className="wizard-container wizard-header-background">
       {/* Header */}
       <div className="wizard-header">
         <div className="job-info">Job No: {jobNo}</div>
       </div>

       {/* Steps */}
       <div className="steps-container">
         {[
           { num: 1, title: 'Download' },
           { num: 2, title: 'Recipe Selection' },
           { num: 3, title: 'BOM & Process' },
           { num: 4, title: 'Department Files' },
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
                 if (
                   step.num === 3 &&
                   (selectedMaterials.length > 0 || selectedConsumables.length > 0 || selectedPackingMaterials.length > 0)
                 ) {
                   generateBOM()
                 }
                 if (step.num === 4 && selectedProcesses.length > 0) {
                   generateDepartments()
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
         {/* Step 1: Download */}
         {currentStep === 1 && (
           <div className="download-section">
             <h3 className="section-title">📥 Download File</h3>
             <div className="download-buttons">
               <button className="download-btn" onClick={downloadRecipeData}>
                 Download Design File
               </button>
             </div>
           </div>
         )}

         {/* Step 2: Recipe Selection */}
         {currentStep === 2 && (
           <div>
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

             {/* Packing Materials Section - Full Width */}
             <div className="packing-materials-section">
               <div className="column-section">
                 <h3 className="section-title">📦 Packing Materials</h3>

                 <div className="search-container">
                   <div className="search-icon">🔍</div>
                   <input
                     type="text"
                     placeholder="Search packing materials..."
                     value={packingMaterialSearchTerm}
                     onChange={(e) => setPackingMaterialSearchTerm(e.target.value)}
                     className="search-input"
                   />
                 </div>

                 <div className="materials-dropdown">
                   {filteredPackingMaterials.map((packingMaterial) => (
                     <div
                       key={packingMaterial}
                       onClick={() => handlePackingMaterialClick(packingMaterial)}
                       className={`material-item ${selectedPackingMaterials.includes(packingMaterial) ? 'selected' : ''}`}
                     >
                       {packingMaterial}
                     </div>
                   ))}
                 </div>

                 <div className="selected-materials">
                   {selectedPackingMaterials.map((packingMaterial) => (
                     <span key={packingMaterial} className="packing-tag">
                       {packingMaterial}
                       <span onClick={() => removePackingMaterial(packingMaterial)} className="remove-btn">
                         ×
                       </span>
                     </span>
                   ))}
                 </div>
               </div>
             </div>
           </div>
         )}

         {/* Step 3: BOM Creation & Process Selection */}
         {currentStep === 3 && (
           <div>
             <h3 className="section-title">Create Bill of Materials</h3>

             <div className="bom-grid">
               {bomMaterials.map((material, index) => (
                 <div key={material.id} className="bom-card material">
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
                       onChange={(e) => updateBOMMaterial(material.id, 'quantity', e.target.value)}
                       className="form-input"
                     />
                   </div>

                   <div className="form-group">
                     <label className="form-label">Process</label>
                     <select
                       value=""
                       onChange={(e) => {
                         if (e.target.value) {
                           addProcessToMaterial(material.id, e.target.value)
                         }
                       }}
                       className="form-input"
                     >
                       <option value="">Select Process</option>
                       {getAvailableProcessesForMaterial(material.id).map((process) => (
                         <option key={process} value={process}>
                           {process}
                         </option>
                       ))}
                     </select>
                   </div>

                   {/* Show selected processes as tags below the dropdown */}
                   {material.processes && material.processes.length > 0 && (
                     <div className="selected-process-tag">
                       {material.processes.map((process) => (
                         <span key={process} className="process-tag">
                           {process}
                           <span
                             onClick={() => removeProcessFromMaterial(material.id, process)}
                             className="remove-btn"
                           >
                             ×
                           </span>
                         </span>
                       ))}
                     </div>
                   )}
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
                       value=""
                       onChange={(e) => {
                         if (e.target.value) {
                           addProcessToConsumable(consumable.id, e.target.value)
                         }
                       }}
                       className="form-input"
                     >
                       <option value="">Select Process</option>
                       {getAvailableProcessesForConsumable(consumable.id).map((process) => (
                         <option key={process} value={process}>
                           {process}
                         </option>
                       ))}
                     </select>
                   </div>

                   {/* Show selected processes as tags below the dropdown */}
                   {consumable.processes && consumable.processes.length > 0 && (
                     <div className="selected-process-tag">
                       {consumable.processes.map((process) => (
                         <span key={process} className="process-tag">
                           {process}
                           <span
                             onClick={() => removeProcessFromConsumable(consumable.id, process)}
                             className="remove-btn"
                           >
                             ×
                           </span>
                         </span>
                       ))}
                     </div>
                   )}
                 </div>
               ))}

               {bomPackingMaterials.map((packingMaterial, index) => (
                 <div key={packingMaterial.id} className="bom-card packing">
                   <h4 className="bom-card-title">Packing Material {index + 1}</h4>

                   <div className="form-group">
                     <label className="form-label">Packing Material Type</label>
                     <input type="text" value={packingMaterial.name} readOnly className="form-input" />
                   </div>

                   <div className="form-group">
                     <label className="form-label">Quantity</label>
                     <input
                       type="number"
                       placeholder="Enter Quantity"
                       value={packingMaterial.quantity}
                       onChange={(e) =>
                         updateBOMPackingMaterial(packingMaterial.id, 'quantity', e.target.value)
                       }
                       className="form-input"
                     />
                   </div>

                   <div className="form-group">
                     <label className="form-label">Process</label>
                     <select
                       value=""
                       onChange={(e) => {
                         if (e.target.value) {
                           addProcessToPackingMaterial(packingMaterial.id, e.target.value)
                         }
                       }}
                       className="form-input"
                     >
                       <option value="">Select Process</option>
                       {getAvailableProcessesForPackingMaterial(packingMaterial.id).map((process) => (
                         <option key={process} value={process}>
                           {process}
                         </option>
                       ))}
                     </select>
                   </div>

                   {/* Show selected processes as tags below the dropdown */}
                   {packingMaterial.processes && packingMaterial.processes.length > 0 && (
                     <div className="selected-process-tag">
                       {packingMaterial.processes.map((process) => (
                         <span key={process} className="process-tag">
                           {process}
                           <span
                             onClick={() => removeProcessFromPackingMaterial(packingMaterial.id, process)}
                             className="remove-btn"
                           >
                             ×
                           </span>
                         </span>
                       ))}
                     </div>
                   )}
                 </div>
               ))}
             </div>
           </div>
         )}

         {/* Step 4: Department Files */}
         {currentStep === 4 && (
           <div>
             <h3 className="section-title">📁 Department Assignment</h3>

             <div className="add-department-button-container">
               <button
                 onClick={addDepartmentEntry}
                 className="btn btn-primary btn-primary-margin"
               >
                 + Add Department Entry
               </button>
             </div>

             {/* Department Entries as Separate Boxes */}
             {departmentEntries.map((entry) => (
               <div key={entry.id} className="department-box">
                 {/* Entry Header */}
                 <div className="department-header">
                   <h4 className="department-title">
                     Entry #{entry.serialNumber}
                   </h4>
                 </div>

                 {/* Department Selection Table */}
                 <div className="table-container">
                   <table className="department-table">
                     <thead>
                       <tr>
                         <th className="column-width-80">S.No</th>
                         <th className="column-width-200">Department</th>
                         <th className="column-width-120">Time</th>
                         <th className="column-width-150">Machine</th>
                         <th className="column-width-200">File Upload</th>
                         <th className="column-width-100">Action</th>
                       </tr>
                     </thead>
                     <tbody>
                       <tr>
                         <td className="table-cell-center-bold">
                           {entry.serialNumber}
                         </td>
                         <td>
                           <select
                             value={entry.selectedDepartment}
                             onChange={(e) => updateDepartmentEntry(entry.id, 'selectedDepartment', e.target.value)}
                             className="form-input table-cell-full-width"
                           >
                             <option value="">Select Department</option>
                             {/* Show current selection if already selected */}
                             {entry.selectedDepartment && !getAvailableDepartmentsForEntry(entry.id).includes(entry.selectedDepartment) && (
                               <option value={entry.selectedDepartment}>
                                 {entry.selectedDepartment}
                               </option>
                             )}
                             {/* Show available departments */}
                             {getAvailableDepartmentsForEntry(entry.id).map((process) => (
                               <option key={process} value={process}>
                                 {process}
                               </option>
                             ))}
                           </select>
                         </td>
                         <td>
                           {entry.selectedDepartment ? (
                             <input
                               type="text"
                               value={entry.time}
                               onChange={(e) => updateDepartmentEntry(entry.id, 'time', e.target.value)}
                               className="form-input table-cell-full-width"
                               placeholder="2 hours"
                             />
                           ) : (
                             <span className="table-cell-placeholder">-</span>
                           )}
                         </td>
                         <td>
                           {entry.selectedDepartment ? (
                             <select
                               value={entry.machine}
                               onChange={(e) => updateDepartmentEntry(entry.id, 'machine', e.target.value)}
                               className="form-input table-cell-full-width"
                             >
                               <option value="">Select Machine</option>
                               <option value="Machine 1">Machine 1</option>
                               <option value="Machine 2">Machine 2</option>
                               <option value="Machine 3">Machine 3</option>
                               <option value="Machine 4">Machine 4</option>
                               <option value="Machine 5">Machine 5</option>
                             </select>
                           ) : (
                             <span className="table-cell-placeholder">-</span>
                           )}
                         </td>
                         <td>
                           {entry.selectedDepartment ? (
                             <div>
                               <input
                                 type="file"
                                 multiple
                                 accept=".pdf,.doc,.docx,.jpg,.png,.dwg,.ai,.psd,.zip"
                                 onChange={(e) => {
                                   Array.from(e.target.files).forEach(file => {
                                     addFileToEntry(entry.id, file)
                                   })
                                   e.target.value = ''
                                 }}
                                 className="file-input"
                               />
                               {entry.files.length > 0 && (
                                 <div className="file-info">
                                   {entry.files.length} file(s) uploaded
                                 </div>
                               )}
                               {entry.files.length > 0 && (
                                 <div className="file-list">
                                   {entry.files.map((fileObj) => (
                                     <div key={fileObj.id} className="file-item">
                                       <span className="file-name">{fileObj.file.name}</span>
                                       <span
                                         className="file-remove"
                                         onClick={() => removeFileFromEntry(entry.id, fileObj.id)}
                                       >
                                         ×
                                       </span>
                                     </div>
                                   ))}
                                 </div>
                               )}
                             </div>
                           ) : (
                             <span className="table-cell-placeholder">No file chosen</span>
                           )}
                         </td>
                         <td className="table-cell-center">
                           <button
                             onClick={() => removeDepartmentEntry(entry.id)}
                             className="btn btn-danger btn-danger-action"
                           >
                             Delete
                           </button>
                         </td>
                       </tr>
                     </tbody>
                   </table>
                 </div>

                 {/* Department Materials and Consumables Display */}
                 {entry.selectedDepartment && (
                   <div className="materials-container">
                     <div className="department-materials-header">
                       {entry.selectedDepartment} - Materials, Consumables & Packing Materials
                     </div>

                     <div className="table-container">
                       <table className="department-table">
                         <thead>
                           <tr className="materials-table-header">
                             <th className="column-width-80">S.No</th>
                             <th className="column-width-100">Type</th>
                             <th>Name</th>
                             <th className="column-width-120">Size of Cutting Sheet</th>
                             <th className="column-width-120">No of UPS per Sheet</th>
                             <th className="column-width-120">Qty Required</th>
                             <th className="column-width-120">Qty in SQFT</th>
                             <th className="column-width-120">Quantity</th>
                           </tr>
                         </thead>
                         <tbody>
                           {/* Materials for this department */}
                           {bomMaterials
                             .filter(material => material.processes && material.processes.includes(entry.selectedDepartment))
                             .map((material, index) => (
                               <tr key={`material-${material.id}`}>
                                 <td className="table-cell-center">{index + 1}</td>
                                 <td>
                                   <span className="type-badge material-badge">Material</span>
                                 </td>
                                 <td className="table-cell-bold">
                                   📦 {material.name}
                                 </td>
                                 <td>
                                   <input
                                     type="text"
                                     value={material.sizeOfCuttingSheet}
                                     onChange={(e) => updateBOMMaterial(material.id, 'sizeOfCuttingSheet', e.target.value)}
                                     className="form-input table-cell-full-width"
                                     placeholder="48' x 24'"
                                   />
                                 </td>
                                 <td>
                                   <input
                                     type="number"
                                     value={material.noOfUpsPerCuttingSheet}
                                     onChange={(e) => updateBOMMaterial(material.id, 'noOfUpsPerCuttingSheet', e.target.value)}
                                     className="form-input table-cell-full-width"
                                     placeholder="14"
                                   />
                                 </td>
                                 <td>
                                   <input
                                     type="number"
                                     value={material.qtyOfCuttingSheetRequired}
                                     onChange={(e) => updateBOMMaterial(material.id, 'qtyOfCuttingSheetRequired', e.target.value)}
                                     className="form-input table-cell-full-width"
                                     placeholder="26.29"
                                   />
                                 </td>
                                 <td>
                                   <input
                                     type="number"
                                     value={material.qtyOfCuttingSheetInSqft}
                                     onChange={(e) => updateBOMMaterial(material.id, 'qtyOfCuttingSheetInSqft', e.target.value)}
                                     className="form-input table-cell-full-width"
                                     placeholder="210.29"
                                   />
                                 </td>
                                 <td className="table-cell-center">-</td>
                               </tr>
                             ))}

                           {/* Consumables for this department */}
                           {bomConsumables
                             .filter(consumable => consumable.processes && consumable.processes.includes(entry.selectedDepartment))
                             .map((consumable, index) => {
                               const materialCount = bomMaterials.filter(material =>
                                 material.processes && material.processes.includes(entry.selectedDepartment)
                               ).length;
                               return (
                                 <tr key={`consumable-${consumable.id}`}>
                                   <td className="table-cell-center">{materialCount + index + 1}</td>
                                   <td>
                                     <span className="type-badge consumable-badge">Consumable</span>
                                   </td>
                                   <td className="table-cell-bold">
                                     🧪 {consumable.name}
                                   </td>
                                   <td className="table-cell-center">-</td>
                                   <td className="table-cell-center">-</td>
                                   <td className="table-cell-center">-</td>
                                   <td className="table-cell-center">-</td>
                                   <td>
                                     <input
                                       type="number"
                                       value={consumable.quantity}
                                       onChange={(e) => updateBOMConsumable(consumable.id, 'quantity', e.target.value)}
                                       className="form-input table-cell-full-width"
                                       placeholder="Quantity"
                                     />
                                   </td>
                                 </tr>
                               );
                             })}

                           {/* Packing Materials for this department */}
                           {bomPackingMaterials
                             .filter(packingMaterial => packingMaterial.processes && packingMaterial.processes.includes(entry.selectedDepartment))
                             .map((packingMaterial, index) => {
                               const materialCount = bomMaterials.filter(material =>
                                 material.processes && material.processes.includes(entry.selectedDepartment)
                               ).length;
                               const consumableCount = bomConsumables.filter(consumable =>
                                 consumable.processes && consumable.processes.includes(entry.selectedDepartment)
                               ).length;
                               return (
                                 <tr key={`packing-${packingMaterial.id}`}>
                                   <td className="table-cell-center">{materialCount + consumableCount + index + 1}</td>
                                   <td>
                                     <span className="type-badge packing-badge">Packing</span>
                                   </td>
                                   <td className="table-cell-bold">
                                     📦 {packingMaterial.name}
                                   </td>
                                   <td className="table-cell-center">-</td>
                                   <td className="table-cell-center">-</td>
                                   <td className="table-cell-center">-</td>
                                   <td className="table-cell-center">-</td>
                                   <td>
                                     <input
                                       type="number"
                                       value={packingMaterial.quantity}
                                       onChange={(e) => updateBOMPackingMaterial(packingMaterial.id, 'quantity', e.target.value)}
                                       className="form-input table-cell-full-width"
                                       placeholder="Quantity"
                                     />
                                   </td>
                                 </tr>
                               );
                             })}
                         </tbody>
                       </table>
                     </div>

                     {/* Show message if no materials, consumables, or packing materials */}
                     {bomMaterials.filter(material => material.processes && material.processes.includes(entry.selectedDepartment)).length === 0 &&
                      bomConsumables.filter(consumable => consumable.processes && consumable.processes.includes(entry.selectedDepartment)).length === 0 &&
                      bomPackingMaterials.filter(packingMaterial => packingMaterial.processes && packingMaterial.processes.includes(entry.selectedDepartment)).length === 0 && (
                       <div className="empty-materials-message">
                         No materials, consumables, or packing materials assigned to {entry.selectedDepartment}
                       </div>
                     )}
                   </div>
                 )}
               </div>
             ))}

             {departmentEntries.length === 0 && (
               <div className="empty-state">
                 <p>No department entries added yet. Click "Add Department Entry" to get started.</p>
               </div>
             )}
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
 )
}

export default RecipeWizard
