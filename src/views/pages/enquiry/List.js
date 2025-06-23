import React, { useState } from 'react'
import award1 from '../../../../public/award1.avif'
import award2 from '../../../../public/awards3.webp'
import award4 from '../../../../public/award4.webp'
import award5 from '../../../../public/award5.jpg'
import award6 from '../../../../public/award6.jpeg'
import { CButton, CCol } from '@coreui/react'
import { useNavigate } from 'react-router-dom'
import CIcon from '@coreui/icons-react'
// import { CInfo } from '@coreui/icons'
import {
  cilSearch,
  cilPencil,
  cilTrash,
  cilInfo,
  cilSortAscending,
  cilSortDescending,
} from '@coreui/icons'

const EnhancedProductCards = () => {
  const [expandedCards, setExpandedCards] = useState(new Set())
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  // Product data with additional fields
  const products = [
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
      product: 'CRYSTAL AWARD',
      quantity: 25,
      size: '8 Inches',
      deliveryDate: '17-04-2025',
      deliveryLocation: 'Bandra Kurla Complex - MUMBAI',
      deliveryMode: 'COURIER',
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
      id: 4,
      name: 'ACRYLIC PLAQUE',
      jobNo: '14891',
      client: 'TECH INNOVATIONS',
      email: 'contact@techinno.com',
      contactNo: '87654 32109',
      product: 'ACRYLIC PLAQUE',
      quantity: 15,
      size: '12 Inches',
      deliveryDate: '19-09-2025',
      deliveryLocation: 'Powai - MUMBAI',
      deliveryMode: 'HAND DELIVERY',
      mainImage: award5,
      enquiryOrigin: 'WhatsApp',
      budget: '₹30,000',
      preferedMaterial: 'Clear Acrylic',
      briefing:
        'Modern acrylic plaques for startup milestone celebration. Minimalist design preferred.',
      paymentTerms: '50% Advance & Balance when Material is Ready',
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
      id: 6,
      name: 'GLASS TROPHY',
      jobNo: '14893',
      client: 'EXCELLENCE AWARDS',
      email: 'awards@excellence.com',
      contactNo: '98123 45678',
      product: 'GLASS TROPHY',
      quantity: 12,
      size: '16 Inches',
      deliveryDate: '11-01-2025',
      deliveryLocation: 'Andheri - MUMBAI',
      deliveryMode: 'EXPRESS DELIVERY',
      mainImage: award2,
      enquiryOrigin: 'LinkedIn',
      budget: '₹85,000',
      preferedMaterial: 'Borosilicate Glass',
      briefing:
        'Premium glass trophies for annual excellence awards ceremony. LED base lighting required.',
      paymentTerms: 'Corporate Credit',
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
      case 'HAND DELIVERY':
        return { backgroundColor: '#059669', color: 'white' }
      case 'COURIER':
        return { backgroundColor: '#2563EB', color: 'white' }
      case 'PICKUP':
        return { backgroundColor: '#EA580C', color: 'white' }
      case 'EXPRESS DELIVERY':
        return { backgroundColor: '#7C3AED', color: 'white' }
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

  const ProductCard = ({ product }) => {
    const isExpanded = expandedCards.has(product.id)

    return (
      <div style={styles.card}>
        {/* Main Image Section */}
        <div style={styles.imageContainer}>
          <img src={product.mainImage} alt={product.name} style={styles.image} />
          {/* <div style={styles.imageOverlay}>
            <div style={styles.dimensionText}>
              384
              <div style={styles.timesText}>×</div>
              288
            </div>
          </div> */}
        </div>

        {/* Content Section */}
        <div style={styles.content}>
          {/* Header */}
          <div style={styles.header1}>
            <h2 style={styles.productName}>
              {product.name}{' '}
              <CButton
                variant="outline"
                size="sm"
                className="me-1"
                // onClick={() => handleAction('info', process)}
                title="View Details"
              >
                <CIcon icon={cilInfo} size="sm" />
              </CButton>
            </h2>
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
              <span style={styles.label}>DELIVERY MODE: </span>
              <span
                style={{
                  ...styles.badge,
                  ...getDeliveryModeClass(product.deliveryMode),
                }}
              >
                {product.deliveryMode}
              </span>
            </div>
          </div>

          {/* Additional Details (Expandable) - Only in View Details */}
          {isExpanded && (
            <div style={styles.expandedSection}>
              <h3 style={styles.expandedTitle}>Additional Details</h3>
              <div style={styles.detailsContainer}>
                <div style={styles.detailRow}>
                  <span style={styles.label}>EMAIL: </span>
                  <a href={`mailto:${product.email}`} style={styles.link}>
                    {product.email}
                  </a>
                </div>
                <div style={styles.detailRow}>
                  <span style={styles.label}>CONTACT NO: </span>
                  <a href={`tel:${product.contactNo}`} style={styles.link}>
                    {product.contactNo}
                  </a>
                </div>
                <div style={styles.detailRow}>
                  <span style={styles.label}>SIZE: </span>
                  <span style={styles.value}>{product.size}</span>
                </div>
                <div style={styles.detailRow}>
                  <span style={styles.label}>ENQUIRY ORIGIN: </span>
                  <span style={styles.value}>{product.enquiryOrigin}</span>
                </div>
                <div style={styles.detailRow}>
                  <span style={styles.label}>BUDGET: </span>
                  <span style={styles.value}>{product.budget}</span>
                </div>
                <div style={styles.detailRow}>
                  <span style={styles.label}>PREFERRED MATERIAL: </span>
                  <span style={styles.value}>{product.preferedMaterial}</span>
                </div>
                <div style={styles.detailRow}>
                  <span style={styles.label}>DELIVERY LOCATION: </span>
                  <span style={styles.value}>{product.deliveryLocation}</span>
                </div>
                <div style={styles.detailRow}>
                  <span style={styles.label}>BRIEFING: </span>
                  <span style={styles.value}>{product.briefing}</span>
                </div>
                <div style={styles.detailRow}>
                  <span style={styles.label}>PAYMENT TERMS: </span>
                  <span style={styles.value}>{product.paymentTerms}</span>
                </div>
              </div>
            </div>
          )}

          {/* View Details Button */}
          {/* <div style={styles.buttonContainer}>
            <button
              onClick={() => toggleCardExpansion(product.id)}
              style={styles.button}
              onMouseEnter={(e) => (e.target.style.backgroundColor = '#0052cc')}
              onMouseLeave={(e) => (e.target.style.backgroundColor = '#0061ed')}
            >
              {isExpanded ? '▲ Hide Details' : '▼ View Details'}
            </button>
          </div> */}
        </div>
      </div>
    )
  }

  const styles = {
    container: {
      minHeight: '100vh',
      // backgroundColor: '#374151',
      padding: '1rem',
    },
    innerContainer: {
      maxWidth: '1400px',
      margin: '0 auto',
    },
    header: {
      marginBottom: '2rem',
      textAlign: 'center',
    },
    header1: {
      marginBottom: '2px',
      // textAlign: 'center',
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: 'black',
      marginBottom: '0.5rem',
    },
    subtitle: {
      color: '#9CA3AF',
      fontSize: '1.125rem',
    },
    searchContainer: {
      marginBottom: '2rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '1rem',
      flexWrap: 'wrap',
    },
    addButton: {
      backgroundColor: '#0061ed',
      color: 'white',
      padding: '0.875rem 2rem',
      fontSize: '1rem',
      fontWeight: '600',
      border: 'none',
      borderRadius: '0.5rem',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
      whiteSpace: 'nowrap',
      flexShrink: 0,
    },
    searchInput: {
      width: '100%',
      maxWidth: '600px',
      padding: '0.875rem 1.25rem',
      fontSize: '1rem',
      border: '2px solid #374151',
      borderRadius: '0.5rem',
      backgroundColor: 'white',
      // color: 'white',
      outline: 'none',
      transition: 'border-color 0.3s ease',
    },
    statsContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '1rem',
      marginBottom: '2rem',
    },
    statCard: {
      backgroundColor: '#111827',
      padding: '1rem',
      borderRadius: '0.5rem',
      border: '1px solid #374151',
      textAlign: 'center',
    },
    statNumber: {
      fontSize: '1.875rem',
      fontWeight: 'bold',
      color: '#F97316',
    },
    statLabel: {
      color: '#9CA3AF',
      fontSize: '0.875rem',
      marginTop: '0.25rem',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
      gap: '1.5rem',
    },
    card: {
      backgroundColor: 'white',
      color: 'white',
      borderRadius: '0.5rem',
      overflow: 'hidden',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      display: 'flex',
      flexDirection: 'row',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    },
    imageContainer: {
      width: '180px',
      height: '250px',
      backgroundColor: '#E5E7EB',
      position: 'relative',
      flexShrink: 0,
      overflow: 'hidden',
      alignSelf: 'flex-start',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    imageOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    dimensionText: {
      color: 'white',
      fontSize: '1.5rem',
      fontWeight: '300',
      textAlign: 'center',
      textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
    },
    timesText: {
      fontSize: '1rem',
    },
    content: {
      padding: '1.25rem',
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
    },
    productName: {
      fontSize: '1.375rem',
      fontWeight: 'bold',
      color: 'black',
      marginBottom: '0.25rem',
    },
    jobNo: {
      fontSize: '0.875rem',
      fontWeight: 'bold',
      color: 'rgb(0, 97, 237)',
      marginBottom: '1rem',
    },
    detailsContainer: {
      marginBottom: '1rem',
    },
    detailRow: {
      marginBottom: '0.625rem',
      fontSize: '0.8rem',
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
      fontSize: '0.75rem',
      fontWeight: '600',
      display: 'inline-block',
    },
    expandedSection: {
      marginTop: '1rem',
      paddingTop: '1rem',
      borderTop: '1px solid #374151',
    },
    expandedTitle: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: '0.875rem',
      marginBottom: '0.75rem',
    },
    buttonContainer: {
      marginTop: 'auto',
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
    noResults: {
      gridColumn: '1 / -1',
      textAlign: 'center',
      color: '#9CA3AF',
      fontSize: '1.125rem',
      padding: '3rem 1rem',
      borderRadius: '0.5rem',
      // border: '1px solid #374151',
    },
    // Media Queries implemented via window.innerWidth checks
  }

  // Add responsive styles based on screen size
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Responsive adjustments
  if (windowWidth <= 768) {
    styles.grid.gridTemplateColumns = '1fr'
    styles.card.flexDirection = 'column'
    styles.imageContainer.width = '100%'
    styles.imageContainer.height = '200px'
    styles.imageContainer.alignSelf = 'stretch'
    styles.title.fontSize = '2rem'
    styles.container.padding = '0.75rem'
    styles.searchInput.padding = '0.75rem 1rem'
  } else if (windowWidth <= 1024) {
    styles.grid.gridTemplateColumns = 'repeat(auto-fit, minmax(400px, 1fr))'
  }

  return (
    <div style={styles.container}>
      <div style={styles.innerContainer}>
        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.title}>Enquiries List</h1>
          {/* <p style={styles.subtitle}>Track and manage your product deliveries</p> */}
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
            onClick={() => navigate('/enquiryform')}
          >
            Add
          </button>
        </div>

        {/* Stats */}
        {/* <div style={styles.statsContainer}>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>{filteredProducts.length}</div>
            <div style={styles.statLabel}>{searchTerm ? 'Search Results' : 'Total Orders'}</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>
              {filteredProducts.filter((p) => p.deliveryMode === 'HAND DELIVERY').length}
            </div>
            <div style={styles.statLabel}>Hand Delivery</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>
              {filteredProducts.filter((p) => p.deliveryMode === 'COURIER').length}
            </div>
            <div style={styles.statLabel}>Courier</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>
              {filteredProducts.filter((p) => p.deliveryMode === 'EXPRESS DELIVERY').length}
            </div>
            <div style={styles.statLabel}>Express</div>
          </div>
        </div> */}

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
    </div>
  )
}

export default EnhancedProductCards
