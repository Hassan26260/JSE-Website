import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, LayoutGroup, useMotionValue, useTransform, animate } from 'framer-motion';
import Header from "../components/Header";

import "../styles/Page.css";
import "./History.css";

// Images
import heroImage from "../assets/images-home/skyscraper.webp";
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
        image: heroGroupImage
    },
    {
        year: "2026–Present",
        title: "FUTURE READY",
        descPoints: [
            "Continuing to expand engineering, BIM, and digital delivery capabilities for international markets, leveraging advanced design technologies and multidisciplinary expertise."
        ],
        image: hvacDesign
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

            {/* Founder Section */}
            <section className="history-section founder-section">
                <div className="history-container two-col">
                    <div className="history-text-col">
                        <div className="history-tagline">OUR LEGACY</div>
                        <h2 className="history-heading">Founder Of JSE</h2>
                        <div className="history-desc">
                            <p>
                                <strong>Mr. C. Gnanaraj</strong> – The visionary behind JSE Engineering Pvt Ltd, was a professional who deeply believed in discipline and integrity. Throughout his career, he demonstrated dedication, hard work, and a systematic approach, paired with an unwavering sense of humility.
                            </p>
                            <p>
                                As a postgraduate mechanical engineer, Mr. Gnanaraj held a BE(Hons), ME, and an MBA. He earned his master’s degree from the prestigious Indian Institute of Science (IIS) in 1968. After serving as General Manager for a UK-based firefighting equipment manufacturer, he founded his own consulting business in fire protection services in 2003, starting a journey that paved the way for JSE.
                            </p>
                        </div>
                    </div>
                    <div className="history-img-col">
                        <img src={founderImage} alt="Mr. C. Gnanaraj - Founder" className="history-img" />
                    </div>
                </div>
            </section>

            {/* Managing Director Section */}
            <section className="history-section md-section bg-light">
                <div className="history-container two-col reverse-col">
                    <div className="history-img-col">
                        <img src={mdImage} alt="Mr. John Suresh - Managing Director" className="history-img" />
                    </div>
                    <div className="history-text-col">
                        <div className="history-tagline">OUR LEADERSHIP</div>
                        <h2 className="history-heading">Managing Director</h2>
                        <div className="history-desc">
                            <p>
                                <strong>Mr. John Suresh, Managing Director</strong>
                            </p>
                            <p>
                                Mr. John Suresh is an enthusiastic, grounded, and highly accomplished professional who places ethics at the core of everything he does. His unwavering commitment to ethical values has earned him a strong reputation and respect within the industry.
                            </p>
                            <p>
                                A postgraduate engineer with over 20 years of experience across the Middle East and India, he has successfully led and administered more than 1,000 projects. Despite his vast experience, he continues to learn and evolve every day, staying aligned with emerging technologies and industry best practices.
                            </p>
                            <p>
                                Inspired by the vision and values of Mr. Gananraj, he went on to establish JSE Engineering Pvt. Ltd. with the ambition of building a globally recognized organization. Today, JSE Engineering stands tall, serving clients across 20+ countries worldwide. This remarkable growth and global presence have been made possible through the dedicated leadership, vision, and relentless efforts of Mr. John Suresh.
                            </p>
                        </div>
                    </div>
                </div>
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
