import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import "../../styles/Page.css";
import "./VirtualTeam.css";
import StickyContact from '../../components/StickyContact';
import heroImage from '../../assets/images-home/home-new-img/virtual-team.jpg';

// Standardized Images for Additional Services (Matching Home.jsx)
import mepImg from '../../assets/images-home/home-new-img/MEP.png';
import archImg from '../../assets/images-home/home-new-img/BIM.webp';
import structImg from '../../assets/images-home/home-new-img/structural-eng.webp';
import steelImg from '../../assets/images-home/home-new-img/steel-detail.jfif';
import infraImg from '../../assets/images-home/home-new-img/infrastructural.webp';
import virtualEngImage from '../../assets/images-home/home-new-img/virtual-team.jpg';
import secondmentImage from '../../assets/images-home/home-new-img/secondment.jpg.jpeg';

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

const BIM_CAPABILITIES = [
  { title: "High-Volume MEP & BIM Delivery", desc: "MEP & BIM services at industrial scale" },
  { title: "Architecture & Structural Engineering", desc: "Steel Structure (Tekla), Expertise across LOD 100 to LOD 500" },
  { title: "End-to-End Engineering Support", desc: "Concept Design to IFC, MEP Design & Multi-discipline Coordination, BIM Modeling & Clash Detection, Electrical Calculations, Equipment Schedules & Technical Documentation" }
];

const DELIVERY_MODEL = [
  { title: "Radical Transparency & Accountability", desc: "" },
  { title: "Daily Work Allocation Reports", desc: "" },
  { title: "Metric-Driven Progress Tracking", desc: "" },
  { title: "Direct Integration", desc: "" },
  { title: "Performance Guarantee", desc: "" }
];

const WHY_TRUST_JSE = [
  "Deep understanding of constructability and coordination",
  "Proven experience working within consultant-led ecosystems",
  "Proactive identification and resolution of design risks",
  "Highly experienced Team Leads, Managers, and BIM Specialists",
  "A truly “Readymade Virtual Engineering Partner”"
];

const VirtualTeam = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
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
    <div className="virtual-team-page" >
      <style>
        {`
            .virtual-cap-card {
                background: rgba(255, 255, 255, 0.03);
                border: 1px solid rgba(255, 255, 255, 0.1);
                padding: 1.5rem;
                border-radius: 12px;
                transition: transform 0.3s ease;
            }
            .virtual-cap-card:hover {
                background: rgba(255, 255, 255, 0.05);
                transform: translateY(-5px);
            }
            .virtual-cap-title {
                color: #fff;
                font-size: 1.25rem;
                margin-bottom: 0.75rem;
                font-family: 'Delight', sans-serif;
            }
            .virtual-cap-desc {
                color: #000000ff;
                font-size: 0.95rem;
                line-height: 1.6;
            }
            `}
      </style>

      {/* Hero Section */}
      <div className="service-hero-split">
        <div className="hero-text-content">
          <span className="hero-small-label">Your Readymade Virtual Engineering Partner</span>
          <h1 className="hero-title-split">
            Scalable. Transparent. High-Performance.
          </h1>
          <p className="hero-desc-split">
            JSE Engineering Private Limited provides world-class Virtual Engineering, MEP, and BIM services, acting as a seamless extension of your in-house design team. From Concept Design to IFC, we help global consultants scale faster without compromising quality, timelines, or control.
          </p>
          <div className="hero-cta-group" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button onClick={scrollToForm} className="hero-cta-btn">
              Talk to Our Experts
            </button>
            <button onClick={scrollToForm} className="hero-cta-btn" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.3)' }}>
              Build Your Virtual Team
            </button>
          </div>
        </div>

        <div className="hero-image-content">
          <div className="hero-diagonal-bar"></div>
          <img src={heroImage} alt="Virtual Team" className="hero-img-split" loading="eager" />
        </div>
      </div>

      {/* Intro Section */}
      <section className="virtual-intro-section">
        <div className="virtual-intro-container">
          <div className="virtual-intro-left">
            <h2>Virtual Team Hiring Services<br />What Is the JSE Virtual Team?</h2>
          </div>
          <div className="virtual-intro-right">
            <p>A dedicated, consultant-aligned engineering team that works exclusively on your projects and integrates fully with your workflows, tools, and design standards, while JSE manages all infrastructure, staffing, and administration.</p>
            <h3 style={{ color: '#144AE0', marginTop: '1.5rem', fontSize: '1.5rem', fontStyle: 'italic' }}>
              "You lead the design. We deliver at scale."
            </h3>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="virtual-why-section">
        <div className="virtual-why-container">
          <div className="virtual-why-header">
            <span className="dash-tagline">OUR EXPERTISE</span>
            <h2 className="virtual-why-main-title">Engineering & BIM Capabilities</h2>
          </div>

          <div className="virtual-why-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {BIM_CAPABILITIES.map((cap, index) => (
              <div key={index} className="virtual-cap-card">
                <h3 className="virtual-cap-title">{cap.title}</h3>
                <p className="virtual-cap-desc">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certified Quality Section */}
      <section className="virtual-process-section" style={{ backgroundColor: '#0B1221' }}>
        <div className="virtual-process-container">
          <h2 className="virtual-process-heading">Certified Quality & Infrastructure</h2>
          <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', color: '#cbd5e1', fontSize: '1.1rem', lineHeight: '1.8' }}>
            JSE ensures strict adherence to global BIM standards and consultant design protocols, supported by high-performance infrastructure and proven delivery systems that enable accuracy, speed, and reliability across all project stages.
          </p>
        </div>
      </section>

      {/* Delivery Model & Trust Section */}
      <section className="tech-section">
        <div className="tech-container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
          {/* Delivery Model */}
          <div>
            <h2 className="virtual-why-main-title" style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>The JSE Virtual Delivery Model</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {DELIVERY_MODEL.map((item, index) => (
                <li key={index} style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px' }}>
                  <span style={{ color: '#144AE0', fontWeight: 'bold', fontSize: '1.2rem' }}>✓</span>
                  <span style={{ color: '#fff', fontSize: '1.1rem' }}>{item.title}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Why Trust */}
          <div>
            <h2 className="virtual-why-main-title" style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Why Global Consultants Trust JSE</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {WHY_TRUST_JSE.map((item, index) => (
                <li key={index} style={{ marginBottom: '1rem', display: 'flex', alignItems: 'start', gap: '1rem', color: '#cbd5e1' }}>
                  <span style={{ color: '#144AE0', fontWeight: 'bold' }}>•</span>
                  <span style={{ fontSize: '1.05rem' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>


      <section className="virtual-intro-section" style={{ padding: '4rem 0', background: 'transparent' }}>
        <div className="virtual-intro-container" style={{ justifyContent: 'center', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', width: '100%' }}>Ready to Scale with Confidence?</h2>
          <p style={{ fontSize: '1.2rem', color: '#cbd5e1', maxWidth: '800px', margin: '0 auto' }}>
            JSE Engineering is ready to act as your high-performance design extension, offering rapid mobilization, transparent delivery, and uncompromised engineering excellence.
          </p>
        </div>
      </section>

      {/* Sticky Contact Form */}
      <StickyContact ref={stickyContactRef}>
        <div className="form-container">
          {/* Left Side: Title & Info */}
          <div className="form-info-side">
            <h2 className="form-heading">Build Your Virtual Team</h2>
            <p className="form-subtext">
              Contact Us Today
            </p>

            <div className="form-contact-details">
              <p className="form-email">info@jseengineering.com</p>
            </div>

            <div className="form-socials">
              {/* LinkedIn */}
              <div className="social-circle">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </div>
              {/* Facebook */}
              <div className="social-circle">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </div>
              {/* Twitter/X */}
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
              {/* Name */}
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

              {/* Email */}
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

              {/* Message */}
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

    </div >
  );
};

export default VirtualTeam;
