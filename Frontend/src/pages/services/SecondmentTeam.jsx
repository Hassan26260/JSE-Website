import React, { useState } from 'react';
import "../../styles/Page.css";
import "./VirtualTeam.css"; // Reuse Virtual Team styles
import StickyContact from '../../components/StickyContact';
import heroImage from '../../assets/images-home/secondment/secondament-hero.JPG';
import offerImage from '../../assets/images-home/secondment/what-we-offer.jpg';
import whyChooseImage from '../../assets/images-home/secondment/why-choose.JPG';
import executeImage from '../../assets/images-home/secondment/our-approach.jpg';
import card2Img from '../../assets/backup-img/pexels-pixabay-273209.jpg';
import card4Img from '../../assets/backup-img/pexels-jgathisan0612-1580112.jpg';
import card7Img from '../../assets/backup-img/pexels-mantasink-1106476.jpg';

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


const PROCESS_STEPS = [
  {
    title: "1. BIM Consultation",
    desc: ["Service Requirements", "Service Design", "Service Interface Specification"]
  },
  {
    title: "2. Service Candidate Identification",
    desc: ["Interview", "Selection"]
  },
  {
    title: "3. Onboarding",
    desc: ["Staffing/Secondment Service", "Digital Solutions", "Design Engineering"]
  },
  {
    title: "4. Service and Deployment",
    desc: ["Project Management", "Service Deployment"]
  },
  {
    title: "5. Support",
    desc: ["Construction Services", "Facility Audits", "Design Build/Drafting"]
  },
  {
    title: "6. Validated & Deployed Service",
    desc: ["Final Service Validation", "Post-Deployment Support"]
  }
];

const SECONDMENT_STEPS = [
  {
    title: "1. Contact JSE's Representative",
    desc: "Reach out to discuss your project needs.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
    )
  },
  {
    title: "2. Define Secondment Dates & Design Requirements",
    desc: "Align on timeline and technical scope.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
        <path d="M9 16l2 2 4-4"></path>
      </svg>
    )
  },
  {
    title: "3. Specify Your Staffing Needs",
    desc: "Identify roles, skills, and experience levels.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    )
  },
  {
    title: "4. Schedule Talent Interviews",
    desc: "Meet potential candidates for your team.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7"></polygon>
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
      </svg>
    )
  },
  {
    title: "5. Review & Sign Supporting Documents",
    desc: "Finalize contracts and agreements.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <polyline points="10 9 9 9 8 9"></polyline>
      </svg>
    )
  },
  {
    title: "6. Oversee Talent Onboarding Process",
    desc: "Integrate the team into your workflow.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="8.5" cy="7" r="4"></circle>
        <polyline points="17 11 19 13 23 9"></polyline>
      </svg>
    )
  },
  {
    title: "7. Enjoy Our Secondment Services",
    desc: "Focus on your project success.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
    )
  }
];

// SECONDMENT_TECH_DATA removed

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
      <section className="virtual-hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="virtual-hero-overlay"></div>
        <div className="virtual-hero-content">
          <h1 className="virtual-hero-title">Secondment Team</h1>
          <p className="virtual-hero-desc">
            Temporary engineering professionals to support your project needs
          </p>
          <button onClick={scrollToForm} className="virtual-hero-cta" style={{ cursor: 'pointer', border: 'none', font: 'inherit' }}>Hire Us</button>
        </div>
      </section>

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
