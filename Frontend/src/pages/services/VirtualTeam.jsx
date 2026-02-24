import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import "../../styles/Page.css";
import "./VirtualTeamScoped.css";

import heroImage from '../../assets/images-home/home-new-img/virtual-team.jpeg';

// Standardized Images for Additional Services (Matching Home.jsx)
import mepImg from '../../assets/images-home/home-new-img/MEP.png';
import archImg from '../../assets/images-home/home-new-img/BIM.webp';
import structImg from '../../assets/images-home/home-new-img/structural-eng.webp';
import steelImg from '../../assets/images-home/home-new-img/steel-detail.jfif';
import infraImg from '../../assets/images-home/home-new-img/infrastructural.webp';
import virtualEngImage from '../../assets/images-home/home-new-img/virtual-team.jpeg';
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

const VIRTUAL_ADVANTAGES = [
  {
    title: "Seamless Integration",
    desc: "We adapt to your company’s specific standards, software versions, and internal BIM workflows to ensure absolute consistency across all deliverables.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
  },
  {
    title: "On-Demand Scalability",
    desc: "Quickly expand your technical engineering capacity for mega-scale construction projects without long-term overhead.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
  },
  {
    title: "Engineering-Led Expertise",
    desc: "Every virtual team member is backed by our internal design strength, providing value-added validation for MEP, Architecture, and Steel Structures.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
  },
  {
    title: "Real-Time Collaboration",
    desc: "We utilize cloud-based BIM platforms and advanced communication tools to ensure 24/7 project transparency, coordination, and delivery efficiency.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
  }
];

const VIRTUAL_TEAM_STRUCTURE = [
  {
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>,
    title: "Dedicated Project Manager",
    desc: "A single point of contact to manage your timelines, resource allocation, and communication."
  },
  {
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>,
    title: "Senior Lead Engineers",
    desc: "Discipline-specific leads (MEP, Structure, or Tekla) who oversee the technical accuracy of every calculation and model."
  },
  {
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>,
    title: "Specialized QA/QC Team",
    desc: "An independent internal team that performs rigorous audits to ensure zero-clash deliverables before they reach your desk."
  }
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
          <h1 className="hero-title-split">
            Virtual Team For Hire
          </h1>
          <p className="hero-desc-split">
            A dedicated virtual engineering team that integrates seamlessly into your workflow, delivering scalable MEP, Structural, and BIM expertise with corporate-level accountability.
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

      {/* 1. Authority Introduction Section */}
      <section className="virtual-authority-section">
        <div className="virtual-authority-container">
          <div className="virtual-authority-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
          </div>
          <h2 className="virtual-authority-heading">
            Dedicated Service:<br />
            <span>Virtual Engineering Team Support</span>
          </h2>
          <p className="virtual-authority-desc">
            In an era of global project delivery, JSE Engineering provides a seamless Virtual Office solution. We act as a dedicated, high-performance extension of your in-house engineering and BIM departments, allowing you to scale your operations without the overhead of local recruitment.
          </p>
        </div>
      </section>

      {/* 2. The JSE Virtual Advantage */}
      <section className="virtual-advantage-section">
        <div className="virtual-advantage-container">
          <div className="virtual-advantage-intro">
            <h2>The JSE Virtual Advantage</h2>
            <p>Unlike standard outsourcing, our Virtual Team service is built on Engineering Leadership. You aren't just hiring drafters; you are integrating a team of experienced MEP Engineers, Structural Engineers, and Tekla Steel Detailing experts directly into your workflow.</p>
          </div>

          <div className="virtual-advantage-grid">
            {VIRTUAL_ADVANTAGES.map((adv, index) => {
              const themes = ['card-theme-blue', 'card-theme-green', 'card-theme-purple', 'card-theme-cyan'];
              return (
                <div key={index} className={`virtual-advantage-card ${themes[index]}`}>
                  <div className="virtual-intern-pattern"></div>
                  <div className="virtual-advantage-icon">
                    {adv.icon}
                  </div>
                  <h3 className="virtual-advantage-title">{adv.title}</h3>
                  <p className="virtual-advantage-desc">{adv.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Our Virtual Team Structure */}
      <section className="virtual-structure-section">
        <div className="virtual-structure-container">
          <div className="virtual-structure-header" style={{ textAlign: 'center' }}>
            <h2>Our Virtual Team Structure</h2>
            <p style={{ maxWidth: '800px', margin: '0 auto' }}>
              Every virtual engagement is structured for corporate-level accountability and technical precision:
            </p>
          </div>

          <div className="virtual-structure-grid">
            {VIRTUAL_TEAM_STRUCTURE.map((item, index) => {
              const themes = ['card-theme-blue', 'card-theme-purple', 'card-theme-cyan'];
              return (
                <div key={index} className={`virtual-structure-card ${themes[index]}`}>
                  <div className="virtual-intern-pattern"></div>
                  <div className="virtual-role-badge">
                    {item.icon}
                  </div>
                  <h3 className="virtual-structure-title">{item.title}</h3>
                  <p className="virtual-structure-desc">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Who We Support */}
      <section className="virtual-support-section">
        {/* Consultants Left */}
        <div className="virtual-support-block support-block-left">
          <span className="virtual-support-label">Global Design Consultants</span>
          <h2 className="virtual-support-title">Design-Led Support</h2>
          <p className="virtual-support-desc">
            Providing remote design-led BIM (LOD 100–300) and full MEP engineering support from concept to IFC.
          </p>
        </div>

        {/* Contractors Right */}
        <div className="virtual-support-block support-block-right">
          <span className="virtual-support-label" style={{ color: '#60a5fa' }}>International Contractors</span>
          <h2 className="virtual-support-title">Construction Validation</h2>
          <p className="virtual-support-desc">
            Delivering engineering validation, RFI management, and LOD 400 construction modeling as an off-site technical office.
          </p>
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

    </div >
  );
};

export default VirtualTeam;
