import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Header.css";
import logo from "../assets/Logo/LOGO.png";

const Header = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [designServicesDropdown, setDesignServicesDropdown] = useState(false);
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
  };

  const handleServicesMouseEnter = () => {
    setServicesDropdown(true);
  };

  const handleServicesMouseLeave = () => {
    setServicesDropdown(false);
    setDesignServicesDropdown(false);
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
            fetchpriority="high"
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
                <Link
                  to="/services/virtual-team"
                  className="dropdown-item"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Virtual Team for Hire
                </Link>
                <div
                  className="dropdown-item has-submenu"
                  onMouseEnter={handleDesignServicesMouseEnter}
                  onMouseLeave={handleDesignServicesMouseLeave}
                >
                  <span>Design Services</span>
                  {designServicesDropdown && (
                    <div
                      className="submenu"
                      onMouseEnter={handleDesignServicesMouseEnter}
                      onMouseLeave={handleDesignServicesMouseLeave}
                    >
                      <Link to="/services/design/mep-design" className="submenu-item" onClick={() => setIsMobileMenuOpen(false)}>
                        MEP Design
                      </Link>
                      <Link to="/services/design/plumbing-public-health" className="submenu-item" onClick={() => setIsMobileMenuOpen(false)}>
                        Plumbing & Public Health
                      </Link>
                      <Link to="/services/design/hvac-design" className="submenu-item" onClick={() => setIsMobileMenuOpen(false)}>
                        HVAC Design
                      </Link>
                      <Link to="/services/design/firefighting-design" className="submenu-item" onClick={() => setIsMobileMenuOpen(false)}>
                        Firefighting Design
                      </Link>
                      <Link to="/services/design/bim-modelling" className="submenu-item" onClick={() => setIsMobileMenuOpen(false)}>
                        BIM Modelling
                      </Link>
                      <Link to="/services/design/electrical-system-design" className="submenu-item" onClick={() => setIsMobileMenuOpen(false)}>
                        Electrical System Design
                      </Link>
                      <Link to="/services/design/elv" className="submenu-item" onClick={() => setIsMobileMenuOpen(false)}>
                        Extra Low Voltage
                      </Link>
                      <Link to="/services/design/architectural-bim" className="submenu-item" onClick={() => setIsMobileMenuOpen(false)}>
                        Architectural BIM
                      </Link>
                      <Link to="/services/design/steel-structure-detailing" className="submenu-item" onClick={() => setIsMobileMenuOpen(false)}>
                        Steel Structure Detailing
                      </Link>
                    </div>
                  )}
                </div>
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
                <Link to="/internship/civil-engineering" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>
                  Civil Engineering
                </Link>
                <Link to="/internship/mechanical-engineering" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>
                  Mechanical Engineering
                </Link>
                <Link to="/internship/electrical-electronics-engineering" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>
                  Electrical & Electronics Engineering (EEE)
                </Link>
                <Link to="/internship/electronics-communication-engineering" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>
                  Electronics & Communication Engineering (ECE)
                </Link>
                <Link to="/internship/mechatronics-engineering" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>
                  Mechatronics Engineering
                </Link>
                <Link to="/internship/architectural" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>
                  Architectural (B.Arch)
                </Link>
                <Link to="/internship/structural-environmental-engineering" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>
                  Structural & Environmental Engineering
                </Link>
                <Link to="/internship/electrical-architectural" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>
                  Electrical & Architectural
                </Link>
                <Link to="/internship/other-internships" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>
                  Other Departments
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
        </nav>
      </div>
    </header>
  );
};

export default Header;

