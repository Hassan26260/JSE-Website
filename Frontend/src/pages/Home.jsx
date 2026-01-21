import "../styles/Home.css";
import "../styles/Benefits.css";
import heroBanner from "../assets/images-home/Herobanner.webp";
import heroGroupImage from "../assets/images-home/hero-group-image.jpg";
import whyChooseUsImage from "../assets/images-home/why choose us.png";
import architecturalBim from "../assets/images-home/architectural-bim.webp";
import hvacDesign from "../assets/images-home/hvac-design.webp";
import plumbing from "../assets/images-home/plumbing.webp";
import mepDesign from "../assets/images-home/mep-design.webp";
import bimModelling from "../assets/images-home/bim-modelling.webp";
import electricalSystem from "../assets/images-home/electrical-system.webp";

import mapImage from "../assets/images-home/Map.png";
import heroVideo from "../assets/images-home/hero-video.mp4";

import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

// Helper component to render client logos in 8-7-8-7 pattern
const ClientLogoGrid = () => {
  // Dynamically import all images from the client-logo directory
  const modules = import.meta.glob('../assets/client-logo/*.{png,jpg,jpeg,svg,PNG,JPG,svg}', { eager: true });
  const logos = Object.values(modules).map((mod) => mod.default);

  // Group logos into rows of 8, 7, 8, 7...
  const rows = [];
  let currentIndex = 0;
  let rowSize = 8;

  while (currentIndex < logos.length) {
    rows.push(logos.slice(currentIndex, currentIndex + rowSize));
    currentIndex += rowSize;
    rowSize = rowSize === 8 ? 7 : 8; // Toggle between 8 and 7
  }

  return (
    <div className="client-logo-rows">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className={`logo-row count-${row.length}`}>
          {row.map((logo, logoIndex) => (
            <div key={`${rowIndex}-${logoIndex}`} className="client-logo-item">
              <img
                src={logo}
                alt={`Client Logo ${rowIndex}-${logoIndex}`}
                loading="lazy"
                width="150"
                height="80"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

const Home = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [statsStarted, setStatsStarted] = useState(false);
  const statsRef = useRef(null);
  const location = useLocation();

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

  // Business Divisions Data
  const businessDivisions = [
    {
      title: "Design Engineering Projects",
      description: "JSE manpower service aids you get the right candidates with right professional background at convenient cost.",
      image: architecturalBim,
      link: "/services/design/architectural-bim"
    },
    {
      title: "Virtual Team for Hire",
      description: "Hire own remote offshore architect team for modular construction needs, ensuring cost-effective strategy.",
      image: heroGroupImage,
      link: "/services/virtual-team"
    },
    {
      title: "Secondment Team",
      description: "Get on-demand access to our pool of experienced professionals for bespoke solutions, tailored to meet your project needs.",
      image: heroGroupImage,
      link: "/services/secondment-team"
    }
  ];

  // Stats Counting Logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStatsStarted(true);
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

  // Custom hook for counting up
  const useCountUp = (end, duration = 2000) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!statsStarted) return;

      let startTime = null;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = currentTime - startTime;
        const percentage = Math.min(progress / duration, 1);
        const easeOutQuad = (t) => t * (2 - t);
        setCount(Math.floor(easeOutQuad(percentage) * end));
        if (progress < duration) {
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };
      requestAnimationFrame(animate);
    }, [statsStarted, end, duration]);

    return count;
  };



  const StatCounter = ({ end, suffix = "" }) => {
    // Check for mobile width directly
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

    // If mobile, show end value immediately
    if (isMobile) {
      return <span>{end}{suffix}</span>;
    }

    const count = useCountUp(end);
    return <span>{count}{suffix}</span>;
  };

  const reviews = [
    {
      text: "The architectural BIM models for our resort provided by JSE were incredibly detailed and accurate. Their team’s expertise helped us avoid costly design revisions!",
      author: "Ganesh S.",
      role: "Senior Architect"
    },
    {
      text: "JSE transformed our complex design vision into reality with their comprehensive BIM solutions. Their attention to detail and innovation exceeded our expectations!",
      author: "Sarah L.",
      role: "Project Manager"
    },
    {
      text: "JSE’s Tekla detailing services were a game changer for our project. Their accuracy and attention to detail streamlined our entire construction process.",
      author: "Krishna Rao.",
      role: "Project Engineer"
    },
    {
      text: "JSE’s firefighting design services ensured our high-rise project met all safety standards. Their expertise in compliance saved us time and future headaches.",
      author: "Daniel H.",
      role: "Safety Officer"
    },
    {
      text: "We needed skilled BIM experts to support our in-house team, and JSE’s virtual team was the perfect fit. Their expertise and seamless collaboration made remote work feel local!",
      author: "Ahmed M.",
      role: "Engineering Lead"
    },
    {
      text: "JSE’s MEP design services are top-notch. Their precision and clear communication helped streamline our stadium project, ensuring a flawless execution!",
      author: "Emily R.",
      role: "Operations Head"
    }
  ];

  // Carousel State (Declared at top of component)
  // const [currentReview, setCurrentReview] = useState(0);
  // const [isTransitioning, setIsTransitioning] = useState(true);
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth >= 1300) {
        setVisibleCards(3);
      } else if (window.innerWidth >= 850) {
        setVisibleCards(2);
      } else {
        setVisibleCards(1);
      }
    };

    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  const nextReview = () => {
    if (currentReview < reviews.length - visibleCards) {
      setIsTransitioning(true);
      setCurrentReview((prev) => prev + 1);
    }
  };

  const prevReview = () => {
    if (currentReview > 0) {
      setIsTransitioning(true);
      setCurrentReview((prev) => prev - 1);
    }
  };

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
        <div className="hero-main-content">
          <h1 className="main-hero-title">JSE Engineering</h1>
          <p className="main-hero-subtitle">Engineering Clarity Through BIM & MEP Excellence</p>
          <a href="#contact-form" className="hero-cta-btn">Get Started</a>
        </div>
        {/* ... truncated ... */}
        {/* <section className="reviews-section">
          <div className="container">
            <div className="reviews-header">
              <div className="reviews-text-group">
                <p className="reviews-tagline dash-tagline">Client Success</p>
                <h2 className="reviews-title">Our clients' satisfaction is our top priority. Here’s what our clients say about their experiences with us</h2>
              </div>
              <div className="reviews-nav-controls">
                <button className="review-nav-btn prev-btn" onClick={prevReview}>
                  &#10094;
                </button>
                <button className="review-nav-btn next-btn" onClick={nextReview}>
                  &#10096;
                </button>
              </div>
            </div>

            <div className="reviews-carousel-outer">
              <div
                className="reviews-track"
                style={{
                  transform: `translateX(calc(-1 * ${currentReview} * (400px + 2rem)))`,
                  transition: isTransitioning ? 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)' : 'none'
                }}
              >
                {extendedReviews.map((review, index) => (
                  <div key={index} className="review-card">
                    <p className="review-quote">"{review.text}"</p>
                    <div className="review-footer">
                      <h4 className="review-author">{review.author}</h4>
                      <p className="review-role">{review.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section> */}

        <div className="hero-cards-container">
          <div className="hero-card">
            <div className="hero-card-icon">
              {/* BIM Icon */}
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#144AE0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18v-8a2 2 0 0 0-2-2h-3v-3a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v3h-3a2 2 0 0 0-2 2v8z" /></svg>
            </div>
            <div className="hero-card-text">
              <h3 style={{ color: '#144AE0' }}>Digital Engineering</h3>
              <p>Your BIM Digital Engineering Consultant</p>
            </div>
          </div>
          <div className="hero-card">
            <div className="hero-card-icon">
              {/* Arch Icon */}
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#144AE0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 22v-5l5-5 5 5v5M12 12l5-5 5 5v5" /></svg>
            </div>
            <div className="hero-card-text">
              <h3 style={{ color: '#144AE0' }}>Elite Architecture</h3>
              <p>Innovation To Create Elite Architecture</p>
            </div>
          </div>
          <div className="hero-card">
            <div className="hero-card-icon">
              {/* Tekla Icon for Detailing */}
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#144AE0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M5 21V7l8-4 8 4v14" /></svg>
            </div>
            <div className="hero-card-text">
              <h3 style={{ color: '#144AE0' }}>Precise Detailing</h3>
              <p>Robust Tech for Precise HVAC & MEP Design</p>
            </div>
          </div>
          <div className="hero-card">
            <div className="hero-card-icon">
              {/* User/Virtual Icon */}
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#144AE0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            </div>
            <div className="hero-card-text">
              <h3 style={{ color: '#144AE0' }}>Virtual Employment</h3>
              <p>Hire Exclusive Virtual Design Consultants</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-content-left">
            <span className="about-tagline dash-tagline">About JSE</span>
            <h2 className="about-company-name">Pioneering Digital Construction Engineering</h2>
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

      <section className="solutions-section">
        <div className="container">
          <p className="solutions-tagline dash-tagline">SOLUTIONS BEYOND SOFTWARE</p>
          <h2 className="solutions-title">Excellence in Engineering, Unmatched in Services</h2>
          <p className="solutions-description">JSE offers customized engineering solutions to fulfill our clients project requirement.</p>

          <div className="home-bento-grid">
            <Link to="/services/design/architectural-bim" className="home-bento-card">
              <img
                src={architecturalBim}
                alt="Architectural BIM"
                className="home-bento-img"
                loading="lazy"
                decoding="async"
              />
              <div className="home-bento-overlay"></div>
              <div className="home-bento-content">
                <h3 className="home-bento-title">Architectural BIM</h3>
                <p className="home-bento-desc">Revolutionizing architecture with detailed and accurate BIM models.</p>
              </div>
            </Link>
            <Link to="/services/design/hvac-design" className="home-bento-card">
              <img
                src={hvacDesign}
                alt="HVAC Design"
                className="home-bento-img"
                loading="lazy"
                decoding="async"
              />
              <div className="home-bento-overlay"></div>
              <div className="home-bento-content">
                <h3 className="home-bento-title">HVAC Design</h3>
                <p className="home-bento-desc">Efficient and sustainable HVAC solutions for optimal performance.</p>
              </div>
            </Link>
            <Link to="/services/design/plumbing-public-health" className="home-bento-card">
              <img
                src={plumbing}
                alt="Plumbing & Public Health"
                className="home-bento-img"
                loading="lazy"
                decoding="async"
              />
              <div className="home-bento-overlay"></div>
              <div className="home-bento-content">
                <h3 className="home-bento-title">Plumbing & Public Health</h3>
                <p className="home-bento-desc">Reliable and safe plumbing systems designed for health and safety.</p>
              </div>
            </Link>
            <Link to="/services/design/mep-design" className="home-bento-card">
              <img
                src={mepDesign}
                alt="MEP Design & Drafting"
                className="home-bento-img"
                loading="lazy"
                decoding="async"
              />
              <div className="home-bento-overlay"></div>
              <div className="home-bento-content">
                <h3 className="home-bento-title">MEP Design & Drafting</h3>
                <p className="home-bento-desc">Integrated mechanical, electrical, and plumbing systems.</p>
              </div>
            </Link>
            <Link to="/services/design/bim-modelling" className="home-bento-card">
              <img
                src={bimModelling}
                alt="BIM Modelling"
                className="home-bento-img"
                loading="lazy"
                decoding="async"
              />
              <div className="home-bento-overlay"></div>
              <div className="home-bento-content">
                <h3 className="home-bento-title">BIM Modelling</h3>
                <p className="home-bento-desc">Precise and detailed BIM models.</p>
              </div>
            </Link>
            <Link to="/services/design/electrical-system-design" className="home-bento-card">
              <img
                src={electricalSystem}
                alt="Electrical System Design"
                className="home-bento-img"
                loading="lazy"
                decoding="async"
              />
              <div className="home-bento-overlay"></div>
              <div className="home-bento-content">
                <h3 className="home-bento-title">Electrical System Design</h3>
                <p className="home-bento-desc">Innovative electrical designs.</p>
              </div>
            </Link>
            <Link to="/services/design/elv" className="home-bento-card">
              <img
                src={mepDesign}
                alt="Extra Low Voltage"
                className="home-bento-img"
                loading="lazy"
                decoding="async"
              />
              <div className="home-bento-overlay"></div>
              <div className="home-bento-content">
                <h3 className="home-bento-title">Extra Low Voltage Systems</h3>
                <p className="home-bento-desc">Advanced Extra Low Voltage solutions.</p>
              </div>
            </Link>
            <Link to="/services/design/steel-structure-detailing" className="home-bento-card">
              <img
                src={hvacDesign}
                alt="Steel Structure Modeling"
                className="home-bento-img"
                loading="lazy"
                decoding="async"
              />
              <div className="home-bento-overlay"></div>
              <div className="home-bento-content">
                <h3 className="home-bento-title">Steel Structure</h3>
                <p className="home-bento-desc">Accurate Tekla detailing.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="stats-section" ref={statsRef}>
        <div className="container">
          <p className="stats-tagline dash-tagline">Standout Statistics</p>
          <h2 className="stats-title">Our ground-breaking Impact in Building & Construction field</h2>

          <div className="stats-grid">
            <div className="stat-item">
              <h3><StatCounter end={6000} suffix="+" /></h3>
              <p>Successful Projects Delivered</p>
            </div>
            <div className="stat-item">
              <h3><StatCounter end={20} suffix="+" /></h3>
              <p>Countries</p>
            </div>
            <div className="stat-item">
              <h3><StatCounter end={1000} suffix="+" /></h3>
              <p>Delighted Global Clients Served</p>
            </div>
            <div className="stat-item">
              <h3><StatCounter end={500} suffix="+" /></h3>
              <p>Expert Engineers on Staff</p>
            </div>
            <div className="stat-item">
              <h3><StatCounter end={99} suffix="%" /></h3>
              <p>Client Satisfaction Rate</p>
            </div>
            <div className="stat-item">
              <h3><StatCounter end={25} suffix="+" /></h3>
              <p>Years of Industry Experience</p>
            </div>
            <div className="stat-item">
              <h3><StatCounter end={5} /></h3>
              <p>Strategic Locations</p>
            </div>
          </div>
        </div>
      </section>

      <section className="business-divisions-section">
        <div className="divisions-container">
          {/* Left Column: Text */}
          <div className="divisions-left">
            <p className="dash-tagline" style={{ color: '#666' }}>Our Divisions</p>
            <h2 className="section-title" style={{ fontFamily: "system-ui, Segoe UI, Roboto, sans-serif", fontWeight: "800", textAlign: 'left', margin: '0 0 1.5rem 0' }}>Our Business Divisions</h2>
            <p className="divisions-desc">
              By integrating technical expertise with practical project insight, we streamline decision-making, optimize resources, and minimize costly revisions. With JSE, you benefit from a collaborative, future-ready approach that ensures your architectural vision is executed seamlessly, on time, and to the highest quality standards.
            </p>
          </div>

          {/* Right Column: 3 Cards */}
          <div className="divisions-right">
            {businessDivisions.map((division, index) => (
              <a key={index} href={division.link} className="division-card-new">
                <div className="division-info">
                  <h3>{division.title}</h3>
                  <p>{division.description}</p>
                </div>
                <div className="division-arrow">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="client-network-section">
        <div className="container">
          <p className="dash-tagline" style={{ color: '#666' }}>Trusted By</p>
          <h2 className="section-title" style={{ fontFamily: "system-ui, Segoe UI, Roboto, sans-serif", fontWeight: "800" }}>Our Client Network</h2>
          <p className="section-subtitle">Here are our customers, we aided in designing smart sustainable future</p>
          <div className="client-logo-grid-wrapper">
            <ClientLogoGrid />
          </div>
        </div>
      </section>

      <section className="reviews-section">
        <div className="container">
          <p className="dash-tagline" style={{ color: '#666' }}>Trusted By</p>
          <div className="reviews-header">
            <div className="reviews-text-group">
              <p className="reviews-tagline">Client Success</p>
              <p className="reviews-title">Our clients' satisfaction is our top priority. Here’s what our clients say about their experiences with us</p>
            </div>
            <div className="reviews-nav-controls">
              <button
                className="review-nav-btn prev-btn"
                onClick={prevReview}
                disabled={currentReview === 0}
                style={{ opacity: currentReview === 0 ? 0.5 : 1, cursor: currentReview === 0 ? 'not-allowed' : 'pointer' }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
              </button>
              <button
                className="review-nav-btn next-btn"
                onClick={nextReview}
                disabled={currentReview >= reviews.length - visibleCards}
                style={{ opacity: currentReview >= reviews.length - visibleCards ? 0.5 : 1, cursor: currentReview >= reviews.length - visibleCards ? 'not-allowed' : 'pointer' }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
              </button>
            </div>
          </div>
          <div className="reviews-carousel-outer">
            <div
              className="reviews-track"
              style={{
                transform: `translateX(calc(-1 * ${currentReview} * (400px + 2rem)))`,
                transition: 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)'
              }}
            >
              {reviews.map((review, index) => (
                <div key={index} className="review-card">
                  <p className="review-quote">"{review.text}"</p>
                  <div className="review-footer">
                    <h4 className="review-author">{review.author}</h4>
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
              <p className="dash-tagline">WHY CHOOSE US</p>
              <h2 className="benefits-section-title">Your Benefits Choosing JSE Engineering Private Limited</h2>
              <p className="benefits-header-desc">
                Partnering with JSE means choosing clarity, precision, and efficiency.
                We deliver engineering solutions that streamline construction and maximize value.
              </p>
              <div className="benefits-decorative-line"></div>
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
        <section className="geo-section">
          <div className="container">
            <div className="geo-header">
              <p className="geo-tagline dash-tagline">WHERE WE WORK</p>
              <h2 className="geo-title">Geographical Achievements.</h2>
              <p className="geo-text">
                With a major stand-on focus on BIM MEP solutions, JSE Engineering transcends geographical
                boundaries delivering bespoke solutions to our builders, contractors, or real estate clients.
              </p>
            </div>
            <div className="geo-content">
              <div className="geo-map-container">
                <img
                  src={mapImage}
                  alt="Global Presence Map"
                  className="geo-map"
                  loading="lazy"
                  width="800"
                  height="450"
                />
              </div>
              <div className="geo-stats-container">
                <div className="geo-stat-item">
                  <h3><StatCounter end={100} suffix="%" /></h3>
                  <p>Employee Owned</p>
                </div>
                <div className="geo-stat-item">
                  <h3><StatCounter end={1000} suffix="+" /></h3>
                  <p>Active Projects</p>
                </div>
                <div className="geo-stat-item">
                  <h3><StatCounter end={6000} suffix="+" /></h3>
                  <p>Global Deliveries</p>
                </div>
                <a href="/history" className="geo-cta-btn">Our History</a>
              </div>
            </div>
          </div>
        </section>


      </section>

      {/* Form Section */}
      <section className="internship-form-section" id="contact-form">
        <div className="form-container">
          {/* Left Side: Title & Info */}
          <div className="form-info-side">
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
      </section>
    </div >
  );
};

export default Home;

