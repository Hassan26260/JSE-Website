import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../../../styles/design/MEPDesign.css'; // Scoped Styles explicitly for MEP Design


// Shared CSS
import '../design/ArchitecturalBIM.css';

// Import standard images
import heroImage from '../../../assets/images-home/mep-design.webp';

// Image for Intro Section
import mepAboutImage from '../../../assets/images-home/mep-about.jpg';

// Additional Services Data (kept as is, assuming it's still used elsewhere or will be updated later)
import mepImg from '../../../assets/images-home/home-new-img/MEP.png';
import archImg from '../../../assets/images-home/home-new-img/BIM.webp';
import structImg from '../../../assets/images-home/home-new-img/structural-eng.webp';
import steelImg from '../../../assets/images-home/home-new-img/steel-detail.jfif';
import infraImg from '../../../assets/images-home/home-new-img/infrastructural.webp';
import virtualEngImage from '../../../assets/images-home/home-new-img/virtual-team.jpeg';
import secondmentImage from '../../../assets/images-home/home-new-img/secondment.jpg.jpeg';

const ADDITIONAL_SERVICES = [
  { title: "MEP Engineering", desc: "Comprehensive MEP solutions including HVAC, Electrical, and Firefighting.", link: "/services/design/mep-design", img: mepImg },
  { title: "Architectural BIM", desc: "Revolutionizing architecture with detailed BIM models.", link: "/services/design/architectural-bim", img: archImg },
  { title: "Structural Engineering", desc: "Advanced structural engineering and analysis.", link: "/services/design/structural", img: structImg },
  { title: "Steel Structure Detailing", desc: "Accurate Tekla detailing and steel structures.", link: "/services/design/steel-structure-detailing", img: steelImg },
  { title: "Infrastructural Services", desc: "Robust infrastructure solutions for modern communities.", link: "/services/infrastructural-services", img: infraImg },
  { title: "Virtual Team for Hire", desc: "Hire own remote offshore architect team for modular construction needs.", link: "/services/virtual-team", img: virtualEngImage },
  { title: "Secondment Team", desc: "Get on-demand access to our pool of experienced professionals.", link: "/services/secondment-team", img: secondmentImage }
];

// --- NEW STRUCTURED CONTENT DATA ---

// New SVG Icons for Offerings Grid
const getMepIcon = (index) => {
  const icons = [
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>,
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>,
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>,
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>,
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>,
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
  ];
  return icons[index % icons.length];
};

// --- NEW STRUCTURED CONTENT DATA (V2) ---

const STRATEGIC_PARTNERSHIPS = {
  consultants: {
    title: "For Consultants: The Design Development Partner",
    desc: "We act as your Design Brain, providing the technical depth and man-hour capacity needed to progress from concept to IFC.",
    points: [
      { title: "From Scratch to IFC", text: "We take architectural intent and develop all required engineering calculations, system sizing, and technical selections." },
      { title: "Design-Led BIM (LOD 100–300)", text: "We deliver fully engineered, code-compliant BIM models that ensure technical integrity during the design stage." },
      { title: "Technical Synergy", text: "Simultaneous engineering and BIM modeling ensures 100% coordination across all building services disciplines." }
    ]
  },
  contractors: {
    title: "For Contractors: The Construction Execution Partner",
    desc: "We provide the engineering brainpower and high-detail BIM deliverables required for error-free site installation.",
    points: [
      { title: "Engineering Validation", text: "We perform complete audits of IFC drawings and consultant designs to identify discrepancies before they impact construction." },
      { title: "Execution-Led BIM (LOD 400–500)", text: "We upgrade models to LOD 400 for site-ready shop drawings and deliver LOD 500 as-built models for facility management." },
      { title: "Proactive RFI Management", text: "We resolve constructability issues early, reducing site rework and protecting project budgets." }
    ]
  }
};

const MEP_TECHNICAL_SPECTRUM = [
  {
    title: "Mechanical & HVAC Engineering",
    desc: "Heat gain/loss estimation, energy modeling, ESP calculations, pump head analysis, and complex smoke management systems (staircase, lift, and car park pressurization).",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 12m-10 0a10 10 0 1 0 20 0a10 10 0 1 0-20 0M12 12l4.9 4.9M12 12l-4.9 4.9M12 12l4.9-4.9M12 12l-4.9-4.9" /></svg>
  },
  {
    title: "Electrical & Power Systems Design",
    desc: "Load schedules, voltage drop analysis, cable sizing, earthing and lightning protection, and UPS/central battery calculations.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
  },
  {
    title: "Public Health Eng. & Fire-Fighting",
    desc: "Water supply and drainage demand calculations, grease trap sizing, and hydraulic analysis for fire suppression systems (sprinklers and hydrants).",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
  },
  {
    title: "ELV & Security Systems",
    desc: "Building Management Systems (BMS), home automation, CCTV (IP Video/Dahua), access control, and structured cabling design.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
  },
  {
    title: "Infrastructure Engineering (Civil 3D)",
    desc: "External utility network design and buried MEP services modeling using Autodesk Civil 3D.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
  }
];

const SECTOR_EXPERTISE = [
  { name: "Transportation", desc: "Metro rail systems and international airports", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M5 21V7l8-4 8 4v14"></path></svg> },
  { name: "Mission-Critical Facilities", desc: "Tier III & IV data centers and district cooling plants (DCP)", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg> },
  { name: "Healthcare & Hospitality", desc: "Multi-specialty hospitals, luxury hotels, and mega-scale shopping malls", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg> },
  { name: "High-Rise & Industrial", desc: "Premium residential towers and large-scale manufacturing plants", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg> }
];

const TECH_STACK = [
  { discipline: "HVAC Design", software: ["HAP", "ASHRAE Duct Fitting Database"] },
  { discipline: "Electrical Analysis", software: ["AMTECH", "DIALux", "Ecodial"] },
  { discipline: "PHE & Fire-Fighting", software: ["ELITE", "Hydraulic Analysis Tools"] },
  { discipline: "Infrastructure", software: ["Autodesk Civil 3D"] },
  { discipline: "ELV & Security", software: ["IP Video Tool", "DAHUA Design Tools"] },
  { discipline: "BIM & Coordination", software: ["Revit", "Navisworks", "BIM 360 (CDE)"] }
];

const QA_PROTOCOLS = [
  { title: "Design Verification", desc: "Comprehensive audit of project inputs with proactive RFI resolution.", icon: <span style={{ fontSize: '1.5rem', fontWeight: 800 }}>1</span> },
  { title: "Model Coordination", desc: "Continuous cross-discipline coordination using Navisworks for a zero-conflict digital twin.", icon: <span style={{ fontSize: '1.5rem', fontWeight: 800 }}>2</span> },
  { title: "Internal QA/QC", desc: "Independent audits and detailed check prints for client review.", icon: <span style={{ fontSize: '1.5rem', fontWeight: 800 }}>3</span> },
  { title: "Model Health Monitoring", desc: "Periodic reporting through Power BI to ensure full BIM compliance and quality control.", icon: <span style={{ fontSize: '1.5rem', fontWeight: 800 }}>4</span> },
  { title: "Final Submission", desc: "Approved deliverables are extracted and uploaded to BIM 360 for real-time site access and tracking.", icon: <span style={{ fontSize: '1.5rem', fontWeight: 800 }}>5</span> }
];

const MEPDesign = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const stickyContactRef = useRef(null);

  const scrollToForm = () => {
    stickyContactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Animation Variants (Staggered)
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemFadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="arch-bim-page">
      {/* Hero Section */}
      <div className="service-hero-split">
        <div className="hero-text-content">
          <h1 className="hero-title-split">MEP Engineering Services</h1>
          <p className="hero-desc-split">
            Engineering defines JSE. We go beyond modeling we engineer, analyze, and verify every solution.
          </p>
          <button onClick={scrollToForm} className="hero-cta-btn">
            HIRE US
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
        <div className="hero-image-content">
          <div className="hero-diagonal-bar"></div>
          <img src={heroImage} alt="MEP Engineering Services" className="hero-img-split" loading="eager" />
        </div>
      </div>

      {/* 1. Authority Intro Section (2-Column) */}
      <section className="arch-what-section">
        <div className="arch-what-container">
          <div className="arch-what-text">
            <h2 className="arch-what-title" style={{ textAlign: 'left', marginBottom: '1.5rem', color: '#1e293b' }}>
              MEP Engineering & BIM Solutions
            </h2>
            <div style={{ color: '#000', fontSize: '1.1rem', lineHeight: '1.8' }}>
              <p style={{ marginBottom: '1.5rem' }}>
                Engineering is the core of JSE. We do not simply model — we design, calculate, and validate.
                Our MEP division provides a complete multi-disciplinary service led by highly experienced professionals capable of taking a project from a blank page through to final Issued for Construction (IFC) status.
              </p>
              <p>
                We deliver fully constructible engineering information for contractors while maintaining design integrity for consultants. JSE provides equal, specialized support to both Design Consultants and MEP Contractors, ensuring coordinated, code-compliant, and execution-ready building services.
              </p>
            </div>
          </div>
          <div className="arch-what-image-wrapper">
            <div className="arch-image-back"></div>
            <img src={mepAboutImage} alt="About MEP Design" className="arch-what-img" loading="lazy" decoding="async" />
          </div>
        </div>
      </section>

      {/* --- NEW V2 SECTIONS START --- */}

      {/* 2. Strategic Partnerships (Split Screen Design based on Virtual Team) */}
      <section className="mep-support-section">
        {/* Consultants Left */}
        <div className="mep-support-block support-block-left">
          <span className="mep-support-label">Strategic Partnerships</span>
          <h2 className="mep-support-title">For Consultants<br />The Design Development Partner</h2>
          <p className="mep-support-desc">
            We act as your Design Brain, providing the technical depth and man-hour capacity needed to progress from concept to IFC. We take architectural intent and develop all required engineering calculations, system sizing, code-compliant BIM models, and 100% coordination across all building services disciplines.
          </p>
        </div>

        {/* Contractors Right */}
        <div className="mep-support-block support-block-right">
          <span className="mep-support-label" style={{ color: '#60a5fa' }}>Equal Contribution</span>
          <h2 className="mep-support-title">For Contractors<br />The Construction Execution Partner</h2>
          <p className="mep-support-desc">
            We provide the engineering brainpower and high-detail BIM deliverables required for error-free site installation. We perform complete audits of IFC drawings, upgrade models to LOD 400 (shop drawings) / LOD 500 (as-built), and resolve constructability issues proactively to protect project budgets.
          </p>
        </div>
      </section>

      {/* 3. Full MEP Technical Spectrum */}
      <section className="arch-services-section" style={{ background: '#0B1221' }}>
        <div className="arch-services-container">
          <div className="arch-services-header">
            <span className="arch-services-tagline">CORE EXPERTISE</span>
            <h2 className="arch-services-title">Full MEP Technical Spectrum</h2>
            <p style={{ color: '#94a3b8', fontSize: '1.15rem', maxWidth: '800px', margin: '1rem auto 0', lineHeight: 1.6 }}>
              Our expertise spans the entire building services lifecycle, adhering to international standards such as ASHRAE, NFPA, IEC, and applicable local authority regulations.
            </p>
          </div>

          <div className="mep-expert-grid">
            {MEP_TECHNICAL_SPECTRUM.map((service, index) => (
              <div key={index} className="mep-expert-card">
                <div className={`mep-expert-icon mep-icon-color-${(index % 6) + 1}`}>
                  {service.icon}
                </div>
                <div className="mep-expert-content">
                  <h3 className="mep-expert-title">{service.title}</h3>
                  <p className="mep-expert-desc">{service.desc}</p>
                </div>
                <div className={`mep-expert-pattern mep-pattern-${(index % 6) + 1}`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Sector Expertise (Marquee Carousel) */}
      <section className="mep-carousel-section" style={{ background: '#071230' }}>
        <div className="mep-carousel-header">
          <span className="mep-carousel-tagline">MULTI-DISCIPLINARY</span>
          <h2 className="mep-carousel-title" style={{ fontSize: '2.5rem' }}>Sector Expertise in Mega-Scale Infrastructure</h2>
          <p style={{ color: '#94a3b8', fontSize: '1.15rem', maxWidth: '700px', margin: '1.5rem auto 0 auto' }}>
            Our MEP engineering teams specialize in protocols required for high-complexity, world-class projects across multiple sectors.
          </p>
        </div>

        <div className="mep-carousel-wrapper">
          <div className="mep-carousel-track">
            {/* Render array twice for infinite seamless loop */}
            {[...SECTOR_EXPERTISE, ...SECTOR_EXPERTISE].map((sector, index) => (
              <div key={index} className="mep-system-card" style={{ borderColor: 'rgba(59, 130, 246, 0.2)' }}>
                <div className="mep-system-icon-box" style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6' }}>
                  {sector.icon}
                </div>
                <h3 className="mep-system-title">{sector.name}</h3>
                <p className="mep-system-desc">{sector.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Engineering Tech Stack (Interactive & Animation Heavy) */}
      <section className="mep-tech-stack-section">
        {/* Animated Background Elements */}
        <div className="tech-bg-orb tech-orb-1"></div>
        <div className="tech-bg-orb tech-orb-2"></div>

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={{ fontSize: '0.9rem', fontWeight: 800, color: '#60a5fa', letterSpacing: '0.2em', textTransform: 'uppercase' }}>TOOLS & INNOVATION</span>
            <h2 style={{ fontFamily: "'delight', system-ui", fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', color: '#ffffff', marginTop: '1rem', textShadow: '0 0 30px rgba(59, 130, 246, 0.3)' }}>Our Engineering Technology Stack</h2>
            <p style={{ color: '#94a3b8', fontSize: '1.15rem', maxWidth: '800px', margin: '1.5rem auto 0', lineHeight: 1.6 }}>
              We utilize advanced engineering and BIM tools to ensure uncompromising accuracy, seamless compliance, and maximum efficiency throughout the design lifecycle.
            </p>
          </div>

          <div className="mep-tech-grid">
            {TECH_STACK.map((stack, idx) => (
              <div key={idx} className={`mep-tech-card tech-theme-${(idx % 4) + 1}`}>
                <div className="tech-card-inner">
                  {/* Front Side */}
                  <div className="tech-card-front">
                    <div className="tech-icon-wrapper">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                        <polyline points="2 17 12 22 22 17"></polyline>
                        <polyline points="2 12 12 17 22 12"></polyline>
                      </svg>
                    </div>
                    <h3 className="tech-discipline-front">{stack.discipline}</h3>
                  </div>
                  {/* Back Side */}
                  <div className="tech-card-back">
                    <h3 className="tech-discipline-back">{stack.discipline}</h3>
                    <div className="tech-software-list">
                      {stack.software.map((sw, sIdx) => (
                        <span key={sIdx} className="tech-software-tag">{sw}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. QA Protocols (Sticky) */}
      <section className="mep-why-section" style={{ background: '#f8fafc' }}>
        <div className="mep-why-container">
          <div className="mep-why-sticky-left">
            <div className="mep-why-header-content">
              <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#144AE0', letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', marginBottom: '1rem' }}>ROADMAP</span>
              <h2 className="mep-why-section-title">Project Protocols & Quality Assurance</h2>
              <p style={{ color: '#475569', fontSize: '1.1rem', marginTop: '1rem' }}>To protect technical integrity on every project, we follow a strict BIM implementation roadmap.</p>
            </div>
          </div>
          <div className="mep-why-cards-list">
            {QA_PROTOCOLS.map((step, index) => (
              <div key={index} className="mep-why-card" style={{ padding: '2rem', gap: '1rem' }}>
                <div className="mep-why-icon-wrapper" style={{ width: '50px', height: '50px' }}>
                  {step.icon}
                </div>
                <div className="mep-why-card-content">
                  <h3 className="mep-why-card-title">{step.title}</h3>
                  <p className="mep-why-card-desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- NEW V2 SECTIONS END --- */}



      {/* Additional Services Menu Section */}
      <section className="solutions-list-section">
        <motion.div
          className="solutions-list-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <div className="solutions-header-group">
            <h2 className="solutions-title">Additional Services You Can Benefit From</h2>
          </div>
          <div className="solutions-list-wrapper">
            {ADDITIONAL_SERVICES.map((item, index) => (
              <motion.div
                key={index}
                variants={itemFadeUp}
                className="solution-item-motion-wrapper"
              >
                <Link to={item.link} className="solution-list-item">
                  <span className="solution-list-text">{item.title}</span>
                  <span className="solution-list-arrow">→</span>
                  <div className="solution-item-img-wrapper">
                    <img src={item.img} alt={item.title} className="solution-item-img" loading="lazy" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

    </div >
  );
};

export default MEPDesign;
