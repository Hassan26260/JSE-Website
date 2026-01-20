import React, { useEffect } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Page.css";
import "./VisionMission.css";

// Images
import heroImage from "../assets/images-home/skyscraper.webp";
// Fallback if skyscraper is missing, usually Vite handles imports fine.

// Core Values Data
const coreValues = [
    { title: "Collaborative", desc: "Together, we achieve more by fostering teamwork and shared success.", img: heroImage }, // Reusing skyscraper/team concept
    { title: "Curious", desc: "We’re always learning, exploring new ideas, and pushing boundaries to innovate.", img: heroImage },
    { title: "Willing", desc: "Ready to go the extra mile, we embrace challenges with a can-do attitude.", img: heroImage },
    { title: "Dependable", desc: "Count on us for reliability and trustworthiness, no matter the task at hand.", img: heroImage },
    { title: "Adaptive", desc: "We thrive in changing environments, adapting quickly to meet evolving needs.", img: heroImage },
    { title: "Excellence", desc: "We are dedicated to setting the highest standards, ensuring top-tier results in every project we take on.", img: heroImage },
    { title: "Sustainability", desc: "Building a greener future through responsible practices that last for generations.", img: heroImage }
];

const VisionMission = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="vm-page">
            <Header />

            {/* Hero Section */}
            <section className="vm-hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="vm-hero-overlay"></div>
                <div className="vm-hero-content">
                    <div className="page-breadcrumbs">
                        <span>Discover JSE</span> &gt; <span>Vision & Mission</span>
                    </div>
                    <h1 className="vm-hero-title">Vision & Mission</h1>
                    <p className="vm-hero-subtitle">Driving the Future of Engineering</p>
                </div>
            </section>

            {/* Your BIM Partner Section */}
            <section className="vm-partner-section">
                <div className="vm-container partner-container">
                    <div className="vm-left-col">
                        <span className="vm-tagline">OUR PROMISE</span>
                        <h2 className="vm-main-title">Your BIM Partner for the Future</h2>
                        <div className="vm-desc">
                            <p>
                                With extensive team integration and greater engineering efficiency, JSE Engineering Private Limited prides itself on zero-error deliveries in the AEC industry.
                            </p>
                            <p>
                                Our mission is to be the global leader in building design consulting, providing exceptional service and unmatched quality to our clients. Our core values guide every decision we make and undertake with unbreakable alliances.
                            </p>
                        </div>
                    </div>
                    <div className="vm-right-col">
                        <div className="vm-stats-grid">
                            <div className="vm-stat-card">
                                <h3 className="vm-stat-num">500+</h3>
                                <p className="vm-stat-label">Full-Time Employees</p>
                            </div>
                            <div className="vm-stat-card">
                                <h3 className="vm-stat-num">160+</h3>
                                <p className="vm-stat-label">Hrs of work per month</p>
                            </div>
                            <div className="vm-stat-card">
                                <h3 className="vm-stat-num">3</h3>
                                <p className="vm-stat-label">Stage Quality Checks</p>
                            </div>
                            <div className="vm-stat-card">
                                <h3 className="vm-stat-num">ISO</h3>
                                <p className="vm-stat-label">Certificates for BIM & Quality Management</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision, Mission, Purpose Section */}
            <section className="vm-core-section">
                <div className="vm-container">
                    <h2 className="vm-core-heading">One Mind...Multiple Challenges...Limitless Growth</h2>

                    <div className="vm-cards-grid">
                        {/* Vision Card */}
                        <div className="vm-card vision-card">
                            <div className="vm-card-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-eye">
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                </svg>
                            </div>
                            <h3>Our Vision</h3>
                            <p>To create a future where innovation, passion and sustainability drive every project.</p>
                        </div>

                        {/* Mission Card */}
                        <div className="vm-card mission-card">
                            <div className="vm-card-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-crosshair">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                                </svg>
                            </div>
                            <h3>Our Mission</h3>
                            <p>To deliver exceptional engineering solutions that bridge technology and expertise, ensuring client success and elevating global standards in design and construction.</p>
                        </div>

                        {/* Purpose Card */}
                        <div className="vm-card purpose-card">
                            <div className="vm-card-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-target">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="M12 16v-4M12 8h.01"></path>
                                </svg>
                            </div>
                            <h3>Our Purpose</h3>
                            <p>To empower our clients by transforming complex challenges into seamless opportunities. To create engineering solutions that leave a lasting impact on the world.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Auto-Moving Carousel Section: Core Values */}
            <section className="values-carousel-section">
                <div className="values-heading-container">
                    <h2 className="values-title">Our Core Values</h2>
                </div>

                <div className="values-track-wrapper">
                    <div className="values-track">
                        {/* Render twice for infinite loop */}
                        {[...coreValues, ...coreValues].map((val, index) => (
                            <div className="value-card" key={index}>
                                <div className="value-card-img-wrap">
                                    <img src={val.img} alt={val.title} className="value-card-img" />
                                </div>
                                <div className="value-card-content">
                                    <h3>{val.title}</h3>
                                    <p>{val.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quote Section */}
            <section className="vm-quote-section">
                <div className="vm-container">
                    <h2 className="vm-quote-text">
                        <span className="vm-quote-highlight">We believe</span> <br /> "Integrity and excellence are the cornerstones of our success."
                    </h2>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default VisionMission;
