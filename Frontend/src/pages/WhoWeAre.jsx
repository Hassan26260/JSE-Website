import React, { useState, useEffect, useRef } from 'react';
import "../styles/Page.css";
import "./WhoWeAre.css";
// Reusing the Virtual Team hero image as a placeholder/standard
import heroImage from "../assets/virtual-eng/pexels-fauxels-3184405.webp";
import heroGroupImage from "../assets/other/pexels-josephine-joo-hee-yang-653354097-17660884.jpg";

// City Images
import dubaiImg from "../assets/other/city/dubai.jpg";
import ausImg from "../assets/other/city/australia.jpg"; // Using australia.jpg for Australia
import vizagImg from "../assets/other/city/vizag.jpg";
import tiruImg from "../assets/images-home/hero-group-image.jpg"; // Leaving as is (no replacement found)
import chennaiImg from "../assets/other/city/chennai.jpg";
import trichyImg from "../assets/other/city/trichy.jpg";

// Image for Director Image (Using a professional looking one)
import directorImg from "../assets/History/MD.jpg";

// Simple Counting Component (Reused logic)
const AnimatedNumber = ({ end, duration = 2000, suffix = "" }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);

    useEffect(() => {
        let observer;
        const currentRef = ref.current;

        const startAnimation = () => {
            let start = 0;
            const endNum = parseInt(end, 10);
            if (start === endNum) return;

            const stepTime = Math.abs(Math.floor(duration / endNum));

            const timer = setInterval(() => {
                start += 1;
                setCount(start);
                if (start === endNum) clearInterval(timer);
            }, stepTime);

            return () => clearInterval(timer);
        };

        if (currentRef) {
            observer = new IntersectionObserver(
                (entries) => {
                    if (entries[0].isIntersecting) {
                        startAnimation();
                        observer.disconnect();
                    }
                },
                { threshold: 0.1 }
            );
            observer.observe(currentRef);
        }

        return () => {
            if (observer && currentRef) observer.unobserve(currentRef);
        };
    }, [end, duration]);

    return <span ref={ref}>{count}{suffix}</span>;
};


import mapImage from "../assets/images-home/Map.png";
import Header from "../components/Header";

const WhoWeAre = () => {
    const imageRef = useRef(null);

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Expanding Image Logic
    useEffect(() => {
        const handleScroll = () => {
            if (!imageRef.current) return;

            const rect = imageRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            const startOffset = windowHeight;
            const endOffset = windowHeight * 0.4;

            const distance = startOffset - rect.top;
            const totalDistance = startOffset - endOffset;

            let progress = distance / totalDistance;
            progress = Math.max(0, Math.min(1, progress));

            const newWidth = 70 + (30 * progress);
            const newRadius = 24 * (1 - progress);

            imageRef.current.style.width = `${newWidth}%`;
            imageRef.current.style.borderRadius = `${newRadius}px`;
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="who-we-are-page">
            <Header />
            {/* Hero Section - Matching VirtualTeam Style */}
            <section className="who-hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="who-hero-overlay"></div>
                <div className="who-hero-content">
                    <div className="page-breadcrumbs">
                        <span>Discover JSE</span> &gt; <span>Who We Are</span>
                    </div>
                    <h1 className="who-hero-title">Who We Are</h1>
                </div>
            </section>

            {/* Legacy Section */}
            <section className="legacy-section">
                <div className="legacy-container">
                    <div className="legacy-header">
                        <span className="who-legacy-tagline">OUR LEGACY</span>
                        <h2 className="legacy-main-title">LEADERS IN DESIGN ENGINEERING</h2>
                    </div>

                    <div className="legacy-content">
                        <p>
                            Welcome to JSE Engineering Private Limited, where we bring your visions to life! Imagine a world where your dreams become reality through cutting-edge design and engineering. That's what we do every day. With a global presence and a team of over 500+ passionate experts, we're here to transform your ideas into innovative and sustainable engineering solutions. Our services cover everything from Architectural BIM and HVAC Design to Plumbing, MEP Design, BIM Modelling, Electrical Systems, ELV, Steel Structure Detailing, and Firefighting Design.
                        </p>
                        <p>
                            Are you curious about our journey? It all started over 25 years ago with a small, dedicated team of consultants and professional engineers, who had more than 20+ years of experience from the Gulf region (UAE), and today, we're proud to be leaders in our field. We've built a legacy of excellence and are excited to share it with you.
                        </p>
                        <p className="legacy-closing">
                            So, let's collaborate and shape the future together, one amazing project at a time. Ready to get started? Reach out to us today and let's make something incredible happen!
                        </p>
                    </div>

                    {/* Animated Stats Pillars */}
                    <div className="legacy-stats-grid">
                        {/* Stat 1 */}
                        <div className="stat-card">
                            <div className="stat-number">
                                <AnimatedNumber end={20} suffix="+" />
                            </div>
                            <p className="stat-label">years of experience</p>
                        </div>

                        {/* Stat 2 */}
                        <div className="stat-card">
                            <div className="stat-number">
                                <AnimatedNumber end={25} />
                            </div>
                            <p className="stat-label">years</p>
                        </div>

                        {/* Stat 3 */}
                        <div className="stat-card">
                            <div className="stat-number">
                                <AnimatedNumber end={500} suffix="+" />
                            </div>
                            <p className="stat-label">passionate experts</p>
                        </div>
                    </div>

                </div>
            </section>

            {/* Expanding Image Section */}
            <section className="who-expanding-section">
                <div ref={imageRef} className="who-expanding-wrapper">
                    <img src={heroGroupImage} alt="JSE Team" className="who-expanding-img" loading="lazy" decoding="async" />
                </div>
            </section>

            {/* Global Branch Presence Section */}
            <section className="global-presence-section">
                <div className="global-content-container">
                    <div className="global-header">
                        <span className="who-legacy-tagline justify-start">GLOBAL PRESENCE</span>
                        <h2 className="global-title">Our Global Branch Presence</h2>
                        <p className="global-desc">
                            Extended to all core engineering sectors, JSE is one of the most trusted names in the industry, with a worldwide network of six branches.
                        </p>
                    </div>

                    {/* Branch Carousel (Infinite Loop) */}
                    <div className="carousel-container">
                        <div className="carousel-track">
                            {/* Double the array for seamless loop */}
                            {[
                                { name: "Dubai", role: "International Headquarters", img: dubaiImg },
                                { name: "Australia", role: "Global Operations", img: ausImg },
                                { name: "Vizag", role: "Andhra Pradesh", img: vizagImg },
                                { name: "Tirunelveli", role: "Tamil Nadu", img: tiruImg },
                                { name: "Chennai - Ambattur", role: "Tamil Nadu", img: chennaiImg },
                                { name: "Trichy", role: "Tamil Nadu", img: trichyImg }, // Original Set
                                { name: "Dubai", role: "International Headquarters", img: dubaiImg },
                                { name: "Australia", role: "Global Operations", img: ausImg },
                                { name: "Vizag", role: "Andhra Pradesh", img: vizagImg },
                                { name: "Tirunelveli", role: "Tamil Nadu", img: tiruImg },
                                { name: "Chennai - Ambattur", role: "Tamil Nadu", img: chennaiImg },
                                { name: "Trichy", role: "Tamil Nadu", img: trichyImg }  // Duplicate Set
                            ].map((branch, index) => (
                                <div
                                    key={index}
                                    className="branch-card"
                                    style={{ backgroundImage: `url(${branch.img})` }}
                                >
                                    <div className="branch-content-overlay">
                                        <h3 className="branch-name">{branch.name}</h3>
                                        <p className="branch-role">{branch.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Managing Director Profile Section */}
            <section className="director-section">
                <div className="director-container">
                    <div className="director-content">
                        <span className="director-tagline">LEADERSHIP</span>
                        <h2 className="director-title">Managing Director Profile</h2>
                        <div className="director-text">
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
                    <div className="director-image-wrapper">
                        <img src={directorImg} alt="Mr. John Suresh - Managing Director" className="director-img" loading="lazy" decoding="async" />

                        {/* Quote removed from here */}

                    </div>
                </div>
            </section>

            {/* Pushing the Limits Section */}
            <section className="pushing-limits-section">
                <div className="pushing-container">
                    <div className="pushing-text-col">
                        <span className="who-legacy-tagline justify-start">OUR EXCELLENCE</span>
                        <h2 className="pushing-title">Pushing the Limits of Traditional Modeling</h2>
                        <div className="pushing-desc">
                            <p>
                                Since 2005, JSE Engineering has redefined engineering excellence by blending expert knowledge with cutting-edge technology to deliver world-class BIM services.
                            </p>
                            <p>
                                Backed by a legacy of innovation and a commitment to client satisfaction, we seamlessly turn complex challenges into tangible business solutions, driving value with precision and vision.
                            </p>
                            <p>
                                As an ISO 9001:2015 and ISO 19650-1:2018 certified company, JSE Engineering Pvt. Ltd. offers comprehensive BIM consulting and design services to stakeholders, contractors, engineers, facility managers, and owners across the AEC industry.
                            </p>
                        </div>
                    </div>
                    <div className="pushing-cards-col">
                        {/* ISO Card 1 */}
                        <div className="iso-card">
                            <div className="iso-icon-wrapper">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="iso-icon">
                                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#144AE0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9 12L11 14L15 10" stroke="#144AE0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h4 className="iso-title">ISO Certificate</h4>
                            <p className="iso-desc">for Building Information Modeling</p>
                        </div>

                        {/* ISO Card 2 */}
                        <div className="iso-card">
                            <div className="iso-icon-wrapper">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="iso-icon">
                                    <path d="M9 12L11 14L15 10" stroke="#144AE0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 3L20 7V17L12 21L4 17V7L12 3Z" stroke="#144AE0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h4 className="iso-title">ISO Certificate</h4>
                            <p className="iso-desc">for Quality Management System</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Reference Section (3 Column) */}
            <section className="leadership-section">
                <div className="leadership-container">
                    <div className="leadership-grid">
                        {/* Column 1: Main Title */}
                        <div className="leadership-col-main">
                            <h3 className="leadership-main-title">
                                Our Leadership in BIM Modeling, Outsourcing & Consulting Services
                            </h3>
                            <p className="leadership-main-desc">
                                JSE feels pioneered as a multidisciplinary BIM service provider in all facets of BIM, delivering world-class engineering services in global industry to help build your dreams into reality.
                            </p>
                        </div>

                        {/* Column 2: Experience */}
                        <div className="leadership-col-detail">
                            <span className="leadership-number">01</span>
                            <h4 className="leadership-subtitle">EXPERIENCE</h4>
                            <p className="leadership-subtext">
                                With over 30 years in the industry, JSE has successfully delivered 6000+ BIM projects across a spectrum of industries, setting the standard for quality and reliability.
                            </p>
                        </div>

                        {/* Column 3: Expertise */}
                        <div className="leadership-col-detail">
                            <span className="leadership-number">02</span>
                            <h4 className="leadership-subtitle">EXPERTISE</h4>
                            <p className="leadership-subtext">
                                Our team of seasoned professionals brings deep technical knowledge and innovative 2D & 3D strategies to every BIM modeling project.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Geography Section (From Home) */}
            <section className="geo-section">
                <div className="container">
                    <div className="geo-header">
                        <p className="geo-tagline dash-tagline">WHERE WE WORK</p>
                        <h2 className="geo-title">Geographical Achievements.</h2>
                        <p className="geo-text">
                            With a major stand-on focus on BIM MEP solutions, JSE Engineering transcends geographical
                            boundaries delivering bespoke solutions to our builders, contractors, or real estate clients.
                        </p>
                    </div>
                    <div className="geo-content">
                        <div className="geo-map-container">
                            <img
                                src={mapImage}
                                alt="Global Presence Map"
                                className="geo-map"
                                loading="lazy"
                                decoding="async"
                                width="800"
                                height="450"
                            />
                        </div>
                        <div className="geo-stats-container">
                            <div className="geo-stat-item">
                                <h3><AnimatedNumber end={100} suffix="%" /></h3>
                                <p>Employee Owned</p>
                            </div>
                            <div className="geo-stat-item">
                                <h3><AnimatedNumber end={1000} suffix="+" /></h3>
                                <p>Active Projects</p>
                            </div>
                            <div className="geo-stat-item">
                                <h3><AnimatedNumber end={6000} suffix="+" /></h3>
                                <p>Global Deliveries</p>
                            </div>
                            <a href="/history" className="geo-cta-btn">Our History</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Dedicated Director Quote Section */}
            <section className="md-quote-section">
                <div className="quote-container">
                    <div className="quote-icon">“</div>
                    <h2 className="md-main-quote">
                        "As a man of word, I envisioned building a community of engineers, making a greener impact with high-BIM-tech that fosters a closer client connection. By prioritizing innovation, we ensure every project must exceed standard expectations, anytime to everytime"
                    </h2>
                    <p className="md-quote-author">- Mr. John Suresh, Managing Director</p>
                </div>
            </section>


        </div>
    );
};

export default WhoWeAre;
