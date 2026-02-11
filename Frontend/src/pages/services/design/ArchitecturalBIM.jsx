import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import StickyContact from '../../../components/StickyContact';
import './ArchitecturalBIM.css';
import heroImage from '../../../assets/images-home/home-new-img/BIM.webp';

import whatIsImage from '../../../assets/Architectural-bim/concept.webp';

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

// Standardized Images for Additional Services (Matching Home.jsx)
import mepImg from '../../../assets/images-home/home-new-img/MEP.png';
import archImg from '../../../assets/images-home/home-new-img/BIM.webp';
import structImg from '../../../assets/images-home/home-new-img/structural-eng.webp';
import steelImg from '../../../assets/images-home/home-new-img/steel-detail.jfif';
import infraImg from '../../../assets/images-home/home-new-img/infrastructural.webp';
import virtualEngImage from '../../../assets/images-home/home-new-img/virtual-team.jpg';
import secondmentImage from '../../../assets/images-home/home-new-img/secondment.jpg.jpeg';

// Expertise Images
import bimConsultingImg from '../../../assets/Architectural-bim/OUR EXPERTISE/BIM Consulting.png';
import shopDrawingImg from '../../../assets/Architectural-bim/OUR EXPERTISE/Shop Drawing.png';
import revit3DImg from '../../../assets/Architectural-bim/OUR EXPERTISE/Revit 3D Service.png';
import archBimVdcImg from '../../../assets/Architectural-bim/OUR EXPERTISE/Architectural BIMVDC.png';
import utilityModelingImg from '../../../assets/Architectural-bim/OUR EXPERTISE/Utility Modeling.png';
import constDocImg from '../../../assets/Architectural-bim/OUR EXPERTISE/Construction Documentation.png';
import clashDetectImg from '../../../assets/Architectural-bim/OUR EXPERTISE/BIM Clash Detection Documentation.png';
import bimVisImg from '../../../assets/Architectural-bim/OUR EXPERTISE/BIM Visualization & Documentation.png';
import bimQtoImg from '../../../assets/Architectural-bim/OUR EXPERTISE/BIM Quantity Takeoffs.png';
import collabCoordImg from '../../../assets/Architectural-bim/OUR EXPERTISE/Collaboration and Coordination Documentation.png';
import arch3DImg from '../../../assets/Architectural-bim/OUR EXPERTISE/Architectural 3D Modeling Services.png';
import cadDraftingImg from '../../../assets/Architectural-bim/OUR EXPERTISE/CAD Drafting Services.png';

const SERVICES_DATA = [
  { title: "BIM Consulting", img: bimConsultingImg, desc: "Strategic BIM planning, standards development, and workflow optimization for efficient project execution." },
  { title: "Architectural Shop Drawings", img: shopDrawingImg, desc: "Highly detailed, contractor-ready drawings that translate design intent into precise fabrication and installation instructions." },
  { title: "Revit 3D Modeling Services", img: revit3DImg, desc: "Intelligent Revit-based BIM models enabling real-time coordination, automated documentation, and multi-disciplinary integration." },
  { title: "Architectural BIM & VDC", img: archBimVdcImg, desc: "Data-driven BIM and Virtual Design & Construction solutions that improve planning, coordination, and construction outcomes." },
  { title: "Utility Modeling", img: utilityModelingImg, desc: "Comprehensive modeling of underground and above-ground utilities—water, power, gas, and telecom—integrated with GIS." },
  { title: "Construction Documentation", img: constDocImg, desc: "Accurate, data-rich BIM documentation including drawings, schedules, and specifications to reduce errors and rework." },
  { title: "BIM Clash Detection & Coordination", img: clashDetectImg, desc: "Advanced clash detection using tools like Revit and Navisworks, supported by structured reports (CSV, PDF, HTML)." },
  { title: "BIM Visualization & Documentation", img: bimVisImg, desc: "High-quality BIM visualization that converts 2D concepts into intelligent, data-rich 3D models for better decision-making." },
  { title: "BIM Quantity Take-Offs & 5D BIM", img: bimQtoImg, desc: "Automated material quantity extraction for accurate cost estimation, budgeting, and construction planning." },
  { title: "Collaboration & Coordination", img: collabCoordImg, desc: "Structured documentation workflows that support real-time collaboration, accountability, and design approvals." },
  { title: "Architectural 3D Modeling Services", img: arch3DImg, desc: "Photorealistic exterior and interior models, walkthroughs, animations, and floor plans that bridge concept and construction." },
  { title: "CAD Drafting Services", img: cadDraftingImg, desc: "Precise 2D and 3D CAD drawings using AutoCAD and Revit, supporting architectural, engineering, and MEP workflows." }
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

// Additional Services Data (Standardized to Home.jsx Solutions)
const ADDITIONAL_SERVICES = [
  { title: "MEP Engineering", desc: "Comprehensive MEP solutions including HVAC, Electrical, and Firefighting.", link: "/services/design/mep-design", img: mepImg },
  { title: "Architectural BIM", desc: "Revolutionizing architecture with detailed BIM models.", link: "/services/design/architectural-bim", img: archImg },
  { title: "Structural Engineering", desc: "Advanced structural engineering and analysis.", link: "/services/design/structural", img: structImg },
  { title: "Steel Structure Detailing", desc: "Accurate Tekla detailing and steel structures.", link: "/services/design/steel-structure-detailing", img: steelImg },
  { title: "Infrastructural Services", desc: "Robust infrastructure solutions for modern communities.", link: "/services/infrastructural-services", img: infraImg },
  { title: "Virtual Team for Hire", desc: "Hire own remote offshore architect team for modular construction needs.", link: "/services/virtual-team", img: virtualEngImage },
  { title: "Secondment Team", desc: "Get on-demand access to our pool of experienced professionals.", link: "/services/secondment-team", img: secondmentImage }
];

// Project Images
import alAinImg from '../../../assets/Architectural-bim/sunset.jpg';
import carltonImg from '../../../assets/Architectural-bim/cartton.webp';

const PROJECT_EXPERIENCE = [
  {
    title: "Carlton House Terrace – London, UK",
    desc: "Carlton House Terrace is an iconic architectural landmark located in the St James’s district of Westminster, London. The project features elegant white stucco terraces overlooking The Mall and St. James’s Park. Our BIM approach ensured heritage-sensitive modeling, precision detailing, and seamless coordination for this prestigious development.",
    img: carltonImg
  },
  {
    title: "Al Ain Hospital – Abu Dhabi, UAE",
    desc: "The Al Ain Hospital project is one of the most significant healthcare developments in the UAE, designed to meet international medical standards. JSE Engineering supported the project through advanced Architectural BIM visualization, enhancing patient experience and departmental navigation using interactive digital applications integrated within the BIM environment.",
    img: alAinImg
  }
];

const ArchitecturalBIM = () => {
  const contactRef = useRef(null);

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const handleNextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % PROJECT_EXPERIENCE.length);
  };

  const handlePrevProject = () => {
    setCurrentProjectIndex((prev) => (prev - 1 + PROJECT_EXPERIENCE.length) % PROJECT_EXPERIENCE.length);
  };

  const scrollToForm = () => {
    contactRef.current?.open();
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
      {/* New Split Hero Section */}
      <div className="service-hero-split">
        <div className="hero-text-content">
          <span className="hero-small-label">Design Services</span>
          <h1 className="hero-title-split">Architectural BIM</h1>
          <p className="hero-desc-split">
            Comprehensive Architectural BIM services that bridge the gap between design and construction, ensuring accuracy, efficiency, and innovative realization of your vision.
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
          <img src={heroImage} alt="Architectural BIM" className="hero-img-split" loading="eager" />
        </div>
      </div>

      {/* Core Pillars Section (4 Columns) */}
      <section className="arch-pillars-section">
        <div className="arch-pillars-container">

          {/* Column 1: Visualization */}
          <div className="arch-pillar-col">
            <div>
              <h2 className="arch-pillar-title">Visualization</h2>
              <p className="arch-pillar-desc">
                We transform architectural concepts into precise 3D BIM models, giving you a clear and detailed digital view of your project from the earliest design stages. This allows better understanding, review, and informed decision-making before construction begins.
              </p>
            </div>
            <span className="arch-pillar-num">01</span>
          </div>

          {/* Column 2: Precision & Control */}
          <div className="arch-pillar-col">
            <div>
              <h2 className="arch-pillar-title">Precision & Control</h2>
              <p className="arch-pillar-desc">
                Our Architectural BIM services ensure accuracy across every element of the design. By identifying conflicts and potential issues early, we significantly reduce rework, delays, and unexpected costs during execution.
              </p>
            </div>
            <span className="arch-pillar-num">02</span>
          </div>

          {/* Column 3: Collaboration */}
          <div className="arch-pillar-col">
            <div>
              <h2 className="arch-pillar-title">Collaboration</h2>
              <p className="arch-pillar-desc">
                BIM enables seamless coordination between architects, engineers, and stakeholders. Structural systems, architectural intent, and aesthetic details are integrated into a unified model, ensuring consistency and clarity across the project lifecycle.
              </p>
            </div>
            <span className="arch-pillar-num">03</span>
          </div>

          {/* Column 4: Advanced BIM Solutions */}
          <div className="arch-pillar-col">
            <div>
              <h2 className="arch-pillar-title">Advanced BIM Solutions</h2>
              <p className="arch-pillar-desc">
                By leveraging cutting-edge BIM workflows, including Point Cloud to BIM, we enhance planning efficiency, optimize resources, and deliver high-quality outcomes. JSE Engineering provides a strong digital foundation for successful and future-ready projects.
              </p>
            </div>
            <span className="arch-pillar-num">04</span>
          </div>

        </div>
      </section>

      {/* What is Architectural BIM Section */}
      <section className="arch-what-section">
        <div className="arch-what-container">
          {/* Text Side */}
          <div className="arch-what-text">
            <span className="arch-what-tagline">THE CONCEPT</span>
            <h2 className="arch-what-title">What is Architectural BIM?</h2>
            <p className="arch-what-desc">
              Architectural BIM is a digital representation of the physical and functional characteristics of a building. It goes beyond traditional 2D drawings by creating a 3D model that integrates all aspects of the design process.
            </p>
            <p className="arch-what-desc">
              This model becomes a shared resource for decision-making, providing accurate data throughout the building's lifecycle.
            </p>
          </div>
          {/* Image Side */}
          <div className="arch-what-image-wrapper">
            <div className="arch-image-back"></div>
            <img src={whatIsImage} alt="What is Architectural BIM" className="arch-what-img"
              loading="lazy"
              decoding="async" />
          </div>
        </div>
      </section>


      <section className="arch-services-section">
        <div className="arch-services-container">
          <div className="arch-services-header">
            <span className="arch-services-tagline">OUR EXPERTISE</span>
            <h2 className="arch-services-title">Our Architectural BIM Services Include</h2>
            <p className="arch-services-desc">
              Transform your architectural projects with JSE's cutting-edge BIM solutions.
              Our BIM architectural services encompass comprehensive solutions tailored to meet the needs of modern construction projects. We specialize in:
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
      <StickyContact ref={contactRef}>
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
            <form className="internship-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label>Your Name*</label>
                <input type="text" required className="form-input-line" />
              </div>
              <div className="form-group">
                <label>Your Mail ID*</label>
                <input type="email" required className="form-input-line" />
              </div>
              <div className="form-group">
                <label>Message*</label>
                <textarea rows="4" required className="form-input-line"></textarea>
              </div>
              <button type="submit" className="form-submit-btn">Submit</button>
            </form>
          </div>
        </div>
      </StickyContact>



      {/* Global Project Experience Section - Carousel */}
      <section className="arch-project-carousel-section">
        <div className="arch-project-carousel-container">
          <div className="arch-services-header">

            <h2 className="arch-services-title" style={{ fontFamily: 'Delight, sans-serif' }}>Global Project Experience</h2>
          </div>

          <div className="arch-carousel-wrapper">
            <AnimatePresence mode='wait'>
              <motion.div
                key={currentProjectIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="arch-carousel-slide"
              >
                {/* Left: Text Content */}
                <div className="arch-carousel-text-content">
                  <h3 className="arch-carousel-project-title">
                    {PROJECT_EXPERIENCE[currentProjectIndex].title}
                  </h3>
                  <p className="arch-carousel-project-desc">
                    {PROJECT_EXPERIENCE[currentProjectIndex].desc}
                  </p>
                </div>

                {/* Right: Image */}
                <div className="arch-carousel-image-wrapper">
                  <img
                    src={PROJECT_EXPERIENCE[currentProjectIndex].img}
                    alt={PROJECT_EXPERIENCE[currentProjectIndex].title}
                    className="arch-carousel-image"
                  />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons (Bottom Left) */}
            <div className="arch-carousel-controls">
              <button
                className="arch-carousel-btn prev-btn"
                onClick={handlePrevProject}
                aria-label="Previous Project"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
              </button>
              <button
                className="arch-carousel-btn next-btn"
                onClick={handleNextProject}
                aria-label="Next Project"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </button>
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

    </div>
  );
};

export default ArchitecturalBIM;
