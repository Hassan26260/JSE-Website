import React, { useEffect, useState } from 'react';
import '../../styles/Page.css'; // Shared page styles
import './Manufacturing.css';

// Reuse content image similar to Healthcare (will use same image or specific if available)
// Using h5 (hvac-design.webp) as a placeholder for content image if no specific one is requested, 
// OR better yet, using the SAME image as hero if no other provided, or a generic one.
// The user said: "the next section should be a 2 column... copy of INDUSTRY FOCUS... Image Right"
// I'll reuse the 'h5' import from Healthcare or similar if I don't have a specific content image, 
// BUT wait, I should check if there's an image in architecture folder suitable.
// There is only 'pexels-jan-van-der-wolf-11680885-19748973.webp'. I will use this for the HERO.
// For the content section, I will use a placeholder from assets/images-home/hvac-design.webp (h5) or potentially just reuse the hero one to ensure no broken images.
// Actually, I'll import h5 as a safe bet for content image until user provides another.

import heroImage from '../../assets/industry/architecture/pexels-jan-van-der-wolf-11680885-19748973.webp';
import contentImage from '../../assets/images-home/hvac-design.webp'; // Placeholder for content section

// Images for Facilities Section
import residentialImg from '../../assets/images-home/architectural-bim.webp';
import commercialImg from '../../assets/images-home/skyscraper.webp';
import industrialImg from '../../assets/images-home/mep-design.webp';
import publicImg from '../../assets/images-home/hvac-design.webp'; // Placeholder

// Image for Partner Section
import partnerImage from '../../assets/images-home/hero-group-image.webp';

// Images for Business Types Carousel (Reusing existing or placeholders)
import archFirmImg from '../../assets/images-home/architectural-bim.webp';
import constructionImg from '../../assets/images-home/skyscraper.webp';
import developerImg from '../../assets/images-home/mep-design.webp';

// Tech Logos
import revitLogo from '../../assets/virtual-eng/software logos/autodesk-revit-seeklogo.png';
import autocadLogo from '../../assets/virtual-eng/software logos/autocad-seeklogo.png';
import projectwiseLogo from '../../assets/virtual-eng/software logos/projectwise.webp'; // Placeholder for Navisworks

const ARCH_TECH_DATA = [
    { name: 'Revit', abbr: 'Rv', bg: '#e6f7ff', img: revitLogo },
    { name: 'Navisworks', abbr: 'Nw', bg: '#f9f0ff', img: projectwiseLogo },
    { name: 'AutoCAD', abbr: 'AC', bg: '#fffbe6', img: autocadLogo }
];

const ARCH_FACILITIES_DATA = [
    {
        title: "Residential Manufacturing",
        desc: "Custom homes, apartments, and housing complexes with efficient space planning and design.",
        img: residentialImg
    },
    {
        title: "Commercial Manufacturing",
        desc: "Retail spaces, office buildings, and mixed-use developments designed for function and aesthetics.",
        img: commercialImg
    },
    {
        title: "Industrial Manufacturing",
        desc: "Warehouses, factories, and production facilities optimized for operational efficiency.",
        img: industrialImg
    },
    {
        title: "Public Manufacturing",
        desc: "Government buildings, schools, and community centers built with sustainability and longevity in mind.",
        img: publicImg
    }
];

const OFFER_DATA = [
    {
        title: "3D Modeling & Visualization",
        desc: "Crafting detailed, immersive models that allow stakeholders to experience the project before it's built.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3l7 4-7 4-7-4 7-4zm0 8l7 4-7 4-7-4 7-4zm0 8l7 4-7 4-7-4 7-4z" />
            </svg>
        )
    },
    {
        title: "Construction Documentation",
        desc: "Generating precise construction documents that ensure accuracy during the build phase.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
        )
    },
    {
        title: "Clash Detection & Coordination",
        desc: "Identifying potential issues early on, streamlining the construction process.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
        )
    },
    {
        title: "Cost Estimation & Quantity Takeoff",
        desc: "Accurate cost projections and material quantity assessments to keep your project on budget.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="1" x2="12" y2="23"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
        )
    }
];

const ARCH_BUSINESS_TYPES = [
    {
        title: "Design Engineering Projects",
        desc: "From initial concept through to final construction, JSE provide full-scale project management tailored to healthcare facilities.",
        img: commercialImg
    },
    {
        title: "Virtual Team for Hire",
        desc: "Engage our expert team remotely to complement your existing staff, bringing specialized knowledge to your project without geographical limitations.",
        img: partnerImage
    },
    {
        title: "Secondment Team Services",
        desc: "Deploy highly skilled engineers and architects on-site to work directly with your team, ensuring your project benefits from hands-on expertise.",
        img: residentialImg
    }
];

const ARCH_WHY_CHOOSE_DATA = [
    {
        title: "Innovative Precision",
        desc: "At JSE, we combine creativity with advanced BIM technology to transform architectural visions into precise, build-ready solutions. Our approach ensures accurate planning, coordination, and efficient execution.",
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
        )
    },
    {
        title: "Tailored Solutions for Complex Designs",
        desc: "Every project is unique, so we tailor our BIM services to meet specific design needs, including 3D modeling, clash detection, and sustainable design integration.",
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
        )
    },
    {
        title: "Experienced Team of Experts",
        desc: "Backed by decades of experience, our architects, engineers, and BIM specialists bring strong industry insight to navigate complex design challenges and drive project success.",
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
        )
    },
    {
        title: "Seamless Collaboration",
        desc: "Our collaborative BIM workflows enable seamless coordination among all stakeholders, minimizing miscommunication, delays, and rework.",
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
        )
    },
    {
        title: "Proven Track Record",
        desc: "With a proven track record across diverse sectors, JSE delivers high-quality architectural BIM services trusted by clients worldwide.",
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
        )
    },
    {
        title: "Commitment to Sustainability",
        desc: "Sustainability remains central to our process, as we use BIM to optimize energy performance, material efficiency, and environmental impact while supporting green building standards.",
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path></svg>
        )
    }
];

const Manufacturing = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Form State
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        alert('Thank you for contacting JSE Engineering!');
        setFormData({ name: '', email: '', message: '' }); // Reset form
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % ARCH_BUSINESS_TYPES.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + ARCH_BUSINESS_TYPES.length) % ARCH_BUSINESS_TYPES.length);
    };

    return (
        <div className="manufacturing-page">
            {/* Hero Section */}
            <section className="manufacturing-hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="manufacturing-hero-overlay"></div>
                <div className="manufacturing-hero-content">
                    {/* Breadcrumbs */}
                    <div className="manufacturing-breadcrumbs">
                        Home &gt; Industries &gt; <span>Manufacturing</span>
                    </div>

                    <h1 className="manufacturing-hero-title">Manufacturing</h1>
                    <p className="manufacturing-hero-desc">
                        BIM Solutions for Architectural Projects
                    </p>
                    <a href="/contact" className="manufacturing-hero-cta">Hire Us</a>
                </div>
            </section>

            {/* Industry Focus Section */}
            <section className="manufacturing-focus-section">
                <div className="manufacturing-focus-container">
                    <div className="manufacturing-focus-text">
                        <span className="dash-tagline">INDUSTRY FOCUS</span>
                        <h2 className="manufacturing-focus-title">Why BIM for your Architectural Projects?</h2>
                        <div className="manufacturing-focus-desc">
                            <p>
                                BIM revolutionizes the architectural process by enabling comprehensive visualization, accurate cost estimation, and seamless collaboration across teams. With BIM, you can anticipate challenges before they arise, making informed decisions that save time and resources.
                            </p>
                        </div>
                    </div>
                    <div className="manufacturing-focus-image-wrapper">
                        <div className="manufacturing-image-back"></div>
                        <img
                            src={contentImage}
                            alt="BIM for Manufacturing"
                            className="manufacturing-focus-img"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                </div>
            </section>

            {/* Architectural Facilities Section */}
            <section className="manufacturing-facilities-section">
                <div className="manufacturing-facilities-container">
                    {/* Left Sticky Content */}
                    <div className="manufacturing-sticky-left">
                        <div className="manufacturing-header-content">
                            <div className="dash-tagline">ARCHITECTURAL FACILITIES</div>
                            <h2 className="manufacturing-section-title">Architectural Facilities Benefiting</h2>
                            <div className="manufacturing-decorative-line"></div>
                        </div>
                    </div>

                    {/* Right Scrollable Cards */}
                    <div className="manufacturing-cards-list">
                        {ARCH_FACILITIES_DATA.map((item, index) => (
                            <div key={index} className="manufacturing-facility-card">
                                <div className="manufacturing-card-image-wrapper">
                                    <img src={item.img} alt={item.title} className="manufacturing-card-img" loading="lazy" decoding="async" />
                                </div>
                                <div className="manufacturing-card-content">
                                    <h3 className="manufacturing-card-title">{item.title}</h3>
                                    <p className="manufacturing-card-desc">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What We Offer Section (Reversed Facilities) */}
            <section className="manufacturing-offer-section">
                <div className="manufacturing-offer-container">
                    {/* Left Scrollable Cards (Icons) */}
                    <div className="manufacturing-cards-list offer-cards-left">
                        {OFFER_DATA.map((item, index) => (
                            <div key={index} className="manufacturing-facility-card offer-card">
                                <div className="manufacturing-icon-wrapper">
                                    {item.icon}
                                </div>
                                <div className="manufacturing-card-content">
                                    <h3 className="manufacturing-card-title">{item.title}</h3>
                                    <p className="manufacturing-card-desc">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Sticky Content */}
                    <div className="manufacturing-sticky-right">
                        <div className="manufacturing-header-content">
                            <div className="dash-tagline">WHAT WE OFFER</div>
                            <h2 className="manufacturing-section-title">JSE Architectural BIM Services</h2>
                            <div className="manufacturing-decorative-line"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tailored Business Types Carousel */}
            <section className="manufacturing-business-section">
                <div className="manufacturing-business-container">
                    <div className="business-split-layout">
                        {/* Left Side: Content */}
                        <div className="business-left-side">
                            <div className="dash-tagline">TAILORED BUSINESS TYPES</div>
                            <h2 className="business-heading">{ARCH_BUSINESS_TYPES[currentSlide].title}</h2>
                            <p className="business-desc">{ARCH_BUSINESS_TYPES[currentSlide].desc}</p>

                            <div className="business-controls-wrapper">
                                <div className="business-progress-line"></div>
                                <div className="business-controls">
                                    <span className="slide-counter">
                                        {currentSlide + 1} / {ARCH_BUSINESS_TYPES.length}
                                    </span>
                                    <div className="nav-arrows">
                                        <button className="nav-arrow-btn" onClick={prevSlide}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                                        </button>
                                        <button className="nav-arrow-btn" onClick={nextSlide}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Image */}
                        <div className="business-right-side">
                            <img
                                key={currentSlide}
                                src={ARCH_BUSINESS_TYPES[currentSlide].img}
                                alt={ARCH_BUSINESS_TYPES[currentSlide].title}
                                className="business-feature-img"
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Trusted Partner Section (Adapted from Healthcare Hiring) */}
            <section className="manufacturing-partner-section">
                <div className="manufacturing-partner-container">
                    <div className="manufacturing-partner-image-side">
                        <img src={partnerImage} alt="Trusted Partner" className="manufacturing-partner-img" loading="lazy" decoding="async" />
                    </div>
                    <div className="manufacturing-partner-content-side">
                        <div className="dash-tagline">ARCHITECTURAL FACILITIES</div>
                        <h2 className="manufacturing-heading-blue">Your Trusted Partner in Architectural</h2>
                        <div className="manufacturing-blob-text">
                            <p style={{ marginBottom: '1.5rem' }}>
                                With over 30 years of experience and a portfolio of 6000+ projects, JSE Engineering Private Limited is a leader in BIM consulting and services. Our dedicated professionals collaborate closely with clients to deliver projects that meet and exceed expectations.
                            </p>
                            <p>
                                Trust JSE to bring your architectural visions to life with precision and care. Whether it's residential, commercial, or industrial architecture, our BIM solutions bring precision, efficiency, and innovation to every project.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose JSE Section (Manufacturing) */}
            <section className="manufacturing-why-section">
                <div className="manufacturing-header-center">
                    <span className="dash-tagline" style={{ justifyContent: 'center' }}>WHY CHOOSE JSE?</span>
                    <h2 className="manufacturing-heading-blue" style={{ fontSize: '3rem', textAlign: 'center' }}>Why Choose JSE for BIM in the Architectural Industry?</h2>
                </div>

                <div className="manufacturing-why-grid">
                    {ARCH_WHY_CHOOSE_DATA.map((item, index) => (
                        <div key={index} className="manufacturing-why-card">
                            <div className="manufacturing-icon-circle">
                                {item.icon}
                            </div>
                            <h4 className="manufacturing-card-title">{item.title}</h4>
                            <p className="manufacturing-card-desc">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>



            {/* Innovative Software Tools Section */}
            <section className="manufacturing-tech-section">
                <div className="manufacturing-tech-container">
                    <div className="manufacturing-header-center">
                        <span className="dash-tagline" style={{ justifyContent: 'center' }}>TECHNOLOGIES</span>
                        <h2 className="manufacturing-heading-blue" style={{ fontSize: '3rem', textAlign: 'center' }}>Innovative Tools We Use</h2>
                    </div>

                    <div className="manufacturing-tech-grid">
                        {ARCH_TECH_DATA.map((tech, index) => (
                            <div key={index} className="manufacturing-tech-card">
                                <div className="manufacturing-tech-logo-wrapper" style={{ background: tech.bg }}>
                                    {tech.img ? (
                                        <img src={tech.img} alt={tech.name} className="manufacturing-tech-logo-img" loading="lazy" decoding="async" />
                                    ) : (
                                        <span className="manufacturing-tech-abbr">{tech.abbr}</span>
                                    )}
                                </div>
                                <p className="manufacturing-tech-name">{tech.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Form Section */}
            <section className="manufacturing-form-section">
                <div className="manufacturing-form-container">
                    {/* Left Side: Title & Info */}
                    <div className="manufacturing-form-info-side">
                        <h2 className="manufacturing-form-heading">Start Your Project</h2>
                        <p className="manufacturing-form-subtext">
                            Ready to transform your architectural vision with our BIM expertise? Contact us today to discuss your project needs.
                        </p>

                        <div className="manufacturing-form-contact-details">
                            <p className="manufacturing-form-email">info@jseengineering.com</p>
                        </div>

                        {/* Social Icons (Reused SVG paths) */}
                        <div className="manufacturing-form-socials">
                            <div className="manufacturing-social-circle">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </div>
                            <div className="manufacturing-social-circle">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                </svg>
                            </div>
                            <div className="manufacturing-social-circle">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="manufacturing-form-input-side">
                        <form onSubmit={handleSubmit} className="manufacturing-form">
                            <div className="manufacturing-form-group">
                                <label>Your Name*</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className="manufacturing-form-input-line"
                                />
                            </div>
                            <div className="manufacturing-form-group">
                                <label>Your Mail ID*</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="manufacturing-form-input-line"
                                />
                            </div>
                            <div className="manufacturing-form-group">
                                <label>Message*</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows="4"
                                    required
                                    className="manufacturing-form-input-line"
                                ></textarea>
                            </div>
                            <button type="submit" className="manufacturing-form-submit-btn">Submit</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Manufacturing;

