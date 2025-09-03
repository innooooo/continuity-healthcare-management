import { useNavigate } from 'react-router-dom'

const HomePage = () => {

  const navigateTo = useNavigate()

  return (
    <div>
      <section style={{
        backgroundImage: "url('/images/hero-bg2.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems:"center",
        color: "white", // ensures text stands out
        textAlign: "center",
        padding: "0 20px"
        }}>
        <h1>Revenue Reimagined: Optimize Your Healthcare Finances</h1>
        <span style={{fontWeight:"bolder"}}>Maximizing Your Revenue, Minimizing Your Burden</span>
        <button onClick={()=>{navigateTo("/our-services")}} style={{height:"50px", width:"fit-content", margin:"20px",fontSize:"20px",fontWeight:"bolder"}}>LEARN MORE</button>
      </section>

      <section style={{
        padding:"10px",
        minHeight:"70vh",
        backgroundColor:"#f7f9fc"
        }}>
        <h1>Who We Serve</h1>
        <span>Our expertise spans the entire healthcare ecosystem,
           providing tailored Revenue Cycle Management(RCM) solutions designed to meet the unique needs of diverse providers</span>
        <div style={{display:"flex",margin:"10px",gap:"50px"}}>
          <div style={{width:"100vh"}}>
            <img width={50} src='/icons/hospital.svg' alt='Hospitals & healthcare systems'/>
            <h3>Hospitals & Healthcare Systems</h3>
            <span>Streamlining complex billing and credentialing for large-scale operations</span>
          </div>
          <div style={{width:"100vh"}}>
            <img width={50} src='/icons/cross.svg' alt='Clinics & Physician Groups'/>
            <h3>Clinics & Physician Groups</h3>
            <span>Optimizing revenue capture for outpatient and specialized pratices</span>
          </div>
          <div style={{width:"100vh"}}>
            <img width={50} src='/icons/pill-bottle.svg' alt='Pharmaceutical Companies'/>
            <h3>Pharmaceutical Companies</h3>
            <span>Navigating intricate drug reimbursement and patient access programs</span>
          </div>
          <div style={{width:"100vh"}}>
            <img width={50} src='/icons/test-tubes.svg' alt='Laboratories'/>
            <h3>Laboratories</h3>
            <span>Ensuring accurate billing for diagnostic services and testing</span>
          </div>
          <div style={{width:"100vh"}}>
            <img width={50} src='/icons/house.svg' alt='Home Health Care'/>
            <h3>Home Health Providers</h3>
            <span>Managing RCM challenges specific to in-home care services</span>
          </div>
        </div>
      </section>
      
      <section style={{
        padding:"10px",
        color:"#f7f9fc",
        backgroundColor:"#4a5568"
        }}>
        <h1>Meet the Visionaries Behind Our Success</h1>
        <span>Our leadership team brings together decades of expertise in healthcare finance, technology, and operations
        , united by a shared commitment to transforming your revenue cycle</span>
        <div style={{display:"flex",margin:"40px",lineHeight:"1.5",justifyContent:"space-around",alignItems:"center"}}>
          <img style={{borderRadius:"30px", marginRight:"20px"}} width={250} src='/shareholders/qiana.webp' alt='Co-Founder & Principal Consultant'/>
          <h3>Qiana Mayberry - Co-Founder & Principal Consultant</h3>
          <span>Qiana Mayberry, MSHA, OCHW, is a healthcare operations strategist, provider network expert, and consultant specializing in revenue cycle management and project management</span>
        </div>
        <hr />
        <div style={{display:"flex",margin:"40px",lineHeight:"1.5",justifyContent:"space-around",alignItems:"center"}}>
          <img style={{borderRadius:"30px", marginRight:"20px"}} width={250} src='/shareholders/talita.webp' alt='Co-Founder & Principal Consultant'/>
          <h3>Talita - Co-Founder & Principal Consultant</h3>
          <span>Talita is a creative leader and co-founder of Continuity Healthcare Management, LLC, who has worked in the healthcare field for over 15 years</span>
        </div>
        <hr />
        <div style={{display:"flex",margin:"40px",lineHeight:"1.5",justifyContent:"space-around",alignItems:"center"}}>
          <img style={{borderRadius:"30px", marginRight:"20px"}} width={250} src='/shareholders/dana.webp' alt='Co-Founder & Principal Consultant'/>
          <h3>Dana D. Floyd - Co-Founder & Principal Consultant</h3>
          <span>Dana is a principal consultant and co-founder of Continuity Healthcare Management, LLC, with more than 15 years of expertise in RCM, healthcare operations and project execution</span>
        </div>
        <hr />
        <div style={{display:"flex",margin:"40px",lineHeight:"1.5",justifyContent:"space-around",alignItems:"center"}}>
          <img style={{borderRadius:"30px", marginRight:"20px"}} width={250} src='/shareholders/jr.webp' alt='Co-Founder & Arbitrator'/>
          <h3 style={{marginRight:"20px"}}>JR - Co-Founder & Arbitrator</h3>
          <span>With over two decades of experience in logistics, operations and dispute resolution, JR brings a solution-focused approach to healthcare,RCM and consulting business operations</span>
        </div>
        <div style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
          <button onClick={() => {navigateTo("/about-us");}} style={{color:"#2c5282",width:"fit-content",height:"50px",margin:"20px",fontSize:"20px",fontWeight:"bold"}}>MEET OUR TEAM</button>
        </div>
      </section>

    </div>
  )
}

export default HomePage
