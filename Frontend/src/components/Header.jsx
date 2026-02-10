import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Header.css";
import logo from "../assets/Logo/LOGO.png";

const Header = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [designServicesDropdown, setDesignServicesDropdown] = useState(false); // Restored
  const [mepDropdown, setMepDropdown] = useState(false);
  const [internshipDropdown, setInternshipDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  const handleDesignServicesMouseEnter = () => {
    setDesignServicesDropdown(true);
  };

  const handleDesignServicesMouseLeave = () => {
    setDesignServicesDropdown(false);
    setMepDropdown(false);
  };

  const handleMepMouseEnter = () => {
    setMepDropdown(true);
  };

  const handleMepMouseLeave = () => {
    setMepDropdown(false);
  };

  const handleServicesMouseEnter = () => {
    setServicesDropdown(true);
  };

  const handleServicesMouseLeave = () => {
    setServicesDropdown(false);
    setDesignServicesDropdown(false);
    setMepDropdown(false);
  };

  const handleInternshipMouseEnter = () => {
    setInternshipDropdown(true);
  };

  const handleInternshipMouseLeave = () => {
    setInternshipDropdown(false);
  };

  return (
    <header className={`header ${isScrolled || location.pathname !== "/" ? "scrolled" : ""}`}>
      <div className="header-container">
        <Link to="/" className="logo">
          <img
            src={logo}
            alt="JSE Engineering Logo"
            className="logo-image"
            loading="eager"
            fetchPriority="high"
            width="180"
            height="60"
          />
          <span className="logo-text">JSE Engineering <span className="logo-subtext">Pvt Ltd</span></span>
        </Link>

        <button
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle Navigation"
        >
          <span className="bar bar-1"></span>
          <span className="bar bar-2"></span>
          <span className="bar bar-3"></span>
        </button>

        <nav className={`nav-menu ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <Link to="/" className={`nav-link ${isActive("/") ? "active" : ""}`} onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </Link>

          <div
            className={`nav-link dropdown ${isActive("/services") ? "active" : ""}`}
            onMouseEnter={handleServicesMouseEnter}
            onMouseLeave={handleServicesMouseLeave}
          >
            <span>Services</span>
            {servicesDropdown && (
              <div
                className="dropdown-menu"
                onMouseEnter={handleServicesMouseEnter}
                onMouseLeave={handleServicesMouseLeave}
              >
                {/* MEP Engineering - Direct Link */}
                <Link to="/services/design/mep-design" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>
                  MEP Engineering
                </Link>

                <Link to="/services/design/architectural-bim" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>
                  Architectural BIM
                </Link>

                <Link to="/services/design/structural" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>
                  Structural Engineering
                </Link>

                <Link to="/services/design/steel-structure-detailing" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>
                  Steel Structure Detailing
                </Link>

                <Link to="/services/infrastructural-services" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>
                  Infrastructural services
                </Link>

                <Link to="/services/virtual-team" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>
                  Virtual Team for Hire
                </Link>

                <Link
                  to="/services/secondment-team"
                  className="dropdown-item"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Secondment Team
                </Link>
              </div>
            )}
          </div>

          <Link to="/portfolio" className={`nav-link ${isActive("/portfolio") ? "active" : ""}`} onClick={() => setIsMobileMenuOpen(false)}>
            Portfolio
          </Link>

          <div
            className={`nav-link dropdown ${isActive("/internship") ? "active" : ""}`}
            onMouseEnter={handleInternshipMouseEnter}
            onMouseLeave={handleInternshipMouseLeave}
          >
            <Link to="/internship" className="nav-link-text" style={{ color: 'inherit', textDecoration: 'none' }} onClick={() => setIsMobileMenuOpen(false)}>
              Internship
            </Link>
            {internshipDropdown && (
              <div
                className="dropdown-menu"
                onMouseEnter={handleInternshipMouseEnter}
                onMouseLeave={handleInternshipMouseLeave}
              >
                <Link to="/internship" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>
                  Engineering
                </Link>
                <Link to="/internship/diploma" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>
                  Diploma
                </Link>
              </div>
            )}
          </div>

          <Link to="/career" className={`nav-link ${isActive("/career") ? "active" : ""}`} onClick={() => setIsMobileMenuOpen(false)}>
            Career
          </Link>

          <Link to="/#contact-form" className={`nav-link cta-button ${isActive("/contact") ? "active" : ""}`} onClick={() => setIsMobileMenuOpen(false)}>
            Contact Us
          </Link>
        </nav >
      </div >
    </header >
  );
};

export default Header;

