import React, { useEffect, useState } from 'react';
import './ArchitecturalBIM.css';
import heroImage from '../../../assets/images-home/architectural-bim.webp';

import whatIsImage from '../../../assets/images-home/bim-modelling.webp';

// Portfolio Imports
// Portfolio Imports
import { MEP_PROJECTS } from '../../../data/realPortfolio';


// Tech Logos
import revitLogo from '../../../assets/virtual-eng/software logos/autodesk-revit-seeklogo.png';
import autocadLogo from '../../../assets/virtual-eng/software logos/autocad-seeklogo.png';
import bentleyLogo from '../../../assets/virtual-eng/software logos/bentley.png';
import microstationLogo from '../../../assets/virtual-eng/software logos/microstation.webp';
import projectwiseLogo from '../../../assets/virtual-eng/software logos/projectwise.webp';

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
  { title: "Plumbing Engineering & System Design", img: s1, desc: "Complete design of efficient and reliable plumbing systems." },
  { title: "Detailed Plumbing Drafting", img: s2, desc: "High-precision drafting and documentation for seamless execution." },
  { title: "Code Compliance", img: s3, desc: "Ensuring all designs meet strict public health and safety codes." },
  { title: "Potable & Non-Potable Water", img: s4, desc: "Design of safe water supply systems for various applications." },
  { title: "Water Conservation Systems", img: s5, desc: "Sustainable solutions for efficient water usage and management." },
  { title: "Wastewater & Sewage Design", img: s6, desc: "Effective systems for the safe removal and treatment of wastewater." },
  { title: "Stormwater & Drainage", img: s1, desc: "Robust drainage solutions to manage stormwater effectively." },
  { title: "Performance Analysis", img: s2, desc: "Optimization of system performance for long-term efficiency." }
];

const ICONIC_PROJECTS = MEP_PROJECTS.slice(0, 6).map(p => ({
  title: p.title,
  img: p.image
}));


const CHOOSE_JSE_DATA = [
  {
    title: "Precise Design",
    desc: "Our team delivers highly accurate, coordinated plumbing and public health engineering designs that eliminate errors and ensure smooth installation."
  },
  {
    title: "Cost-Effective",
    desc: "We prioritize efficiency and scalability, creating designs that optimize material usage and reduce long-term operational costs."
  },
  {
    title: "Future-Ready",
    desc: "Our solutions are designed with the future in mind, ensuring adaptability to changing needs and technologies."
  },
  {
    title: "Health & Safety Focused",
    desc: "We strictly adhere to public health standards, ensuring safe and reliable water systems for all building occupants."
  }
];

const CHOOSE_JSE_DATA_2 = [
  {
    title: "Project Alignment",
    desc: "We work closely with clients and consultants to ensure every system aligns perfectly with the broader project objectives."
  },
  {
    title: "Lifecycle Reliability",
    desc: "Our systems are constructed to perform reliably over their full lifecycle, minimizing maintenance issues and downtime."
  },
  {
    title: "Sustainable Practices",
    desc: "We integrate water conservation and management strategies to promote environmental sustainability in every project."
  },
  {
    title: "Regulatory Compliance",
    desc: "Our comprehensive knowledge of codes guarantees that all designs meet necessary legal and safety requirements."
  }
];

const BIM_TECH_DATA = [
  { name: 'Revit', abbr: 'Rv', bg: '#e6f7ff', img: revitLogo },
  { name: 'AutoCAD', abbr: 'AC', bg: '#fffbe6', img: autocadLogo },
  { name: 'Navisworks', abbr: 'Nw', bg: '#f9f0ff', img: projectwiseLogo }, // ProjectWise placeholder for Navis
  { name: 'Bentley', abbr: 'Be', bg: '#e6fffb', img: bentleyLogo },
  { name: 'Civil 3D', abbr: 'C3D', bg: '#fff0f6', img: revitLogo }, // Revit placeholder
  { name: 'Tekla', abbr: 'Tk', bg: '#f0f5ff', img: microstationLogo },
  { name: 'SketchUp', abbr: 'Sk', bg: '#f6ffed', img: bentleyLogo } // Bentley placeholder
];

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

const PlumbingPublicHealth = () => {
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
            Services &gt; Design Services &gt; <span>Plumbing & Public Health</span>
          </div>
          <h1 className="arch-hero-title">Public Health Design Engineering Services</h1>
          <p className="arch-hero-subtitle" style={{ color: 'white', maxWidth: '800px', margin: '20px 0', fontSize: '1.2rem' }}>
            Reliable Plumbing & Public Health Engineering Solutions by JSE Engineering
          </p>
        </div>
      </section >

      {/* What is Public Health (About) Section */}
      < section className="arch-what-section" >
        <div className="arch-what-container">
          {/* Text Side */}
          <div className="arch-what-text">
            <span className="arch-what-tagline">OUR EXPERTISE</span>
            <h2 className="arch-what-title">Public Health Design Services</h2>
            <p className="arch-what-desc">
              JSE Engineering provides comprehensive Plumbing and Public Health Design Engineering services that ensure reliable water supply, effective wastewater management, and strict adherence to public health standards.
            </p>
            <p className="arch-what-desc">
              Our designs prioritize hygiene, sustainability, and long-term operational performance across all building types, including residential, commercial, healthcare, industrial, and infrastructure developments.
            </p>
            <p className="arch-what-desc">
              Each solution is developed with a strong understanding of regulatory requirements, site-specific conditions, and future maintenance needs—ensuring systems that perform efficiently throughout the building lifecycle.
            </p>
          </div>
          {/* Image Side */}
          <div className="arch-what-image-wrapper">
            <div className="arch-image-back"></div>
            <img src={whatIsImage} alt="Public Health Design" className="arch-what-img"
              loading="lazy"
              decoding="async" />
          </div>
        </div>
      </section >






      <section className="arch-services-section">
        <div className="arch-services-container">
          <div className="arch-services-header">
            <span className="arch-services-tagline">OUR EXPERTISE</span>
            <h2 className="arch-services-title">Public Health Design Services Include</h2>
            <p className="arch-services-desc">
              Transforming projects with reliable, compliant, and sustainable plumbing solutions.
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
      <section className="internship-form-section">
        <div className="form-container">
          {/* Left Side: Title & Info */}
          <div className="form-info-side">
            <h2 className="form-heading">Start Your Project</h2>
            <p className="form-subtext">
              Ready to optimize your workflow with JSE's Plumbing & Public Health services? Fill out the details and we'll get in touch with you shortly.
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
      </section>

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
            <h2 className="arch-choose-heading">Why Choose JSE for Public Health Design?</h2>
            <p className="arch-choose-desc">
              Our team delivers precise, coordinated plumbing and public health engineering designs that are cost-effective, scalable, and future-ready.
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
              By working closely with clients, consultants, and project teams, we ensure every system aligns with project objectives and is constructed to perform reliably over its full lifecycle.
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

export default PlumbingPublicHealth;
