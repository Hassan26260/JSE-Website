import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import "../../styles/Page.css";
import "./DesignEngineeringProjects.css";


// Standardized Images for Additional Services (Matching Home.jsx)
import mepImg from '../../assets/images-home/home-new-img/MEP.png';
import archImg from '../../assets/images-home/home-new-img/BIM.webp';
import structImg from '../../assets/images-home/home-new-img/structural-eng.webp';
import steelImg from '../../assets/images-home/home-new-img/steel-detail.jfif';
import heroImage from '../../assets/images-home/home-new-img/infrastructural.webp';
import infraImg from '../../assets/images-home/home-new-img/infrastructural.webp';
import virtualEngImage from '../../assets/images-home/home-new-img/virtual-team.jpeg';
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

const CORE_SERVICES = [
    {
        title: "Sewage Collection & Conveyance Networks",
        desc: "Engineering of gravity sewer systems, rising mains (force mains), manholes, lift stations, and network profiling using hydraulic design principles. Our layouts are optimized for self-cleansing velocities, invert-level coordination, and maintenance access.",
        scope: [
            "Sewer alignment & longitudinal profiles",
            "Hydraulic capacity checks",
            "Manhole spacing & detailing",
            "BIM-integrated underground utility coordination"
        ]
    },
    {
        title: "Stormwater Drainage & Surface Water Management",
        desc: "Design of stormwater conveyance systems, including catch basins, trunk drains, culverts, and outfalls, supported by runoff analysis and hydraulic modeling to mitigate flooding and ensure regulatory compliance.",
        scope: [
            "Drainage network sizing",
            "Surface runoff routing",
            "Flood mitigation planning",
            "Integration with site grading models"
        ]
    },
    {
        title: "Pressurized Potable & Non-Potable Water Networks",
        desc: "Design of pressurized water distribution systems with looped networks, pressure zoning, and pump interface coordination to ensure reliable supply across varying demand zones.",
        scope: [
            "Pipe sizing & pressure drop analysis",
            "Zoning strategies for high-rise / campus layouts",
            "Valve chamber & network segmentation",
            "Utility corridor integration"
        ]
    },
    {
        title: "Chilled Water Distribution Networks (District Cooling)",
        desc: "Engineering closed-loop chilled water piping networks for campuses, healthcare, IT parks, and commercial developments, ensuring thermal efficiency, redundancy, and future expandability.",
        scope: [
            "Primary–secondary chilled water network planning",
            "Pipe routing & corridor coordination",
            "Thermal loss considerations",
            "BIM-based clash-free routing"
        ]
    },
    {
        title: "LV Electrical Utility Routing & Distribution Planning",
        desc: "Planning and coordination of low-voltage electrical networks, including duct banks, cable trenches, service corridors, and equipment interface zones for integrated power distribution.",
        scope: [
            "LV cable routing layouts",
            "Duct bank & trench coordination",
            "Utility corridor zoning",
            "Clash detection with wet utilities"
        ]
    },
    {
        title: "Electrical Distribution Infrastructure",
        desc: "Design of internal power distribution networks, including feeder routing, substation interface planning, and utility network coordination for large-scale developments.",
        scope: [
            "Electrical utility network planning",
            "Distribution corridor engineering",
            "Multi-discipline BIM coordination",
            "Constructability-driven layouts"
        ]
    },
    {
        title: "Telecommunications Networks",
        desc: "Design of telecom ducting systems, fiber-optic pathways, handholes, and service corridors to support digital infrastructure, smart campuses, and future ICT scalability.",
        scope: [
            "Fiber duct routing",
            "Handhole & chamber layouts",
            "Smart infrastructure readiness",
            "Integration with utility corridors"
        ]
    }
];

const DIGITAL_PLATFORMS = [
    {
        title: "Autodesk Civil 3D",
        desc: "Utility networks, longitudinal profiles, surface models, and corridor-based infrastructure planning."
    },
    {
        title: "Autodesk Revit (BIM)",
        desc: "3D utility coordination, multi-discipline clash detection, and construction-ready BIM outputs."
    }
];

const WHY_JSE = [
    "BIM-driven multi-utility coordination",
    "Reduced clashes through 3D utility modeling",
    "Design optimized for constructability & lifecycle maintenance",
    "Integrated civil–MEP–utility workflows",
    "Scalable solutions for campuses, industrial parks & urban developments",
    "Clear deliverables aligned to construction and as-built stages"
];

const DELIVERABLES = [
    "Utility layout plans & longitudinal profiles",
    "Coordinated 3D BIM utility models",
    "Quantity take-offs & BOQs",
    "Construction-stage drawings",
    "As-built documentation"
];

const InfrastructuralServices = () => {
    const stickyContactRef = useRef(null);
    const scrollToForm = () => {
        stickyContactRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

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
    };

    // Animation Variants
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
                    <h1 className="hero-title-split">Infrastructure Engineering</h1>
                    <p className="hero-desc-split">
                        Digitally Engineered Utility Systems for Scalable Developments
                    </p>
                    <button onClick={scrollToForm} className="hero-cta-btn">
                        Request a Consultation
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </button>
                </div>
                <div className="hero-image-content">
                    <div className="hero-diagonal-bar"></div>
                    <img src={heroImage} alt="Infrastructure Engineering" className="hero-img-split" loading="eager" />
                </div>
            </div>

            {/* Intro Section */}
            <section className="design-intro-section">
                <div className="design-intro-container">
                    <div className="design-intro-left">
                        <h2>Digitally Engineered Utility Systems for Scalable Developments</h2>
                    </div>
                    <div className="design-intro-right">
                        <p>
                            JSE Engineering Pvt. Ltd. delivers multi-utility infrastructure planning, detailed engineering, and BIM-based coordination for urban developments, industrial parks, campuses, and large-format projects. Our infrastructure designs are optimized for hydraulic performance, electrical safety, constructability, and lifecycle operations, ensuring seamless integration across civil, MEP, and digital networks.
                        </p>
                    </div>
                </div>
            </section>

            {/* Core Services Section */}
            <section className="design-why-section">
                <div className="design-header-center">
                    <span className="dash-tagline">OUR SERVICES</span>
                    <h2 className="design-heading-blue">Core Infrastructure Services</h2>
                </div>

                <div className="design-why-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }}>
                    {CORE_SERVICES.map((service, index) => {
                        // If it's the 7th (last) item, force it to center under the grid
                        const isLastItem = index === 6;
                        return (
                            <div
                                key={index}
                                className="design-why-card"
                                style={isLastItem ? { gridColumn: '1 / -1', justifySelf: 'center', maxWidth: '450px' } : {}}
                            >
                                <h4 className="design-card-title">{service.title}</h4>
                                <p className="design-card-desc">{service.desc}</p>
                                <div className="design-card-scope" style={{ marginTop: '1rem' }}>
                                    <strong style={{ color: '#0f172a', display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Scope Includes:</strong>
                                    <ul style={{ paddingLeft: '1.2rem', margin: 0, color: '#475569' }}>
                                        {service.scope.map((item, i) => (
                                            <li key={i} style={{ marginBottom: '0.3rem', fontSize: '0.9rem' }}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Digital Delivery & Design Platforms */}
            <section className="arch-services-section" style={{ backgroundColor: '#0f172a' }}>
                <div className="arch-services-container">
                    <div className="arch-services-header">
                        <h2 className="arch-services-title">Digital Delivery & Design Platforms</h2>
                        <p className="arch-services-desc">
                            We adopt a model-first delivery approach for accuracy, coordination, and constructability:
                        </p>
                    </div>
                    <div className="service-expert-grid">
                        {DIGITAL_PLATFORMS.map((platform, index) => (
                            <div key={index} className="service-expert-card" style={{ minHeight: 'auto' }}>
                                <div className="service-expert-content">
                                    <h3 className="service-expert-title">{platform.title}</h3>
                                    <p className="service-expert-desc">{platform.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why JSE & Deliverables Split Section */}
            <section className="virtual-process-section" style={{ backgroundColor: '#0B1221' }}>
                <div className="virtual-process-container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>

                    {/* Why JSE */}
                    <div>
                        <h2 className="virtual-process-heading" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>Why JSE for Infrastructure Engineering?</h2>
                        <ul className="process-list" style={{ listStyle: 'none', padding: 0 }}>
                            {WHY_JSE.map((item, index) => (
                                <li key={index} style={{ marginBottom: '1rem', display: 'flex', alignItems: 'start', gap: '0.8rem', color: '#cbd5e1' }}>
                                    <span style={{ color: '#144AE0', fontWeight: 'bold' }}>✓</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Deliverables */}
                    <div>
                        <h2 className="virtual-process-heading" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>Deliverables</h2>
                        <div className="hardware-card" style={{ flexDirection: 'column', alignItems: 'flex-start', padding: '2rem' }}>
                            <ul className="process-list" style={{ listStyle: 'none', padding: 0 }}>
                                {DELIVERABLES.map((item, index) => (
                                    <li key={index} style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#0f172a' }}>
                                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#144AE0' }}></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

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
