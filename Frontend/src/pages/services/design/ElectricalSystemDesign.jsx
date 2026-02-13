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
import secondmentImage from '../../../assets/images-home/home-new-img/secondment.jpg.jpeg';

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
  { title: "Electrical 3D Modeling Services", img: s1, desc: "Visualize your electrical systems with precision-driven 3D models. Our electrical 3D modeling services improve coordination, reduce clashes, and enhance design accuracy for smooth project execution." },
  { title: "Electrical Design Layout Services", img: s2, desc: "Clear, optimized electrical layouts for efficient execution. We deliver well-planned electrical layouts that ensure proper equipment placement, routing efficiency, and compliance with design standards." },
  { title: "Electrical Drafting Services", img: s3, desc: "Accurate electrical drafting for reliable installations. Our professional drafting services provide detailed documentation that supports seamless installation, operation, and maintenance." },
  { title: "Floor-Wise Lighting Control Design", img: s4, desc: "Smart and customized lighting solutions for every floor. We design energy-efficient lighting control systems that improve comfort, automation, and operational efficiency." },
  { title: "Electrical Schematic Drawing Services", img: s5, desc: "Detailed schematics for easy understanding and execution. Our schematic drawings simplify installation and troubleshooting through clear and precise documentation." },
  { title: "Solar Panel Design Services", img: s6, desc: "Optimized solar energy system designs for sustainable power. JSE Engineering designs high-efficiency solar panel systems tailored to your building’s energy demands and sustainability goals." },
  { title: "Electronic Circuit Design", img: s1, desc: "Custom electronic circuit designs built for performance and reliability. Our designs enhance system functionality while meeting project-specific technical requirements." },
  { title: "Electrical Load Calculation Services", img: s2, desc: "Accurate load calculations for safe and efficient systems. We ensure proper load balancing, capacity planning, and compliance with electrical safety standards." },
  { title: "Panel & Switchboard Design", img: s3, desc: "Custom panel and switchboard designs for operational reliability. Our designs ensure safety, scalability, and ease of maintenance." },
  { title: "Electrical Network Wiring Services", img: s4, desc: "Robust electrical wiring solutions for reliable connectivity. We design structured, efficient, and durable electrical wiring networks for long-term performance." },
  { title: "PCB Design Layout Services", img: s5, desc: "High-precision PCB layout designs for optimal electronic performance. Our PCB design services ensure accuracy, signal integrity, and manufacturability." },
  { title: "Safety & Compliance Engineering", img: s6, desc: "Electrical designs aligned with global safety and energy regulations. We strictly follow the latest codes, standards, and compliance guidelines to prioritize user safety." }
];

const ICONIC_PROJECTS = MEP_PROJECTS.slice(0, 6).map(p => ({
  title: p.title,
  img: p.image
}));


const CHOOSE_JSE_DATA = [
  {
    title: "Proven Technical Expertise",
    desc: "Our engineers bring advanced technical knowledge and cutting-edge design strategies."
  },
  {
    title: "Customized Electrical Solutions",
    desc: "Every design is tailored to your project’s specific requirements."
  },
  {
    title: "Safety-First Approach",
    desc: "We embed safety standards and best practices into every electrical design."
  },
  {
    title: "Energy-Efficient Engineering",
    desc: "Our solutions reduce energy consumption and operational costs."
  }
];

const CHOOSE_JSE_DATA_2 = [
  {
    title: "Cost-Effective Planning",
    desc: "High-quality designs delivered within optimized budgets."
  },
  {
    title: "On-Time Project Delivery",
    desc: "Streamlined workflows ensure timely completion without compromising quality."
  },
  {
    title: "Trusted & Reliable Partner",
    desc: "A proven track record across diverse industries and project scales."
  },
  {
    title: "Multi-Disciplinary Collaboration",
    desc: "Smooth coordination with architectural, structural, and MEP systems."
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

const ElectricalSystemDesign = () => {
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
      {/* Hero Section */}
      {/* New Split Hero Section */}
      <div className="service-hero-split">
        <div className="hero-text-content">
          <span className="hero-small-label">Design Services</span>
          <h1 className="hero-title-split">Electrical System Design</h1>
          <p className="hero-desc-split">
            Powering Innovation with Expert Electrical System Design Solutions by JSE Engineering.
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
          <img src={s7} alt="Electrical System Design" className="hero-img-split" loading="eager" />
        </div>
      </div>

      {/* Intro / About Section (Replaces Pillars) */}
      <section className="arch-what-section" style={{ padding: '6rem 2rem' }}>
        <div className="arch-what-container">
          {/* Text Side */}
          <div className="arch-what-text">
            <span className="arch-what-tagline">ABOUT US</span>
            <h2 className="arch-what-title">About JSE Engineering Electrical System Design Services</h2>
            <p className="arch-what-desc">
              JSE Engineering Pvt Ltd delivers end-to-end Electrical System Design (ESD) services that combine innovation, reliability, and three decades of engineering excellence. Our expert electrical engineers design safe, efficient, and future-ready electrical systems using industry-leading tools such as AutoCAD Electrical, ETAP, Revit, and BIM platforms.
            </p>
            <p className="arch-what-desc">
              From power distribution and load calculations to lighting control and panel design, our solutions are customized to meet the exact requirements of commercial, residential, industrial, and infrastructure projects. Every design strictly adheres to international safety standards, energy-efficiency norms, and regulatory compliance.
            </p>
            <p className="arch-what-desc">
              At JSE Engineering, we don’t just design electrical systems—we create scalable, sustainable, and high-performance solutions that enhance building functionality and long-term operational efficiency.
            </p>
          </div>
          {/* Image Side */}
          <div className="arch-what-image-wrapper">
            <div className="arch-image-back"></div>
            <img src={whatIsImage} alt="Electrical System Design" className="arch-what-img"
              loading="lazy"
              decoding="async" />
          </div>
        </div>
      </section >

      <section className="arch-services-section">
        <div className="arch-services-container">
          <div className="arch-services-header">
            <span className="arch-services-tagline">OUR EXPERTISE</span>
            <h2 className="arch-services-title">Electrical Design & Drafting Services We Offer</h2>
            <p className="arch-services-desc">
              Comprehensive electrical engineering solutions tailored for safety, efficiency, and reliability.
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
        <div className="form-container">
          {/* Left Side: Title & Info */}
          <div className="form-info-side">
            <h2 className="form-heading">Start Your Project</h2>
            <p className="form-subtext">
              Ready to optimize your workflow with JSE's Electrical System Design services? Fill out the details and we'll get in touch with you shortly.
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
      </div>

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
            <h2 className="arch-choose-heading">Why Choose JSE for Electrical System Design?</h2>
            <p className="arch-choose-desc">
              Partner with JSE Engineering for expert electrical design solutions that prioritize safety, efficiency, and sustainability.
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
              Our holistic approach integrates seamlessly with architectural and structural systems, ensuring that your electrical infrastructure is future-proof, compliant, and cost-effective.
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

export default ElectricalSystemDesign;
