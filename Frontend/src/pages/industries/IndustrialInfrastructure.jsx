import React, { useState, useEffect } from 'react';
import "../../styles/Page.css";
import "./IndustrialInfrastructure.css";
import heroImage from "../../assets/industry/healthcare/pexels-cristian-rojas-8460371.webp";
// Placeholder image for the content section
import contentImage from "../../assets/design-eng/pexels-karola-g-4491459.webp";
// Recruitment Image (Reused from Internship)
import recruitmentImage from "../../assets/intern-main/pexels-olly-3769021.webp";

// Reusing assets from home/design pages as placeholders

// Reusing assets from home/design pages as placeholders
import h1 from '../../assets/images-home/skyscraper.webp';
import h2 from '../../assets/images-home/bim-modelling.webp';
import h3 from '../../assets/images-home/mep-design.webp';
import h4 from '../../assets/images-home/architectural-bim.webp';
import h5 from '../../assets/images-home/hvac-design.webp';
import h6 from '../../assets/images-home/hero-group-image.jpg';


// Tech Logos for Innovative Software Tools
import revitLogo from '../../assets/virtual-eng/software logos/autodesk-revit-seeklogo.png';
import autocadLogo from '../../assets/virtual-eng/software logos/autocad-seeklogo.png';
import bentleyLogo from '../../assets/virtual-eng/software logos/bentley.png';
import projectwiseLogo from '../../assets/virtual-eng/software logos/projectwise.webp';


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
        span: "col-2" // span 2 columns
    },
    {
        title: "HVAC System Design",
        desc: "Specialized air quality control and ventilation systems to prevent infection spread and maintain sterile environments.",
        type: "photo",
        img: h5
    },
    {
        title: "Electrical & Power Systems",
        desc: "Reliable power distribution modeling ensuring uninterrupted supply for critical life-support equipment.",
        type: "dark",
        span: ""
    },
    {
        title: "Plumbing & Medical Gas",
        desc: "Precision routing of medical gas lines and sanitary systems compliant with healthcare hygiene standards.",
        type: "white",
        span: ""
    },
    {
        title: "Fire Protection Systems",
        desc: "Advanced detection and suppression system designs to ensure rapid response and patient safety.",
        type: "photo",
        img: h3
    },
    {
        title: "Structural Engineering",
        desc: "Robust structural analysis designed to support heavy medical equipment and seismic requirements.",
        type: "dark",
        span: "col-2"
    },
    {
        title: "Extra Low Voltage & Security Systems",
        desc: "Integrated nurse call, access control, and CCTV systems for secure and responsive facility management.",
        type: "white",
        span: "col-2"
    },
    {
        title: "Sustainability & Energy Analysis",
        desc: "Energy-efficient building models that reduce operational costs while maintaining optimal care environments.",
        type: "blue",
        span: "col-2"
    }
];

const BUSINESS_TYPES = [
    {
        title: "Design Engineering Projects",
        desc: "From initial concept through to final construction, JSE provide full-scale project management tailored to healthcare facilities.",
        img: h1
    },
    {
        title: "Virtual Team for Hire",
        desc: "Engage our expert team remotely to complement your existing staff, bringing specialized knowledge to your project without geographical limitations.",
        img: h6
    },
    {
        title: "Secondment Team Services",
        desc: "Deploy highly skilled engineers and architects on-site to work directly with your team, ensuring your project benefits from hands-on expertise.",
        img: h4
    }
];

const HEALTHCARE_TECH_DATA = [
    { name: 'Revit', abbr: 'Rv', bg: '#e6f7ff', img: revitLogo },
    { name: 'Navisworks', abbr: 'Nw', bg: '#f9f0ff', img: projectwiseLogo },
    { name: 'AutoCAD', abbr: 'AC', bg: '#fffbe6', img: autocadLogo },
    { name: 'Dynamo', abbr: 'Dy', bg: '#fcffe6', img: revitLogo },
    { name: 'BIM 360', abbr: 'B360', bg: '#e6fffb', img: bentleyLogo }
];

const IndustrialInfrastructure = () => {
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


    return (
        <div className="industrial-page">
            {/* Hero Section - Adapted from DesignEngineeringProjects */}
            <section className="industrial-hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="industrial-hero-overlay"></div>
                <div className="industrial-hero-content">
                    {/* Breadcrumbs */}
                    <div className="industrial-breadcrumbs">
                        Home &gt; Industries &gt; <span>IndustrialInfrastructure</span>
                    </div>

                    <h1 className="industrial-hero-title">IndustrialInfrastructure</h1>
                    <p className="industrial-hero-desc">
                        BIM Solutions for IndustrialInfrastructure Facilities
                    </p>
                    <a href="/contact" className="industrial-hero-cta">Hire Us</a>
                </div>
            </section>

            {/* Why BIM for IndustrialInfrastructure? - Adapted from SecondmentTeam 'Our Service' */}
            <section className="industrial-concept-section">
                <div className="industrial-concept-container">
                    <div className="industrial-concept-text">
                        <span className="dash-tagline">INDUSTRY FOCUS</span>
                        <h2 className="industrial-concept-title">Why BIM for IndustrialInfrastructure?</h2>
                        <div className="industrial-concept-desc">
                            <p>
                                In the rapidly evolving landscape of healthcare, Building Information Modeling (BIM) is pivotal for delivering projects that meet the highest standards of safety, efficiency, and functionality.
                            </p>
                            <p>
                                BIM offers a comprehensive digital representation of every aspect of a healthcare facility, allowing for seamless collaboration, precise planning, and a reduced margin of error. It’s not just about building; it’s about building smart, ensuring that your healthcare facility is future-proofed and compliant with all industry regulations.
                            </p>
                        </div>
                    </div>
                    <div className="industrial-concept-image-wrapper">
                        <div className="industrial-image-back"></div>
                        <img
                            src={contentImage}
                            alt="BIM for IndustrialInfrastructure"
                            className="industrial-concept-img"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                </div>
            </section>

            {/* IndustrialInfrastructure Facilities Section (Existing) */}
            <section className="industrial-facilities-section">
                <div className="industrial-facilities-container">
                    {/* Left Sticky Content */}
                    <div className="industrial-sticky-left">
                        <div className="industrial-header-content">
                            <p className="dash-tagline">AREAS OF EXPERTISE</p>
                            <h2 className="industrial-section-title">IndustrialInfrastructure Facilities We Serve</h2>
                            <p className="industrial-tagline">
                                Tailored BIM solutions for diverse medical environments, ensuring precision where it matters most.
                            </p>
                            <div className="industrial-decorative-line"></div>
                        </div>
                    </div>

                    {/* Right Scrollable Cards */}
                    <div className="industrial-cards-list">
                        {FACILITIES_DATA.map((item, index) => (
                            <div key={index} className="industrial-facility-card">
                                <div className="industrial-card-image-wrapper">
                                    <img src={item.img} alt={item.title} className="industrial-card-img" loading="lazy" decoding="async" />
                                </div>
                                <div className="industrial-card-content">
                                    <h3 className="industrial-card-title">{item.title}</h3>
                                    <p className="industrial-card-desc">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Hiring Section (New - Adapted from Internship) */}
            <section className="industrial-hiring-section">
                <div className="industrial-hiring-container">
                    <div className="industrial-hiring-image-side">
                        <img src={recruitmentImage} alt="Join Our IndustrialInfrastructure Team" className="industrial-hiring-img" loading="lazy" decoding="async" />
                    </div>
                    <div className="industrial-hiring-content-side">
                        <div className="dash-tagline">CAREERS</div>
                        <h2 className="section-heading-blue">Join Our IndustrialInfrastructure Team</h2>
                        <div className="section-blob-text">
                            <p style={{ marginBottom: '1.5rem' }}>
                                We are looking for passionate engineers and BIM specialists dedicated to transforming healthcare infrastructure.
                            </p>
                            <p>
                                Join a team that values precision, innovation, and the impact of engineering on patient care. Work on world-class hospital projects and advance your career.
                            </p>
                            <br />
                            <a href="/career" className="industrial-hero-cta" style={{ display: 'inline-block', fontSize: '0.9rem', padding: '0.8rem 2rem' }}>View Openings</a>
                        </div>
                    </div>
                </div>
            </section>


            {/* Comprehensive Design Services - Bento Grid (New - Adapted from Secondment) */}
            <section className="industrial-bento-section">
                <div className="industrial-bento-container">
                    <div className="industrial-bento-header">
                        <span className="dash-tagline" style={{ justifyContent: 'center' }}>OUR CAPABILITIES</span>
                        <h2 className="industrial-bento-heading">Comprehensive Design Engineering Services for IndustrialInfrastructure</h2>
                    </div>

                    <div className="industrial-bento-grid">
                        {COMPREHENSIVE_SERVICES.map((item, index) => (
                            <div
                                key={index}
                                className={`industrial-bento-card hb-${item.type} ${item.span === 'col-2' ? 'hb-span-2-col' : ''}`}
                                style={item.type === 'photo' ? { backgroundImage: `url(${item.img})` } : {}}
                            >
                                <div className="hb-icon-box">
                                    {/* Generic Icon Structure - Replacing with simple check or relevant SVG if needed, using simple box for now */}
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                </div>
                                <div>
                                    <h3 className="hb-title">{item.title}</h3>
                                    <p className="hb-desc">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Business Types Carousel Section (New) */}
            {/* Business Types Split Carousel (Redesign) */}
            <section className="industrial-business-section">
                <div className="industrial-business-container">

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
                                decoding="async"
                            />
                        </div>
                    </div>

                </div>
            </section>

            {/* Why Choose JSE Section (New) */}
            <section className="industrial-why-section">
                <div className="industrial-header-center">
                    <span className="dash-tagline" style={{ justifyContent: 'center' }}>WHY CHOOSE JSE?</span>
                    <h2 className="business-heading" style={{ color: '#144AE0', fontSize: '3rem', textAlign: 'center' }}>Why Choose JSE for BIM in IndustrialInfrastructure?</h2>
                </div>

                <div className="industrial-why-grid">
                    {/* specialized expertise */}
                    <div className="industrial-why-card">
                        <div className="industrial-icon-circle">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                        </div>
                        <h4 className="industrial-card-title">Specialized Expertise</h4>
                        <p className="industrial-card-desc">We understand the complexities of healthcare facilities and design systems that meet the strictest standards of safety and efficiency.</p>
                    </div>

                    {/* advanced technology */}
                    <div className="industrial-why-card">
                        <div className="industrial-icon-circle">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                        </div>
                        <h4 className="industrial-card-title">Advanced Technology</h4>
                        <p className="industrial-card-desc">We utilize the latest BIM software tools to create detailed, accurate models that streamline the design and construction process.</p>
                    </div>

                    {/* collaborative partnership */}
                    <div className="industrial-why-card">
                        <div className="industrial-icon-circle">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                        </div>
                        <h4 className="industrial-card-title">Collaborative Partnership</h4>
                        <p className="industrial-card-desc">We work closely with your team to ensure every aspect of your project aligns with your vision and operational needs.</p>
                    </div>

                    {/* proven success */}
                    <div className="industrial-why-card">
                        <div className="industrial-icon-circle">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>
                        </div>
                        <h4 className="industrial-card-title">Proven Success</h4>
                        <p className="industrial-card-desc">With three decades of experience and a portfolio of over 6,000+ successful projects, JSE is a trusted partner in delivering world-class healthcare facilities.</p>
                    </div>
                </div>
            </section>

            {/* Innovative Software Tools Section */}
            <section className="industrial-tech-section">
                <div className="industrial-tech-container">
                    <div className="industrial-header-center">
                        <span className="dash-tagline" style={{ justifyContent: 'center' }}>TECHNOLOGIES</span>
                        <h2 className="business-heading" style={{ color: '#144AE0', fontSize: '3rem', textAlign: 'center' }}>Innovative Software Tools We Use</h2>
                    </div>

                    <div className="industrial-tech-grid">
                        {HEALTHCARE_TECH_DATA.map((tech, index) => (
                            <div key={index} className="industrial-tech-card">
                                <div className="industrial-tech-logo-wrapper" style={{ background: tech.bg }}>
                                    {tech.img ? (
                                        <img src={tech.img} alt={tech.name} className="industrial-tech-logo-img" loading="lazy" decoding="async" />
                                    ) : (
                                        <span className="industrial-tech-abbr">{tech.abbr}</span>
                                    )}
                                </div>
                                <p className="industrial-tech-name">{tech.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Form Section */}
            <section className="industrial-form-section">
                <div className="industrial-form-container">
                    {/* Left Side: Title & Info */}
                    <div className="industrial-form-info-side">
                        <h2 className="industrial-form-heading">Start Your Project</h2>
                        <p className="industrial-form-subtext">
                            Ready to optimize your workflow with JSE's IndustrialInfrastructure BIM services? Fill out the details and we'll get in touch with you shortly.
                        </p>

                        <div className="industrial-form-contact-details">
                            <p className="industrial-form-email">info@jseengineering.com</p>
                        </div>

                        <div className="industrial-form-socials">
                            <div className="industrial-social-circle">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </div>
                            <div className="industrial-social-circle">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                </svg>
                            </div>
                            <div className="industrial-social-circle">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="industrial-form-input-side">
                        <form onSubmit={handleSubmit} className="industrial-form">
                            <div className="industrial-form-group">
                                <label>Your Name*</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className="industrial-form-input-line"
                                />
                            </div>
                            <div className="industrial-form-group">
                                <label>Your Mail ID*</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="industrial-form-input-line"
                                />
                            </div>
                            <div className="industrial-form-group">
                                <label>Message*</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows="4"
                                    required
                                    className="industrial-form-input-line"
                                ></textarea>
                            </div>
                            <button type="submit" className="industrial-form-submit-btn">Submit</button>
                        </form>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default IndustrialInfrastructure;

