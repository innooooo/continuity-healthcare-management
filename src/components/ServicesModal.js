const ServicesModal = (props) => {

  return (
    <div 
        style={modalOverlayStyle}
        onClick={() => props.setSelectedService(null)}
        >
        <div 
            style={modalContentStyle}
            onClick={(e) => e.stopPropagation()}
        >
            <div style={modalFlexStyle}>
            <div style={imageContainerStyle}>
                <img
                src={props.icon}
                alt={props.title}
                style={modalImageStyle}
                />
            </div>
            <div style={modalTextStyle}>
                <h3 style={modalTitleStyle}>
                {props.title}
                </h3>
                <text style={{color:"#38b2ac"}}>{props.type}</text>
                <p style={modalDescriptionStyle}>
                {props.description}
                </p>
            </div>
            </div>
        </div>
      </div>
  )
}

export default ServicesModal

const modalOverlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backdropFilter: 'blur(4px)',
  zIndex: 50,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  maxHeight: "fit-content",
};

const modalContentStyle = {
  backgroundColor: '#2c5282',
  backdropFilter: 'blur(12px)',
  borderRadius: '1.5rem',
  padding: '2rem',
  maxWidth: '800px',
  width: '100%',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  animation: 'fadeIn 0.3s ease-out',
  maxHeight: '90vh',      // Limits height
  margin: 'auto'          // Centers when overlay scrolls
};

const modalFlexStyle = {
  display: 'flex',
  flexDirection: 'column',  // Stack vertically on mobile
  gap: '2rem',
  '@media (min-width: 768px)': {
    flexDirection: 'row'    // Side by side on desktop
  }
};

const imageContainerStyle = {
  flexShrink: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '12px',       // rounded corners
  padding: '12px',            // breathing room around the icon
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)' // subtle depth
};

const modalImageStyle = {
  width: '64px',
  height: '64px',
  objectFit: 'contain',
  filter: 'brightness(0) invert(1)', // makes it appear white
};



const modalTextStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem'
};

const modalTitleStyle = {
  fontWeight: 'bold',
  color: 'white',
  margin: 0
};

const modalDescriptionStyle = {
  color: '#cbd5e1',
  lineHeight: 1.6,
  fontSize: '1.125rem',
  margin: 0
};

const closeButtonStyle = {
  marginTop: '1.5rem',
  padding: '0.75rem 1.5rem',
  background: 'linear-gradient(to right, #8b5cf6, #ec4899)',
  color: 'white',
  border: 'none',
  borderRadius: '0.75rem',
  fontWeight: '500',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  alignSelf: 'flex-start'
};