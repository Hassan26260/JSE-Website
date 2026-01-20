import React, { useEffect, useRef, useState } from 'react';
import "../../styles/Page.css";
import "./DesignEngineeringProjects.css";
// Correct relative path to assets from this file location (Frontend/src/pages/services)
import heroImage from "../../assets/design-eng/pexels-thisisengineering-3862379.webp";
import expandImage from "../../assets/design-eng/pexels-karola-g-4491459.webp";

// Portfolio Images for Marquee
// Portfolio Images for Marquee
import { ALL_REAL_PROJECTS } from '../../data/realPortfolio';


// Pillar Images (Reusing concept images)
import pillar1 from "../../assets/images-home/skyscraper.webp";
import pillar2 from "../../assets/images-home/architectural-bim.webp";
import pillar3 from "../../assets/images-home/bim-modelling.webp";

// Tech Logos
import revitLogo from '../../assets/virtual-eng/software logos/autodesk-revit-seeklogo.png';
import autocadLogo from '../../assets/virtual-eng/software logos/autocad-seeklogo.png';
import bentleyLogo from '../../assets/virtual-eng/software logos/bentley.png';
import microstationLogo from '../../assets/virtual-eng/software logos/microstation.webp';
import projectwiseLogo from '../../assets/virtual-eng/software logos/projectwise.webp';

const FEATURED_PROJECTS = ALL_REAL_PROJECTS.slice(0, 6).map(p => ({
    title: p.title,
    img: p.image
}));


const DESIGN_PILLARS = [
    {
        title: "Precision Engineering",
        desc: "We utilize advanced tools to ensure every detail is accurate, minimizing errors and optimizing construction workflows.",
        img: pillar1
    },
    {
        title: "Innovative Design",
        desc: "Our creative approach combines aesthetics with functionality, delivering modern and sustainable engineering solutions.",
        img: pillar2
    },
    {
        title: "Efficient Delivery",
        desc: "Streamlined processes and expert project management ensure we meet deadlines without compromising on quality.",
        img: pillar3
    }
];

const ADVANCED_TECH_DATA = [
    { name: 'Revit', abbr: 'Rv', bg: '#e6f7ff', img: revitLogo },
    { name: 'AutoCAD', abbr: 'AC', bg: '#fffbe6', img: autocadLogo },
    { name: 'Navisworks', abbr: 'Nw', bg: '#f9f0ff', img: projectwiseLogo },
    { name: 'Bentley', abbr: 'Be', bg: '#e6fffb', img: bentleyLogo },
    { name: 'Civil 3D', abbr: 'C3D', bg: '#fff0f6', img: revitLogo },
    { name: 'Tekla', abbr: 'Tk', bg: '#f0f5ff', img: microstationLogo },
    { name: '3ds Max', abbr: '3ds', bg: '#fff2e8', img: autocadLogo },
    { name: 'Dynamo', abbr: 'Dy', bg: '#fcffe6', img: revitLogo },
    { name: 'SketchUp', abbr: 'Sk', bg: '#f6ffed', img: bentleyLogo },
    { name: 'Rhino', abbr: 'Rh', bg: '#fff7e6', img: microstationLogo },
    { name: 'SolidWorks', abbr: 'SW', bg: '#fff1f0', img: projectwiseLogo },
    { name: 'Catia', abbr: 'Ca', bg: '#f0f5ff', img: autocadLogo },
    { name: 'Primavera', abbr: 'Pv', bg: '#fff0f6', img: bentleyLogo },
    { name: 'Lumion', abbr: 'Lu', bg: '#e6ffec', img: microstationLogo },
    { name: 'Etap', abbr: 'Et', bg: '#fff7e6', img: projectwiseLogo }
];

const DesignEngineeringProjects = () => {
    const imageRef = useRef(null);
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

    useEffect(() => {
        const handleScroll = () => {
            if (!imageRef.current) return;

            const rect = imageRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Calculate visibility progress
            const startOffset = windowHeight; // Bottom of viewport
            const endOffset = windowHeight * 0.4; // 40% from top

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

    return (
        <div className="design-projects-page">
            {/* Hero Section */}
            <section className="design-hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="design-hero-overlay"></div>
                <div className="design-hero-content">
                    <h1 className="design-hero-title">Design Engineering Projects</h1>
                    <p className="design-hero-desc">
                        Expert engineering solutions tailored to your project needs. From concept to completion, we deliver excellence in design and implementation.
                        {/* Placeholder text, can be updated later based on user feedback */}
                    </p>
                    <a href="/contact" className="design-hero-cta">Hire Us</a>
                </div>
            </section>



            {/* Intro Section */}
            <section className="design-intro-section">
                <div className="design-intro-container">
                    <div className="design-intro-left">
                        <h2>Delivering Excellence,<br />Even Under Pressure</h2>
                    </div>
                    <div className="design-intro-right">
                        <p>Your partner for on-time, high-quality design engineering—combining technical expertise and innovation to turn ambitious ideas into build-ready solutions.</p>
                    </div>
                </div>
            </section>

            {/* What is Design Engineering? Section */}
            <section className="design-what-section">
                <div className="design-what-container">
                    <div className="design-what-text">
                        <span className="dash-tagline">THE CONCEPT</span>
                        <h2 className="design-what-title">JSE for Design Engineering Projects</h2>
                        <p className="design-what-desc">
                            When deadlines are tight and the pressure is high, JSE Engineering Pvt. Ltd becomes your strategic partner in delivering complex engineering projects. We understand the critical importance of meeting timelines without compromising on quality.
                        </p>
                        <p className="design-what-desc">
                            Whether you need to outsource specific tasks or an entire project, our team is equipped to handle every aspect with precision, ensuring your construction project's success even under the most demanding conditions.
                        </p>
                    </div>
                    <div className="design-what-image-wrapper">
                        <div className="design-image-back"></div>
                        <img src={heroImage} alt="Design Engineering Concept" className="design-what-img" loading="lazy" decoding="async" />
                    </div>
                </div>
            </section>

            {/* Why Choose JSE Section expanded */}
            <section className="design-why-section">
                <div className="design-header-center">
                    <span className="dash-tagline">WHY CHOOSE JSE?</span>
                    <h2 className="design-heading-blue">Why Choose JSE?</h2>
                    <p className="design-desc-center">
                        You may find out what sets us apart in the world of design engineering by providing extraordinary services to our clients or contractors.
                    </p>
                </div>

                <div className="design-why-grid">
                    {/* Card 1: Experience */}
                    <div className="design-why-card">
                        <div className="design-icon-circle">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                        </div>
                        <h4 className="design-card-title">Decades of Industry Experience</h4>
                    </div>

                    {/* Card 2: Track Record */}
                    <div className="design-why-card">
                        <div className="design-icon-circle">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                        </div>
                        <h4 className="design-card-title">6000+ Successfully Delivered Projects</h4>
                    </div>

                    {/* Card 3: Tools */}
                    <div className="design-why-card">
                        <div className="design-icon-circle">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
                        </div>
                        <h4 className="design-card-title">Advanced Engineering Tools and Software</h4>
                    </div>

                    {/* Card 4: Tailored Solutions */}
                    <div className="design-why-card">
                        <div className="design-icon-circle">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"></path></svg>
                        </div>
                        <h4 className="design-card-title">Tailored Solutions for Every Project Size</h4>
                    </div>

                    {/* Card 5: On-Time Delivery */}
                    <div className="design-why-card">
                        <div className="design-icon-circle">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                        </div>
                        <h4 className="design-card-title">On-Time Delivery with Uncompromised Quality</h4>
                    </div>
                </div>
            </section>

            {/* Process Section (How We Execute) */}
            <section className="design-process-section">
                <div className="design-process-container">
                    <div className="design-process-image-side">
                        <div className="design-process-img-wrapper">
                            <img src={heroImage} alt="Design Engineering Process" className="design-process-img" loading="lazy" decoding="async" />
                        </div>
                    </div>
                    <div className="design-process-content-side">
                        <span className="dash-tagline">PROCESS</span>
                        <h2 className="design-process-title">How We Execute Design Engineering Projects</h2>
                        <div className="design-process-desc">
                            <p style={{ marginBottom: '1.5rem' }}>
                                Our process is rooted in collaboration and tailored to meet your unique needs. We begin by thoroughly understanding your project requirements and constraints.
                            </p>
                            <p>
                                Using advanced software and cutting-edge methodologies, our engineers break down the project into manageable tasks or take on the entire project, providing you with detailed plans, accurate timelines, and regular progress updates. Our approach ensures that every component of your project aligns with your goals, meets industry standards, and is delivered on time.
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
                    <img src={expandImage} alt="JSE Design Engineering" className="expanding-img" loading="lazy" decoding="async" />
                </div>
            </section>

            {/* What We Deliver Section */}
            <section className="design-deliver-section">
                <div className="design-deliver-container">

                    {/* Left: Text Content */}
                    <div className="design-deliver-text-side">
                        <span className="dash-tagline">SOLUTIONS</span>
                        <h2 className="design-heading-blue" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#144AE0', fontWeight: '800' }}>
                            What We Deliver
                        </h2>
                        <div className="design-process-desc" style={{ maxWidth: '90%' }}>
                            <p style={{ marginBottom: '1.5rem' }}>
                                JSE Engineering provides end-to-end solutions from concept design to final delivery, offering integrated expertise across structural, MEP, and architectural BIM services. Our technically sound deliverables enhance efficiency, reduce risk, and ensure your project aligns seamlessly with your vision and expectations.
                            </p>
                        </div>
                    </div>

                    {/* Right: 2 Cards Grid */}
                    <div className="design-deliver-grid-side">

                        {/* Card 1: Small Task */}
                        <div className="design-deliver-card">
                            <div className="design-deliver-icon-wrapper">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
                            </div>
                            <h3 className="design-deliver-card-title">Small Task Outsourcing</h3>
                            <p className="design-deliver-card-desc">
                                Effortlessly enhance your project by outsourcing specific tasks to JSE’s expert team, ensuring precision without full-scale commitment.
                            </p>
                        </div>

                        {/* Card 2: Full Project */}
                        <div className="design-deliver-card">
                            <div className="design-deliver-icon-wrapper">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                            </div>
                            <h3 className="design-deliver-card-title">Full Project Outsourcing</h3>
                            <p className="design-deliver-card-desc">
                                Leave the entire project to us on given timeframe, and we’ll deliver end-to-end solutions with unmatched quality and efficiency.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Our Featured Projects Section (Marquee) */}
            <section className="design-featured-section">
                <div className="design-featured-container">
                    <div className="design-featured-header">
                        <span className="design-featured-tagline">BIM projects</span>
                        <h2 className="design-featured-heading">Our Featured Projects</h2>
                    </div>
                </div>

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

            {/* Design Pillars Section (3 Columns: Image + Content) */}
            <section className="design-pillars-section">
                <div className="design-pillars-container">
                    {DESIGN_PILLARS.map((pillar, index) => (
                        <div key={index} className="design-pillar-card">
                            <div className="design-pillar-img-wrapper">
                                <img src={pillar.img} alt={pillar.title} className="design-pillar-img" loading="lazy" decoding="async" />
                            </div>
                            <div className="design-pillar-content">
                                <h3 className="design-pillar-title">{pillar.title}</h3>
                                <p className="design-pillar-desc">{pillar.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Advanced Technologies Section */}
            <section className="tech-section">
                <div className="tech-container">
                    <div className="virtual-why-header" style={{ marginBottom: '4rem', textAlign: 'center', alignItems: 'center' }}>
                        <span className="dash-tagline symmetric" style={{ justifyContent: 'center' }}>Technologies</span>
                        <h2 className="virtual-why-main-title">Advanced Technologies We Use</h2>
                        <p className="design-desc-center" style={{ maxWidth: '800px', marginTop: '1rem' }}>
                            Our professionals are experts in the latest BIM technologies ensuring your design engineering project benefits from cutting-edge design and modeling capabilities.
                        </p>
                    </div>

                    <div className="tech-grid" style={{ justifyContent: 'center', margin: '0 auto' }}>
                        {ADVANCED_TECH_DATA.map((tech, index) => (
                            <div key={index} className="tech-card">
                                <div className="tech-logo-wrapper" style={{ background: tech.bg }}>
                                    {tech.img ? (
                                        <img src={tech.img} alt={tech.name} className="tech-logo-img" loading="lazy" decoding="async" />
                                    ) : (
                                        <span className="tech-abbr">{tech.abbr}</span>
                                    )}
                                </div>
                                <p className="tech-name">{tech.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Form Section */}
            <section className="internship-form-section">
                <div className="form-container">
                    {/* Left Side: Title & Info */}
                    <div className="form-info-side">
                        <h2 className="form-heading">Start Your Project</h2>
                        <p className="form-subtext">
                            Ready to optimize your workflow with JSE's Design Engineering services? Fill out the details and we'll get in touch with you shortly.
                        </p>

                        <div className="form-contact-details">
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

                    {/* Right Side: Form */}
                    <div className="form-input-side">
                        <form onSubmit={handleSubmit} className="internship-form">
                            {/* Name */}
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

                            {/* Email */}
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

                            {/* Message */}
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

            {/* Content will be added here later */}
        </div >
    );
};

export default DesignEngineeringProjects;
