import "../styles/Home.css";
import heroBanner from "../assets/images-home/Herobanner.webp";
import heroGroupImage from "../assets/images-home/hero-group-image.webp";
import architecturalBim from "../assets/images-home/architectural-bim.webp";
import hvacDesign from "../assets/images-home/hvac-design.webp";
import plumbing from "../assets/images-home/plumbing.webp";
import mepDesign from "../assets/images-home/mep-design.webp";
import bimModelling from "../assets/images-home/bim-modelling.webp";
import electricalSystem from "../assets/images-home/electrical-system.webp";
import mapImage from "../assets/images-home/Map.png";

import { useState, useEffect, useRef } from "react";

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
                loading="eager"
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

  // Business Divisions Data
  const businessDivisions = [
    {
      title: "Design Engineering Projects",
      description: "JSE manpower service aids you get the right candidates with right professional background at convenient cost.",
      image: architecturalBim,
      link: "/services"
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

  // Clone reviews for infinite loop effect
  const extendedReviews = [...reviews, ...reviews];

  const nextReview = () => {
    setIsTransitioning(true);
    setCurrentReview((prev) => prev + 1);
  };

  const prevReview = () => {
    // Basic rewind for Prev button to keep it simple and robust
    setIsTransitioning(true);
    setCurrentReview((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  // Infinite Loop Logic: Snap back to 0 when we reach the end of the first set
  useEffect(() => {
    if (currentReview === reviews.length) {
      // Wait for the transition to finish (500ms), then snap back to 0 without transition
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentReview(0);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentReview, reviews.length]);

  // Re-enable transition after snapping back
  useEffect(() => {
    if (!isTransitioning && currentReview === 0) {
      // Force reflow/wait for next frame so the snap happens without transition
      const timer = setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning, currentReview]);


  return (
    <div className="home-page">
      <section className="hero-section" style={{ backgroundImage: `url(${heroBanner})` }}>
        <div className="hero-overlay"></div>
        <div className="hero-main-content">
          <h1 className="main-hero-title">Engineering Tomorrow's Infrastructure</h1>
          <p className="main-hero-subtitle">Your Trusted Global BIM Partner</p>
          <a href="/contact" className="hero-cta-btn">Contact Us</a>
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
            <div className="hero-card-icon">🏗️</div>
            <div className="hero-card-text">
              <h3>Digital Engineering</h3>
              <p>Your BIM Digital Engineering Consultant</p>
            </div>
          </div>
          <div className="hero-card">
            <div className="hero-card-icon">🏛️</div>
            <div className="hero-card-text">
              <h3>Elite Architecture</h3>
              <p>Innovation To Create Elite Architecture</p>
            </div>
          </div>
          <div className="hero-card">
            <div className="hero-card-icon">⚙️</div>
            <div className="hero-card-text">
              <h3>Precise Detailing</h3>
              <p>Robust Tech for Precise HVAC & MEP Design</p>
            </div>
          </div>
          <div className="hero-card">
            <div className="hero-card-icon">👥</div>
            <div className="hero-card-text">
              <h3>Virtual Employment</h3>
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

            <button className="about-cta-btn">Discover Our Story</button>
          </div>

          <div className="about-image-container">
            <div className="about-image-wrapper">
              <img
                src={heroGroupImage}
                alt="JSE Engineering Office"
                className="about-image"
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

          <div className="bento-grid home-bento-grid">
            <div className="bento-item">
              <img
                src={architecturalBim}
                alt="Architectural BIM"
                className="bento-bg"
                loading="eager"
                width="600"
                height="400"
              />
              <div className="bento-overlay"></div>
              <div className="bento-content">
                <h4 className="bento-title">Architectural BIM</h4>
                <p>Revolutionizing architecture with detailed and accurate BIM models.</p>
              </div>
            </div>
            <div className="bento-item">
              <img
                src={hvacDesign}
                alt="HVAC Design"
                className="bento-bg"
                loading="eager"
                width="600"
                height="400"
              />
              <div className="bento-overlay"></div>
              <div className="bento-content">
                <h4 className="bento-title">HVAC Design</h4>
                <p>Efficient and sustainable HVAC solutions for optimal performance.</p>
              </div>
            </div>
            <div className="bento-item">
              <img
                src={plumbing}
                alt="Plumbing & Public Health"
                className="bento-bg"
                loading="eager"
                width="600"
                height="400"
              />
              <div className="bento-overlay"></div>
              <div className="bento-content">
                <h4 className="bento-title">Plumbing & Public Health</h4>
                <p>Reliable and safe plumbing systems designed for health and safety.</p>
              </div>
            </div>
            <div className="bento-item">
              <img
                src={mepDesign}
                alt="MEP Design & Drafting"
                className="bento-bg"
                loading="eager"
                width="600"
                height="400"
              />
              <div className="bento-overlay"></div>
              <div className="bento-content">
                <h4 className="bento-title">MEP Design & Drafting</h4>
                <p>Integrated mechanical, electrical, and plumbing systems.</p>
              </div>
            </div>
            <div className="bento-item">
              <img
                src={bimModelling}
                alt="BIM Modelling"
                className="bento-bg"
                loading="eager"
                width="600"
                height="400"
              />
              <div className="bento-overlay"></div>
              <div className="bento-content">
                <h4 className="bento-title">BIM Modelling</h4>
                <p>Precise and detailed BIM models.</p>
              </div>
            </div>
            <div className="bento-item">
              <img
                src={electricalSystem}
                alt="Electrical System Design"
                className="bento-bg"
                loading="eager"
                width="600"
                height="400"
              />
              <div className="bento-overlay"></div>
              <div className="bento-content">
                <h4 className="bento-title">Electrical System Design</h4>
                <p>Innovative electrical designs.</p>
              </div>
            </div>
            <div className="bento-item">
              <img
                src={mepDesign}
                alt="ELV (Extra Low Voltage)"
                className="bento-bg"
                loading="eager"
                width="600"
                height="400"
              />
              <div className="bento-overlay"></div>
              <div className="bento-content">
                <h4 className="bento-title">ELV Systems</h4>
                <p>Advanced ELV solutions.</p>
              </div>
            </div>
            <div className="bento-item">
              <img
                src={hvacDesign}
                alt="Steel Structure Modeling"
                className="bento-bg"
                loading="eager"
                width="600"
                height="400"
              />
              <div className="bento-overlay"></div>
              <div className="bento-content">
                <h4 className="bento-title">Steel Structure</h4>
                <p>Accurate Tekla detailing.</p>
              </div>
            </div>
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
        <div className="container">
          <p className="dash-tagline" style={{ color: '#666' }}>Our Divisions</p>
          <h2 className="section-title" style={{ fontFamily: "system-ui, Segoe UI, Roboto, sans-serif", fontWeight: "800" }}>Our Business Divisions</h2>
          <div className="business-grid">
            {businessDivisions.map((division, index) => (
              <div key={index} className="business-card">
                <div className="business-card-top">
                  <img
                    src={division.image}
                    alt={division.title}
                    className="business-card-img"
                    loading="eager"
                    width="400"
                    height="300"
                  />
                </div>
                <div className="business-card-content">
                  <h3>{division.title}</h3>
                  <p>{division.description}</p>
                  <a href={division.link} className="business-learn-more">
                    Learn More <span>&#8594;</span>
                  </a>
                </div>
              </div>
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
              <h2 className="reviews-title">Our clients' satisfaction is our top priority. Here’s what our clients say about their experiences with us</h2>
            </div>
            <div className="reviews-nav-controls">
              <button className="review-nav-btn prev-btn" onClick={prevReview}>
                &#10094; {/* Simple Arrow Hex Code or SVG? Let's use simple for now or SVG for quality. User Ref had specific arrows. SVG is safer. */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
              </button>
              <button className="review-nav-btn next-btn" onClick={nextReview}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
              </button>
            </div>
          </div>

          <div className="reviews-carousel-outer">
            <div
              className="reviews-track"
              style={{
                transform: `translateX(calc(-1 * ${currentReview} * (400px + 2rem)))`
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
        <div className="container">
          <p className="review-tagline dash-tagline">Client Success</p>
          <p className="benefits-tagline">Why Choose Us</p>
          <h2 className="benefits-title">Your Benefits Choosing JSE Engineering Private Limited</h2>

          <div className="benefits-grid">
            <div className="benefits-column left">
              <div className="benefit-item">
                <h3>Top 1% US-Trained Talent</h3>
                <p>Our architects and engineers are among the best, specifically trained for US-based projects, with extensive experience in delivering high-quality results across the country.</p>
              </div>
              <div className="benefit-item">
                <h3>One-Month Risk-Free Trial</h3>
                <p>Try our dedicated architects and engineers risk-free with a one-month, money-back guarantee—no questions asked.</p>
              </div>
              <div className="benefit-item">
                <h3>No Long-Term Commitments</h3>
                <p>Enjoy the flexibility of working with us without long-term commitments or lock-in periods.</p>
              </div>
              <div className="benefit-item">
                <h3>15-Day Notice Period</h3>
                <p>We offer a flexible 15-day notice period, allowing you to scale your team up or down as your project requirements evolve.</p>
              </div>
            </div>

            <div className="benefits-column center">
              <div className="benefit-image-container">
                <img
                  src={heroGroupImage}
                  alt="JSE Engineering Benefits"
                  loading="eager"
                  width="600"
                  height="400"
                />
              </div>
            </div>

            <div className="benefits-column right">
              <div className="benefit-item">
                <h3>Access to a Vast Talent Pool</h3>
                <p>Gain access to our extensive pool of top-tier talent, ensuring the perfect match for your project requirements.</p>
              </div>
              <div className="benefit-item">
                <h3>Cultural Compatibility</h3>
                <p>Our team integrates seamlessly into your culture, fostering a collaborative and productive environment.</p>
              </div>
              <div className="benefit-item">
                <h3>Customer NPS of 86 (Quality Assurance)</h3>
                <p>Our commitment to quality is reflected in our customer Net Promoter Score (NPS) of 86.</p>
              </div>
              <div className="benefit-item">
                <h3>Round-the-Clock Productivity</h3>
                <p>Leverage time zone differences to ensure 24/7 productivity and faster project delivery timestamps.</p>
              </div>
            </div>
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
                  loading="eager"
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
        <div className="container">
          <h2 className="section-title">Why Choose JSE Engineering?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🏗️</div>
              <h3>Expert Engineering</h3>
              <p>
                Professional engineering services with years of experience in
                infrastructure and design.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h3>Virtual Teams</h3>
              <p>
                Access skilled engineering professionals through our virtual team
                solutions.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎓</div>
              <h3>Internship Programs</h3>
              <p>
                Shape the next generation of engineers through our comprehensive
                internship programs.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💼</div>
              <h3>Career Opportunities</h3>
              <p>
                Join our team and work on exciting projects that make a
                difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="services-preview-section">
        <div className="container">
          <p className="dash-tagline">Our Expertise</p>
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Design Services</h3>
              <p>
                Comprehensive design solutions including BIM, MEP, HVAC, and
                more.
              </p>
              <a href="/services" className="service-link">
                Learn More →
              </a>
            </div>
            <div className="service-card">
              <h3>Virtual Team for Hire</h3>
              <p>
                Flexible engineering teams ready to integrate with your projects.
              </p>
              <a href="/services/virtual-team" className="service-link">
                Learn More →
              </a>
            </div>
            <div className="service-card">
              <h3>Secondment Team</h3>
              <p>
                Temporary engineering professionals to support your project needs.
              </p>
              <a href="/services/secondment-team" className="service-link">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div >
  );
};

export default Home;

