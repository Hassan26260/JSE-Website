import React, { useEffect, useState, useRef } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Page.css";
import "./History.css";

// Images
import heroImage from "../assets/images-home/skyscraper.webp";
import founderImage from "../assets/History/Founder.png";
import mdImage from "../assets/History/MD.jpg";

const HISTORY_TIMELINE = [
    {
        year: "2005–2006",
        title: "FOUNDATION & EMERGENCE",
        descPoints: [
            "JSE emerged with HVAC Design & Shop Drawings and Mechanical Design & 2D Shop Drawing Services, commencing operations in Dubai, UAE and Chennai, Tamil Nadu – India."
        ]
    },
    {
        year: "2007–2008",
        title: "EXPANSION & LANDMARK PROJECTS",
        descPoints: [
            "Expansion into Electrical Design & Drawings and MEP Supervision in Dubai.",
            "Initiated Shop Drawings for one of the major UAE landmark developments — the Nad Al Sheeba Racecourse & Car Park project."
        ]
    },
    {
        year: "2009–2013",
        title: "QUALITY & BIM INCEPTION",
        descPoints: [
            "Delivered High Standard Quality Shop Drawings for M/s. BK Gulf, one of the largest contractors in the UAE.",
            "Commenced MEP 3D BIM Department and strengthened BIM delivery capabilities across commercial and infrastructure projects."
        ]
    },
    {
        year: "2014–2018",
        title: "INTEGRATION & DIVERSIFICATION",
        descPoints: [
            "Established Architectural & Structural BIM Department, enabling integrated multi-discipline BIM delivery.",
            "Diversified further with the creation of the Steel Structure Department for modeling, detailing, and fabrication drawing support."
        ]
    },
    {
        year: "2019–2025",
        title: "GLOBAL REACH & NEW OFFICES",
        descPoints: [
            "Expanded regional presence with new Branch Offices at Trichy & Tirunelveli, Tamil Nadu and Vizag, Andhra Pradesh – India.",
            "Commissioned a New Expanded Office at Chennai, enhancing operations and delivery capacity for global service requirements."
        ]
    },
    {
        year: "2026–Present",
        title: "FUTURE READY",
        descPoints: [
            "Continuing to expand engineering, BIM, and digital delivery capabilities for international markets, leveraging advanced design technologies and multidisciplinary expertise."
        ]
    }
];

const History = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Intersection Observer for Animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.2 } // Trigger when 20% visible
        );

        const rows = document.querySelectorAll('.history-timeline-row');
        rows.forEach((row) => observer.observe(row));

        return () => observer.disconnect();
    }, []);

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
                                Following the Footsteps of Mr. Ganaraj, his son <strong>Mr. John Suresh</strong> strongly believes in identifying business errors and fixing them with the latest BIM technology solutions.
                            </p>
                            <p>
                                With 3+ decades of modeling experience and a command of subject knowledge, Suresh is passionate about sharing his expertise through mentoring young engineers and motivating the team to explore new industrial challenges.
                            </p>
                            <p>
                                Our journey, from start till this day, is marked by groundbreaking projects, industry accolades, and a relentless pursuit of quality.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vertical Timeline Section (Redesigned) */}
            <section className="history-timeline-section">
                <div className="history-container">
                    <div className="timeline-header">
                        <h2 className="timeline-main-title">CHRONICLE</h2>
                    </div>

                    <div className="history-process-timeline">
                        <div className="history-center-line"></div>

                        {HISTORY_TIMELINE.map((item, index) => (
                            <div key={index} className={`history-timeline-row ${index % 2 !== 0 ? 'row-right' : 'row-left'}`}>
                                {/* Content Side */}
                                <div className="history-content-side">
                                    <div className="history-timeline-card">
                                        <span className="history-year-badge">{item.year}</span>
                                        <h3>{item.title}</h3>
                                        {item.descPoints.map((point, i) => (
                                            <p key={i}>{point}</p>
                                        ))}
                                    </div>
                                </div>

                                {/* Center Marker */}
                                <div className="history-center-marker">
                                    <div className="history-marker-dot"></div>
                                </div>

                                {/* Empty/Label Side */}
                                <div className="history-empty-side">
                                    {/* Optional: Add labels or years here if preferred, currently empty for layout balance */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* BIM Adoption Graph Section (2009 vs 2012) - Legacy */}
            <section className="history-section bim-stats-section">
                <div className="history-container">
                    <h2 className="bim-stats-heading">
                        BIM Adoption Growth (2009 - 2012)
                    </h2>

                    {/* Graph Legend */}
                    <div className="bim-legend">
                        <div className="bim-legend-item">
                            <span className="bim-legend-color color-grey"></span>
                            <span>2009</span>
                        </div>
                        <div className="bim-legend-item">
                            <span className="bim-legend-color color-red"></span>
                            <span>2012</span>
                        </div>
                    </div>

                    {/* Chart Wrapper (Y-Axis + Graph) */}
                    <div className="bim-chart-wrapper">
                        {/* Y-Axis */}
                        <div className="bim-y-axis">
                            <span>80%</span>
                            <span>60%</span>
                            <span>40%</span>
                            <span>20%</span>
                            <span>0%</span>
                        </div>

                        {/* Bars Container */}
                        <div className="bim-graph-container">
                            {/* Group 1: 50% vs 74% */}
                            <div className="bim-bar-group">
                                <div className="bim-bar bar-grey" style={{ height: '62.5%' }}>
                                    <span className="bim-bar-val">50%</span>
                                </div>
                                <div className="bim-bar bar-red" style={{ height: '92.5%' }}>
                                    <span className="bim-bar-val">74%</span>
                                </div>
                            </div>

                            {/* Group 2: 42% vs 67% */}
                            <div className="bim-bar-group">
                                <div className="bim-bar bar-grey" style={{ height: '52.5%' }}>
                                    <span className="bim-bar-val">42%</span>
                                </div>
                                <div className="bim-bar bar-red" style={{ height: '83.75%' }}>
                                    <span className="bim-bar-val">67%</span>
                                </div>
                            </div>

                            {/* Group 3: 58% vs 70% */}
                            <div className="bim-bar-group">
                                <div className="bim-bar bar-grey" style={{ height: '72.5%' }}>
                                    <span className="bim-bar-val">58%</span>
                                </div>
                                <div className="bim-bar bar-red" style={{ height: '87.5%' }}>
                                    <span className="bim-bar-val">70%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default History;
