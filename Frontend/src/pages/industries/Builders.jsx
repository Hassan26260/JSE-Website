import React, { useState, useEffect } from 'react';
import '../../styles/Page.css';
import './Builders.css';
import StickyContact from '../../components/StickyContact';

// Hero Image (Builders)
import heroImage from '../../assets/industry/Builders/pexels-mikael-blomkvist-8961624.webp';

// Reuse existing images for content sections
import contentImg1 from '../../assets/images-home/architectural-bim.webp';
import contentImg2 from '../../assets/images-home/bim-modelling.webp';

// Placeholder Images for Carousel (Reusing assets)
import h1 from '../../assets/images-home/skyscraper.webp';
import h4 from '../../assets/images-home/architectural-bim.webp';
import h6 from '../../assets/images-home/hero-group-image.jpg';




const BUSINESS_TYPES = [
    {
        title: "Design Engineering Projects",
        desc: "From initial concept through to final construction, JSE provide full-scale project management tailored to healthcare facilities.",
        img: h1
    },
    {
        title: "Virtual Team for Hire",
        desc: "Engage our expert team remotely to complement your existing staff, bringing specialized knowledge to your project without geographical limitations.",
        img: h6
    }
];
// Grid Structure: 4 columns
// Row 1: Architectural (2) + HVAC (1) + Plumbing (1) = 4
// Row 2: MEP (1) + BIM Modeling (1) + Firefighting (2) = 4
// Row 3: Steel (2) + Electrical (2) = 4
const BUILDERS_SERVICES = [
    {
        title: "Architectural BIM",
        desc: "Bring your architectural designs to life with our advanced 3D modeling and visualization services. We help you identify potential issues before construction begins, ensuring a smoother build process and reducing costly delays.",
        type: "blue",
        span: "col-2"
    },
    {
        title: "HVAC Design",
        desc: "Our HVAC design services ensure optimal climate control solutions for your buildings, focusing on energy efficiency and system performance. We use BIM to design systems that are not only effective but also sustainable.",
        type: "white",
        span: ""
    },
    {
        title: "Plumbing & Public Health",
        desc: "JSE’s plumbing and public health services provide detailed and accurate designs for water supply, drainage, and sanitation systems. Our BIM approach helps prevent clashes and ensures compliance with all regulations.",
        type: "dark",
        span: ""
    },
    {
        title: "MEP Design",
        desc: "Our comprehensive MEP design services cover mechanical, electrical, and plumbing systems, providing integrated solutions that enhance the overall functionality and safety of your buildings.",
        type: "photo",
        img: h4, // Reuse placeholder
        span: ""
    },
    {
        title: "BIM Modeling",
        desc: "With our BIM modeling services, we create detailed digital representations of your projects, enabling better decision-making and improved collaboration among all stakeholders.",
        type: "white",
        span: "" // Changed from col-2 to fit Row 2
    },
    {
        title: "Firefighting Design",
        desc: "Safety is paramount in any building project. Our firefighting design services cover everything from fire suppression systems to smoke detection, ensuring your building is protected in case of an emergency.",
        type: "dark",
        span: "col-2"
    },
    {
        title: "Steel Structure Detailing",
        desc: "Our steel structure detailing services provide accurate and detailed drawings for your construction projects. We use BIM to ensure precision and reduce the risk of errors during fabrication and installation.",
        type: "blue",
        span: "col-2"
    },
    {
        title: "Electrical System Design",
        desc: "Our electrical system design services ensure that your building’s electrical infrastructure is safe, efficient, and up to code. We use BIM to create precise designs that meet all your power distribution needs.",
        type: "white",
        span: "col-2"
    }
];

const BUILDERS_WHY_CHOOSE = [
    {
        title: "Expertise and Experience",
        desc: "With decades of experience in the construction industry, JSE has the expertise to handle even the most complex projects. Our BIM services are designed to enhance every aspect of your construction process, from design to completion.",
        span: "col-3",
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
        )
    },
    {
        title: "Cutting-Edge Technology",
        desc: "We use the latest BIM software tools to deliver precise and reliable results. Our commitment to staying at the forefront of technology ensures that your projects benefit from the most advanced solutions available.",
        span: "col-3",
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
        )
    },
    {
        title: "Tailored Solutions",
        desc: "Every construction project is unique, and so are our solutions. We work closely with you to understand your specific needs and tailor our BIM services to meet them, ensuring the best possible outcomes.",
        span: "col-2",
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line></svg>
        )
    },
    {
        title: "Collaboration & Communication",
        desc: "Our BIM process fosters seamless collaboration among all stakeholders, improving communication and reducing the risk of errors and rework. We ensure that everyone is on the same page, from concept to construction.",
        span: "col-2",
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
        )
    },
    {
        title: "Sustainability Focus",
        desc: "We prioritize sustainability in all our projects, using BIM to optimize energy efficiency and reduce environmental impact. Our designs help you meet green building standards while enhancing the long-term value of your projects.",
        span: "col-2",
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>
        )
    }
];

// BUILDERS_TECH_DATA removed

const Builders = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Carousel State
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % BUSINESS_TYPES.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + BUSINESS_TYPES.length) % BUSINESS_TYPES.length);
    };

    // Form State
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
        // Add submission logic here
    };

    const stickyContactRef = React.useRef(null);

    const scrollToForm = () => {
        stickyContactRef.current?.open();
    };

    return (
        <div className="builders-page">
            {/* Hero Section */}
            <div className="page-hero" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="page-hero-overlay"></div>
                <div className="page-hero-content">
                    {/* Breadcrumbs */}
                    <div className="builders-breadcrumbs">
                        Home &gt; Industries &gt; <span>Builders</span>
                    </div>

                    <h1 className="page-hero-title">Builders</h1>
                    <p className="page-hero-subtitle">
                        BIM Solutions for Builders & Contractors
                    </p>
                </div>
            </div>

            {/* Why BIM is Essential for Builders */}
            <section className="builders-section-white">
                <div className="builders-container-2col">
                    <div className="builders-text-col">
                        <span className="dash-tagline">INDUSTRY FOCUS</span>
                        <h2 className="builders-heading-blue">Why BIM is Essential for Builders</h2>
                        <p className="builders-desc">
                            BIM revolutionizes the way builders approach construction projects. Whether you're working on residential, commercial, or industrial projects, by integrating detailed 3D models with real-time data, BIM enhances project visualization, improves coordination among teams, and reduces errors and rework.
                        </p>
                        <p className="builders-desc">
                            This leads to more efficient project delivery, cost savings, and higher quality outcomes.
                        </p>
                    </div>
                    <div className="builders-img-col">
                        <div className="builders-img-wrapper">
                            <img src={contentImg1} alt="BIM for Builders" className="builders-content-img" />
                        </div>
                    </div>
                </div>
            </section>

            {/* JSE Solution For Every Builders Need */}
            <section className="builders-section-blue">
                <div className="builders-container-2col">
                    <div className="builders-img-col">
                        <div className="builders-img-wrapper">
                            <img src={contentImg2} alt="JSE Solutions" className="builders-content-img" />
                        </div>
                    </div>
                    <div className="builders-text-col">
                        <span className="dash-tagline white-tag">CAREERS</span>
                        <h2 className="builders-heading-white">JSE Solution For Every Builders Need</h2>
                        <p className="builders-desc white-text">
                            In the fast-paced world of construction, precision, and efficiency are crucial. With decades of experience and a portfolio of thousands of projects, JSE Engineering Private Limited, a trusted BIM partner for builders, is looking to harness the power of BIM. We empower builders with advanced BIM services that streamline the construction process, enhance collaboration, and bring projects to life with unparalleled accuracy.
                        </p>
                        <p className="builders-desc white-text">
                            Our tailored consulting, 2D & 3D services and software tools meet the specific needs of builders, ensuring that every project is completed to the highest standard (meticulously planned, coordinated, and executed).
                        </p>
                    </div>
                </div>
            </section>

            {/* Bento Grid Services Section (New) */}
            <section className="builders-bento-section">
                <div className="builders-bento-container">
                    <div className="builders-header-center">
                        <span className="dash-tagline" style={{ justifyContent: 'center' }}>OUR CAPABILITIES</span>
                        <h2 className="builders-heading-blue" style={{ fontSize: '3rem', textAlign: 'center' }}>Our BIM Services for Builders</h2>
                    </div>

                    <div className="builders-bento-grid">
                        {BUILDERS_SERVICES.map((item, index) => (
                            <div
                                key={index}
                                className={`builders-bento-card hb-${item.type} ${item.span === 'col-2' ? 'hb-span-2-col' : ''}`}
                                style={item.type === 'photo' ? { backgroundImage: `url(${item.img})` } : {}}
                            >
                                <div className="hb-icon-box">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                </div>
                                <div>
                                    <h3 className="hb-title">{item.title}</h3>
                                    <p className="hb-desc">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Business Types Split Carousel (Redesign) */}
            <section className="builders-business-section">
                <div className="builders-business-container">

                    <div className="business-split-layout">
                        {/* Left Side: Content */}
                        <div className="business-left-side">
                            <div className="dash-tagline">TAILORED BUSINESS TYPES</div>
                            <h2 className="business-heading">{BUSINESS_TYPES[currentSlide].title}</h2>
                            <p className="business-desc">{BUSINESS_TYPES[currentSlide].desc}</p>

                            <div className="business-controls-wrapper">
                                <div className="business-progress-line"></div>
                                <div className="business-controls">
                                    <span className="slide-counter">
                                        {currentSlide + 1} / {BUSINESS_TYPES.length}
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
                                src={BUSINESS_TYPES[currentSlide].img}
                                alt={BUSINESS_TYPES[currentSlide].title}
                                className="business-feature-img"
                            />
                        </div>
                    </div>

                </div>
            </section>

            {/* Why Choose JSE Section (New Layout) */}
            <section className="builders-why-section">
                <div className="builders-header-center">
                    <span className="dash-tagline" style={{ justifyContent: 'center' }}>WHY CHOOSE JSE?</span>
                    <h2 className="builders-heading-blue" style={{ fontSize: '3rem', textAlign: 'center' }}>Why Choose JSE for Builders?</h2>
                </div>

                <div className="builders-why-grid">
                    {BUILDERS_WHY_CHOOSE.map((item, index) => (
                        <div key={index} className={`builders-why-card ${item.span}`}>
                            <div className="builders-icon-circle">
                                {item.icon}
                            </div>
                            <h4 className="builders-card-title">{item.title}</h4>
                            <p className="builders-card-desc">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Innovative Software Tools Section Removed */}

            {/* Form Section */}
            <StickyContact ref={stickyContactRef}>
                <div className="builders-form-container">
                    {/* Left Side: Title & Info */}
                    <div className="builders-form-info-side">
                        <h2 className="builders-form-heading">Start Your Project</h2>
                        <p className="builders-form-subtext">
                            Ready to optimize your workflow with JSE's Builders BIM services? Fill out the details and we'll get in touch with you shortly.
                        </p>

                        <div className="builders-form-contact-details">
                            <p className="builders-form-email">info@jseengineering.com</p>
                        </div>

                        <div className="builders-form-socials">
                            <div className="builders-social-circle">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </div>
                            <div className="builders-social-circle">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                </svg>
                            </div>
                            <div className="builders-social-circle">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="builders-form-input-side">
                        <form onSubmit={handleSubmit} className="builders-form">
                            <div className="builders-form-group">
                                <label>Your Name*</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className="builders-form-input-line"
                                />
                            </div>
                            <div className="builders-form-group">
                                <label>Your Mail ID*</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="builders-form-input-line"
                                />
                            </div>
                            <div className="builders-form-group">
                                <label>Message*</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows="4"
                                    required
                                    className="builders-form-input-line"
                                ></textarea>
                            </div>
                            <button type="submit" className="builders-form-submit-btn">Submit</button>
                        </form>
                    </div>
                </div>
            </StickyContact>

        </div>
    );
};

export default Builders;
