import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../../../styles/design/MEPDesign.css'; // Scoped Styles explicitly for MEP Design
import StickyContact from '../../../components/StickyContact';

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
import virtualEngImage from '../../../assets/images-home/home-new-img/virtual-team.jpg';
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

const TOP_SERVICES = [
  {
    title: "Detailed M&E Design",
    desc: "Full-scale Mechanical & Electrical design for functional, efficient environments, encompassing HVAC, electrical distribution, and specialized facility requirements."
  },
  {
    title: "Lighting Design",
    desc: "Innovative layout strategies optimized for both natural and artificial lights, balancing ambient performance with significant energy conservation."
  },
  {
    title: "Air Conditioning/HVAC",
    desc: "Advanced AC/HVAC models ensuring superior air quality and thermal control. Designed for occupant comfort and long-term energy efficiency."
  },
  {
    title: "Plumbing and Sanitary",
    desc: "Expertly calculated routing for water distribution, drainage, and sustainable water management systems complying strictly with public health codes."
  },
  {
    title: "Fire Protection",
    desc: "Comprehensive sprinkler and suppression systems, precisely coordinated to ensure maximum safety and compliance with international fire and life safety standards."
  },
  {
    title: "Home Automation",
    desc: "Intelligent BMS and residential automation integration, offering intuitive control over lighting, climate, security, and energy management."
  },
  {
    title: "Electrical Control/Substations",
    desc: "Detailed schematics for High/Low Voltage substations, switchgear, and robust power distribution capable of handling heavy industrial or commercial loads."
  },
  {
    title: "IT and Telecommunications",
    desc: "Seamless integration of voice, data, and communication infrastructure. Designing robust pathways and server room layouts for uninterrupted connectivity."
  },
  {
    title: "Public Health Engineering",
    desc: "Specialized design for greywater recycling, sophisticated waste management, and sustainable hygiene systems for large-scale developments."
  },
  {
    title: "Sustainable Design (LEED)",
    desc: "Engineering focused on minimizing carbon footprints. Green building design strategies to achieve high LEED ratings and optimize lifecycle costs."
  }
];

// Bento Theme array and icons for MEP Systems
const themes = ['card-theme-blue', 'card-theme-purple', 'card-theme-green', 'card-theme-orange', 'card-theme-pink', 'card-theme-cyan'];
const SYSTEM_ICONS = {
  hvac: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 12m-10 0a10 10 0 1 0 20 0a10 10 0 1 0-20 0M12 12l4.9 4.9M12 12l-4.9 4.9M12 12l4.9-4.9M12 12l-4.9-4.9" /></svg>,
  power: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>,
  water: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" /></svg>,
  fire: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>,
  default: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
};

const MEP_SYSTEMS = [
  { name: "HVAC Systems", icon: SYSTEM_ICONS.hvac, span: "span-2-col", theme: "card-theme-blue", desc: "Heating, Ventilation & Air Conditioning" },
  { name: "Power Distribution", icon: SYSTEM_ICONS.power, span: "", theme: "card-theme-green", desc: "High/Low Voltage systems" },
  { name: "Plumbing and Drainage", icon: SYSTEM_ICONS.water, span: "", theme: "card-theme-purple", desc: "Piping & sanitation" },
  { name: "Fire Protection and Alarm", icon: SYSTEM_ICONS.fire, span: "span-2-row", theme: "card-theme-orange", desc: "Sprinklers & smoke detection" },
  { name: "Lighting Design", icon: SYSTEM_ICONS.default, span: "", theme: "card-theme-cyan", desc: "Interior & exterior illumination" },
  { name: "Building Management (BMS)", icon: SYSTEM_ICONS.default, span: "", theme: "card-theme-pink", desc: "Automated facility controls" },
  { name: "Telecommunications & IT", icon: SYSTEM_ICONS.power, span: "", theme: "card-theme-purple", desc: "Data networks & telecom" },
  { name: "Security and Access Control", icon: SYSTEM_ICONS.default, span: "span-2-col", theme: "card-theme-blue", desc: "CCTV & secure entry systems" },
  { name: "Public Health Engineering", icon: SYSTEM_ICONS.water, span: "", theme: "card-theme-green", desc: "Hygiene & waste management" },
  { name: "Renewable Energy Systems", icon: SYSTEM_ICONS.default, span: "", theme: "card-theme-orange", desc: "Solar & sustainable integrations" },
  { name: "Vertical Transportation", icon: SYSTEM_ICONS.default, span: "", theme: "card-theme-cyan", desc: "Elevators & escalators" },
  { name: "Energy Modeling", icon: SYSTEM_ICONS.hvac, span: "", theme: "card-theme-pink", desc: "Efficiency & LEED optimization" }
];

const WHY_CHOOSE_JSE_NEW = [
  {
    title: "Multi-Disciplinary Expertise",
    desc: "Seamless integration of MEP, BIM, Electrical, ELV, Plumbing, HVAC & Firefighting designs under one roof.",
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 22v-5l5-5 5 5v5M12 12l5-5 5 5v5" /></svg>
  },
  {
    title: "Precision & Coordination",
    desc: "Designs optimized to minimize clashes, improve constructability, and reduce rework on site.",
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
  },
  {
    title: "BIM-Enabled Workflows",
    desc: "Advanced BIM tools for better visualization, faster approvals, and accurate quantity take-offs.",
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /></svg>
  },
  {
    title: "Cost-Optimized Solutions",
    desc: "Efficient design methodologies that reduce material cost, energy consumption, and operational expenses.",
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
  },
  {
    title: "Fast Turnaround Delivery",
    desc: "Structured processes ensure reliable timelines for consultants, contractors, and developers.",
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
  },
  {
    title: "Sector-Wide Experience",
    desc: "From residential to commercial, industrial, healthcare, hospitality, and institutional sectors.",
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M5 21V7l8-4 8 4v14"></path></svg>
  },
  {
    title: "Skilled Technical Team",
    desc: "Dedicated specialists with options for secondment and virtual teams to support project execution.",
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
  },
  {
    title: "Client-Centric Support",
    desc: "Transparent communication, progressive updates, and responsive assistance throughout project lifecycle.",
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
  }
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

      {/* 1. Intro Authority Section (2-Column) */}
      <section className="arch-what-section">
        <div className="arch-what-container">
          {/* Text Side */}
          <div className="arch-what-text">
            <h2 className="arch-what-title" style={{ textAlign: 'left', marginBottom: '1.5rem', color: '#1e293b' }}>
              Integrating Excellence with Global MEP Design Solutions
            </h2>
            <div style={{ color: '#000', fontSize: '1.1rem', lineHeight: '1.8' }}>
              <p style={{ marginBottom: '1.5rem' }}>
                At JSE Engineering Pvt Ltd, our International MEP Design Services leverage three decades of engineering expertise and a proven track record of over 6,000 successful projects. We specialize in crafting sophisticated Mechanical, Electrical, and Plumbing (MEP) systems that meet global standards and adapt seamlessly to diverse building requirements.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                Our engineering team employs cutting-edge technology and innovative design practices to deliver solutions that ensure efficiency, performance, reliability, and compliance across international construction projects.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                When you choose JSE, you partner with a seasoned team that brings unparalleled experience and a commitment to excellence. Our global perspective and deep understanding of local regulations allow us to navigate complex design challenges with ease, providing solutions that are both innovative and compliant.
              </p>
              <p>
                Trust JSE Engineering to deliver MEP designs that not only meet but exceed expectations, offering peace of mind and exceptional results on an international scale.
              </p>
            </div>
          </div>
          {/* Image Side */}
          <div className="arch-what-image-wrapper">
            <div className="arch-image-back"></div>
            <img src={mepAboutImage} alt="About MEP Design" className="arch-what-img" loading="lazy" decoding="async" />
          </div>
        </div>
      </section>

      {/* 2. Top MEP Design Services Offers (Expertise Grid) */}
      <section className="arch-services-section" style={{ background: '#0B1221' }}>
        <div className="arch-services-container">
          <div className="arch-services-header">
            <span className="arch-services-tagline">OUR OFFERINGS</span>
            <h2 className="arch-services-title">Top MEP Design Services JSE Offers</h2>
          </div>

          <div className="mep-expert-grid">
            {TOP_SERVICES.map((service, index) => (
              <div key={index} className="mep-expert-card">
                {/* Icon */}
                <div className={`mep-expert-icon mep-icon-color-${(index % 6) + 1}`}>
                  {getMepIcon(index)}
                </div>
                {/* Content */}
                <div className="mep-expert-content">
                  <h3 className="mep-expert-title">{service.title}</h3>
                  <p className="mep-expert-desc">{service.desc}</p>
                </div>
                {/* Pattern border decoration */}
                <div className={`mep-expert-pattern mep-pattern-${(index % 6) + 1}`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. What JSE Does (Authority Highlight Block) */}
      <section style={{
        background: 'linear-gradient(135deg, #144AE0 0%, #0a2570 100%)',
        padding: '5rem 2rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{
            color: '#fff',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '600',
            lineHeight: '1.4',
            fontFamily: "'delight', sans-serif"
          }}>
            With over <span style={{ color: '#fbbf24' }}>450+ BIM professionals</span>, JSE Engineering Pvt Ltd specializes in digitally constructing MEP services in BIM.
          </h2>
        </div>
        {/* Subtle background decoration */}
        <div style={{
          position: 'absolute',
          top: '-50%',
          right: '-10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          zIndex: 1
        }} />
      </section>

      {/* 4. MEP Systems We Design and Model (Infinite Carousel) */}
      <section className="mep-carousel-section">
        <div className="mep-carousel-header">
          <span className="mep-carousel-tagline">SYSTEMS REACH</span>
          <h2 className="mep-carousel-title">MEP Systems We Design and Model</h2>
          <p style={{
            color: '#94a3b8',
            fontSize: '1.15rem',
            lineHeight: '1.8',
            maxWidth: '700px',
            margin: '1.5rem auto 0 auto'
          }}>
            Integrating expertise, innovation, and sustainability in every MEP design.
          </p>
        </div>

        <div className="mep-carousel-wrapper">
          <div className="mep-carousel-track">
            {/* Render array twice for infinite seamless loop */}
            {[...MEP_SYSTEMS, ...MEP_SYSTEMS].map((system, index) => (
              <div key={index} className="mep-system-card">
                <div className="mep-system-icon-box" style={{ background: 'rgba(255,255,255,0.05)', color: '#144AE0' }}>
                  {system.icon}
                </div>
                <h3 className="mep-system-title">{system.name}</h3>
                <p className="mep-system-desc">{system.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Choose JSE Engineering (Scoped Home Page Style) */}
      <section className="mep-why-section">
        <div className="mep-why-container">
          {/* Left Sticky Content */}
          <div className="mep-why-sticky-left">
            <div className="mep-why-header-content">
              <h2 className="mep-why-section-title">Why Choose JSE Engineering for Best MEP Design?</h2>
            </div>
          </div>

          {/* Right Scrollable Cards */}
          <div className="mep-why-cards-list">
            {WHY_CHOOSE_JSE_NEW.map((item, index) => (
              <div key={index} className="mep-why-card">
                <div className="mep-why-icon-wrapper">
                  {item.icon}
                </div>
                <div className="mep-why-card-content">
                  <h3 className="mep-why-card-title">{item.title}</h3>
                  <p className="mep-why-card-desc">{item.desc}</p>
                </div>
              </div>
            ))}
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
