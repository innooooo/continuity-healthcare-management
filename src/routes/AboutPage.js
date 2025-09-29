import {useState} from 'react';
import ShareholderModal from '../components/ShareholderModal.js';

const AboutPage = () => {

  // Responsive breakpoints
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  const isMobile = screenSize.width <= 768;
  const isTablet = screenSize.width > 768 && screenSize.width <= 1024;
  const isSmallMobile = screenSize.width <= 480;

  return (
    <div>
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
        {/* Responsive background image */}
        <picture>
          {/* Mobile */}
          <source srcSet="/images/about-bg.jpg" media="(max-width: 640px)" />
          {/* Tablet */}
          <source srcSet="/images/about-bg.jpg" media="(max-width: 1024px)" />
          {/* Desktop */}
          <img 
            src="/images/about-bg.jpg" 
            alt="About background" 
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

        {/* Gradient overlay */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6))",
          zIndex: 1
        }}></div>

        {/* Content */}
        <div style={{ position: "relative", zIndex: 2, maxWidth: "800px" }}>
          <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem", lineHeight: "1.2" }}>
            Transforming Efficiency and Care through Innovative Solutions
          </h2>
        </div>
      </section>


      <section> 
        <ShareholderModal />
      </section>

      <section>
        <h1 style={{textAlign:"center"}}>Who We Are</h1>
        <p style={{margin:"20px"}}>
          The start-up is founded on the principle that interdisciplinary collaboration drives innovation. The core team includes:
          <ul>
            <li><b>Healthcare Consultants:</b> Experts in medical practice management, patient care protocols, and regulatory compliance.</li>
            <li><b>Logistics Specialists:</b> Professionals with deep knowledge of supply chain management, distribution networks, and transport optimization.</li>
            <li><b>IT and Data Analysts:</b> Skilled in integrating technology solutions, managing data security, and translating analytics into action.</li>
            <li><b>Project Managers:</b> Coordinators who ensure that projects are delivered on time, within scope, and in line with client expectations.</li>
          </ul>
        </p>
      </section>

      <section>
        <h1 style={{textAlign:"center"}}>What Sets Us Apart</h1>
        <p style={{margin:"20px"}}>
          We leverage cutting-edge technologies such as <b>data analytics</b> to harness big data to predict demand and optimize inventory, 
          <b>cloud-based platforms</b> to facilitate secure sharing of medical and logistical information, as well as <b>automation & AI </b>
          to free up human resources and enhance delivery efficiency through AI-driven route optimization
          <ul>
            <li><b>Industry Expertise</b>: The founding team comprises professionals with deep experience in both healthcare and logistics, ensuring a holistic approach to every project</li>
            <li><b>Client-Centric Ethos</b>: A strong focus on customer needs, transparency, and long-term relationship-building sets the firm apart</li>
            <li><b>Scalability</b>: Solutions are designed to grow with clients, adaptable for small clinics as well as major hospital systems</li>
            <li><b>Agility & Responsiveness</b>: The start-up's streamlined structure allows for rapid response to client requests and market shifts</li>
          </ul>
        </p>       
      </section>
    </div>
  )
}

export default AboutPage
