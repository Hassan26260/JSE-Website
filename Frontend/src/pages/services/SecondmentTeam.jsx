import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import "../../styles/Page.css";
import "./VirtualTeam.css";

import heroImage from '../../assets/images-home/home-new-img/secondment.jpg.jpeg';
import offerImage from '../../assets/images-home/secondment/what-we-offer.jpg';

// Standardized Images for Additional Services (Matching Home.jsx)
import mepImg from '../../assets/images-home/home-new-img/MEP.png';
import archImg from '../../assets/images-home/home-new-img/BIM.webp';
import structImg from '../../assets/images-home/home-new-img/structural-eng.webp';
import steelImg from '../../assets/images-home/home-new-img/steel-detail.jfif';
import infraImg from '../../assets/images-home/home-new-img/infrastructural.webp';
import virtualEngImage from '../../assets/images-home/home-new-img/virtual-team.jpg';
import secondmentImage from '../../assets/images-home/home-new-img/secondment.jpg.jpeg';

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

      {/* Why Choose JSE & What Should I Do */}
      <section className="virtual-why-section">
        <div className="virtual-why-container">
          <div className="virtual-intro-left" style={{ marginBottom: '3rem' }}>
            <h2 className="virtual-why-main-title">Why Choose JSE</h2>
            <p className="virtual-why-desc" style={{ maxWidth: '800px' }}>
              JSE Engineering understands the complexities of project-based work and the importance of having the right expertise at the right time. Our Secondment Team Services allow you to quickly augment your team with specialized talent without the lengthy recruitment process.
            </p>
            <p className="virtual-why-desc" style={{ maxWidth: '800px', marginTop: '1rem' }}>
              By leveraging our deep pool of experienced professionals to your location, we can ensure that your projects are executed with precision and efficiency, backed by the most advanced BIM tools in the industry.
            </p>
            <p className="virtual-why-desc" style={{ maxWidth: '800px', marginTop: '1rem' }}>
              In basis of our logistic architect service, the buider or real estate client handle the comfort of their contract talents including visas, travel, accommodation, and meals, allowing experts to focus entirely on delivering high-quality work.
            </p>
          </div>

          <div className="virtual-why-header">
            <h2 className="virtual-why-main-title">What Should I Do If I Want JSE Secondment?</h2>
          </div>

          <div className="virtual-why-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            {ACTION_PLAN.map((item, index) => (
              <div key={index} className="virtual-why-card">
                <div className="virtual-why-card-icon" style={{ borderRadius: '50%', border: '1px solid #144AE0', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', color: '#144AE0' }}>{index + 1}</div>
                <h3 className="virtual-why-card-title">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Execute */}
      <section className="arch-choose-section">
        <div className="arch-choose-container">
          <div className="arch-choose-left">
            <h2 className="arch-choose-heading">How We Execute</h2>
            <p className="arch-choose-desc">
              Our process begins with a thorough understanding of your project requirements. We help you identify the specific skills and experience needed, then present you with a curated selection of professionals proficient in essential BIM software like Autodesk Revit for architectural modelling, Navisworks for project review, and AutoCAD for detailed design work.
            </p>
          </div>
          <div className="arch-choose-right">
            <p className="arch-choose-desc">
              After you select your team members via virtual interviews, we coordinate their deployment to your project site, ensuring they are fully integrated and productive from day one. With JSE’s Secondment Team Services, you gain the expertise you need, exactly when you need it, with the assurance of top-tier BIM support.
            </p>
          </div>
        </div>
      </section>

      {/* Why Successful */}
      <section className="virtual-process-section" style={{ background: '#0B1221' }}>
        <div className="virtual-process-container">
          <h2 className="virtual-process-heading">Why We Are A Successful Secondment Partner</h2>
          <div className="virtual-why-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', marginTop: '3rem' }}>
            {SUCCESS_FACTORS.map((factor, index) => (
              <div key={index} style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', borderLeft: '3px solid #144AE0' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '0.5rem' }}>{factor.title}</h3>
                <p style={{ color: '#cbd5e1' }}>{factor.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Technologies */}
      <section className="tech-section">
        <div className="tech-container">
          <h2 className="virtual-why-main-title">Advanced Technologies We Use</h2>
          <p className="tech-desc-left" style={{ marginBottom: '2rem' }}>
            Our secondment team are experts in the latest BIM technologies ensuring your design engineering project benefits from cutting-edge design and modeling capabilities.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            {TOOLS.map((tool, index) => (
              <span key={index} style={{ padding: '0.8rem 1.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }}>
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="virtual-intro-section" style={{ padding: '4rem 0', background: 'transparent' }}>
        <div className="virtual-intro-container" style={{ justifyContent: 'center', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', width: '100%' }}>Ready to leverage a specialized secondment team for your projects?</h2>
          <p style={{ fontSize: '1.2rem', color: '#cbd5e1', maxWidth: '800px', margin: '0 auto' }}>
            Want another hand for your project? Contact us today to learn about our secondment services.
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

    </div>
  );
};

export default SecondmentTeam;
