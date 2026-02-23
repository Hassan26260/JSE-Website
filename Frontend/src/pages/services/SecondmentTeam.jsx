import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import "../../styles/Page.css";
import "./VirtualTeam.css";
import "./SecondmentTeam.css";
import heroImage from '../../assets/images-home/home-new-img/secondment.jpg.png';
import offerImage from '../../assets/images-home/secondment/what-we-offer.png';

// Standardized Images for Additional Services (Matching Home.jsx)
import mepImg from '../../assets/images-home/home-new-img/MEP.png';
import archImg from '../../assets/images-home/home-new-img/BIM.webp';
import structImg from '../../assets/images-home/home-new-img/structural-eng.webp';
import steelImg from '../../assets/images-home/home-new-img/steel-detail.jfif';
import infraImg from '../../assets/images-home/home-new-img/infrastructural.webp';
import virtualEngImage from '../../assets/images-home/home-new-img/virtual-team.jpeg';
import secondmentImage from '../../assets/images-home/home-new-img/secondment.jpg.png';

// Additional Services Data
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
  { title: "Service Requirements", desc: ["Service Design", "BIM Consultation"] },
  { title: "Service Interface Specification", desc: [] },
  { title: "Service Candidate Identification", desc: ["Interview", "Selection", "Onboarding"] },
  { title: "Staffing/Secondment Service", desc: ["Digital Solutions", "Design Engineering", "Service and Deployment", "Project Management"] },
  { title: "Service Deployment", desc: ["Support", "Construction Services", "Facility Audits", "Design Build/Drafting"] },
  { title: "Validated & Deployed Service", desc: ["Final Service Validation", "Post-Deployment Support"] }
];

const ACTION_PLAN = [
  "Contact JSE's Representative",
  "Define Secondment Dates & Design Requirements",
  "Specify Your Staffing Needs",
  "Schedule Talent Interviews",
  "Review & Sign Supporting Documents",
  "Oversee Talent Onboarding Process",
  "Enjoy Our Secondment Services"
];

const SUCCESS_FACTORS = [
  { title: "Provide Support When You Need", desc: "We adapt to project demands and integrate your home team with our required experts: engineers, project managers, consultants." },
  { title: "Stay Connected with Your New Colleagues Early On", desc: "Before your secondment officially begins, we encourage proactive communication with your new team members to build rapport and ensure a smooth transition." },
  { title: "Define Clear Objectives from the Start", desc: "Let us know your specific goals and expectations so we can tailor our services to meet your needs effectively." },
  { title: "Feel Free to Share Your Thoughts", desc: "We value open communication. Don’t hesitate to ask questions or express your opinions; your input is crucial for success." },
  { title: "Maintain Communication with Your Home Team", desc: "We facilitate ongoing interaction with your original team to keep you informed and ensure seamless collaboration across all fronts." },
  { title: "Continuous Feedback for Continuous Improvement", desc: "We actively seek your feedback throughout the secondment to make any necessary adjustments, ensuring we meet your standards." },
  { title: "Understand Before Implementing Changes", desc: "We emphasize understanding the dynamics of your new team before proposing or implementing any changes, and fostering a cooperative work environment." },
  { title: "Stay Connected Even After the Secondment", desc: "The relationship doesn’t end when the project does. We stay in touch to support your ongoing success and future collaboration opportunities." }
];

const TOOLS = [
  "AutoCAD", "Revit", "CADs RC Rebar Detailing", "Navisworks",
  "CIVIL 3D", "AutoCAD Plant 3D", "Microstation/AECOSIM",
  "Luminion/V-Ray", "ENSCAPE", "E-TABS", "STAAD",
  "Tekla Steel", "HAP", "DIALUX", "FABCAD MEP"
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
    <div className="virtual-team-page">
      {/* Hero Section */}
      <div className="service-hero-split">
        <div className="hero-text-content">
          <h1 className="hero-title-split">
            Secondment Team Services
          </h1>
          <p className="hero-desc-split">
            Are you short on your hands? Difficult managing? Why not add Contract-based Talents into your working space?
          </p>
          <button onClick={scrollToForm} className="hero-cta-btn">
            GET STARTED
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
        <div className="hero-image-content">
          <div className="hero-diagonal-bar"></div>
          <img src={heroImage} alt="Secondment Team" className="hero-img-split" loading="eager" />
        </div>
      </div>

      {/* Intro Section */}
      <section className="virtual-intro-section">
        <div className="virtual-intro-container">
          <div className="virtual-intro-left">
            <h2>Expand Your Team with JSE' Secondment or Staffing Services</h2>
          </div>
          <div className="virtual-intro-right">
            <p>Seamlessly Integrate Specialized Engineering Talent into Your Projects. A secondment team service is a temporary or contract-based assignment of talents or employees from us for your respective projects, deployed either for your home team or another construction site over a defined period.</p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="virtual-what-section">
        <div className="virtual-what-container">
          <div className="virtual-what-text">
            <span className="dash-tagline">OUR SERVICE</span>
            <h2 className="virtual-what-title">What We Offer</h2>
            <p className="virtual-what-desc">
              Secondment team service from JSE involves deploying our skilled professionals to work within your organization for a defined period. We provide our clients with direct access to highly skilled BIM design engineering professionals, including architects, engineers, and project managers.
            </p>
            <p className="virtual-what-desc">
              You can select the experts that suit your project needs via a streamlined virtual interview process.
            </p>
            <p className="virtual-what-desc">
              JSE specializes in providing top-tier talent proficient in leading BIM MEP software tools such as Autodesk Revit, Navisworks, AutoCAD, & more, ensuring your 2D or 3D drafting project benefit. Once selected, our professionals are deployed to your location, either abroad or off-site, to seamlessly integrate with your team and deliver exceptional BIM results.
            </p>
          </div>
          <div className="virtual-what-image-wrapper">
            <div className="virtual-image-back"></div>
            <img src={offerImage} alt="Secondment Team Offer" className="virtual-what-img" loading="lazy" decoding="async" />
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="virtual-process-section">
        <div className="virtual-process-container">
          <h2 className="virtual-process-heading">Process of JSE Secondment Service</h2>
          <div className="virtual-process-timeline">
            <div className="timeline-center-line"></div>
            {PROCESS_STEPS.map((step, index) => (
              <div key={index} className={`timeline-row ${index % 2 === 0 ? 'row-left' : 'row-right'}`}>
                <div className="timeline-content-side">
                  <div className="timeline-card">
                    <h3>{step.title}</h3>
                    {step.desc.length > 0 && (
                      <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem', listStyle: 'none' }}>
                        {step.desc.map((d, i) => <li key={i} style={{ color: '#64748b' }}>• {d}</li>)}
                      </ul>
                    )}
                  </div>
                </div>
                <div className="timeline-empty-side"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose JSE */}
      <section className="virtual-why-section" style={{ paddingBottom: '4rem' }}>
        <div className="virtual-why-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <h2 className="virtual-why-main-title" style={{ marginBottom: '2rem' }}>Why Choose JSE</h2>
          <p className="virtual-why-desc" style={{ maxWidth: '900px', fontSize: '1.2rem', lineHeight: '1.8', color: '#475569' }}>
            JSE Engineering understands the complexities of project-based work and the importance of having the right expertise at the right time. Our Secondment Team Services allow you to quickly augment your team with specialized talent without the lengthy recruitment process.
          </p>
          <p className="virtual-why-desc" style={{ maxWidth: '900px', fontSize: '1.2rem', lineHeight: '1.8', color: '#475569', marginTop: '1rem' }}>
            By leveraging our deep pool of experienced professionals to your location, we can ensure that your projects are executed with precision and efficiency, backed by the most advanced BIM tools in the industry.
          </p>
          <p className="virtual-why-desc" style={{ maxWidth: '900px', fontSize: '1.2rem', lineHeight: '1.8', color: '#475569', marginTop: '1rem' }}>
            In basis of our logistic architect service, the buider or real estate client handle the comfort of their contract talents including visas, travel, accommodation, and meals, allowing experts to focus entirely on delivering high-quality work.
          </p>
        </div>
      </section>

      {/* What Should I Do (Sticky Scroll Style from Home) */}
      <section className="secondment-steps-section">
        <div className="secondment-steps-container">
          {/* Left Sticky Content */}
          <div className="secondment-sticky-left">
            <div className="secondment-header-content">
              <span className="dash-tagline" style={{ display: 'flex', marginBottom: '1rem', fontSize: '0.9rem', fontWeight: 700, color: '#144AE0', letterSpacing: '0.15em', textTransform: 'uppercase' }}>ACTION PLAN</span>
              <h2 className="secondment-section-title">What Should I Do If I Want JSE Secondment?</h2>
              <p className="secondment-header-desc">
                Follow these simple steps to seamlessly integrate our world-class engineering experts into your team.
              </p>
            </div>
          </div>

          {/* Right Scrollable Cards */}
          <div className="secondment-cards-list">
            {ACTION_PLAN.map((step, index) => (
              <div key={index} className="secondment-step-card">
                <div className="secondment-step-number">{index + 1}</div>
                <div className="secondment-step-content">
                  <h3 className="secondment-step-title">{step}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Why Successful (MEP Core Expertise Style) */}
      <section className="secondment-success-section">
        <div className="secondment-success-container">
          <div className="secondment-success-header">
            <h2 className="secondment-success-title">Why We Are A Successful Secondment Partner</h2>
          </div>

          <div className="secondment-success-grid">
            {SUCCESS_FACTORS.map((factor, index) => (
              <div key={index} className={`secondment-success-card secondment-pattern-${(index % 4) + 1}`}>
                <div className="secondment-success-content">
                  <h3 className="secondment-success-card-title">{factor.title}</h3>
                  <p className="secondment-success-card-desc">{factor.desc}</p>
                </div>
                <div className="secondment-success-hover-bg"></div>
              </div>
            ))}
          </div>
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

    </div>
  );
};

export default SecondmentTeam;
