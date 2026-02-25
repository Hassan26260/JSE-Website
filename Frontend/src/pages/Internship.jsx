import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "../styles/Internship.css";
import heroGroupImage from "../assets/images-home/internship/enlarging-img.png";
import eligibilityImage from "../assets/images-home/internship/whocanjoin.JPG";
import hiringImage from "../assets/images-home/internship/hiring.JPG";
import careerDevImage from "../assets/other/pexels-sora-shimazaki-5926389.png";
import abroadImage from "../assets/replacement/abroad.JPG"; // New Image
import vrImage from "../assets/images-home/virtual.jpeg"; // Fixed Import
import internVideo from "../assets/images-home/intern-video/1a5cf5c19e1af4f9770f31343bd39fb9_0_14766666.mp4"; // Import Video
// StickyContact import removed
import { useContactModal } from "../context/ContactModalContext"; // Added Context
import InternshipTimeline from '../components/InternshipTimeline';

const Internship = () => {
  const imageRef = useRef(null);
  const videoRef = useRef(null);
  const { openModal } = useContactModal(); // Modal generic hook
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return;

      const rect = imageRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate visibility progress
      // Start expanding when the top of the element enters the viewport
      // Complete expansion when the element is well within the viewport (e.g., center)
      const startOffset = windowHeight; // Bottom of viewport
      const endOffset = windowHeight * 0.4; // 40% from top

      // Calculate how far the element top is from the start point (entering view)
      const distance = startOffset - rect.top;
      const totalDistance = startOffset - endOffset;

      let progress = distance / totalDistance;
      progress = Math.max(0, Math.min(1, progress));

      // Interpolate width: 70% -> 100%
      const newWidth = 70 + (30 * progress);

      // Interpolate border-radius: 24px -> 0px
      const newRadius = 24 * (1 - progress);

      imageRef.current.style.width = `${newWidth}%`;
      imageRef.current.style.borderRadius = `${newRadius}px`;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Force Dark Body Background for this page only
  useEffect(() => {
    // Save original body style
    const originalStyle = window.getComputedStyle(document.body).backgroundColor;
    document.body.style.backgroundColor = '#0B1220';

    return () => {
      // Revert on cleanup
      document.body.style.backgroundColor = '';
    };
  }, []);

  const internships = [
    {
      title: "Civil Engineering",
      path: "/internship/civil-engineering",
      description: "Working on site execution, quantity survey, and project management for real-world construction proficiency."
    },
    {
      title: "Mechanical Engineering",
      path: "/internship/mechanical-engineering",
      description: "Experience in MEP services (HVAC & Firefighting) involving design, drafting, and coordination."
    },
    {
      title: "Electrical & Electronics Engineering",
      path: "/internship/electrical-electronics-engineering",
      description: "Practical exposure to electrical system design, load calculation, and on-site electrical installations."
    },
    {
      title: "Architectural",
      path: "/internship/architectural",
      description: "Architectural BIM modeling, space planning, and visualization using advanced design software."
    }
  ];

  const tools = [
    { title: "BIM", icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18v-8a2 2 0 0 0-2-2h-3v-3a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v3h-3a2 2 0 0 0-2 2v8z" /></svg> },
    { title: "Revit MEP-3D", icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16zM7.5 4.21l4.5 2.6 4.5-2.6m-9 15.58V9.42l4.5 2.6v7.79m4.5-7.79l4.5-2.6v7.79" /></svg> },
    { title: "AutoCAD-2D", icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h20M12 2v20" /></svg> },
    { title: "Dialux", icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a6 6 0 0 1 6 6c0 2.22-1.21 4.15-3 5.19V17a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-3.81A6 6 0 0 1 6 8a6 6 0 0 1 6-6z" /></svg> },
    { title: "Naviswork", icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h20M12 2a10 10 0 0 1 0 20 10 10 0 0 1 0-20z" /></svg> },
    { title: "HVAC", icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 12m-10 0a10 10 0 1 0 20 0a10 10 0 1 0-20 0M12 12l4.9 4.9M12 12l-4.9 4.9M12 12l4.9-4.9M12 12l-4.9-4.9" /></svg> },
    { title: "Electrical & Extra Low Voltage", icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg> },
    { title: "PHE & Firefighting", icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" /></svg> },
    { title: "TEKLA", icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M5 21V7l8-4 8 4v14" /></svg> },
    { title: "ARCH", icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 22v-5l5-5 5 5v5M12 12l5-5 5 5v5" /></svg> },
  ];



  /* Define theme colors to cycle through */
  const themes = ['card-theme-blue', 'card-theme-purple', 'card-theme-green', 'card-theme-orange', 'card-theme-pink', 'card-theme-cyan'];

  return (
    <div className="internship-page">
      {/* Dark Hero Section matching other pages */}
      {/* Video Hero Section */}
      <section className="internship-hero-section">
        <video
          className="internship-hero-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={internVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="internship-hero-overlay"></div>

        <div className="internship-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="internship-hero-title" style={{ fontFamily: 'delight', fontWeight: 'bold', fontSize: '5rem' }}>Internship Programs</h1>
            {/* <div className="internship-breadcrumbs">
              Home &gt; <span>Internship</span>
            </div> */}

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              style={{ fontSize: '1.5rem', marginTop: '1rem', maxWidth: '600px', color: '#fff' }}
            >
              Building the Future of Engineering
            </motion.p>

            <motion.div
              className="hero-cta-group"
              style={{ display: 'flex', gap: '1.5rem', marginTop: '2.5rem' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <button
                className="internship-cta-btn-glass"
                onClick={openModal} // Hook into the new global layout context
              >
                Apply Now
              </button>

              <a
                href="#explore"
                className="internship-cta-btn-glass"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('explore').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Intro Text Section */}
      <section className="internship-intro" id="explore">
        <div className="intro-heading-side">
          {/* Explicit White Color for @JSE part */}
          <h2><span className="blue">Intern</span> <br /><span style={{ color: '#ffffff' }}>@JSE Engineering Pvt Ltd</span></h2>
        </div>
        <div className="intro-text-side">
          <p style={{ color: '#f1f5f9' }}>
            Your dream career isn’t far. It just needs the right beginning. Join our 100 days Internship Programme in Chennai, Tirunelveli, Trichy, and Vizag. Discover the version of YOU that the engineering world is waiting for.
          </p>
          <p style={{ marginTop: '1rem', color: '#f1f5f9' }}>
            As an engineering student, explore your academic learning with real-life engineering practices directly from professionals at JSE.
          </p>
        </div>
      </section>

      {/* Expanding Image Section */}
      <section className="expanding-image-section">
        <div
          ref={imageRef}
          className="expanding-image-wrapper"
        >
          <img src={heroGroupImage} alt="JSE Internship Team" className="expanding-img" loading="lazy" />
        </div>
      </section>

      {/* Who Can Join Us Section */}
      <section className="who-can-join-section">
        <div className="who-content-side">
          <h2 className="section-heading-blue">Who Can Join Us</h2>
          <div className="section-blob-text">
            <p style={{ marginBottom: '1.5rem', color: '#ffffff' }}>
              We welcome students from Civil, Mechanical, Electrical & Electronics Engineering, Electronics & communication, Architecture, Mechatronics, and related disciplines (Diploma / UG / PG) who want to gain real-time BIM design experience.
            </p>
            <p style={{ color: '#ffffff' }}>
              Every day, you’ll work on designs that shape smarter buildings, efficient systems, and future-ready infrastructure.
            </p>
          </div>
        </div>
        <div className="who-image-side">
          <img src={eligibilityImage} alt="Students collaborating" className="who-img" loading="lazy" />
        </div>
      </section>

      {/* Career Development Section */}
      <section className="career-development-blue-section">
        <div className="career-dev-blue-container">
          <h2 className="career-dev-blue-title">Career Development</h2>
          <div className="career-dev-blue-divider"></div>
          <p className="career-dev-blue-text">
            As an intern, you can easily broaden your exposure to the BIM industry and deepen your hands-on experience by joining our 100-days Internship program. From learning advanced modelling workflows to understanding real project coordination, you can learn from our seniors or managers everyday and grow into an industry-ready PRO engineer.
          </p>
        </div>
      </section>

      {/* Recruitment Process Section */}
      <section className="who-can-join-section" style={{ padding: '6rem 2rem', marginTop: '2rem' }}>
        <div className="who-image-side">
          <img src={hiringImage} alt="Recruitment Process" className="who-img" loading="lazy" />
        </div>
        <div className="who-content-side">
          <h2 className="section-heading-blue">Recruitment Process</h2>
          <div className="section-blob-text">
            <p style={{ marginBottom: '1.5rem', color: '#ffffff' }}>
              Our internship hiring process looks beyond grades and focuses on giving every applicant a fair opportunity, specifically designed for students and fresh graduates.
            </p>
            <p style={{ color: '#ffffff' }}>
              From basic screenings to technical evaluations, each step focuses on identifying your potential and preparing you for a meaningful internship experience.
            </p>
          </div>
        </div>
      </section>



      {/* Tools & Technologies Section */}
      <section className="tools-section">
        <div className="section-header-center">
          <h2 className="section-heading-blue">Explore Our Internship Areas</h2>
          <p className="section-desc-center">
            Find your perfect engineering niche (courses, BIM tools & software) with internship paths built for curious minds
          </p>
        </div>

        <div className="tools-grid">
          {tools.map((tool, index) => (
            <div key={index} className={`tool-card ${themes[index % themes.length]}`}>
              <div className="intern-pattern"></div>
              <div className="tool-icon-circle">
                {tool.icon}
              </div>
              <h4 className="tool-title">{tool.title}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <InternshipTimeline />

      {/* Bento Grid Section */}
      <section className="bento-section">
        <div className="bento-heading-wrapper">
          <h2 className="section-heading-blue">Program Benefits</h2>
        </div>

        <div className="bento-grid">
          {/* 1. Job Assured (Blue Theme) */}
          <div className="bento-card card-theme-blue span-2-col">
            <div className="intern-pattern"></div>
            <div className="bento-content">
              <div className="bento-icon-box">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg>
              </div>
              <div className="bento-info">
                <h3 className="bento-title">100% Job Assured</h3>
                <p className="bento-desc">Guaranteed placement at JSE Engineering Pvt Ltd locations (Tirunelveli, Trichy, Chennai & Vizag).</p>
              </div>
            </div>
          </div>

          {/* 2. 100 Days (Green Theme) */}
          <div className="bento-card card-theme-green span-2-row">
            <div className="intern-pattern"></div>
            <div className="bento-content" style={{ justifyContent: 'space-between' }}>
              <div className="bento-icon-box">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              </div>
              <div className="bento-info">
                <h3 className="bento-title">100 Days</h3>
                <p className="bento-desc">Intensive 3-month program covering BIM Modelling (LOD 100-500) and site coordination.</p>
              </div>
            </div>
          </div>

          {/* 3. Hands-on (Purple Theme) */}
          <div className="bento-card card-theme-purple">
            <div className="intern-pattern"></div>
            <div className="bento-content">
              <div className="bento-icon-box">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
              </div>
              <div className="bento-info">
                <h3 className="bento-title">Hands-on</h3>
                <p className="bento-desc">Live international projects (UAE, Qatar, USA, UK).</p>
              </div>
            </div>
          </div>

          {/* 4. Experience Certificate (Orange Theme) */}
          <div className="bento-card card-theme-orange">
            <div className="intern-pattern"></div>
            <div className="bento-content">
              <div className="bento-icon-box">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              </div>
              <div className="bento-info">
                <h3 className="bento-title">Certification</h3>
                <p className="bento-desc">Experience certificate upon successful completion.</p>
              </div>
            </div>
          </div>

          {/* 5. Software (Cyan Theme) */}
          <div className="bento-card card-theme-cyan">
            <div className="intern-pattern"></div>
            <div className="bento-content">
              <div className="bento-icon-box">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
              </div>
              <div className="bento-info">
                <h3 className="bento-title">Software</h3>
                <p className="bento-desc">Master Revit, AutoCAD, Navisworks, Tekla & Dialux.</p>
              </div>
            </div>
          </div>

          {/* 6. Career Gap (Pink Theme) */}
          <div className="bento-card card-theme-pink">
            <div className="intern-pattern"></div>
            <div className="bento-content">
              <div className="bento-icon-box">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
              </div>
              <div className="bento-info">
                <h3 className="bento-title">Career Gap?</h3>
                <p className="bento-desc">Perfect bridging program for career restarts.</p>
              </div>
            </div>
          </div>

          {/* 7. Abroad (Blue Theme, Wide) */}
          <div className="bento-card card-theme-blue span-2-col">
            <div className="intern-pattern"></div>
            <div className="bento-content">
              <div className="bento-icon-box">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
              </div>
              <div className="bento-info">
                <h3 className="bento-title"> Abroad Opportunities</h3>
                <p className="bento-desc">Top performers receive direct referrals for career opportunities in the Middle East.</p>
              </div>
            </div>
          </div>

          {/* 8. Stipend (Purple Theme) */}
          <div className="bento-card card-theme-purple">
            <div className="intern-pattern"></div>
            <div className="bento-content">
              <div className="bento-icon-box">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
              </div>
              <div className="bento-info">
                <h3 className="bento-title">Performance Stipend</h3>
                <p className="bento-desc">Earn while you learn based on project performance.</p>
              </div>
            </div>
          </div>

          {/* 9. Hostel (Green Theme) */}
          <div className="bento-card card-theme-green">
            <div className="intern-pattern"></div>
            <div className="bento-content">
              <div className="bento-icon-box">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
              </div>
              <div className="bento-info">
                <h3 className="bento-title">Accommodation</h3>
                <p className="bento-desc">Hostel facilities available for outstation candidates.</p>
              </div>
            </div>
          </div>


        </div>
      </section>
    </div>
  );
};

export default Internship;
