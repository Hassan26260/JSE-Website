import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import './ArchitecturalBIM.css'; // Reusing existing styles
import heroImage from '../../../assets/images-home/home-new-img/structural-eng.webp';

import whatIsImage from '../../../assets/structural/sectors-we-serve.jpg';

// Portfolio Imports
import { MEP_PROJECTS } from '../../../data/realPortfolio';

// Standardized Images for Additional Services (Matching Home.jsx)
import mepImg from '../../../assets/images-home/home-new-img/MEP.png';
import archImg from '../../../assets/images-home/home-new-img/BIM.webp';
import structImg from '../../../assets/images-home/home-new-img/structural-eng.webp';
import steelImg from '../../../assets/images-home/home-new-img/steel-detail.jfif';
import infraImg from '../../../assets/images-home/home-new-img/infrastructural.webp';
import virtualEngImage from '../../../assets/images-home/home-new-img/virtual-team.jpeg';
import secondmentImage from '../../../assets/images-home/home-new-img/secondment.jpg.png';

// Reuse images for services
import s1 from '../../../assets/images-home/skyscraper.webp';
import s2 from '../../../assets/images-home/architectural-bim.webp';
import s3 from '../../../assets/images-home/bim-modelling.webp';
import s4 from '../../../assets/images-home/mep-design.webp';
import s5 from '../../../assets/images-home/hvac-design.webp';
import s6 from '../../../assets/images-home/plumbing.webp';

import '../../../styles/ServiceExpertise.css';

const getIcon = (index) => {
    const icons = [
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>, // Layers
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>, // Wrench
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>, // Monitor
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>, // Shield
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>, // Zap
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg> // Cube
    ];
    return icons[index % icons.length];
};

const SERVICES_DATA = [
    { title: "RCC Design", img: s1, desc: "Reinforced Cement Concrete (RCC) Structural Design and Detailed Engineering" },
    { title: "Composite Systems", img: s2, desc: "Composite Structural Systems – Analysis, Design, and Detailing" },
    { title: "Analysis & Design", img: s3, desc: "Structural Analysis & Design using STAAD.Pro, ETABS, and SAFE" },
    { title: "Structural Optimization", img: s4, desc: "Design Review, Value Engineering, and Structural Optimization" },
    { title: "Structural BIM Modeling", img: s5, desc: "BIM-enabled workflows for coordination, clash detection, and sequencing." },
    { title: "Construction Documentation", img: s6, desc: "Calculations, Drawings (IFA/IFC), QTOs, and As-Built Documentation." },
];

const ICONIC_PROJECTS = MEP_PROJECTS.slice(0, 6).map(p => ({
    title: p.title,
    img: p.image
}));


const CHOOSE_JSE_DATA = [
    {
        title: "Experienced Engineers",
        desc: "A team of structural experts delivering performance-driven design."
    },
    {
        title: "Integrated Workflows",
        desc: "Seamless coordination with Architectural & MEP teams using BIM."
    },
    {
        title: "Code Compliance",
        desc: "Strict adherence to structural codes, safety, and durability standards."
    },
    {
        title: "Constructability Focus",
        desc: "Designs optimized for efficient execution and long-term reliability."
    }
];

const CHOOSE_JSE_DATA_2 = [
    {
        title: "Reliable Support",
        desc: "Continuous engagement from initial design concept to final handover."
    },
    {
        title: "Advanced Technology",
        desc: "Leveraging STAAD.Pro, ETABS, and SAFE for precision analysis."
    },
    {
        title: "Cost Efficiency",
        desc: "Value engineering to reduce material waste and optimize costs."
    },
    {
        title: "Global Standards",
        desc: "Delivering solutions aligned with international construction best practices."
    }
];

// Additional Services Data (Standardized to Home.jsx Solutions)
const ADDITIONAL_SERVICES = [
    { title: "MEP Engineering", desc: "Comprehensive MEP solutions including HVAC, Electrical, and Firefighting.", link: "/services/design/mep-design", img: mepImg },
    { title: "Architectural BIM", desc: "Revolutionizing architecture with detailed BIM models.", link: "/services/design/architectural-bim", img: archImg },
    { title: "Structural Engineering", desc: "Advanced structural engineering and analysis.", link: "/services/design/structural", img: structImg },
    { title: "Steel Structure Detailing", desc: "Accurate Tekla detailing and steel structures.", link: "/services/design/steel-structure-detailing", img: steelImg },
    { title: "Infrastructural Services", desc: "Robust infrastructure solutions for modern communities.", link: "/services/infrastructural-services", img: infraImg },
    { title: "Virtual Team for Hire", desc: "Hire own remote offshore architect team for modular construction needs.", link: "/services/virtual-team", img: virtualEngImage },
    { title: "Secondment Team", desc: "Get on-demand access to our pool of experienced professionals.", link: "/services/secondment-team", img: secondmentImage }
];

const Structural = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
    };

    const stickyContactRef = useRef(null);

    const scrollToForm = () => {
        stickyContactRef.current?.open();
    };

    // Animation Variants (Staggered)
    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        }
    };

    const itemFadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="arch-bim-page">
            {/* Split Hero Section */}
            <div className="service-hero-split">
                <div className="hero-text-content">
                    <h1 className="hero-title-split">Structural Engineering</h1>
                    <p className="hero-desc-split">
                        High-Performance Structural Engineering Solutions. We transform complex design concepts into efficient, economical, and resilient structures.
                    </p>
                    <button onClick={scrollToForm} className="hero-cta-btn">
                        HIRE US
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </button>
                </div>
                <div className="hero-image-content">
                    <div className="hero-diagonal-bar"></div>
                    <img src={heroImage} alt="Structural Engineering" className="hero-img-split" loading="eager" />
                </div>
            </div>



            {/* What is Section */}
            <section className="arch-what-section">
                <div className="arch-what-container">
                    {/* Text Side */}
                    <div className="arch-what-text">
                        <span className="arch-what-tagline">SECTORS WE SERVE</span>
                        <h2 className="arch-what-title">Industry Sectors</h2>
                        <p className="arch-what-desc">
                            We provide high-quality engineering expertise that enhances structural performance, ensures economic and code-compliant design, and delivers solutions that are robust, efficient, and fully constructible for successful project execution.
                        </p>
                        <ul className="arch-what-list" style={{ listStyle: 'none', padding: 0, marginTop: '1rem' }}>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                                <span style={{ color: '#144AE0', marginRight: '0.5rem', fontWeight: 'bold' }}>•</span> Commercial & Office Buildings
                            </li>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                                <span style={{ color: '#144AE0', marginRight: '0.5rem', fontWeight: 'bold' }}>•</span> Residential Apartments
                            </li>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                                <span style={{ color: '#144AE0', marginRight: '0.5rem', fontWeight: 'bold' }}>•</span> Healthcare & Educational Facilities
                            </li>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                                <span style={{ color: '#144AE0', marginRight: '0.5rem', fontWeight: 'bold' }}>•</span> Industrial & Infrastructure structures
                            </li>
                        </ul>
                    </div>
                    {/* Image Side */}
                    <div className="arch-what-image-wrapper">
                        <div className="arch-image-back"></div>
                        <img src={whatIsImage} alt="What is Structural BIM" className="arch-what-img"
                            loading="lazy"
                            decoding="async" />
                    </div>
                </div>
            </section>

            {/* Specialized Structural Engineering Capabilities Section */}
            <section className="arch-services-section">
                <div className="arch-services-container">
                    <div className="arch-services-header">
                        <span className="arch-services-tagline">OUR EXPERTISE</span>
                        <h2 className="arch-services-title">Specialized Structural Engineering Capabilities</h2>
                        <p className="arch-services-desc" style={{ maxWidth: '900px', margin: '0 auto 3rem auto' }}>
                            Our coordinated approach minimizes site conflicts and design ambiguities before construction begins. Our services are delivered with a strong focus on constructability, coordination with contractors and project stakeholders, and compliance with statutory and contractual requirements.
                        </p>
                    </div>

                    <div className="service-expert-grid">
                        {SERVICES_DATA.map((service, index) => (
                            <div key={index} className="service-expert-card">
                                {/* Icon */}
                                <div className={`service-expert-icon icon-color-${(index % 6) + 1}`}>
                                    {getIcon(index)}
                                </div>
                                {/* Content */}
                                <div className="service-expert-content">
                                    <h3 className="service-expert-title">{service.title}</h3>
                                    <p className="service-expert-desc">{service.desc}</p>
                                </div>
                                {/* Pattern */}
                                <div className={`service-expert-pattern pattern-${(index % 6) + 1}`}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Worldwide Iconic Projects Marquee */}
            <section className="iconic-projects-section">
                <div className="iconic-container">
                    <div className="iconic-header">
                        <span className="iconic-tagline">Structural Projects</span>
                        <h2 className="iconic-heading">Worldwide Iconic Projects</h2>
                    </div>
                </div>

                {/* Marquee Carousel */}
                <div className="iconic-marquee-wrapper">
                    <div className="iconic-marquee-track">
                        {/* Set 1 */}
                        {ICONIC_PROJECTS.map((project, index) => (
                            <div key={`iconic-${index}`} className="iconic-card">
                                <img src={project.img} alt={project.title} className="iconic-img" />
                                <div className="iconic-overlay">
                                    <div className="iconic-content">
                                        <h3 className="iconic-title">{project.title}</h3>
                                        <a href="/portfolio" className="iconic-cta">
                                            Know More <span className="arrow">→</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {/* Set 2 (Duplicate for loop) */}
                        {ICONIC_PROJECTS.map((project, index) => (
                            <div key={`iconic-dup-${index}`} className="iconic-card">
                                <img src={project.img} alt={project.title} className="iconic-img" />
                                <div className="iconic-overlay">
                                    <div className="iconic-content">
                                        <h3 className="iconic-title">{project.title}</h3>
                                        <a href="/portfolio" className="iconic-cta">
                                            Know More <span className="arrow">→</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose JSE Section */}
            <section className="arch-choose-section">
                <div className="arch-choose-container">
                    {/* Left Column: Text */}
                    <div className="arch-choose-left">
                        <span className="arch-choose-tagline">WHY CHOOSE US</span>
                        <h2 className="arch-choose-heading">Why JSE for Structural Engineering?</h2>
                        <p className="arch-choose-desc">
                            Choosing JSE’s Structural Design Engineers means gaining a strategic partner focused on precision, safety, and efficiency. Our team leverages advanced BIM workflows to deliver accurate, data-rich structural models that enhance coordination and reduce risks.
                        </p>
                    </div>

                    {/* Right Column: Cards Grid */}
                    <div className="arch-choose-right">
                        {CHOOSE_JSE_DATA.map((item, index) => (
                            <div key={index} className="arch-choose-card">
                                <h3 className="arch-choose-card-title">{item.title}</h3>
                                <p className="arch-choose-card-desc">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Engineering Approach Section (Part 2 - Reversed) */}
            <section className="arch-choose-section">
                <div className="arch-choose-container">
                    {/* Left Column: Cards Grid (Visually Left) */}
                    <div className="arch-choose-right">
                        {CHOOSE_JSE_DATA_2.map((item, index) => (
                            <div key={index} className="arch-choose-card">
                                <h3 className="arch-choose-card-title">{item.title}</h3>
                                <p className="arch-choose-card-desc">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Right Column: Text (Visually Right) */}
                    <div className="arch-choose-left">
                        <span className="arch-choose-tagline">OUR METHODOLOGY</span>
                        <h2 className="arch-choose-heading">Engineering Approach</h2>
                        <p className="arch-choose-desc">
                            By integrating structural expertise with architectural insight, we ensure safe, buildable, and optimized designs. With JSE, you benefit from a collaborative approach that guarantees your structural vision is realized to the highest standards.
                        </p>
                    </div>
                </div>
            </section>

            {/* Additional Services Menu Section (Updated to match Home.jsx) */}
            <section className="solutions-list-section">
                <motion.div
                    className="solutions-list-container"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={staggerContainer}
                >
                    <div className="solutions-header-group">
                        <h2 className="solutions-title">Additional Services You Can Benefit From</h2>
                    </div>
                    <div className="solutions-list-wrapper">
                        {ADDITIONAL_SERVICES.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={itemFadeUp}
                                className="solution-item-motion-wrapper"
                            >
                                <Link to={item.link} className="solution-list-item">
                                    <span className="solution-list-text">{item.title}</span>
                                    <span className="solution-list-arrow">→</span>
                                    <div className="solution-item-img-wrapper">
                                        <img src={item.img} alt={item.title} className="solution-item-img" loading="lazy" />
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default Structural;
