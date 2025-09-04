import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const HomePage = () => {
  const navigateTo = useNavigate();
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  // Handle window resize for responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Responsive breakpoints
  const isMobile = screenSize.width <= 768;
  const isTablet = screenSize.width > 768 && screenSize.width <= 1024;
  const isSmallMobile = screenSize.width <= 480;

  // Dynamic styles object
  const styles = {
    // Hero Section Styles
    heroSection: {
      backgroundImage: "url('/images/hero-bg2.webp')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: isMobile ? "scroll" : "fixed", // Fixed attachment can cause issues on mobile
      height: isMobile ? "70vh" : "80vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      textAlign: "center",
      padding: isMobile ? "0 15px" : "0 20px",
      position: "relative",
    },

    heroOverlay: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.4)", // Dark overlay for better text readability
      zIndex: 1,
    },

    heroContent: {
      position: "relative",
      zIndex: 2,
      maxWidth: "1200px",
    },

    heroTitle: {
      fontSize: isSmallMobile ? "1.8rem" : isMobile ? "2.2rem" : isTablet ? "2.8rem" : "3.2rem",
      fontWeight: "bold",
      marginBottom: "1rem",
      lineHeight: "1.2",
      textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
    },

    heroSubtitle: {
      fontSize: isSmallMobile ? "1.1rem" : isMobile ? "1.3rem" : "1.5rem",
      fontWeight: "bolder",
      marginBottom: "2rem",
      textShadow: "1px 1px 2px rgba(0,0,0,0.7)",
    },

    heroButton: {
      height: isMobile ? "45px" : "50px",
      width: "fit-content",
      padding: isMobile ? "0 20px" : "0 30px",
      margin: "20px",
      fontSize: isMobile ? "16px" : "20px",
      fontWeight: "bolder",
      backgroundColor: "#9CAF88",
      color: "#001F3F",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      transition: "all 0.3s ease",
      boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
      minWidth: isMobile ? "140px" : "160px",
    },

    // Who We Serve Section Styles
    whoWeServeSection: {
      padding: isMobile ? "20px 15px" : "40px 20px",
      minHeight: isMobile ? "auto" : "70vh",
      backgroundColor: "#f7f9fc",
    },

    sectionTitle: {
      fontSize: isSmallMobile ? "1.8rem" : isMobile ? "2rem" : "2.5rem",
      marginBottom: "1rem",
      color: "#2c5282",
      textAlign: isMobile ? "center" : "left",
    },

    sectionSubtitle: {
      fontSize: isMobile ? "1rem" : "1.1rem",
      lineHeight: "1.6",
      marginBottom: "2rem",
      color: "#333",
      maxWidth: "800px",
      display: "block",
    },

    servicesGrid: {
      display: isMobile ? "block" : "flex",
      margin: isMobile ? "20px 0" : "10px 0",
      gap: isMobile ? "30px" : "20px",
      flexWrap: "wrap",
      justifyContent: "center",
    },

    serviceCard: {
      width: isMobile ? "90%" : isTablet ? "calc(50% - 10px)" : "calc(20% - 16px)",
      minWidth: isMobile ? "auto" : "170px",
      marginBottom: isMobile ? "20px" : "15px",
      padding: "10px",
      backgroundColor: "white",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      textAlign: "center",
    },

    serviceIcon: {
      width: isMobile ? "40px" : "50px",
      height: "auto",
      marginBottom: "15px",
    },

    serviceTitle: {
      fontSize: isMobile ? "1.1rem" : "1.2rem",
      fontWeight: "bold",
      marginBottom: "10px",
      color: "#001F3F",
      lineHeight: "1.3",
    },

    serviceDescription: {
      fontSize: isMobile ? "0.9rem" : "1rem",
      lineHeight: "1.5",
      color: "#666",
    },

    // Leadership Section Styles
    leadershipSection: {
      padding: isMobile ? "30px 15px" : "40px 20px",
      backgroundColor: "#f7f9fc",
    },

    leadershipGrid: {
      margin: isMobile ? "30px 0" : "40px 0",
    },

    leaderCard: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      margin: isMobile ? "25px 0" : "40px 0",
      lineHeight: "1.6",
      justifyContent: isMobile ? "center" : "space-around",
      alignItems: "center",
      textAlign: isMobile ? "center" : "left",
      gap: isMobile ? "20px" : "30px",
    },

    leaderImage: {
      borderRadius: "30px",
      width: isMobile ? "200px" : "250px",
      height: isMobile ? "200px" : "250px",
      objectFit: "cover",
      flexShrink: 0,
    },

    leaderContent: {
      flex: 1,
      maxWidth: isMobile ? "100%" : "600px",
    },

    leaderName: {
      fontSize: isMobile ? "1.3rem" : "1.5rem",
      fontWeight: "bold",
      marginBottom: "10px",
      color: "#9CAF88",
    },

    leaderBio: {
      fontSize: isMobile ? "1rem" : "1.1rem",
      lineHeight: "1.6",
    },

    divider: {
      border: "none",
      borderTop: "1px solid #666",
      margin: isMobile ? "30px 0" : "40px 0",
    },

    teamButton: {
      color: #f7f9fc",
      backgroundColor: "#2c5282",
      width: "fit-content",
      height: isMobile ? "45px" : "50px",
      padding: isMobile ? "0 20px" : "0 30px",
      margin: "20px auto",
      fontSize: isMobile ? "16px" : "20px",
      fontWeight: "bold",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      transition: "all 0.3s ease",
      display: "block",
    },

    buttonContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "30px",
    },
  };

  // Hover effect handlers
  const handleButtonHover = (e, isEntering, buttonType) => {
    if (isEntering) {
      if (buttonType === 'hero') {
        e.target.style.backgroundColor = "#7a8f6b";
        e.target.style.transform = "translateY(-2px)";
        e.target.style.boxShadow = "0 6px 12px rgba(0,0,0,0.4)";
      } else {
        e.target.style.backgroundColor = "#e2e8f0";
        e.target.style.transform = "translateY(-2px)";
      }
    } else {
      if (buttonType === 'hero') {
        e.target.style.backgroundColor = "#9CAF88";
        e.target.style.transform = "translateY(0)";
        e.target.style.boxShadow = "0 4px 8px rgba(0,0,0,0.3)";
      } else {
        e.target.style.backgroundColor = "#f7f9fc";
        e.target.style.transform = "translateY(0)";
      }
    }
  };

  const handleCardHover = (e, isEntering) => {
    if (!isMobile && isEntering) {
      e.currentTarget.style.transform = "translateY(-5px)";
      e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
    } else if (!isMobile && !isEntering) {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
    }
  };

  const services = [
    {
      icon: '/icons/hospital.svg',
      title: 'Hospitals & Healthcare Systems',
      description: 'Streamlining complex billing and credentialing for large-scale operations'
    },
    {
      icon: '/icons/cross.svg',
      title: 'Clinics & Physician Groups',
      description: 'Optimizing revenue capture for outpatient and specialized practices'
    },
    {
      icon: '/icons/pill-bottle.svg',
      title: 'Pharmaceutical Companies',
      description: 'Navigating intricate drug reimbursement and patient access programs'
    },
    {
      icon: '/icons/test-tubes.svg',
      title: 'Laboratories',
      description: 'Ensuring accurate billing for diagnostic services and testing'
    },
    {
      icon: '/icons/house.svg',
      title: 'Home Health Providers',
      description: 'Managing RCM challenges specific to in-home care services'
    }
  ];

  const leaders = [
    {
      image: '/shareholders/qiana.webp',
      name: 'Qiana Mayberry - Co-Founder & Principal Consultant',
      bio: 'Qiana Mayberry, MSHA, OCHW, is a healthcare operations strategist, provider network expert, and consultant specializing in revenue cycle management and project management'
    },
    {
      image: '/shareholders/talita.webp',
      name: 'Talita - Co-Founder & Principal Consultant',
      bio: 'Talita is a creative leader and co-founder of Continuity Healthcare Management, LLC, who has worked in the healthcare field for over 15 years'
    },
    {
      image: '/shareholders/dana.webp',
      name: 'Dana D. Floyd - Co-Founder & Principal Consultant',
      bio: 'Dana is a principal consultant and co-founder of Continuity Healthcare Management, LLC, with more than 15 years of expertise in RCM, healthcare operations and project execution'
    },
    {
      image: '/shareholders/jr.webp',
      name: 'JR - Co-Founder & Arbitrator',
      bio: 'With over two decades of experience in logistics, operations and dispute resolution, JR brings a solution-focused approach to healthcare, RCM and consulting business operations'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroOverlay}></div>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Revenue Reimagined: Optimize Your Healthcare Finances</h1>
          <span style={styles.heroSubtitle}>Maximizing Your Revenue, Minimizing Your Burden</span>
          <button 
            onClick={() => navigateTo("/our-services")} 
            style={styles.heroButton}
            onMouseEnter={(e) => handleButtonHover(e, true, 'hero')}
            onMouseLeave={(e) => handleButtonHover(e, false, 'hero')}
          >
            LEARN MORE
          </button>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section style={styles.whoWeServeSection}>
        <h1 style={styles.sectionTitle}>Who We Serve</h1>
        <span style={styles.sectionSubtitle}>
          Our expertise spans the entire healthcare ecosystem, providing tailored Revenue Cycle Management (RCM) 
          solutions designed to meet the unique needs of diverse providers.
        </span>
        
        <div style={styles.servicesGrid}>
          {services.map((service, index) => (
            <div 
              key={index}
              style={styles.serviceCard}
              onMouseEnter={(e) => handleCardHover(e, true)}
              onMouseLeave={(e) => handleCardHover(e, false)}
            >
              <img 
                style={styles.serviceIcon}
                src={service.icon} 
                alt={service.title}
              />
              <h3 style={styles.serviceTitle}>{service.title}</h3>
              <span style={styles.serviceDescription}>{service.description}</span>
            </div>
          ))}
        </div>
      </section>
      
      {/* Leadership Section */}
      <section style={styles.leadershipSection}>
        <h1 style={styles.sectionTitle}>Meet the Visionaries Behind Our Success</h1>
        <span style={styles.sectionSubtitle}>
          Our leadership team brings together decades of expertise in healthcare finance, technology, and operations, 
          united by a shared commitment to transforming your revenue cycle.
        </span>
        
        <div style={styles.leadershipGrid}>
          {leaders.map((leader, index) => (
            <div key={index}>
              <div style={styles.leaderCard}>
                <img 
                  style={styles.leaderImage}
                  src={leader.image} 
                  alt={leader.name}
                />
                <div style={styles.leaderContent}>
                  <h3 style={styles.leaderName}>{leader.name}</h3>
                  <span style={styles.leaderBio}>{leader.bio}</span>
                </div>
              </div>
              {index < leaders.length - 1 && <hr style={styles.divider} />}
            </div>
          ))}
        </div>
        
        <div style={styles.buttonContainer}>
          <button 
            onClick={() => navigateTo("/about-us")} 
            style={styles.teamButton}
            onMouseEnter={(e) => handleButtonHover(e, true, 'team')}
            onMouseLeave={(e) => handleButtonHover(e, false, 'team')}
          >
            MEET OUR TEAM
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;