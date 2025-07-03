import React, { useState } from 'react'
import award1 from '../../../../public/award1.avif'
import award2 from '../../../../public/awards3.webp'
import award4 from '../../../../public/award4.webp'
import award5 from '../../../../public/award5.jpg'
import award6 from '../../../../public/award6.jpeg'

import { CButton, CCol, CFormLabel, CFormSelect } from '@coreui/react'
import { useNavigate } from 'react-router-dom'
import CIcon from '@coreui/icons-react'
import noImage from '../../../../public/noimage.jpg'
import {
  cilSearch,
  cilPencil,
  cilTrash,
  cilInfo,
  cilSortAscending,
  cilSortDescending,
  cilCloudUpload,
  cilShare,
  cilEnvelopeClosed,
} from '@coreui/icons'

const EnhancedProductCards = () => {
  const [success, setSuccess] = useState(false)
  const [expandedCards, setExpandedCards] = useState(new Set())
  const [searchTerm, setSearchTerm] = useState('')
  const [productImages, setProductImages] = useState({
    4: [award2, award1, award6], // Adding 3 additional images to ACRYLIC PLAQUE (id: 4)
  })
  const [modalProduct, setModalProduct] = useState(null)
  const [assignedPersons, setAssignedPersons] = useState({})
  const [productRemarks, setProductRemarks] = useState({})
  const [personModalProduct, setPersonModalProduct] = useState(null)
  const [tempSelectedPerson, setTempSelectedPerson] = useState('')
  const [tempRemarks, setTempRemarks] = useState('')
  const [uploadModalProduct, setUploadModalProduct] = useState(null)
  const [selectedFile, setSelectedFile] = useState(null)
  const [watermarkModalProduct, setWatermarkModalProduct] = useState(null)
  const [selectedWatermark, setSelectedWatermark] = useState('')
  const [canceledProducts, setCanceledProducts] = useState(new Set())
  const [currentImageIndex, setCurrentImageIndex] = useState({})
  const [modalImageIndex, setModalImageIndex] = useState({})
  const [sampleModalProduct, setSampleModalProduct] = useState(null)
  const [approvedImages, setApprovedImages] = useState(new Set()) // Track approved images
  const navigate = useNavigate()

  // Get screen size for responsive design
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Responsive breakpoints
  const isMobile = windowWidth <= 480
  const isTablet = windowWidth <= 768
  const isSmallDesktop = windowWidth <= 1024

  // Available persons list
  const availablePersons = ['Ronald', 'Melroy', 'Kaushal', 'Priya', 'Arun', 'Neha', 'Vikram']

  // Product data with additional fields and maxImages
  const products = [
    {
      id: 4,
      name: 'ACRYLIC PLAQUE',
      jobNo: '14891',
      client: 'TECH INNOVATIONS',
      email: 'contact@techinno.com',
      contactNo: '87654 32109',
      startTime: '2025-02-09 09:10 AM',
      endTime: '2025-02-10 10:10 AM',
      quantity: 15,
      status: 'PRODUCTION',
      size: '12 Inches',
      deliveryDate: '19-09-2025',
      deliveryLocation: 'Powai - MUMBAI',
      deliveryMode: 'HAND DELIVERY',
      mainImage: null,
      enquiryOrigin: 'WhatsApp',
      budget: '₹30,000',
      preferedMaterial: 'Clear Acrylic',
      briefing:
        'Modern acrylic plaques for startup milestone celebration. Minimalist design preferred.',
      paymentTerms: '50% Advance & Balance when Material is Ready',
      maxImages: 4,
      remarks: 'Good product',
    },

    {
      id: 5,
      name: 'WOODEN SHIELD',
      jobNo: '14892',
      client: 'HERITAGE CLUB',
      email: 'heritage@club.com',
      contactNo: '99887 76543',
      startTime: '2025-02-09 09:10 AM',
      endTime: '2025-02-10 10:10 AM',
      quantity: 30,
      status: 'PRINTING',
      size: '14 Inches',
      deliveryDate: '19-02-2025',
      deliveryLocation: 'Fort - MUMBAI',
      deliveryMode: 'COURIER',
      mainImage: award6,
      enquiryOrigin: 'Referral',
      budget: '₹90,000',
      preferedMaterial: 'Teak Wood',
      briefing:
        'Traditional wooden shields for cultural event awards. Intricate carving work required.',
      paymentTerms: '50% advance & Bal before dispatch & delivery',
      maxImages: 1,
      remarks: 'Special product',
    },
    {
      id: 6,
      name: 'GLASS TROPHY',
      jobNo: '14893',
      client: 'EXCELLENCE AWARDS',
      email: 'awards@excellence.com',
      contactNo: '98123 45678',
      quantity: 12,
      size: '16 Inches',
      startTime: '2025-02-09 09:10 AM',
      endTime: '2025-02-10 10:10 AM',
      status: 'BILLING',
      deliveryDate: '11-01-2025',
      deliveryLocation: 'Andheri - MUMBAI',
      deliveryMode: 'EXPRESS DELIVERY',
      mainImage: null,
      enquiryOrigin: 'LinkedIn',
      budget: '₹85,000',
      preferedMaterial: 'Borosilicate Glass',
      briefing:
        'Premium glass trophies for annual excellence awards ceremony. LED base lighting required.',
      paymentTerms: 'Corporate Credit',
      maxImages: 3,
      remarks: 'Good product',
    },
    {
      id: 3,
      name: 'GOLD MEDAL',
      jobNo: '14890',
      client: 'SPORTS FEDERATION',
      email: 'awards@sports.com',
      contactNo: '91234 56789',
      status: 'SAMPLING',
      quantity: 100,
      size: '3 Inches',
      deliveryDate: '19-01-2026',
      startTime: '2025-02-09 09:10 AM',
      endTime: '2025-02-10 10:10 AM',
      deliveryLocation: 'Worli Sports Complex - MUMBAI',
      deliveryMode: 'PICKUP',
      mainImage: award4,
      enquiryOrigin: 'Email Inquiry',
      budget: '₹1,20,000',
      preferedMaterial: 'Gold Plated Metal',
      briefing:
        'Olympic-style gold medals for inter-school sports competition. Different sports icons required.',
      paymentTerms: 'Corporate Credit',
      maxImages: 1,
      remarks: 'Special product',
    },

    {
      id: 1,
      name: 'MIC TROPHY',
      jobNo: '14888',
      client: 'CLEONETT EVENTS',
      email: 'steffie@cleonett.com',
      startTime: '2025-02-09 09:10 AM',
      endTime: '2025-02-10 10:10 AM',
      contactNo: '98337 40939',
      quantity: 46,
      size: '10 Inches',
      status: 'ENQUIRY',
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
    },
    {
      id: 2,
      name: 'CRYSTAL AWARD',
      jobNo: '14889',
      client: 'CORPORATE SOLUTIONS',
      email: 'info@corpsol.com',
      contactNo: '98765 43210',
      status: 'DESIGN',
      quantity: 25,
      size: '8 Inches',
      deliveryDate: '17-04-2025',
      deliveryLocation: 'Bandra Kurla Complex - MUMBAI',
      deliveryMode: 'COURIER',
      startTime: '2025-02-09 09:10 AM',
      endTime: '2025-02-10 10:10 AM',
      mainImage: award2,
      enquiryOrigin: 'Direct Call',
      budget: '₹75,000',
      preferedMaterial: 'Premium Crystal',
      briefing:
        'Elegant crystal awards for employee recognition ceremony. Custom text engraving required.',
      paymentTerms: '100% Advance',
      maxImages: 1,
      remarks: 'Special product',
    },
  ]

  // Filter products based on search term
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.jobNo.includes(searchTerm) ||
      product.product?.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getDeliveryModeClass = (mode) => {
    switch (mode) {
      case 'PRINTING':
        return 'status-printing'
      case 'DESIGN':
        return 'status-design'
      case 'ENQUIRY':
        return 'status-enquiry'
      case 'PRODUCTION':
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
      default:
        return 'status-default'
    }
  }

  // Image handling functions
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

  const canShowNextPrevious = (product) => {
    const images = getProductImages(product.id)
    return images.length > 1 || (images.length === 0 && product.mainImage)
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

  const handleModalPreviousImage = (productId) => {
    const images = getProductImages(productId)
    const product = products.find((p) => p.id === productId)
    const allImages = [...(product.mainImage ? [product.mainImage] : []), ...images]

    if (allImages.length <= 1) return

    setModalImageIndex((prev) => ({
      ...prev,
      [productId]: ((prev[productId] || 0) - 1 + allImages.length) % allImages.length,
    }))
  }

  const handleModalNextImage = (productId) => {
    const images = getProductImages(productId)
    const product = products.find((p) => p.id === productId)
    const allImages = [...(product.mainImage ? [product.mainImage] : []), ...images]

    if (allImages.length <= 1) return

    setModalImageIndex((prev) => ({
      ...prev,
      [productId]: ((prev[productId] || 0) + 1) % allImages.length,
    }))
  }

  // Modal functions
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

  const openPersonModal = (product) => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
    setPersonModalProduct(product)
    setTempSelectedPerson(assignedPersons[product.id] || '')
    setTempRemarks(productRemarks[product.id] || '')
    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = `${scrollbarWidth}px`
  }

  const closePersonModal = () => {
    setPersonModalProduct(null)
    setTempSelectedPerson('')
    setTempRemarks('')
    document.body.style.overflow = 'unset'
    document.body.style.paddingRight = '0px'
  }

  const openWatermarkModal = (product) => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
    setWatermarkModalProduct(product)
    setSelectedWatermark('')
    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = `${scrollbarWidth}px`
  }

  const closeWatermarkModal = () => {
    setWatermarkModalProduct(null)
    setSelectedWatermark('')
    document.body.style.overflow = 'unset'
    document.body.style.paddingRight = '0px'
  }

  // const openSampleModal = (product) => {
  //   const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
  //   setSampleModalProduct(product)
  //   document.body.style.overflow = 'hidden'
  //   document.body.style.paddingRight = `${scrollbarWidth}px`
  // }

  const closeSampleModal = () => {
    setSampleModalProduct(null)
    document.body.style.overflow = 'unset'
    document.body.style.paddingRight = '0px'
  }

  const confirmPersonAssignment = () => {
    if (tempSelectedPerson && personModalProduct) {
      setAssignedPersons((prev) => ({
        ...prev,
        [personModalProduct.id]: tempSelectedPerson,
      }))
      setProductRemarks((prev) => ({
        ...prev,
        [personModalProduct.id]: tempRemarks,
      }))
      closePersonModal()
    }
  }

  const confirmWatermarkSelection = () => {
    if (selectedWatermark && watermarkModalProduct) {
      const watermarkText = selectedWatermark === 'yes' ? ' (With Watermark)' : ' (No Watermark)'
      closeWatermarkModal()
      handleWhatsAppShare(watermarkModalProduct, watermarkText)
      handleEmailShare(watermarkModalProduct, watermarkText)
    }
  }

  const handleTickAction = (product) => {
    openWatermarkModal(product)
  }

  const handleCancelAction = (product) => {
    setCanceledProducts((prev) => new Set([...prev, product.id]))
  }

  const handleApproveImage = (imageKey) => {
    setApprovedImages((prev) => new Set([...prev, imageKey]))
  }

  // Generate job number with letter suffix for multiple images
  const generateJobNumberWithSuffix = (product, imageIndex) => {
    const allImages = [
      ...(product.mainImage ? [product.mainImage] : []),
      ...getProductImages(product.id),
    ]
    if (allImages.length <= 1) {
      return product.jobNo
    }
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
    return `${letters[imageIndex]}`
  }

  // Check if any image is approved for the product
  const hasApprovedImage = (product) => {
    const allImages = [
      ...(product.mainImage ? [product.mainImage] : []),
      ...getProductImages(product.id),
    ]
    return allImages.some((_, index) => {
      const imageKey = `${product.id}_${index}`
      return approvedImages.has(imageKey)
    })
  }

  const handleWhatsAppShare = (product, watermarkText = '') => {
    const currentImage = productImages[product.id] || product.mainImage
    const assignedPerson = assignedPersons[product.id]
    const remarks = productRemarks[product.id]

    const message = `🏆 *${product.name}* (Job No: ${product.jobNo})${watermarkText}

👤 *Client Details:*
• Client: ${product.client}
• Email: ${product.email}
• Contact: ${product.contactNo}

📦 *Product Information:*
• Quantity: ${product.quantity}
• Size: ${product.size}
• Status: ${product.status}

💰 *Financial Details:*
• Budget: ${product.budget}
• Payment Terms: ${product.paymentTerms}

🚚 *Delivery Information:*
• Delivery Date: ${product.deliveryDate}
• Delivery Location: ${product.deliveryLocation}
• Delivery Mode: ${product.deliveryMode}

📋 *Additional Details:*
• Enquiry Origin: ${product.enquiryOrigin}
• Preferred Material: ${product.preferedMaterial}
• Briefing: ${product.briefing}

${assignedPerson ? `👨‍💼 *Assigned Person:* ${assignedPerson}` : ''}
${remarks ? `📝 *Remarks:* ${remarks}` : ''}

${currentImage ? '📸 Product image is available for reference.' : ''}

Best regards,
Your Team`

    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleEmailShare = (product, watermarkText = '') => {
    const assignedPerson = assignedPersons[product.id]
    const remarks = productRemarks[product.id]

    const subject = `Complete Product Details - ${product.name} (Job No: ${product.jobNo})${watermarkText}`
    const body = `Dear Client,

Please find the complete details of your order:

=== PRODUCT DETAILS ===
Product Name: ${product.name}
Job Number: ${product.jobNo}
Client: ${product.client}
Quantity: ${product.quantity}
Size: ${product.size}
Status: ${product.status}${watermarkText}

=== CONTACT INFORMATION ===
Email: ${product.email}
Contact Number: ${product.contactNo}

=== FINANCIAL DETAILS ===
Budget: ${product.budget}
Payment Terms: ${product.paymentTerms}

=== DELIVERY INFORMATION ===
Delivery Date: ${product.deliveryDate}
Delivery Location: ${product.deliveryLocation}
Delivery Mode: ${product.deliveryMode}

=== ADDITIONAL INFORMATION ===
Enquiry Origin: ${product.enquiryOrigin}
Preferred Material: ${product.preferedMaterial}
Briefing: ${product.briefing}

${
  assignedPerson
    ? `=== ASSIGNMENT DETAILS ===
Assigned Person: ${assignedPerson}`
    : ''
}

${remarks ? `Remarks: ${remarks}` : ''}

${productImages[product.id] || product.mainImage ? 'Product image is available for reference.' : 'Product image will be shared separately.'}

If you have any questions or need further clarification, please don't hesitate to contact us.

Best regards,
Your Team`

    const mailtoUrl = `mailto:${product.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoUrl
  }

  // Sample Modal Component
  const SampleModal = ({ product, onClose }) => {
    if (!product) return null

    const allImages = [
      ...(product.mainImage ? [product.mainImage] : []),
      ...getProductImages(product.id),
    ]

    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="sample-modal" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h3 className="sample-modal-title">Assignment Details - {product.name}</h3>
            <button className="close-button" onClick={onClose}>
              ×
            </button>
          </div>

          <div className="sample-modal-content">
            <table className="sample-table">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Image</th>
                  <th>Start Time</th>
                  <th>End Time</th>
                  <th>Client Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {allImages.map((image, index) => {
                  const imageKey = `${product.id}_${index}`
                  const isApproved = approvedImages.has(imageKey)
                  const jobNoWithSuffix = generateJobNumberWithSuffix(product, index)

                  return (
                    <tr key={index}>
                      <td className="job-number-cell">{jobNoWithSuffix}</td>
                      <td>
                        <img
                          src={image || noImage}
                          alt={`${product.name} - Image ${index + 1}`}
                          className="sample-image"
                        />
                      </td>
                      <td>{product.startTime || '-'}</td>
                      <td>{product.endTime || '-'}</td>
                      <td>
                        {isApproved ? (
                          <span className="approved-status">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                            Approved
                          </span>
                        ) : (
                          <span className="approve-status">Pending</span>
                        )}
                      </td>
                      <td>
                        {!isApproved ? (
                          <button
                            className="approve-btn"
                            onClick={() => handleApproveImage(imageKey)}
                          >
                            Approve
                          </button>
                        ) : (
                          <span className="approved-tick">✓</span>
                        )}

                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }

  // Watermark Modal Component
  const WatermarkModal = ({ product, onClose }) => {
    if (!product) return null

    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="watermark-modal" onClick={(e) => e.stopPropagation()}>
          <h3 className="watermark-modal-title">Watermark Selection</h3>

          <p className="watermark-modal-subtitle">
            Do you want to include a watermark on the shared product image?
          </p>

          <div className="watermark-options">
            <label className={`watermark-option ${selectedWatermark === 'yes' ? 'selected' : ''}`}>
              <input
                type="radio"
                name="watermark"
                value="yes"
                checked={selectedWatermark === 'yes'}
                onChange={(e) => setSelectedWatermark(e.target.value)}
                className="watermark-radio"
              />
              <div>
                <div className="watermark-option-title">Yes, with watermark</div>
              </div>
            </label>

            <label className={`watermark-option ${selectedWatermark === 'no' ? 'selected' : ''}`}>
              <input
                type="radio"
                name="watermark"
                value="no"
                checked={selectedWatermark === 'no'}
                onChange={(e) => setSelectedWatermark(e.target.value)}
                className="watermark-radio"
              />
              <div>
                <div className="watermark-option-title">No, without watermark</div>
              </div>
            </label>
          </div>

          <div className="watermark-modal-actions">
            <button onClick={onClose} className="btn-cancel">
              Cancel
            </button>
            <button
              onClick={() => handleWhatsAppShare(product)}
              className="btn-action"
              disabled={!selectedWatermark}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516" />
              </svg>
            </button>
            <button
              onClick={() => handleEmailShare(product)}
              className="btn-action"
              disabled={!selectedWatermark}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Person Modal Component
  const PersonModal = ({ product, onClose }) => {
    if (!product) return null

    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="person-modal" onClick={(e) => e.stopPropagation()}>
          <h3 className="person-modal-title">Assign Person to {product.name}</h3>

          <div className="person-modal-content">
            <CCol className="position-relative mb-2">
              <CFormLabel htmlFor="status" className="form-label">
                Select Person
              </CFormLabel>
              <CFormSelect
                id="status"
                required
                className="form-select"
                value={tempSelectedPerson}
                onChange={(e) => setTempSelectedPerson(e.target.value)}
              >
                <option value="">Choose a person</option>
                {availablePersons.map((person) => (
                  <option key={person} value={person}>
                    {person}
                  </option>
                ))}
              </CFormSelect>
            </CCol>
            <CCol className="position-relative mb-2">
              <CFormLabel htmlFor="remarks" className="form-label">
                Remarks
              </CFormLabel>
              <textarea
                className="form-textarea"
                id="remarks"
                rows="3"
                value={tempRemarks}
                onChange={(e) => setTempRemarks(e.target.value)}
                placeholder="Enter remarks..."
              />
            </CCol>
          </div>

          <div className="modal-actions">
            <button onClick={onClose} className="btn-cancel">
              Cancel
            </button>
            <button
              onClick={confirmPersonAssignment}
              className={`btn-confirm ${!tempSelectedPerson ? 'disabled' : ''}`}
              disabled={!tempSelectedPerson}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Enhanced Detail Modal Component with slide functionality
  const Modal = ({ product, onClose }) => {
    if (!product) return null

    const currentModalImage = getCurrentModalImage(product)
    const assignedPerson = assignedPersons[product.id]
    const remarks = productRemarks[product.id]
    const uploadedCount = getUploadedCount(product.id)
    const maxImages = getMaxImages(product)
    const allImages = [
      ...(product.mainImage ? [product.mainImage] : []),
      ...getProductImages(product.id),
    ]
    const currentIndex = modalImageIndex[product.id] || 0
    const productHasApprovedImage = hasApprovedImage(product)

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
            {/* Row 1: Product Image and Information */}
            <div className="modal-top-row">
              {/* Left Image with Navigation */}
              <div className="modal-image-section">
                <div className="image-slider-container">
                  {allImages.length > 1 && (
                    <button
                      className="nav-arrow nav-arrow-left"
                      onClick={() => handleModalPreviousImage(product.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        fill="currentColor"
                        className="bi bi-arrow-left"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                        />
                      </svg>
                    </button>
                  )}

                  <img src={currentModalImage} alt={product.name} className="modal-image" />

                  {allImages.length > 1 && (
                    <button
                      className="nav-arrow nav-arrow-right"
                      onClick={() => handleModalNextImage(product.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        fill="currentColor"
                        className="bi bi-arrow-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                        />
                      </svg>
                    </button>
                  )}

                  {allImages.length > 1 && (
                    <div className="image-counter">
                      {currentIndex + 1} / {allImages.length}
                    </div>
                  )}
                </div>

                {uploadedCount < maxImages && (
                  <div className="upload-progress-indicator">
                    Uploaded: {uploadedCount}/{maxImages}
                  </div>
                )}
              </div>

              {/* Right Product Info */}
              <div className="modal-top-right-section">
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
                    <span className="modal-label">Status:</span>
                    <span className={`modal-badge ${getDeliveryModeClass(product.status)}`}>
                      {product.status}
                    </span>
                  </div>
                  {['14892', '14890', '14888', '14889'].includes(product.jobNo) && (
                    <div className="modal-detail-item">
                      <span className="modal-label">Assigned To:</span>
                      <span className="modal-value">{assignedPerson || 'Ronald'}</span>
                    </div>
                  )}

                  {/* Sent to Sample button for job 14891 when any image is approved */}
                </div>
              </div>
            </div>

            {/* Row 2: Assignment Details - Full Width */}
            {(assignedPerson ||
              ['14888', '14889', '14890', '14892', '14891'].includes(product.jobNo) ||
              currentModalImage) &&
              !['14893'].includes(product.jobNo) && (
                <div className="modal-full-width-row">
                  <div className="modal-section">
                    <div className="assignment-header">
                      <h3 className="modal-section-title">Assignment Details</h3>
                      {product.jobNo === '14891' && productHasApprovedImage && (
                        <div className="sent-to-sample-container">
                          {!success && (
                            <button
                              className="sent-to-sample-btn"
                              // onClick={() => openSampleModal(product)}
                              onClick={() => setSuccess(true)}
                            >
                              Create sample
                            </button>
                          )}
                          {success && (
                            <span className="success-text">Sample created successfully...</span>
                          )}
                        </div>
                      )}
                    </div>

                    <table className="modal-table">
                      <thead>
                        <tr>
                          <th>S.No</th>
                          <th>Image</th>
                          <th>Start Time</th>
                          <th>End Time</th>
                          {['14890', '14888', '14889', '14891'].includes(product.jobNo) && (
                            <th>Client Status</th>
                          )}
                          {['14888', '14889', '14891'].includes(product.jobNo) && <th>Action</th>}
                        </tr>
                      </thead>
                      <tbody>
                        {/* If multiple images exist, show each image in separate row */}
                        {allImages.length > 1 ? (
                          allImages.map((image, index) => {
                            const imageKey = `${product.id}_${index}`
                            const isApproved = approvedImages.has(imageKey)
                            const jobNoWithSuffix = generateJobNumberWithSuffix(product, index)

                            return (
                              <tr key={index}>
                                <td className="job-number-cell">{jobNoWithSuffix}</td>
                                <td>
                                  <img
                                    src={image || noImage}
                                    alt={`${product.name} - Image ${index + 1}`}
                                    style={{
                                      width: '60px',
                                      height: '60px',
                                      objectFit: 'cover',
                                      borderRadius: '4px',
                                      border: '1px solid #e5e7eb',
                                    }}
                                  />
                                </td>
                                <td>{product.startTime || '-'}</td>
                                <td>{product.endTime || '-'}</td>
                                {['14890', '14892', '14889', '14888'].includes(product.jobNo) && (
                                  <td>
                                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                                      {['14892'].includes(product.jobNo) && (
                                        <span
                                          className={`modal-badge ${getDeliveryModeClass('Reject')}`}
                                        >
                                          Reject
                                        </span>
                                      )}
                                      {['14890', '14888', '14889'].includes(product.jobNo) && (
                                        <span
                                          className={`modal-badge ${getDeliveryModeClass('Approve')}`}
                                        >
                                          Approve
                                        </span>
                                      )}
                                    </div>
                                  </td>
                                )}
                                {['14888', '14889', '14891'].includes(product.jobNo) && (
                                  <td>
                                    {/* {isApproved ? (
                                      <span className="approved-status">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                          <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                        Approved
                                      </span>
                                    ) : ( */}
                                    <span className="approve-status">Approve</span>
                                    {/* )} */}
                                  </td>
                                )}
                                {product.jobNo === '14891' && (

                                  <td>
                                    {!isApproved ? (
                                      <button
                                        className="approve-btn"
                                        onClick={() => handleApproveImage(imageKey)}
                                      >
                                        Approve
                                      </button>
                                    ) : (
                                      <span className="approved-tick">✓</span>
                                    )}
                                  </td>
                                )}
 {['14889'].includes(product.jobNo) && (
                                  <td>
                                    <span className="approved-tick">✓</span>
                                  </td>
                                )}

                              </tr>
                            )
                          })
                        ) : (
                          /* Single image row */
                          <tr>
                            <td className="job-number-cell">{product.jobNo}</td>
                            <td>
                              <img
                                src={currentModalImage || noImage}
                                alt={product.name}
                                style={{
                                  width: '60px',
                                  height: '60px',
                                  objectFit: 'cover',
                                  borderRadius: '4px',
                                  border: '1px solid #e5e7eb',
                                }}
                              />
                            </td>
                            <td>{product.startTime || '-'}</td>
                            <td>{product.endTime || '-'}</td>
                            {['14890', '14888', '14889', '14891'].includes(product.jobNo) && (
                              <td>
                                <div style={{ display: 'flex', gap: '0.5rem' }}>
                                  {['14892', '14890'].includes(product.jobNo) && (
                                    <span
                                      className={`modal-badge ${getDeliveryModeClass('Reject')}`}
                                    >
                                      Reject
                                    </span>
                                  )}
                                  {['14888', '14889'].includes(product.jobNo) && (
                                    <span
                                      className={`modal-badge ${getDeliveryModeClass('Approve')}`}
                                    >
                                      Approve
                                    </span>
                                  )}
                                  {/* {product.jobNo === '14891' && (
                                    <span className="approve-status">Pending</span>
                                  )} */}
                                </div>
                              </td>
                            )}
                            {product.jobNo === '14891' && (
                              <td>
                                <button
                                  className="approve-btn"
                                  onClick={() => handleApproveImage(`${product.id}_0`)}
                                >
                                  Approve
                                </button>
                              </td>
                            )}
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

            {/* Row 3: Client Information & Financial Details */}
            <div className="modal-two-column-row">
              <div className="modal-section">
                <h3 className="modal-section-title">Client Information</h3>
                <div className="modal-detail-item">
                  <span className="modal-label">Client:</span>
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
                <div className="modal-detail-item">
                  <span className="modal-label">Enquiry Origin:</span>
                  <span className="modal-value">{product.enquiryOrigin}</span>
                </div>
              </div>

              <div className="modal-section">
                <h3 className="modal-section-title">Financial Details</h3>
                <div className="modal-detail-item">
                  <span className="modal-label">Budget:</span>
                  <span className="modal-value">{product.budget}</span>
                </div>
                <div className="modal-detail-item">
                  <span className="modal-label">Payment Terms:</span>
                  <span className="modal-value">{product.paymentTerms}</span>
                </div>
              </div>
            </div>

            {/* Row 4: Delivery Information & Product Specifications */}
            <div className="modal-two-column-row">
              <div className="modal-section">
                <h3 className="modal-section-title">Delivery Information</h3>
                <div className="modal-detail-item">
                  <span className="modal-label">Delivery Date:</span>
                  <span className="modal-value">{product.deliveryDate}</span>
                </div>
                <div className="modal-detail-item">
                  <span className="modal-label">Delivery Location:</span>
                  <span className="modal-value">{product.deliveryLocation}</span>
                </div>
                <div className="modal-detail-item">
                  <span className="modal-label">Delivery Mode:</span>
                  <span className="modal-value">{product.deliveryMode}</span>
                </div>
              </div>

              <div className="modal-section">
                <h3 className="modal-section-title">Product Specifications</h3>
                <div className="modal-detail-item">
                  <span className="modal-label">Preferred Material:</span>
                  <span className="modal-value">{product.preferedMaterial}</span>
                </div>
                <div className="modal-detail-item">
                  <span className="modal-label">Briefing:</span>
                  <span className="modal-value">{product.briefing}</span>
                </div>
              </div>
            </div>

            {/* Row 5: Remarks (if exists) - Full Width */}
            {(remarks || product.remarks) && (
              <div className="modal-full-width-row">
                <div className="modal-section">
                  <h3 className="modal-section-title">Remarks</h3>
                  <div className="modal-detail-item">
                    <span className="modal-value">{remarks || product.remarks}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }

  // Enhanced Product Card Component with slide functionality
  const ProductCard = ({ product }) => {
    const currentImage = getCurrentImage(product)
    const hasImage = currentImage !== null && currentImage !== undefined
    const isCanceled = canceledProducts.has(product.id)
    const isAssigned = assignedPersons[product.id]
    const hasAssignment = isAssigned || ['14888', '14889', '14890', '14892'].includes(product.jobNo)
    const uploadedCount = getUploadedCount(product.id)
    const maxImages = getMaxImages(product)
    const allImages = [
      ...(product.mainImage ? [product.mainImage] : []),
      ...getProductImages(product.id),
    ]
    const showSlideControls = allImages.length > 1
    const productHasApprovedImage = hasApprovedImage(product)

    return (
      <>
        <style jsx>{`
          .product-card {
            background-color: white;
            color: white;
            border-radius: 0.5rem;
            overflow: hidden;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
            display: flex;
            flex-direction: ${isMobile || isTablet ? 'column' : 'row'};
            transition: none;
            height: fit-content;
            transform: none;
          }

          .image-container {
            width: ${isMobile || isTablet ? '100%' : '180px'};
            height: ${isMobile || isTablet ? '200px' : 'initial'};
            max-height: '200px' !important;
            background-color: #e5e7eb;
            position: relative;
            flex-shrink: 0;
            overflow: hidden;
            align-self: stretch;
            display: flex;
            flex-direction: column;
          }

          .image-slider {
            position: relative;
            width: 100%;
            height: ${isMobile || isTablet ? '200px' : 'auto'};
            flex: ${isMobile || isTablet ? 'none' : '1'};
            display: flex;
            max-height: 238px !important;
            align-items: center;
            justify-content: center;
          }

          .product-image {
            width: 100%;
            height: ${isMobile || isTablet ? '200px' : '100% !important'};
            flex: ${isMobile || isTablet ? 'none' : '1'};
            object-fit: ${isMobile || isTablet ? 'contain' : 'fill'};
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

          .image-progress {
            position: absolute;
            bottom: 5px;
            left: 50%;
            transform: translateX(-50%);
            background-color: rgba(0, 0, 0, 0.7);
            color: white;
            padding: 0.2rem 0.4rem;
            border-radius: 0.2rem;
            font-size: 0.7rem;
            font-weight: 500;
          }

          .card-content {
            padding: ${isMobile ? '1rem' : '0.7rem'};
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100%;
          }

          .product-name {
            font-size: ${isMobile ? '1.125rem' : '1.375rem'};
            font-weight: bold;
            color: black;
            margin-bottom: 0.25rem;
          }

          .job-number {
            font-size: ${isMobile ? '0.75rem' : '0.875rem'};
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
            font-size: ${isMobile ? '0.75rem' : '0.8rem'};
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
            width: ${isMobile ? '2.5rem' : '1.9rem'};
            height: ${isMobile ? '2rem' : '1.5rem'};
            border-radius: 0.25rem;
            background-color: transparent;
            border: 1px solid #0061ed;
            color: #0061ed;
            cursor: pointer;
            transition:
              background-color 0.2s ease,
              color 0.2s ease;
            flex-shrink: 0;
          }

          .action-icon:hover {
            background-color: #0061ed;
            color: white;
          }

          .tick-icon {
            background-color: #22c55e;
            border-color: #22c55e;
            color: white;
          }

          .tick-icon:hover {
            background-color: #22c55e;
          }

          .cancel-icon {
            background-color: #ef4444;
            border-color: #ef4444;
            color: white;
          }

          .cancel-icon:hover {
            background-color: #ef4444;
          }

          .assignment-indicator {
            color: grey;
            font-size: 0.875rem;
            margin-left: 0.25rem;
          }

          .upload-progress-text {
            font-size: 0.8rem;
            color: #666;
            margin-left: 0.5rem;
          }

          .cancel-icon {
            background-color: #ef4444;
            border-color: #ef4444;
            color: white;
          }
        `}</style>

        <div className="product-card">
          <div className="image-container">
            <div className="image-slider">
              {showSlideControls && (
                <button
                  className="slide-arrow slide-arrow-left"
                  onClick={() => handlePreviousImage(product.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    fill="currentColor"
                    className="bi bi-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                    />
                  </svg>
                </button>
              )}

              <img src={currentImage} alt={product.name} className="product-image" />

              {showSlideControls && (
                <button
                  className="slide-arrow slide-arrow-right"
                  onClick={() => handleNextImage(product.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    fill="currentColor"
                    className="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                    />
                  </svg>
                </button>
              )}

              {(showSlideControls || uploadedCount > 0) && (
                <div className="image-progress">
                  {showSlideControls
                    ? `${(currentImageIndex[product.id] || 0) + 1}/${allImages.length}`
                    : `${uploadedCount}/${maxImages}`}
                </div>
              )}
            </div>
          </div>

          <div className="card-content">
            <div>
              <h2 className="product-name">{product.name}</h2>
              <div className="job-number">
                Job No: <span>{product.jobNo}</span>
              </div>

              {/* Show "Sent to Sample" button for job 14891 if any image is approved */}
              {/* {product.jobNo === '14891' && productHasApprovedImage && (
                <div style={{ marginBottom: '0.5rem' }}>
                  <button
                    className="sent-to-sample-btn-card"
                    onClick={() => openSampleModal(product)}
                  >
                    Sent to Sample
                  </button>
                </div>
              )} */}
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

              <div className="action-icons-container">
                {/* Eye Icon - always show */}
                <div
                  className="action-icon"
                  onClick={() => openModal(product)}
                  title="View All Details"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                  </svg>
                </div>

                {['14890'].includes(product.jobNo) && (
                  <div
                    className="action-icon"
                    title="Assign Person"
                    onClick={() => openPersonModal(product)}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                )}
                {hasImage && ['14890'].includes(product.jobNo) && (
                  <div
                    className="action-icon cancel-icon"
                    title="Client Canceled"
                    style={{ cursor: 'default' }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </div>
                )}

                {/* Person Icon - show only when no image exists and no person assigned */}
                {!product.mainImage &&
                  !productImages[product.id] &&
                  !assignedPersons[product.id] && (
                    <div
                      className="action-icon"
                      title="Assign Person"
                      onClick={() => openPersonModal(product)}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                    </div>
                  )}

                {/* Tick Icon - show only when image exists and not for specific job numbers */}
                {hasImage &&
                  !['14888', '14889', '14893', '14890', '14892'].includes(product.jobNo) && (
                    <div
                      className="action-icon tick-icon"
                      // onClick={() => handleTickAction(product)}
                      style={{ cursor: 'default' }}
                      // title="Share product"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                  )}

                {hasImage && ['14892'].includes(product.jobNo) && (
                  <div
                    className="action-icon"
                    onClick={() => handleTickAction(product)}
                    title="Share product"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </div>
                )}

                {/* For job numbers 14888 and 14889 with images */}
                {hasImage && ['14888', '14889'].includes(product.jobNo) && (
                  <>
                    {/* If not assigned, show all icons with indicators */}
                    {!isAssigned && (
                      <>
                        <div
                          className="action-icon"
                          onClick={() => handleWhatsAppShare(product)}
                          title="Share on WhatsApp"
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516" />
                          </svg>
                        </div>
                        <div
                          className="action-icon"
                          onClick={() => handleEmailShare(product)}
                          title="Share via Email"
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
                          </svg>
                        </div>
                      </>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

  // Close modal on Escape key
  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && modalProduct) {
        closeModal()
      }
      if (e.key === 'Escape' && personModalProduct) {
        closePersonModal()
      }
      if (e.key === 'Escape' && watermarkModalProduct) {
        closeWatermarkModal()
      }
      if (e.key === 'Escape' && sampleModalProduct) {
        closeSampleModal()
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [modalProduct, personModalProduct, watermarkModalProduct, sampleModalProduct])

  return (
    <>
      <style jsx>{`
        .main-container {
          min-height: 100vh;
          padding: ${isMobile ? '0.5rem' : isTablet ? '0.75rem' : '1rem'};
        }

        .inner-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .header-title {
          margin-bottom: ${isMobile ? '1rem' : '2rem'};
          text-align: center;
        }

        .main-title {
          font-size: ${isMobile ? '1.75rem' : isTablet ? '2rem' : '2.5rem'};
          font-weight: bold;
          color: black;
          margin-bottom: 0.5rem;
        }

        .search-container {
          margin-bottom: ${isMobile ? '1rem' : '2rem'};
          display: flex;
          justify-content: center;
          align-items: center;
          gap: ${isMobile ? '0.5rem' : '1rem'};
          flex-wrap: wrap;
          flex-direction: ${isMobile ? 'column' : 'row'};
        }

        .search-input {
          width: 100%;
          max-width: ${isMobile ? '100%' : '600px'};
          padding: ${isMobile ? '0.75rem 1rem' : '0.875rem 1.25rem'};
          font-size: ${isMobile ? '0.875rem' : '1rem'};
          border: 2px solid #374151;
          border-radius: 0.5rem;
          background-color: white;
          outline: none;
          transition: border-color 0.3s ease;
        }

        .search-input:focus {
          border-color: #f97316;
        }

        .add-button {
          background-color: #0061ed;
          color: white;
          padding: ${isMobile ? '0.75rem 1.5rem' : '0.875rem 2rem'};
          font-size: ${isMobile ? '0.875rem' : '1rem'};
          font-weight: 600;
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
          transition: background-color 0.3s ease;
          white-space: nowrap;
          flex-shrink: 0;
          width: ${isMobile ? '100%' : 'auto'};
        }

        .add-button:hover {
          background-color: #0052cc;
        }

        .products-grid {
          display: grid;
          grid-template-columns: ${isMobile
            ? '1fr'
            : isTablet
              ? 'repeat(auto-fit, minmax(350px, 1fr))'
              : 'repeat(auto-fit, minmax(450px, 1fr))'};
          gap: ${isMobile ? '1rem' : '1.5rem'};
          justify-content: center;
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

        .status-printing {
          background-color: #059669;
          color: white;
        }

        .status-design {
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
          background-color: rgb(27 147 148);
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

        .status-default {
          background-color: #ea580c;
          color: white;
        }

        .status-badge {
          padding: 0.25rem 0.5rem;
          border-radius: 0.25rem;
          font-size: ${isMobile ? '0.625rem' : '0.75rem'};
          font-weight: 600;
          display: inline-block;
        }

        /* Sent to Sample Button Styles */
        .sent-to-sample-btn {
          background-color: #16a34a;
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 0.375rem;
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }

        .sent-to-sample-btn:hover {
          background-color: #15803d;
        }

        .sent-to-sample-btn-card {
          background-color: #16a34a;
          color: white;
          border: none;
          padding: 0.375rem 0.75rem;
          border-radius: 0.25rem;
          font-size: 0.75rem;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }

        .sent-to-sample-btn-card:hover {
          background-color: #15803d;
        }

        /* Sample Modal Styles */
        .sample-modal {
          background-color: white;
          border-radius: 0.75rem;
          width: 100%;
          max-width: 800px;
          max-height: 80vh;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          display: flex;
          flex-direction: column;
          margin: auto;
        }

        .sample-modal-content {
          padding: 1.5rem;
          overflow: auto;
          flex: 1;
        }

        .sample-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 1rem;
        }

        .sample-table th,
        .sample-table td {
          border: 1px solid #d1d5db;
          padding: 0.75rem;
          text-align: left;
          font-size: 0.875rem;
        }

        .sample-table th {
          background: #f9fafb;
          font-weight: 600;
          color: #374151;
        }

        .sample-table td {
          background: white;
          color: #111827;
        }

        .sample-image {
          width: 60px;
          height: 60px;
          object-fit: cover;
          border-radius: 4px;
          border: 1px solid #e5e7eb;
        }

        .job-number-cell {
          font-weight: 600;
          color: #0061ed;
        }

        .approved-status {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          color: #16a34a;
          font-weight: 600;
        }

        .approve-status {
          color: #16a34a;
          font-weight: 600;
        }

        .approve-btn {
          background-color: #16a34a;
          color: white;
          border: none;
          padding: 0.375rem 0.75rem;
          border-radius: 0.25rem;
          font-size: 0.75rem;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }

        .approve-btn:hover {
          background-color: #15803d;
        }

        .approved-tick {
          color: #16a34a;
          font-size: 1.25rem;
          font-weight: bold;
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
        .success-text {
          color: #16a34a;
          font-weight: 500;
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
          transform: none;
          transition: none;
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

        .modal-body {
          padding: 1.5rem;
          overflow: auto;
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        /* Row 1: Image + Product Info */
        .modal-top-row {
          margin: 0;
          display: flex;
          flex-direction: row;
          gap: 1.5rem;
          align-items: stretch;
          height: 321px;
        }

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

        .image-slider-container {
          position: relative;
          width: 250px;
          height: 230px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .modal-image {
          width: 250px;
          height: 230px;
          object-fit: contain;
          border-radius: 0.5rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .nav-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background-color: rgba(0, 0, 0, 0.5);
          color: white;
          border: none;
          border-radius: 50%;
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 1.5rem;
          font-weight: bold;
          transition: background-color 0.2s ease;
          z-index: 10;
        }

        .nav-arrow:hover {
          background-color: rgba(0, 0, 0, 0.7);
        }

        .nav-arrow-left {
          left: -20px;
        }

        .nav-arrow-right {
          right: -20px;
        }

        .image-counter {
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          background-color: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 0.25rem 0.5rem;
          border-radius: 0.25rem;
          font-size: 0.75rem;
          font-weight: 500;
        }

        .upload-progress-indicator {
          margin-top: 0.5rem;
          padding: 0.5rem;
          background-color: #f3f4f6;
          border-radius: 0.25rem;
          font-size: 0.75rem;
          font-weight: 600;
          color: #374151;
          text-align: center;
        }

        .modal-top-right-section {
          flex: 1;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        /* Full Width Rows */
        .modal-full-width-row {
          width: 100%;
        }

        .modal-section {
          background-color: #f9fafb;
          padding: 1rem;
          border-radius: 0.5rem;
          border: 1px solid #e5e7eb;
          height: 100%;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .modal-section-title {
          font-size: 1rem;
          font-weight: bold;
          color: #0061ed;
          margin: 0;
        }

        /* Two Column Rows */
        .modal-two-column-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
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

        .modal-link {
          font-size: 0.875rem;
          color: #0061ed;
          text-decoration: underline;
          cursor: pointer;
          flex: 1;
        }

        .modal-badge {
          padding: 0.25rem 0.75rem;
          border-radius: 0.375rem;
          font-size: 0.75rem;
          font-weight: 600;
          display: inline-block;
        }

        /* Table for Assignment Details */
        .modal-table {
          width: 100%;
          border-collapse: collapse;
        }

        .assignment-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .modal-table th,
        .modal-table td {
          border: 1px solid #d1d5db;
          padding: 0.75rem;
          text-align: left;
          font-size: 0.875rem;
        }

        .modal-table th {
          background: #f9fafb;
          font-weight: 600;
          color: #374151;
        }

        .modal-table td {
          background: white;
          color: #111827;
        }

        /* Other Modal Styles */
        .watermark-modal {
          background-color: white;
          border-radius: 0.75rem;
          width: 100%;
          max-width: 400px;
          padding: 1.5rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          margin: auto;
        }

        .watermark-modal-title {
          margin-bottom: 1.5rem;
          color: #111827;
          font-size: 1.25rem;
          font-weight: bold;
          text-align: center;
        }

        .watermark-modal-subtitle {
          margin-bottom: 1.5rem;
          color: #6b7280;
          font-size: 0.875rem;
          text-align: center;
        }

        .watermark-options {
          margin-bottom: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .watermark-option {
          display: flex;
          align-items: center;
          padding: 1rem;
          border: 2px solid #e5e7eb;
          border-radius: 0.5rem;
          cursor: pointer;
          background-color: white;
          transition: all 0.2s ease;
        }

        .watermark-option.selected {
          border-color: #0061ed;
          background-color: #f0f8ff;
        }

        .watermark-radio {
          margin-right: 0.75rem;
          width: 1.25rem;
          height: 1.25rem;
          accent-color: #0061ed;
        }

        .watermark-option-title {
          font-weight: 600;
          color: #111827;
          margin-bottom: 0.25rem;
        }

        .watermark-modal-actions {
          display: flex;
          gap: 0.75rem;
          justify-content: flex-end;
        }

        .person-modal {
          background-color: white;
          border-radius: 0.75rem;
          width: 100%;
          max-width: 400px;
          padding: 1.5rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          margin: auto;
        }

        .person-modal-title {
          margin-bottom: 1rem;
          color: #111827;
          font-size: 1.25rem;
          font-weight: bold;
        }

        .person-modal-content {
          margin-bottom: 1.5rem;
        }

        .form-label {
          display: block;
          margin-bottom: 0.5rem;
          color: #374151;
          font-weight: 500;
        }

        .form-select {
          width: 100%;
          padding: 0.75rem;
          border-radius: 0.5rem;
          font-size: 1rem;
          background-color: white;
          color: #111827;
          outline: none;
          cursor: pointer;
          border: 1px solid #d1d5db;
        }

        .form-textarea {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #d1d5db;
          border-radius: 0.5rem;
          background-color: white;
          color: #111827;
          outline: none;
          resize: vertical;
          font-family: inherit;
        }

        .modal-actions {
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
        }

        .btn-cancel:hover {
          background-color: #4b5563;
        }

        .btn-confirm {
          padding: 0.75rem 1.5rem;
          background-color: #0061ed;
          color: white;
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
          font-size: 0.875rem;
          font-weight: 500;
        }

        .btn-confirm:hover {
          background-color: #0052cc;
        }

        .btn-confirm.disabled {
          background-color: rgb(107 156 226);
          cursor: not-allowed;
        }

        .btn-action {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background-color: #0061ed;
          color: white;
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
          font-size: 0.875rem;
          font-weight: 500;
          transition: background-color 0.2s ease;
        }

        .btn-action:hover {
          background-color: #0052cc;
        }

        .btn-action:disabled {
          background-color: rgb(107 156 226);
          cursor: not-allowed;
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .modal-top-row {
            flex-direction: column;
            height: auto;
          }

          .modal-image-section {
            width: 100%;
          }

          .image-slider-container {
            width: 100%;
            height: 180px;
          }

          .modal-image {
            width: 100%;
            height: 180px;
          }

          .nav-arrow-left {
            left: 10px;
          }

          .nav-arrow-right {
            right: 10px;
          }

          .modal-two-column-row {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .modal-label {
            min-width: 100px;
            font-size: 0.75rem;
          }

          .modal-value {
            font-size: 0.75rem;
          }

          .modal-table th,
          .modal-table td {
            padding: 0.5rem;
            font-size: 0.75rem;
          }

          .sample-table th,
          .sample-table td {
            padding: 0.5rem;
            font-size: 0.75rem;
          }

          .sample-image {
            width: 40px;
            height: 40px;
          }
        }

        @media (max-width: 480px) {
          .modal-body {
            padding: 1rem;
            gap: 1rem;
          }

          .modal-label {
            min-width: 80px;
          }

          .modal-table {
            font-size: 0.7rem;
          }

          .modal-table th,
          .modal-table td {
            padding: 0.4rem;
          }

          .sample-table {
            font-size: 0.7rem;
          }

          .sample-table th,
          .sample-table td {
            padding: 0.4rem;
          }

          .sample-image {
            width: 30px;
            height: 30px;
          }
        }
      `}</style>

      <div className="main-container">
        <div className="inner-container">
          <div className="header-title">
            <h1 className="main-title">Enquiries List</h1>
          </div>

          <div className="search-container">
            <input
              type="text"
              placeholder="🔍 Search by product name, client, job number..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <button className="add-button" onClick={() => navigate('/enquiry/add')}>
              Add
            </button>
          </div>

          <div className="products-grid">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)
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
        </div>

        {/* Sample Modal */}
        {/* {sampleModalProduct && (
          <SampleModal product={sampleModalProduct} onClose={closeSampleModal} />
        )} */}

        {/* Watermark Modal */}
        {watermarkModalProduct && (
          <WatermarkModal product={watermarkModalProduct} onClose={closeWatermarkModal} />
        )}

        {/* Person Assignment Modal */}
        {personModalProduct && (
          <PersonModal product={personModalProduct} onClose={closePersonModal} />
        )}

        {/* Detail View Modal */}
        {modalProduct && <Modal product={modalProduct} onClose={closeModal} />}
      </div>
    </>
  )
}

export default EnhancedProductCards
