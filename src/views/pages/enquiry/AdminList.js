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
// import { CInfo } from '@coreui/icons'
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
  const [expandedCards, setExpandedCards] = useState(new Set())
  const [searchTerm, setSearchTerm] = useState('')
  const [productImages, setProductImages] = useState({}) // New state to store uploaded images
  const [modalProduct, setModalProduct] = useState(null) // New state for modal
  const [assignedPersons, setAssignedPersons] = useState({}) // New state to store assigned persons
  const [productRemarks, setProductRemarks] = useState({}) // New state to store remarks for each product
  const [personModalProduct, setPersonModalProduct] = useState(null) // New state for person modal
  const [tempSelectedPerson, setTempSelectedPerson] = useState('') // Temporary state for selected person
  const [tempRemarks, setTempRemarks] = useState('') // Temporary state for remarks
  const [uploadModalProduct, setUploadModalProduct] = useState(null) // New state for upload modal
  const [selectedFile, setSelectedFile] = useState(null) // New state for selected file
  const [watermarkModalProduct, setWatermarkModalProduct] = useState(null) // New state for watermark modal
  const [selectedWatermark, setSelectedWatermark] = useState('') // New state for watermark selection
  const navigate = useNavigate()

  // Available persons list
  const availablePersons = ['Ronald', 'Melroy', 'Kaushal', 'Priya', 'Arun', 'Neha', 'Vikram']

  // Product data with additional fields
  const products = [
    {
      id: 3,
      name: 'GOLD MEDAL',
      jobNo: '14890',
      client: 'SPORTS FEDERATION',
      email: 'awards@sports.com',
      contactNo: '91234 56789',
      status: 'SAMPLING',
      product: 'GOLD MEDAL',
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
    },

    {
      id: 5,
      name: 'WOODEN SHIELD',
      jobNo: '14892',
      client: 'HERITAGE CLUB',
      email: 'heritage@club.com',
      contactNo: '99887 76543',
      product: 'WOODEN SHIELD',
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
    },
    {
      id: 4,
      name: 'ACRYLIC PLAQUE',
      jobNo: '14891',
      client: 'TECH INNOVATIONS',
      email: 'contact@techinno.com',
      contactNo: '87654 32109',
      product: 'ACRYLIC PLAQUE',
      startTime: '2025-02-09 09:10 AM',
      endTime: '2025-02-10 10:10 AM',
      quantity: 15,
      status: 'PRODUCTION',
      size: '12 Inches',
      deliveryDate: '19-09-2025',
      deliveryLocation: 'Powai - MUMBAI',
      deliveryMode: 'HAND DELIVERY',
      mainImage: null, // No image for this product
      enquiryOrigin: 'WhatsApp',
      budget: '₹30,000',
      preferedMaterial: 'Clear Acrylic',
      briefing:
        'Modern acrylic plaques for startup milestone celebration. Minimalist design preferred.',
      paymentTerms: '50% Advance & Balance when Material is Ready',
    },
    {
      id: 6,
      name: 'GLASS TROPHY',
      jobNo: '14893',
      client: 'EXCELLENCE AWARDS',
      email: 'awards@excellence.com',
      contactNo: '98123 45678',
      product: 'GLASS TROPHY',
      quantity: 12,
      size: '16 Inches',
      startTime: '2025-02-09 09:10 AM',
      endTime: '2025-02-10 10:10 AM',
      status: 'BILLING',
      deliveryDate: '11-01-2025',
      deliveryLocation: 'Andheri - MUMBAI',
      deliveryMode: 'EXPRESS DELIVERY',
      mainImage: null, // No image for this product
      enquiryOrigin: 'LinkedIn',
      budget: '₹85,000',
      preferedMaterial: 'Borosilicate Glass',
      briefing:
        'Premium glass trophies for annual excellence awards ceremony. LED base lighting required.',
      paymentTerms: 'Corporate Credit',
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
      product: 'MIC TROPHY',
      quantity: 46,
      size: '10 Inches',
      status: 'ENQUIRY',
      deliveryDate: '19-03-2025',
      deliveryLocation: 'ITC Central - Parel - MUMBAI',
      deliveryMode: 'HAND DELIVERY',
      mainImage: award1,
      enquiryOrigin: 'Website Form',
      startTime: '2025-02-09 09:10 AM',
      endTime: '2025-02-10 10:10 AM',
      budget: '₹50,000',
      preferedMaterial: 'Crystal Glass',
      briefing:
        'High-quality microphone trophy for annual corporate event. Should include company logo engraving.',
      paymentTerms: '50% advance & Bal before dispatch & delivery',
    },
    {
      id: 2,
      name: 'CRYSTAL AWARD',
      jobNo: '14889',
      client: 'CORPORATE SOLUTIONS',
      email: 'info@corpsol.com',
      contactNo: '98765 43210',
      status: 'DESIGN',
      product: 'CRYSTAL AWARD',
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
    },
  ]

  // Filter products based on search term
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.jobNo.includes(searchTerm) ||
      product.product.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getDeliveryModeClass = (mode) => {
    switch (mode) {
      case 'PRINTING':
        return { backgroundColor: '#059669', color: 'white' }
      case 'DESIGN':
        return { backgroundColor: '#2563EB', color: 'white' }
      case 'ENQUIRY':
        return { backgroundColor: '#944949', color: 'white' }
      case 'PRODUCTION':
        return { backgroundColor: 'rgb(112 90 149)', color: 'white' }
      case 'SAMPLING':
        return { backgroundColor: 'rgb(27 147 148)', color: 'white' }
      case 'DISPATCH':
        return { backgroundColor: 'red', color: 'white' }
      case 'BILLING':
        return { backgroundColor: 'grey', color: 'white' }
      default:
        return { backgroundColor: '#EA580C', color: 'white' }
    }
  }

  const toggleCardExpansion = (productId) => {
    setExpandedCards((prev) => {
      const newExpanded = new Set(prev)
      if (newExpanded.has(productId)) {
        newExpanded.delete(productId)
      } else {
        newExpanded.add(productId)
      }
      return newExpanded
    })
  }

  const openModal = (product) => {
    // Get scrollbar width before hiding it
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

  const handleImageUpload = (productId, event) => {
    const file = event.target.files[0]
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        alert('Please select a valid image file.')
        return
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('File size should be less than 5MB.')
        return
      }

      // Store the selected file
      setSelectedFile(file)
    }
  }

  // Function to open person assignment modal
  const openPersonModal = (product) => {
    // Get scrollbar width before hiding it
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
    setPersonModalProduct(product)
    // Pre-fill with existing values if available
    setTempSelectedPerson(assignedPersons[product.id] || '')
    setTempRemarks(productRemarks[product.id] || '')
    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = `${scrollbarWidth}px`
  }

  // Function to close person assignment modal
  const closePersonModal = () => {
    setPersonModalProduct(null)
    setTempSelectedPerson('')
    setTempRemarks('')
    document.body.style.overflow = 'unset'
    document.body.style.paddingRight = '0px'
  }

  // Function to open upload modal
  const openUploadModal = (product) => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
    setUploadModalProduct(product)
    setSelectedFile(null)
    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = `${scrollbarWidth}px`
  }

  // Function to close upload modal
  const closeUploadModal = () => {
    setUploadModalProduct(null)
    setSelectedFile(null)
    document.body.style.overflow = 'unset'
    document.body.style.paddingRight = '0px'
  }

  // Function to open watermark modal
  const openWatermarkModal = (product) => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
    setWatermarkModalProduct(product)
    setSelectedWatermark('')
    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = `${scrollbarWidth}px`
  }

  // Function to close watermark modal
  const closeWatermarkModal = () => {
    setWatermarkModalProduct(null)
    setSelectedWatermark('')
    document.body.style.overflow = 'unset'
    document.body.style.paddingRight = '0px'
  }

  // Function to confirm person assignment
  const confirmPersonAssignment = () => {
    if (tempSelectedPerson && personModalProduct) {
      setAssignedPersons((prev) => ({
        ...prev,
        [personModalProduct.id]: tempSelectedPerson,
      }))
      // Save remarks even if empty
      setProductRemarks((prev) => ({
        ...prev,
        [personModalProduct.id]: tempRemarks,
      }))
      closePersonModal()
    }
  }

  // Function to confirm upload
  const confirmUpload = () => {
    if (selectedFile && uploadModalProduct) {
      // Create a FileReader to convert the file to a data URL
      const reader = new FileReader()
      reader.onload = (e) => {
        // Update the productImages state with the new image
        setProductImages((prev) => ({
          ...prev,
          [uploadModalProduct.id]: e.target.result,
        }))

        console.log('Image uploaded successfully for product:', uploadModalProduct.id)

        // You can also send this to your backend API here
        // uploadImageToServer(uploadModalProduct.id, selectedFile, startTime, endTime)

        closeUploadModal()
      }
      reader.readAsDataURL(selectedFile)
    }
  }

  // Function to handle tick action (open watermark modal)
  const handleTickAction = (product) => {
    openWatermarkModal(product)
  }

  // Function to confirm watermark selection and proceed with sharing
  const confirmWatermarkSelection = () => {
    if (selectedWatermark && watermarkModalProduct) {
      const watermarkText = selectedWatermark === 'yes' ? ' (With Watermark)' : ' (No Watermark)'

      // Close the watermark modal first
      closeWatermarkModal()

      // Show sharing options or directly share
      handleWhatsAppShare(watermarkModalProduct, watermarkText)
      handleEmailShare(watermarkModalProduct, watermarkText)
    }
  }

  const handleWhatsAppShare = (product, watermarkText = '') => {
    const currentImage = productImages[product.id] || product.mainImage
    const assignedPerson = assignedPersons[product.id]
    const remarks = productRemarks[product.id]

    // Create comprehensive message with all details
    const message = `🏆 *${product.name}* (Job No: ${product.jobNo})${watermarkText}

    👤 *Client Details:*
    • Client: ${product.client}
    • Email: ${product.email}
    • Contact: ${product.contactNo}

    📦 *Product Information:*
    • Product: ${product.product}
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

  const styles = {
    container: {
      minHeight: '100vh',
      padding: isMobile ? '0.5rem' : isTablet ? '0.75rem' : '1rem',
    },
    innerContainer: {
      maxWidth: '1400px',
      margin: '0 auto',
    },
    header: {
      marginBottom: isMobile ? '1rem' : '2rem',
      textAlign: 'center',
    },
    header1: {
      marginBottom: '2px',
    },
    title: {
      fontSize: isMobile ? '1.75rem' : isTablet ? '2rem' : '2.5rem',
      fontWeight: 'bold',
      color: 'black',
      marginBottom: '0.5rem',
    },
    searchContainer: {
      marginBottom: isMobile ? '1rem' : '2rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: isMobile ? '0.5rem' : '1rem',
      flexWrap: 'wrap',
      flexDirection: isMobile ? 'column' : 'row',
    },
    addButton: {
      backgroundColor: '#0061ed',
      color: 'white',
      padding: isMobile ? '0.75rem 1.5rem' : '0.875rem 2rem',
      fontSize: isMobile ? '0.875rem' : '1rem',
      fontWeight: '600',
      border: 'none',
      borderRadius: '0.5rem',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
      whiteSpace: 'nowrap',
      flexShrink: 0,
      width: isMobile ? '100%' : 'auto',
    },
    searchInput: {
      width: '100%',
      maxWidth: isMobile ? '100%' : '600px',
      padding: isMobile ? '0.75rem 1rem' : '0.875rem 1.25rem',
      fontSize: isMobile ? '0.875rem' : '1rem',
      border: '2px solid #374151',
      borderRadius: '0.5rem',
      backgroundColor: 'white',
      outline: 'none',
      transition: 'border-color 0.3s ease',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: isMobile
        ? '1fr'
        : isTablet
          ? 'repeat(auto-fit, minmax(350px, 1fr))'
          : 'repeat(auto-fit, minmax(450px, 1fr))',
      gap: isMobile ? '1rem' : '1.5rem',
      justifyContent: 'center',
    },
    card: {
      backgroundColor: 'white',
      color: 'white',
      borderRadius: '0.5rem',
      overflow: 'hidden',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      display: 'flex',
      flexDirection: isMobile || isTablet ? 'column' : 'row',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      height: 'fit-content',
    },
    imageContainer: {
      width: isMobile || isTablet ? '100%' : '180px',
      height: isMobile || isTablet ? '200px' : 'initial',
      backgroundColor: '#E5E7EB',
      position: 'relative',
      flexShrink: 0,
      overflow: 'hidden',
      alignSelf: 'stretch',
      display: 'flex',
      flexDirection: 'column',
    },
    image: {
      width: '100%',
      height: isMobile || isTablet ? '200px' : 'auto',
      flex: isMobile || isTablet ? 'none' : 1,
      objectFit: isMobile || isTablet ? 'contain' : 'fill',
    },
    actionIconsContainer: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginTop: '0.5rem',
      gap: '0.5rem',
      flexWrap: 'wrap',
    },
    actionIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: isMobile ? '2.5rem' : '1.9rem',
      height: isMobile ? '2rem' : '1.5rem',
      borderRadius: '0.25rem',
      backgroundColor: 'transparent',
      border: '1px solid #0061ed',
      color: '#0061ed',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      flexShrink: 0,
    },
    hiddenInput: {
      display: 'none',
    },
    content: {
      padding: isMobile ? '1rem' : '0.7rem',
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '100%',
    },
    productName: {
      fontSize: isMobile ? '1.125rem' : '1.375rem',
      fontWeight: 'bold',
      color: 'black',
      marginBottom: '0.25rem',
    },
    jobNo: {
      fontSize: isMobile ? '0.75rem' : '0.875rem',
      fontWeight: 'bold',
      color: 'rgb(0, 97, 237)',
      marginBottom: '0.4rem',
    },
    detailsContainer: {
      marginBottom: '1rem',
    },
    detailRow: {
      marginBottom: '0.625rem',
      fontSize: isMobile ? '0.75rem' : '0.8rem',
      lineHeight: '1.4',
    },
    label: {
      color: '#0061ed',
      fontWeight: 'bold',
    },
    value: {
      color: 'black',
    },
    link: {
      color: 'blue',
      textDecoration: 'underline',
    },
    badge: {
      padding: '0.25rem 0.5rem',
      borderRadius: '0.25rem',
      fontSize: isMobile ? '0.625rem' : '0.75rem',
      fontWeight: '600',
      display: 'inline-block',
    },
    noResults: {
      gridColumn: '1 / -1',
      textAlign: 'center',
      color: '#9CA3AF',
      fontSize: '1.125rem',
      padding: '3rem 1rem',
      borderRadius: '0.5rem',
    },
    button: {
      width: '100%',
      backgroundColor: '#0061ed',
      color: 'white',
      padding: '0.625rem 1rem',
      borderRadius: '0.5rem',
      fontWeight: '500',
      fontSize: '0.875rem',
      border: 'none',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    // Modal Styles
    modalOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: isMobile ? '0.5rem' : '1rem',
    },
    modalHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: isMobile ? '1rem' : '1.5rem',
      borderBottom: '1px solid #E5E7EB',
      backgroundColor: '#F9FAFB',
    },
    modalTitle: {
      fontSize: isMobile ? '1.25rem' : '1.5rem',
      fontWeight: 'bold',
      color: '#111827',
      margin: 0,
    },
    closeButton: {
      background: 'none',
      border: 'none',
      color: '#6B7280',
      cursor: 'pointer',
      padding: '0.5rem',
      borderRadius: '0.25rem',
      transition: 'all 0.2s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: isMobile ? '1.75rem' : '1.5rem',
      fontWeight: 'bold',
      width: '2rem',
      height: '2rem',
    },
    modalBody: {
      padding: isMobile ? '1rem' : '1.5rem',
      overflow: 'auto',
      flex: 1,
    },
    modalTopRow: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      gap: isMobile ? '1rem' : '1.5rem',
      marginBottom: isMobile ? '1rem' : '1.5rem',
      alignItems: 'stretch',
      height: isMobile ? 'auto' : '321px',
    },
    modalImageSection: {
      flexShrink: 0,
      width: isMobile ? '100%' : '280px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F9FAFB',
      borderRadius: '0.5rem',
      border: '1px solid #E5E7EB',
      padding: '0.75rem',
    },
    modalImage: {
      width: isMobile ? '100%' : '250px',
      height: isMobile ? '180px' : '300px',
      objectFit: 'contain',
      borderRadius: '0.5rem',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    },
    modalTopRightSection: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
    },
    modalBottomGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      gap: isMobile ? '1rem' : '1.5rem',
    },
    modalColumn: {
      display: 'flex',
      flexDirection: 'column',
      gap: isMobile ? '1rem' : '1.5rem',
    },
    modalDetailsGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile
        ? '1fr'
        : isTablet
          ? '1fr'
          : 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: isMobile ? '1rem' : '1.5rem',
    },
    modalSection: {
      backgroundColor: '#F9FAFB',
      padding: isMobile ? '0.75rem' : '1rem',
      borderRadius: '0.5rem',
      border: '1px solid #E5E7EB',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    modalSectionTitle: {
      fontSize: isMobile ? '0.875rem' : '1rem',
      fontWeight: 'bold',
      color: '#0061ed',
      marginBottom: '0.75rem',
      margin: '0 0 0.75rem 0',
    },
    modalDetailItem: {
      marginBottom: '0.75rem',
      display: 'flex',
      flexDirection: 'row',
      gap: '0.5rem',
      alignItems: 'flex-start',
    },
    modalLabel: {
      fontSize: isMobile ? '0.75rem' : '0.875rem',
      fontWeight: '600',
      color: '#374151',
      minWidth: isMobile ? '80px' : '100px',
      flexShrink: 0,
    },
    modalValue: {
      fontSize: isMobile ? '0.75rem' : '0.875rem',
      color: '#111827',
      lineHeight: '1.4',
      flex: 1,
    },
    modalLink: {
      fontSize: isMobile ? '0.75rem' : '0.875rem',
      color: '#0061ed',
      textDecoration: 'underline',
      cursor: 'pointer',
      flex: 1,
    },
    modalBadge: {
      padding: '0.25rem 0.75rem',
      borderRadius: '0.375rem',
      fontSize: isMobile ? '0.625rem' : '0.75rem',
      fontWeight: '600',
      display: 'inline-block',
    },
    modalFooter: {
      padding: isMobile ? '1rem' : '1rem 1.5rem',
      borderTop: '1px solid #E5E7EB',
      backgroundColor: '#F9FAFB',
      display: 'flex',
      gap: isMobile ? '0.5rem' : '1rem',
      justifyContent: 'flex-end',
      flexDirection: isMobile ? 'column' : 'row',
    },
    modalActionButton: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      padding: isMobile ? '0.875rem 1rem' : '0.75rem 1.5rem',
      backgroundColor: '#0061ed',
      color: 'white',
      border: 'none',
      borderRadius: '0.5rem',
      cursor: 'pointer',
      fontSize: isMobile ? '0.75rem' : '0.875rem',
      fontWeight: '500',
      transition: 'background-color 0.2s ease',
      width: isMobile ? '100%' : 'auto',
    },
  }

  // When only one search result, center it and limit width
  if (filteredProducts.length === 1 && !isMobile) {
    styles.grid.gridTemplateColumns = '1fr'
    styles.grid.maxWidth = '600px'
    styles.grid.margin = '0 auto'
  }

  // Watermark Modal Component
  const WatermarkModal = ({ product, onClose }) => {
    if (!product) return null

    return (
      <div style={styles.modalOverlay} onClick={onClose}>
        <div
          style={{
            backgroundColor: 'white',
            borderRadius: '0.75rem',
            width: '100%',
            maxWidth: '400px',
            padding: '1.5rem',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            margin: 'auto',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <h3
            style={{
              marginBottom: '1.5rem',
              color: '#111827',
              fontSize: '1.25rem',
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            Watermark Selection
          </h3>

          <p
            style={{
              marginBottom: '1.5rem',
              color: '#6B7280',
              fontSize: '0.875rem',
              textAlign: 'center',
            }}
          >
            Do you want to include a watermark on the shared product image?
          </p>

          <div style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <label
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '1rem',
                  border: selectedWatermark === 'yes' ? '2px solid #0061ed' : '2px solid #E5E7EB',
                  borderRadius: '0.5rem',
                  cursor: 'pointer',
                  backgroundColor: selectedWatermark === 'yes' ? '#F0F8FF' : 'white',
                  transition: 'all 0.2s ease',
                }}
              >
                <input
                  type="radio"
                  name="watermark"
                  value="yes"
                  checked={selectedWatermark === 'yes'}
                  onChange={(e) => setSelectedWatermark(e.target.value)}
                  style={{
                    marginRight: '0.75rem',
                    width: '1.25rem',
                    height: '1.25rem',
                    accentColor: '#0061ed',
                  }}
                />
                <div>
                  <div
                    style={{
                      fontWeight: '600',
                      color: '#111827',
                      marginBottom: '0.25rem',
                    }}
                  >
                    Yes, with watermark
                  </div>
                  {/* <div style={{ fontSize: '0.75rem', color: '#6B7280' }}>
                    Include company watermark on the image
                  </div> */}
                </div>
              </label>

              <label
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '1rem',
                  border: selectedWatermark === 'no' ? '2px solid #0061ed' : '2px solid #E5E7EB',
                  borderRadius: '0.5rem',
                  cursor: 'pointer',
                  backgroundColor: selectedWatermark === 'no' ? '#F0F8FF' : 'white',
                  transition: 'all 0.2s ease',
                }}
              >
                <input
                  type="radio"
                  name="watermark"
                  value="no"
                  checked={selectedWatermark === 'no'}
                  onChange={(e) => setSelectedWatermark(e.target.value)}
                  style={{
                    marginRight: '0.75rem',
                    width: '1.25rem',
                    height: '1.25rem',
                    accentColor: '#0061ed',
                  }}
                />
                <div>
                  <div
                    style={{
                      fontWeight: '600',
                      color: '#111827',
                      marginBottom: '0.25rem',
                    }}
                  >
                    No, without watermark
                  </div>
                  {/* <div style={{ fontSize: '0.75rem', color: '#6B7280' }}>
                    Share the original image without watermark
                  </div> */}
                </div>
              </label>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end' }}>
            <button
              onClick={onClose}
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: '#6B7280',
                color: 'white',
                border: 'none',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                fontSize: '0.875rem',
                fontWeight: '500',
              }}
            >
              Cancel
            </button>
            <button style={styles.modalActionButton} onClick={() => handleWhatsAppShare(product)}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516" />
              </svg>
            </button>
            <button style={styles.modalActionButton} onClick={() => handleEmailShare(product)}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
              </svg>
            </button>
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
      // Validate file type
      if (!file.type.startsWith('image/')) {
        alert('Please select a valid image file.')
        return
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('File size should be less than 5MB.')
        return
      }

      setSelectedFile(file)

      // Create preview URL
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

    return (
      <div style={styles.modalOverlay} onClick={onClose}>
        <div
          style={{
            backgroundColor: 'white',
            borderRadius: '0.75rem',
            width: '100%',
            maxWidth: '600px',
            padding: '1.5rem',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            margin: 'auto',
            maxHeight: '90vh',
            overflow: 'auto',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <h3
            style={{
              marginBottom: '1.5rem',
              color: '#111827',
              fontSize: '1.25rem',
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            Image Upload
          </h3>

          <div style={{ marginBottom: '1.5rem' }}>
            {/* File Upload Section */}
            <div style={{ marginBottom: '1.5rem' }}>
              <div
                style={{
                  border: `2px dashed ${dragActive ? '#4F46E5' : '#D1D5DB'}`,
                  borderRadius: '0.5rem',
                  padding: '2rem',
                  textAlign: 'center',
                  backgroundColor: dragActive ? '#F3F4F6' : '#F9FAFB',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  position: 'relative',
                }}
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
                  style={{ display: 'none' }}
                />

                <div style={{ marginBottom: '1rem' }}>
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#6B7280"
                    strokeWidth="1.5"
                    style={{ margin: '0 auto', display: 'block' }}
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7,10 12,15 17,10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                </div>

                <button
                  type="button"
                  style={{
                    backgroundColor: '#0061ed',
                    color: 'white',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '0.5rem',
                    border: 'none',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    marginBottom: '1rem',
                  }}
                >
                  BROWSE & UPLOAD
                </button>

                <p
                  style={{
                    color: '#6B7280',
                    fontSize: '0.875rem',
                    margin: '0.5rem 0',
                    lineHeight: '1.4',
                  }}
                >
                  Click to browse files or drag and drop
                </p>

                <p
                  style={{
                    color: '#9CA3AF',
                    fontSize: '0.75rem',
                    margin: 0,
                  }}
                >
                  Maximum 1 image allowed • Supported formats: JPG, PNG, GIF
                </p>
              </div>

              {/* Image Preview */}
              {previewUrl && (
                <div
                  style={{
                    marginTop: '1rem',
                    border: '1px solid #E5E7EB',
                    borderRadius: '0.5rem',
                    padding: '1rem',
                    backgroundColor: 'white',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '0.75rem',
                    }}
                  >
                    <h4
                      style={{
                        fontSize: '0.875rem',
                        fontWeight: '600',
                        color: '#374151',
                        margin: 0,
                      }}
                    >
                      Image Preview
                    </h4>
                    <button
                      onClick={removeFile}
                      style={{
                        backgroundColor: '#EF4444',
                        color: 'white',
                        border: 'none',
                        borderRadius: '0.25rem',
                        padding: '0.25rem 0.5rem',
                        fontSize: '0.75rem',
                        cursor: 'pointer',
                      }}
                    >
                      X
                    </button>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                    }}
                  >
                    <img
                      src={previewUrl}
                      alt="Preview"
                      style={{
                        width: '80px',
                        height: '80px',
                        objectFit: 'cover',
                        borderRadius: '0.375rem',
                        border: '1px solid #E5E7EB',
                      }}
                    />
                    <div>
                      <p
                        style={{
                          fontSize: '0.875rem',
                          fontWeight: '500',
                          color: '#111827',
                          margin: '0 0 0.25rem 0',
                        }}
                      >
                        {selectedFile?.name}
                      </p>
                      <p
                        style={{
                          fontSize: '0.75rem',
                          color: '#6B7280',
                          margin: 0,
                        }}
                      >
                        {selectedFile ? `${(selectedFile.size / 1024 / 1024).toFixed(2)} MB` : ''}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end' }}>
            <button
              onClick={onClose}
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: '#6B7280',
                color: 'white',
                border: 'none',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                fontSize: '0.875rem',
                fontWeight: '500',
              }}
            >
              Cancel
            </button>
            <button
              onClick={confirmUpload}
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: selectedFile ? '#24a524' : 'rgb(100 176 100)',
                color: 'white',
                border: 'none',
                borderRadius: '0.5rem',
                cursor: selectedFile ? 'pointer' : 'not-allowed',
                fontSize: '0.875rem',
                fontWeight: '500',
              }}
            >
              Submit for Admin Approval
            </button>
          </div>
        </div>
      </div>
    )
  }

  const PersonModal = ({ product, onClose }) => {
    if (!product) return null

    return (
      <div style={styles.modalOverlay} onClick={onClose}>
        <div
          style={{
            backgroundColor: 'white',
            borderRadius: '0.75rem',
            width: '100%',
            maxWidth: '400px',
            padding: '1.5rem',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            margin: 'auto',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <h3
            style={{
              marginBottom: '1rem',
              color: '#111827',
              fontSize: '1.25rem',
              fontWeight: 'bold',
            }}
          >
            Assign Person to {product.name}
          </h3>

          <div style={{ marginBottom: '1.5rem' }}>
            <CCol className="position-relative mb-2">
              <CFormLabel
                htmlFor="status"
                className="clr-black fw-medium"
                style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  color: '#374151',
                  fontWeight: '500',
                }}
              >
                Select Person
              </CFormLabel>
              <CFormSelect
                id="status"
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '0.5rem',
                  fontSize: '1rem',
                  backgroundColor: 'white',
                  color: '#111827',
                  outline: 'none',
                  cursor: 'pointer',
                }}
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
              <CFormLabel
                htmlFor="remarks"
                className="clr-black fw-medium"
                style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  color: '#374151',
                  fontWeight: '500',
                }}
              >
                Remarks
              </CFormLabel>
              <textarea
                className="form-control"
                id="remarks"
                rows="3"
                value={tempRemarks}
                onChange={(e) => setTempRemarks(e.target.value)}
                placeholder="Enter remarks..."
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #D1D5DB',
                  borderRadius: '0.5rem',
                  backgroundColor: 'white',
                  color: '#111827',
                  outline: 'none',
                  resize: 'vertical',
                  fontFamily: 'inherit',
                }}
              />
            </CCol>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end' }}>
            <button
              onClick={onClose}
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: '#6B7280',
                color: 'white',
                border: 'none',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                fontSize: '0.875rem',
                fontWeight: '500',
              }}
            >
              Cancel
            </button>
            <button
              onClick={confirmPersonAssignment}
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: tempSelectedPerson ? '#0061ed' : 'rgb(107 156 226)',
                color: 'white',
                border: 'none',
                borderRadius: '0.5rem',
                cursor: tempSelectedPerson ? 'pointer' : 'not-allowed',
                fontSize: '0.875rem',
                fontWeight: '500',
              }}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Modal Component
  const Modal = ({ product, onClose }) => {
    if (!product) return null

    const currentImage = productImages[product.id] || product.mainImage
    const hasImage = currentImage !== null && currentImage !== undefined
    const assignedPerson = assignedPersons[product.id]
    const remarks = productRemarks[product.id]

    return (
      <div style={styles.modalOverlay} onClick={onClose}>
        <div
          style={{
            backgroundColor: 'white',
            borderRadius: '0.75rem',
            width: '100%',
            maxWidth: '900px',
            maxHeight: '80vh',
            overflow: 'hidden',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            display: 'flex',
            flexDirection: 'column',
            margin: '6% auto 0 auto',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div style={styles.modalHeader}>
            <h2 style={styles.modalTitle}>{product.name}</h2>
            <button style={styles.closeButton} onClick={onClose}>
              ×
            </button>
          </div>
          {/* Modal Body */}
          <div style={styles.modalBody}>
            {/* Top Row: Image + Product Information */}
            <div style={styles.modalTopRow}>
              {/* Left Side - Product Image */}
              <div style={styles.modalImageSection}>
                <img src={currentImage || noImage} alt={product.name} style={styles.modalImage} />
              </div>

              {/* Right Side - Product Information */}
              <div style={styles.modalTopRightSection}>
                <div style={styles.modalSection}>
                  <h3 style={styles.modalSectionTitle}>Product Information</h3>
                  <div style={styles.modalDetailItem}>
                    <span style={styles.modalLabel}>Job Number:</span>
                    <span style={styles.modalValue}>{product.jobNo}</span>
                  </div>
                  <div style={styles.modalDetailItem}>
                    <span style={styles.modalLabel}>Product:</span>
                    <span style={styles.modalValue}>{product.product}</span>
                  </div>
                  <div style={styles.modalDetailItem}>
                    <span style={styles.modalLabel}>Quantity:</span>
                    <span style={styles.modalValue}>{product.quantity}</span>
                  </div>
                  <div style={styles.modalDetailItem}>
                    <span style={styles.modalLabel}>Size:</span>
                    <span style={styles.modalValue}>{product.size}</span>
                  </div>
                  <div style={styles.modalDetailItem}>
                    <span style={styles.modalLabel}>Status:</span>
                    <span style={{ ...styles.modalBadge, ...getDeliveryModeClass(product.status) }}>
                      {product.status}
                    </span>
                  </div>
                  {/* Assignment Information */}
                  {assignedPerson ? (
                    <div style={styles.modalDetailItem}>
                      <span style={styles.modalLabel}>Assigned To:</span>
                      <span style={styles.modalValue}>{assignedPerson}</span>
                    </div>
                  ) : ['14888', '14889', '14890', '14892'].includes(product.jobNo) ? (
                    <div style={styles.modalDetailItem}>
                      <span style={styles.modalLabel}>Assigned To:</span>
                      <span style={styles.modalValue}>Ronald</span>
                    </div>
                  ) : null}
                  {assignedPerson && !['14893', '14891'].includes(product.jobNo) ? (
                    <>
                      <div style={styles.modalDetailItem}>
                        <span style={styles.modalLabel}>Start Time:</span>
                        <span style={styles.modalValue}>{product.startTime}</span>
                      </div>
                      <div style={styles.modalDetailItem}>
                        <span style={styles.modalLabel}>End Time:</span>
                        <span style={styles.modalValue}>{product.endTime}</span>
                      </div>
                    </>
                  ) : ['14888', '14889', '14890', '14892'].includes(product.jobNo) ? (
                    <>
                      <div style={styles.modalDetailItem}>
                        <span style={styles.modalLabel}>Start Time:</span>
                        <span style={styles.modalValue}>{product.startTime}</span>
                      </div>
                      <div style={styles.modalDetailItem}>
                        <span style={styles.modalLabel}>End Time:</span>
                        <span style={styles.modalValue}>{product.endTime}</span>
                      </div>
                    </>
                  ) : null}
                </div>
              </div>
            </div>

            {/* Bottom Grid: Three Columns */}
            <div style={styles.modalBottomGrid}>
              {/* Left Column */}
              <div style={styles.modalColumn}>
                {/* Client Information */}
                <div style={styles.modalSection}>
                  <h3 style={styles.modalSectionTitle}>Client Information</h3>
                  <div style={styles.modalDetailItem}>
                    <span style={styles.modalLabel}>Client:</span>
                    <span style={styles.modalValue}>{product.client}</span>
                  </div>
                  <div style={styles.modalDetailItem}>
                    <span style={styles.modalLabel}>Email:</span>
                    <a href={`mailto:${product.email}`} style={styles.modalLink}>
                      {product.email}
                    </a>
                  </div>
                  <div style={styles.modalDetailItem}>
                    <span style={styles.modalLabel}>Contact:</span>
                    <a href={`tel:${product.contactNo}`} style={styles.modalLink}>
                      {product.contactNo}
                    </a>
                  </div>
                  <div style={styles.modalDetailItem}>
                    <span style={styles.modalLabel}>Enquiry Origin:</span>
                    <span style={styles.modalValue}>{product.enquiryOrigin}</span>
                  </div>
                </div>

                {/* Product Specifications */}
                <div style={styles.modalSection}>
                  <h3 style={styles.modalSectionTitle}>Product Specifications</h3>
                  <div style={styles.modalDetailItem}>
                    <span style={styles.modalLabel}>Preferred Material:</span>
                    <span style={styles.modalValue}>{product.preferedMaterial}</span>
                  </div>
                  <div style={styles.modalDetailItem}>
                    <span style={styles.modalLabel}>Briefing:</span>
                    <span style={styles.modalValue}>{product.briefing}</span>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div style={styles.modalColumn}>
                {/* Financial Information */}
                <div style={styles.modalSection}>
                  <h3 style={styles.modalSectionTitle}>Financial Details</h3>
                  <div style={styles.modalDetailItem}>
                    <span style={styles.modalLabel}>Budget:</span>
                    <span style={styles.modalValue}>{product.budget}</span>
                  </div>
                  <div style={styles.modalDetailItem}>
                    <span style={styles.modalLabel}>Payment Terms:</span>
                    <span style={styles.modalValue}>{product.paymentTerms}</span>
                  </div>
                </div>

                {/* Delivery Information */}
                <div style={styles.modalSection}>
                  <h3 style={styles.modalSectionTitle}>Delivery Information</h3>
                  <div style={styles.modalDetailItem}>
                    <span style={styles.modalLabel}>Delivery Date:</span>
                    <span style={styles.modalValue}>{product.deliveryDate}</span>
                  </div>
                  <div style={styles.modalDetailItem}>
                    <span style={styles.modalLabel}>Delivery Location:</span>
                    <span style={styles.modalValue}>{product.deliveryLocation}</span>
                  </div>
                  <div style={styles.modalDetailItem}>
                    <span style={styles.modalLabel}>Delivery Mode:</span>
                    <span style={styles.modalValue}>{product.deliveryMode}</span>
                  </div>
                </div>

                {/* Remarks Section */}
                {remarks ? (
                  <div style={styles.modalSection}>
                    <h3 style={styles.modalSectionTitle}>Remarks</h3>
                    <div style={styles.modalDetailItem}>
                      <span style={styles.modalValue}>{remarks}</span>
                    </div>
                  </div>
                ) : !['14893', '14891'].includes(product.jobNo) ? (
                  <div style={styles.modalSection}>
                    <h3 style={styles.modalSectionTitle}>Remarks</h3>
                    <div style={styles.modalDetailItem}>
                      <span style={styles.modalValue}>Nice product</span>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const ProductCard = ({ product }) => {
    const isExpanded = expandedCards.has(product.id)
    // Check if product has image (either original or uploaded)
    const currentImage = productImages[product.id] || product.mainImage
    const hasImage = currentImage !== null && currentImage !== undefined

    return (
      <div style={styles.card}>
        {/* Main Image Section */}
        <div style={styles.imageContainer}>
          <img src={currentImage || noImage} alt={product.name} style={styles.image} />
        </div>

        {/* Content Section */}
        <div style={styles.content}>
          {/* Header */}
          <div style={styles.header1}>
            <h2 style={styles.productName}>{product.name}</h2>
            <div style={styles.jobNo}>
              Job No: <span style={{ color: 'black' }}>{product.jobNo}</span>
            </div>
          </div>

          {/* Basic Product Details - Always Visible */}
          <div style={styles.detailsContainer}>
            <div style={styles.detailRow}>
              <span style={styles.label}>CLIENT: </span>
              <span style={styles.value}>{product.client}</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.label}>PRODUCT: </span>
              <span style={styles.value}>{product.product}</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.label}>QUANTITY: </span>
              <span style={styles.value}>{product.quantity}</span>
            </div>

            <div style={styles.detailRow}>
              <span style={styles.label}>DELIVERY DATE: </span>
              <span style={styles.value}>{product.deliveryDate}</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.label}>STATUS: </span>
              <span
                style={{
                  ...styles.badge,
                  ...getDeliveryModeClass(product.status),
                }}
              >
                {product.status}
              </span>
            </div>

            {/* Action Icons Row */}
            <div style={styles.actionIconsContainer}>
              {/* Eye Icon (View Details) - always show first */}
              <div
                style={styles.actionIcon}
                onClick={() => openModal(product)}
                title="View All Details"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                </svg>
              </div>

              {/* Person Icon - show only when no image exists and no person assigned */}
              {!product.mainImage && !productImages[product.id] && !assignedPersons[product.id] && (
                <div
                  style={styles.actionIcon}
                  title="Assign Person"
                  onClick={() => openPersonModal(product)}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
              )}

              {/* Tick Icon - show only when image exists and not for specific job numbers */}
              {hasImage && !['14888', '14889'].includes(product.jobNo) && (
                <div
                  style={{
                    ...styles.actionIcon,
                    backgroundColor: '#22c55e',
                    borderColor: '#22c55e',
                    color: 'white',
                  }}
                  onClick={() => handleTickAction(product)}
                  title="Share product"
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

              {/* WhatsApp Icon - only show when image exists for specific job numbers */}
              {hasImage && ['14888', '14889'].includes(product.jobNo) && (
                <div
                  style={styles.actionIcon}
                  onClick={() => handleWhatsAppShare(product)}
                  title="Share on WhatsApp"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516" />
                  </svg>
                </div>
              )}

              {/* Email Icon - only show when image exists for specific job numbers */}
              {hasImage && ['14888', '14889'].includes(product.jobNo) && (
                <div
                  style={styles.actionIcon}
                  onClick={() => handleEmailShare(product)}
                  title="Share via Email"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
                  </svg>
                </div>
              )}
            </div>
          </div>
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
      if (e.key === 'Escape' && personModalProduct) {
        closePersonModal()
      }
      if (e.key === 'Escape' && uploadModalProduct) {
        closeUploadModal()
      }
      if (e.key === 'Escape' && watermarkModalProduct) {
        closeWatermarkModal()
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [modalProduct, personModalProduct, uploadModalProduct, watermarkModalProduct])

  return (
    <div style={styles.container}>
      <div style={styles.innerContainer}>
        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.title}>Enquiries List</h1>
        </div>

        {/* Global Search */}
        <div style={styles.searchContainer}>
          <input
            type="text"
            placeholder="🔍 Search by product name, client, job number..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={styles.searchInput}
            onFocus={(e) => (e.target.style.borderColor = '#F97316')}
            onBlur={(e) => (e.target.style.borderColor = '#374151')}
          />
          <button
            style={styles.addButton}
            onMouseEnter={(e) => (e.target.style.backgroundColor = '#0052cc')}
            onMouseLeave={(e) => (e.target.style.backgroundColor = '#0061ed')}
            onClick={() => navigate('/enquiry/add')}
          >
            Add
          </button>
        </div>

        {/* Product Cards Grid */}
        <div style={styles.grid}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)
          ) : (
            <div style={styles.noResults}>
              <h3>No products found</h3>
              <p>Try adjusting your search terms: "{searchTerm}"</p>
              <button
                onClick={() => setSearchTerm('')}
                style={{
                  ...styles.button,
                  width: 'auto',
                  marginTop: '1rem',
                  padding: '0.5rem 1.5rem',
                }}
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Watermark Modal */}
      {watermarkModalProduct && (
        <WatermarkModal product={watermarkModalProduct} onClose={closeWatermarkModal} />
      )}

      {/* Person Assignment Modal */}
      {personModalProduct && (
        <PersonModal product={personModalProduct} onClose={closePersonModal} />
      )}

      {/* Upload Modal */}
      {uploadModalProduct && (
        <UploadModal product={uploadModalProduct} onClose={closeUploadModal} />
      )}

      {/* Detail View Modal */}
      {modalProduct && <Modal product={modalProduct} onClose={closeModal} />}
    </div>
  )
}

export default EnhancedProductCards
