import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import "../styles/Internship.css";
import heroGroupImage from "../assets/images-home/internship/enlarging-img.JPG";
import eligibilityImage from "../assets/images-home/internship/whocanjoin.JPG";
import hiringImage from "../assets/images-home/internship/hiring.JPG";
import careerDevImage from "../assets/other/pexels-sora-shimazaki-5926389.jpg";
import internVideo from "../assets/images-home/intern-video/1a5cf5c19e1af4f9770f31343bd39fb9_0_14766666.mp4"; // Import Video
import StickyContact from '../components/StickyContact';

const Internship = () => {
  const imageRef = useRef(null);
  const videoRef = useRef(null);
  const contactRef = useRef(null);
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

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    mobile: '',
    email: '',
    address: '',
    college: '',
    department: '',
    year: '',
    branch: '',
    comments: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Application Submitted! (This is a frontend demo)");
    // Backend logic here
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



  return (
    <div className="internship-page">
      {/* Dark Hero Section matching other pages */}
      <section className="internship-hero-section">
        <div className="internship-hero-content">
          <div className="internship-breadcrumbs">
            Home &gt; <span>Internship</span>
          </div>
          <h1 className="internship-hero-title">Internship Opportunities</h1>
          <button className="internship-cta-btn" onClick={() => contactRef.current.open()}>
            Apply Now
          </button>
        </div>
      </section>

      {/* Intro Text Section */}
      <section className="internship-intro">
        <div className="intro-heading-side">
          <h2><span className="blue">Intern</span> <br />@JSE Engineering Pvt Ltd</h2>
        </div>
        <div className="intro-text-side">
          <p>
            Your dream career isn’t far. It just needs the right beginning. Join our 100 days Internship Programme in Chennai, Tirunelveli, Trichy, and Vizag. Discover the version of YOU that the engineering world is waiting for.
          </p>
          <p style={{ marginTop: '1rem' }}>
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
          <div className="dash-tagline">
            ELIGIBILITY
          </div>
          <h2 className="section-heading-blue">Who Can Join Us</h2>
          <div className="section-blob-text">
            <p style={{ marginBottom: '1.5rem' }}>
              We welcome students from Civil, Mechanical, Electrical & Electronics Engineering, Electronics & communication, Architecture, Mechatronics, and related disciplines (Diploma / UG / PG) who want to gain real-time BIM design experience.
            </p>
            <p>
              Every day, you’ll work on designs that shape smarter buildings, efficient systems, and future-ready infrastructure.
            </p>
          </div>
        </div>
        <div className="who-image-side">
          <img src={eligibilityImage} alt="Students collaborating" className="who-img" loading="lazy" />
        </div>
      </section>

      {/* Career Development Section */}
      <section className="career-development-section">
        <div
          className="career-parallax-bg"
          ref={(el) => {
            // Simple parallax logic inline or managed via useEffect. 
            // Using a persistent ref is better for the scroll handler.
            if (el) {
              window.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset;
                const section = el.parentElement;
                if (section) {
                  const sectionTop = section.offsetTop;
                  const sectionHeight = section.offsetHeight;
                  // Check if in view to save perf
                  if (scrolled + window.innerHeight > sectionTop && scrolled < sectionTop + sectionHeight + window.innerHeight) {
                    const speed = 0.3; // Slower speed
                    // Move DOWN relative to container to counteract upward scroll (Standard depth effect)
                    const yPos = (scrolled - sectionTop) * speed;
                    el.style.transform = `translateY(${yPos}px)`;
                  }
                }
              });
            }
          }}
          style={{ backgroundImage: `url(${careerDevImage})` }}
        ></div>
        <div className="career-dev-card">
          <h2 className="career-dev-title">Career Development</h2>
          <div className="title-underline"></div>
          <p className="career-dev-text">
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
          <div className="dash-tagline">
            HIRING
          </div>
          <h2 className="section-heading-blue">Recruitment Process</h2>
          <div className="section-blob-text">
            <p style={{ marginBottom: '1.5rem' }}>
              Our internship hiring process looks beyond grades and focuses on giving every applicant a fair opportunity, specifically designed for students and fresh graduates.
            </p>
            <p>
              From basic screenings to technical evaluations, each step focuses on identifying your potential and preparing you for a meaningful internship experience.
            </p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="video-highlight-section">
        <div className="video-wrapper">
          <video
            ref={videoRef}
            src={internVideo}
            className="internship-video"
            muted
            loop
            playsInline
            onClick={togglePlay} // Clicking video also toggles play
          />

          {/* Custom Controls Overlay */}
          <div className={`video-overlay ${isPlaying ? 'playing' : ''}`}>
            {/* Play Button */}
            {!isPlaying && (
              <button className="custom-play-btn" onClick={togglePlay} aria-label="Play Video">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            )}
          </div>

          {/* Fullscreen Toggle (Always Visible or on Hover) */}
          <button className="fullscreen-toggle-btn" onClick={toggleFullscreen} aria-label="Fullscreen">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
            </svg>
          </button>
        </div>

        {/* Custom Fullscreen Modal Overlay */}
        {isFullscreen && (
          <div className="fullscreen-modal-overlay" onClick={toggleFullscreen}>
            <div className="fullscreen-video-container" onClick={(e) => e.stopPropagation()}>
              <video
                src={internVideo}
                className="fullscreen-video"
                autoPlay
                muted
                loop
                playsInline
                controls={false} // Custom controls if needed, or browser default for fullscreen? User wanted "dark background", implying modal.
              />
              <button className="close-fullscreen-btn" onClick={toggleFullscreen}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Tools & Technologies Section */}
      <section className="tools-section">
        <div className="section-header-center">
          <div className="dash-tagline justify-center">SKILLS</div>
          <h2 className="section-heading-blue">Explore Our Internship Areas</h2>
          <p className="section-desc-center">
            Find your perfect engineering niche (courses, BIM tools & software) with internship paths built for curious minds
          </p>
        </div>

        <div className="tools-grid">
          {tools.map((tool, index) => (
            <div key={index} className="tool-card">
              <div className="tool-icon-circle">
                {tool.icon}
              </div>
              <h4 className="tool-title">{tool.title}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Bento Grid Section */}
      <section className="bento-section">
        <div className="bento-heading-wrapper">
          <div className="dash-tagline justify-center">WHY JOIN US</div>
          <h2 className="section-heading-blue">Program Benefits</h2>
        </div>

        <div className="bento-grid">
          {/* 1. Job Assured (White, Wide) -> Blue Pattern */}
          <div className="bento-card bento-blue bento-pattern span-2-col">
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

          {/* 2. 100 Days (Photo BG, Tall) - Swapped BG here from VR */}
          <div className="bento-card bento-photo span-2-row" style={{ backgroundImage: `url(${careerDevImage})` }}>
            <div className="bento-content" style={{ justifyContent: 'space-between' }}>
              <div className="bento-icon-box">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
              </div>
              <div className="bento-info">
                <h3 className="bento-title">100 Working Days with Certification</h3>
                <p className="bento-desc">An intensive, structured timeline designed to fast-track your industry readiness and expertise.</p>
              </div>
            </div>
          </div>

          {/* 3. UAE Standards (Dark, Pattern) */}
          <div className="bento-card bento-dark bento-pattern">
            <div className="bento-content">
              <div className="bento-icon-box">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
              </div>
              <div className="bento-info">
                <h3 className="bento-title">UAE Experience</h3>
                <p className="bento-desc">Gain hands-on work experience following international UAE construction standards.</p>
              </div>
            </div>
          </div>

          {/* 4. Report (White) */}
          <div className="bento-card bento-white">
            <div className="bento-content">
              <div className="bento-icon-box">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              </div>
              <div className="bento-info">
                <h3 className="bento-title">Project Report</h3>
                <p className="bento-desc">Submit your hands-on experience report as a valid final-year academic project.</p>
              </div>
            </div>
          </div>

          {/* 5. VR Training (Dark - Was Photo) */}
          <div className="bento-card bento-dark bento-pattern">
            <div className="bento-content">
              <div className="bento-icon-box">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2z"></path><path d="M6 9V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2"></path></svg>
              </div>
              <div className="bento-info">
                <h3 className="bento-title">VR Training</h3>
                <p className="bento-desc">Immersive virtual reality sessions to simulate real-world site conditions and safety.</p>
              </div>
            </div>
          </div>

          {/* 6. Mentorship (Blue, Pattern) */}
          <div className="bento-card bento-blue bento-pattern">
            <div className="bento-content">
              <div className="bento-icon-box">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <div className="bento-info">
                <h3 className="bento-title">Global Mentorship</h3>
                <p className="bento-desc">Learn directly from internationally experienced mentors and industry veterans.</p>
              </div>
            </div>
          </div>

          {/* 7. Abroad (Photo BG, Wide) */}
          <div className="bento-card bento-photo span-2-col" style={{ backgroundImage: `url(${eligibilityImage})` }}>
            <div className="bento-content">
              <div className="bento-icon-box">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
              </div>
              <div className="bento-info">
                <h3 className="bento-title">Abroad Opportunities</h3>
                <p className="bento-desc">Top performers receive direct referrals for career opportunities in the Middle East.</p>
              </div>
            </div>
          </div>

          {/* 8. Scholarship (Dark) */}
          <div className="bento-card bento-dark span-2-col bento-pattern">
            <div className="bento-content">
              <div className="bento-icon-box">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
              </div>
              <div className="bento-info">
                <h3 className="bento-title">Scholarship Program</h3>
                <p className="bento-desc">Merit-based scholarships linked to your practicum performance and project outcomes.</p>
              </div>
            </div>
          </div>

          {/* 9. Technology (White) -> Blue Pattern */}
          <div className="bento-card bento-blue bento-pattern span-2-col">
            <div className="bento-content">
              <div className="bento-icon-box">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
              </div>
              <div className="bento-info">
                <h3 className="bento-title">Industry Tech</h3>
                <p className="bento-desc">Gain exposure to specific technologies and tools used in modern engineering projects.</p>
              </div>
            </div>
          </div>

          {/* 10. Technical & Software (Photo BG now) */}
          <div className="bento-card bento-photo span-2-col" style={{ backgroundImage: `url(${careerDevImage})` }}>
            <div className="bento-content">
              <div className="bento-icon-box">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
              </div>
              <div className="bento-info">
                <h3 className="bento-title">Technical & Software</h3>
                <p className="bento-desc">Comprehensive training covering both core technical concepts and software application.</p>
              </div>
            </div>
          </div>

        </div>
      </section>
      {/* Application Form Section */}
      <StickyContact ref={contactRef}>
        <div className="form-container">

          {/* Left: Join Our Team Info */}
          <div className="form-info-side">
            <h2 className="form-heading">Join Our Team</h2>
            <p className="form-subtext">
              Ready to kickstart your career? Apply now for our Internship Program.
            </p>

            <div className="form-contact-details">
              <p>72/4 Broadway,</p>
              <p>Chennai, Tamil Nadu - 600108</p>
              <br />
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

          {/* Right: The Form */}
          <div className="form-input-side">
            <form onSubmit={handleSubmit} className="internship-form">

              {/* Your Name */}
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

              {/* Your Age */}
              <div className="form-group">
                <label>Your Age*</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  required
                  className="form-input-line"
                />
              </div>

              {/* Contact Number */}
              <div className="form-group">
                <label>Your Contact Number*</label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  required
                  className="form-input-line"
                />
              </div>

              {/* Mail ID */}
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

              {/* Residential Address */}
              <div className="form-group">
                <label>Residential Address*</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  rows="2"
                  className="form-input-line"
                ></textarea>
              </div>

              {/* College / University */}
              <div className="form-group">
                <label>Name of College / University*</label>
                <input
                  type="text"
                  name="college"
                  value={formData.college}
                  onChange={handleInputChange}
                  required
                  className="form-input-line"
                />
              </div>

              {/* Department / Major */}
              <div className="form-group">
                <label>Department / Major*</label>
                <input
                  type="text"
                  name="department"
                  value={formData.department}
                  onChange={handleInputChange}
                  required
                  className="form-input-line"
                />
              </div>

              {/* Year of Completion */}
              <div className="form-group">
                <label>Year of completion*</label>
                <input
                  type="text"
                  name="year"
                  value={formData.year}
                  onChange={handleInputChange}
                  required
                  className="form-input-line"
                />
              </div>

              {/* Branch Dropdown */}
              <div className="form-group">
                <label>Branch You Wish To Join*</label>
                <select
                  name="branch"
                  value={formData.branch}
                  onChange={handleInputChange}
                  required
                  className="form-input-line"
                >
                  <option value="" disabled>Select a Branch</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Tirunelveli">Tirunelveli</option>
                  <option value="Trichy">Trichy</option>
                  <option value="Vizag">Vizag</option>
                </select>
              </div>

              {/* Comments */}
              <div className="form-group">
                <label>Any Comments</label>
                <textarea
                  name="comments"
                  value={formData.comments}
                  onChange={handleInputChange}
                  rows="3"
                  className="form-input-line"
                ></textarea>
              </div>

              <button type="submit" className="form-submit-btn">Submit</button>

            </form>
          </div>

        </div>
      </StickyContact>

    </div>
  );
};

export default Internship;
