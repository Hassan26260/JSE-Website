import "../styles/Home.css";
import "../styles/Benefits.css";
import "../styles/ClientMarquee.css"; // New Marquee Styles
import "../styles/TestimonialCarousel.css"; // New 3D Carousel Styles
import StickyContact from "../components/StickyContact";
import ContactForm from "../components/ContactForm";
import { motion, AnimatePresence } from "framer-motion";
import heroBanner from "../assets/images-home/Herobanner.webp";
import heroGroupImage from "../assets/images-home/home-new-img/about-home-new.png";
import whyChooseUsImage from "../assets/images-home/why choose us.png";
import architecturalBim from "../assets/images-home/architectural-bim.webp";
import hvacDesign from "../assets/images-home/hvac-design.webp";
import plumbing from "../assets/images-home/plumbing.webp";
import mepDesign from "../assets/images-home/mep-design.webp";
import bimModelling from "../assets/images-home/bim-modelling.webp";
import electricalSystem from "../assets/images-home/electrical-system.webp";

// Dynamically Import Consultant Logos
const consultantLogosMap = import.meta.glob('../assets/client-logo/consultant/*.{png,jpg,jpeg,svg,gif,webp}', { eager: true, import: 'default' });
const consultantLogoArray = Object.values(consultantLogosMap);

// Dynamically Import Contractor Logos
const contractorLogosMap = import.meta.glob('../assets/client-logo/contractors/*.{png,jpg,jpeg,svg,gif,webp}', { eager: true, import: 'default' });
const contractorLogoArray = Object.values(contractorLogosMap);

import mapImage from "../assets/images-home/Map.png";
import heroVideo from "../assets/images-home/home-new-img/hero-video.mp4";
import geoStatsVideo from "../assets/images-home/131857-751353013_small.mp4"; // New Video for Geo Stats

// New Image Assets for Services (Solutions Beyond Software)
import mepImg from "../assets/images-home/home-new-img/MEP.png";
import bimImg from "../assets/images-home/home-new-img/BIM.webp";
import structImg from "../assets/images-home/home-new-img/structural-eng.webp";
import steelImg from "../assets/images-home/home-new-img/steel-detail.jfif";
import infraImg from "../assets/images-home/home-new-img/infrastructural.webp";
import virtualEngImage from "../assets/images-home/home-new-img/virtual-team.jpeg";
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
      heading: "Architecture BIM",
      description: "Our specialized teams ensure a fully coordinated project environment across all disciplines.",
      details: [
        { title: "Concept to BIM:", text: "Developing architectural BIM models (LOD 200–300) from initial concepts." },
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
      title: "Infrastructure Services",
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

  // Solutions Carousel State
  const [carouselIndex, setCarouselIndex] = useState(0);

  const nextSlide = () => {
    setCarouselIndex((prev) => (prev + 1) % servicesData.length);
  };

  const prevSlide = () => {
    setCarouselIndex((prev) => (prev - 1 + servicesData.length) % servicesData.length);
  };

  // Helper for Carousel text truncation
  const truncateText = (text, maxLength) => {
    if (!text) return "";
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

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
    hidden: { opacity: 0, y: 70 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
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
      role: "APA Engineering",
      country: "USA"
    },
    {
      text: "The team's dedication and problem-solving skills were instrumental in the 100% completion of the Digital Art Museum project. Their ownership of issues, both minor and major, led to the successful resolution of numerous clashes, culminating in the timely submission of the model.",
      author: "Paresh Yashwant Katkar",
      role: "BIM Manager - MEP, Buildings, Ramboll",
      country: "UAE"
    },
    {
      text: "The AVK Mall and T2 tender package was issued successfully due to the team's considerable efforts. Their hard work is much appreciated. I look forward to continued success with this team.",
      author: "Chijyoti Challamarad",
      role: "Principal Mechanical Engineer, Ramboll",
      country: "UAE"
    },
    {
      text: "The issuance of two major AVK assets for tender is a fantastic achievement. Congratulations to the entire team for their exceptional work on this significant milestone.",
      author: "Michael Rimmer",
      role: "Head of MEP, Middle East, Ramboll",
      country: "UAE"
    },
    {
      text: "The team's ability to excel under pressure, particularly when facing tight deadlines, demonstrates their strong work ethic and consistent high performance. I commend their dedication to delivering projects on time and to a high standard.",
      author: "Yashin Maharaj",
      role: "MEPI Director, SSH",
      country: "UAE"
    },
    {
      text: "Please be informed that we have obtained DEWA LV approval for Capria East 3B. Id like to express my heartfelt congratulations to you and the wider team who have gone the extra mile to achieve this great milestone. As always, I truly appreciate your efforts for the projects that we have worked in together. We’ve come a long way in obtaining challenging DEWA approvals from La Mer project to Nobu Project and now to 3B. Looking forward to achieving more milestones with you.",
      author: "Arvind Rajiv",
      role: "Senior Electrical Engineer, SSH",
      country: "UAE"
    },
    {
      text: "Overall, the effort and quality are appreciated. Positive Points. The overall model structure is clear and well-organized. Good accuracy in geometry and alignment with design drawings. Proper use of Revit families and consistent naming conventions. The Model visualization effectively.",
      author: "Mubarak Basha",
      role: "Senior BIM Technician - Mechanical, SSH",
      country: "UAE"
    },
    {
      text: "I would like to formally acknowledge and express my sincere appreciation for the outstanding efforts demonstrated by the BIM engineers from your team on our recent projects. In particular, the individuals listed below have shown exceptional commitment and professionalism. Their performance has been truly commendable. We look forward to continued collaboration with your team on future initiatives.",
      author: "Sujesh Thozhukkatt",
      role: "BIM Manager, Jacobs",
      country: "UAE"
    },
    {
      text: "Great work all. It’s been a tough journey, but thanks to all your hard work, the end product is well appreciated.",
      author: "Anil Menon",
      role: "CKR",
      country: "UAE"
    },
    {
      text: "We met with the client yesterday to go through the wet-stamp and work in progress drawings on MGM.\n\nI am proud to say that the client has complimented us on the presentation of the drawings, noting that even the costing drawings are of wet-stamp quality. This is a result of the India teams hard work and efforts.\n\nI would like to thank you all for your hard work in reaching this achievement.",
      author: "Brian Lugg",
      role: "Technical Director, CKR",
      country: "UAE"
    },
    {
      text: "I wanted to take a moment to share some feedback regarding JSE Teams' collaboration with us on till now.\n\nThroughout our work together, I’ve found them to be consistently proactive and reliable, and they approach meetings with a professional and confident posture, contributes thoughtfully and ensures discussions remain productive. When challenges arise, they demonstrate innovation by suggesting practical solutions and putting forward ideas that add real value.\n\nTheir approach not only supports the smooth progress of our joint efforts but also strengthens the cooperation between our teams.",
      author: "Alina Giju",
      role: "Project Manager, DESIGN MATTERS SRL",
      country: "Romania"

    },
    {
      text: "Thank you for the good work you have done on this project. We appreciate your contribution and look forward to working with you again in the future. Wishing you the best!",
      author: "Vishnu MP",
      role: "Electrical Engineer, APA Engineering",
      country: "USA"
    },
    {
      text: "I am pleased to inform you that things are going great with the team we have on board so far. We would like to hire many members of your team.\n\nThank you for your support.",
      author: "Dimitri Lourandos",
      role: "SolutionStation",
      country: "South Africa"
    },
    {
      text: "We would like to extend our sincere appreciation to the team for their outstanding contributions and exceptional work Thank you for your support.",
      author: "Samynathan Velayutham",
      role: "Design Lead Central Design MEP",
      country: "USA"
    },
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
      text: "Empowering our team to deliver world-class excellence on every global project."
    },
    {
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>,
      text: "Virtual Office integration into your workflow."
    },
    {
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>,
      text: "Integrated expertise across MEP, Architecture, Structure, and specialized Tekla Steel Detailing all under one roof."
    },
    {
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>,
      text: <>Engineers First, Digital Second <br /> We design, calculate, and validate every system before it ever enters a digital environment.</>,
    },
    {
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>,
      text: "Engineering the Workable Model We use high-precision environments to ensure every system is technically sound and site-ready."
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
              Precision Engineering<br />Excellence in Design
            </motion.h1>

            <motion.p
              className="hero-subtext"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              style={{ fontSize: '1.2rem', color: '#e2e8f0', marginBottom: '2rem', maxWidth: '600px', lineHeight: '1.6' }}
            >
              Delivering Design Led MEP Engineering & BIM Solutions for Mega Scale Global Construction Projects
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
                  color: 'white', // Updated to white per request
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
        <motion.div
          className="about-container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="about-content-left">
            {/* <span className="about-tagline dash-tagline">About JSE</span> */}
            <h2 className="about-company-name">About JSE Engineering</h2>

            <div className="about-description-block" style={{ color: '#475569', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '3rem' }}>
              <p style={{ marginBottom: '1rem' }}>
                JSE Engineering is a premier multi-disciplinary engineering consulting firm established in 2005.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                Founded by lead consultants with over 20 years of expertise in the Middle East and Southeast Asia, we bridge the gap between complex engineering design, advanced BIM coordination, and physical construction execution.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                Unlike standard BIM firms, we are Engineers First. We host specialized internal teams for:
              </p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1rem', color: '#475569' }}>
                <li style={{ marginBottom: '0.5rem' }}>MEP Engineering</li>
                <li style={{ marginBottom: '0.5rem' }}>Architecture</li>
                <li style={{ marginBottom: '0.5rem' }}>Structural BIM</li>
                <li style={{ marginBottom: '0.5rem' }}>Steel Detailing (Tekla)</li>
              </ul>
              <p>
                This allows us to manage world-class projects from initial concept to final commissioning.
              </p>
            </div>

            <Link to="/history" className="about-cta-btn">Discover Our Story</Link>
          </div>

          <div className="about-image-container">
            <div className="about-image-wrapper visible">
              <img
                src={heroGroupImage}
                alt="JSE Engineering Office"
                className="about-image"
                loading="lazy"
              />
              <div className="about-floating-badge">
                <span className="badge-number">20+</span>
                <span className="badge-text">Years of<br />Excellence</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>



      <section className="client-marquee-section">
        <motion.div
          className="container"
          style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >

          {/* Intro Section */}
          <div className="client-partnerships-intro">
            <h2 className="client-partnerships-title">Our Strategic Partnerships</h2>
            <p className="section-desc">
              We tailor our technical expertise to meet the specific demands of the project lifecycle, acting as
              a high-level technical engineering partner for our global clients.
            </p>
          </div>

          {/* Clean Stacked Marquee Area */}
          <div className="partnerships-marquee-stack" style={{ display: 'flex', flexDirection: 'column', gap: '3rem', marginTop: '4rem' }}>

            {/* Consultant Marquee */}
            <div className="marquee-row-group">
              <h3 className="marquee-sub-label" style={{ textAlign: 'center', fontSize: '2rem', fontFamily: 'roboto', textTransform: 'uppercase', letterSpacing: '2px', color: 'black', marginBottom: '1rem', marginTop: '2rem', fontWeight: '300' }}>International Design Consultants</h3>
              <div className="marquee-wrapper" style={{ padding: '2rem 0', margin: '0' }}>
                <div className="client-marquee-row consultant-row">
                  <div className="marquee-container">
                    <div className="marquee-track">
                      {consultantLogoArray.map((logo, index) => (
                        <img key={`cons-logo-${index}`} src={logo} alt={`Consultant Logo ${index + 1}`} className="client-logo" loading="lazy" />
                      ))}
                      {consultantLogoArray.map((logo, index) => (
                        <img key={`cons-logo-dup-${index}`} src={logo} alt={`Consultant Logo ${index + 1}`} className="client-logo" loading="lazy" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contractor Marquee */}
            <div className="marquee-row-group">
              <h3 className="marquee-sub-label" style={{ textAlign: 'center', fontSize: '2rem', fontFamily: 'roboto', textTransform: 'uppercase', letterSpacing: '2px', color: 'black', marginBottom: '1rem', marginTop: '2rem', fontWeight: '300' }}>International MEP & General Contractors</h3>
              <div className="marquee-wrapper" style={{ padding: '2rem 0', margin: '0' }}>
                <div className="client-marquee-row client-row">
                  <div className="marquee-container">
                    <div className="marquee-track reverse-track">
                      {contractorLogoArray.map((logo, index) => (
                        <img key={`client-logo-${index}`} src={logo} alt={`Client Logo ${index + 1}`} className="client-logo" loading="lazy" />
                      ))}
                      {contractorLogoArray.map((logo, index) => (
                        <img key={`client-logo-dup-${index}`} src={logo} alt={`Client Logo ${index + 1}`} className="client-logo" loading="lazy" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </section>

      <section className="client-reviews-section">
        <motion.div
          className="reviews-container"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
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
                    {review.country && <p className="review-country">{review.country}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section className="scroll-comparison-section">
        <div className="scroll-comparison-header">
          <h2 className="comparison-title">WHY CHOOSE JSE</h2>
        </div>

        {[
          {
            theme: "Design Approach",
            icon: (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2BC48A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                <path d="M2 2l7.586 7.586"></path>
                <circle cx="11" cy="11" r="2"></circle>
              </svg>
            ),
            consultantTitle: "Design from Scratch:",
            consultantDesc: "We act as your extended engineering arm, developing concepts into full detailed designs.",
            contractorTitle: "Engineering Validation:",
            contractorDesc: "We review IFC drawings to identify design gaps and raise proactive RFIs to prevent site delays."
          },
          {
            theme: "BIM Execution Level",
            icon: (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2BC48A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>
            ),
            consultantTitle: "Engineering-Led BIM (LOD 100–300):",
            consultantDesc: "We ensure the BIM model is a true reflection of engineering data with seamless inter-disciplinary coordination.",
            contractorTitle: "LOD 400 & 500 Shop Drawings:",
            contractorDesc: "We deliver constructive BIM models and 2D shop drawings extracted directly from BIM for installation."
          },
          {
            theme: "Technical Expertise",
            icon: (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2BC48A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                <path d="M2 12h20"></path>
              </svg>
            ),
            consultantTitle: "Local Authority Compliance:",
            consultantDesc: "Designs are engineered to meet specific codes including QCS, Kahramaa, DEWA, PUB, SCDF, and SPAN.",
            contractorTitle: "Specialized Steel Detailing:",
            contractorDesc: "Fabrication-ready NC Files, Erection Drawings, and Advanced Bills of Materials (BOMs)."
          },
          {
            theme: "Project Coordination",
            icon: (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2BC48A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            ),
            consultantTitle: "Technical Synergy:",
            consultantDesc: "Simultaneous engineering and BIM modeling ensures 100% coordination across all building services disciplines.",
            contractorTitle: "Proactive RFI Management:",
            contractorDesc: "We resolve constructability issues early, reducing site rework and protecting project budgets."
          }
        ].map((panel, index) => (
          <div key={index} className="split-panel">
            <div className="split-panel-content">

              {/* Consultant (Left) */}
              <motion.div
                className="compare-card compare-card-left"
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="card-tag">CONSULTANT</div>
                <h3 className="compare-card-title">{panel.consultantTitle}</h3>
                <p className="compare-card-desc">{panel.consultantDesc}</p>
              </motion.div>

              {/* Center Axis & Icon */}
              <div className="compare-center-axis">
                <div className="axis-line"></div>
                <motion.div
                  className="compare-icon-circle"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  {panel.icon}
                </motion.div>
              </div>

              {/* Contractor (Right) */}
              <motion.div
                className="compare-card compare-card-right"
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="card-tag">CONTRACTOR</div>
                <h3 className="compare-card-title">{panel.contractorTitle}</h3>
                <p className="compare-card-desc">{panel.contractorDesc}</p>
              </motion.div>

            </div>
          </div>
        ))}
      </section>
      <section className="stats-section" ref={statsRef}>
        <motion.div
          className="container-stats"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
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
        </motion.div>
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
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
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

      {/* --- NEW Solutions Carousel Section (Phase 31) --- */}
      {/* <section className="solutions-carousel-section" id="solutions-carousel">
        <div className="solutions-carousel-header">
          <h2 className="solutions-title" style={{ textAlign: "center" }}>SOLUTIONS BEYOND SOFTWARE (CAROUSEL UI)</h2>
          <p className="solutions-description" style={{ margin: '1rem auto 0 auto', color: '#64748b', textAlign: "center" }}>
            JSE offers customized engineering solutions to fulfill our clients project requirement.
          </p>
        </div>

        <div className="solutions-carousel-container">
          <div className="carousel-nav-controls">
            <button className="carousel-nav-btn" onClick={prevSlide} aria-label="Previous Slide">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="carousel-nav-btn" onClick={nextSlide} aria-label="Next Slide">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={carouselIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
              className="carousel-slide-group"
            >
              <div className="carousel-image-wrapper">
                <img src={servicesData[carouselIndex].img} alt={servicesData[carouselIndex].title} loading="lazy" />
              </div>

              <div className="carousel-content-box">
                <h3 className="carousel-content-title">{servicesData[carouselIndex].title}</h3>
                <p className="carousel-content-desc">
                  {truncateText(servicesData[carouselIndex].description, 120)}
                </p>
                <Link to={servicesData[carouselIndex].link} className="carousel-learn-more-btn">
                  Learn More
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section> */}


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
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <span className="geo-stat-number">{stat.number}</span>
                <span className="geo-stat-label">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div >
  );
};

export default Home;
