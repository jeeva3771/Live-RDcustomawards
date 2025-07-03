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
  const [acceptedProducts, setAcceptedProducts] = useState(new Set()) // New state to track accepted products
  const navigate = useNavigate()

  // Available persons list
  const availablePersons = ['Ronald', 'Melroy', 'Kaushal', 'Priya', 'Arun', 'Neha', 'Vikram']

  // Product data with additional fields
  const products = [
    {
      id: 4,
      name: 'ACRYLIC PLAQUE',
      jobNo: '14891',
      client: 'TECH INNOVATIONS',
      email: 'contact@techinno.com',
      contactNo: '87654 32109',
      product: 'ACRYLIC PLAQUE',
      quantity: 15,
      startTime: '2025-02-09 09:10 AM',
      endTime: '2025-02-10 10:10 AM',
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
      startTime: '2025-02-09 09:10 AM',
      endTime: '2025-02-10 10:10 AM',
      quantity: 12,
      size: '16 Inches',
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
      contactNo: '98337 40939',
      product: 'MIC TROPHY',
      quantity: 46,
      size: '10 Inches',
      startTime: '2025-02-09 09:10 AM',
      endTime: '2025-02-10 10:10 AM',
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
    {
      id: 3,
      name: 'GOLD MEDAL',
      jobNo: '14890',
      client: 'SPORTS FEDERATION',
      email: 'awards@sports.com',
      contactNo: '91234 56789',
      startTime: '2025-02-09 09:10 AM',
      endTime: '2025-02-10 10:10 AM',
      status: 'SAMPLING',
      product: 'GOLD MEDAL',
      quantity: 100,
      size: '3 Inches',
      deliveryDate: '19-01-2026',
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
      quantity: 30,
      startTime: '2025-02-09 09:10 AM',
      endTime: '2025-02-10 10:10 AM',
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
        return { backgroundColor: '#3d983d', color: 'white' }
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

  // Function to handle accept button click
  const handleAcceptProduct = (productId) => {
    setAcceptedProducts((prev) => {
      const newAccepted = new Set(prev)
      newAccepted.add(productId)
      return newAccepted
    })
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

  const handleWhatsAppShare = (product) => {
    const currentImage = productImages[product.id] || product.mainImage
    const assignedPerson = assignedPersons[product.id]
    const remarks = productRemarks[product.id]

    // Create comprehensive message with all details
    const message = `🏆 *${product.name}* (Job No: ${product.jobNo})

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

  const handleEmailShare = (product) => {
    const assignedPerson = assignedPersons[product.id]
    const remarks = productRemarks[product.id]

    const subject = `Complete Product Details - ${product.name} (Job No: ${product.jobNo})`
    const body = `Dear Client,

    Please find the complete details of your order:

    === PRODUCT DETAILS ===
    Product Name: ${product.name}
    Job Number: ${product.jobNo}
    Client: ${product.client}
    Quantity: ${product.quantity}
    Size: ${product.size}
    Status: ${product.status}

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
      height: isMobile ? 'auto' : '320px',
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
                  {assignedPerson ? (
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
                  {/* Assignment Information */}

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
                ) : ['14888', '14889', '14890', '14892'].includes(product.jobNo) ? (
                  <div style={styles.modalSection}>
                    <h3 style={styles.modalSectionTitle}>Remarks</h3>
                    <div style={styles.modalDetailItem}>
                      <span style={styles.modalValue}>Special Job</span>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          {/* Modal Footer with Action Buttons */}
          {/* <div style={styles.modalFooter}>
            {hasImage && (
              <>
                <button
                  style={styles.modalActionButton}
                  onClick={() => handleWhatsAppShare(product)}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516" />
                  </svg>
                </button>
                <button style={styles.modalActionButton} onClick={() => handleEmailShare(product)}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
                  </svg>
                </button>
              </>
            )}
          </div> */}
        </div>
      </div>
    )
  }

  const ProductCard = ({ product }) => {
    const isExpanded = expandedCards.has(product.id)
    // Check if product has image (either original or uploaded)
    const currentImage = productImages[product.id] || product.mainImage
    const hasImage = currentImage !== null && currentImage !== undefined
    const isAccepted = acceptedProducts.has(product.id)

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

              {/* Upload Icon - show only when product is accepted and has no image */}
              {isAccepted && !product.mainImage && !productImages[product.id] && (
                <div
                  style={styles.actionIcon}
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

              {/* Accept Button - show only when product is not accepted and has no image */}
              {!isAccepted && !product.mainImage && !productImages[product.id] && (
                <button
                  style={{
                    width: 'auto',
                    background: 'orange',
                    padding: '4px 10px',
                    fontSize: '14px',
                    border: 'none',
                    borderRadius: '4px',
                    color: '#fff',
                    cursor: 'pointer',
                  }}
                  onClick={() => handleAcceptProduct(product.id)}
                >
                  Accept
                </button>
              )}

              {/* Processing Button - show only when product is accepted and has no image */}
              {isAccepted && !product.mainImage && !productImages[product.id] && (
                <button
                  style={{
                    width: 'auto',
                    background: 'green',
                    padding: '4px 10px',
                    fontSize: '14px',
                    border: 'none',
                    borderRadius: '4px',
                    color: '#fff',
                    cursor: 'pointer',
                  }}
                >
                  Processing...
                </button>
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
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [modalProduct, personModalProduct, uploadModalProduct])

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
          {/* <button
            style={styles.addButton}
            onMouseEnter={(e) => (e.target.style.backgroundColor = '#0052cc')}
            onMouseLeave={(e) => (e.target.style.backgroundColor = '#0061ed')}
            onClick={() => navigate('/enquiry/add')}
          >
            Add
          </button> */}
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



///////////////////////














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





const EnhancedProductCards = () => {
  const [expandedCards, setExpandedCards] = useState(new Set())
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
  const navigate = useNavigate()

  // Available persons list
  const availablePersons = ['Ronald', 'Melroy', 'Kaushal', 'Priya', 'Arun', 'Neha', 'Vikram']

  // Product data with additional fields
  const products = [
    {
      id: 4,
      name: 'ACRYLIC PLAQUE',
      jobNo: '14891',
      client: 'TECH INNOVATIONS',
      email: 'contact@techinno.com',
      contactNo: '87654 32109',
      product: 'ACRYLIC PLAQUE',
      quantity: 15,
      startTime: '2025-02-09 09:10 AM',
      endTime: '2025-02-10 10:10 AM',
      status: 'PRODUCTION',
      size: '12 Inches',
      deliveryDate: '19-09-2025',
      deliveryLocation: 'Powai - MUMBAI',
      deliveryMode: 'HAND DELIVERY',
      mainImage: null,
      enquiryOrigin: 'WhatsApp',
      budget: '₹30,000',
      preferedMaterial: 'Clear Acrylic',
      briefing: 'Modern acrylic plaques for startup milestone celebration. Minimalist design preferred.',
      paymentTerms: '50% Advance & Balance when Material is Ready',
      maxImages: 4
    },
    {
      id: 6,
      name: 'GLASS TROPHY',
      jobNo: '14893',
      client: 'EXCELLENCE AWARDS',
      email: 'awards@excellence.com',
      contactNo: '98123 45678',
      product: 'GLASS TROPHY',
      startTime: '2025-02-09 09:10 AM',
      endTime: '2025-02-10 10:10 AM',
      quantity: 12,
      size: '16 Inches',
      status: 'BILLING',
      deliveryDate: '11-01-2025',
      deliveryLocation: 'Andheri - MUMBAI',
      deliveryMode: 'EXPRESS DELIVERY',
      mainImage: null,
      enquiryOrigin: 'LinkedIn',
      budget: '₹85,000',
      preferedMaterial: 'Borosilicate Glass',
      briefing: 'Premium glass trophies for annual excellence awards ceremony. LED base lighting required.',
      paymentTerms: 'Corporate Credit',
      maxImages: 3
    },
    {
      id: 1,
      name: 'MIC TROPHY',
      jobNo: '14888',
      client: 'CLEONETT EVENTS',
      email: 'steffie@cleonett.com',
      contactNo: '98337 40939',
      product: 'MIC TROPHY',
      quantity: 46,
      size: '10 Inches',
      startTime: '2025-02-09 09:10 AM',
      endTime: '2025-02-10 10:10 AM',
      status: 'ENQUIRY',
      deliveryDate: '19-03-2025',
      deliveryLocation: 'ITC Central - Parel - MUMBAI',
      deliveryMode: 'HAND DELIVERY',
      mainImage: award1,
      enquiryOrigin: 'Website Form',
      budget: '₹50,000',
      preferedMaterial: 'Crystal Glass',
      briefing: 'High-quality microphone trophy for annual corporate event. Should include company logo engraving.',
      paymentTerms: '50% advance & Bal before dispatch & delivery',
      maxImages: 4
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
      briefing: 'Elegant crystal awards for employee recognition ceremony. Custom text engraving required.',
      paymentTerms: '100% Advance',
      maxImages: 4
    },
    {
      id: 3,
      name: 'GOLD MEDAL',
      jobNo: '14890',
      client: 'SPORTS FEDERATION',
      email: 'awards@sports.com',
      contactNo: '91234 56789',
      startTime: '2025-02-09 09:10 AM',
      endTime: '2025-02-10 10:10 AM',
      status: 'SAMPLING',
      product: 'GOLD MEDAL',
      quantity: 100,
      size: '3 Inches',
      deliveryDate: '19-01-2026',
      deliveryLocation: 'Worli Sports Complex - MUMBAI',
      deliveryMode: 'PICKUP',
      mainImage: award4,
      enquiryOrigin: 'Email Inquiry',
      budget: '₹1,20,000',
      preferedMaterial: 'Gold Plated Metal',
      briefing: 'Olympic-style gold medals for inter-school sports competition. Different sports icons required.',
      paymentTerms: 'Corporate Credit',
      maxImages: 4
    },
    {
      id: 5,
      name: 'WOODEN SHIELD',
      jobNo: '14892',
      client: 'HERITAGE CLUB',
      email: 'heritage@club.com',
      contactNo: '99887 76543',
      product: 'WOODEN SHIELD',
      quantity: 30,
      startTime: '2025-02-09 09:10 AM',
      endTime: '2025-02-10 10:10 AM',
      status: 'PRINTING',
      size: '14 Inches',
      deliveryDate: '19-02-2025',
      deliveryLocation: 'Fort - MUMBAI',
      deliveryMode: 'COURIER',
      mainImage: award6,
      enquiryOrigin: 'Referral',
      budget: '₹90,000',
      preferedMaterial: 'Teak Wood',
      briefing: 'Traditional wooden shields for cultural event awards. Intricate carving work required.',
      paymentTerms: '50% advance & Bal before dispatch & delivery',
      maxImages: 4
    },
  ]

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
      default:
        return 'status-default'
    }
  }

  const getProductImages = (productId) => {
    return productImages[productId] || []
  }

  const getUploadedCount = (productId) => {
    const images = getProductImages(productId)
    const product = products.find(p => p.id === productId)
    let count = images.length

    // Add 1 if product has mainImage (default image)
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
    const currentIndex = currentImageIndex[product.id] || 0

    if (images.length > 0) {
      return images[currentIndex] || images[0]
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
    const product = products.find(p => p.id === productId)
    const totalImages = images.length + (product.mainImage ? 1 : 0)

    if (totalImages <= 1) return

    setCurrentImageIndex(prev => ({
      ...prev,
      [productId]: ((prev[productId] || 0) - 1 + totalImages) % totalImages
    }))
  }

  const handleNextImage = (productId) => {
    const images = getProductImages(productId)
    const product = products.find(p => p.id === productId)
    const totalImages = images.length + (product.mainImage ? 1 : 0)

    if (totalImages <= 1) return

    setCurrentImageIndex(prev => ({
      ...prev,
      [productId]: ((prev[productId] || 0) + 1) % totalImages
    }))
  }

  const handleModalPreviousImage = (productId) => {
    const images = getProductImages(productId)
    const product = products.find(p => p.id === productId)
    const allImages = [...(product.mainImage ? [product.mainImage] : []), ...images]

    if (allImages.length <= 1) return

    setModalImageIndex(prev => ({
      ...prev,
      [productId]: ((prev[productId] || 0) - 1 + allImages.length) % allImages.length
    }))
  }

  const handleModalNextImage = (productId) => {
    const images = getProductImages(productId)
    const product = products.find(p => p.id === productId)
    const allImages = [...(product.mainImage ? [product.mainImage] : []), ...images]

    if (allImages.length <= 1) return

    setModalImageIndex(prev => ({
      ...prev,
      [productId]: ((prev[productId] || 0) + 1) % allImages.length
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

  const handleAcceptProduct = (productId) => {
    setAcceptedProducts(prev => {
      const newAccepted = new Set(prev)
      newAccepted.add(productId)
      return newAccepted
    })
    setShowUploadForProducts(prev => {
      const newShowUpload = new Set(prev)
      newShowUpload.add(productId)
      return newShowUpload
    })
  }

  const confirmUpload = () => {
    if (selectedFile && uploadModalProduct) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setProductImages(prev => ({
          ...prev,
          [uploadModalProduct.id]: [...(prev[uploadModalProduct.id] || []), e.target.result]
        }))

        // Hide upload icons and show accept button again
        setShowUploadForProducts(prev => {
          const newShowUpload = new Set(prev)
          newShowUpload.delete(uploadModalProduct.id)
          return newShowUpload
        })

        closeUploadModal()
      }
      reader.readAsDataURL(selectedFile)
    }
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
      <>
        <style jsx>{`
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
            border: 2px dashed ${dragActive ? '#4F46E5' : '#D1D5DB'};
            border-radius: 0.5rem;
            padding: 2rem;
            text-align: center;
            background-color: ${dragActive ? '#F3F4F6' : '#F9FAFB'};
            cursor: pointer;
            transition: border-color 0.2s ease, background-color 0.2s ease;
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
            color: #6B7280;
            font-size: 0.875rem;
            margin: 0.5rem 0;
            line-height: 1.4;
          }

          .upload-text-secondary {
            color: #9CA3AF;
            font-size: 0.75rem;
            margin: 0;
          }

          .upload-preview-container {
            margin-top: 1rem;
            border: 1px solid #E5E7EB;
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
            background-color: #EF4444;
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
            border: 1px solid #E5E7EB;
          }

          .upload-file-info h4 {
            font-size: 0.875rem;
            font-weight: 500;
            color: #111827;
            margin: 0 0 0.25rem 0;
          }

          .upload-file-info p {
            font-size: 0.75rem;
            color: #6B7280;
            margin: 0;
          }

          .upload-actions {
            display: flex;
            gap: 0.75rem;
            justify-content: flex-end;
          }

          .upload-btn-cancel {
            padding: 0.75rem 1.5rem;
            background-color: #6B7280;
            color: white;
            border: none;
            border-radius: 0.5rem;
            cursor: pointer;
            font-size: 0.875rem;
            font-weight: 500;
          }

          .upload-btn-submit {
            padding: 0.75rem 1.5rem;
            background-color: ${selectedFile ? '#28a745' : 'rgb(100 176 100)'};
            color: white;
            border: none;
            border-radius: 0.5rem;
            cursor: ${selectedFile ? 'pointer' : 'not-allowed'};
            font-size: 0.875rem;
            font-weight: 500;
          }

          .hidden-input {
            display: none;
          }
        `}</style>

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

                  <p className="upload-text-primary">
                    Click to browse files or drag and drop
                  </p>

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
                      <img
                        src={previewUrl}
                        alt="Preview"
                        className="upload-preview-image"
                      />
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
              <button
                onClick={confirmUpload}
                className="upload-btn-submit"
                disabled={!selectedFile}
              >
                Confirm Upload
              </button>
            </div>
          </div>
        </div>
      </>
    )
  }

  const Modal = ({ product, onClose }) => {
    if (!product) return null

    const currentModalImage = getCurrentModalImage(product)
    const assignedPerson = assignedPersons[product.id]
    const remarks = productRemarks[product.id]
    const uploadedCount = getUploadedCount(product.id)
    const maxImages = getMaxImages(product)
    const allImages = [...(product.mainImage ? [product.mainImage] : []), ...getProductImages(product.id)]
    const currentIndex = modalImageIndex[product.id] || 0

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
                      ‹
                    </button>
                  )}

                  <img
                    src={currentModalImage}
                    alt={product.name}
                    className="modal-image"
                  />

                  {allImages.length > 1 && (
                    <button
                      className="nav-arrow nav-arrow-right"
                      onClick={() => handleModalNextImage(product.id)}
                    >
                      ›
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
                    <span className="modal-label">Product:</span>
                    <span className="modal-value">{product.product}</span>
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
                </div>
              </div>
            </div>

            {/* Row 2: Assignment Details - Full Width */}
            {['14888', '14889'].includes(product.jobNo) && (
              <div className="modal-full-width-row">
                <div className="modal-section">
                  <h3 className="modal-section-title">Assignment Details</h3>
                  <table className="modal-table">
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                        <th>Client Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <img
                            src={currentModalImage}
                            alt={product.name}
                            style={{
                              width: '60px',
                              height: '60px',
                              objectFit: 'cover',
                              borderRadius: '4px',
                              border: '1px solid #e5e7eb'
                            }}
                          />
                        </td>
                        <td>{product.startTime || '-'}</td>
                        <td>{product.endTime || '-'}</td>
                        <td>
                          <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <button
                              style={{
                                backgroundColor: '#ef4444',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                padding: '4px 12px',
                                fontSize: '12px',
                                cursor: 'pointer'
                              }}
                            >
                              Reject
                            </button>
                            <button
                              style={{
                                backgroundColor: '#22c55e',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                padding: '4px 12px',
                                fontSize: '12px',
                                cursor: 'pointer'
                              }}
                            >
                              Approve
                            </button>
                          </div>
                        </td>
                      </tr>
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
            {remarks && (
              <div className="modal-full-width-row">
                <div className="modal-section">
                  <h3 className="modal-section-title">Remarks</h3>
                  <div className="modal-detail-item">
                    <span className="modal-value">{remarks}</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Updated Styles */}
          <style jsx>{`
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
              width: 40px;
              height: 40px;
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
            }

            .modal-section-title {
              font-size: 1rem;
              font-weight: bold;
              color: #0061ed;
              margin: 0 0 0.75rem 0;
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
            }
          `}</style>
        </div>
      </div>
    )
  }

  const ProductCard = ({ product }) => {
    const isExpanded = expandedCards.has(product.id)
    const currentImage = getCurrentImage(product)
    const hasImage = currentImage !== null && currentImage !== undefined
    const isAccepted = acceptedProducts.has(product.id)
    const showUploadIcons = showUploadForProducts.has(product.id)
    const uploadedCount = getUploadedCount(product.id)
    const maxImages = getMaxImages(product)
    const allImages = [...(product.mainImage ? [product.mainImage] : []), ...getProductImages(product.id)]
    const showSlideControls = allImages.length > 1

    const handleAccept = () => {
      handleAcceptProduct(product.id)
    }

    const handleSubmit = () => {
      // Handle final submission when all images are uploaded
      alert(`${product.name} submitted successfully!`)
    }

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
            background-color: #E5E7EB;
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
            width: 30px;
            height: 30px;
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
            transition: background-color 0.2s ease, color 0.2s ease;
            flex-shrink: 0;
          }

          .action-icon:hover {
            background-color: #0061ed;
            color: white;
          }

          .accept-btn {
            width: auto;
            background: orange;
            padding: 4px 10px;
            font-size: 14px;
            border: none;
            border-radius: 4px;
            color: #fff;
            cursor: pointer;
          }

          .accept-btn:hover {
            background: #e69500;
          }

          .processing-green-btn {
            width: auto;
            background: #28a745;
            padding: 4px 10px;
            font-size: 14px;
            border: none;
            border-radius: 4px;
            color: #fff;
            cursor: not-allowed;
          }

          .submit-btn {
            width: auto;
            background: #28a745;
            padding: 4px 12px;
            font-size: 14px;
            border: none;
            border-radius: 4px;
            color: #fff;
            cursor: pointer;
            font-weight: 600;
          }

          .submit-btn:hover {
            background: #218838;
          }

          .upload-progress-text {
            font-size: 0.8rem;
            color: #666;
            margin-left: 0.5rem;
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
                  ‹
                </button>
              )}

              <img src={currentImage} alt={product.name} className="product-image" />

              {showSlideControls && (
                <button
                  className="slide-arrow slide-arrow-right"
                  onClick={() => handleNextImage(product.id)}
                >
                  ›
                </button>
              )}

              {(showSlideControls || uploadedCount > 0) && (
                <div className="image-progress">
                  {showSlideControls ? `${(currentImageIndex[product.id] || 0) + 1}/${allImages.length}` : `${uploadedCount}/${maxImages}`}
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
            </div>

            <div className="details-container">
              <div className="detail-row">
                <span className="detail-label">CLIENT: </span>
                <span className="detail-value">{product.client}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">PRODUCT: </span>
                <span className="detail-value">{product.product}</span>
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
                {/* Always show eye icon */}
                <div
                  className="action-icon"
                  onClick={() => openModal(product)}
                  title="View All Details"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 3-1.34 3s1.34 3 3-1.34-3-3-3z" />
                  </svg>
                </div>

                {/* Show upload icon when showUploadIcons is true */}
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

                {/* Show accept button when not accepted OR when upload is complete and not at max */}
                {(!isAccepted || (!showUploadIcons && uploadedCount > 0 && uploadedCount < maxImages)) && (
                  <button className="accept-btn" onClick={handleAccept}>
                    Accept
                  </button>
                )}

                {/* Show green processing button when showUploadIcons is true */}
                {showUploadIcons && uploadedCount < maxImages && (
                  <button className="processing-green-btn" disabled>
                    Processing...
                  </button>
                )}

                {/* Show submit button when all images uploaded */}
                {uploadedCount === maxImages && (
                  <button className="submit-btn" onClick={handleSubmit}>
                    Submit
                  </button>
                )}

                {/* Show upload progress when there are uploaded images */}
                {uploadedCount > 0 && (
                  <span className="upload-progress-text">
                    {uploadedCount}/{maxImages}
                  </span>
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
      if (e.key === 'Escape' && uploadModalProduct) {
        closeUploadModal()
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [modalProduct, uploadModalProduct])

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
          border-color: #F97316;
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
          color: #9CA3AF;
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
          background-color: #2563EB;
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

        .status-dispatch {
          background-color: red;
          color: white;
        }

        .status-billing {
          background-color: grey;
          color: white;
        }

        .status-default {
          background-color: #EA580C;
          color: white;
        }

        .status-badge {
          padding: 0.25rem 0.5rem;
          border-radius: 0.25rem;
          font-size: ${isMobile ? '0.625rem' : '0.75rem'};
          font-weight: 600;
          display: inline-block;
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
          </div>

          <div className="products-grid">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)
            ) : (
              <div className="no-results">
                <h3>No products found</h3>
                <p>Try adjusting your search terms: "{searchTerm}"</p>
                <button
                  onClick={() => setSearchTerm('')}
                  className="clear-search-btn"
                >
                  Clear Search
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Upload Modal */}
        {uploadModalProduct && (
          <UploadModal product={uploadModalProduct} onClose={closeUploadModal} />
        )}

        {/* Detail View Modal */}
        {modalProduct && <Modal product={modalProduct} onClose={closeModal} />}
      </div>
    </>
  )
}

export default EnhancedProductCards
