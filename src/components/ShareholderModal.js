import { useState } from 'react';

const ShareholderModal = () => {

    const [selectedShareholder, setSelectedShareholder] = useState(null);
    

    const [shareholders ,setShareholders]= useState([
        {
            id: 1,
            image: '/shareholders/qiana.jpg',
            name: "Qiana",
            title: "Co-Founder & Principal Consultant",
            bio: "Qiana Mayberry, MSHA, CCHW, is a healthcare operations strategist, provider network expert, and consultant specializing in revenue cycle management and project management.Qiana Mayberry, a healthcare operations strategist and project management consultant, focuses on revenue cycle management (RCM), project management, and healthcare network operations. With over ten years of experience, she delivers high-impact solutions that enhance provider engagement, streamline operational workflows, and ensure the healthcare system adheres to regulations and maintains a sound financial position. Qiana's consulting skills include managing contracts, credentialing and compliance, enrolling providers for Medicare, Medicaid, and commercial plans, resolving claims, and implementing strategic policies. She is also qualified in Independent Dispute Resolution(IDR) under the No Surprises Act. Qiana has worked with major health plans, including AmeriHealth Caritas, AZ Complete Health, NuPhase Health Services, and Connections Health Solutions. She has a Master of Science in Health Administration, a Post-Master's Certificate in Addiction Counseling, and an Associate of Arts degree in Health and Human Services. With her unrivaled industry knowledge, solutions-oriented approach, and proven track record of accomplishment, Qiana is committed to supporting healthcare institutions that operate efficiently, comply with regulations, and deliver high-quality care to their patients."
        },
        {
            id: 2,
            image: '/shareholders/talita.jpeg',
            name: "Talita",
            title: "Co-Founder & Principal Consultant",
            bio: "For over 15 years, Talita has worked in the healthcare field.She is a creative leader and co-founder of Continuity Healthcare Management, LLC, a Revenue Cycle Management company that helps healthcare providers with project management and consulting. She has a unnique and well-rounded approach to RCM consulting, having worked as an orthodontic and oral surgery technician and gained experience in healthcare operations, billing compliance, and project execution. Talita has been responsible for programs that streamline the revenue cycle from start to finish. These initiatives focus on improving claims, addressing denials, and communicating with payers. She excels at assisting providers in complex fields such as air ambulance, pathology, and anaesthesia in resolving payment issues and optimizing their operations. She is a knowledgable project leader who cares about her customers' success, so they can rely on her to help them improve their revenue management."
        },
        {
            id: 3,
            image: '/shareholders/dana.jpeg',
            name: "Dana",
            title: "Co-Founder & Principal Consultant",
            bio: "Dana D. Floyd is a principal consultant and co-founder of Continuity Healthcare Management, LLC. Dana has more than 15 years of expertise in Revenue Cycle Management (RCM), healthcare operations, and project execution. She helps healthcare businesses improve their billing systems, handle claims and denials, expedite credentialing, and ensure compliance with regulations. She has successfully led high-impact projects at Novitas Solutions, Greenlight Cost Management, NuPhase Health Services, and Connections Health Solutions. These projects included ensuring that Medicare rules were followed, Handling appeals, submitting IDR claims under the No Surprises Act, and onboarding new providers. Dana is known for her data-driven approach and ability to lead teams from other fields. She designs workflows that can scale, leads teams from diverse fields, and utilizes statistics to enhance clinical and financial outcomes. She is skilled in using key platforms such as FISS, PECOS, CAQH, Salesforce, Oracle Higlas, and various EHR systems. Dana has a Master's degree in Christian Counseling and is certified in medical terminology and coding. She is also a licensed notary in Arizona and has training in several types of therapy. Dana helps firms enhance collections, mitigate risk, and thrive in a complex healthcare environment by being honest, precise, and possessing a solid understanding of how things work."
        },
        {
            id: 4,
            image: '/shareholders/jr.png',
            name: "James Jackson Jr",
            title: "Co-Founder & Arbitrator",
            bio: "With over two decades of experience in logistics, operations, and dispute resolution, JR brings a solution-focused approach to healthcare, Revenue Cycle Management (RCM), and consulting business operations. As a certified arbitrator and co-founder of our RCM consulting firm, JR specializes in guiding specialty healthcare providers through complex claims disputes, appeals, and operational challenges that affect cash flow and compliance. His career spans leadership in multimillion-dollar logistics operations, regulatory compliance, and project management across the healthcare and transportation industries. He has successfully led cross-functional teams, streamlined backend workflows, and advised C-suite clients on how to reduce denials, resolve payer disputes, and implement process improvements for long-term sustainability. By combining his background in arbitration and business operations, I he offers a unique, fair, and strategic lens to revenue cycle and provider-payer conflict resolution."
        }
        ])

    return (
    
        <div style={containerStyle}>
          <h1 style={titleStyle}>Meet the Company Shareholders</h1>
          <p style={subtitleStyle}>Click on a shareholder to discover more about them</p>
          
          <div style={gridStyle}>
              {shareholders.map(shareholder => (
              <div 
                  key={shareholder.id} 
                  style={cardStyle}
                  onClick={() => setSelectedShareholder(shareholder)}
              >
                  <img 
                  src={shareholder.image} 
                  alt={shareholder.name}
                  style={thumbnailStyle}
                  />
                  <h3 style={nameStyle}>{shareholder.name}</h3>
                  <hr/>
                  <h2 style={nameStyle}>{shareholder.title}</h2>
              </div>
              ))}
          </div>

          {selectedShareholder && (
              <div 
              style={modalOverlayStyle}
              onClick={() => setSelectedShareholder(null)}
              >
              <div 
                  style={modalContentStyle}
                  onClick={(e) => e.stopPropagation()}
              >
                  <div style={modalFlexStyle}>
                  <div style={imageContainerStyle}>
                      <img
                      src={selectedShareholder.image}
                      alt={selectedShareholder.name}
                      style={modalImageStyle}
                      />
                  </div>
                  <div style={modalTextStyle}>
                      <h2 style={modalTitleStyle}>
                      {selectedShareholder.name}
                      </h2>
                      <p style={modalDescriptionStyle}>
                      {selectedShareholder.bio}
                      </p>
                      <button
                      onClick={() => setSelectedShareholder(null)}
                      style={closeButtonStyle}
                      >
                      Close
                      </button>
                  </div>
                  </div>
              </div>
              </div>
          )}
        </div>
    
    )
}

export default ShareholderModal


// Inline CSS Styles
const containerStyle = {
  minHeight: 'fit-content',
  padding: '3rem',
  backgroundColor: '#0f172a',
  color: 'white',
  position: 'relative',
  overflow: 'hidden'
};

const titleStyle = {
  fontSize: '2.5rem',
  fontWeight: '700',
  textAlign: 'center',
  marginBottom: '0.5rem',
  background: 'linear-gradient(90deg, #a78bfa, #ec4899)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent'
};

const subtitleStyle = {
  textAlign: 'center',
  color: '#94a3b8',
  marginBottom: '3rem'
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
  gap: '1.5rem',
  maxWidth: '1200px',
  margin: '0 auto'
};

const cardStyle = {
  backgroundColor: 'rgba(30, 41, 59, 0.5)',
  borderRadius: '1rem',
  padding: '1.5rem',
  textAlign: 'center',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
};

const thumbnailStyle = {
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  objectFit: 'cover',
  margin: '0 auto 1rem',
  border: '3px solid rgba(167, 139, 250, 0.3)'
};

const nameStyle = {
  fontSize: '1.25rem',
  fontWeight: '600',
  margin: '0'
};

const modalOverlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  backdropFilter: 'blur(4px)',
  zIndex: 50,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1rem',
  overflowY: 'auto'  // Makes the entire overlay scrollable
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
  overflowY: 'auto',      // Makes content scrollable
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
  justifyContent: 'center'
};

const modalImageStyle = {
  width: '128px',
  height: '128px',
  borderRadius: '1rem',
  objectFit: 'cover',
  border: '4px solid rgba(147, 51, 234, 0.3)'
};

const modalTextStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem'
};

const modalTitleStyle = {
  fontSize: '1.875rem',
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