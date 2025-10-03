import {Link} from 'react-router';

const Footer = () => {
  return (
    <div className="animated-footer">
      <section 
        style={{display:"flex",alignItems:"center"}}
        className="fade-in-section"
      >
        <img 
          src='/icons/logo-black.webp'
          alt="Company Logo"
          style={{ height: "350px", width: "auto" }}
          className="logo-hover"
        />
        <section 
          style={{display:"flex",flexDirection:"column",margin:"20px"}}
          className="vision-mission-section"
        >
          <h2 className="section-title">Our Vision</h2>
          <span className="section-text">
            Is to revolutionize healthcare delivery and logistics by providing tailored, innovative consulting solutions
          </span>
          <h2 className="section-title">Our Mission</h2>
          <span className="section-text">
            Is to empower healthcare providers to optimize their logistical operations, enhance patient experiences and maximize overall efficiency
          </span>
        </section>
      </section>

      <section 
        style={{display:"flex",marginLeft:"20px",marginRight:"50px",justifyContent:"space-between"}}
        className="contact-section"
      >
        <section 
          style={{display:"flex",flexDirection:"column"}}
          className="contact-info"
        >
          <h2 className="section-title">Get In Touch</h2>
          <span className="contact-item">Continuity Health Care Management</span>
          <span className="contact-item">50050 E University Drive</span>
          <span className="contact-item">Ste 105 PMD 1037</span>
          <span className="contact-item">Mesa, AZ 85205</span>
          <span className="contact-item">
            Our email address is{' '}
            <b className="email-link">continuityhcm@gmail.com</b> and{' '}
            <b className="email-link">info@continuityhcm.com</b>
          </span>
        </section>
        
        <section className="copyright-section">
          <span>
            <text>
              <sup>
                <img 
                  src="/icons/copyright.svg" 
                  alt="Copyright"
                  className="copyright-icon"
                />
              </sup>
              <text>  2025 Continuity Health Care</text>   <b>|</b> 
              <text>  All Rights Reserved</text>   <b>|</b> 
              <text>  Designed Professionally By{'   '}</text>
              <Link 
                to="http://innokoge-dev.vercel.app/"
                className="designer-link"
              >
                <b>InnSysTech</b>
              </Link>
            </text>
          </span>
          <Link 
            to="no-surprise-act"
            className="designer-link"
            >No Surprise Act (NSA)
          </Link>
          <Link 
            to="federal-legislative-update"
            className="designer-link"
            >Federal Legislative Update (FLU)
          </Link>
        </section>
      </section>
    </div>
  )
}

export default Footer