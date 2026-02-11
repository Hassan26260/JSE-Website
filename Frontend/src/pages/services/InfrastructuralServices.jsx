import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import "../../styles/Page.css";
import "./DesignEngineeringProjects.css";
// Reuse hero image for now, user can update later


// Placeholder data or reuse existing constants if available
// Standardized Images for Additional Services (Matching Home.jsx)
import mepImg from '../../assets/images-home/home-new-img/MEP.png';
import archImg from '../../assets/images-home/home-new-img/BIM.webp';
import structImg from '../../assets/images-home/home-new-img/structural-eng.webp';
import steelImg from '../../assets/images-home/home-new-img/steel-detail.jfif';
import heroImage from '../../assets/images-home/home-new-img/infrastructural.webp'; // Matching Home.jsx mapping
import infraImg from '../../assets/images-home/home-new-img/infrastructural.webp';
import virtualEngImage from '../../assets/images-home/home-new-img/virtual-team.jpg';
import secondmentImage from '../../assets/images-home/home-new-img/secondment.jpg.jpeg';

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

const INFRA_PILLARS = [
    {
        title: "Roads & Highways",
        desc: "Comprehensive design and planning for urban and rural road networks, ensuring durability and safety.",
        img: heroImage // Placeholder
    },
    {
        title: "Utility Networks",
        desc: "Efficient planning of water, sewage, and drainage systems to support sustainable development.",
        img: heroImage // Placeholder
    },
    {
        title: "Urban Planning",
        desc: "Integrated infrastructure solutions for smart cities and large-scale utility distributions.",
        img: heroImage // Placeholder
    }
];

const InfrastructuralServices = () => {
    const scrollToForm = () => {
        const formSection = document.getElementById('contact-form');
        if (formSection) {
            formSection.scrollIntoView({ behavior: 'smooth' });
        }
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
        <div className="design-projects-page">
            {/* Hero Section */}
            <div className="service-hero-split">
                <div className="hero-text-content">
                    <span className="hero-small-label">Infrastructural Services</span>
                    <h1 className="hero-title-split">Infrastructural Services</h1>
                    <p className="hero-desc-split">
                        Delivering robust and sustainable infrastructure solutions. From transportation networks to utility systems, we engineer the backbone of modern communities.
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
                    <img src={heroImage} alt="Infrastructural Services" className="hero-img-split" loading="eager" />
                </div>
            </div>

            {/* Intro Section */}
            <section className="design-intro-section">
                <div className="design-intro-container">
                    <div className="design-intro-left">
                        <h2>Robust Infrastructure,<br />Sustainable Future</h2>
                    </div>
                    <div className="design-intro-right">
                        <p>We provide comprehensive infrastructural engineering services, ensuring seamless connectivity and reliable utility systems for projects of all scales.</p>
                    </div>
                </div>
            </section>

            {/* Pillars Section */}
            <section className="design-why-section">
                <div className="design-header-center">
                    <span className="dash-tagline">OUR EXPERTISE</span>
                    <h2 className="design-heading-blue">Infrastructural Excellence</h2>
                    <p className="design-desc-center">
                        Our specialized teams deliver end-to-end infrastructure solutions designed for longevity and efficiency.
                    </p>
                </div>

                <div className="design-why-grid">
                    {INFRA_PILLARS.map((pillar, index) => (
                        <div key={index} className="design-why-card">
                            <div className="design-icon-circle">
                                {/* Generic Icon Placeholder */}
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M5 21V7l8-4 8 4v14"></path></svg>
                            </div>
                            <h4 className="design-card-title">{pillar.title}</h4>
                            <p className="design-card-desc">{pillar.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Additional Services Menu Section */}
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

export default InfrastructuralServices;
