import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './ArchitecturalBIM.css';
import StickyContact from '../../components/StickyContact';

// Standardized Images for Additional Services (Matching Home.jsx)
import mepImg from '../../../assets/images-home/home-new-img/MEP.png';
import heroImage from '../../../assets/images-home/home-new-img/MEP.png';
import archImg from '../../../assets/images-home/home-new-img/BIM.webp';
import structImg from '../../../assets/images-home/home-new-img/structural-eng.webp';
import steelImg from '../../../assets/images-home/home-new-img/steel-detail.jfif';
import infraImg from '../../../assets/images-home/home-new-img/infrastructural.webp';
import virtualEngImage from '../../../assets/images-home/home-new-img/virtual-team.jpg';
import secondmentImage from '../../../assets/images-home/home-new-img/secondment.jpg.jpeg';

// Additional Services Data
const ADDITIONAL_SERVICES = [
  { title: "MEP Engineering", desc: "Comprehensive MEP solutions including HVAC, Electrical, and Firefighting.", link: "/services/design/mep-design", img: mepImg },
  { title: "Architectural BIM", desc: "Revolutionizing architecture with detailed BIM models.", link: "/services/design/architectural-bim", img: archImg },
  { title: "Structural Engineering", desc: "Advanced structural engineering and analysis.", link: "/services/design/structural", img: structImg },
  { title: "Steel Structure Detailing", desc: "Accurate Tekla detailing and steel structures.", link: "/services/design/steel-structure-detailing", img: steelImg },
  { title: "Infrastructural Services", desc: "Robust infrastructure solutions for modern communities.", link: "/services/infrastructural-services", img: infraImg },
  { title: "Virtual Team for Hire", desc: "Hire own remote offshore architect team for modular construction needs.", link: "/services/virtual-team", img: virtualEngImage },
  { title: "Secondment Team", desc: "Get on-demand access to our pool of experienced professionals.", link: "/services/secondment-team", img: secondmentImage }
];

// Content Data
const ENG_SCOPE = [
  "HVAC system design and sizing",
  "Electrical power distribution, lighting, and ELV systems",
  "Public Health and Plumbing engineering",
  "Fire Protection system design",
  "Interdisciplinary coordination with architectural and structural teams",
  "Design development aligned with authority submission and approval requirements"
];

const LOD_SCOPE = [
  {
    title: "LOD 300 Scope",
    items: [
      "Discipline-specific BIM models developed to LOD 300",
      "Accurate spatial layouts, routing, and system coordination",
      "Design-stage clash detection and resolution",
      "Models suitable for design coordination, authority approvals, and consultant reviews"
    ]
  },
  {
    title: "LOD 400 Scope and extraction of Shop Drawings",
    items: [
      "High-detail LOD 400 BIM models for construction execution",
      "Fabrication- and installation-level detailing",
      "Extraction of coordinated MEP Shop Drawings",
      "Trade coordination and constructability validation",
      "Supports site installation and contractor workflows"
    ]
  },
  {
    title: "LOD 500 Scope and extraction of As built Drawings",
    items: [
      "Verified LOD 500 as-built BIM models",
      "Models updated based on site redlines and final installations",
      "Extraction of As-Built Drawings",
      "Asset-ready models suitable for operations, maintenance, and FM integration"
    ]
  },
  {
    title: "Quantity Take-Offs & Bills of Quantities (BOQs)",
    items: [
      "Accurate quantity extraction directly from BIM models",
      "Discipline-wise BOQs aligned with drawings and specifications",
      "Supports cost planning, tendering, procurement, and cost control",
      "Reduces commercial risk associated with manual take-offs"
    ]
  }
];

const VALUE_ENG_ITEMS = [
  "Optimize system selection, routing, and layouts",
  "Reduce material and installation costs",
  "Improve energy efficiency and operational performance",
  "Maintain compliance with codes, standards, and design intent"
];

const ENG_CALC_ITEMS = [
  "HVAC heat load, ventilation, and energy calculations",
  "Electrical load, lighting, and short-circuit calculations",
  "Plumbing and pump sizing calculations",
  "Fire protection hydraulic calculations"
];

const STUDIO_TEAM_FEATURES = [
  "Dedicated MEP engineers and BIM specialists",
  "Alignment with client standards, workflows, and QA/QC processes",
  "Direct coordination with PMC, consultant, and contractor teams",
  "Flexible scaling based on project pipeline and programme demands",
  "Transparent reporting and delivery accountability"
];

const WHY_CHOOSE_JSE = [
  "Strong engineering-first approach supported by BIM execution",
  "Proven experience across LOD 300 to LOD 500 scopes",
  "Deep understanding of regional constructability and coordination challenges",
  "Familiarity with project environments",
  "Reliable long-term delivery partner for complex, multi-project portfolios"
];

const MEPDesign = () => {
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
          <span className="hero-small-label">MEP Engineering Services</span>
          <h1 className="hero-title-split">MEP Engineering Services</h1>
          <p className="hero-desc-split">
            End-to-End MEP Engineering & BIM Delivery for Complex Projects
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

      {/* Intro Section */}
      <section className="arch-what-section">
        <div className="arch-what-container">
          <div className="arch-what-text" style={{ width: '100%' }}>
            <h2 className="arch-what-title">End-to-End MEP Engineering & BIM Delivery</h2>
            <p className="arch-what-desc">
              JSE Engineering provides comprehensive MEP Engineering and BIM services supporting consultants, PMCs, developers, and contractors across commercial, residential, healthcare, hospitality, mixed-use, and infrastructure projects in the Middle East and international markets.
            </p>
            <p className="arch-what-desc">
              Our services cover the full project lifecycle—from engineering design through construction-stage BIM and as-built documentation—ensuring technical compliance, coordination of certainty, and constructible outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Engineering Design Scope */}
      <section className="arch-choose-section">
        <div className="arch-choose-container">
          <div className="arch-choose-left">
            <span className="arch-choose-tagline">OUR SERVICES</span>
            <h2 className="arch-choose-heading">MEP Engineering & Design Services</h2>
            <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}>Engineering-Led Design Aligned to Authority and Project Requirements</h3>
            <p className="arch-choose-desc">
              JSE delivers disciplined MEP engineering design in accordance with international standards, regional authority regulations, and project-specific specifications.
            </p>
            <p className="arch-choose-desc">
              All designs are developed with a strong focus on constructability, system performance, and operational efficiency.
            </p>
          </div>
          <div className="arch-choose-right">
            <h3 style={{ color: '#144AE0', marginBottom: '1rem' }}>Engineering Scope Includes:</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {ENG_SCOPE.map((item, index) => (
                <li key={index} style={{ marginBottom: '0.8rem', color: '#cbd5e1', display: 'flex', gap: '0.8rem' }}>
                  <span style={{ color: '#144AE0' }}>•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* BIM Services by LOD */}
      <section className="arch-lod-section">
        <div className="arch-lod-container">
          <div className="arch-lod-header">
            <h2 className="arch-lod-heading">BIM Services by Level of Development (LOD)</h2>
          </div>

          <div className="arch-lod-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {LOD_SCOPE.map((lod, index) => (
              <div key={index} className="arch-lod-item" style={{ textAlign: 'left', alignItems: 'flex-start' }}>
                <h3 className="arch-lod-title">{lod.title}</h3>
                <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem' }}>
                  {lod.items.map((item, i) => (
                    <li key={i} style={{ marginBottom: '0.5rem', color: '#cbd5e1', fontSize: '0.9rem', display: 'flex', gap: '0.5rem' }}>
                      <span style={{ color: '#144AE0', minWidth: '10px' }}>▪</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Engineering & Calculations */}
      <section className="virtual-process-section">
        <div className="virtual-process-container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
          {/* Value Engineering */}
          <div>
            <h2 className="virtual-process-heading" style={{ textAlign: 'left' }}>Value Engineering</h2>
            <p style={{ color: '#cbd5e1', marginBottom: '1rem' }}>JSE supports value engineering exercises to:</p>
            <ul className="process-list" style={{ listStyle: 'none', padding: 0 }}>
              {VALUE_ENG_ITEMS.map((item, index) => (
                <li key={index} style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.8rem', color: '#fff' }}>
                  <span style={{ color: '#144AE0', fontWeight: 'bold' }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <p style={{ color: '#cbd5e1', marginTop: '1rem', fontStyle: 'italic' }}>
              Value engineering is carried out in close coordination with consultants and PMCs to ensure technical and commercial alignment.
            </p>
          </div>

          {/* Calculations */}
          <div>
            <h2 className="virtual-process-heading" style={{ textAlign: 'left' }}>Engineering Calculations</h2>
            <p style={{ color: '#cbd5e1', marginBottom: '1rem' }}>
              We prepare validated engineering calculations to support design approvals and technical compliance, including:
            </p>
            <ul className="process-list" style={{ listStyle: 'none', padding: 0 }}>
              {ENG_CALC_ITEMS.map((item, index) => (
                <li key={index} style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.8rem', color: '#fff' }}>
                  <span style={{ color: '#144AE0', fontWeight: 'bold' }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <p style={{ color: '#cbd5e1', marginTop: '1rem', fontStyle: 'italic' }}>
              All calculations are developed in line with applicable international standards and authority requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Studio Team Delivery Model */}
      <section className="arch-choose-section">
        <div className="arch-choose-container">
          <div className="arch-choose-left">
            <h2 className="arch-choose-heading">Studio Team Delivery Model</h2>
            <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}>Dedicated MEP Engineering Teams for PMC and Consultant Support</h3>
            <p className="arch-choose-desc">
              JSE offers a Studio Team delivery model for clients requiring consistent, scalable engineering support across multiple projects. This model enables PMCs and consultants to expand delivery capacity while retaining full technical control.
            </p>
          </div>
          <div className="arch-choose-right">
            <div className="arch-choose-card">
              <h3 className="arch-choose-card-title">Studio Team features:</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {STUDIO_TEAM_FEATURES.map((item, index) => (
                  <li key={index} style={{ marginBottom: '0.8rem', color: '#cbd5e1', display: 'flex', gap: '0.8rem' }}>
                    <span style={{ color: '#144AE0' }}>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose JSE */}
      <section className="virtual-intro-section" style={{ background: '#0B1221' }}>
        <div className="virtual-intro-container">
          <div style={{ width: '100%', textAlign: 'center' }}>
            <h2 style={{ marginBottom: '2rem' }}>Why Choose JSE</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem' }}>
              {WHY_CHOOSE_JSE.map((item, index) => (
                <div key={index} style={{
                  background: 'rgba(255,255,255,0.05)',
                  padding: '1.5rem',
                  borderRadius: '8px',
                  maxWidth: '300px',
                  textAlign: 'left'
                }}>
                  <p style={{ color: '#fff' }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Contact Form */}
      <StickyContact ref={stickyContactRef}>
        <div className="form-container">
          <div className="form-info-side">
            <h2 className="form-heading">Start Your Project</h2>
            <p className="form-subtext">
              Ready to optimize your workflow with JSE's MEP Engineering services? Fill out the details and we'll get in touch with you shortly.
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

export default MEPDesign;
