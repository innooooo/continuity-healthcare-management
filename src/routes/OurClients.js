import { useState, useEffect } from 'react'

const OurClients = () => {
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

  const caseStudies = [
    {
      id: 1,
      client: "Metropolitan Health System",
      metric: "Hospital Supply Chain Transformation",
      before: "Metropolitan Health System's 400-bed facility was drowning in supply chain inefficiencies that were costing $2.3M annually. The procurement team relied on manual spreadsheets to track inventory across 15 departments, leading to critical shortages of surgical supplies during peak periods. Emergency orders placed at 300% markup became routine, while overstocked items worth $500K sat unused in storage rooms. Delivery trucks arrived unpredictably throughout the day, creating bottlenecks that delayed patient care and forced nursing staff to spend 2+ hours daily hunting for basic supplies instead of focusing on patient care.",
      painPoints: [
        "Manual disconnected systems", 
        "Emergency ordering at premium costs", 
        "Staff time diverted from patient care", 
        "Unpredictable delivery schedules"
      ],
      after: "Today, Metropolitan Health operates like a precision instrument. AI-powered inventory tracking provides real-time visibility across all departments, while automated reorder systems ensure critical supplies are always available. Strategic supplier partnerships and optimized delivery routes have eliminated emergency orders and reduced delivery delays by 90%. Inventory turnover improved by 25%, nursing staff reclaimed those lost hours for patient care, and the hospital now saves $2.3M annually—transforming a major cost center into a competitive advantage.",
      improvement: ["-90% delivery delays, +$2.3M saved annually"],
      icon: '/icons/trending-down.svg'
    },
    {
      id: 2,
      client: "Regional Medical Group",
      metric: "Clinic Technology Integration",
      before: "Regional Medical Group's 8 locations operated as disconnected islands, each maintaining separate inventory systems with zero EHR integration. Medical assistants spent 40% of their day manually tracking supplies, creating paper reorder requests, and frantically calling other locations to borrow medications. Critical prescriptions were unavailable 15% of the time, forcing frustrated patients to visit multiple pharmacies or delay essential treatments. Administrative tasks consumed staff energy that should have been devoted to patient care.",
      painPoints: [
        "Siloed operations across locations", 
        "Manual administrative burden", 
        "Patient care delays and dissatisfaction", 
        "Inefficient resource allocation"
      ],
      after: "The transformation is remarkable. A fully integrated EHR-linked inventory system now provides real-time visibility across all 8 locations, with automated reorder protocols ensuring 99.5% medication availability. Administrative time dropped by 30%, freeing up 12 hours per week per location for direct patient care. Staff morale soared as they could finally focus on what they do best—caring for patients—while the system intelligently manages inventory in the background. Patients now receive seamless care with medications always available when needed.",
      improvement: "+99.5% medication availability, -30% administrative time",
      icon: '/icons/star.svg'
    },
    {
      id: 3,
      client: "Apex Pharmacy",
      metric: "Pharmacy Compliance Support",
      before: "Apex Pharmacy Chain's 25 locations were a regulatory nightmare waiting to happen. Inconsistent compliance protocols across locations resulted in 15 violations in 18 months, with each pharmacy interpreting DEA requirements differently. Corporate had no real-time operational visibility, discovering issues only during external audits. Staff turnover was rampant due to regulatory stress, while $500K+ in potential penalties loomed overhead. Three locations had formal warnings, putting the entire chain's operating licenses at existential risk.",
      painPoints: [
        "Inconsistent regulatory interpretation", 
        "Limited operational visibility", 
        "High staff turnover and stress", 
        "Existential business risk"
      ],
      after: "Apex Pharmacy now operates with bulletproof compliance confidence. A comprehensive framework with automated audit trails and continuous monitoring systems ensures consistent adherence across all 25 locations. Zero compliance violations over the past 18 months, elimination of all penalty risks, and standardized protocols that staff can easily follow. Real-time dashboards provide corporate visibility into every aspect of operations, while comprehensive training programs have reduced staff turnover and created a culture of compliance excellence. The transformation didn't just eliminate risk—it created sustainable operational excellence.",
      improvement: "-100% compliance violations",
      icon: '/icons/lock.svg'
    }
  ]

  const [expandedId, setExpandedId] = useState(null);

  return (
    <div>
      {/* Hero */}
      <section style={{
        position: "relative",
        minHeight: "50vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "0 20px",
        color: "white",
        overflow: "hidden"
      }}>
        {/* Responsive Background Image */}
        <picture>
          {/* Mobile */}
          <source srcSet="/images/clients-bg.jpg" media="(max-width: 640px)" />
          {/* Tablet */}
          <source srcSet="/images/clients-bg.jpg" media="(max-width: 1024px)" />
          {/* Desktop */}
          <img
            src="/images/clients-bg.jpg"
            alt="Clients background"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: 0
            }}
          />
        </picture>

        {/* Shadow Overlay */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1
        }}></div>

        {/* Foreground Content */}
        <div style={{ position: "relative", zIndex: 2 }}>
          <h2 style={{
            fontSize: isMobile ? "1.75rem" : "2.5rem",
            fontWeight: "700",
            marginBottom: "1rem"
          }}>
            Transforming Efficiency and Care through Innovative Solutions
          </h2>
        </div>
      </section>


      {/* Intro */}
      <section>
        <h1 style={{textAlign:"center", fontSize:isMobile ? "1.5rem" : "2rem", fontWeight:"600", marginTop:"20px"}}>
          See how we helped others
        </h1>
        <p style={{margin:"20px", fontSize:"1rem", lineHeight:"1.6", color:"#374151"}}>
          Operating within the healthcare and logistics consulting sector presents a multifaceted array of challenges...
          <b> See for yourself</b>
        </p>
      </section>

      {/* Case Studies */}
      <section>
        {
          caseStudies.map(caseStudy => (
            <div key={caseStudy.id} style={{padding: "20px", margin:"20px auto", maxWidth:"900px", border:"1px solid #e2e8f0", borderRadius:"10px", boxShadow:"0 2px 8px rgba(0,0,0,0.05)"}}>
              <div style={{backgroundColor: "#1e3a5f", color:"#ffffff", padding:"10px", borderRadius:"6px 6px 0 0"}}>
                <h2 style={{fontSize:isMobile ? "1.25rem":"1.5rem", margin:"0"}}>{caseStudy.client}</h2>
                <span style={{fontSize:"0.9rem", opacity:"0.8"}}>{caseStudy.metric}</span>
              </div>

              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                flexDirection: isMobile ? "column" : "row",
                backgroundColor: "#f8fafc",
                padding: "20px"
              }}>
                {/* Problems */}
                <div style={{marginBottom:isMobile?"15px":"0", textAlign:isMobile?"center":"left"}}>
                  <img style={{width: isMobile ? "40px" : "50px",height: "auto",marginBottom: "15px"}} src='/icons/shield-alert.svg' alt="problems"/>
                  <h4 style={{color: "#4a5568", fontSize:"1rem", margin:"5px 0"}}>Problems</h4>
                  <ul style={{listStyle:"disc", paddingLeft:"20px", color:"#ed8936", fontSize:"0.9rem", fontWeight:"500"}}>
                    {caseStudy.painPoints.map((painPoint, idx) => (
                      <li key={idx}>{painPoint}</li>
                    ))}
                  </ul>
                </div>

                {/* Improvements */}
                <div style={{color:"#005c0f", fontSize:"1.1rem", fontWeight:"600", textAlign:"center"}}>
                  <span>{caseStudy.improvement}</span>
                </div>

                {/* Icon */}
                <img style={{width: isMobile ? "40px" : "50px",height: "auto",marginBottom: "15px"}} src={caseStudy.icon} alt="icon"/>
              </div>

              {/* Toggle Button */}
              <button 
                onClick={() => setExpandedId(expandedId === caseStudy.id ? null : caseStudy.id)}
                style={{
                  display:"block",
                  margin:"15px auto",
                  padding:"10px 20px",
                  backgroundColor:"#1e3a5f",
                  color:"#fff",
                  border:"none",
                  borderRadius:"5px",
                  cursor:"pointer",
                  fontSize:"0.95rem",
                  fontWeight:"600"
                }}
              >
                {expandedId === caseStudy.id ? "Hide Story" : "View Full Story"}
              </button>

              {/* Expanded Content */}
              {expandedId === caseStudy.id && (
                <div style={{marginTop:"15px"}}>
                  <h3 style={{color:"#B22222", fontSize:"1.2rem"}}>Before</h3>
                  <p style={{color:"#B22222", fontSize:"1rem", lineHeight:"1.6"}}>{caseStudy.before}</p>
                  <h3 style={{color:"#2E7D32", fontSize:"1.2rem"}}>After</h3>
                  <p style={{color:"#2E7D32", fontSize:"1rem", lineHeight:"1.6"}}>{caseStudy.after}</p>
                </div>
              )}
            </div>
          ))
        }
      </section>
    </div>
  )
}

export default OurClients
