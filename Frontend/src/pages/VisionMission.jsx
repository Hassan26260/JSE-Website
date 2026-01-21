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
    {
        title: "Collaborative",
        desc: "Together, we achieve more by fostering teamwork and shared success.",
        icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#144AE0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
    },
    {
        title: "Curious",
        desc: "We’re always learning, exploring new ideas, and pushing boundaries to innovate.",
        icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#144AE0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
    },
    {
        title: "Willing",
        desc: "Ready to go the extra mile, we embrace challenges with a can-do attitude.",
        icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#144AE0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
    },
    {
        title: "Dependable",
        desc: "Count on us for reliability and trustworthiness, no matter the task at hand.",
        icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#144AE0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
    },
    {
        title: "Adaptive",
        desc: "We thrive in changing environments, adapting quickly to meet evolving needs.",
        icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#144AE0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 7l-7 5 7 5V7z"></path><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
    },
    {
        title: "Excellence",
        desc: "We are dedicated to setting the highest standards, ensuring top-tier results in every project.",
        icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#144AE0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    },
    {
        title: "Sustainability",
        desc: "Building a greener future through responsible practices that last for generations.",
        icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#144AE0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>
    }
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

                {/* Custom Icon Cards Grid */}
                <div className="vm-values-grid">
                    {coreValues.map((val, index) => (
                        <div className="vm-value-card-new" key={index}>
                            <div className="vm-value-icon-box">
                                {val.icon}
                            </div>
                            <h3>{val.title}</h3>
                            <p>{val.desc}</p>
                        </div>
                    ))}
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
