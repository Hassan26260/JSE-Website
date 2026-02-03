import React, { useEffect, useState, useRef } from 'react';
import api from '../../services/api';
import '../../styles/Internship.css';
import internImage from '../../assets/intern-civil/pexels-linkedin-1251861.webp';
import highlightsImage from '../../assets/intern-civil/pexels-olly-3769021.webp';

// Feature Images
import img1 from '../../assets/images-home/skyscraper.webp';
import img2 from '../../assets/images-home/architectural-bim.webp';
import img3 from '../../assets/images-home/bim-modelling.webp';
import img4 from '../../assets/images-home/mep-design.webp';
import img5 from '../../assets/images-home/hvac-design.webp';
import img6 from '../../assets/images-home/plumbing.webp';

// Simple Counting Component
const AnimatedNumber = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    let observer;
    const currentRef = ref.current;

    const startAnimation = () => {
      let start = 0;
      const endNum = parseInt(end, 10);
      if (start === endNum) return;

      const stepTime = Math.abs(Math.floor(duration / endNum));

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === endNum) clearInterval(timer);
      }, stepTime);

      // Cleanup interval on unmount or re-render effectively
      return () => clearInterval(timer);
    };

    if (currentRef) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            startAnimation();
            observer.disconnect(); // Run once
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(currentRef);
    }

    return () => {
      if (observer && currentRef) observer.unobserve(currentRef);
    };
  }, [end, duration]);

  return <span ref={ref}>{count}</span>;
};

const ElectronicsCommunicationEngineering = () => {
  // Form State
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
    resume: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, resume: e.target.files[0] }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const data = new FormData();
      data.append('name', formData.name);
      data.append('email', formData.email);
      data.append('mobile', formData.mobile);
      data.append('message', formData.message);
      data.append('internshipTitle', 'Electronics & Communication Engineering');

      if (formData.resume) {
        data.append('resume', formData.resume);
      } else {
        setError('Please upload your resume.');
        setLoading(false);
        return;
      }

      const response = await api.post('/intern-apply', data);

      const result = response.data;

      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        mobile: '',
        message: '',
        resume: null
      });
      alert("Application Submitted Successfully!");

    } catch (err) {
      setError(err.message);
      console.error(err);
      alert(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
            internship &gt; <span>Electronics & Communication Engineering (ECE)</span>
          </div>
          <h1 className="internship-hero-title">Electronics & Communication Engineering (ECE)</h1>
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
              <img src={internImage} alt="Civil Engineering Internship" className="internship-img" loading="lazy" />
            </div>
          </div>

        </div>
      </section>

      {/* Redesigned Program Highlights Section */}
      <section className="internship-highlights-section">
        <div className="highlights-container">

          {/* Left: Image Side */}
          <div className="highlights-image-side">
            <div className="highlights-img-wrapper">
              <img src={highlightsImage} alt="Civil Engineering Student" className="highlights-img" loading="lazy" />
            </div>
          </div>

          {/* Right: Content Side */}
          <div className="highlights-content-side">
            {/* <div className="highlights-badge">PROGRAM HIGHLIGHTS</div> */}
            <h2 className="highlights-title">
              Internship Program & Duration
            </h2>
            <p className="highlights-desc">
              Look at our JSE's short work experience program and duration details before enrolling as a Structural and Environmental Engineer.
            </p>

            {/* Program Details Section - 4 Separate Cards */}
            <div className="program-details-grid">

              {/* Card 1: Duration */}
              <div className="program-card">
                <span className="program-detail-label">Internship Duration</span>
                <div className="program-detail-content">
                  <AnimatedNumber end={100} />-day program
                </div>
              </div>

              {/* Card 2: Program */}
              <div className="program-card">
                <span className="program-detail-label">Program</span>
                <div className="program-detail-content">
                  Hands-on MEP Projects in AutoCAD & Revit
                </div>
              </div>

              {/* Card 3: Placement */}
              <div className="program-card">
                <span className="program-detail-label">Placement Guarantee</span>
                <div className="program-detail-content">
                  <AnimatedNumber end={100} />% placement.
                </div>
              </div>

              {/* Card 4: Batch */}
              <div className="program-card">
                <span className="program-detail-label">Batch Schedule</span>
                <div className="program-detail-content">
                  Enrollment OPEN
                </div>
              </div>

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
            <h2 className="section-title-m" style={{ textAlign: 'left', marginLeft: '0', fontFamily: 'system-ui, Segoe UI, Roboto, sans-serif', fontWeight: 800, fontSize: '2.5rem' }}>
              What You Get From The Internship
            </h2>
            <div className="internship-desc" style={{ marginBottom: '2.5rem' }}>
              <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.6' }}>
                Grow your skills, gain real experience, and learn how JSE Engineering Internship works outside the classroom. Our comprehensive program is designed to bridge the gap between academic theory and industry reality.
              </p>
            </div>
            <button onClick={scrollToForm} className="apply-btn" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
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

      {/* Application Form Section */}
      <section id="contact-form" className="internship-form-section">
        <div className="form-container">

          {/* Left: Join Our Team Info */}
          <div className="form-info-side">
            <h2 className="form-heading">Join Our Team</h2>
            <p className="form-subtext">
              Ready to kickstart your career? Apply now for our Civil Engineering Internship Program.
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

              <div className="form-group">
                <label>Full Name*</label>
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
                <label>E-mail ID*</label>
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
                <label>Mobile No.*</label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  required
                  className="form-input-line"
                />
              </div>

              <div className="form-group">
                <label>Resume Upload (PDF/Doc)*</label>
                <div className="file-upload-wrapper">
                  <input
                    type="file"
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="form-input-file"
                  />
                  <span className="file-name-display">
                    {formData.resume ? formData.resume.name : "Choose file"}
                  </span>
                </div>
              </div>

              <div className="form-group">
                <label>Message*</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="3"
                  className="form-input-line"
                ></textarea>
              </div>

              <button type="submit" className="form-submit-btn">Submit</button>

            </form>
          </div>

        </div>
      </section>

    </div>
  );
};

export default ElectronicsCommunicationEngineering;
