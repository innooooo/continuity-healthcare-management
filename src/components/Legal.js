import { Link } from "react-router-dom"

const Legal = () => {
  return (
    <div>
      <section style={{
        backgroundImage: "url('/images/legal-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "40vh",
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
          <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
            Federal Legislative Update (FLU)
          </h1>
          
        </div>

      </section>

      <section style={{display:"flex",flexDirection:"column",margin:"20px"}}>
        <h4 className="section-title">
          What Provider types does IDR support:HaloMD Supports the No Surprises Act Enforcement Act
        </h4>
        <div className="section-text">
          At HaloMD, we are dedicated to advocating for healthcare providers as they navigate the
          complex Independent Dispute Resolution (IDR) process under the No Surprises Act. We are
          proud to endorse the newly introduced <b>No Surprises Act Enforcement Act (H.R.9572)</b>, a
          bipartisan bill sponsored by <b>Greg Murphy, M.D., Raul Ruiz, M.D., John Joyce, M.D., Kim Schrier,
          M.D.,</b> and <b>Jimmy Panetta</b> in September 2024.
        </div>
      </section>

      <section style={{display:"flex",flexDirection:"column",margin:"20px"}}>
        <h4 className="section-title">
          Strengthening the No Surprises Act
        </h4>
        <div className="section-text">
          <p>
            The <b>No Surprises Act Enforcement Act</b> seeks to close significant enforcement gaps that have
            allowed insurers to delay or avoid payments after IDR rulings. The bill imposes penalties on
            insurers who fail to comply with statutory payment deadlines, including interest payments on
            overdue amounts. The goal is to ensure that healthcare providers receive timely and accurate
            payments for services rendered, in line with the rulings from the IDR process.
          </p>
          <p>
            The <b>No Surprises Act,</b> which passed in 2020, was designed to protect patients from surprise
            out-of-network medical bills. However, since its implementation, many healthcare providers
            have experienced significant payment delays following favorable IDR decisions. According to
            recent surveys, <b>24% of provider-favorable disputes</b> remain unpaid or incorrectly paid, resulting
            in financial uncertainty for many out-of-network providers.
          </p>
        </div>
      </section>

      <section style={{display:"flex",flexDirection:"column",margin:"20px"}}>
        <h4 className="section-title">
          Key Provisions
        </h4>
        <div className="section-text">
          This legislation reinforces the original intent of the <b>No Surprises Act</b> by:
          <ul>
            <li>Increasing penalties on health plans for non-compliance with payment deadlines.</li>
            <li>Establishing parity between penalties applied to healthcare providers and insurance companies.</li>
            <li>Improving transparency by requiring detailed reporting on payment delays and compliance issues</li>
          </ul>
        </div>
      </section>

      <section style={{display:"flex",flexDirection:"column",margin:"20px"}}>
        <h4 className="section-title">
          Industry Support
        </h4>
        <div className="section-text">
          The bill has gained widespread support from leading medical organizations, including the 
          <b> American Society of Anesthesiologists (ASA), Emergency Department Practice Management
          Association (EDPMA)</b> and the <b>American College of Radiology (ACR).</b> These organizations
          emphasize the financial burden that delayed payments impose on providers, undermining the
          goals of the No Surprises Act. They agree that the enforcement measures in this bill are
          necessary to ensure insurers meet their obligations.
        </div>
      </section>

      <section style={{display:"flex",flexDirection:"column",margin:"20px"}}>
        <h4 className="section-title">
          Why This Matters
        </h4>
        <div className="section-text">
          <p>Healthcare providers depend on timely reimbursements to maintain financial stability. The
            enforcement measures introduced in the <b>No Surprises Act Enforcement Act</b> will ensure that
            insurers follow through on IDR decisions, providing out-of-network providers with the financial
            security they need to continue delivering quality care to their patients.
          </p>
          <p>
            HaloMD urges Congress to pass this vital legislation to uphold the integrity of the <b>No Surprises
            Act</b> and ensure a fair, transparent system for resolving payment disputes between providers and
            insurers.
          </p>
        </div>
      </section>
      <hr />

      <section style={{display:"flex",flexDirection:"column",margin:"20px"}}>
        <h4 className="section-title">Sources</h4>
        <Link
          to="https://murphy.house.gov/media/press-releases/murphy-introduces-legislation-improve-enforcement-no-surprises-act">
            Greg Murphy's Press Release on No Surprises Act Enforcement Act
        </Link>
        <Link
          to="https://murphy.house.gov/media/press-releases/murphy-introduces-legislation-improve-enforcement-no-surprises-act">
            Congressman Greg Murphy
        </Link>
        <Link
          to="https://panetta.house.gov/media/press-releases/panetta-introduces-legislation-improve-enforcement-no-surprises-act">
            Panetta Introduces Legislation to Improve Enforcement of No Surprises Act
        </Link>
        <Link
          to="https://murphy.house.gov/media/press-releases/murphy-introduces-legislation-improve-enforcement-no-surprises-act">
            Congressman Panetta
        </Link>
        <text>ACR Supports New Legislation for IDR Enforcement</text>
      </section>

    </div>
  )
}

export default Legal
