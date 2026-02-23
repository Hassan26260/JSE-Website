import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import './ArchitecturalBIM.css';

import whatIsImage from '../../../assets/images-home/bim-modelling.webp';

// Portfolio Imports
import { MEP_PROJECTS } from '../../../data/realPortfolio';


// Standardized Images for Additional Services (Matching Home.jsx)
import mepImg from '../../../assets/images-home/home-new-img/MEP.png';
import archImg from '../../../assets/images-home/home-new-img/BIM.webp';
import structImg from '../../../assets/images-home/home-new-img/structural-eng.webp';
import steelImg from '../../../assets/images-home/home-new-img/steel-detail.jfif';
import infraImg from '../../../assets/images-home/home-new-img/infrastructural.webp';
import virtualEngImage from '../../../assets/images-home/home-new-img/virtual-team.jpg';
import secondmentImage from '../../../assets/images-home/home-new-img/secondment.jpg.png';

// Reuse images for services
import s1 from '../../../assets/images-home/skyscraper.webp';
import s2 from '../../../assets/images-home/architectural-bim.webp';
import s3 from '../../../assets/images-home/bim-modelling.webp';
import s4 from '../../../assets/images-home/mep-design.webp';
import s5 from '../../../assets/images-home/hvac-design.webp';
import s6 from '../../../assets/images-home/plumbing.webp';
import s7 from '../../../assets/images-home/electrical-system.webp';
import s8 from '../../../assets/images-home/hero-group-image.jpg'; // Placeholder for ELV if no specific image


import '../../../styles/ServiceExpertise.css';

const getIcon = (index) => {
  const icons = [
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>, // Layers
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>, // Wrench
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>, // Monitor
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>, // Shield
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>, // Zap
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg> // Cube
  ];
  return icons[index % icons.length];
};

const SERVICES_DATA = [
  { title: "BIM consulting", img: s1, desc: "Strategic guidance for successful BIM adoption in HVAC projects." },
  { title: "Shop Drawing", img: s2, desc: "Precise HVAC shop drawings for fabrication and installation." },
  { title: "Revit 3D Service", img: s3, desc: "Detailed 3D HVAC modeling using Autodesk Revit for accurate coordination." },
  { title: "HVAC BIM/VDC", img: s4, desc: "Virtual Design and Construction for better HVAC planning and execution." },
  { title: "HVAC 3D modeling", img: s5, desc: "High-fidelity 3D models for visualization and clash detection." },
  { title: "CAD drafting", img: s6, desc: "Accurate 2D drafting and documentation for HVAC systems." },
  { title: "Utility Modeling", img: s1, desc: "Comprehensive modeling of MEP and utility systems including HVAC." },
  { title: "Construction Documentation", img: s2, desc: "Complete sets of HVAC construction plans and details." },
  { title: "BIM Clash Detection", img: s3, desc: "Identifying and resolving HVAC conflicts before construction." },
  { title: "BIM Visualization", img: s4, desc: "Photorealistic renderings and walkthroughs of HVAC designs." },
  { title: "BIM Quantity Takeoffs", img: s5, desc: "Automated material quantity extraction for HVAC components." },
  { title: "Collaboration and Coordination", img: s6, desc: "Streamlined team workflows and communication for MEP projects." }
];

const ICONIC_PROJECTS = MEP_PROJECTS.slice(0, 6).map(p => ({
  title: p.title,
  img: p.image
}));


const CHOOSE_JSE_DATA = [
  {
    title: "Innovative Solutions",
    desc: "Our HVAC design engineers use the latest technology to create innovative and highly detailed 3D models that bring your vision to life."
  },
  {
    title: "Holistic Approach",
    desc: "JSE integrate all aspects of HVAC design, ensuring seamless coordination between different building systems for optimal functionality and aesthetics."
  },
  {
    title: "Enhanced Visualization",
    desc: "Our detailed BIM models provide a clear and comprehensive visualization of your project, allowing you to see the final product before construction begins."
  },
  {
    title: "Cost Efficiency",
    desc: "Our BIM solutions help you save time and money by optimizing design processes, reducing waste, and improving overall project efficiency."
  }
];

const CHOOSE_JSE_DATA_2 = [
  {
    title: "Client Collaboration",
    desc: "JSE work closely with you throughout the design process, ensuring that your vision is fully realized and that you are involved every step of the way."
  },
  {
    title: "Regulatory Compliance",
    desc: "Our designs adhere to all local and international building codes and standards, ensuring compliance and safety for your project."
  },
  {
    title: "Quality Assurance",
    desc: "JSE maintain rigorous quality control throughout the design process, ensuring that every aspect of your project meets the highest standards of excellence."
  },
  {
    title: "Sustainable Designs",
    desc: "We incorporate sustainable practices into our designs, helping you achieve energy efficiency and environmental sustainability."
  }
];

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

const HVACDesign = () => {
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
      {/* New Split Hero Section */}
      <div className="service-hero-split">
        <div className="hero-text-content">
          <h1 className="hero-title-split">HVAC Design</h1>
          <p className="hero-desc-split">
            Advanced HVAC Design solutions ensuring optimal thermal comfort, energy efficiency, and indoor air quality for all building types.
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
          <img src={s5} alt="HVAC Design" className="hero-img-split" loading="eager" />
        </div>
      </div>

      {/* Core Pillars Section (4 Columns) */}
      < section className="arch-pillars-section" >
        <div className="arch-pillars-container">

          {/* Column 1: Visualization */}
          <div className="arch-pillar-col">
            <div>
              <h2 className="arch-pillar-title">Visualization</h2>
              <p className="arch-pillar-desc">
                We transform HVAC concepts into precise 3D BIM models, giving you a clear and detailed digital view of your project from the earliest design stages. This allows better understanding, review, and informed decision-making before construction begins.
              </p>
            </div>
            <span className="arch-pillar-num">01</span>
          </div>

          {/* Column 2: Precision & Control */}
          <div className="arch-pillar-col">
            <div>
              <h2 className="arch-pillar-title">Precision & Control</h2>
              <p className="arch-pillar-desc">
                Our HVAC BIM services ensure accuracy across every element of the design. By identifying conflicts and potential issues early, we significantly reduce rework, delays, and unexpected costs during execution.
              </p>
            </div>
            <span className="arch-pillar-num">02</span>
          </div>

          {/* Column 3: Collaboration */}
          <div className="arch-pillar-col">
            <div>
              <h2 className="arch-pillar-title">Collaboration</h2>
              <p className="arch-pillar-desc">
                BIM enables seamless coordination between architects, engineers, and stakeholders. HVAC systems, architectural intent, and structural details are integrated into a unified model, ensuring consistency and clarity across the project lifecycle.
              </p>
            </div>
            <span className="arch-pillar-num">03</span>
          </div>

          {/* Column 4: Advanced BIM Solutions */}
          <div className="arch-pillar-col">
            <div>
              <h2 className="arch-pillar-title">Advanced Solutions</h2>
              <p className="arch-pillar-desc">
                By leveraging cutting-edge BIM workflows, including Point Cloud to BIM, we enhance planning efficiency, optimize resources, and deliver high-quality outcomes. JSE Engineering provides a strong digital foundation for successful and future-ready projects.
              </p>
            </div>
            <span className="arch-pillar-num">04</span>
          </div>

        </div>
      </section >

      {/* What is HVAC Design Section */}
      < section className="arch-what-section" >
        <div className="arch-what-container">
          {/* Text Side */}
          <div className="arch-what-text">
            <span className="arch-what-tagline">THE CONCEPT</span>
            <h2 className="arch-what-title">What is HVAC Design?</h2>
            <p className="arch-what-desc">
              HVAC Design involves the detailed planning and modeling of Heating, Ventilation, and Air Conditioning systems. It goes beyond traditional 2D drawings by creating a 3D model that integrates all aspects of the design process.
            </p>
            <p className="arch-what-desc">
              This model becomes a shared resource for decision-making, ensuring optimal climate control, energy efficiency, and occupant comfort throughout the building's lifecycle.
            </p>
          </div>
          {/* Image Side */}
          <div className="arch-what-image-wrapper">
            <div className="arch-image-back"></div>
            <img src={whatIsImage} alt="What is HVAC Design" className="arch-what-img"
              loading="lazy"
              decoding="async" />
          </div>
        </div>
      </section >

      <section className="arch-services-section">
        <div className="arch-services-container">
          <div className="arch-services-header">
            <span className="arch-services-tagline">OUR EXPERTISE</span>
            <h2 className="arch-services-title">Our HVAC Design Services Include</h2>
            <p className="arch-services-desc">
              Transform your projects with JSE's cutting-edge HVAC solutions.
              Our BIM services encompass comprehensive solutions tailored to meet the needs of modern construction projects. We specialize in:
            </p>
          </div>

          <div className="service-expert-grid">
            {SERVICES_DATA.map((service, index) => (
              <div key={index} className="service-expert-card">
                {/* Icon */}
                <div className={`service-expert-icon icon-color-${(index % 6) + 1}`}>
                  {getIcon(index)}
                </div>
                {/* Content */}
                <div className="service-expert-content">
                  <h3 className="service-expert-title">{service.title}</h3>
                  <p className="service-expert-desc">{service.desc}</p>
                </div>
                {/* Pattern */}
                <div className={`service-expert-pattern pattern-${(index % 6) + 1}`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <div ref={stickyContactRef}>
        
      </div>

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
            <h2 className="arch-choose-heading">Why Choose JSE for HVAC Design?</h2>
            <p className="arch-choose-desc">
              Choosing JSE’s HVAC Design Engineers means gaining a strategic partner focused on precision, efficiency, and innovation. Our team leverages advanced BIM workflows to deliver accurate, data-rich HVAC models that enhance visualization, improve coordination, and reduce design conflicts from the earliest stages.
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
              By integrating technical expertise with practical project insight, we streamline decision-making, optimize resources, and minimize costly revisions. With JSE, you benefit from a collaborative, future-ready approach that ensures your architectural vision is executed seamlessly, on time, and to the highest quality standards.
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

export default HVACDesign;
