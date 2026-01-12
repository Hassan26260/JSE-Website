import React, { useState } from 'react';
import '../styles/Career.css';
import heroImage from '../assets/careers-page/pexels-yankrukov-7691728.webp';

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

  return (
    <div className="career-page">
      {/* Hero Section */}
      <section className="career-hero" style={{ marginTop: '100px' }}>
        <img
          src={heroImage}
          alt="JSE Careers"
          className="career-hero-img"
          loading="eager"
          fetchpriority="high"
          width="1920"
          height="1080"
        />
        <div className="career-hero-overlay"></div>
        <div className="career-hero-content">
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

      {/* Job Modal */}
      {selectedJob && (
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
      )}
    </div>
  );
};
export default Career;
