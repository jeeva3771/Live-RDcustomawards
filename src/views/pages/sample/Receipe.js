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
  const [departmentItemOrders, setDepartmentItemOrders] = useState({})
  const [draggedItem, setDraggedItem] = useState(null)
  const [materialSellingPrice, setMaterialSellingPrice] = useState('')
  const [materialProfitMargin, setMaterialProfitMargin] = useState('')
  const [consumableSellingPrice, setConsumableSellingPrice] = useState('')
  const [consumableProfitMargin, setConsumableProfitMargin] = useState('')
  const [packingSellingPrice, setPackingSellingPrice] = useState('')
  const [packingProfitMargin, setPackingProfitMargin] = useState('')
  const [customCostingName, setCustomCostingName] = useState('')
  const [customCostingValue, setCustomCostingValue] = useState('')
  const [customCostingItems, setCustomCostingItems] = useState([])
  const [shippingCost, setShippingCost] = useState('200')

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

  const sizeOptions = [
    "8' x 4'",
    "4' x 4'",
    "6' x 3'",
    "10' x 5'",
    "12' x 6'",
    "2' x 2'",
    "3' x 3'",
    "48' x 24'",
  ]

  const filteredMaterials = allMaterials.filter((material) =>
    material.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const filteredConsumables = allConsumables.filter((consumable) =>
    consumable.toLowerCase().includes(consumableSearchTerm.toLowerCase()),
  )

  const filteredPackingMaterials = allPackingMaterials.filter((packingMaterial) =>
    packingMaterial.toLowerCase().includes(packingMaterialSearchTerm.toLowerCase()),
  )

  // Get items for a department in the custom order
  const getDepartmentItemsInOrder = (departmentName) => {
    const allItems = []

    // Get all items for this department
    bomConsumables
      .filter((consumable) => consumable.processes && consumable.processes.includes(departmentName))
      .forEach((consumable) => {
        allItems.push({ ...consumable, type: 'consumable' })
      })

    bomMaterials
      .filter((material) => material.processes && material.processes.includes(departmentName))
      .forEach((material) => {
        allItems.push({ ...material, type: 'material' })
      })

    bomPackingMaterials
      .filter(
        (packingMaterial) =>
          packingMaterial.processes && packingMaterial.processes.includes(departmentName),
      )
      .forEach((packingMaterial) => {
        allItems.push({ ...packingMaterial, type: 'packing' })
      })

    // If we have a custom order for this department, use it
    const customOrder = departmentItemOrders[departmentName]
    if (customOrder && customOrder.length > 0) {
      const orderedItems = []
      customOrder.forEach((orderItem) => {
        const item = allItems.find(
          (item) => item.id === orderItem.id && item.type === orderItem.type,
        )
        if (item) {
          orderedItems.push(item)
        }
      })
      // Add any new items that aren't in the custom order yet
      allItems.forEach((item) => {
        if (
          !customOrder.find((orderItem) => orderItem.id === item.id && orderItem.type === item.type)
        ) {
          orderedItems.push(item)
        }
      })
      return orderedItems
    }

    return allItems
  }

  // Drag and drop handlers
  const handleDragStart = (e, departmentName, index) => {
    const items = getDepartmentItemsInOrder(departmentName)
    setDraggedItem({ item: items[index], index, departmentName })
    e.dataTransfer.effectAllowed = 'move'
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
  }

  const handleDrop = (e, departmentName, dropIndex) => {
    e.preventDefault()

    if (!draggedItem || draggedItem.departmentName !== departmentName) {
      return
    }

    const items = getDepartmentItemsInOrder(departmentName)
    const newItems = [...items]

    // Remove the dragged item from its original position
    const [movedItem] = newItems.splice(draggedItem.index, 1)

    // Insert it at the new position
    newItems.splice(dropIndex, 0, movedItem)

    // Update the department order
    setDepartmentItemOrders((prev) => ({
      ...prev,
      [departmentName]: newItems.map((item) => ({ id: item.id, type: item.type })),
    }))

    setDraggedItem(null)
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
      files: [],
    }))

    const newBomConsumables = selectedConsumables.map((consumable) => ({
      id: Date.now() + Math.random(),
      name: consumable,
      quantity: '',
      processes: [],
      files: [],
    }))

    const newBomPackingMaterials = selectedPackingMaterials.map((packingMaterial) => ({
      id: Date.now() + Math.random(),
      name: packingMaterial,
      quantity: '',
      processes: [],
      files: [],
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
    setDepartmentEntries(departmentEntries.filter((entry) => entry.id !== entryId))
  }

  const updateDepartmentEntry = (entryId, field, value) => {
    setDepartmentEntries(
      departmentEntries.map((entry) =>
        entry.id === entryId ? { ...entry, [field]: value } : entry,
      ),
    )
  }

  const getAvailableDepartmentsForEntry = (currentEntryId) => {
    const selectedDepartments = departmentEntries
      .filter((entry) => entry.id !== currentEntryId && entry.selectedDepartment)
      .map((entry) => entry.selectedDepartment)

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

  // File management for individual items
  const addFileToMaterial = (materialId, file) => {
    setBomMaterials(
      bomMaterials.map((material) =>
        material.id === materialId
          ? {
              ...material,
              files: [...(material.files || []), { id: Date.now() + Math.random(), file }],
            }
          : material,
      ),
    )
  }

  const removeFileFromMaterial = (materialId, fileId) => {
    setBomMaterials(
      bomMaterials.map((material) =>
        material.id === materialId
          ? { ...material, files: (material.files || []).filter((f) => f.id !== fileId) }
          : material,
      ),
    )
  }

  const addFileToConsumable = (consumableId, file) => {
    setBomConsumables(
      bomConsumables.map((consumable) =>
        consumable.id === consumableId
          ? {
              ...consumable,
              files: [...(consumable.files || []), { id: Date.now() + Math.random(), file }],
            }
          : consumable,
      ),
    )
  }

  const removeFileFromConsumable = (consumableId, fileId) => {
    setBomConsumables(
      bomConsumables.map((consumable) =>
        consumable.id === consumableId
          ? { ...consumable, files: (consumable.files || []).filter((f) => f.id !== fileId) }
          : consumable,
      ),
    )
  }

  const addFileToPackingMaterial = (packingMaterialId, file) => {
    setBomPackingMaterials(
      bomPackingMaterials.map((packingMaterial) =>
        packingMaterial.id === packingMaterialId
          ? {
              ...packingMaterial,
              files: [...(packingMaterial.files || []), { id: Date.now() + Math.random(), file }],
            }
          : packingMaterial,
      ),
    )
  }

  const removeFileFromPackingMaterial = (packingMaterialId, fileId) => {
    setBomPackingMaterials(
      bomPackingMaterials.map((packingMaterial) =>
        packingMaterial.id === packingMaterialId
          ? {
              ...packingMaterial,
              files: (packingMaterial.files || []).filter((f) => f.id !== fileId),
            }
          : packingMaterial,
      ),
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

  const addCustomCosting = () => {
    if (customCostingName && customCostingValue) {
      setCustomCostingItems([
        ...customCostingItems,
        {
          id: Date.now() + Math.random(),
          name: customCostingName,
          value: parseFloat(customCostingValue) || 0,
        },
      ])
      setCustomCostingName('')
      setCustomCostingValue('')
    }
  }

  const removeCustomCosting = (id) => {
    setCustomCostingItems(customCostingItems.filter((item) => item.id !== id))
  }

  const calculateMaterialTotal = () => {
    return bomMaterials.reduce((total, material) => {
      const quantity = parseFloat(material.quantity) || 0
      return total + quantity
    }, 0)
  }

  const calculateConsumableTotal = () => {
    return bomConsumables.reduce((total, consumable) => {
      const quantity = parseFloat(consumable.quantity) || 0
      return total + quantity
    }, 0)
  }

  const calculatePackingTotal = () => {
    return bomPackingMaterials.reduce((total, packing) => {
      const quantity = parseFloat(packing.quantity) || 0
      return total + quantity
    }, 0)
  }

  const calculateCustomCostingTotal = () => {
    return customCostingItems.reduce((total, item) => total + item.value, 0)
  }

  const calculateSubTotal = () => {
    const materialTotal = calculateMaterialTotal()
    const consumableTotal = calculateConsumableTotal()
    const packingTotal = calculatePackingTotal()
    const customTotal = calculateCustomCostingTotal()
    return materialTotal + consumableTotal + packingTotal + customTotal
  }

  const calculateFinalTotal = () => {
    const subTotal = calculateSubTotal()
    const shipping = parseFloat(shippingCost) || 0
    return subTotal + shipping
  }

  const changeStep = (direction) => {
    if (direction === 1 && currentStep < 6) {
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
      departmentItemOrders,
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
          max-width: 1200px;
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
          border: 1px solid #e9ecef;
          border-radius: 8px;
          background: white;
        }

        .department-table {
          width: 100%;
          border-collapse: collapse;
          min-width: 1000px;
          table-layout: fixed;
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

        input[type="file"] {
          color: transparent; /* hides text */
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

        .column-width-sno {
          width: 8%;
        }

        .column-width-department {
          width: 25%;
        }

        .column-width-time {
          width: 15%;
        }

        .column-width-machine {
          width: 20%;
        }

        .column-width-file-upload {
          width: 22%;
        }

        .column-width-action {
          width: 10%;
        }

        .column-width-sno-materials {
          width: 5%;
        }

        .column-width-type {
          width: 8%;
        }

        .column-width-name {
          width: 15%;
        }

        .column-width-cutting-sheet {
          width: 12%;
        }

        .column-width-ups {
          width: 12%;
        }

        .column-width-qty-required {
          width: 12%;
        }

        .column-width-qty-sqft {
          width: 12%;
        }

        .column-width-quantity {
          width: 12%;
        }

        .column-width-file-upload-materials {
          width: 12%;
        }

        .draggable-row {
          cursor: move;
          user-select: none;
        }

        .draggable-row:hover {
          background: #f0f8ff !important;
        }

        .drag-handle {
          cursor: move;
          color: #6c757d;
          position: relative;
        }

        .drag-icon {
          font-weight: bold;
          margin-right: 8px;
          color: #9ca3af;
        }

        .draggable-row.dragging {
          opacity: 0.5;
        }

        .costing-section {
          margin-bottom: 30px;
        }

        .costing-table-container {
          border: 1px solid #e9ecef;
          border-radius: 8px;
          overflow: hidden;
          background: white;
        }

        .costing-table {
          width: 100%;
          border-collapse: collapse;
        }

        .costing-table th,
        .costing-table td {
          padding: 12px;
          text-align: left;
          border-bottom: 1px solid #e9ecef;
          font-size: 14px;
        }

        .section-header {
          font-weight: 600;
          font-size: 16px;
          text-align: center;
          padding: 16px;
        }

        .material-header {
          background: #e3f2fd;
          color: #1976d2;
        }

        .consumable-header {
          background: #fff3e0;
          color: #f57c00;
        }

        .packing-header {
          background: #f3e5f5;
          color: #7b1fa2;
        }

        .costing-input {
          width: 120px;
          padding: 6px 8px;
          border: 1px solid #ced4da;
          border-radius: 4px;
          font-size: 13px;
          text-align: center;
        }

        .total-row {
          background: #f8f9fa;
          font-weight: 600;
        }

        .total-label {
          text-align: right;
          font-weight: 600;
        }

        .total-value {
          text-align: center;
          font-weight: 600;
          color: #0061ed;
        }

        .custom-costing-header {
          display: flex;
          justify-content: space-between;
          background: #f8f9fa;
          padding: 16px;
          border-radius: 8px;
          margin-bottom: 16px;
        }

        .custom-costing-header h4 {
          margin: 0 0 12px 0;
          color: #495057;
        }

        .custom-costing-inputs {
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .custom-input {
          padding: 8px 12px;
          border: 1px solid #ced4da;
          border-radius: 4px;
          font-size: 14px;
          min-width: 150px;
        }

        .custom-costing-list {
          background: white;
          border: 1px solid #e9ecef;
          border-radius: 8px;
          padding: 16px;
        }

        .custom-costing-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 0;
          border-bottom: 1px solid #f8f9fa;
        }

        .custom-costing-item:last-child {
          border-bottom: none;
        }

        .custom-item-name {
          font-weight: 500;
          color: #495057;
        }

        .custom-item-value {
          font-weight: 600;
          color: #28a745;
        }

        .btn-small {
          padding: 4px 8px;
          font-size: 12px;
        }

        .costing-summary {
          background: #f8f9fa;
          border: 2px solid #0061ed;
          border-radius: 8px;
          padding: 20px;
          width: 276px;
          // margin-top: 30px;
        }

        .summary-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 0;
          font-size: 16px;
        }

        .summary-label {
          font-weight: 500;
          color: #495057;
        }

        .summary-value {
          font-weight: 600;
          color: #0061ed;
        }

        .final-total {
          border-top: 2px solid #0061ed;
          margin-top: 12px;
          padding-top: 12px;
          font-size: 18px;
        }

        .final-total .summary-value {
          color: #28a745;
          font-size: 20px;
        }

        .shipping-input {
          width: 80px;
          padding: 4px 8px;
          border: 1px solid #ced4da;
          border-radius: 4px;
          font-size: 14px;
          text-align: center;
          font-weight: 600;
          color: #0061ed;
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
            grid-template-columns: repeat(4, 1fr);
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
            { num: 5, title: 'Costing' },
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
                    (selectedMaterials.length > 0 ||
                      selectedConsumables.length > 0 ||
                      selectedPackingMaterials.length > 0)
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
            <div>
              <div className="two-column-layout">
                {/* Materials Section - first */}
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

              {/* Packing Materials Section - Third - Full Width */}
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
                        <span
                          onClick={() => removePackingMaterial(packingMaterial)}
                          className="remove-btn"
                        >
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

                {/* Consumables second */}
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

                {/* Packing Materials Third */}
                {bomPackingMaterials.map((packingMaterial, index) => (
                  <div key={packingMaterial.id} className="bom-card packing">
                    <h4 className="bom-card-title">Packing Material {index + 1}</h4>

                    <div className="form-group">
                      <label className="form-label">Packing Material Type</label>
                      <input
                        type="text"
                        value={packingMaterial.name}
                        readOnly
                        className="form-input"
                      />
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
                        {getAvailableProcessesForPackingMaterial(packingMaterial.id).map(
                          (process) => (
                            <option key={process} value={process}>
                              {process}
                            </option>
                          ),
                        )}
                      </select>
                    </div>

                    {/* Show selected processes as tags below the dropdown */}
                    {packingMaterial.processes && packingMaterial.processes.length > 0 && (
                      <div className="selected-process-tag">
                        {packingMaterial.processes.map((process) => (
                          <span key={process} className="process-tag">
                            {process}
                            <span
                              onClick={() =>
                                removeProcessFromPackingMaterial(packingMaterial.id, process)
                              }
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
                <button onClick={addDepartmentEntry} className="btn btn-primary btn-primary-margin">
                  + Add Department Entry
                </button>
              </div>

              {/* Department Entries as Separate Boxes */}
              {departmentEntries.map((entry) => (
                <div key={entry.id} className="department-box">
                  {/* Entry Header */}
                  <div className="department-header">
                    <h4 className="department-title">Entry {entry.serialNumber}</h4>
                  </div>

                  {/* Department Selection Table */}
                  <div className="table-container">
                    <table className="department-table">
                      <thead>
                        <tr>
                          <th className="column-width-sno">S.No</th>
                          <th className="column-width-department">Department</th>
                          <th className="column-width-time">Time</th>
                          <th className="column-width-machine">Machine</th>
                          <th className="column-width-file-upload">File Upload</th>
                          <th className="column-width-action">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="table-cell-center-bold">{entry.serialNumber}</td>
                          <td>
                            <select
                              value={entry.selectedDepartment}
                              onChange={(e) =>
                                updateDepartmentEntry(
                                  entry.id,
                                  'selectedDepartment',
                                  e.target.value,
                                )
                              }
                              className="form-input table-cell-full-width"
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
                                onChange={(e) =>
                                  updateDepartmentEntry(entry.id, 'machine', e.target.value)
                                }
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
                                    Array.from(e.target.files).forEach((file) => {
                                      addFileToEntry(entry.id, file)
                                    })
                                    e.target.value = ''
                                  }}
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
                          <td>
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
                              <th className="column-width-sno-materials">S.No</th>
                              <th className="column-width-type">Type</th>
                              <th className="column-width-name">Name</th>
                              <th className="column-width-cutting-sheet">Size of Cutting Sheet</th>
                              <th className="column-width-ups">No of UPS per Sheet</th>
                              <th className="column-width-qty-required">Qty Required</th>
                              <th className="column-width-qty-sqft">Qty in SQFT</th>
                              <th className="column-width-quantity">Quantity</th>
                              <th className="column-width-file-upload-materials">File Upload</th>
                            </tr>
                          </thead>
                          <tbody>
                            {getDepartmentItemsInOrder(entry.selectedDepartment).map(
                              (item, index) => (
                                <tr
                                  key={`${item.type}-${item.id}`}
                                  draggable="true"
                                  onDragStart={(e) =>
                                    handleDragStart(e, entry.selectedDepartment, index)
                                  }
                                  onDragOver={handleDragOver}
                                  onDrop={(e) => handleDrop(e, entry.selectedDepartment, index)}
                                  className="draggable-row"
                                >
                                  <td className="table-cell-center drag-handle">
                                    <span className="drag-icon">⋮⋮</span>
                                    {index + 1}
                                  </td>
                                  <td>
                                    <span
                                      className={`type-badge ${item.type === 'material' ? 'material-badge' : item.type === 'consumable' ? 'consumable-badge' : 'packing-badge'}`}
                                    >
                                      {item.type === 'material'
                                        ? 'Material'
                                        : item.type === 'consumable'
                                          ? 'Consumable'
                                          : 'Packing'}
                                    </span>
                                  </td>
                                  <td className="table-cell-bold">
                                    {item.type === 'material'
                                      ? '📦'
                                      : item.type === 'consumable'
                                        ? '🧪'
                                        : '📦'}{' '}
                                    {item.name}
                                  </td>
                                  {item.type === 'material' ? (
                                    <>
                                      <td>
                                        <input
                                          type="text"
                                          value={item.sizeOfCuttingSheet}
                                          onChange={(e) =>
                                            updateBOMMaterial(
                                              item.id,
                                              'sizeOfCuttingSheet',
                                              e.target.value,
                                            )
                                          }
                                          className="form-input table-cell-full-width"
                                          placeholder="48' x 24'"
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="number"
                                          value={item.noOfUpsPerCuttingSheet}
                                          onChange={(e) =>
                                            updateBOMMaterial(
                                              item.id,
                                              'noOfUpsPerCuttingSheet',
                                              e.target.value,
                                            )
                                          }
                                          className="form-input table-cell-full-width"
                                          placeholder="14"
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="number"
                                          value={item.qtyOfCuttingSheetRequired}
                                          onChange={(e) =>
                                            updateBOMMaterial(
                                              item.id,
                                              'qtyOfCuttingSheetRequired',
                                              e.target.value,
                                            )
                                          }
                                          className="form-input table-cell-full-width"
                                          placeholder="26.29"
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="number"
                                          value={item.qtyOfCuttingSheetInSqft}
                                          onChange={(e) =>
                                            updateBOMMaterial(
                                              item.id,
                                              'qtyOfCuttingSheetInSqft',
                                              e.target.value,
                                            )
                                          }
                                          className="form-input table-cell-full-width"
                                          placeholder="210.29"
                                        />
                                      </td>
                                      <td className="table-cell-center">-</td>
                                    </>
                                  ) : (
                                    <>
                                      <td className="table-cell-center">-</td>
                                      <td className="table-cell-center">-</td>
                                      <td className="table-cell-center">-</td>
                                      <td className="table-cell-center">-</td>
                                      <td>
                                        <input
                                          type="number"
                                          value={item.quantity}
                                          onChange={(e) => {
                                            if (item.type === 'consumable') {
                                              updateBOMConsumable(
                                                item.id,
                                                'quantity',
                                                e.target.value,
                                              )
                                            } else {
                                              updateBOMPackingMaterial(
                                                item.id,
                                                'quantity',
                                                e.target.value,
                                              )
                                            }
                                          }}
                                          className="form-input table-cell-full-width"
                                          placeholder="Quantity"
                                        />
                                      </td>
                                    </>
                                  )}
                                  <td>
                                    <input
                                      type="file"
                                      multiple
                                      accept=".pdf,.doc,.docx,.jpg,.png,.dwg,.ai,.psd,.zip"
                                      onChange={(e) => {
                                        Array.from(e.target.files).forEach((file) => {
                                          if (item.type === 'material') {
                                            addFileToMaterial(item.id, file)
                                          } else if (item.type === 'consumable') {
                                            addFileToConsumable(item.id, file)
                                          } else {
                                            addFileToPackingMaterial(item.id, file)
                                          }
                                        })
                                        e.target.value = ''
                                      }}
                                    />
                                  </td>
                                </tr>
                              ),
                            )}
                          </tbody>
                        </table>
                      </div>

                      {/* Show message if no materials, consumables, or packing materials */}
                      {getDepartmentItemsInOrder(entry.selectedDepartment).length === 0 && (
                        <div className="empty-materials-message">
                          No consumables, materials, or packing materials assigned to{' '}
                          {entry.selectedDepartment}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}

              {departmentEntries.length === 0 && (
                <div className="empty-state">
                  <p>
                    No department entries added yet. Click "Add Department Entry" to get started.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Step 5: Costing */}
          {currentStep === 5 && (
            <div>
              <h3 className="section-title">💰 Costing Summary</h3>

              {/* Material Section */}
              <div className="costing-section">
                <div className="costing-table-container">
                  <table className="costing-table">
                    <thead>
                      <tr>
                        <th colSpan={7} className="section-header material-header">
                          Material
                        </th>
                      </tr>
                      <tr>
                        <th>Material Type</th>
                        <th>Size</th>
                        <th>Ups</th>
                        <th>Quantity</th>
                        <th>Selling Rate</th>
                        <th>Profit Margin</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bomMaterials.map((material, index) => (
                        <tr key={material.id}>
                          <td>{material.name}</td>
                          <td>{material.size || '-'}</td>
                          <td>{material.ups || '-'}</td>
                          <td>{material.quantity || '-'}</td>
                          <td>
                            <input
                              type="number"
                              value={material.sellingPrice || ''}
                              onChange={(e) =>
                                updateBOMMaterial(material.id, 'sellingPrice', e.target.value)
                              }
                              className="costing-input"
                              placeholder="10"
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              value={material.profitMargin || ''}
                              onChange={(e) =>
                                updateBOMMaterial(material.id, 'profitMargin', e.target.value)
                              }
                              className="costing-input"
                              placeholder="10%"
                            />
                          </td>
                          <td>1</td>
                        </tr>
                      ))}
                      <tr className="total-row">
                        <td colSpan="6" className="total-label">
                          Total
                        </td>
                        <td className="total-value">₹10000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Consumable Section */}
              <div className="costing-section">
                <div className="costing-table-container">
                  <table className="costing-table">
                    <thead>
                      <tr>
                        <th colSpan={5} className="section-header consumable-header">
                          Consumable
                        </th>
                      </tr>
                      <tr>
                        <th>Consumable Type</th>
                        <th>Quantity</th>
                        <th>Selling Rate</th>
                        <th>Profit Margin</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bomConsumables.map((consumable, index) => (
                        <tr key={consumable.id}>
                          <td>{consumable.name}</td>
                          <td>{consumable.quantity || '-'}</td>
                          <td>
                            <input
                              type="number"
                              value={consumable.sellingPrice || ''}
                              onChange={(e) =>
                                updateBOMConsumable(consumable.id, 'sellingPrice', e.target.value)
                              }
                              className="costing-input"
                              placeholder="10"
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              value={consumable.profitMargin || ''}
                              onChange={(e) =>
                                updateBOMConsumable(consumable.id, 'profitMargin', e.target.value)
                              }
                              className="costing-input"
                              placeholder="10%"
                            />
                          </td>
                          <td>1</td>
                        </tr>
                      ))}
                      <tr className="total-row">
                        <td colSpan="4" className="total-label">
                          Total
                        </td>
                        <td className="total-value">₹50000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Packing Section */}
              <div className="costing-section">
                <div className="costing-table-container">
                  <table className="costing-table">
                    <thead>
                      <tr>
                        <th colSpan={5} className="section-header packing-header">
                          Packing
                        </th>
                      </tr>
                      <tr>
                        <th>Packing Material Type</th>
                        <th>Quantity</th>
                        <th>Selling Rate</th>
                        <th>Profit Margin</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bomPackingMaterials.map((packing, index) => (
                        <tr key={packing.id}>
                          <td>{packing.name}</td>
                          <td>{packing.quantity || '-'}</td>
                          <td>
                            <input
                              type="number"
                              value={packing.sellingPrice || ''}
                              onChange={(e) =>
                                updateBOMPackingMaterial(packing.id, 'sellingPrice', e.target.value)
                              }
                              className="costing-input"
                              placeholder="10"
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              value={packing.profitMargin || ''}
                              onChange={(e) =>
                                updateBOMPackingMaterial(packing.id, 'profitMargin', e.target.value)
                              }
                              className="costing-input"
                              placeholder="10%"
                            />
                          </td>
                          <td>1</td>
                        </tr>
                      ))}
                      <tr className="total-row">
                        <td colSpan="4" className="total-label">
                          Total
                        </td>
                        <td className="total-value">₹10000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Custom Costing Section */}
              <div className="costing-section">
                <div className="custom-costing-header">
                  <div>
                  <h4>Custom Costing</h4>
                  <div className="custom-costing-inputs">
                    <input
                      type="text"
                      placeholder="Column name"
                      value={customCostingName}
                      onChange={(e) => setCustomCostingName(e.target.value)}
                      className="custom-input"
                    />
                    <input
                      type="number"
                      placeholder="Value"
                      value={customCostingValue}
                      onChange={(e) => setCustomCostingValue(e.target.value)}
                      className="custom-input"
                    />
                    <button onClick={addCustomCosting} className="btn btn-primary">
                      Add
                    </button>
                  </div>
                  </div>
                  <div className="costing-summary">
                <div className="summary-row">
                  <span className="summary-label">Sub Total:</span>
                  <span className="summary-value">₹10,000</span>
                </div>
                {customCostingItems.length > 0 &&
                  customCostingItems.map((item) => (
                    <div className="summary-row" key={item.name}>
                      <span className="summary-label">{item.name}:</span>
                      <span className="summary-value">₹{item.value.toFixed(2)}</span>
                    </div>
                  ))}

                {/* <div className="summary-row">
                  <span className="summary-label">Shipping:</span>
                  <span className="summary-value">
                    ₹
                    <input
                      type="number"
                      value={shippingCost}
                      onChange={(e) => setShippingCost(e.target.value)}
                      className="shipping-input"
                    />
                  </span>
                </div> */}
                <div className="summary-row final-total">
                  <span className="summary-label">Final Total:</span>
                  <span className="summary-value">₹{calculateFinalTotal().toFixed(2)}</span>
                </div>
              </div>
                </div>

                {/* {customCostingItems.length > 0 && (
                  <div className="custom-costing-list">
                    {customCostingItems.map((item) => (
                      <div key={item.id} className="custom-costing-item">
                        <span className="custom-item-name">{item.name}</span>
                        <span className="custom-item-value">₹{item.value.toFixed(2)}</span>
                        <button
                          onClick={() => removeCustomCosting(item.id)}
                          className="btn btn-danger btn-small"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                )} */}
              </div>

              {/* Summary Section */}

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
            {currentStep === 5 ? 'Finish' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default RecipeWizard
