import "../styles/Home.css";
import "../styles/Benefits.css";
import "../styles/ClientMarquee.css"; // New Marquee Styles
import "../styles/TestimonialCarousel.css"; // New 3D Carousel Styles
import StickyContact from '../components/StickyContact';
import { motion, AnimatePresence } from "framer-motion";
import heroBanner from "../assets/images-home/Herobanner.webp";
import heroGroupImage from "../assets/images-home/hero-group-image.jpg";
import whyChooseUsImage from "../assets/images-home/why choose us.png";
import architecturalBim from "../assets/images-home/architectural-bim.webp";
import hvacDesign from "../assets/images-home/hvac-design.webp";
import mepDesign from "../assets/images-home/mep-design.webp";
import bimModelling from "../assets/images-home/bim-modelling.webp";
import electricalSystem from "../assets/images-home/electrical-system.webp";

// Import Consultant Logos
import consLogo1 from '../assets/client-logo/Consultant/logo1.webp';
import consLogo2 from '../assets/client-logo/Consultant/logo2.webp';
import consLogo3 from '../assets/client-logo/Consultant/logo3.webp';
import consLogo4 from '../assets/client-logo/Consultant/logo4.webp';
import consLogo5 from '../assets/client-logo/Consultant/logo5.webp';
import consLogo6 from '../assets/client-logo/Consultant/logo6.webp';
import consLogo7 from '../assets/client-logo/Consultant/logo7.webp';
import consLogo8 from '../assets/client-logo/Consultant/logo8.webp';
import consLogo9 from '../assets/client-logo/Consultant/logo9.webp';
import consLogo10 from '../assets/client-logo/Consultant/logo10.webp';
import consLogo11 from '../assets/client-logo/Consultant/logo11.webp';
import consLogo12 from '../assets/client-logo/Consultant/logo12.webp';
import consLogo13 from '../assets/client-logo/Consultant/logo13.webp';

// Import Client Logos (New)
import clientLogo1 from '../assets/client-logo/Arabtec_Holding_Logo.jpg';
import clientLogo2 from '../assets/client-logo/L&T.png';
import clientLogo3 from '../assets/client-logo/NAFFCO_Logo_(Transparent).png';
import clientLogo4 from '../assets/client-logo/voltas.jpg';
import clientLogo5 from '../assets/client-logo/aster.jpg';
import clientLogo6 from '../assets/client-logo/johnson-controls-middletown.jpg';
import clientLogo7 from '../assets/client-logo/petrofac logo.png';
import clientLogo8 from '../assets/client-logo/bk gulf.jpg';
import clientLogo9 from '../assets/client-logo/emirates sas.jpg';
import clientLogo10 from '../assets/client-logo/futuremetro logo.png';
import clientLogo11 from '../assets/client-logo/al shandagha1.png';
import clientLogo12 from '../assets/client-logo/al futtaim.png';
import clientLogo13 from '../assets/client-logo/zone.png';

import mapImage from "../assets/images-home/Map.png";
// Use the new video file for the Hero background
import heroVideo from "../assets/images-home/home-new-img/hero-video.mov";
import geoStatsVideo from "../assets/images-home/131857-751353013_small.mp4"; // New Video for Geo Stats

// New Image Assets for Services (Solutions Beyond Software)
import mepImg from "../assets/images-home/home-new-img/MEP.png";
import bimImg from "../assets/images-home/home-new-img/BIM.png";
import structImg from "../assets/images-home/home-new-img/structural-eng.jpg";
import steelImg from "../assets/images-home/home-new-img/steel-detail.jfif";
import infraImg from "../assets/images-home/home-new-img/infrastructural.webp";
import virtualEngImage from "../assets/images-home/home-new-img/virtual-team.jpg";
import secondmentImage from "../assets/images-home/home-new-img/secondment.jpg.jpeg";

import aboutImage from "../assets/images-home/home-new-img/about-home-new.jpeg";
// import designEngImage from "../assets/images-home/home-new-img/design-eng.jpeg"; // Unused

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

  // Services Data (Updated with New Images)
  const servicesData = [
    { title: "MEP Engineering", desc: "Comprehensive MEP solutions including HVAC, Electrical, and Firefighting.", link: "/services/design/mep-design", img: mepImg },
    { title: "Architectural BIM", desc: "Revolutionizing architecture with detailed BIM models.", link: "/services/design/architectural-bim", img: bimImg },
    { title: "Structural Engineering", desc: "Advanced structural engineering and analysis.", link: "/services/design/structural", img: structImg },
    { title: "Steel Structure Detailing", desc: "Accurate Tekla detailing and steel structures.", link: "/services/design/steel-structure-detailing", img: steelImg },
    { title: "Infrastructural Services", desc: "Robust infrastructure solutions for modern communities.", link: "/services/infrastructural-services", img: infraImg },
    { title: "Virtual Team for Hire", desc: "Hire own remote offshore architect team for modular construction needs.", link: "/services/virtual-team", img: virtualEngImage },
    { title: "Secondment Team", desc: "Get on-demand access to our pool of experienced professionals.", link: "/services/secondment-team", img: secondmentImage }
  ];

  // Carousel Logic Removed as per simplified list requirement, but keeping state if needed for future
  const [slideDirection, setSlideDirection] = useState('next');

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

  // Form State
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
    console.log('Form submitted:', formData);
  };



  // Stats Counting Logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsStarted(true);
        }
      },
      { threshold: 0.2 } // Trigger when 20% visible
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  // About Image Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAboutImageVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (aboutImageRef.current) {
      observer.observe(aboutImageRef.current);
    }

    return () => {
      if (aboutImageRef.current) {
        observer.unobserve(aboutImageRef.current);
      }
    };
  }, []);


  const [currentReview, setCurrentReview] = useState(0);
  const [isPaused, setIsPaused] = useState(false);



  // Reviews Logic
  const reviews = [
    { text: "JSE Engineering provided exceptional BIM services for our high-rise project. Their attention to detail and commitment to quality is unmatched.", author: "John Doe", role: "Project Manager, Global Construct" },
    { text: "The team at JSE is highly professional and knowledgeable. Their Secondment services helped us scale our workforce efficiently during peak times.", author: "Jane Smith", role: "Director, Urban Architects" },
    { text: "We rely on JSE for all our detailed steel structure drawings. They always deliver on time and with high accuracy.", author: "Ahmed Al-Farsi", role: "Technical Lead, SteelWorks Co." },
    { text: "Their MEP coordination saved us significant time and money on site. Highly recommended for complex engineering projects.", author: "Sarah Johnson", role: "Operations Head, BuildTech" },
    { text: "Excellent support and communication throughout the project lifecycle. A partner we can trust.", author: "Michael Brown", role: "CEO, Brown & Associates" }
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



  // --- Animation Variants ---
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.0, ease: "easeOut" } }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

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

  return (

    <div className="home-page">
      <section
        className="hero-section"
        ref={heroRef}
      >
        {/* ... (Hero content remains unchanged) ... */}
        <video
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={heroVideo} type="video/mp4" />
          <source src={heroVideo} type="video/quicktime" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay"></div>
        {/* Only showing replaced content for context if needed, but I'll jump to Benefits section in next tool call if I can't do it all at once. 
           Wait, simple replacement of variants first. 
        */}

        <div className="hero-content-wrapper">
          {/* Left: Primary Messaging */}
          <div className="hero-main-content">
            <motion.h1
              className="main-hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Building a Personal Brand as Engineers
            </motion.h1>

            <motion.p
              className="hero-subtext"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              style={{ fontSize: '1.2rem', color: '#e2e8f0', marginBottom: '2rem', maxWidth: '600px' }}
            >
              Shaping the Built Environment Through Engineering led BIM
            </motion.p>

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
        </div>


      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-container">
          <motion.div
            className="about-content-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={slideInLeft}
          >
            {/* <span className="about-tagline dash-tagline">About JSE</span> */}
            <h2 className="about-company-name">Pioneering Digital Engineering</h2>
            <h3 className="about-subtitle">Global Leaders in BIM & MEP Services</h3>
            <p className="about-description">
              JSE Engineering Pvt. Ltd. is a premier BIM Digital Engineering & Construction
              Consultancy. We specialize in transforming complex architectural visions into
              precise, buildable reality through cutting-edge technology and global expertise.
            </p>

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
          </motion.div>

          <motion.div
            className="about-image-container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={slideInRight}
          >
            <div
              className={`about-image-wrapper ${aboutImageVisible ? 'visible' : ''}`}
              ref={aboutImageRef}
            >
              <img
                src={aboutImage}
                alt="JSE Engineering Office"
                className="about-image"
                loading="lazy"
                fetchPriority="high" />
              <div className="about-floating-badge">
                <span className="badge-number">20+</span>
                <span className="badge-text">Years of<br />Excellence</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="client-marquee-section">
        <motion.div
          className="container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <h2 style={{ fontFamily: 'delight', color: '#144AE0', textAlign: 'center', fontSize: '4rem', marginBottom: '6rem', marginTop: '3rem' }}>Trusted by Industry Leaders</h2>

          {/* Marquee 1: Global Consultants (Label Left, Marquee Right) */}
          <div className="client-marquee-row consultant-row">
            {/* Label (Stacked) */}
            <div className="marquee-label">
              <span className="label-line-1">Global</span>
              <span className="label-line-2">Consultants</span>
            </div>
            {/* Vertical Divider */}
            <div className="vertical-divider"></div>
            {/* Marquee Track */}
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

          {/* Marquee 2: Global Contractors (Marquee Left, Label Right) */}
          <div className="client-marquee-row client-row">
            {/* Marquee Track (Left in Reverse) */}
            <div className="marquee-container">
              <div className="marquee-track reverse-track">
                <img src={clientLogo1} alt="Client 1" className="client-logo" />
                <img src={clientLogo2} alt="Client 2" className="client-logo" />
                <img src={clientLogo3} alt="Client 3" className="client-logo" />
                <img src={clientLogo4} alt="Client 4" className="client-logo" />
                <img src={clientLogo5} alt="Client 5" className="client-logo" />
                <img src={clientLogo6} alt="Client 6" className="client-logo" />
                <img src={clientLogo7} alt="Client 7" className="client-logo" />
                <img src={clientLogo8} alt="Client 8" className="client-logo" />
                <img src={clientLogo9} alt="Client 9" className="client-logo" />
                <img src={clientLogo10} alt="Client 10" className="client-logo" />
                <img src={clientLogo11} alt="Client 11" className="client-logo" />
                <img src={clientLogo12} alt="Client 12" className="client-logo" />
                <img src={clientLogo13} alt="Client 13" className="client-logo" />

                <img src={clientLogo1} alt="Client 1" className="client-logo" />
                <img src={clientLogo2} alt="Client 2" className="client-logo" />
                <img src={clientLogo3} alt="Client 3" className="client-logo" />
              </div>
            </div>
            {/* Vertical Divider */}
            <div className="vertical-divider"></div>
            {/* Label (Stacked) */}
            <div className="marquee-label">
              <span className="label-line-1">Global</span>
              <span className="label-line-2">Contractors</span>
            </div>
          </div>

        </motion.div>
      </section>

      <section className="client-reviews-section">
        <motion.div
          className="reviews-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
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
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section className="benefits-section">
        <div className="benefits-container">
          {/* Left Sticky Content */}
          <motion.div
            className="benefits-sticky-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={slideInLeft}
          >
            <div className="benefits-header-content">
              {/* <p className="dash-tagline">WHY CHOOSE US</p> */}
              <h2 className="benefits-section-title">Why Choose JSE?</h2>
              {/* <p className="benefits-header-desc">
                Partnering with JSE means choosing clarity, precision, and efficiency.
                We deliver engineering solutions that streamline construction and maximize value.
              </p> */}

            </div>
          </motion.div>

          {/* Right Scrollable Cards */}
          <motion.div
            className="benefits-cards-list"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
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
              <motion.div
                key={index}
                className="benefit-card-new"
                variants={itemFadeUp}
              >
                <div className="benefit-icon-wrapper">
                  {item.icon}
                </div>
                <div className="benefit-card-content">
                  <h3 className="benefit-card-title">{item.title}</h3>
                  <p className="benefit-card-desc">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <section className="stats-section" ref={statsRef}>
          <motion.div
            className="container-stats"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <h2 className="stats-title-center">Standout Statistics</h2>

            <div className="stats-grid">
              <div className="stat-item">
                <h3><StatCounter end={6000} suffix="+" start={statsStarted} /></h3>
                <p>Successful Projects Delivered</p>
              </div>
              <div className="stat-item">
                <h3><StatCounter end={20} suffix="+" start={statsStarted} /></h3>
                <p>Global Countries</p>
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
      </section>

      <section className="solutions-list-section">
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

          <div className="solutions-list-wrapper">
            {servicesData.map((service, index) => (
              <motion.div
                key={index}
                variants={itemFadeUp}
                className="solution-item-motion-wrapper"
              >
                <Link to={service.link} className="solution-list-item">
                  <span className="solution-list-text">{service.title}</span>
                  <span className="solution-list-arrow">→</span>
                  <div className="solution-item-img-wrapper">
                    <img src={service.img} alt={service.title} className="solution-item-img" loading="lazy" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="geo-stats-section">
        <div className="geo-stats-container">
          <h2 style={{ fontFamily: 'delight', color: 'white', textAlign: 'center', fontSize: '5rem', width: '100%' }}>Global Engineering Presence</h2>
          {/* Left: Globe Video */}
          <motion.div
            className="geo-globe-wrapper"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInLeft}
          >
            <video autoPlay loop muted playsInline className="geo-globe-video">
              <source src={geoStatsVideo} type="video/mp4" />
            </video>
          </motion.div>

          {/* Right: Vertical Stats */}
          <motion.div
            className="geo-stats-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInRight}
          >
            {[
              { number: "70%", label: "Employee Owned" },
              { number: "700+", label: "Active Projects" },
              { number: "4,000+", label: "Global Deliveries" }
            ].map((stat, index) => (
              <div
                key={index}
                className="geo-stat-box"
              >
                <span className="geo-stat-number">{stat.number}</span>
                <span className="geo-stat-label">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>



      {/* Sticky Contact Component */}
      <StickyContact>
        <div className="form-container">
          {/* Left Side: Title & Info */}
          <motion.div
            className="form-info-side"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInLeft}
          >
            <h2 className="form-heading">Start Your Project</h2>
            <p className="form-subtext">
              Ready to optimize your workflow with JSE's Engineering services? Fill out the details and we'll get in touch with you shortly.
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
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            className="form-input-side"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInRight}
          >
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
          </motion.div>
        </div>
      </StickyContact>
    </div >
  );
};

export default Home;
