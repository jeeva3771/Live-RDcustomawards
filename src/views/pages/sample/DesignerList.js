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
import a1 from '../../../../public/a1.avif'
import a2 from '../../../../public/a2.jpg'
import a3 from '../../../../public/a3.jpg'
import a4 from '../../../../public/a4.webp'

const EnhancedProductCards = () => {
  const [expandedCards, setExpandedCards] = useState(new Set())
  const [submit, setSubmit] = useState(false)
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
  const [processedProducts, setProcessedProducts] = useState(new Set([7, 8, 9])) // New state for processed products
  const navigate = useNavigate()

  // Available persons list
  const availablePersons = ['Ronald', 'Melroy', 'Kaushal', 'Priya', 'Arun', 'Neha', 'Vikram']

  const products = [
    {
      id: 1,
      name: 'MIC TROPHY',
      jobNo: '14888a',
      client: 'CLEONETT EVENTS',
      innerPacking: 'Tissue papper',
      email: 'steffie@cleonett.com',
      contactNo: '98337 40939',
      quantity: 46,
      size: '10 Inches',
      startTime: '2025-02-09 09:10 AM',
      endTime: '2025-02-10 10:10 AM',
      status: 'Pending',
      deliveryDate: '19-03-2025',
      deliveryLocation: 'ITC Central - Parel - MUMBAI',
      deliveryMode: 'HAND DELIVERY',
      mainImage: award1,
      enquiryOrigin: 'Website Form',
      deliveryAddress: {
        street: 'ITC Central, Parel',
        city: 'Mumbai',
        state: 'MH',
        postalCode: '400012',
      },
      billingAddress: {
        street: '1st Floor, Cleonett House, Andheri East',
        city: 'Mumbai',
        state: 'MH',
        postalCode: '400059',
      },
      budget: '₹50,000',
      preferedMaterial: 'Crystal Glass',
      briefing:
        'High-quality microphone trophy for annual corporate event. Should include company logo engraving.',
      paymentTerms: '50% advance & Bal before dispatch & delivery',
      maxImages: 1,
      remarks: 'Special product',

      time: '2025-02-08 04:00 PM',
      phoneNumber: '98337 40939',
      pricePerPiece: '₹1,100',
      deliveryType: 'Express Hand Delivery',
      billingAddress: 'Cleonett Events, 1st Floor, Andheri East, Mumbai, MH 400059',
      packingType: 'Bubble Wrap & Box',
      innerPackingType: 'Foam Cutout',
      premiumPackingOptions: 'Branded Gift Box',
      packingInstructions: 'Keep upright, handle with care.',
      packingMode: 'Individual Pack',
      deliveryAddress: 'ITC Central, Parel, Mumbai, MH 400012',
    },
    {
      id: 2,
      name: 'MIC TROPHY',
      jobNo: '14888b',
      client: 'CLEONETT EVENTS',
      email: 'steffie@cleonett.com',
      contactNo: '98337 40939',
      quantity: 46,
      size: '10 Inches',
      innerPacking: 'Tissue papper',
      startTime: '2025-02-09 09:10 AM',
      endTime: '2025-02-10 10:10 AM',
      status: 'Pending',
      deliveryDate: '19-03-2025',
      deliveryLocation: 'ITC Central - Parel - MUMBAI',
      deliveryMode: 'HAND DELIVERY',
      mainImage: award5,
      enquiryOrigin: 'Website Form',
      deliveryAddress: {
        street: 'ITC Central, Parel',
        city: 'Mumbai',
        state: 'MH',
        postalCode: '400012',
      },
      billingAddress: {
        street: '1st Floor, Cleonett House, Andheri East',
        city: 'Mumbai',
        state: 'MH',
        postalCode: '400059',
      },
      budget: '₹50,000',
      preferedMaterial: 'Crystal Glass',
      briefing: 'Duplicate batch for same event — same engraving and specs.',
      paymentTerms: '50% advance & Bal before dispatch & delivery',
      maxImages: 1,
      remarks: 'Special product',

      time: '2025-02-08 04:30 PM',
      phoneNumber: '98337 40939',
      deliveryAddress: {
        street: 'ITC Central, Parel',
        city: 'Mumbai',
        state: 'MH',
        postalCode: '400012',
      },
      billingAddress: {
        street: '1st Floor, Cleonett House, Andheri East',
        city: 'Mumbai',
        state: 'MH',
        postalCode: '400059',
      },
      pricePerPiece: '₹1,100',
      deliveryType: 'Express Hand Delivery',
      billingAddress: 'Cleonett Events, 1st Floor, Andheri East, Mumbai, MH 400059',
      packingType: 'Bubble Wrap & Box',
      innerPackingType: 'Foam Cutout',
      premiumPackingOptions: 'Branded Gift Box',
      packingInstructions: 'Keep same as previous lot.',
      packingMode: 'Individual Pack',
      deliveryAddress: 'ITC Central, Parel, Mumbai, MH 400012',
    },
    {
      id: 3,
      name: 'MIC TROPHY',
      jobNo: '14888d',
      client: 'CLEONETT EVENTS',
      email: 'steffie@cleonett.com',
      innerPacking: 'Tissue papper',
      contactNo: '98337 40939',
      quantity: 46,
      size: '10 Inches',
      startTime: '2025-02-09 09:10 AM',
      endTime: '2025-02-10 10:10 AM',
      status: 'Pending',
      deliveryDate: '19-03-2025',
      deliveryLocation: 'ITC Central - Parel - MUMBAI',
      deliveryMode: 'HAND DELIVERY',
      mainImage: a3,
      enquiryOrigin: 'Website Form',
      budget: '₹50,000',
      preferedMaterial: 'Crystal Glass',
      briefing: 'Backup set for main award shipment.',
      paymentTerms: '50% advance & Bal before dispatch & delivery',
      maxImages: 1,
      remarks: 'Special product',

      time: '2025-02-08 05:00 PM',
      phoneNumber: '98337 40939',
      pricePerPiece: '₹1,100',
      deliveryType: 'Express Hand Delivery',
      billingAddress: 'Cleonett Events, 1st Floor, Andheri East, Mumbai, MH 400059',
      packingType: 'Bubble Wrap & Box',
      deliveryAddress: {
        street: 'ITC Central, Parel',
        city: 'Mumbai',
        state: 'MH',
        postalCode: '400012',
      },
      billingAddress: {
        street: '1st Floor, Cleonett House, Andheri East',
        city: 'Mumbai',
        state: 'MH',
        postalCode: '400059',
      },
      innerPackingType: 'Foam Cutout',
      premiumPackingOptions: 'Branded Gift Box',
      packingInstructions: 'Mark as backup batch.',
      packingMode: 'Individual Pack',
      deliveryAddress: 'ITC Central, Parel, Mumbai, MH 400012',
    },
    // {
    //   id: 4,
    //   name: 'ACRYLIC PLAQUE',
    //   jobNo: '14891a',
    //   client: 'TECH INNOVATIONS',
    //   email: 'contact@techinno.com',
    //   contactNo: '87654 32109',
    //   quantity: 15,
    //   size: '12 Inches',
    //   startTime: '2025-02-09 09:10 AM',
    //   endTime: '2025-02-10 10:10 AM',
    //   status: 'Pending',
    //   innerPacking: 'Tissue papper',
    //   deliveryAddress: {
    //     street: 'ITC Central, Parel',
    //     city: 'Mumbai',
    //     state: 'MH',
    //     postalCode: '400012',
    //   },
    //   billingAddress: {
    //     street: '1st Floor, Cleonett House, Andheri East',
    //     city: 'Mumbai',
    //     state: 'MH',
    //     postalCode: '400059',
    //   },
    //   deliveryDate: '19-09-2025',
    //   deliveryLocation: 'Powai - MUMBAI',
    //   deliveryMode: 'HAND DELIVERY',
    //   mainImage: a1,
    //   enquiryOrigin: 'WhatsApp',
    //   budget: '₹30,000',
    //   preferedMaterial: 'Clear Acrylic',
    //   briefing: 'Modern plaques for milestone recognition.',
    //   paymentTerms: '50% Advance & Balance when Material is Ready',
    //   maxImages: 4,
    //   remarks: 'Good product',

    //   time: '2025-09-17 03:00 PM',
    //   phoneNumber: '87654 32109',
    //   pricePerPiece: '₹2,000',
    //   deliveryType: 'Standard Hand Delivery',
    //   billingAddress: 'Tech Innovations Pvt Ltd, 502 Innovation Towers, Powai, MH 400076',
    //   packingType: 'Soft Foam',
    //   innerPackingType: 'Foam Cut Inserts',
    //   premiumPackingOptions: 'Gold Foil Gift Wrap',
    //   packingInstructions: 'No scratches on acrylic surface.',
    //   deliveryAddress: {
    //     street: 'ITC Central, Parel',
    //     city: 'Mumbai',
    //     state: 'MH',
    //     postalCode: '400012',
    //   },
    //   billingAddress: {
    //     street: '1st Floor, Cleonett House, Andheri East',
    //     city: 'Mumbai',
    //     state: 'MH',
    //     postalCode: '400059',
    //   },
    //   packingMode: 'Batch Pack',
    //   deliveryAddress: 'Innovation Towers, Powai, Mumbai, MH 400076',
    // },
    // {
    //   id: 5,
    //   name: 'ACRYLIC PLAQUE',
    //   jobNo: '14891d',
    //   client: 'TECH INNOVATIONS',
    //   email: 'contact@techinno.com',
    //   contactNo: '87654 32109',
    //   quantity: 15,
    //   innerPacking: 'Tissue papper',
    //   size: '12 Inches',
    //   startTime: '2025-02-09 09:10 AM',
    //   endTime: '2025-02-10 10:10 AM',
    //   status: 'Pending',
    //   deliveryAddress: {
    //     street: 'ITC Central, Parel',
    //     city: 'Mumbai',
    //     state: 'MH',
    //     postalCode: '400012',
    //   },
    //   billingAddress: {
    //     street: '1st Floor, Cleonett House, Andheri East',
    //     city: 'Mumbai',
    //     state: 'MH',
    //     postalCode: '400059',
    //   },
    //   deliveryDate: '19-09-2025',
    //   deliveryLocation: 'Powai - MUMBAI',
    //   deliveryMode: 'HAND DELIVERY',
    //   mainImage: a4,
    //   enquiryOrigin: 'WhatsApp',
    //   budget: '₹30,000',
    //   preferedMaterial: 'Clear Acrylic',
    //   briefing: 'Additional design for same milestone batch.',
    //   paymentTerms: '50% Advance & Balance when Material is Ready',
    //   maxImages: 4,
    //   remarks: 'Good product',

    //   time: '2025-09-17 03:30 PM',
    //   phoneNumber: '87654 32109',
    //   pricePerPiece: '₹2,000',
    //   deliveryType: 'Standard Hand Delivery',
    //   billingAddress: 'Tech Innovations Pvt Ltd, 502 Innovation Towers, Powai, MH 400076',
    //   packingType: 'Soft Foam',
    //   innerPackingType: 'Foam Cut Inserts',
    //   premiumPackingOptions: 'Gold Foil Gift Wrap',
    //   packingInstructions: 'Keep plaques separate.',
    //   packingMode: 'Batch Pack',
    //   deliveryAddress: 'Innovation Towers, Powai, Mumbai, MH 400076',
    // },
    // {
    //   id: 6,
    //   name: 'GLASS TROPHY',
    //   jobNo: '14893c',
    //   client: 'EXCELLENCE AWARDS',
    //   email: 'awards@excellence.com',
    //   innerPacking: 'Tissue papper',
    //   deliveryAddress: {
    //     street: 'ITC Central, Parel',
    //     city: 'Mumbai',
    //     state: 'MH',
    //     postalCode: '400012',
    //   },
    //   billingAddress: {
    //     street: '1st Floor, Cleonett House, Andheri East',
    //     city: 'Mumbai',
    //     state: 'MH',
    //     postalCode: '400059',
    //   },
    //   contactNo: '98123 45678',
    //   quantity: 12,
    //   size: '16 Inches',
    //   startTime: '2025-02-09 09:10 AM',
    //   endTime: '2025-02-10 10:10 AM',
    //   status: 'Pending',
    //   deliveryDate: '11-01-2025',
    //   deliveryLocation: 'Andheri - MUMBAI',
    //   deliveryMode: 'EXPRESS DELIVERY',
    //   mainImage: a2,
    //   enquiryOrigin: 'LinkedIn',
    //   budget: '₹85,000',
    //   preferedMaterial: 'Borosilicate Glass',
    //   briefing: 'Premium trophies with LED base.',
    //   paymentTerms: 'Corporate Credit',
    //   maxImages: 3,
    //   remarks: 'Good product',

    //   time: '2025-01-10 02:00 PM',
    //   phoneNumber: '98123 45678',
    //   pricePerPiece: '₹7,000',
    //   deliveryType: 'Express Courier',
    //   billingAddress: 'Excellence Awards Pvt Ltd, 14th Floor, Andheri West, MH 400053',
    //   packingType: 'Hard Foam & Wooden Box',
    //   innerPackingType: 'Thermocol Mold',
    //   premiumPackingOptions: 'Custom LED Box',
    //   packingInstructions: 'Secure LED base separately.',
    //   deliveryAddress: {
    //     street: 'ITC Central, Parel',
    //     city: 'Mumbai',
    //     state: 'MH',
    //     postalCode: '400012',
    //   },
    //   billingAddress: {
    //     street: '1st Floor, Cleonett House, Andheri East',
    //     city: 'Mumbai',
    //     state: 'MH',
    //     postalCode: '400059',
    //   },
    //   packingMode: 'Individual Pack',
    //   deliveryAddress: 'Andheri West, Mumbai, MH 400053',
    // },
    {
      id: 7,
      name: 'CRYSTAL AWARD',
      jobNo: '14889',
      client: 'CORPORATE SOLUTIONS',
      email: 'info@corpsol.com',
      contactNo: '98765 43210',
      quantity: 25,
      size: '8 Inches',
      startTime: '2025-02-09 09:10 AM',
      endTime: '2025-02-10 10:10 AM',
      status: 'Completed',
      deliveryDate: '17-04-2025',
      deliveryLocation: 'Bandra Kurla Complex - MUMBAI',

      deliveryMode: 'COURIER',
      mainImage: award2,
      enquiryOrigin: 'Direct Call',
      budget: '₹75,000',
      preferedMaterial: 'Premium Crystal',
      briefing: 'Elegant crystal awards for employees.',
      paymentTerms: '100% Advance',
      maxImages: 4,
      remarks: 'Special product',

      time: '2025-04-15 05:00 PM',
      phoneNumber: '98765 43210',
      pricePerPiece: '₹3,000',
      deliveryType: 'Secure Courier',
      billingAddress: 'Corporate Solutions Ltd, Bandra East, Mumbai, MH 400051',
      packingType: 'Bubble Wrap & Hard Box',
      innerPackingType: 'Cushion Foam',
      premiumPackingOptions: 'Velvet Pouch',
      packingInstructions: 'No scratches on crystal surface.',
      deliveryAddress: {
        street: 'ITC Central, Parel',
        city: 'Mumbai',
        state: 'MH',
        postalCode: '400012',
      },
      billingAddress: {
        street: '1st Floor, Cleonett House, Andheri East',
        city: 'Mumbai',
        state: 'MH',
        postalCode: '400059',
      },
      packingMode: 'Individual Pack',
      deliveryAddress: 'BKC, Mumbai, MH 400051',
    },
    {
      id: 8,
      name: 'GOLD MEDAL',
      jobNo: '14890',
      client: 'SPORTS FEDERATION',
      email: 'awards@sports.com',
      contactNo: '91234 56789',
      quantity: 100,
      size: '3 Inches',
      startTime: '2025-02-09 09:10 AM',
      endTime: '2025-02-10 10:10 AM',
      status: 'Completed',
      deliveryDate: '19-01-2026',
      deliveryLocation: 'Worli Sports Complex - MUMBAI',
      deliveryMode: 'PICKUP',
      mainImage: award4,
      enquiryOrigin: 'Email Inquiry',
      budget: '₹1,20,000',
      preferedMaterial: 'Gold Plated Metal',
      briefing: 'Olympic-style medals with different icons.',
      paymentTerms: 'Corporate Credit',
      maxImages: 1,
      remarks: 'Special product',

      time: '2026-01-15 03:00 PM',
      phoneNumber: '91234 56789',
      pricePerPiece: '₹1,200',
      deliveryType: 'Self Pickup',
      billingAddress: 'Sports Federation India, Worli, Mumbai, MH 400030',
      packingType: 'Velvet Pouches',
      innerPackingType: 'Individual Slot',
      deliveryAddress: {
        street: 'ITC Central, Parel',
        city: 'Mumbai',
        state: 'MH',
        postalCode: '400012',
      },
      billingAddress: {
        street: '1st Floor, Cleonett House, Andheri East',
        city: 'Mumbai',
        state: 'MH',
        postalCode: '400059',
      },
      premiumPackingOptions: 'Branded Medal Case',
      packingInstructions: 'Group by sport type.',
      packingMode: 'Batch Pack of 10',
      deliveryAddress: 'Worli Sports Complex, Mumbai, MH 400030',
    },
    {
      id: 9,
      name: 'WOODEN SHIELD',
      jobNo: '14892',
      client: 'HERITAGE CLUB',
      email: 'heritage@club.com',
      contactNo: '99887 76543',
      quantity: 30,
      size: '14 Inches',
      startTime: '2025-02-09 09:10 AM',
      endTime: '2025-02-10 10:10 AM',
      status: 'Completed',
      deliveryDate: '19-02-2025',
      deliveryLocation: 'Fort - MUMBAI',
      deliveryMode: 'COURIER',
      mainImage: award6,
      enquiryOrigin: 'Referral',
      budget: '₹90,000',
      preferedMaterial: 'Teak Wood',
      briefing: 'Traditional shields with carving.',
      paymentTerms: '50% advance & Bal before dispatch & delivery',
      maxImages: 1,
      remarks: 'Special product',
      deliveryAddress: {
        street: 'ITC Central, Parel',
        city: 'Mumbai',
        state: 'MH',
        postalCode: '400012',
      },
      billingAddress: {
        street: '1st Floor, Cleonett House, Andheri East',
        city: 'Mumbai',
        state: 'MH',
        postalCode: '400059',
      },

      time: '2025-02-18 02:00 PM',
      phoneNumber: '99887 76543',
      pricePerPiece: '₹3,000',
      deliveryType: 'Secure Courier',
      billingAddress: 'Heritage Club, Fort, Mumbai, MH 400001',
      packingType: 'Cardboard & Bubble Wrap',
      innerPackingType: 'Foam Corner Pads',
      premiumPackingOptions: 'Wooden Crate',
      packingInstructions: 'Keep away from moisture.',
      packingMode: 'Batch Pack',
      deliveryAddress: 'Heritage Club, Fort, Mumbai, MH 400001',
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
      product.jobNo.includes(searchTerm),
  )

  const getDeliveryModeClass = (mode) => {
    switch (mode) {
      case 'PRINTING':
        return 'status-printing'
      case 'Completed':
        return 'status-green'
      case 'Process':
        return 'status-process'
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

  const getProductImages = (productId) => {
    return productImages[productId] || []
  }

  const getUploadedCount = (productId) => {
    const images = getProductImages(productId)
    const product = products.find((p) => p.id === productId)
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
    setAcceptedProducts((prev) => {
      const newAccepted = new Set(prev)
      newAccepted.add(productId)
      return newAccepted
    })
    setShowUploadForProducts((prev) => {
      const newShowUpload = new Set(prev)
      newShowUpload.add(productId)
      return newShowUpload
    })
  }

  // New function to handle edit button click
  const handleEditClick = (productId) => {
    setProcessedProducts((prev) => {
      const newProcessed = new Set(prev)
      newProcessed.add(productId)
      return newProcessed
    })
    // navigate('/salesorder')
  }

  // New function to handle "To Process" button click
  const handleToProcessClick = (productId) => {
    alert(`Product ${productId} is now being processed!`)
    // You can add additional logic here for processing
  }

  const confirmUpload = () => {
    if (selectedFile && uploadModalProduct) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setProductImages((prev) => ({
          ...prev,
          [uploadModalProduct.id]: [...(prev[uploadModalProduct.id] || []), e.target.result],
        }))

        setShowUploadForProducts((prev) => {
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
            transition:
              border-color 0.2s ease,
              background-color 0.2s ease;
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
            color: #6b7280;
            font-size: 0.875rem;
            margin: 0.5rem 0;
            line-height: 1.4;
          }

          .upload-text-secondary {
            color: #9ca3af;
            font-size: 0.75rem;
            margin: 0;
          }

          .upload-preview-container {
            margin-top: 1rem;
            border: 1px solid #e5e7eb;
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
            background-color: #ef4444;
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
            border: 1px solid #e5e7eb;
          }

          .upload-file-info h4 {
            font-size: 0.875rem;
            font-weight: 500;
            color: #111827;
            margin: 0 0 0.25rem 0;
          }

          .upload-file-info p {
            font-size: 0.75rem;
            color: #6b7280;
            margin: 0;
          }

          .upload-actions {
            display: flex;
            gap: 0.75rem;
            justify-content: flex-end;
          }

          .upload-btn-cancel {
            padding: 0.75rem 1.5rem;
            background-color: #6b7280;
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
            <h3 className="upload-modal-title">File Upload</h3>

            {/* <div className="upload-progress">
              <div className="upload-progress-text">
                Upload Progress: {uploadedCount}/{maxImages}
              </div>
            </div> */}

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

                  <p className="upload-text-primary">Click to browse files or drag and drop</p>

                  {/* <p className="upload-text-secondary">
                    Maximum 1 image allowed • Supported formats: JPG, PNG, GIF
                  </p> */}
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
                      <img src={previewUrl} alt="Preview" className="upload-preview-image" />
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
    const allImages = [
      ...(product.mainImage ? [product.mainImage] : []),
      ...getProductImages(product.id),
    ]
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

                  {/* {allImages.length > 1 && (
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
                  )} */}

                  {/* {allImages.length > 1 && (
                    <div className="image-counter">
                      {currentIndex + 1} / {allImages.length}
                    </div>
                  )} */}
                </div>

                {/* {uploadedCount < maxImages && (
                  <div className="upload-progress-indicator">
                    Uploaded: {uploadedCount}/{maxImages}
                  </div>
                )} */}
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
                    <span className="modal-label">Time:</span>
                    <span className="modal-value">{product.time}</span>
                  </div>
                  <div className="modal-detail-item">
                    <span className="modal-label">Price per Piece:</span>
                    <span className="modal-value">{product.pricePerPiece}</span>
                  </div>
                  <div className="modal-detail-item">
                    <span className="modal-label">Status:</span>
                    <span className={`modal-badge ${getDeliveryModeClass(product.status)}`}>
                      {product.status}
                    </span>
                  </div>
                  {/* <div className="modal-detail-item">
                      <span className="modal-label">Assigned To:</span>
                      <span className="modal-value">{assignedPerson || 'Ronald'}</span>
                    </div> */}
                </div>
              </div>
            </div>

            {/* Row 2: Assignment Details - Full Width */}
            {/* {(['14888', '14889'].includes(product.jobNo) || currentModalImage) && (
              <div className="modal-full-width-row">
                <div className="modal-section">
                  <h3 className="modal-section-title">Assignment Details</h3>
                  <table className="modal-table">
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                        {['14890', '14892'].includes(product.jobNo) && <th>Client Status</th>}
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
                              border: '1px solid #e5e7eb',
                            }}
                          />
                        </td>
                        <td>{product.startTime || '-'}</td>
                        <td>{product.endTime || '-'}</td>
                        {['14890', '14892'].includes(product.jobNo) && (
                          <td>
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                              {['14892'].includes(product.jobNo) && (
                                <span className={`modal-badge ${getDeliveryModeClass('Reject')}`}>
                                  Reject
                                </span>
                              )}
                              {['14890'].includes(product.jobNo) && (
                                <span className={`modal-badge ${getDeliveryModeClass('Approve')}`}>
                                  Approve
                                </span>
                              )}
                            </div>
                          </td>
                        )}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )} */}

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
                <div className="modal-detail-item">
                  <span className="modal-label">Delivery Type:</span>
                  <span className="modal-value">{product.deliveryType}</span>
                </div>
              </div>
            </div>

            {/* Row 4: Billing Address & Delivery Address */}
            <div className="modal-two-column-row">
              <div className="modal-section">
                <h3 className="modal-section-title">Billing Address</h3>
                <div className="modal-detail-item">
                  <span className="modal-label">Street:</span>
                  <span className="modal-value">{product.billingAddress?.street || '1st Floor, Cleonett House, Andheri East'}</span>
                </div>
                <div className="modal-detail-item">
                  <span className="modal-label">City:</span>
                  <span className="modal-value">{product.billingAddress?.city || 'Mumbai'}</span>
                </div>
                <div className="modal-detail-item">
                  <span className="modal-label">State:</span>
                  <span className="modal-value">{product.billingAddress?.state || 'MH'}</span>
                </div>
                <div className="modal-detail-item">
                  <span className="modal-label">Postal Code:</span>
                  <span className="modal-value">{product.billingAddress?.postalCode || '400059'}</span>
                </div>
              </div>

              <div className="modal-section">
                <h3 className="modal-section-title">Delivery Address</h3>
                <div className="modal-detail-item">
                  <span className="modal-label">Street:</span>
                  <span className="modal-value">
                    {product.deliveryAddress?.street || '1st Floor, Cleonett House, Andheri East'}
                  </span>
                </div>
                <div className="modal-detail-item">
                  <span className="modal-label">City:</span>
                  <span className="modal-value">{product.deliveryAddress?.city || 'Mumbai'}</span>
                </div>
                <div className="modal-detail-item">
                  <span className="modal-label">State:</span>
                  <span className="modal-value">{product.deliveryAddress?.state || 'MH'}</span>
                </div>
                <div className="modal-detail-item">
                  <span className="modal-label">Postal Code:</span>
                  <span className="modal-value">
                    {product.deliveryAddress?.postalCode || '400059'}
                  </span>
                </div>
              </div>
            </div>

            {/* Row 5: Packing Information */}
            <div className="modal-two-column-row">
              <div className="modal-section">
                <h3 className="modal-section-title">Packing Details</h3>
                <div className="modal-detail-item">
                  <span className="modal-label">Packing Type:</span>
                  <span className="modal-value">{product.packingType}</span>
                </div>
                <div className="modal-detail-item">
                  <span className="modal-label">Inner Packing:</span>
                  <span className="modal-value">{product.innerPackingType}</span>
                </div>
                <div className="modal-detail-item">
                  <span className="modal-label">Premium Options:</span>
                  <span className="modal-value">{product.premiumPackingOptions}</span>
                </div>
                <div className="modal-detail-item">
                  <span className="modal-label">Packing Mode:</span>
                  <span className="modal-value">{product.packingMode}</span>
                </div>
              </div>

              <div className="modal-section">
                <h3 className="modal-section-title">Packing Instructions</h3>
                <div className="modal-detail-item">
                  <span className="modal-value">{product.packingInstructions}</span>
                </div>
              </div>
            </div>

            {/* Row 6: Delivery Information & Product Specifications */}
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
    const allImages = [
      ...(product.mainImage ? [product.mainImage] : []),
      ...getProductImages(product.id),
    ]
    const showSlideControls = allImages.length > 1
    const isProcessed = processedProducts.has(product.id) // Check if product is processed

    const handleAccept = () => {
      handleAcceptProduct(product.id)
    }

    const handleSubmit = () => {
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
            max-height: 260px !important;
            transform: none;
          }

          .image-container {
            width: ${isMobile || isTablet ? '100%' : '180px'};
            height: ${isMobile || isTablet ? '200px' : 'initial'};
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
            align-items: center;
            max-height: 245px !important;
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
            margin: 3px 0;
            transition:
              background-color 0.2s ease,
              color 0.2s ease;
            flex-shrink: 0;
          }

          .action-icon:hover {
            background-color: #0061ed;
            color: white;
          }

          .edit-btn {
            width: auto;
            background: #5b5757;
            padding: 4px 10px;
            font-size: 14px;
            border: none;
            border-radius: 4px;
            color: #fff;
            cursor: pointer;
          }

          .edit-btn:hover {
            background: rgb(64, 62, 62);
          }

          .process-btn {
            width: auto;
            background: #5b5757;
            padding: 4px 10px;
            font-size: 14px;
            border: none;
            border-radius: 4px;
            color: #fff;
            cursor: pointer;
          }

          .edit-btn:hover {
            background: rgb(64, 62, 62);
          }

          .process-btn {
            width: auto;
            background: #0061ed;
            padding: 4px 10px;
            font-size: 14px;
            border: none;
            border-radius: 4px;
            color: #fff;
            cursor: pointer;
          }

          .process-btn:hover {
            background: rgb(9, 95, 214);
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
              {/* {showSlideControls && (
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
              )} */}

              <img src={currentImage} alt={product.name} className="product-image" />

              {/* {showSlideControls && (
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
              )} */}
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
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                  </svg>
                </div>
                {/* {['14889'].includes(product.jobNo) && (
                  <button
                    className={`process-btn ${getDeliveryModeClass('Process')}`}
                    onClick={() => handleToProcessClick(product.id)}
                  >
                    To Process
                  </button>
                )} */}

                {/* Show Edit button if not processed, otherwise show To Process button */}
                {/* {!isProcessed ? (
                  <button className="edit-btn" onClick={() => handleEditClick(product.id)}>
                    Edit
                  </button>
                ) : (
                  !['14889', '14890', '14892'].includes(product.jobNo) && (
                    <button
                      className={`process-btn ${getDeliveryModeClass('Process')}`}
                      onClick={() => handleToProcessClick(product.id)}
                    >
                      To Process
                    </button>
                  )
                )} */}

                {/* Show upload icon when showUploadIcons is true */}
                {!['14892', '14890', '14889'].includes(product.jobNo) && (
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
          border-color: #f97316;
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

        .status-process {
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
          background-color: #3d983d;
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
      `}</style>

      <div className="main-container">
        <div className="inner-container">
          <div className="header-title">
            <h1 className="main-title">Sample Orders List</h1>
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
                <button onClick={() => setSearchTerm('')} className="clear-search-btn">
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
