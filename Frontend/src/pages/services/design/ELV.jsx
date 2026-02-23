import '../../../styles/ServiceExpertise.css';

const getIcon = (index) => {
  const icons = [
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>, // Layers
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>, // Wrench
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>, // Monitor
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>, // Shield
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>, // Zap
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg> // Cube
  ];
  return icons[index % icons.length];
};

const ELV = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const { openModal } = useContactModal();

  const scrollToForm = () => {
    openModal();
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
    <div className="arch-bim-page">
      {/* New Split Hero Section */}
      <div className="service-hero-split">
        <div className="hero-text-content">
          <h1 className="hero-title-split">ELV Engineering</h1>
          <p className="hero-desc-split">
            Elevate Building Intelligence with Advanced ELV Engineering Solutions.
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
          <img src={s4} alt="ELV Engineering" className="hero-img-split" loading="eager" />
        </div>
      </div>

      {/* Intro / About Section (Replaces Pillars) */}
      <section className="arch-what-section" style={{ padding: '6rem 2rem' }}>
        <div className="arch-what-container">
          {/* Text Side */}
          <div className="arch-what-text">
            <span className="arch-what-tagline">ABOUT ELV</span>
            <h2 className="arch-what-title">Custom Extra-Low Voltage (ELV) System Design Services</h2>
            <p className="arch-what-desc">
              JSE Engineering Pvt Ltd provides comprehensive ELV Engineering and BIM MEP services that integrate intelligent low-voltage systems into modern buildings. Our ELV solutions enhance safety, connectivity, automation, and operational efficiency across diverse sectors.
            </p>
            <p className="arch-what-desc">
              As a leading BIM service provider, we deliver ELV 2D drafting and 3D BIM modeling services for healthcare, education, commercial, residential, industrial, smart city, and infrastructure projects—ensuring seamless coordination throughout the construction lifecycle.
            </p>
          </div>
          {/* Image Side */}
          <div className="arch-what-image-wrapper">
            <div className="arch-image-back"></div>
            <img src={whatIsImage} alt="ELV System Design" className="arch-what-img"
              loading="lazy"
              decoding="async" />
          </div>
        </div>
      </section >

      <section className="arch-services-section">
        <div className="arch-services-container">
          <div className="arch-services-header">
            <span className="arch-services-tagline">OUR EXPERTISE</span>
            <h2 className="arch-services-title">ELV Design Engineering Services We Offer</h2>
            <p className="arch-services-desc">
              Comprehensive ELV engineering solutions for smart, connected, and secure buildings.
            </p>
          </div>

          <div className="service-expert-grid">
            {SERVICES_DATA.map((service, index) => (
              <div key={index} className="service-expert-card">
                {/* Icon */}
                <div className={`service-expert-icon icon-color-${(index % 6) + 1}`}>
                  {getIcon(index)}
                </div>
                {/* Content */}
                <div className="service-expert-content">
                  <h3 className="service-expert-title">{service.title}</h3>
                  <p className="service-expert-desc">{service.desc}</p>
                </div>
                {/* Pattern */}
                <div className={`service-expert-pattern pattern-${(index % 6) + 1}`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      

      {/* Worldwide Iconic Projects Section */}
      <section className="iconic-projects-section">
        <div className="iconic-container">
          <div className="iconic-header">
            <span className="iconic-tagline">BIM projects</span>
            <h2 className="iconic-heading">Worldwide Iconic Projects</h2>
          </div>
        </div>

        {/* Marquee Carousel */}
        <div className="iconic-marquee-wrapper">
          <div className="iconic-marquee-track">
            {/* Set 1 */}
            {ICONIC_PROJECTS.map((project, index) => (
              <div key={`iconic-${index}`} className="iconic-card">
                <img src={project.img} alt={project.title} className="iconic-img" />
                <div className="iconic-overlay">
                  <div className="iconic-content">
                    <h3 className="iconic-title">{project.title}</h3>
                    <a href="/portfolio" className="iconic-cta">
                      Know More <span className="arrow">→</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
            {/* Set 2 (Duplicate for loop) */}
            {ICONIC_PROJECTS.map((project, index) => (
              <div key={`iconic-dup-${index}`} className="iconic-card">
                <img src={project.img} alt={project.title} className="iconic-img" />
                <div className="iconic-overlay">
                  <div className="iconic-content">
                    <h3 className="iconic-title">{project.title}</h3>
                    <a href="/portfolio" className="iconic-cta">
                      Know More <span className="arrow">→</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose JSE Section */}
      <section className="arch-choose-section">
        <div className="arch-choose-container">
          {/* Left Column: Text */}
          <div className="arch-choose-left">
            <span className="arch-choose-tagline">WHY CHOOSE US</span>
            <h2 className="arch-choose-heading">Why Choose JSE for ELV Engineering?</h2>
            <p className="arch-choose-desc">
              JSE Engineering combines technical expertise with a client-focused approach to deliver superior ELV solutions.
            </p>
          </div>

          {/* Right Column: Cards Grid */}
          <div className="arch-choose-right">
            {CHOOSE_JSE_DATA.map((item, index) => (
              <div key={index} className="arch-choose-card">
                <h3 className="arch-choose-card-title">{item.title}</h3>
                <p className="arch-choose-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose JSE Section (Part 2 - Reversed) */}
      <section className="arch-choose-section">
        <div className="arch-choose-container">
          {/* Left Column: Cards Grid (Visually Left) */}
          <div className="arch-choose-right">
            {CHOOSE_JSE_DATA_2.map((item, index) => (
              <div key={index} className="arch-choose-card">
                <h3 className="arch-choose-card-title">{item.title}</h3>
                <p className="arch-choose-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Right Column: Text (Visually Right) */}
          <div className="arch-choose-left">
            <p className="arch-choose-desc">
              Our holistic approach ensures that your ELV systems are not only robust and secure but also seamlessly integrated with the broader building infrastructure, delivering long-term value and operational efficiency.
            </p>
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

    </div >
  );
}; // End of Component

export default ELV;
