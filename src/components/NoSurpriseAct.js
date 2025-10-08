const NoSurpriseAct = () => {


  return (
    <div>
      <section style={{
        backgroundImage: "url('/images/policy-bg.jpg')",
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
            No Surprise Act (NSA)
          </h1>
          
        </div>

      </section>

      <section style={{display:"flex",flexDirection:"column",margin:"20px"}}>
        <h3 className="section-title">What Provider types does IDR support?</h3>
        <div className="section-text">
          <span>OON (Out of Network)</span>
          <ul>
            <li>Anesthesiologist</li>
            <li>Emergency Room</li>
            <li>Air Ambulance</li>
            <li>Ground Ambulance</li>
            <li>Radiology</li>
          </ul>
          <span>Which includes a consent form.</span>
        </div>
      </section>

      <section style={{display:"flex",flexDirection:"column",margin:"20px"}}>
        <h3 className="section-title">What is Surprise Billing?</h3>
        <div className="section-text">
          Surprise billing occurs when after Balance Billing Options under No Surprise Act
          As defined in the Consolidation Appropriations Act of 2021.
          <ul>
            <li>Providers prohibited from balance billing for specific services can initiate the Independent Dispute Resolution (IDR) process.</li>
          </ul>
        </div>
      </section>

      <section style={{display:"flex",flexDirection:"column",margin:"20px"}}>
        <h3 className="section-title">How does this affect you?</h3>
        <div className="section-text">
          NSA is so new that the healthcare industry does not understand how to embrace and include the process in their system.
          The TPAs and Insurance companies don’t understand the process, so they don’t know how to include it in their claims
           processing databases and software systems. Providers need someone on the front end who will fight for you and your dollars in solid negotiations.
          Insurance companies and TPAs are not correctly applying QPAs to NSA claims, costing providers money upfront.
          <div>
            <b>Keep in mind most Emergency Room visits are OON</b>
          </div>
        </div>
      </section>

      <section style={{display:"flex",flexDirection:"column",margin:"20px"}}>
        <h3 className="section-title">Why did we start this company?</h3>
        <div className="section-text">
          <h4>Our Team:</h4>
          <p>
            Our comprehensive team background in provider networking, claims, billing, and
            dispute resolution equips us with a unique skill set to deliver optimal outcomes for
            medical providers. This enables providers to focus on their core mission of providing
            high-quality service for the best patient care outcome. 
          </p>
          <ul>
            <li>Proven Excellence in Healthcare cover</li>
            <li>Years of industry experience</li>
            <li>Comprehensive solutions: Invoicing, compliance, customized solutions</li>
            <li>Strategic focus on provider-health plan relationship</li>
            <li>Prompt communication</li>
            <li>Cost-effective solutions</li>
            <li>Commitment to quality</li>
          </ul>
        </div>
      </section>

      <section style={{display:"flex",flexDirection:"column",margin:"20px"}}>
        <h3 className="section-title">Mission Statement</h3>
        <div className="section-text">
          Our mission is to empower healthcare providers with tailored consulting solutions that optimize 
          logistical operations across the entire continuum of care. We leverage advanced analytics, 
          process redesign, and innovative technologies to streamline supply chain management, improve patient flow, 
          enhance medication and equipment delivery, and support workforce efficiency. By aligning operations with 
          patient-centric strategies, we help providers reduce delays, cut waste, and maximize resource utilization. 
          Through these efforts, we enable healthcare organizations to deliver safer, faster, and more compassionate 
          care experiences—improving both patient satisfaction and organizational performance.
        </div>
      </section>

      <section style={{display:"flex",flexDirection:"column",margin:"20px"}}>
        <h3 className="section-title">Vision Statement</h3>
        <div className="section-text">
          To revolutionize healthcare delivery and logistics by reimagining how care, resources, 
          and innovations flow through the healthcare ecosystem. We envision a future where providers, 
          patients, and partners are seamlessly connected through intelligent, adaptive, and sustainable
           logistical systems. By introducing data-driven insights, digital transformation, 
           and human-centered design into healthcare operations, we aim to eliminate inefficiencies, 
           reduce costs, and ultimately ensure that every patient receives timely, high-quality care. 
           Our vision is a world where healthcare logistics is not a barrier, but a catalyst for accessible, equitable, and life-enhancing health outcomes.
        </div>
      </section>

      <section style={{display:"flex",flexDirection:"column",margin:"20px"}}>
        <h3 className="section-title">Core Values</h3>
        <div className="section-text">
          <ol type="1">
            <li>
              <b>Integrity: </b>Upholding honesty and transparency in all Appeals and IDR interactions,
              ensuring that disputes are resolved fairly and with the highest ethical standards while
              maintaining trust with medical providers and payers.
            </li>
            <li>
              <b>Collaboration: </b>Fostering teamwork between medical providers, payers, and the
              dispute resolution team to find mutually beneficial solutions, promoting open
              communication and working toward shared goals.
            </li>
            <li>
              <b>Efficiency: </b>Streamlining dispute resolution processes to resolve conflicts quickly
              and accurately, minimizing payment delays, and ensuring financial processes are
              handled smoothly and cost-effectively.
            </li>
            <li>
              <b>Accountability: </b>Taking responsibility for the outcomes of dispute resolutions,
              maintaining high-performance standards, and ensuring that all parties involved are
              held accountable to agreed-upon terms and resolutions.
            </li>
          </ol>
        </div>
      </section>

      <section style={{display:"flex",flexDirection:"column",margin:"20px"}}>
        <h3 className="section-title">Dispute Resolution Principles</h3>
        <div className="section-text">
          <b>Integrity:</b>
          <ul>
            <li>Acting with honesty and transparency</li>
            <li>Ensuring fair and ethical dispute resolution</li>
          </ul>
          <b>Collaboration:</b>
          <ul>
            <li>Fostering teamwork among medical providers, payers, and dispute resolution team</li>
            <li>Promoting open communication and shared goals</li>
          </ul>
          <b>Efficiency:</b>
          <ul>
            <li>Streamlining dispute resolution processes</li>
            <li>Minimizing payment delays and ensuring smooth financial processes</li>
          </ul>
          <b>Accountability:</b>
          <ul>
            <li>Taking responsibility for outcomes of dispute resolutions</li>
            <li>Maintaining high performance standards</li>
          </ul>
        </div>
      </section>

      <section style={{display:"flex",flexDirection:"column",margin:"20px"}}>
        <h3 className="section-title">FAQ's</h3>
        <div className="section-text">
          <ul>
            <li>What is IDR?</li>
            <li>What is your fee?</li>
            <li>When can I initiate the IDR process?</li>
            <li>How long does it take to get compensation?</li>
            <li>Who do we serve?</li>
            <ul>
              <li>Initiation</li>
              <li>Document Submission</li>
              <li>IDR Review</li>
              <li>Final Decision</li>
            </ul>
            <li>Can I appeal the IDR decision?</li>
            <li>Can multiple claims be bundled in the IDR process?</li>
            <li>How do you select an IDR entity?</li>
            <li>When is the IDR entity fee paid?</li>
          </ul>
        </div>
      </section>

      <section style={{display:"flex",flexDirection:"column",margin:"20px"}}>
        <h3 className="section-title">How can our services help you?</h3>
        <div className="section-text">
          <p>
            We started this company with you in mind because we believe that medical
            professionals should be compensated appropriately for their considerable education,
            the life-saving treatment they deliver, and the utilization of cutting-edge technology.
          </p>
          <p>
            Over the last two years of working in the IDR insurance sector, we've found that self-
            funded insurance companies have not adhered to NSA regulations during the claims
            processing procedure.
            <span>Providers are not getting paid QPA (Qualified Payment Amount) on the front end</span>
            <ul>
              <li>Why: The TPA (Third Party Administrators) have not changed their systems to pay the QPA for NSA claims.</li>
              <li>This means they (providers and facilities) are getting lower payments on the front end, which makes open negotiations harder on the back end.</li>
              <li>The foundation they (insurance companies and TPAs) are starting from is lower in payment.</li>
            </ul>
            <span>Initial payment received typically (MLR) Medicare Like Rates, usually 1.5% above the Medicare Fee Schedule.</span>
          </p>
        </div>
      </section>

      <section style={{display:"flex",flexDirection:"column",margin:"20px"}}>
        <h3 className="section-title">Companies we need to market</h3>
        <div className="section-text">
          <ul>
            <li>St. Francis Hospital, NY 100 PT Washington, Blvd., Roslyn, NY 11576</li>
            <li>Paris Emergency Center, LLC, PO Box 734337, Dallas, TX 75373</li>
            <li>Atlantic Medical Care, 550 1 st Ave, New York, NY 10016</li>
            <li>Medical Services of Lynbrook, 1101 Stewart Ave STE 100 N</li>
            <li>Geneva Woods Surgical Center, 3730 Rhone Circle # 101, Anchorage, AK 99508</li>
            <li>Sedation Vacation Perioperative Medicine PLLC, New York</li>
            <li>Samwell Institute of Pain Management</li>
            <li>Quality Care ER, LLC, PO BOX 12781, Oklahoma City, OK 73157</li>
            <li>Marian Regional Medical, File 55549, Los Angeles, CA 90074</li>
            <li>Ogden Regional Medical, PO Box 409654, Atlanta, GA 30384</li>
            <li>Mountain View Hospital, PO BOX 409636, Atlanta, GA30384</li>
            <li>Providence Alaska Medical, 3200 Providence Dr, Anchorage, AK 99508</li>
          </ul>
        </div>
      </section>
      <hr />
    </div>
  )
}

export default NoSurpriseAct