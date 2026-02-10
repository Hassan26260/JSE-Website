import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import "../../styles/Page.css";
import "./VirtualTeam.css";
import StickyContact from '../../components/StickyContact';
import heroImage from '../../assets/images-home/home-new-img/virtual-team.jpg';
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

// Standardized Images for Additional Services (Matching Home.jsx)
import mepImg from '../../assets/images-home/mep-design.webp';
import archImg from '../../assets/images-home/architectural-bim.webp';
import structImg from '../../assets/images-home/bim-modelling.webp';
import steelImg from '../../assets/images-home/hvac-design.webp'; // Matching Home.jsx mapping
import infraImg from '../../assets/images-home/home-new-img/infrastructural.webp'; // Matching Home.jsx mapping
import virtualEngImage from "../../assets/images-home/home-new-img/virtual-t.JPG"; // Retained for ADDITIONAL_SERVICES
import secondmentImage from "../../assets/images-home/secondament.JPG";

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
    title: "5. Completion Of Contract",
    desc: "Upon project completion, we conduct a thorough review to ensure all objectives are met. You can close or continue our weekly/monthly/yearly contract based on demands."
  }
];

const HARDWARE_DATA = [
  {
    name: "High-Performance Workstations",
    desc: "Equipped with the latest processors and GPUs for seamless BIM modeling and rendering.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
  },
  {
    name: "Dual-Monitor Setup",
    desc: "Enhanced productivity with extended display estates for multitasking and reference.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="9" height="14" rx="2" ry="2"></rect><rect x="13" y="3" width="9" height="14" rx="2" ry="2"></rect><line x1="6" y1="21" x2="18" y2="21"></line><line x1="6" y1="17" x2="6" y2="21"></line><line x1="18" y1="17" x2="18" y2="21"></line></svg>
  },
  {
    name: "Secure Network Infrastructure",
    desc: "Enterprise-grade security and high-speed connectivity for reliable data transfer.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
  }
];

const COMMUNICATION_DATA = [
  {
    name: "Microsoft Teams",
    desc: "For seamless collaboration, meetings, and file sharing within the project ecosystem.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
  },
  {
    name: "Slack",
    desc: "Instant messaging and channel-based communication for agile team coordination.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.08 9C24.35 6.73 21.08 2 17.5 4.5l-2.08-2A2.94 2.94 0 0 0 11 4.29L12.5 9l-4.5-4.5A2.94 2.94 0 0 0 3.71 8l4.29 4.29L4.5 16.5c-2.5 3.58 2.23 6.85 4.5 4.58l2-2.08a2.94 2.94 0 0 0 3.71.21L11.5 15l4.5 4.5a2.94 2.94 0 0 0 4.29-4.21L16 11l4.29-4.29z"></path></svg>
  },
  {
    name: "Zoom",
    desc: "High-quality video conferencing for face-to-face virtual meetings and presentations.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
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

  const stickyContactRef = useRef(null);

  const scrollToForm = () => {
    stickyContactRef.current?.open();
  };

  return (
    <div className="virtual-team-page" >
      {/* Hero Section */}
      {/* New Split Hero Section */}
      <div className="service-hero-split">
        {/* Left Text Side */}
        <div className="hero-text-content">
          <span className="hero-small-label">GROWTH YOUR BUSINESS</span>
          <h1 className="hero-title-split">
            Virtual Team
          </h1>
          <p className="hero-desc-split">
            Get professional & reliable research oriented solutions for Data Science and Machine Learning business needs. Enjoy stress free decision making!
          </p>
          <button onClick={scrollToForm} className="hero-cta-btn">
            GET STARTED
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>

        {/* Right Image Side */}
        <div className="hero-image-content">
          <div className="hero-diagonal-bar"></div>
          <div className="hero-diagonal-mask">
            <img src={heroImage} alt="Virtual Team" className="hero-img-split" loading="eager" />
          </div>
        </div>
      </div>

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


