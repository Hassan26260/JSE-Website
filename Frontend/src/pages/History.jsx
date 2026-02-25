import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, LayoutGroup, useMotionValue, useTransform, animate } from 'framer-motion';
import Header from "../components/Header";

import "../styles/Page.css";
import "./History.css";

// Images
import heroImage from "../assets/images-home/hist/skyscraper.jpg";
import founderImage from "../assets/History/Founder.png";
import mdImage from "../assets/History/MD.jpg";

// Additional Image Imports for Chronicles
import architecturalBim from "../assets/images-home/architectural-bim.webp";
import skyscraper from "../assets/images-home/skyscraper.webp";
import mepDesign from "../assets/images-home/mep-design.webp";
import steelStructure from "../assets/images-home/Steel Structure.jpg";
import heroGroupImage from "../assets/images-home/hero-group-image.jpg";
import hvacDesign from "../assets/images-home/hvac-design.webp";

// New History Asset Imports
import img2006 from "../assets/History/2006.jpg.jpeg";
import imgMDOld from "../assets/History/MD old.jpg.jpeg";
import imgHis2 from "../assets/History/his 2.jpg.jpeg";
import imgHistoryPic from "../assets/History/history pic.jpg.jpeg";
import imgLatest from "../assets/History/latest.JPG";
import imgPresent from "../assets/History/present.png";

const HISTORY_TIMELINE = [
    {
        year: "2005–2006",
        title: "FOUNDATION & EMERGENCE",
        descPoints: [
            "JSE emerged with HVAC Design & Shop Drawings and Mechanical Design & 2D Shop Drawing Services, commencing operations in Dubai, UAE and Chennai, Tamil Nadu – India."
        ],
        image: img2006
    },
    {
        year: "2007–2008",
        title: "EXPANSION & LANDMARK PROJECTS",
        descPoints: [
            "Expansion into Electrical Design & Drawings and MEP Supervision in Dubai.",
            "Initiated Shop Drawings for one of the major UAE landmark developments — the Nad Al Sheeba Racecourse & Car Park project."
        ],
        image: imgMDOld
    },
    {
        year: "2009–2013",
        title: "QUALITY & BIM INCEPTION",
        descPoints: [
            "Delivered High Standard Quality Shop Drawings for M/s. BK Gulf, one of the largest contractors in the UAE.",
            "Commenced MEP 3D BIM Department and strengthened BIM delivery capabilities across commercial and infrastructure projects."
        ],
        image: imgHis2
    },
    {
        year: "2014–2018",
        title: "INTEGRATION & DIVERSIFICATION",
        descPoints: [
            "Established Architectural & Structural BIM Department, enabling integrated multi-discipline BIM delivery.",
            "Diversified further with the creation of the Steel Structure Department for modeling, detailing, and fabrication drawing support."
        ],
        image: imgHistoryPic
    },
    {
        year: "2019–2025",
        title: "GLOBAL REACH & NEW OFFICES",
        descPoints: [
            "Expanded regional presence with new Branch Offices at Trichy & Tirunelveli, Tamil Nadu and Vizag, Andhra Pradesh – India.",
            "Commissioned a New Expanded Office at Chennai, enhancing operations and delivery capacity for global service requirements."
        ],
        image: imgLatest
    },
    {
        year: "2026–Present",
        title: "FUTURE READY",
        descPoints: [
            "Continuing to expand engineering, BIM, and digital delivery capabilities for international markets, leveraging advanced design technologies and multidisciplinary expertise."
        ],
        image: imgPresent
    }
];

const History = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Intersection Observer for General Animations (Founder/MD sections)
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.2 }
        );

        const rows = document.querySelectorAll('.history-section');
        rows.forEach((row) => observer.observe(row));

        return () => observer.disconnect();
    }, []);

    // --- Chronicles Carousel Logic (Framer Motion) ---
    const [activeIndex, setActiveIndex] = useState(null);
    const x = useMotionValue(0);

    // Config
    const CARD_WIDTH = 280; // Base width slot
    const CARD_GAP = 40;
    const DRAG_BUFFER = 50; // Threshold to trigger slide change

    // Calculate snap positions
    // We want the Active Card to be roughly centered in the RIGHT half of the screen or just visually pleasing.
    // Let's assume a simplified centered carousel logic for the track.
    // However, user asked for "Right side contains horizontal carousel... Left side contains text".
    // So centering relative to the 'carousel container' is right.

    // Handler for Drag End
    const handleDragEnd = (event, info) => {
        const offset = info.offset.x;
        const velocity = info.velocity.x;

        if (offset < -DRAG_BUFFER || velocity < -500) {
            // Dragged Left -> Next Slide
            setActiveIndex((prev) => Math.min(prev + 1, HISTORY_TIMELINE.length - 1));
        } else if (offset > DRAG_BUFFER || velocity > 500) {
            // Dragged Right -> Prev Slide
            setActiveIndex((prev) => Math.max(prev - 1, 0));
        }
    };

    // Auto-scroll track when activeIndex changes
    // Instead of dragging the track 1:1, we often just animate to position. 
    // True draggable carousel usually maps motionValue x to index.
    // Simpler Premium Feel: The track animates to center the active card.
    // We can use 'animate' from framer-motion to drive the 'x' value.

    // We will control the x-position of the track strictly based on activeIndex, 
    // but allow small drag gestures to trigger the index change.
    // This feels like "Snap to card".

    return (
        <div className="history-page">
            <Header />

            {/* Hero Section */}
            <section className="history-hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="history-hero-overlay"></div>
                <div className="history-hero-content">
                    <div className="page-breadcrumbs">
                        <span>Discover JSE</span> &gt; <span>Our History</span>
                    </div>
                    <h1 className="history-hero-title">Our History</h1>
                    <p className="history-hero-subtitle">Your Global powerhouse in building design and engineering</p>
                </div>
            </section>

            {/* Intro Section - Matched to Infrastructure Intro */}
            <section className="design-intro-section">
                <motion.div
                    className="design-intro-container"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                    }}
                >
                    <div className="design-intro-left">
                        <h2 style={{ fontSize: '3rem', color: '#144AE0', fontWeight: '800', lineHeight: 1.2 }}>From a One-Man Vision to a Global Web of Engineers</h2>
                    </div>
                    <div className="design-intro-right">
                        <p style={{ fontSize: '1.25rem', color: '#475569', lineHeight: 1.8, fontWeight: '500' }}>
                            JSE Engineering was founded on the principles of discipline, technical rigor, and uncompromising ethics. Our story is one of gradual, purposeful evolution—transforming from a specialized individual consultancy into a global "Web of Engineers" serving the world’s most complex infrastructure projects.
                        </p>
                    </div>
                </motion.div>
            </section>

            {/* Founder Section */}
            <section className="history-section founder-section history-dotted-bg">
                <motion.div
                    className="history-container"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                    }}
                >
                    {/* Heading First (Full Width) */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '4rem' }}>
                        <div className="history-tagline" style={{ justifyContent: 'center', marginBottom: '1rem' }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                            </svg>
                            THE FOUNDATION
                        </div>
                        <h2 className="history-heading" style={{ marginBottom: 0, textAlign: 'center' }}>Mr. C. Gnanaraj (1942 – 2024)<br />
                            <span style={{ fontSize: '1.25rem', fontWeight: '500', color: '#64748b', display: 'block', marginTop: '0.5rem' }}>Founder of JSE Engineering Pvt Ltd</span>
                        </h2>
                    </div>

                    {/* Content and Photo (Two Columns) */}
                    <div className="history-two-col" style={{ alignItems: 'flex-start', gap: '3rem' }}>
                        <div className="history-desc">
                            <p>
                                The legacy of JSE Engineering began with Mr. C. Gnanaraj, a thorough professional who valued discipline and ethics as much as life itself. A dedicated smart worker, he was renowned for being punctual, systematic in every endeavor, and a humble human being.
                            </p>
                            <ul className="history-list">
                                <li><span>Academic Excellence:</span> A post-graduate Mechanical Engineer, Mr. Gnanaraj earned his Master’s from the prestigious Indian Institute of Science (IIS) in 1968.</li>
                                <li><span>Professional Journey:</span> Before founding JSE, he served as the General Manager for a prominent UK-based fire-fighting equipment manufacturing company.</li>
                                <li><span>The Genesis:</span> In 2003, he opened a one-man consulting business focused on fire protection services. By 2005, he established JSE Engineering as a multi-disciplinary building services consultancy, driven by the mission to deliver world-class sustainable solutions with the highest standards of engineering design.</li>
                            </ul>
                        </div>
                        <div className="history-img-col" style={{ padding: 0 }}>
                            <img src={founderImage} alt="Mr. C. Gnanaraj - Founder" className="history-img card-hover-effect" />
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Evolution Section (Dark Theme Transition) */}
            <section className="history-section evolution-dark-section">
                <motion.div
                    className="history-container"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{
                        hidden: { opacity: 0, scale: 0.95 },
                        visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } }
                    }}
                >
                    <div className="history-text-col evolution-content-block">
                        <div className="history-tagline" style={{ color: '#60a5fa', justifyContent: 'center' }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
                                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                            </svg>
                            THE EVOLUTION
                        </div>
                        <h2 className="history-heading" style={{ fontSize: '3rem', color: '#ffffff', marginBottom: '1.5rem', textAlign: 'center' }}>A Web of Engineers</h2>
                        <div className="history-desc" style={{ color: '#cbd5e1', textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
                            <p style={{ fontSize: '1.25rem', color: '#e2e8f0' }}>
                                Since our inception in 2005, JSE has grown by staying ahead of industry trends and truly partnering with our clients to understand their deepest objectives. About two-thirds of our consistent growth is a direct result of our ability to evolve alongside the growing needs of the global market.
                            </p>
                            <p style={{ fontSize: '1.25rem', color: '#e2e8f0' }}>
                                What began as a single-man vision has evolved into a multi-disciplinary powerhouse, specializing in MEP Engineering and BIM, Architecture and Structural BIM Solutions, and Steel Detailing.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Managing Director Section */}
            <section className="history-section md-section history-dotted-bg">
                <motion.div
                    className="history-container two-col reverse-col"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{
                        hidden: { opacity: 0, x: -30 },
                        visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
                    }}
                >
                    <div className="history-img-col">
                        <img src={mdImage} alt="Mr. John Suresh - Managing Director" className="history-img card-hover-effect" />
                    </div>
                    <div className="history-text-col">
                        <div className="history-tagline">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="2" y1="12" x2="22" y2="12"></line>
                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                            </svg>
                            THE GLOBAL ERA
                        </div>
                        <h2 className="history-heading">Mr. John Suresh<br />
                            <span style={{ fontSize: '1.25rem', fontWeight: '500', color: '#64748b', display: 'block', marginTop: '0.5rem' }}>Managing Director</span>
                        </h2>
                        <div className="history-desc">
                            <p>
                                Following the footsteps of Mr. Gnanaraj, Mr. John Suresh has led JSE Engineering to reach a truly global level. An enthusiastic and complete professional, Mr. John Suresh values ethical virtues above all else, a commitment that has made him a renowned figure in the international engineering community.
                            </p>
                            <ul className="history-list">
                                <li><span>Experience & Leadership:</span> A post-graduate engineer with more than 20 years of experience across the Middle East and India.</li>
                                <li><span>Proven Track Record:</span> He has personally administered more than 500 projects, yet remains dedicated to the process of learning something new every day.</li>
                                <li><span>Global Scaling:</span> Under his leadership, JSE has transitioned from a local firm to a global partner for international consultants and contractors, now standing tall with a huge workforce professionals across multiple regional offices.</li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Culture Section */}
            <section className="history-section culture-elegant-section">
                <motion.div
                    className="history-container"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                    }}
                >
                    <div className="culture-grid-layout">
                        <div className="culture-left-col">
                            <div className="history-tagline">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '10px' }}>
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                </svg>
                                OUR CULTURE
                            </div>
                            <h2 className="history-heading" style={{ fontSize: '3.5rem', marginBottom: '1.5rem', lineHeight: 1.1 }}>Building<br /><span style={{ color: '#144AE0' }}>Partnerships</span></h2>
                        </div>
                        <div className="culture-right-col">
                            <div className="culture-card">
                                <p style={{ fontSize: '1.2rem', color: '#334155', marginBottom: '1.5rem', lineHeight: 1.8 }}>
                                    At JSE, we don't just provide a service; we build a partnership. We believe that our growth is intrinsically linked to the success of our clients.
                                </p>
                                <p style={{ fontSize: '1.2rem', color: '#334155', lineHeight: 1.8 }}>
                                    By maintaining the systematic and ethical approach established by our founder, we ensure that every project we touch—from metro rails to data centers—is a testament to our commitment to excellence.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Interactive Timeline Section (Premium Framer Motion) */}
            <section className="timeline-section">
                <div className="timeline-header">
                    <span className="timeline-tagline">OUR JOURNEY</span>
                    <h2 className="timeline-heading">The Chronicles of JSE</h2>
                </div>

                <div className="timeline-container">
                    <LayoutGroup>
                        {HISTORY_TIMELINE.map((item, index) => {
                            const isActive = activeIndex === index;
                            return (
                                <motion.div
                                    key={index}
                                    layout
                                    onClick={() => setActiveIndex(index)}
                                    className={`timeline-card ${isActive ? "active" : "inactive"}`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ type: "spring", stiffness: 120, damping: 20 }}
                                >
                                    <motion.div layout className="timeline-card-bg">
                                        <motion.img
                                            layoutId={`img-${index}`}
                                            src={item.image}
                                            alt={item.title}
                                            className="timeline-img"
                                            initial={{ filter: "grayscale(100%)" }}
                                            animate={{
                                                filter: isActive ? "grayscale(0%)" : "grayscale(100%)",
                                                scale: isActive ? 1.05 : 1
                                            }}
                                            transition={{ duration: 0.8 }}
                                        />
                                        <div className="timeline-overlay"></div>
                                    </motion.div>

                                    <div className="timeline-content-wrapper">
                                        {/* Collapsed View: Just Year/Title */}
                                        {!isActive && (
                                            <motion.div
                                                layout
                                                className="timeline-collapsed-content"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                            >
                                                <span className="timeline-year-label">{item.year}</span>
                                                {/* <span className="timeline-arrow-icon">→</span> */}
                                            </motion.div>
                                        )}

                                        {/* Expanded View: Full Content */}
                                        <AnimatePresence mode="wait">
                                            {isActive && (
                                                <motion.div
                                                    layout
                                                    className="timeline-expanded-content"
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 10 }}
                                                    transition={{ delay: 0.2, duration: 0.5 }}
                                                >
                                                    <div className="timeline-expanded-header">
                                                        <span className="timeline-line"></span>
                                                        <span className="timeline-year-expanded">{item.year}</span>
                                                        <button
                                                            className="timeline-close-btn"
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                setActiveIndex(null);
                                                            }}
                                                            aria-label="Close"
                                                        >
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                                                <line x1="6" y1="6" x2="18" y2="18"></line>
                                                            </svg>
                                                        </button>
                                                    </div>

                                                    <h3 className="timeline-card-title">{item.title}</h3>
                                                    <div className="timeline-card-desc">
                                                        {item.descPoints.map((point, i) => (
                                                            <p key={i}>{point}</p>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </LayoutGroup>
                </div>
            </section>




        </div>
    );
};

export default History;
