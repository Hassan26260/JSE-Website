import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../../styles/Page.css";
import "./VirtualTeam.css";
import StickyContact from '../../components/StickyContact';
import heroImage from "../../assets/virtual-eng/pexels-fauxels-3184405.webp";
import conceptImage from "../../assets/images-home/virtual-te/virtual-about.jpeg";

// Specialization Images
// import archImg from "../../assets/images-home/architectural-bim.webp"; // Using s2
// import hvacImg from "../../assets/images-home/hvac-design.webp"; // Using s5
// import plumbImg from "../../assets/images-home/plumbing.webp"; // Using s6
// import mepImg from "../../assets/images-home/mep-design.webp"; // Using s4 (Fire uses s4 too in other files, checking mapping)
// import elvImg from "../../assets/images-home/bim-modelling.webp"; // Placeholder for ELV
// import elecImg from "../../assets/images-home/electrical-system.webp"; // Using s7
// import steelImg from "../../assets/images-home/skyscraper.webp"; // Placeholder for Steel, s1?
// import fireImg from "../../assets/images-home/mep-design.webp"; // Placeholder for Fire

import heroGroupImage from "../../assets/images-home/hero-group-image.jpg";

// Standardized Images for Additional Services
import s1 from '../../assets/images-home/skyscraper.webp';
import s2 from '../../assets/images-home/architectural-bim.webp';
import s3 from '../../assets/images-home/bim-modelling.webp';
import s4 from '../../assets/images-home/mep-design.webp'; // Firefighting / MEP
import s5 from '../../assets/images-home/hvac-design.webp'; // HVAC / Steel
import s6 from '../../assets/images-home/plumbing.webp';
import s7 from '../../assets/images-home/electrical-system.webp';
import s8 from '../../assets/images-home/hero-group-image.jpg';
import virtualEngImage from "../../assets/images-home/home-new-img/virtual-t.JPG";
import secondmentImage from "../../assets/images-home/secondament.JPG";



// Technologies Data
// TECHNOLOGIES_DATA removed

// Hardware Data with SVG Icons (Bento Style)
const HARDWARE_DATA = [
  {
    name: "Workstations",
    desc: "High-Performance i9/Xeon Processors with RTX Graphics",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
  },
  {
    name: "Render Farms",
    desc: "Dedicated servers for high-speed rendering",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
  },
  {
    name: "Cloud Servers",
    desc: "Secure cloud storage for real-time collaboration",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>
  },
  {
    name: "NAS Storage",
    desc: "Redundant local backups ensuring data safety",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
  },
  {
    name: "VR Headsets",
    desc: "Meta Quest & HTC Vive for immersive walkthroughs",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 16.1A5 5 0 0 1 5.9 2h12.2A5 5 0 0 1 22 16.1V22h-5.9l-2.1-3h-4l-2.1 3H2v-5.9z"></path></svg>
  },
  {
    name: "Laser Scanners",
    desc: "Precise site surveying tools",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line></svg>
  },
  {
    name: "Site Tablets",
    desc: "iPad Pro & Surface for on-site coordination",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
  }
];

// Communication Data
const COMMUNICATION_DATA = [
  {
    name: "Microsoft Teams",
    desc: "Unified communication and collaboration platform",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
  },
  {
    name: "Google Meet",
    desc: "Secure video conferencing for seamless meetings",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 7l-7 5 7 5V7z"></path><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
  }
];

// Additional Services Data (Standardized)
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

// Why Choose Us Data
const WHY_CHOOSE_DATA = [
  { title: "Hire Us Within 24Hrs", desc: "Say goodbye to HR personnel and payroll burdens. Just hire our virtual team within 24hrs period & focus on your core project." },
  { title: "Cost-Effective Solutions", desc: "Optimize costs & productivity levels by upsizing or downsizing your man power by hiring us (monthly resource contracts)." },
  { title: "Global Talent Pool", desc: "Access a diverse range of experts from different disciplines, ensuring you get the best minds working on your project." },
  { title: "No Long-Term Commitments", desc: "Scale onshore resources at offshore resource project costs. Make your business simple with our weekly/monthly/yearly resource contracts." },
  { title: "No Geographical Limitations", desc: "Our virtual team operates seamlessly across borders, ensuring your project progresses smoothly, regardless of location." },
  { title: "Cutting-Edge Technology", desc: "Benefit from the latest tools and software, ensuring high-quality output and efficient collaboration." }
];

// Process Steps Data
const PROCESS_STEPS = [
  {
    title: "1. Consultation and Requirement Gathering",
    desc: "We start with a detailed discussion to understand your project requirements, timeline, and specific goals."
  },
  {
    title: "2. Select Your Team/Workforce",
    desc: "Based on your needs, you can select the most suitable engineers from our pool of experts."
  },
  {
    title: "3. Project Kick-Off and Collaboration",
    desc: "We set up all the necessary tools for seamless communication and collaboration. Our virtual team integrates with your existing workflow, providing regular updates and maintaining open channels for feedback."
  },
  {
    title: "4. Ongoing Support and Project Management",
    desc: "Our team remains fully engaged throughout the project, ensuring that all tasks are completed to your satisfaction. We manage timelines, deliverables, and quality control."
  },
  {
    title: "5. Completion Of Contract",
    desc: "Upon project completion, we conduct a thorough review to ensure all objectives are met. You can close or continue our weekly/monthly/yearly contract based on demands."
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
    // Add submission logic here
  };

  const stickyContactRef = useState(null);

  const scrollToForm = () => {
    stickyContactRef.current?.open();
  };

  return (
    <div className="virtual-team-page" >
      {/* Hero Section */}
      <section className="virtual-hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="virtual-hero-overlay"></div>
        <div className="virtual-hero-content">
          <h1 className="virtual-hero-title">Virtual Engineers</h1>
          <p className="virtual-hero-desc">
            JSE's Engineer & Architect Virtual Assistant service bridges any geographical distance to work on projects on a remote basis
          </p>
          <button onClick={scrollToForm} className="virtual-hero-cta" style={{ cursor: 'pointer', border: 'none', font: 'inherit' }}>Hire Us</button>
        </div>
      </section>

      <section className="virtual-intro-section">
        <div className="virtual-intro-container">
          <div className="virtual-intro-left">
            <h2>Your Project,<br />Our Expertise Anywhere, Anytime</h2>
          </div>
          <div className="virtual-intro-right">
            <p>Specialized JSE Engineering Virtual Workforce to fulfill all your comprehensive engineering demands</p>
          </div>
        </div>
      </section>

      {/* What is VE? Section */}
      <section className="virtual-what-section">
        <div className="virtual-what-container">
          <div className="virtual-what-text">
            <span className="dash-tagline">THE CONCEPT</span>
            <h2 className="virtual-what-title">What is Virtual Engineering?</h2>
            <p className="virtual-what-desc">
              JSE Engineering is a leading building services consultancy operating across the UAE, Australia, and India. We deliver innovative construction and BIM solutions through our strong virtual workforce.
            </p>
            <p className="virtual-what-desc">
              Founded in 2020 with a team of 4 BIM engineers, we have grown into a global network of 450+ BIM professionals, enabling seamless collaboration across geographies.
            </p>
            <p className="virtual-what-desc">
              Our dedicated virtual teams integrate effortlessly with your projects, ensuring efficiency, adaptability, and high-quality outcomes—without the limitations of traditional staffing models.
            </p>
            {/* <p className="virtual-what-desc">
              Our commitment is to deliver top-quality results with efficiency and adaptability, empowering you to achieve your goals without the constraints of traditional staffing models. Join us in redefining project management with our cutting-edge virtual team services.
            </p> */}
          </div>
          <div className="virtual-what-image-wrapper">
            <div className="virtual-image-back"></div>
            <img src={conceptImage} alt="Virtual Engineering Concept" className="virtual-what-img" loading="lazy" decoding="async" />
          </div>
        </div>
      </section>

      {/* Specialization Section */}
      {/* Solutions Beyond Software Section */}
      <section className="solutions-list-section">
        <div className="solutions-list-container">
          <div className="solutions-header-group">
            <h2 className="solutions-title">SOLUTIONS BEYOND SOFTWARE</h2>
            <p className="solutions-description">
              We go beyond standard software solutions, providing comprehensive engineering and BIM services tailored to your project's unique needs.
            </p>
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

      {/* What We Offer Section */}
      <section className="virtual-offer-section">
        <div className="virtual-offer-container">
          <div className="virtual-offer-image-wrapper">
            <div className="virtual-offer-image-back"></div>
            <img src={heroGroupImage} alt="What We Offer" className="virtual-offer-img" loading="lazy" decoding="async" />
          </div>
          <div className="virtual-offer-text">
            <span className="dash-tagline">OUR SERVICE</span>
            <h2 className="virtual-offer-title">What We Offer</h2>
            <p className="virtual-offer-desc">
              At JSE Engineering, we offer a "Virtual Team For Hire" service that connects you with top-tier engineers and architects ready to work on your projects remotely.
            </p>
            <p className="virtual-offer-desc">
              Our virtual team is equipped to handle all aspects of your project, ensuring that distance is never a barrier to success. Whether you need specialized skills or a fully managed team, JSE provides the expertise you need to get the job done, no matter where you are.
            </p>
          </div>
        </div>
      </section>

      {/* How We Work Section (Timeline) */}
      <section className="virtual-process-section">
        <div className="virtual-process-container">
          <h2 className="virtual-process-heading">How We Work</h2>
          <div className="virtual-process-timeline">
            <div className="timeline-center-line"></div>

            {PROCESS_STEPS.map((step, index) => (
              <div key={index} className={`timeline-row ${index % 2 === 0 ? 'row-left' : 'row-right'} `}>
                {/* Content Side */}
                <div className="timeline-content-side">
                  <div className="timeline-card">
                    <div className="timeline-icon-box">
                      {/* 1. Consultation (Clipboard) */}
                      {index === 0 && (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#144AE0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                          <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                        </svg>
                      )}
                      {/* 2. Select Team (Users) */}
                      {index === 1 && (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#144AE0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                      )}
                      {/* 3. Kick-off (Rocket) */}
                      {index === 2 && (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#144AE0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                          <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                        </svg>
                      )}
                      {/* 4. Support (Gauge/Settings) */}
                      {index === 3 && (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#144AE0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="3"></circle>
                          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                        </svg>
                      )}
                      {/* 5. Completion (Check Circle) */}
                      {index === 4 && (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#144AE0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      )}
                    </div>
                    <h3>{step.title.replace(/^\d+\.\s*/, '')}</h3>
                    <p>{step.desc}</p>
                  </div>
                </div>

                {/* Center Marker */}
                <div className="timeline-center-marker">
                  <div className="marker-dot"></div>
                </div>

                {/* Empty/Label Side */}
                <div className="timeline-empty-side">
                  <span className="timeline-step-label">STEP 0{index + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="virtual-why-section">
        <div className="virtual-why-container">
          {/* Section Header */}
          <div className="virtual-why-header">
            <span className="dash-tagline">Why Choose</span>
            <h2 className="virtual-why-main-title">JSE Virtual Workforce</h2>
          </div>

          {/* Row 1: Text Left, Cards Right */}
          <div className="why-row-split">
            <div className="why-text-side">
              <h3 className="why-big-text">Efficiency & Speed</h3>
            </div>
            <div className="why-cards-side">
              <div className="why-pyramid-grid">
                {/* Top 2 Cards */}
                <div className="why-card">
                  <h4>{WHY_CHOOSE_DATA[0].title}</h4>
                  <p>{WHY_CHOOSE_DATA[0].desc}</p>
                </div>
                <div className="why-card">
                  <h4>{WHY_CHOOSE_DATA[1].title}</h4>
                  <p>{WHY_CHOOSE_DATA[1].desc}</p>
                </div>
                {/* Bottom Center Card */}
                <div className="why-card card-center">
                  <h4>{WHY_CHOOSE_DATA[2].title}</h4>
                  <p>{WHY_CHOOSE_DATA[2].desc}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Cards Left, Text Right */}
          <div className="why-row-split split-reverse">
            <div className="why-cards-side">
              <div className="why-pyramid-grid">
                {/* Top 2 Cards */}
                <div className="why-card">
                  <h4>{WHY_CHOOSE_DATA[3].title}</h4>
                  <p>{WHY_CHOOSE_DATA[3].desc}</p>
                </div>
                <div className="why-card">
                  <h4>{WHY_CHOOSE_DATA[4].title}</h4>
                  <p>{WHY_CHOOSE_DATA[4].desc}</p>
                </div>
                {/* Bottom Center Card */}
                <div className="why-card card-center">
                  <h4>{WHY_CHOOSE_DATA[5].title}</h4>
                  <p>{WHY_CHOOSE_DATA[5].desc}</p>
                </div>
              </div>
            </div>
            <div className="why-text-side">
              <h3 className="why-big-text">Borderless Growth</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section (Replicated from Internship) */}
      <StickyContact ref={stickyContactRef}>
        <div className="form-container">
          {/* Left Side: Title & Info */}
          <div className="form-info-side">
            <h2 className="form-heading">Start Your Project</h2>
            <p className="form-subtext">
              Ready to optimize your workflow with JSE's Virtual Team? Fill out the details and we'll get in touch with you shortly.
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

      {/* Advanced Technologies Section */}
      <section className="tech-section">
        <div className="tech-container">
          <div className="virtual-why-header" style={{ marginBottom: '4rem' }}>
            <span className="dash-tagline">Technologies</span>
            <h2 className="virtual-why-main-title">Advanced Technologies We Use</h2>
            <p className="tech-desc-left">
              Our professionals are experts in the latest BIM technologies ensuring your design engineering project benefits from cutting-edge design and modeling capabilities.
            </p>
          </div>

          {/* Software Row Removed */}

          {/* Hardware Row */}
          <div className="tech-row">
            <div className="tech-side-heading">
              <h3>Hardware</h3>
            </div>
            <div className="tech-line-divider"></div>
            <div className="tech-content-side">
              <div className="tech-grid hardware-grid">
                {HARDWARE_DATA.map((hw, index) => (
                  <div key={index} className="hardware-card">
                    <div className="hardware-icon-box">{hw.icon}</div>
                    <div className="hardware-info">
                      <h4>{hw.name}</h4>
                      <p>{hw.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="tech-separator"></div>

          {/* Communication Row */}
          <div className="tech-row">
            <div className="tech-side-heading">
              <h3>Communication</h3>
            </div>
            <div className="tech-line-divider"></div>
            <div className="tech-content-side">
              <div className="tech-grid hardware-grid">
                {COMMUNICATION_DATA.map((comm, index) => (
                  <div key={index} className="hardware-card">
                    <div className="hardware-icon-box">{comm.icon}</div>
                    <div className="hardware-info">
                      <h4>{comm.name}</h4>
                      <p>{comm.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>




    </div >
  );
};

export default VirtualTeam;


