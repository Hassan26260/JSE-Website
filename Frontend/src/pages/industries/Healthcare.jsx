import React, { useState, useEffect, useRef } from 'react';
import StickyContact from '../../components/StickyContact';
import { Link } from 'react-router-dom';
import "../../styles/Page.css";
import "./Healthcare.css";
import heroImage from "../../assets/industry/healthcare/pexels-cristian-rojas-8460371.webp";
// Placeholder image for the content section
import contentImage from "../../assets/design-eng/pexels-karola-g-4491459.webp";
// Recruitment Image (Reused from Internship)
import recruitmentImage from "../../assets/other/pexels-olgalioncat-7245368.jpg";

// Reusing assets from home/design pages as placeholders

// Reusing assets from home/design pages as placeholders
import h1 from '../../assets/images-home/skyscraper.webp';
import h2 from '../../assets/images-home/bim-modelling.webp';
import h3 from '../../assets/images-home/mep-design.webp';
import h4 from '../../assets/images-home/architectural-bim.webp';
import h5 from '../../assets/images-home/hvac-design.webp';
import h6 from '../../assets/images-home/hero-group-image.jpg';





const FACILITIES_DATA = [
    {
        title: "Hospitals & Clinics",
        desc: "Comprehensive BIM solutions for new construction and renovation projects.",
        img: h1
    },
    {
        title: "Research Laboratories",
        desc: "Precision-engineered labs fostering complex mechanical and electrical systems.",
        img: h2
    },
    {
        title: "Pharmaceutical Facilities",
        desc: "Streamlined and secure facilities for pharmaceutical excellence.",
        img: h3
    },
    {
        title: "Senior Living Facility",
        desc: "Human-centered designs that prioritize comfort and safety for senior care.",
        img: h4
    },
    {
        title: "Outpatient Centre",
        desc: "Efficiently 2D & 3D designed spaces for seamless outpatient services.",
        img: h5
    },
    {
        title: "Military Hospitals",
        desc: "Robust, secure healthcare facilities for military personnel.",
        img: h1 // Reused
    },
    {
        title: "Medical Colleges",
        desc: "Academic institutions with cutting-edge facilities for future medical professionals.",
        img: h6
    },
    {
        title: "Rehabilitation Centre",
        desc: "Therapeutic spaces promoting healing and recovery.",
        img: h4 // Reused
    }
];

const COMPREHENSIVE_SERVICES = [
    {
        title: "Architectural BIM Services",
        desc: "JSE creates patient-centric designs that optimize space and workflow, ensuring comfort and safety.",
        type: "blue", // card style variant
        span: "col-2", // span 2 columns
        link: "/services/design/architectural-bim"
    },
    {
        title: "HVAC System Design",
        desc: "Specialized air quality control and ventilation systems to prevent infection spread and maintain sterile environments.",
        type: "photo",
        img: h5,
        link: "/services/design/hvac-design"
    },
    {
        title: "Electrical & Power Systems",
        desc: "Reliable power distribution modeling ensuring uninterrupted supply for critical life-support equipment.",
        type: "dark",
        span: "",
        link: "/services/design/electrical-system-design"
    },
    {
        title: "Plumbing & Medical Gas",
        desc: "Precision routing of medical gas lines and sanitary systems compliant with healthcare hygiene standards.",
        type: "white",
        span: "",
        link: "/services/design/plumbing-public-health"
    },
    {
        title: "Fire Protection Systems",
        desc: "Advanced detection and suppression system designs to ensure rapid response and patient safety.",
        type: "photo",
        img: h3,
        link: "/services/design/firefighting-design"
    },
    {
        title: "Structural Engineering",
        desc: "Robust structural analysis designed to support heavy medical equipment and seismic requirements.",
        type: "dark",
        span: "col-2",
        link: "/services/design/steel-structure-detailing"
    },
    {
        title: "Extra Low Voltage & Security Systems",
        desc: "Integrated nurse call, access control, and CCTV systems for secure and responsive facility management.",
        type: "white",
        span: "col-2",
        link: "/services/design/elv"
    },
    {
        title: "Sustainability & Energy Analysis",
        desc: "Energy-efficient building models that reduce operational costs while maintaining optimal care environments.",
        type: "blue",
        span: "col-2",
        link: "/services/design"
    }
];

const BUSINESS_TYPES = [
    {
        title: "MEP Engineering",
        desc: "Comprehensive MEP solutions including HVAC, Electrical, and Firefighting.",
        img: h3
    },
    {
        title: "Architectural BIM",
        desc: "Revolutionizing architecture with detailed BIM models.",
        img: h4
    },
    {
        title: "Structural Engineering",
        desc: "Advanced structural engineering and analysis.",
        img: h2
    },
    {
        title: "Steel Structure Detailing",
        desc: "Accurate Tekla detailing and steel structures.",
        img: h5
    },
    {
        title: "Infrastructural Services",
        desc: "Robust infrastructure solutions for modern communities.",
        img: h1
    },
    {
        title: "Virtual Team for Hire",
        desc: "Hire own remote offshore architect team for modular construction needs.",
        img: h6
    },
    {
        title: "Secondment Team",
        desc: "Get on-demand access to our pool of experienced professionals.",
        img: h4 // Reusing h4 or a generic image
    }
];

// HEALTHCARE_TECH_DATA removed

const Healthcare = () => {
    // Carousel Logic
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % BUSINESS_TYPES.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + BUSINESS_TYPES.length) % BUSINESS_TYPES.length);
    };

    // Form Logic
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted", formData);
        // Add submission logic here
    };

    const stickyContactRef = useRef(null);

    const scrollToForm = () => {
        stickyContactRef.current?.open();
    };


    return (
        <div className="healthcare-page">
            {/* Hero Section - Adapted from DesignEngineeringProjects */}
            <section className="healthcare-hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="healthcare-hero-overlay"></div>
                <div className="healthcare-hero-content">
                    {/* Breadcrumbs */}
                    <div className="healthcare-breadcrumbs">
                        Home &gt; Industries &gt; <span>Healthcare</span>
                    </div>

                    <h1 className="healthcare-hero-title">Healthcare</h1>
                    <p className="healthcare-hero-desc">
                        BIM Solutions for Healthcare Facilities
                    </p>
                    <button onClick={scrollToForm} className="healthcare-hero-cta" style={{ cursor: 'pointer', border: 'none', font: 'inherit' }}>Hire Us</button>
                </div>
            </section>

            {/* Why BIM for Healthcare? - Adapted from SecondmentTeam 'Our Service' */}
            <section className="healthcare-concept-section">
                <div className="healthcare-concept-container">
                    <div className="healthcare-concept-text">
                        <span className="dash-tagline">INDUSTRY FOCUS</span>
                        <h2 className="healthcare-concept-title">Why BIM for Healthcare?</h2>
                        <div className="healthcare-concept-desc">
                            <p>
                                In the rapidly evolving landscape of healthcare, Building Information Modeling (BIM) is pivotal for delivering projects that meet the highest standards of safety, efficiency, and functionality.
                            </p>
                            <p>
                                BIM offers a comprehensive digital representation of every aspect of a healthcare facility, allowing for seamless collaboration, precise planning, and a reduced margin of error. It’s not just about building; it’s about building smart, ensuring that your healthcare facility is future-proofed and compliant with all industry regulations.
                            </p>
                        </div>
                    </div>
                    <div className="healthcare-concept-image-wrapper">
                        <div className="healthcare-image-back"></div>
                        <img
                            src={contentImage}
                            alt="BIM for Healthcare"
                            className="healthcare-concept-img"
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>

            {/* Healthcare Facilities Section (Existing) */}
            <section className="healthcare-facilities-section">
                <div className="healthcare-facilities-container">
                    {/* Left Sticky Content */}
                    <div className="healthcare-sticky-left">
                        <div className="healthcare-header-content">
                            <p className="dash-tagline">AREAS OF EXPERTISE</p>
                            <h2 className="healthcare-section-title">Healthcare Facilities We Serve</h2>
                            <p className="healthcare-tagline">
                                Tailored BIM solutions for diverse medical environments, ensuring precision where it matters most.
                            </p>
                            <div className="healthcare-decorative-line"></div>
                        </div>
                    </div>

                    {/* Right Scrollable Cards */}
                    <div className="healthcare-cards-list">
                        {FACILITIES_DATA.map((item, index) => (
                            <div key={index} className="healthcare-facility-card">
                                <div className="healthcare-card-image-wrapper">
                                    <img src={item.img} alt={item.title} className="healthcare-card-img" loading="lazy" />
                                </div>
                                <div className="healthcare-card-content">
                                    <h3 className="healthcare-card-title">{item.title}</h3>
                                    <p className="healthcare-card-desc">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Hiring Section (New - Adapted from Internship) */}
            <section className="healthcare-hiring-section">
                <div className="healthcare-hiring-container">
                    <div className="healthcare-hiring-image-side">
                        <img src={recruitmentImage} alt="Join Our Healthcare Team" className="healthcare-hiring-img" loading="lazy" />
                    </div>
                    <div className="healthcare-hiring-content-side">
                        <div className="dash-tagline">CAREERS</div>
                        <h2 className="section-heading-blue">Join Our Healthcare Team</h2>
                        <div className="section-blob-text">
                            <p style={{ marginBottom: '1.5rem' }}>
                                We are looking for passionate engineers and BIM specialists dedicated to transforming healthcare infrastructure.
                            </p>
                            <p>
                                Join a team that values precision, innovation, and the impact of engineering on patient care. Work on world-class hospital projects and advance your career.
                            </p>
                            <br />
                            <a href="/career" className="healthcare-hero-cta" style={{ display: 'inline-block', fontSize: '0.9rem', padding: '0.8rem 2rem' }}>View Openings</a>
                        </div>
                    </div>
                </div>
            </section>



            {/* Business Types Carousel Section (New) */}
            {/* Business Types Split Carousel (Redesign) */}
            <section className="healthcare-business-section">
                <div className="healthcare-business-container">

                    <div className="business-split-layout">
                        {/* Left Side: Content */}
                        <div className="business-left-side">
                            <div className="dash-tagline">TAILORED BUSINESS TYPES</div>
                            <h2 className="business-heading">{BUSINESS_TYPES[currentSlide].title}</h2>
                            <p className="business-desc">{BUSINESS_TYPES[currentSlide].desc}</p>

                            <div className="business-controls-wrapper">
                                <div className="business-progress-line"></div>
                                <div className="business-controls">
                                    <span className="slide-counter">
                                        {currentSlide + 1} / {BUSINESS_TYPES.length}
                                    </span>
                                    <div className="nav-arrows">
                                        <button className="nav-arrow-btn" onClick={prevSlide}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                                        </button>
                                        <button className="nav-arrow-btn" onClick={nextSlide}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Image */}
                        <div className="business-right-side">
                            <img
                                key={currentSlide}
                                src={BUSINESS_TYPES[currentSlide].img}
                                alt={BUSINESS_TYPES[currentSlide].title}
                                className="business-feature-img"
                                loading="lazy"
                            />
                        </div>
                    </div>

                </div>
            </section>

            {/* Why Choose JSE Section (New) */}
            <section className="healthcare-why-section">
                <div className="healthcare-header-center">
                    <span className="dash-tagline" style={{ justifyContent: 'center' }}>WHY CHOOSE JSE?</span>
                    <h2 className="business-heading" style={{ color: '#144AE0', fontSize: '3rem', textAlign: 'center' }}>Why Choose JSE for BIM in Healthcare?</h2>
                </div>

                <div className="healthcare-why-grid">
                    {/* specialized expertise */}
                    <div className="healthcare-why-card">
                        <div className="healthcare-icon-circle">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                        </div>
                        <h4 className="healthcare-card-title">Specialized Expertise</h4>
                        <p className="healthcare-card-desc">We understand the complexities of healthcare facilities and design systems that meet the strictest standards of safety and efficiency.</p>
                    </div>

                    {/* advanced technology */}
                    <div className="healthcare-why-card">
                        <div className="healthcare-icon-circle">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                        </div>
                        <h4 className="healthcare-card-title">Advanced Technology</h4>
                        <p className="healthcare-card-desc">We utilize the latest BIM software tools to create detailed, accurate models that streamline the design and construction process.</p>
                    </div>

                    {/* collaborative partnership */}
                    <div className="healthcare-why-card">
                        <div className="healthcare-icon-circle">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                        </div>
                        <h4 className="healthcare-card-title">Collaborative Partnership</h4>
                        <p className="healthcare-card-desc">We work closely with your team to ensure every aspect of your project aligns with your vision and operational needs.</p>
                    </div>

                    {/* proven success */}
                    <div className="healthcare-why-card">
                        <div className="healthcare-icon-circle">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>
                        </div>
                        <h4 className="healthcare-card-title">Proven Success</h4>
                        <p className="healthcare-card-desc">With three decades of experience and a portfolio of over 6,000+ successful projects, JSE is a trusted partner in delivering world-class healthcare facilities.</p>
                    </div>
                </div>
            </section>

            {/* Innovative Software Tools Section Removed */}

            {/* Form Section */}
            {/* Form Section */}
            <StickyContact ref={stickyContactRef}>
                <div className="healthcare-form-container">
                    {/* Left Side: Title & Info */}
                    <div className="healthcare-form-info-side">
                        <h2 className="healthcare-form-heading">Start Your Project</h2>
                        <p className="healthcare-form-subtext">
                            Ready to optimize your workflow with JSE's Healthcare BIM services? Fill out the details and we'll get in touch with you shortly.
                        </p>

                        <div className="healthcare-form-contact-details">
                            <p className="healthcare-form-email">info@jseengineering.com</p>
                        </div>

                        <div className="healthcare-form-socials">
                            <div className="healthcare-social-circle">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </div>
                            <div className="healthcare-social-circle">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                </svg>
                            </div>
                            <div className="healthcare-social-circle">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="healthcare-form-input-side">
                        <form onSubmit={handleSubmit} className="healthcare-form">
                            <div className="healthcare-form-group">
                                <label>Your Name*</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className="healthcare-form-input-line"
                                />
                            </div>
                            <div className="healthcare-form-group">
                                <label>Your Mail ID*</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="healthcare-form-input-line"
                                />
                            </div>
                            <div className="healthcare-form-group">
                                <label>Message*</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows="4"
                                    required
                                    className="healthcare-form-input-line"
                                ></textarea>
                            </div>
                            <button type="submit" className="healthcare-form-submit-btn">Submit</button>
                        </form>
                    </div>
                </div>
            </StickyContact>

        </div>
    );
};

export default Healthcare;
