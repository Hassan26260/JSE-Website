import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import StickyContact from '../../../components/StickyContact';
import './ArchitecturalBIM.css';
import heroImage from '../../../assets/images-home/architectural-bim.webp';

import whatIsImage from '../../../assets/other/Construction Company Plans A Sketch Of New Building Photo And Picture For Free Download - Pngtree.jpg';

// Portfolio Imports
// Portfolio Imports
import { ARCH_PROJECTS } from '../../../data/realPortfolio';


// Tech Logos removed

// Reuse images for services
import s1 from '../../../assets/images-home/skyscraper.webp';
import s2 from '../../../assets/images-home/architectural-bim.webp';
import s3 from '../../../assets/images-home/bim-modelling.webp';
import s4 from '../../../assets/images-home/mep-design.webp';
import s5 from '../../../assets/images-home/hvac-design.webp';
import s6 from '../../../assets/images-home/plumbing.webp';
import s7 from '../../../assets/images-home/electrical-system.webp';
// Reusing s6 or s4 for pure firefighting if specific image not found, defaulting to s4 (MEP) for now or similar.
import s8 from '../../../assets/images-home/hero-group-image.jpg'; // Placeholder for ELV if no specific image
import virtualEngImage from "../../../assets/images-home/home-new-img/virtual-t.JPG";
import secondmentImage from "../../../assets/images-home/secondament.JPG";

const SERVICES_DATA = [
  { title: "BIM Consulting", img: s1, desc: "Strategic BIM planning, standards development, and workflow optimization for efficient project execution." },
  { title: "Architectural Shop Drawings", img: s2, desc: "Highly detailed, contractor-ready drawings that translate design intent into precise fabrication and installation instructions." },
  { title: "Revit 3D Modeling Services", img: s3, desc: "Intelligent Revit-based BIM models enabling real-time coordination, automated documentation, and multi-disciplinary integration." },
  { title: "Architectural BIM & VDC", img: s4, desc: "Data-driven BIM and Virtual Design & Construction solutions that improve planning, coordination, and construction outcomes." },
  { title: "Utility Modeling", img: s5, desc: "Comprehensive modeling of underground and above-ground utilities—water, power, gas, and telecom—integrated with GIS." },
  { title: "Construction Documentation", img: s6, desc: "Accurate, data-rich BIM documentation including drawings, schedules, and specifications to reduce errors and rework." },
  { title: "BIM Clash Detection & Coordination", img: s1, desc: "Advanced clash detection using tools like Revit and Navisworks, supported by structured reports (CSV, PDF, HTML)." },
  { title: "BIM Visualization & Documentation", img: s2, desc: "High-quality BIM visualization that converts 2D concepts into intelligent, data-rich 3D models for better decision-making." },
  { title: "BIM Quantity Take-Offs & 5D BIM", img: s3, desc: "Automated material quantity extraction for accurate cost estimation, budgeting, and construction planning." },
  { title: "Collaboration & Coordination", img: s4, desc: "Structured documentation workflows that support real-time collaboration, accountability, and design approvals." },
  { title: "Architectural 3D Modeling Services", img: s5, desc: "Photorealistic exterior and interior models, walkthroughs, animations, and floor plans that bridge concept and construction." },
  { title: "CAD Drafting Services", img: s6, desc: "Precise 2D and 3D CAD drawings using AutoCAD and Revit, supporting architectural, engineering, and MEP workflows." }
];

const ICONIC_PROJECTS = [
  { title: "Carlton House Terrace – London, UK", img: s1 },
  { title: "Reem Hills Twin Villas & Townhouses", img: s2 },
  { title: "Al-Nama General Hospital", img: s3 },
  { title: "Al Ain Hospital – Abu Dhabi", img: s4 },
  { title: "Sharjah International Airport Expansion (SIAEP)", img: s5 }
];


const CHOOSE_JSE_DATA = [
  {
    title: "Innovative, Future-Ready",
    desc: "BIM solutions that leverage the latest technology to create innovative, future-ready architectural designs."
  },
  {
    title: "Holistic Approach",
    desc: "A multidisciplinary design approach ensuring seamless coordination between all building systems for optimal functionality."
  },
  {
    title: "Enhanced Visualization",
    desc: "Clear and comprehensive visualization of your project, providing technical clarity and allowing you to see the final product before construction."
  },
  {
    title: "Reduced Costs",
    desc: "Optimized workflows that save time and money by reducing waste and improving overall project efficiency."
  }
];

const CHOOSE_JSE_DATA_2 = [
  {
    title: "Client-Centric Collaboration",
    desc: "We work closely with you throughout the design process, ensuring your vision is fully realized and you are involved every step of the way."
  },
  {
    title: "Full Compliance",
    desc: "Our designs adhere to all local and international building codes and regulations, ensuring full regulatory compliance and safety."
  },
  {
    title: "Rigorous Quality Assurance",
    desc: "We maintain strict quality control throughout the design process, ensuring every aspect meets the highest standards of excellence."
  },
  {
    title: "Sustainable Design",
    desc: "We incorporate sustainable and energy-efficient practices into our designs to help you achieve environmental goals."
  }
];

// BIM_TECH_DATA removed

const ADDITIONAL_SERVICES = [
  { title: "Virtual Team for Hire", link: "/services/virtual-team", img: virtualEngImage },
  { title: "HVAC Design", link: "/services/design/hvac-design", img: s5 },
  { title: "Plumbing & Public Health", link: "/services/design/plumbing-public-health", img: s6 },
  { title: "Firefighting Design", link: "/services/design/firefighting-design", img: s4 },
  { title: "Electrical System Design", link: "/services/design/electrical-system-design", img: s7 },
  { title: "ELV (Extra Low Voltage)", link: "/services/design/elv", img: s4 },
  { title: "Architectural BIM", link: "/services/design/architectural-bim", img: s2 },
  { title: "Steel Structure Detailing", link: "/services/design/steel-structure-detailing", img: s5 },
  { title: "Structural", link: "/services/design/structural", img: s3 },
  { title: "Secondment Team", link: "/services/secondment-team", img: secondmentImage }
];

const ArchitecturalBIM = () => {
  // Carousel State
  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % ICONIC_PROJECTS.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + ICONIC_PROJECTS.length) % ICONIC_PROJECTS.length);
  };

  const [formData, setFormData] = useState({
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
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const stickyContactRef = useRef(null);

  const scrollToForm = () => {
    stickyContactRef.current?.open();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="arch-bim-page">
      {/* Hero Section */}
      <section className="arch-hero-section">
        <div className="arch-hero-overlay"></div>
        <div className="arch-hero-content">
          <div className="arch-breadcrumbs">
            Services &gt; Design Services &gt; <span>Architectural BIM</span>
          </div>
          <h1 className="arch-hero-title">Architectural BIM Services</h1>
          <p className="arch-hero-subtitle" style={{ fontSize: '1rem', marginTop: '2rem', maxWidth: '800px', lineHeight: '1.6' }}>
            JSE Engineering Pvt Ltd is a leading Architectural BIM Design Consultancy based in Chennai, India, with over a decade of proven expertise in delivering high-quality Building Information Modeling (BIM) solutions. Today, we support projects worldwide—confidently redefining industry benchmarks through innovation, precision, and future-ready BIM workflows.
          </p>
        </div>
      </section >

      {/* Core Pillars Section (4 Columns) */}
      < section className="arch-pillars-section" >
        <div className="arch-pillars-container">

          {/* Column 1: Precision & Control */}
          <div className="arch-pillar-col">
            <div>
              <h2 className="arch-pillar-title">Precision & Control</h2>
              <p className="arch-pillar-desc">
                At JSE Engineering, precision means that every BIM model element reflects real-world dimensions, specifications, and performance data. Our Architectural BIM workflow ensures technical accuracy and construction readiness at every stage.
              </p>
            </div>
            <span className="arch-pillar-num">01</span>
          </div>

          {/* Column 2: Collaborative Workflows */}
          <div className="arch-pillar-col">
            <div>
              <h2 className="arch-pillar-title">Collaborative Workflows</h2>
              <p className="arch-pillar-desc">
                Architectural BIM enables seamless collaboration between architects, engineers, consultants, and stakeholders. By integrating architectural intent, structural systems, and MEP coordination into a unified digital model, we ensure design consistency and informed decision-making.
              </p>
            </div>
            <span className="arch-pillar-num">02</span>
          </div>

          {/* Column 3: Project Overview */}
          <div className="arch-pillar-col">
            <div>
              <h2 className="arch-pillar-title">Refined Project Overview</h2>
              <p className="arch-pillar-desc">
                Effective BIM collaboration is the foundation of our construction workflows. By leveraging a centralized Common Data Environment (CDE), all stakeholders contribute to a federated, intelligent BIM model—ensuring design intent is preserved from concept to facility management.
              </p>
            </div>
            <span className="arch-pillar-num">03</span>
          </div>

          {/* Column 4: Advanced Solutions */}
          <div className="arch-pillar-col">
            <div>
              <h2 className="arch-pillar-title">Advanced BIM Solutions</h2>
              <p className="arch-pillar-desc">
                With over 20 years of combined expertise in construction and technology, JSE Engineering delivers comprehensive BIM solutions. Our integration of hands-on field experience with advanced Virtual Design & Construction (VDC) methodologies ensures precision across every deliverable.
              </p>
            </div>
            <span className="arch-pillar-num">04</span>
          </div>

        </div>
      </section >

      {/* Global Project Experience Section - Carousel Redesign */}
      <section className="arch-what-section">
        <div className="arch-what-container" style={{ display: 'block' }}>

          {/* Centered Heading */}
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="arch-what-title" style={{ fontFamily: 'delight', fontSize: '3.5rem', color: '#144AE0', textAlign: 'center' }}>
              GLOBAL PROJECT EXPERIENCE
            </h2>
          </div>

          {/* Carousel Grid */}
          <div className="arch-carousel-wrapper" style={{ minHeight: '400px', position: 'relative' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject}
                className="arch-carousel-grid"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}
              >
                {/* Left: Text Content */}
                <div className="arch-carousel-content">
                  <h3 className="arch-service-title" style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#0f172a' }}>
                    {ICONIC_PROJECTS[currentProject].title}
                  </h3>
                  <p className="arch-what-desc" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#475569' }}>
                    {/* Description Mapping based on project index/title since ICONIC_PROJECTS only has title/img. 
                        In a real scenario, descriptions should be in the data array. 
                        Using the static text from previous code for the 2 known projects, and generic for others. */}
                    {currentProject === 3 ? (
                      "The Al Ain Hospital project is one of the most significant healthcare developments in the UAE, designed to meet international medical standards. JSE Engineering supported the project through advanced Architectural BIM visualization, enhancing patient experience and departmental navigation using interactive digital applications integrated within the BIM environment."
                    ) : currentProject === 0 ? (
                      "Carlton House Terrace is an iconic architectural landmark located in the St James’s district of Westminster, London. The project features elegant white stucco terraces overlooking The Mall and St. James’s Park. Our BIM approach ensured heritage-sensitive modeling, precision detailing, and seamless coordination for this prestigious development."
                    ) : (
                      `JSE Engineering delivered comprehensive BIM solutions for the ${ICONIC_PROJECTS[currentProject].title}, ensuring precision in coordination, clash detection, and construction documentation to meet global standards.`
                    )}
                  </p>
                </div>

                {/* Right: Image */}
                <div className="arch-carousel-image">
                  <img
                    src={ICONIC_PROJECTS[currentProject].img}
                    alt={ICONIC_PROJECTS[currentProject].title}
                    style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Divider Line */}
          <div className="arch-carousel-divider" style={{ width: '100%', height: '1px', backgroundColor: '#144AE0', marginTop: '3rem', opacity: 0.3 }}></div>

          {/* Navigation Arrows */}
          <div className="arch-carousel-controls" style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
            <button
              onClick={prevProject}
              className="arch-nav-btn"
              style={{ background: 'transparent', border: '1px solid #144AE0', borderRadius: '50%', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#144AE0', transition: 'all 0.3s ease' }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
            </button>
            <button
              onClick={nextProject}
              className="arch-nav-btn"
              style={{ background: 'transparent', border: '1px solid #144AE0', borderRadius: '50%', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#144AE0', transition: 'all 0.3s ease' }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button>
          </div>

        </div>
      </section >






      <section className="arch-services-section">
        <div className="arch-services-container">
          <div className="arch-services-header">
            <span className="arch-services-tagline">OUR EXPERTISE</span>
            <h2 className="arch-services-title">Architectural BIM Services We Offer</h2>
            <p className="arch-services-desc">
              With JSE’s Architectural BIM services, you gain more than just a 3D model—you gain a strategic project tool that improves design accuracy, collaboration, and execution efficiency.
            </p>
          </div>

          <div className="arch-services-grid">
            {SERVICES_DATA.map((service, index) => (
              <div key={index} className="arch-service-card">
                <div className="arch-card-bg" style={{ backgroundImage: `url(${service.img})` }}></div>
                <div className="arch-card-overlay"></div>
                <div className="arch-card-content">
                  <h3 className="arch-service-title">{service.title}</h3>
                  <p className="arch-service-card-desc">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <StickyContact ref={stickyContactRef}>
        <div className="form-container">
          {/* Left Side: Title & Info */}
          <div className="form-info-side">
            <h2 className="form-heading">Start Your Project</h2>
            <p className="form-subtext">
              Ready to optimize your workflow with JSE's Architectural BIM services? Fill out the details and we'll get in touch with you shortly.
            </p>

            <div className="form-contact-details">
              <p className="form-email">info@jseengineering.com</p>
            </div>

            <div className="form-socials">
              <div className="social-circle">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </div>
              <div className="social-circle">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </div>
              <div className="social-circle">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="form-input-side">
            <form onSubmit={handleSubmit} className="internship-form">
              <div className="form-group">
                <label>Your Name*</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="form-input-line"
                />
              </div>

              <div className="form-group">
                <label>Your Mail ID*</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="form-input-line"
                />
              </div>

              <div className="form-group">
                <label>Message*</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  required
                  className="form-input-line"
                ></textarea>
              </div>

              <button type="submit" className="form-submit-btn">Submit</button>
            </form>
          </div>
        </div>
      </StickyContact>

      {/* Understanding BIM Levels Of Development Section */}
      <section className="arch-lod-section">
        <div className="arch-lod-container">
          <div className="arch-lod-header">
            <span className="arch-lod-tagline">BIM MATURITY</span>
            <h2 className="arch-lod-heading">Understanding BIM Levels Of Development</h2>
            <p className="arch-lod-intro">
              Dive into the critical stages of BIM modeling with JSE, where LOD 100, 200, 300, 350, 400, and 500 guide our precision in design, fabrication, and as-built accuracy, ensuring your project’s success from conception to completion.
            </p>
          </div>

          <div className="arch-lod-grid">
            {/* Column 1: LOD 300 */}
            <div className="arch-lod-item">
              <div className="arch-lod-icon-box">
                {/* Cube Icon */}
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
              </div>
              <h3 className="arch-lod-title">LOD 300</h3>
              <p className="arch-lod-desc">
                Represents a design-level model with accurate geometry and specific dimensions for components, suitable for coordinating and constructing elements.
              </p>
            </div>

            {/* Column 2: LOD 400 */}
            <div className="arch-lod-item">
              <div className="arch-lod-icon-box">
                {/* Layers/Construction Icon */}
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
              </div>
              <h3 className="arch-lod-title">LOD 400</h3>
              <p className="arch-lod-desc">
                A fabrication-ready model with detailed geometry and information, enabling precise assembly, installation, and construction of components.
              </p>
            </div>

            {/* Column 3: LOD 500 */}
            <div className="arch-lod-item">
              <div className="arch-lod-icon-box">
                {/* Checked Building/As-Built Icon */}
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              </div>
              <h3 className="arch-lod-title">LOD 500</h3>
              <p className="arch-lod-desc">
                The as-built model reflecting the final, field-verified condition of the building, including all relevant specifications and documentation for facility management.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Worldwide Iconic Projects Section */}
      <section className="iconic-projects-section">
        <div className="iconic-container">
          <div className="iconic-header">
            <span className="iconic-tagline">BIM projects</span>
            <h2 className="iconic-heading">Worldwide Iconic Projects</h2>
          </div>
        </div>

        {/* Marquee Carousel */}
        <div className="iconic-marquee-wrapper">
          <div className="iconic-marquee-track">
            {/* Set 1 */}
            {ICONIC_PROJECTS.map((project, index) => (
              <div key={`iconic-${index}`} className="iconic-card">
                <img src={project.img} alt={project.title} className="iconic-img" />
                <div className="iconic-overlay">
                  <div className="iconic-content">
                    <h3 className="iconic-title">{project.title}</h3>
                    <a href="/portfolio" className="iconic-cta">
                      Know More <span className="arrow">→</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
            {/* Set 2 (Duplicate for loop) */}
            {ICONIC_PROJECTS.map((project, index) => (
              <div key={`iconic-dup-${index}`} className="iconic-card">
                <img src={project.img} alt={project.title} className="iconic-img" />
                <div className="iconic-overlay">
                  <div className="iconic-content">
                    <h3 className="iconic-title">{project.title}</h3>
                    <a href="/portfolio" className="iconic-cta">
                      Know More <span className="arrow">→</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose JSE Section */}
      <section className="arch-choose-section">
        <div className="arch-choose-container">
          {/* Left Column: Text */}
          <div className="arch-choose-left">
            <span className="arch-choose-tagline">WHY CHOOSE US</span>
            <h2 className="arch-choose-heading">Why Choose JSE for Architectural BIM Engineers?</h2>
            <p className="arch-choose-desc">
              Choosing JSE Engineering means partnering with a BIM team committed to precision, innovation, and efficiency.
            </p>
          </div>

          {/* Right Column: Cards Grid */}
          <div className="arch-choose-right">
            {CHOOSE_JSE_DATA.map((item, index) => (
              <div key={index} className="arch-choose-card">
                <h3 className="arch-choose-card-title">{item.title}</h3>
                <p className="arch-choose-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose JSE Section (Part 2 - Reversed) */}
      <section className="arch-choose-section">
        <div className="arch-choose-container">
          {/* Left Column: Cards Grid (Visually Left) */}
          <div className="arch-choose-right">
            {CHOOSE_JSE_DATA_2.map((item, index) => (
              <div key={index} className="arch-choose-card">
                <h3 className="arch-choose-card-title">{item.title}</h3>
                <p className="arch-choose-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Right Column: Text (Visually Right) */}
          <div className="arch-choose-left">
            <p className="arch-choose-desc">
              Backed by a strong portfolio of iconic global projects, our Architectural BIM services empower architects, developers, consultants, and contractors to achieve greater design clarity, coordination efficiency, and construction accuracy from concept to completion.
            </p>
          </div>
        </div>
      </section>

      {/* Technologies Section Removed */}

      {/* Additional Services Menu Section */}
      <section className="solutions-list-section">
        <div className="solutions-list-container">
          <div className="solutions-header-group">
            <h2 className="solutions-title">Additional Services You Can Benefit From</h2>
          </div>
          <div className="solutions-list-wrapper">
            {ADDITIONAL_SERVICES.map((item, index) => (
              <a key={index} href={item.link} className="solution-list-item">
                <span className="solution-list-text">{item.title}</span>
                <span className="solution-list-arrow">→</span>
                <div className="solution-item-img-wrapper">
                  <img src={item.img} alt={item.title} className="solution-item-img" loading="lazy" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

    </div >
  );
}; // End of Component

export default ArchitecturalBIM;
