import React, { useState, useRef, useEffect } from 'react';
import '../styles/Career.css';
import heroImage from '../assets/careers-page/pexels-yankrukov-7691728.webp';

// Life at JSE Images
import lifeImg1 from '../assets/images-home/skyscraper.webp';
import lifeImg2 from '../assets/images-home/architectural-bim.webp';
import lifeImg3 from '../assets/images-home/bim-modelling.webp';
import lifeImg4 from '../assets/images-home/hero-group-image.jpg';

// Alumni Portfolio Images
// Alumni Portfolio Images
// import p1 from "../assets/portfolio.img/pexels-jgathisan0612-1580112.webp";
// import p2 from "../assets/portfolio.img/pexels-jimbear-998499.webp";
// import p3 from "../assets/portfolio.img/pexels-mantasink-1106476.webp";
// import p4 from "../assets/portfolio.img/pexels-pixabay-210598.webp";
// import p5 from "../assets/portfolio.img/pexels-pixabay-273209.webp";
// import p6 from "../assets/portfolio.img/pexels-pixasquare-1123982.webp";

// Real Projects Import
import { ALL_REAL_PROJECTS } from '../data/realPortfolio';

const FEATURED_PROJECTS = ALL_REAL_PROJECTS.slice(0, 6).map(p => ({
  title: p.title,
  img: p.image
}));

const JOBS = [
  {
    id: 1,
    title: "UI/UX & Product Designer",
    type: "Full Time",
    location: "London, UK",
    salary: "$28k-35K",
    desc: "Product design encompasses both UI/UX design but it also involves a broader understanding of the entire product.",
    details: {
      roleOverview: "We are looking for a creative UI/UX & Product Designer to join our team. You will be responsible for defining the user experience and visual design of our digital products.",
      responsibilities: [
        "Translate concepts into user flows, wireframes, mockups and prototypes that lead to intuitive user experiences.",
        "Facilitate the client’s product vision by researching, conceiving, sketching, prototyping and user-testing experiences for digital products.",
        "Design and deliver wireframes, user stories, user journeys, and mockups optimized for a wide range of devices and interfaces."
      ],
      qualifications: [
        "Three or more years of UX design experience. Preference will be given to candidates who have experience designing complex solutions for complete digital environments.",
        "Expertise in standard UX software such as Sketch, OmniGraffle, Axure, InVision, UXPin, Balsamiq, Framer, and the like is a must."
      ],
      experience: "3+ Years",
      freshers: false
    }
  },
  {
    id: 2,
    title: "Senior BIM Engineer",
    type: "Full Time",
    location: "Remote / Hybrid",
    salary: "$45k-60K",
    desc: "Lead complex BIM projects, ensuring accuracy and compliance with global standards using Revit and Navisworks.",
    details: {
      roleOverview: "As a Senior BIM Engineer, you will oversee the BIM coordination process, managing models and ensuring seamless collaboration across disciplines.",
      responsibilities: [
        "Manage and coordinate BIM models across architectural, structural, and MEP disciplines.",
        "Conduct clash detection and resolution using Navisworks.",
        "Ensure compliance with ISO 19650 and other relevant BIM standards."
      ],
      qualifications: [
        "Bachelor's degree in Architecture or Civil Engineering.",
        "Proficiency in Revit, Navisworks, and AutoCAD."
      ],
      experience: "5+ Years",
      freshers: false
    }
  },
  {
    id: 3,
    title: "Structural Design Engineer",
    type: "Full Time",
    location: "New York, USA",
    salary: "$70k-85K",
    desc: "Design and analyze structural components for high-rise buildings and industrial infrastructure projects.",
    details: {
      roleOverview: "Join our structural engineering team to design safe, sustainable, and innovative structures for large-scale commercial projects.",
      responsibilities: [
        "Perform structural analysis and design calculations.",
        "Collaborate with architects and MEP engineers to integrate structural systems.",
        "Prepare detailed structural drawings and specifications."
      ],
      qualifications: [
        "Master's degree in Structural Engineering.",
        "License as a Professional Engineer (PE) is preferred."
      ],
      experience: "4+ Years",
      freshers: true
    }
  }
];

const Career = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return;

      const rect = imageRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const startOffset = windowHeight;
      const endOffset = windowHeight * 0.4;

      const distance = startOffset - rect.top;
      const totalDistance = startOffset - endOffset;

      let progress = distance / totalDistance;
      progress = Math.max(0, Math.min(1, progress));

      const newWidth = 70 + (30 * progress);
      const newRadius = 24 * (1 - progress);

      imageRef.current.style.width = `${newWidth}%`;
      imageRef.current.style.borderRadius = `${newRadius}px`;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div className="career-page">
      {/* Hero Section */}
      <section className="career-hero">
        <div className="career-hero-content">
          <div className="career-breadcrumbs">
            Home &gt; <span>Careers</span>
          </div>
          <h1 className="career-title">Careers</h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="career-intro">
        <div className="career-intro-container">
          {/* Left Column: Big Headline */}
          <div className="intro-left">
            <h2 className="intro-headline">
              Reaching new heights through creative engineering !
            </h2>
          </div>

          {/* Right Column: Content */}
          <div className="intro-right">
            <div className="intro-content">
              <p className="intro-text">
                Be part of a growing engineering community where meaningful work, global exposure, and continuous development shape your career. Stay connected with new opportunities, on-site assignments, and a future built on learning, collaboration, and career growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expanding Image Section */}
      <section className="expanding-image-section">
        <div
          ref={imageRef}
          className="expanding-image-wrapper"
        >
          <img src={heroImage} alt="JSE Team" className="expanding-img" />
        </div>
      </section>

      {/* Jobs Section */}
      <section className="career-jobs-section">
        <div className="jobs-container">
          <div className="jobs-header">
            <p className="career-dash-heading">Our Jobs</p>
            <h2 className="community-title">Join Our JSE Talent Community</h2>
          </div>

          <div className="jobs-grid">
            {JOBS.map((job) => (
              <div key={job.id} className="job-card">
                <div className="job-card-header">
                  <h3 className="job-title">{job.title}</h3>
                  <button
                    className="job-cta-btn"
                    onClick={() => setSelectedJob(job)}
                    aria-label="View Job Details"
                  >
                    {/* Inline SVG for ArrowUpRight */}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17l9.2-9.2M17 17V7H7" />
                    </svg>
                  </button>
                </div>
                <p className="job-type">{job.type}</p>
                <p className="job-desc">{job.desc}</p>
                <div className="job-footer">
                  <span className="job-location">
                    {job.location}
                  </span>
                  <span className="job-salary">{job.salary}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Life at JSE Section (4-Row Alternating) */}
      <section className="life-at-jse-section">
        <div className="life-container">
          <div className="life-header">
            <p className="career-dash-heading">Company Culture</p>
            <h2 className="community-title">Life at JSE Engineering</h2>
          </div>

          {/* Row 1: Text Left + Image Right */}
          <div className="life-row">
            <div className="life-text-card">
              <h3 className="life-title">Innovation & Technology</h3>
              <p className="life-desc">
                We embrace cutting-edge technology and innovative engineering solutions. From BIM modeling to sustainable design, our team leverages the latest tools to solve complex challenges and build the future of infrastructure.
              </p>
            </div>
            <div className="life-image-wrapper">
              <img src={lifeImg1} alt="Innovation" className="life-img" />
            </div>
          </div>

          {/* Row 2: Image Left + Text Right */}
          <div className="life-row reverse">
            <div className="life-text-card">
              <h3 className="life-title">Growth & Mentorship</h3>
              <p className="life-desc">
                Your career growth is our priority. We foster a culture of mentorship where experienced leaders guide your professional development. Continuous learning opportunities ensure you stay ahead in the dynamic engineering landscape.
              </p>
            </div>
            <div className="life-image-wrapper">
              <img src={lifeImg2} alt="Mentorship" className="life-img" />
            </div>
          </div>

          {/* Row 3: Text Left + Image Right */}
          <div className="life-row">
            <div className="life-text-card">
              <h3 className="life-title">Global Impact</h3>
              <p className="life-desc">
                Work on projects that matter. Our engineering solutions span across borders, impacting communities and shaping skylines. Join a team that thinks globally and acts locally to create sustainable value.
              </p>
            </div>
            <div className="life-image-wrapper">
              <img src={lifeImg3} alt="Global Impact" className="life-img" />
            </div>
          </div>

          {/* Row 4: Image Left + Text Right */}
          <div className="life-row reverse">
            <div className="life-text-card">
              <h3 className="life-title">Community & Culture</h3>
              <p className="life-desc">
                We believe in work-life balance and a supportive community. From team-building events to collaborative workspaces, we create an environment where you can thrive both personally and professionally.
              </p>
            </div>
            <div className="life-image-wrapper">
              <img src={lifeImg4} alt="Company Culture" className="life-img" />
            </div>
          </div>

        </div>
      </section>


      {/* What We JSE-ians Do Section (3-Column Cards) */}
      <section className="jse-values-section">
        <div className="jse-values-container">
          <div className="jse-values-header">
            <p className="career-dash-heading">Our Values</p>
            <h2 className="community-title">
              What We JSE-ians Do
            </h2>
          </div>

          <div className="jse-values-grid">

            {/* Card 1: Target - Possibilities */}
            <div className="jse-value-card">
              <div className="jse-value-icon">
                {/* Target Icon */}
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="6"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                </svg>
              </div>
              <h3 className="jse-value-title">Effective Target</h3>
              <p className="jse-value-desc">
                We discover better challenging possibilities every day.
              </p>
            </div>

            {/* Card 2: Thumbs Up - Teamwork */}
            <div className="jse-value-card">
              <div className="jse-value-icon">
                {/* Thumbs Up Icon */}
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                </svg>
              </div>
              <h3 className="jse-value-title">Simply works</h3>
              <p className="jse-value-desc">
                We spark creativity through teamwork and trust.
              </p>
            </div>

            {/* Card 3: Power - Impact */}
            <div className="jse-value-card">
              <div className="jse-value-icon">
                {/* Power Icon */}
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path>
                  <line x1="12" y1="2" x2="12" y2="12"></line>
                </svg>
              </div>
              <h3 className="jse-value-title">Empowering</h3>
              <p className="jse-value-desc">
                We turn ideas into impactful engineering solutions.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* Featured Projects Section (Replaces Alumni) */}
      <section className="design-featured-section">
        <div className="design-featured-container">
          <div className="design-featured-header">
            <span className="design-featured-tagline">Client Success</span>
            <h2 className="design-featured-heading">Our Featured Projects</h2>
          </div>
        </div>

        {/* Marquee Carousel */}
        <div className="design-marquee-wrapper">
          <div className="design-marquee-track">
            {/* Set 1 */}
            {FEATURED_PROJECTS.map((project, index) => (
              <div key={`featured-${index}`} className="design-featured-card">
                <img src={project.img} alt={project.title} className="design-featured-img" loading="lazy" decoding="async" />
                <div className="design-featured-overlay">
                  <div className="design-featured-content">
                    <h3 className="design-featured-title">{project.title}</h3>
                    <a href="/portfolio" className="design-featured-cta">
                      Know More <span className="arrow">→</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
            {/* Set 2 (Duplicate for loop) */}
            {FEATURED_PROJECTS.map((project, index) => (
              <div key={`featured-dup-${index}`} className="design-featured-card">
                <img src={project.img} alt={project.title} className="design-featured-img" loading="lazy" decoding="async" />
                <div className="design-featured-overlay">
                  <div className="design-featured-content">
                    <h3 className="design-featured-title">{project.title}</h3>
                    <a href="/portfolio" className="design-featured-cta">
                      Know More <span className="arrow">→</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Happy JSEians Section (Split Layout) */}
      < section className="happy-jseians-section" >
        <div className="happy-container">
          {/* Left Sticky Content */}
          <div className="happy-sticky-left">
            <div className="happy-header-content">
              <p className="career-dash-heading">Employee Stories</p>
              <h2 className="community-title">Happy JSE-ians</h2>
              <p className="happy-tagline">
                Stories of growth, trust, and transformation. See how JSE empowers careers.
              </p>
              <div className="happy-decorative-line"></div>
            </div>
          </div>

          {/* Right Scrollable Cards */}
          <div className="happy-reviews-list">

            {/* Review 1 */}
            <div className="happy-review-card">
              <div className="happy-quote-icon">“</div>
              <p className="happy-review-text">
                I was stuck in a BPO job even after completing my engineering degree. JSE gave me my first real break into core engineering. With patient training and real project exposure, I finally moved into HVAC department and today I’m proudly working as a Design Engineer. Joining JSE changed my entire career path.
              </p>
              <div className="happy-author-row">
                <div className="initials-circle">R</div>
                <div className="happy-author-info">
                  <h4>Ragavan</h4>
                  <p>Design Engineer</p>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="happy-review-card">
              <div className="happy-quote-icon">“</div>
              <p className="happy-review-text">
                As a diploma student passed out in 2018, I thought opportunities would be limited. But JSE proved me wrong. They trusted me with real work, taught me the basics, and eventually sent me to my first on-site project in Dubai just after 9 months. Now I handle site coordination proudly and independently.
              </p>
              <div className="happy-author-row">
                <div className="initials-circle">A</div>
                <div className="happy-author-info">
                  <h4>Anantharaj</h4>
                  <p>Site Coordinator</p>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="happy-review-card">
              <div className="happy-quote-icon">“</div>
              <p className="happy-review-text">
                Like many other engineers and my relatives, I also wished for an international opportunity. But due to personal financial and environment issues, I was unable to achieve my goal. JSE helped me build the skills and experience to get there. Today, I’m working on overseas ESD projects and preparing for my first on-site trip abroad. It feels amazing.
              </p>
              <div className="happy-author-row">
                <div className="initials-circle">IB</div>
                <div className="happy-author-info">
                  <h4>Indra Balaji</h4>
                  <p>ESD Engineer</p>
                </div>
              </div>
            </div>

            {/* Review 4 */}
            <div className="happy-review-card">
              <div className="happy-quote-icon">“</div>
              <p className="happy-review-text">
                When I joined as a fresher after completing my PH, AutoCAD course, everything felt new & overwhelming. But at JSE, my seniors, TL and manager supported and guided me in every steps. They gave me detailed training while working on projects. Now, I can confidently design, manage deadlines with my team easily. To say... my confidence came JSE.
              </p>
              <div className="happy-author-row">
                <div className="initials-circle">RB</div>
                <div className="happy-author-info">
                  <h4>R. Balaji</h4>
                  <p>Design Engineer</p>
                </div>
              </div>
            </div>

            {/* Review 5 */}
            <div className="happy-review-card">
              <div className="happy-quote-icon">“</div>
              <p className="happy-review-text">
                I come from small village at Nellai, with zero clarity and lots of fear to talk hurdle, but through Nellai Bootcamp, I joined JSE academy, and finally got placement at the company. Now gaining experience, I work as an ATL (Assistance Team Leader) for HVAC department. Happy to work from hometown!
              </p>
              <div className="happy-author-row">
                <div className="initials-circle">SK</div>
                <div className="happy-author-info">
                  <h4>Selva Kumar</h4>
                  <p>Assistant Team Leader (HVAC)</p>
                </div>
              </div>
            </div>

            {/* Review 6 */}
            <div className="happy-review-card">
              <div className="happy-quote-icon">“</div>
              <p className="happy-review-text">
                Myself Anand Raj, to say, I worked in production field for 1 year and left in 2019. After a long career break, I was nervous to start again. JSEMd gave me the space, support, confidence to start fresh. With slow-paced training, I joined company in Jan 2024. Today with improved skills, Iam proud to handle or coordinate BIM secondment tasks. Thank you.
              </p>
              <div className="happy-author-row">
                <div className="initials-circle">S</div>
                <div className="happy-author-info">
                  <h4>Sivaganesh</h4>
                  <p>BIM Coordinator</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section >

      {/* Job Modal */}
      {
        selectedJob && (
          <div className="job-modal-overlay" onClick={() => setSelectedJob(null)}>
            <div className="job-modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close-btn" onClick={() => setSelectedJob(null)}>
                {/* Inline SVG for X */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              <h2 className="modal-job-title">{selectedJob.title}</h2>
              <div className="modal-meta">
                <span className="modal-type">{selectedJob.type}</span>
                <span className="modal-location">{selectedJob.location}</span>
              </div>

              <div className="modal-scroll-area">
                <div className="modal-section">
                  <h4>Role Overview:</h4>
                  <p>{selectedJob.details.roleOverview}</p>
                </div>

                <div className="modal-section">
                  <h4>Key Responsibilities:</h4>
                  <ul>
                    {selectedJob.details.responsibilities.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="modal-section">
                  <h4>Qualifications & Skills:</h4>
                  <ul>
                    {selectedJob.details.qualifications.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="modal-section">
                  <h4>Experience Required:</h4>
                  <p>{selectedJob.details.experience}</p>
                </div>

                <div className="modal-section">
                  <h4>Freshers can also apply:</h4>
                  <p>{selectedJob.details.freshers ? "Yes" : "No"}</p>
                </div>
              </div>

              <div className="modal-footer">
                <button className="apply-btn">Apply Now</button>
              </div>
            </div>
          </div>
        )
      }
    </div >
  );
};
export default Career;
