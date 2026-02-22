import "../styles/Home.css";
import "../styles/Benefits.css";
import "../styles/ClientMarquee.css"; // New Marquee Styles
import "../styles/TestimonialCarousel.css"; // New 3D Carousel Styles
import StickyContact from "../components/StickyContact";
import ContactForm from "../components/ContactForm";
import { motion, AnimatePresence } from "framer-motion";
import heroBanner from "../assets/images-home/Herobanner.webp";
import heroGroupImage from "../assets/images-home/home-new-img/about-home-new.jpeg";
import whyChooseUsImage from "../assets/images-home/why choose us.png";
import architecturalBim from "../assets/images-home/architectural-bim.webp";
import hvacDesign from "../assets/images-home/hvac-design.webp";
import plumbing from "../assets/images-home/plumbing.webp";
import mepDesign from "../assets/images-home/mep-design.webp";
import bimModelling from "../assets/images-home/bim-modelling.webp";
import electricalSystem from "../assets/images-home/electrical-system.webp";

// Import Consultant Logos
import consLogo1 from '../assets/client-logo/Consultant/logo1.png';
import consLogo2 from '../assets/client-logo/Consultant/logo2.png';
import consLogo3 from '../assets/client-logo/Consultant/logo3.png';
import consLogo4 from '../assets/client-logo/Consultant/logo4.png';
import consLogo5 from '../assets/client-logo/Consultant/logo5.png';
import consLogo6 from '../assets/client-logo/Consultant/logo6.png';
import consLogo7 from '../assets/client-logo/Consultant/logo7.png';
import consLogo8 from '../assets/client-logo/Consultant/logo8.png';
import consLogo9 from '../assets/client-logo/Consultant/logo9.png';
import consLogo10 from '../assets/client-logo/Consultant/logo10.png';
import consLogo11 from '../assets/client-logo/Consultant/logo11.png';
import consLogo12 from '../assets/client-logo/Consultant/logo12.png';
import consLogo13 from '../assets/client-logo/Consultant/logo13.png';

// Import Client Logos (New)
import clientLogo1 from '../assets/client-logo/Arabtec_Holding_Logo.png';
import clientLogo2 from '../assets/client-logo/L&T.png';
import clientLogo3 from '../assets/client-logo/NAFFCO_Logo_(Transparent).png';
import clientLogo4 from '../assets/client-logo/voltas.png';
import clientLogo5 from '../assets/client-logo/aster.png';
import clientLogo6 from '../assets/client-logo/johnson-controls-middletown.png';
import clientLogo7 from '../assets/client-logo/petrofac logo.png';
import clientLogo8 from '../assets/client-logo/bk gulf.png';
import clientLogo9 from '../assets/client-logo/emirates sas.png';
import clientLogo10 from '../assets/client-logo/futuremetro logo.png';
import clientLogo11 from '../assets/client-logo/al shandagha1.png';
import clientLogo12 from '../assets/client-logo/al futtaim.png';
import clientLogo13 from '../assets/client-logo/zone.png';

import mapImage from "../assets/images-home/Map.png";
import heroVideo from "../assets/images-home/home-new-img/hero-video.mp4";
import geoStatsVideo from "../assets/images-home/131857-751353013_small.mp4"; // New Video for Geo Stats

// New Image Assets for Services (Solutions Beyond Software)
import mepImg from "../assets/images-home/home-new-img/MEP.png";
import bimImg from "../assets/images-home/home-new-img/BIM.webp";
import structImg from "../assets/images-home/home-new-img/structural-eng.webp";
import steelImg from "../assets/images-home/home-new-img/steel-detail.jfif";
import infraImg from "../assets/images-home/home-new-img/infrastructural.webp";
import virtualEngImage from "../assets/images-home/home-new-img/virtual-team.jpg";
import secondmentImage from "../assets/images-home/home-new-img/secondment.jpg.jpeg";



import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

// Custom hook for counting up
// Moved outside component to prevent re-creation and state loss on re-renders
const useCountUp = (end, duration = 2000, start = false) => {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!start || hasAnimated.current) return;

    let startTime = null;
    let animationFrameId;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = currentTime - startTime;
      const percentage = Math.min(progress / duration, 1);

      // Ease out quart
      const easeOutQuart = (x) => 1 - Math.pow(1 - x, 4);

      const currentCount = Math.floor(easeOutQuart(percentage) * end);
      setCount(currentCount);

      if (progress < duration) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(end);
        hasAnimated.current = true;
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration, start]);

  return count;
};

const StatCounter = ({ end, suffix = "", start }) => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  if (isMobile) return <span>{end}{suffix}</span>;
  const count = useCountUp(end, 2000, start);
  return <span>{count}{suffix}</span>;
};

const Home = () => {

  const [statsStarted, setStatsStarted] = useState(false);
  const statsRef = useRef(null);
  const location = useLocation();

  // Solutions Data - Expanded for Accordion
  const servicesData = [
    {
      title: "MEP Engineering",
      link: "/services/design/mep-design",
      img: mepImg,
      heading: "MEP Engineering: Our Lead Strength",
      description: "We are a design-led firm capable of taking a project from a blank page to final execution.",
      details: [
        { title: "Complete Lifecycle:", text: "Management from conceptual design through full detailed design and IFC (Issued for Construction) packages." },
        { title: "Integrated Spectrum:", text: "" }, // Header for sub-items
        { title: "Mechanical (HVAC):", text: "Precision cooling and smoke management (ASHRAE/NFPA 92)" },
        { title: "Electrical & ELV:", text: "Power distribution, BMS, Security, and Structured Cabling (IEC/NEC/TIA)" },
        { title: "Public Health Engineering (PHE):", text: "Water supply and drainage (IPC/UPC)" },
        { title: "Fire Protection:", text: "Fire protection systems designed as per NFPA standards" }
      ]
    },
    {
      title: "Architectural BIM",
      link: "/services/design/architectural-bim",
      img: bimImg,
      heading: "Architecture & Structural BIM Detailing",
      description: "Our specialized teams ensure a fully coordinated project environment across all disciplines.",
      details: [
        { title: "Concept to BIM:", text: "Developing architectural and structural BIM models (LOD 200–300) from initial concepts." },
        { title: "Data Extraction:", text: "Expert extraction of high-accuracy 2D construction documentation directly from BIM" }
      ]
    },
    {
      title: "Structural Engineering",
      link: "/services/design/structural",
      img: structImg,
      heading: "High-Performance Structural Engineering",
      description: "We deliver robust, efficient, and innovative structural designs that ensure safety and longevity.",
      details: [
        { title: "Analysis & Design:", text: "Comprehensive structural analysis using advanced software for concrete and steel structures." },
        { title: "Value Engineering:", text: "Optimizing structural systems to reduce material usage without compromising integrity." },
        { title: "Peer Review:", text: "Independent validation of structural designs to ensure code compliance and constructability." }
      ]
    },
    {
      title: "Steel Structure Detailing",
      link: "/services/design/steel-structure-detailing",
      img: steelImg,
      heading: "Specialized Steel Detailing (Tekla Structures)",
      description: "Our detailing team utilizes Tekla Structures to provide high-precision modeling and fabrication-ready output.",
      details: [
        { title: "Comprehensive Detailing:", text: "Detailed steel modeling and accurate construction documentation for modular and stick-built structures." },
        { title: "Connection Detailing:", text: "Accurate detailing of connections for pipe racks, equipment supports, and bridges." },
        { title: "Fabrication Deliverables:", text: "Extraction of NC Files for automated machining, Erection Drawings, and Advanced BOM" }
      ]
    },
    {
      title: "Infrastructural services",
      link: "/services/infrastructural-services",
      img: infraImg,
      heading: "Infrastructure & External Networks (Civil 3D)",
      description: "We provide high-end engineering for large-scale infrastructure, ensuring seamless site utility integration.",
      details: [
        { title: "MEP External Networks:", text: "Utilizing AutoCAD Civil 3D for the design and modeling of external utility networks." },
        { title: "Infrastructure Works:", text: "Focus on quality, safety, and sustainability for diverse global projects." }
      ]
    },
    {
      title: "Virtual Team for Hire",
      link: "/services/virtual-team",
      img: virtualEngImage,
      heading: "Virtual Engineering Team Support",
      description: "JSE Engineering provides a seamless Virtual Office engineering solution, acting as a high-performance extension of your team.",
      details: [
        { title: "On-Demand Scalability:", text: "Quickly expand your technical capacity for mega-scale projects (6,000+ man-hours) without the overhead of local recruitment." },
        { title: "Seamless Integration:", text: "We adapt to your company’s specific standards and internal workflows to ensure absolute consistency." },
        { title: "Expert Leadership:", text: "Every virtual engagement is led by a Dedicated Project Manager and specialized QA/QC Team." },
        { title: "Discipline-Specific Support:", text: "Integrating a team of MEP, Structural, and Tekla detailing experts directly into your workflow." }
      ]
    },
    {
      title: "Secondment Team",
      link: "/services/secondment-team",
      img: secondmentImage,
      heading: "Secondment Team Services",
      description: "Empower your projects with our skilled professionals, available for on-site or remote deployment to meet your specific project needs.",
      details: [
        { title: "Flexible Staffing:", text: "Short-term and long-term secondment options to bridge resource gaps effectively." },
        { title: "On-Site Support:", text: "Deploying experienced engineers and designers directly to your project site for hands-on collaboration." },
        { title: "Resource Management:", text: "We handle the administrative and HR aspects, allowing you to focus on project delivery." }
      ]
    },
  ];

  // Accordion State
  const [activeService, setActiveService] = useState(null);

  // Tabbed Showcase State
  const [activePartnerTab, setActivePartnerTab] = useState('consultants');

  const toggleService = (index) => {
    setActiveService(activeService === index ? null : index);
  };

  // --- Animation Variants ---
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

  // Handle Hash Scroll (e.g. from Header Contact Us)
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  // About Image Animation State
  const [aboutImageVisible, setAboutImageVisible] = useState(false);
  const aboutImageRef = useRef(null);

  // Stats Counting Logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStatsStarted(true);
          observer.disconnect(); // Disconnect immediately to ensure single run
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // About Image Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAboutImageVisible(true);
          observer.disconnect(); // Animate once
        }
      },
      { threshold: 0.3 } // Trigger when 30% visible
    );

    if (aboutImageRef.current) {
      observer.observe(aboutImageRef.current);
    }

    return () => observer.disconnect();
  }, []);


  const [currentReview, setCurrentReview] = useState(0);
  const [isPaused, setIsPaused] = useState(false);



  const reviews = [
    {
      text: "The team consistently exceeded expectations in their professionalism, meeting tight deadlines, and adapting to project changes. Their work quality and ability to incorporate feedback were outstanding. I am confident in our future collaborations and anticipate many successful projects.",
      author: "Ananthakrishnan",
      role: "APA Engineering"
    },
    {
      text: "The team's dedication and problem-solving skills were instrumental in the 100% completion of the Digital Art Museum project. Their ownership of issues, both minor and major, led to the successful resolution of numerous clashes, culminating in the timely submission of the model.",
      author: "Paresh Yashwant Katkar",
      role: "BIM Manager - MEP, Buildings, Ramboll"
    },
    {
      text: "The AVK Mall and T2 tender package was issued successfully due to the team's considerable efforts. Their hard work is much appreciated. I look forward to continued success with this team.",
      author: "Chijyoti Challamarad",
      role: "Principal Mechanical Engineer, Ramboll"
    },
    {
      text: "The issuance of two major AVK assets for tender is a fantastic achievement. Congratulations to the entire team for their exceptional work on this significant milestone.",
      author: "Michael Rimmer",
      role: "Head of MEP, Middle East, Ramboll"
    },
    {
      text: "The team's ability to excel under pressure, particularly when facing tight deadlines, demonstrates their strong work ethic and consistent high performance. I commend their dedication to delivering projects on time and to a high standard.",
      author: "Yashin Maharaj",
      role: "SSHIC MEPI Director"
    }
  ];

  // --- Infinite Carousel Logic ---
  const infiniteReviews = [...reviews, ...reviews];
  // ---------------------------

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  // Auto-Rotation Effect
  useEffect(() => {
    let interval;
    if (!isPaused) {
      interval = setInterval(() => {
        nextReview();
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isPaused, reviews.length]); // Re-run if pause state changes

  // Parallax Effect for Hero Background
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.pageYOffset;
        // Move background at 50% speed of scroll
        heroRef.current.style.backgroundPositionY = `${scrolled * 0.5}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hero Carousel State
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

  const heroCarouselSlides = [
    {
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>,
      text: "Turning design intent into build-ready reality."
    },
    {
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>,
      text: "Technical authority that de-risks complex construction."
    },
    {
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>,
      text: "High-fidelity BIM that validates projects before build."
    },
    {
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>,
      text: "Engineering precision for confident project execution."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroCarouselSlides.length);
    }, 4000); // 4 seconds per slide
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home-page">
      <section
        className="hero-section"
        ref={heroRef}
      >
        <video className="hero-video" autoPlay loop muted playsInline>
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>

        <div className="hero-content-wrapper">
          {/* Left: Primary Messaging */}
          <div className="hero-main-content">
            <motion.h1
              className="main-hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Precision Engineering.<br />Excellence in Design.
            </motion.h1>

            <motion.p
              className="hero-subtext"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              style={{ fontSize: '1.2rem', color: '#e2e8f0', marginBottom: '2rem', maxWidth: '600px', lineHeight: '1.6' }}
            >
              Delivering Design-Led MEP Engineering & BIM Solutions for Mega-Scale Global Construction Projects
            </motion.p>

            {/* New Animated Moto */}
            <div style={{ display: 'inline-block', marginBottom: '2rem' }}>
              <motion.p
                className="hero-moto typing-effect"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.4 }}
                style={{
                  fontSize: '1.6rem',
                  fontWeight: '700',
                  color: '#144AE0', // Distinct amber/yellow accent color
                  fontFamily: "monospace, 'Delight', sans-serif",
                  cursor: 'default',
                  margin: 0,
                  textShadow: '0 2px 10px rgba(20, 74, 224, 0.4)'
                }}
              >
                Building Personal Brands as Engineers
              </motion.p>
            </div>

            <motion.div
              className="hero-cta-group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              <a href="#services" className="hero-cta-btn-glass">Explore Our Expertise</a>
              <Link to="/portfolio" className="hero-cta-btn-glass">View Our Global Projects</Link>
            </motion.div>
          </div>

          {/* Right: Glass Carousel Card */}
          <motion.div
            className="hero-glass-card"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <div className="glass-card-content">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentHeroSlide}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="glass-slide"
                >
                  <div className="glass-icon">
                    {heroCarouselSlides[currentHeroSlide].icon}
                  </div>
                  <p className="glass-text">
                    {heroCarouselSlides[currentHeroSlide].text}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Progress Indicator */}
              <div className="glass-progress-bar">
                <motion.div
                  className="glass-progress-fill"
                  key={currentHeroSlide}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 4, ease: "linear" }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-content-left">
            {/* <span className="about-tagline dash-tagline">About JSE</span> */}
            <h2 className="about-company-name">About JSE Engineering</h2>

            <div className="about-description-block" style={{ color: '#475569', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1rem' }}>
              <p style={{ marginBottom: '1rem' }}>
                JSE Engineering is a premier multi-disciplinary engineering consulting firm established in 2005.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                Founded by lead consultants with over 20 years of expertise in the Middle East and Southeast Asia, we bridge the gap between complex engineering design, advanced BIM coordination, and physical construction execution.
              </p>
              <p>
                Unlike standard BIM firms, we are Engineers First. We host specialized internal teams for MEP Engineering, Architecture, Structural BIM, and Steel Detailing (Tekla), allowing us to manage world-class projects from initial concept to final commissioning.
              </p>
            </div>

            <ul className="about-features-list">
              <li>
                <span className="check-icon">✓</span>
                <span>Global Project Delivery</span>
              </li>
              <li>
                <span className="check-icon">✓</span>
                <span>End-to-End BIM Solutions</span>
              </li>
              <li>
                <span className="check-icon">✓</span>
                <span>Sustainability Focused</span>
              </li>
              <li>
                <span className="check-icon">✓</span>
                <span>Elite Engineering Talent</span>
              </li>
            </ul>

            <Link to="/history" className="about-cta-btn">Discover Our Story</Link>
          </div>

          <div className="about-image-container">
            <div
              className={`about-image-wrapper ${aboutImageVisible ? 'visible' : ''}`}
              ref={aboutImageRef}
            >
              <img
                src={heroGroupImage}
                alt="JSE Engineering Office"
                className="about-image"
                loading="lazy"
              />
              <div className="about-floating-badge">
                <span className="badge-number">15+</span>
                <span className="badge-text">Years of<br />Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="client-marquee-section">
        <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>

          {/* Intro Section */}
          <div className="client-partnerships-intro">
            <h2 className="client-partnerships-title">Our Strategic Partnerships</h2>
            <p className="section-desc">
              We tailor our technical expertise to meet the specific demands of the project lifecycle, acting as
              a high-level technical engineering partner for our global clients.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="partnerships-tabs">
            <button
              className={`partner-tab-btn ${activePartnerTab === 'consultants' ? 'active' : ''}`}
              onClick={() => setActivePartnerTab('consultants')}
            >
              Design Consultants
            </button>
            <button
              className={`partner-tab-btn ${activePartnerTab === 'contractors' ? 'active' : ''}`}
              onClick={() => setActivePartnerTab('contractors')}
            >
              MEP & General Contractors
            </button>
          </div>

          {/* Content Area */}
          <div className="partnerships-content-wrapper">
            <AnimatePresence mode="wait">
              {activePartnerTab === 'consultants' && (
                <motion.div
                  key="consultants"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="client-category-block"
                >
                  <div className="marquee-wrapper">
                    {/* Marquee 1: Global Consultants (Move Left) */}
                    <div className="client-marquee-row consultant-row">
                      <div className="marquee-container">
                        <div className="marquee-track">
                          {[
                            consLogo1, consLogo2, consLogo3, consLogo4, consLogo5, consLogo6,
                            consLogo7, consLogo8, consLogo9, consLogo10, consLogo11, consLogo12, consLogo13
                          ].map((logo, index) => (
                            <img key={`cons-logo-${index}`} src={logo} alt={`Consultant Logo ${index + 1}`} className="client-logo" loading="lazy" />
                          ))}
                          {[
                            consLogo1, consLogo2, consLogo3, consLogo4, consLogo5, consLogo6,
                            consLogo7, consLogo8, consLogo9, consLogo10, consLogo11, consLogo12, consLogo13
                          ].map((logo, index) => (
                            <img key={`cons-logo-dup-${index}`} src={logo} alt={`Consultant Logo ${index + 1}`} className="client-logo" loading="lazy" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="partner-value-props">
                    <h3 className="partner-props-title">International Design Consultants</h3>
                    <p className="partner-props-desc">Partnering to provide Design-Led Engineering and BIM Services from Concept to IFC.</p>
                    <ul className="client-category-list">
                      <li className="bento-glass-card">
                        <strong>Design from Scratch</strong>
                        <p>We act as your extended engineering arm, developing concepts into full detailed designs.</p>
                      </li>
                      <li className="bento-glass-card">
                        <strong>Engineering-Led BIM (LOD 100–300)</strong>
                        <p>We ensure the BIM model is a true reflection of engineering data with seamless inter-disciplinary coordination.</p>
                      </li>
                      <li className="bento-glass-card">
                        <strong>Local Authority Compliance</strong>
                        <p>Designs are engineered to meet specific codes including QCS, Kahramaa, DEWA, PUB, SCDF, and SPAN.</p>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              )}

              {activePartnerTab === 'contractors' && (
                <motion.div
                  key="contractors"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="client-category-block"
                >
                  <div className="marquee-wrapper">
                    {/* Marquee 2: Global Contractors (Move Right) */}
                    <div className="client-marquee-row client-row">
                      <div className="marquee-container">
                        <div className="marquee-track reverse-track">
                          {[
                            clientLogo1, clientLogo2, clientLogo3, clientLogo4, clientLogo5, clientLogo6,
                            clientLogo7, clientLogo8, clientLogo9, clientLogo10, clientLogo11, clientLogo12, clientLogo13
                          ].map((logo, index) => (
                            <img key={`client-logo-${index}`} src={logo} alt={`Client Logo ${index + 1}`} className="client-logo" loading="lazy" />
                          ))}
                          {[
                            clientLogo1, clientLogo2, clientLogo3, clientLogo4, clientLogo5, clientLogo6,
                            clientLogo7, clientLogo8, clientLogo9, clientLogo10, clientLogo11, clientLogo12, clientLogo13
                          ].map((logo, index) => (
                            <img key={`client-logo-dup-${index}`} src={logo} alt={`Client Logo ${index + 1}`} className="client-logo" loading="lazy" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="partner-value-props">
                    <h3 className="partner-props-title">International MEP & General Contractors</h3>
                    <p className="partner-props-desc">Providing technical brainpower and high-detail modeling for error-free site execution.</p>
                    <ul className="client-category-list">
                      <li className="bento-glass-card">
                        <strong>Engineering Validation</strong>
                        <p>We review IFC drawings to identify design gaps and raise proactive RFIs to prevent site delays.</p>
                      </li>
                      <li className="bento-glass-card">
                        <strong>LOD 400 & 500 Shop Drawings</strong>
                        <p>We deliver constructive BIM models and 2D shop drawings extracted directly from BIM for installation.</p>
                      </li>
                      <li className="bento-glass-card">
                        <strong>Specialized Steel Detailing</strong>
                        <p>Fabrication-ready NC Files, Erection Drawings, and Advanced Bills of Materials (BOMs).</p>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="client-reviews-section">
        <div className="reviews-container">
          {/* Header */}
          <div className="reviews-header">
            <h2 className="reviews-title">Client Testimonials</h2>
          </div>

          {/* Infinite Carousel Wrapper */}
          <div className="reviews-carousel-wrapper">
            <div className="reviews-track">
              {infiniteReviews.map((review, index) => (
                <div
                  key={index}
                  className="jse-review-card"
                >
                  <div className="review-quote-icon">❝</div>
                  <p className="review-text">"{review.text}"</p>
                  <div className="review-footer">
                    <h4 className="review-name">{review.author}</h4>
                    <p className="review-role">{review.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="benefits-container">
          {/* Left Sticky Content */}
          <div className="benefits-sticky-left">
            <div className="benefits-header-content">
              {/* <p className="dash-tagline">WHY CHOOSE US</p> */}
              <h2 className="benefits-section-title">Why Choose JSE?</h2>
              {/* <p className="benefits-header-desc">
                Partnering with JSE means choosing clarity, precision, and efficiency.
                We deliver engineering solutions that streamline construction and maximize value.
              </p> */}

            </div>
          </div>

          {/* Right Scrollable Cards */}
          <div className="benefits-cards-list">
            {[
              {
                title: "Multi-Disciplinary Expertise",
                desc: "Seamless integration of MEP, BIM, Electrical, ELV, Plumbing, HVAC & Firefighting designs under one roof.",
                icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 22v-5l5-5 5 5v5M12 12l5-5 5 5v5" /></svg>
              },
              {
                title: "Precision & Coordination",
                desc: "Designs optimized to minimize clashes, improve constructability, and reduce rework on site.",
                icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
              },
              {
                title: "BIM-Enabled Workflows",
                desc: "Advanced BIM tools for better visualization, faster approvals, and accurate quantity take-offs.",
                icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /></svg>
              },
              {
                title: "Cost-Optimized Solutions",
                desc: "Efficient design methodologies that reduce material cost, energy consumption, and operational expenses.",
                icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
              },
              {
                title: "Fast Turnaround Delivery",
                desc: "Structured processes ensure reliable timelines for consultants, contractors, and developers.",
                icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              },
              {
                title: "Sector-Wide Experience",
                desc: "From residential to commercial, industrial, healthcare, hospitality, and institutional sectors.",
                icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M5 21V7l8-4 8 4v14"></path></svg>
              },
              {
                title: "Skilled Technical Team",
                desc: "Dedicated specialists with options for secondment and virtual teams to support project execution.",
                icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              },
              {
                title: "Client-Centric Support",
                desc: "Transparent communication, progressive updates, and responsive assistance throughout project lifecycle.",
                icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              }
            ].map((item, index) => (
              <div key={index} className="benefit-card-new">
                <div className="benefit-icon-wrapper">
                  {item.icon}
                </div>
                <div className="benefit-card-content">
                  <h3 className="benefit-card-title">{item.title}</h3>
                  <p className="benefit-card-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <section className="stats-section" ref={statsRef}>
          <div className="container-stats">
            <h2 className="stats-title-center">Standout Statistics</h2>

            <div className="stats-grid">
              <div className="stat-item">
                <h3><StatCounter end={6000} suffix="+" start={statsStarted} /></h3>
                <p>Successful Projects Delivered</p>
              </div>
              <div className="stat-item">
                <h3><StatCounter end={20} suffix="+" start={statsStarted} /></h3>
                <p>Countries</p>
              </div>
              <div className="stat-item">
                <h3><StatCounter end={1000} suffix="+" start={statsStarted} /></h3>
                <p>Delighted Global Clients Served</p>
              </div>
              <div className="stat-item">
                <h3><StatCounter end={25} suffix="+" start={statsStarted} /></h3>
                <p>Years of Industry Experience</p>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className="solutions-list-section" id="solutions">
        <motion.div
          className="solutions-list-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <div className="solutions-header-group">
            {/* <p className="solutions-tagline dash-tagline">SOLUTIONS BEYOND SOFTWARE</p> */}
            <h2 className="solutions-title">SOLUTIONS BEYOND SOFTWARE</h2>
            <p className="solutions-description" style={{ marginTop: '1rem', color: '#64748b' }}>
              JSE offers customized engineering solutions to fulfill our clients project requirement.
            </p>
          </div>

          <div className="solutions-accordion-wrapper">
            {servicesData.map((service, index) => (
              <motion.div
                key={index}
                variants={itemFadeUp}
                className={`solution-accordion-item ${activeService === index ? 'active' : ''}`}
              >
                {/* Accordion Header */}
                <div
                  className="solution-accordion-header"
                  onClick={() => toggleService(index)}
                >
                  <span className="solution-list-text">{service.title}</span>
                  <span className={`solution-arrow ${activeService === index ? 'rotated' : ''}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </div>

                {/* Accordion Content */}
                <AnimatePresence>
                  {activeService === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="solution-accordion-content"
                    >
                      <div className="solution-content-grid">
                        <div className="solution-image-col">
                          <img src={service.img} alt={service.title} loading="lazy" />
                        </div>
                        <div className="solution-text-col">
                          <h3 className="solution-detail-title">{service.heading}</h3>
                          <p className="solution-detail-desc">{service.description}</p>
                          <ul className="solution-detail-list">
                            {service.details.map((detail, idx) => {
                              if (!detail.text) {
                                return (
                                  <li key={idx} className="no-bullet">
                                    {detail.title}
                                  </li>
                                );
                              }
                              return (
                                <li key={idx}>
                                  <strong>{detail.title}</strong> {detail.text}
                                </li>
                              );
                            })}
                          </ul>
                          <Link to={service.link} className="solution-cta-btn">
                            Learn More
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="geo-stats-section">
        <div className="geo-stats-container">
          {/* Left: Globe Video */}
          <motion.div
            className="geo-globe-wrapper"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <video autoPlay loop muted playsInline className="geo-globe-video">
              <source src={geoStatsVideo} type="video/mp4" />
            </video>
          </motion.div>

          {/* Right: Vertical Stats */}
          <div className="geo-stats-content">
            {[
              { number: "500+", label: "Expert Engineers" },
              { number: "5", label: "Strategic Locations" },
              { number: "99%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="geo-stat-box"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <span className="geo-stat-number">{stat.number}</span>
                <span className="geo-stat-label">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky Contact Form Popup */}
      <StickyContact>
        <ContactForm />
      </StickyContact>

    </div>
  );
};

export default Home;
