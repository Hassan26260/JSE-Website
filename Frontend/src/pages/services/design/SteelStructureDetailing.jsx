import React, { useEffect, useState } from 'react';
import './ArchitecturalBIM.css';
import heroImage from '../../../assets/images-home/architectural-bim.webp';

import whatIsImage from '../../../assets/images-home/bim-modelling.webp';

// Portfolio Imports
// Portfolio Imports
import { STEEL_PROJECTS } from '../../../data/realPortfolio';


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
import s8 from '../../../assets/images-home/hero-group-image.webp'; // Placeholder for ELV if no specific image

const SERVICES_DATA = [
  { title: "BIM consulting", img: s1, desc: "Strategic guidance for successful BIM adoption." },
  { title: "Shop Drawing", img: s2, desc: "Precise drawings for fabrication and installation." },
  { title: "Revit 3D Service", img: s3, desc: "Detailed 3D modeling using Autodesk Revit." },
  { title: "Architectural BIM/VDC", img: s4, desc: "Virtual Design and Construction for better planning." },
  { title: "Architectural 3D modeling", img: s5, desc: "High-fidelity 3D models for visualization." },
  { title: "CAD drafting", img: s6, desc: "Accurate 2D drafting and documentation." },
  { title: "Utility Modeling", img: s1, desc: "Comprehensive modeling of MEP and utility systems." },
  { title: "Construction Documentation", img: s2, desc: "Complete sets of construction plans and details." },
  { title: "BIM Clash Detection", img: s3, desc: "Identifying and resolving conflicts before construction." },
  { title: "BIM Visualization", img: s4, desc: "Photorealistic renderings and walkthroughs." },
  { title: "BIM Quantity Takeoffs", img: s5, desc: "Automated material quantity extraction." },
  { title: "Collaboration and Coordination", img: s6, desc: "Streamlined team workflows and communication." }
];

const ICONIC_PROJECTS = STEEL_PROJECTS.slice(0, 6).map(p => ({
  title: p.title,
  img: p.image
}));


const CHOOSE_JSE_DATA = [
  {
    title: "Innovative Solutions",
    desc: "Our BIM architectural design engineers use the latest technology to create innovative and highly detailed 3D models that bring your vision to life."
  },
  {
    title: "Holistic Approach",
    desc: "JSE integrate all aspects of architectural design, ensuring seamless coordination between different building systems for optimal functionality and aesthetics."
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
  { title: "Steel Structure Detailing", link: "/services/design/steel-structure-detailing", img: s1 },
  { title: "MEP Design", link: "/services/design/mep-design", img: s4 },
  { title: "Plumbing & Public Health", link: "/services/design/plumbing-public-health", img: s6 },
  { title: "HVAC Design", link: "/services/design/hvac-design", img: s5 },
  { title: "Firefighting Design", link: "/services/design/firefighting-design", img: s4 }, // Reuse MEP
  { title: "BIM Modelling", link: "/services/design/bim-modelling", img: s3 },
  { title: "Electrical System Design", link: "/services/design/electrical-system-design", img: s7 },
  { title: "Extra Low Voltage", link: "/services/design/elv", img: s8 }
];

const SteelStructureDetailing = () => {
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
            Services &gt; Design Services &gt; <span>Steel Structure Detailing</span>
          </div>
          <h1 className="arch-hero-title">Steel Structure Detailing</h1>
        </div>
      </section >

      {/* Core Pillars Section (4 Columns) */}
      < section className="arch-pillars-section" >
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
      </section >

      {/* What is Architectural BIM Section */}
      < section className="arch-what-section" >
        <div className="arch-what-container">
          {/* Text Side */}
          <div className="arch-what-text">
            <span className="arch-what-tagline">THE CONCEPT</span>
            <h2 className="arch-what-title">What is Steel Structure Detailing?</h2>
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
      </section >






      <section className="arch-services-section">
        <div className="arch-services-container">
          <div className="arch-services-header">
            <span className="arch-services-tagline">OUR EXPERTISE</span>
            <h2 className="arch-services-title">Our Steel Structure Detailing Services Include</h2>
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
      <section className="internship-form-section">
        <div className="form-container">
          {/* Left Side: Title & Info */}
          <div className="form-info-side">
            <h2 className="form-heading">Start Your Project</h2>
            <p className="form-subtext">
              Ready to optimize your workflow with JSE's Steel Structure Detailing services? Fill out the details and we'll get in touch with you shortly.
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
            <h2 className="arch-choose-heading">Why Choose JSE for Steel Structure Detailing Engineers?</h2>
            <p className="arch-choose-desc">
              Choosing JSE’s BIM Architectural Design Engineers means gaining a strategic partner focused on precision, efficiency, and innovation. Our team leverages advanced BIM workflows to deliver accurate, data-rich architectural models that enhance visualization, improve coordination, and reduce design conflicts from the earliest stages.
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

      {/* Technologies Section */}
      <section className="tech-section">
        <div className="tech-container">
          <h2 className="tech-heading-center">Transform Your Vision with Architectural BIM Precision</h2>
          <div className="tech-grid">
            {BIM_TECH_DATA.map((tech, index) => (
              <div key={index} className="tech-card">
                <div className="tech-logo-wrapper" style={{ background: tech.bg }}>
                  {tech.img ? (
                    <img src={tech.img} alt={tech.name} className="tech-logo-img" loading="lazy" decoding="async" />
                  ) : (
                    <span className="tech-abbr">{tech.abbr}</span>
                  )}
                </div>
                <p className="tech-name">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Menu Section */}
      <section className="arch-additional-section">
        <div className="arch-additional-container">
          <h2 className="arch-additional-heading">Additional Services You Can Benefit From</h2>
          <div className="arch-service-list">
            {ADDITIONAL_SERVICES.map((item, index) => (
              <a key={index} href={item.link} className="arch-service-item">
                <span className="arch-service-text">{item.title}</span>
                <div className="arch-service-img-wrapper">
                  <img src={item.img} alt={item.title} className="arch-service-hover-img" loading="lazy" decoding="async" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

    </div >
  );
}; // End of Component

export default SteelStructureDetailing;
