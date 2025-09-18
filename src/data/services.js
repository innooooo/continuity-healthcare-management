const services = [
    {
        id: 1,
        icon: '/icons/id-card.svg',
        title: 'Credentialing Specialty Services',
        type: 'Revenue Cycle Management Services',
        description: 'Streamlined licensing and credentialing for healthcare providers'
    },
    {
        id: 2,
        icon: '/icons/smile.svg',
        title: 'Dental Services',
        type: 'Revenue Cycle Management Services',
        description: 'Comprehensive oral care for healthy teeth and confident smiles'
    },
    {
        id: 3,
        icon: '/icons/message-circle.svg',
        title: 'Behavioral Services',
        type: 'Revenue Cycle Management Services',
        description: 'Supportive therapy and care for emotional well-being'
    },
    {
        id: 4,
        icon: '/icons/brain.svg',
        title: 'Psychiatry Services',
        type: 'Revenue Cycle Management Services',
        description: 'Expert psychiatric evaluations, treatment, and counseling'
    },
    {
        id: 5,
        icon: '/icons/shield-alert.svg',
        title: 'Addiction Services',
        type: 'Revenue Cycle Management Services',
        description: 'Compassionate care for recovery and long-term wellness'
    },
    {
        id: 6,
        icon: '/icons/eye.svg',
        title: 'Optometry Services',
        type: 'Revenue Cycle Management Services',
        description: 'Complete vision care and eye health management'
    },
    {
        id: 7,
        icon: '/icons/activity.svg',
        title: 'Physical Therapy',
        type: 'Revenue Cycle Management Services',
        description: 'Rehabilitation to restore movement, strength and balance'
    },
    {
        id: 8,
        icon: '/icons/house-heart.svg',
        title: 'Home Health Services',
        type: 'Revenue Cycle Management Services',
        description: 'Quality medical care delivered in the comfort of home'
    },
    {
        id: 9,
        icon: '/icons/stethoscope.svg',
        title: 'Internal Medicine',
        type: 'Revenue Cycle Management Services',
        description: 'Comprehensive care for adults with complex conditions'
    },
    {
        id: 10,
        icon: '/icons/network.svg',
        title: 'Provider Network Enrollment Specialist',
        type: 'Revenue Cycle Management Services',
        description: 'Efficient enrollment for healthcare providers and networks'
    },
    {
        id: 11,
        icon: '/icons/building.svg',
        title: 'Enrolling facilities',
        type: 'Revenue Cycle Management Services',
        description: 'Simplifying facility enrollment into healthcare systems'
    },
    {
        id: 12,
        icon: '/icons/receipt.svg',
        title: 'Claims Billing',
        type: 'Revenue Cycle Management Services',
        description: 'Accurate claim processing for faster reimbursements'
    },
    {
        id: 13,
        icon: '/icons/credit-card.svg',
        title: 'Accounts Receivable & Denial Specialist',
        type: 'Revenue Cycle Management Services',
        description: 'Expert management of receivables and denial resolutions'
    },
    {
        id: 14,
        icon: '/icons/plane.svg',
        title: 'Air Ambulance',
        type: 'Revenue Cycle Management Services',
        description: 'Rapid, lifesaving emergency medical air transport'
    },
    {
        id: 15,
        icon: '/icons/syringe.svg',
        title: 'Anesthesia',
        type: 'Revenue Cycle Management Services',
        description: 'Safe and reiable anesthesia services for all procedures'
    },
    {
        id: 16,
        icon: '/icons/triangle-alert.svg',
        title: 'Emergency Room Services',
        type: 'Revenue Cycle Management Services',
        description: 'Immediate, expert care for urgent medical needs'
    },
    {
        id: 17,
        icon: '/icons/scale.svg',
        title: 'Independent Dispute Resolution Services',
        type: 'Revenue Cycle Management Services',
        description: 'Fair, impartial resolution for healthcare disputes'
    },
    {
        id: 18,
        icon: '/icons/chart-bar-big.svg',
        title: 'Collecting, Analyzing & Interpreting Data',
        type: 'Data Analytics Specialist Services',
        description: 'Turning raw data into actionable healthcare insights'
    },
    {
        id: 19,
        icon: '/icons/database.svg',
        title: 'Developing & Implementing Databases',
        type: 'Data Analytics Specialist Services',
        description: 'Robust databases built for accuracy and efficiency'
    },
    {
        id: 20,
        icon: '/icons/chart-line.svg',
        title: 'Analyzing Trends & Patterns',
        type: 'Data Analytics Specialist Services',
        description: 'Identify healthcare trends to guide better decisions'
    },
    {
        id: 21,
        icon: '/icons/clipboard-list.svg',
        title: 'Building & Customizing Reports',
        type: 'Data Analytics Specialist Services',
        description: 'Tailored reports for clear and precise performance tracking'
    },
    {
        id: 22,
        icon: '/icons/target.svg',
        title: 'Identifying Critical Metrics & KPIs',
        type: 'Data Analytics Specialist Services',
        description: 'Highlighting key indicators that drive healthcare success'
    },
    {
        id: 23,
        icon: '/icons/file-x.svg',
        title: 'Managing Claim Denials',
        type: 'Professional Project Management Services',
        description: 'Reduce denials with expert claims oversight'
    },
    {
        id: 24,
        icon: '/icons/refresh-ccw.svg',
        title: 'Improving Denial Management',
        type: 'Professional Project Management Services',
        description: 'Smarter strategies to resolve and prevent denials'
    },
    {
        id: 25,
        icon: '/icons/door-open.svg',
        title: 'Simplifying Patient Access',
        type: 'Professional Project Management Services',
        description: 'Streamlined access for patients to receive care easily'
    },
    {
        id: 26,
        icon: '/icons/clipboard-check.svg',
        title: 'Auditing Workflow',
        type: 'Professional Project Management Services',
        description: 'Optimize workflows through thorough audits'
    },
    {
        id: 27,
        icon: '/icons/inbox.svg',
        title: 'Managing Claims Submissions',
        type: 'Professional Project Management Services',
        description: 'Fast, accurate claims submission every time'
    },
    {
        id: 28,
        icon: '/icons/banknote-arrow-up.svg',
        title: 'Enhancing Effective Payment Posting',
        type: 'Professional Project Management Services',
        description: 'Ensure accurate and timely payment posting'
    },
    {
        id: 29,
        icon: '/icons/file-code.svg',
        title: 'Driving Improved Coding Accuracy',
        type: 'Professional Project Management Services',
        description: 'Boost compliance with precise medical coding'
    },
    {
        id: 30,
        icon: '/icons/shield.svg',
        title: 'Risk Management & Strategic Planning',
        type: 'Professional Project Management Services',
        description: 'Proactive planning to minimize risks and adapt to change'
    },
    {
        id: 31,
        icon: '/icons/graduation-cap.svg',
        title: 'Training & Education for Staff',
        type: 'Professional Project Management Services',
        description: 'Empowering teams with ongoing training and skills'
    },
    {
        id: 32,
        icon: '/icons/award.svg',
        title: 'Preparation for Accreditation',
        type: 'Professional Project Management Services',
        description: 'Comprehensive guidance for accreditation readiness'
    },
    {
        id: 33,
        icon: '/icons/pen-tool.svg',
        title: 'Policy & Procedures Review, Editing & Development',
        type: 'Professional Project Management Services',
        description: 'Refined policies that strengthen compliance and efficiency'
    },
    {
        id: 34,
        icon: '/icons/truck.svg',
        title: 'Transportation Logistics',
        type: 'Professional Project Management Services',
        description: 'Reliable coordination of medical transportation and logistics'
    },
    {
        id: 35,
        icon: '/icons/pen-line.svg',
        title: 'Notary Services',
        type: 'Add-On & Specialty Service',
        description: 'Arizona Licensed'
    },
    {
        id: 36,
        icon: '/icons/workflow.svg',
        title: 'Clinical Operations Support',
        type: 'Add-On & Specialty Service',
        description: 'For Outpatient and behavioral health programs'
    },
    {
        id: 37,
        icon: '/icons/folder-cog.svg',
        title: 'Behavioral Health Administrative Strategy',
        type: 'Add-On & Specialty Service',
        description: 'Leveraging counseling and life coaching expertise'
    }
]

export default services