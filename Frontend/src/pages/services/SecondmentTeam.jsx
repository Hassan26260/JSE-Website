import React, { useState } from 'react';
import "../../styles/Page.css";
import "./VirtualTeam.css"; // Reuse Virtual Team styles
import StickyContact from '../../components/StickyContact';
import heroImage from '../../assets/images-home/home-new-img/secondment.jpg.jpeg';
import offerImage from '../../assets/images-home/secondment/what-we-offer.jpg';
import whyChooseImage from '../../assets/images-home/secondment/why-choose.JPG';
import executeImage from '../../assets/images-home/secondment/our-approach.jpg';
import card2Img from '../../assets/backup-img/pexels-pixabay-273209.jpg';
import card4Img from '../../assets/backup-img/pexels-jgathisan0612-1580112.jpg';
import card7Img from '../../assets/backup-img/pexels-mantasink-1106476.jpg';

// Standardized Images for Additional Services (Matching Home.jsx)
import mepImg from '../../assets/images-home/mep-design.webp';
import archImg from '../../assets/images-home/architectural-bim.webp';
import structImg from '../../assets/images-home/bim-modelling.webp';
import steelImg from '../../assets/images-home/hvac-design.webp'; // Matching Home.jsx mapping
import infraImg from '../../assets/images-home/home-new-img/infrastructural.webp'; // Matching Home.jsx mapping
import virtualEngImage from "../../assets/images-home/home-new-img/virtual-t.JPG";
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

const PROCESS_STEPS = [
  {
    title: "1. Requirement Analysis",
    desc: "We work with you to understand your specific project needs, technical requirements, and team culture to identify the perfect fit."
  },
  {
    title: "2. Candidate Selection",
    desc: "Our team screens and selects highly qualified professionals from our pool of engineers, architects, and BIM specialists."
  },
  {
    title: "3. Onboarding & Deployment",
    desc: "Selected candidates are briefed and deployed to your location or project, ready to integrate into your workflow immediately."
  },
  {
    title: "4. Ongoing Support",
    desc: "We handle all administrative and HR-related tasks, ensuring smooth operations while you focus on project delivery."
  },
  {
    title: "5. Completion & Feedback",
    desc: "Upon assignment completion, we gather feedback to ensure satisfaction and continuous improvement of our services."
  }
];

const SECONDMENT_STEPS = [
  {
    title: "1. Define Your Needs",
    desc: "Tell us about your project scope, duration, and the specific skills required.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
  },
  {
    title: "2. Review Profiles",
    desc: "We present you with a shortlist of qualified candidates for your review.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
  },
  {
    title: "3. Interview & Select",
    desc: "Conduct interviews with the candidates to ensure they meet your expectations.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
  },
  {
    title: "4. Start Work",
    desc: "The selected professionals join your team and start contributing immediately.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
  }
];

const SecondmentTeam = () => {
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
    <div className="virtual-team-page">
      {/* Hero Section */}
      {/* New Split Hero Section */}
      <div className="service-hero-split">
        {/* Left Text Side */}
        <div className="hero-text-content">
          <span className="hero-small-label">Flexible Staffing</span>
          <h1 className="hero-title-split">
            Secondment<br />Team
          </h1>
          <p className="hero-desc-split">
            Temporary engineering professionals to support your project needs. Strengthen your projects with skilled engineering talent.
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
            <img src={heroImage} alt="Secondment Team" className="hero-img-split" loading="eager" />
          </div>
        </div>
      </div>

      {/* Intro Section (2 Column) */}
      <section className="virtual-intro-section">
        <div className="virtual-intro-container">
          <div className="virtual-intro-left">
            <h2>Flexible Staffing,<br />Expertise When You Need It</h2>
          </div>
          <div className="virtual-intro-right">
            <p>
              Specialized JSE Engineering Secondment & Staffing Services to strengthen your projects with skilled engineering talent.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="virtual-what-section">
        <div className="virtual-what-container">
          <div className="virtual-what-text">
            <span className="dash-tagline">OUR SERVICE</span>
            <h2 className="virtual-what-title">What We Offer</h2>
            <p className="virtual-what-desc">
              Our Secondment Team service provides temporary engineering professionals who can join your organization for specific project durations.
            </p>
            <p className="virtual-what-desc">
              This flexible solution helps you meet project deadlines and handle peak workloads without long-term commitments, ensuring you have the right expertise exactly when you need it.
            </p>
          </div>
          <div className="virtual-what-image-wrapper">
            <div className="virtual-image-back"></div>
            <img src={offerImage} alt="Secondment Team Offer" className="virtual-what-img" loading="lazy" decoding="async" />
          </div>
        </div>
      </section>

      {/* Process Section (Timeline) */}
      <section className="virtual-process-section">
        <div className="virtual-process-container">
          <h2 className="virtual-process-heading">Process of JSE Secondment Service</h2>
          <div className="virtual-process-timeline">
            <div className="timeline-center-line"></div>

            {PROCESS_STEPS.map((step, index) => (
              <div key={index} className={`timeline-row ${index % 2 === 0 ? 'row-left' : 'row-right'}`}>
                {/* Content Side */}
                <div className="timeline-content-side">
                  <div className="timeline-card">
                    <div className="timeline-icon-box">
                      {/* Simple Numbered Icon for consistency if specific SVGs aren't mapped */}
                      <div style={{
                        width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontWeight: 'bold', fontSize: '1.2rem', color: '#144AE0', border: '2px solid #144AE0', borderRadius: '50%'
                      }}>
                        {index + 1}
                      </div>
                    </div>
                    <h3>{step.title.replace(/^\d+\.\s*/, '')}</h3>
                    {Array.isArray(step.desc) ? (
                      <ul className="process-list" style={{ textAlign: 'left', paddingLeft: '1.2rem', margin: '0.5rem 0', color: '#64748b' }}>
                        {step.desc.map((item, i) => (
                          <li key={i} style={{ marginBottom: '0.3rem' }}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>{step.desc}</p>
                    )}
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

      {/* Why Choose JSE Section (Replicating VE What We Offer) */}
      <section className="virtual-offer-section">
        <div className="virtual-offer-container">
          <div className="virtual-offer-image-wrapper">
            <div className="virtual-offer-image-back"></div>
            <img src={whyChooseImage} alt="Why Choose JSE" className="virtual-offer-img" loading="lazy" decoding="async" />
          </div>
          <div className="virtual-offer-text">
            <span className="dash-tagline">WHY CHOOSE US</span>
            <h2 className="virtual-offer-title">Why Choose JSE</h2>
            <p className="virtual-offer-desc">
              JSE Engineering understands the complexities of project-based work and the importance of having the right expertise at the right time. Our Secondment Team Services allow you to quickly augment your team with specialized talent without the lengthy recruitment process.
            </p>
            <p className="virtual-offer-desc">
              By leveraging our deep pool of experienced professionals to your location, we can ensure that your projects are executed with precision and efficiency, backed by the most advanced BIM tools in the industry.
            </p>
            <p className="virtual-offer-desc">
              In basis of our logistic architect service, the builder or real estate client handle the comfort of their contract talents including visas, travel, accommodation, and meals, allowing experts to focus entirely on delivering high-quality work.
            </p>
          </div>
        </div>
      </section>

      {/* What Should I Do If I Want JSE Secondment Section (Workflow) */}
      <section className="workflow-section">
        <div className="workflow-container">
          <div className="virtual-why-header" style={{ marginBottom: '4rem' }}>
            <span className="dash-tagline">THE PROCESS</span>
            <h2 className="virtual-why-main-title">What Should I Do If I Want JSE Secondment?</h2>
          </div>
          <div className="workflow-grid">
            {SECONDMENT_STEPS.map((step, index) => (
              <div key={index} className="workflow-card">
                <div className="workflow-card-inner">
                  <div className="workflow-icon-box">
                    {step.icon}
                  </div>
                  <h3>{step.title.replace(/^\d+\.\s*/, '')}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Execute Section */}
      <section className="virtual-what-section">
        <div className="virtual-what-container">
          <div className="virtual-what-text">
            <span className="dash-tagline">OUR APPROACH</span>
            <h2 className="virtual-what-title">How We Execute</h2>
            <p className="virtual-what-desc">
              Our process begins with a thorough understanding of your project requirements. We help you identify the specific skills and experience needed, then present you with a curated selection of professionals proficient in essential BIM software like Autodesk Revit for architectural modelling, Navisworks for project review, and AutoCAD for detailed design work.
            </p>
            <p className="virtual-what-desc">
              After you select your team members via virtual interviews, we coordinate their deployment to your project site, ensuring they are fully integrated and productive from day one. With JSE’s Secondment Team Services, you gain the expertise you need, exactly when you need it, with the assurance of top-tier BIM support.
            </p>
          </div>
          <div className="virtual-what-image-wrapper">
            <div className="virtual-image-back"></div>
            <img
              src={executeImage}
              alt="How We Execute"
              className="virtual-what-img"
              style={{ maxHeight: '450px', objectFit: 'cover' }}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

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

      {/* Advanced Technologies Section Removed */}

      {/* Form Section (Replicated from Virtual Team) */}
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

      {/* Previous Content - Preserved/Restructured */}

    </div>
  );
};

export default SecondmentTeam;
