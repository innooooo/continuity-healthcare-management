import services from '../data/services'
import ServicesModal from '../components/ServicesModal'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { LucideSection } from 'lucide-react';


const Services = () => {
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

  const [selectedService, setSelectedService] = useState(null)

  return (
    <div>
      <section style={{
        backgroundImage: "url('/images/services-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "50vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white", // ensures text stands out
        textAlign: "center",
        padding: "0 20px",
        position: "relative"
        }}>
        
        {/* Shadow overlay */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust opacity for shadow intensity
          zIndex: 1
        }}></div>
        
        {/* Content with higher z-index to appear above shadow */}
        <div style={{ 
          position: "relative", 
          zIndex: 2 
        }}>
          <h3 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
            Transforming Efficiency and Care through Innovative Solutions
          </h3>
          <h2 style={{fontWeight:"lighter"}}>Our Services</h2>
        </div>

      </section>

      <section 
        style={{
        display: isMobile ? "block" : "flex",
        padding: isMobile ? "20px 20px" : "10px 15px",
        gap: isMobile ? "30px" : "20px",
        flexWrap: "wrap",
        justifyContent: "center",
        backgroundColor: "#f7f9fc"
        }}>
          {
            services.map(service => (
              <div
                key={service.id}
                style={{
                  width: isMobile ? "90%" : isTablet ? "calc(50% - 10px)" : "calc(20% - 16px)",
                  minWidth: isMobile ? "auto" : "170px",
                  marginBottom: isMobile ? "20px" : "15px",
                  padding: "10px",
                  backgroundColor: "white",
                  borderRadius: "12px",
                  boxShadow: selectedService?.id === service.id 
                    ? "0 8px 20px rgba(0,0,0,0.25)" 
                    : "0 4px 12px rgba(0,0,0,0.1)",
                  transform: selectedService?.id === service.id 
                    ? "translateY(-5px) scale(1.03)" 
                    : "none",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  textAlign: "center",
                  cursor: "pointer"
                }}
                onClick={() => setSelectedService(service)}
                onMouseEnter={() => setSelectedService(service)} // hover start
                onMouseLeave={() => setSelectedService(null)}   // hover end
              >
                <img src={service.icon} alt={service.title} width={50} />
                <h4>{service.title}</h4>

                {selectedService?.id === service.id && (
                  <ServicesModal
                    id={selectedService.id}
                    title={selectedService.title}
                    type={selectedService.type}
                    icon={selectedService.icon}
                    description={selectedService.description}
                    setSelectedService={setSelectedService}
                  />
                )}

              </div>
            ))
          }
      </section>
      
      <section style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: "30px"
      }}>
        <button 
          style={{
            height: isMobile ? "45px" : "50px",
            width: "fit-content",
            padding: isMobile ? "0 20px" : "0 30px",
            fontSize: isMobile ? "16px" : "20px",
            fontWeight: "bolder",
            backgroundColor: "#9CAF88",
            color: "#001F3F",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "all 0.3s ease",
            boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
            minWidth: isMobile ? "140px" : "160px"
          }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = "#7d946b"}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = "#9CAF88"}
          onClick={() => navigateTo("/contact-us")}
        >
          Reach Out for Enquiry
        </button>

      </section>

    </div>
  )
}

export default Services
