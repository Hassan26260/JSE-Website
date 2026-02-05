import React, { useEffect, useState, useRef } from 'react';
import StickyContact from '../../../components/StickyContact';
import './ArchitecturalBIM.css';
import heroImage from '../../../assets/images-home/architectural-bim.webp';

import whatIsImage from '../../../assets/images-home/bim-modelling.webp';

// Portfolio Imports
import { MEP_PROJECTS } from '../../../data/realPortfolio';


// Tech Logos removed

// Reuse images for services
import s1 from '../../../assets/images-home/skyscraper.webp';
import s2 from '../../../assets/images-home/architectural-bim.webp';
import s3 from '../../../assets/images-home/bim-modelling.webp';
import s4 from '../../../assets/images-home/mep-design.webp';
import s5 from '../../../assets/images-home/hvac-design.webp';
import s6 from '../../../assets/images-home/plumbing.webp';
import s7 from '../../../assets/images-home/electrical-system.webp';
import s8 from '../../../assets/images-home/hero-group-image.jpg'; // Placeholder for ELV if no specific image
import virtualEngImage from "../../../assets/images-home/home-new-img/virtual-t.JPG";
import secondmentImage from "../../../assets/images-home/secondament.JPG";

const SERVICES_DATA = [
  { title: "ELV 2D Drafting Services", img: s1, desc: "Precise technical drawings and documentation for ELV systems using BIM workflows." },
  { title: "Advanced ELV BIM Modeling", img: s2, desc: "High-quality 3D BIM models enabling clash detection, coordination, and lifecycle management." },
  { title: "Security System Design", img: s3, desc: "Integrated CCTV, access control, and intrusion detection systems for enhanced security planning." },
  { title: "Public Address & Voice Alarm Systems", img: s5, desc: "Reliable PA and emergency voice alarm systems for effective communication." },
  { title: "Structured Cabling Design", img: s6, desc: "Efficient data and telecom cabling layouts for robust network performance." },
  { title: "Audio-Visual System Design", img: s1, desc: "Integrated AV system designs for optimized communication and presentation environments." },
  { title: "Intercom System Design", img: s2, desc: "Reliable intercom solutions for seamless internal communication." },
  { title: "Television Distribution Systems", img: s3, desc: "Cable, satellite, and IPTV system designs for consistent media distribution." },
  { title: "Lighting Control Systems", img: s4, desc: "Energy-efficient lighting automation integrated within BIM models." },
  { title: "Data Network Design", img: s5, desc: "Secure and scalable data network planning for uninterrupted connectivity." },
  { title: "Access Control System Design", img: s6, desc: "Advanced access control solutions for secure facility management." },
  { title: "Sound System Design", img: s7, desc: "High-quality sound system designs for optimized audio performance." }
];

const ICONIC_PROJECTS = MEP_PROJECTS.slice(0, 6).map(p => ({
  title: p.title,
  img: p.image
}));


const CHOOSE_JSE_DATA = [
  {
    title: "Advanced ELV & BIM Expertise",
    desc: "Leveraging cutting-edge technology for superior system performance."
  },
  {
    title: "Custom Solutions",
    desc: "Project-specific ELV designs tailored to your unique requirements."
  },
  {
    title: "Holistic Design",
    desc: "Future-ready system designs that integrate seamlessly with building infrastructure."
  },
  {
    title: "Safety-Driven Approach",
    desc: "Prioritizing safety and compliance in every engineering decision."
  }
];

const CHOOSE_JSE_DATA_2 = [
  {
    title: "On-Time Delivery",
    desc: "Efficient project management ensuring timely completion and cost-effectiveness."
  },
  {
    title: "Seamless Integration",
    desc: "Coordinated workflows with other building systems for conflict-free execution."
  },
  {
    title: "Client-Centric Collaboration",
    desc: "Working closely with clients to realize their vision and operational goals."
  }
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
const ELV = () => {
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
            Services &gt; Design Services &gt; <span>Extra Low Voltage</span>
          </div>
          <h1 className="arch-hero-title">ELV Engineering BIM MEP Services</h1>
          <p className="arch-hero-subtitle" style={{ fontSize: '1.2rem', marginTop: '1rem', maxWidth: '800px', lineHeight: '1.6' }}>
            Elevate Building Intelligence with Advanced ELV Engineering Solutions.
          </p>
        </div>
      </section >

      {/* Intro / About Section (Replaces Pillars) */}
      <section className="arch-what-section" style={{ padding: '6rem 2rem' }}>
        <div className="arch-what-container">
          {/* Text Side */}
          <div className="arch-what-text">
            <span className="arch-what-tagline">ABOUT ELV</span>
            <h2 className="arch-what-title">Custom Extra-Low Voltage (ELV) System Design Services</h2>
            <p className="arch-what-desc">
              JSE Engineering Pvt Ltd provides comprehensive ELV Engineering and BIM MEP services that integrate intelligent low-voltage systems into modern buildings. Our ELV solutions enhance safety, connectivity, automation, and operational efficiency across diverse sectors.
            </p>
            <p className="arch-what-desc">
              As a leading BIM service provider, we deliver ELV 2D drafting and 3D BIM modeling services for healthcare, education, commercial, residential, industrial, smart city, and infrastructure projects—ensuring seamless coordination throughout the construction lifecycle.
            </p>
          </div>
          {/* Image Side */}
          <div className="arch-what-image-wrapper">
            <div className="arch-image-back"></div>
            <img src={whatIsImage} alt="ELV System Design" className="arch-what-img"
              loading="lazy"
              decoding="async" />
          </div>
        </div>
      </section >

      <section className="arch-services-section">
        <div className="arch-services-container">
          <div className="arch-services-header">
            <span className="arch-services-tagline">OUR EXPERTISE</span>
            <h2 className="arch-services-title">ELV Design Engineering Services We Offer</h2>
            <p className="arch-services-desc">
              Comprehensive ELV engineering solutions for smart, connected, and secure buildings.
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
              Ready to optimize your workflow with JSE's ELV Engineering services? Fill out the details and we'll get in touch with you shortly.
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

      {/* Worldwide Iconic Projects Section */}
      <section className="iconic-projects-section">
        <div className="iconic-container">
          <div className="iconic-header">
            <span className="iconic-tagline">Featured Projects</span>
            <h2 className="iconic-heading">Worldwide Iconic ELV Projects</h2>
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
            <h2 className="arch-choose-heading">Why Choose JSE Engineering for ELV Engineering Projects?</h2>
            <p className="arch-choose-desc">
              Partnering with JSE Engineering ensures that your project benefits from industry-leading expertise in ELV systems. We deliver integrated, future-ready designs that enhance building intelligence, connectivity, and security.
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
              Our commitment to quality and client collaboration ensures that every ELV system we design is robust, scalable, and tailored to meet the specific operational demands of your facility.
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

    </div>
  );
};

export default ELV;
