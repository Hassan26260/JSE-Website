import React, { useEffect } from 'react';
import '../../styles/Internship.css';
import internImage from '../../assets/intern-civil/pexels-linkedin-1251861.webp';

// Feature Images (Placeholders from Home assets as approved plan)
import img1 from '../../assets/images-home/skyscraper.webp';
import img2 from '../../assets/images-home/architectural-bim.webp';
import img3 from '../../assets/images-home/bim-modelling.webp';
import img4 from '../../assets/images-home/mep-design.webp';
import img5 from '../../assets/images-home/hvac-design.webp';
import img6 from '../../assets/images-home/plumbing.webp';

const CivilEngineering = () => {

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      title: "Certified Training",
      desc: "Receive industry-recognized certification upon completion, validating your skills in modern civil engineering tools and methodologies.",
      img: img1
    },
    {
      title: "Easy-to-understand Training",
      desc: "Our curriculum is broken down into simplified modules, ensuring complex engineering concepts are accessible and easy to grasp for everyone.",
      img: img2
    },
    {
      title: "Placement Training",
      desc: "Get dedicated support for resume building, interview preparation, and soft skills development to ensure you are job-ready from day one.",
      img: img3
    },
    {
      title: "Software Mastery",
      desc: "Master industry-standard software like Tekla, AutoCAD, and Revit through intensive hands-on sessions and real-time problem solving.",
      img: img4
    },
    {
      title: "Experienced Mentorship",
      desc: "Learn directly from seasoned professionals who bring years of on-site and design experience to guide your learning journey.",
      img: img5
    },
    {
      title: "Hands on Real Projects",
      desc: "Move beyond theory by working on live project simulations that mimic actual site challenges and design requirements.",
      img: img6
    }
  ];

  return (
    <div className="internship-page">
      {/* Dark Hero Section */}
      <section className="internship-hero-section">
        <div className="internship-hero-content">
          <div className="internship-breadcrumbs">
            internship &gt; <span>Civil Engineering</span>
          </div>
          <h1 className="internship-hero-title">Civil Engineering</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="internship-content-section">
        <div className="internship-split-container">

          {/* Left: Text */}
          <div className="internship-text-side">
            <h2 className="internship-heading">Build Your Civil Engineering Career the Smart Way</h2>
            <div className="internship-desc">
              <p>
                Join our Civil Engineering internship program to gain hands-on experience in structural analysis, design, and construction management. You will work alongside experienced engineers on real-world projects, applying theoretical knowledge to practical challenges.
              </p>
              <p>
                Our program focuses on developing core competencies in CAD software, site supervision, and project estimation. Whether you are interested in residential, commercial, or infrastructure projects, JSE allows you to explore diverse aspects of the industry.
              </p>
            </div>

            <button className="apply-btn" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              Apply Now
              {/* Inline SVG Arrow */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>

          {/* Right: Image */}
          <div className="internship-image-side">
            <div className="internship-image-wrapper">
              <img src={internImage} alt="Civil Engineering Internship" className="internship-img" />
            </div>
          </div>

        </div>
      </section>

      {/* Program Details Section (2x2 Grid) */}
      <section className="internship-details-section">
        <div className="container" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
          <p className="dash-tagline">Program Highlights</p>
          <h2 className="section-title" style={{ textAlign: 'left', marginLeft: '0', fontFamily: 'system-ui, Segoe UI, Roboto, sans-serif', fontWeight: 800 }}>Civil Engineering Internship Program & Duration</h2>
          <p className="section-subtitle" style={{ textAlign: 'left', marginLeft: '0', maxWidth: '800px', marginBottom: '3rem', fontSize: '1.1rem', color: '#475569', lineHeight: '1.6' }}>
            Our modern building construction internship is designed to fit your semester break or final-year journey. With a flexible program, you can dive into deeper technical learning and project exposure.
          </p>

          <div className="details-grid">

            {/* Row 1, Col 1: Duration */}
            <div className="detail-card duration">
              <div className="detail-icon">
                {/* Clock Icon */}
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3 className="detail-title">Duration</h3>
              <div className="detail-value">100 Days</div>
            </div>

            {/* Row 1, Col 2: Batch Schedule */}
            <div className="detail-card batch">
              <div className="detail-icon">
                {/* Calendar Icon */}
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <h3 className="detail-title">Batch Schedule</h3>
              <div className="detail-value" style={{ display: 'flex', alignItems: 'center' }}>
                Enrollment <span className="status-badge">OPEN</span>
              </div>
            </div>

            {/* Row 2, Col 1: Program Stack */}
            <div className="detail-card program">
              <div className="detail-icon">
                {/* Layers Icon */}
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
              </div>
              <h3 className="detail-title">Software & Skills Covered</h3>
              <div className="skill-tags">
                <span className="skill-tag">Tekla</span>
                <span className="skill-tag">Structure (2D & 3D)</span>
                <span className="skill-tag">PH</span>
                <span className="skill-tag">AutoCAD</span>
                <span className="skill-tag">Revit MEP</span>
              </div>
            </div>

            {/* Row 2, Col 2: Placement */}
            <div className="detail-card placement">
              <div className="detail-icon">
                {/* Award / Briefcase Icon */}
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
              <h3 className="detail-title">Placement Guarantee</h3>
              <div className="detail-value">100% Placement Support</div>
              <div className="placement-sub">*For candidates with no academic arrears</div>
            </div>

          </div>
        </div>
      </section>

      {/* Benefits Section (Unique Named "What You Get" Section) */}
      <section className="what-you-get-section">
        <div className="what-you-get-container">

          {/* Left: Sticky Text Content */}
          <div className="what-you-get-text-side">
            <p className="dash-tagline">Why Join Us</p>
            <h2 className="section-title" style={{ textAlign: 'left', marginLeft: '0', fontFamily: 'system-ui, Segoe UI, Roboto, sans-serif', fontWeight: 800, fontSize: '2.5rem' }}>
              What You Get From The Internship
            </h2>
            <div className="internship-desc" style={{ marginBottom: '2.5rem' }}>
              <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.6' }}>
                Grow your skills, gain real experience, and learn how JSE Engineering Internship works outside the classroom. Our comprehensive program is designed to bridge the gap between academic theory and industry reality.
              </p>
            </div>
            <button className="apply-btn" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              Start Your Journey
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>

          {/* Right: 6-Card Grid (Uniform White Cards) */}
          <div className="what-you-get-grid-side">

            {/* 1. Certified Training */}
            <div className="what-you-get-card">
              <div className="what-you-get-icon-wrapper">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3 className="what-you-get-card-title">Certified Training</h3>
            </div>

            {/* 2. Easy-to-understand Training */}
            <div className="what-you-get-card">
              <div className="what-you-get-icon-wrapper">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <h3 className="what-you-get-card-title">Easy-to-understand Training</h3>
            </div>

            {/* 3. Placement Training */}
            <div className="what-you-get-card">
              <div className="what-you-get-icon-wrapper">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
              <h3 className="what-you-get-card-title">Placement Training</h3>
            </div>

            {/* 4. Software Mastery */}
            <div className="what-you-get-card">
              <div className="what-you-get-icon-wrapper">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
              </div>
              <h3 className="what-you-get-card-title">Software Mastery</h3>
            </div>

            {/* 5. Experienced Mentorship */}
            <div className="what-you-get-card">
              <div className="what-you-get-icon-wrapper">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="what-you-get-card-title">Experienced Mentorship</h3>
            </div>

            {/* 6. Hands on Real Projects */}
            <div className="what-you-get-card">
              <div className="what-you-get-icon-wrapper">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
                  <line x1="8" y1="2" x2="8" y2="18"></line>
                  <line x1="16" y1="6" x2="16" y2="22"></line>
                </svg>
              </div>
              <h3 className="what-you-get-card-title">Hands on Real Projects</h3>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default CivilEngineering;
