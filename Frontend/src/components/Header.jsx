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
        </Link>

        <nav className="nav-menu">
          <Link to="/" className={`nav-link ${isActive("/") ? "active" : ""}`}>
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
                      <Link to="/services/design/architectural-bim" className="submenu-item">
                        Architectural BIM
                      </Link>
                      <Link to="/services/design/steel-structure-detailing" className="submenu-item">
                        Steel Structure Detailing
                      </Link>
                      <Link to="/services/design/mep-design" className="submenu-item">
                        MEP Design
                      </Link>
                      <Link to="/services/design/plumbing-public-health" className="submenu-item">
                        Plumbing & Public Health
                      </Link>
                      <Link to="/services/design/hvac-design" className="submenu-item">
                        HVAC Design
                      </Link>
                      <Link to="/services/design/firefighting-design" className="submenu-item">
                        Firefighting Design
                      </Link>
                      <Link to="/services/design/bim-modelling" className="submenu-item">
                        BIM Modelling
                      </Link>
                      <Link to="/services/design/electrical-system-design" className="submenu-item">
                        Electrical System Design
                      </Link>
                      <Link to="/services/design/elv" className="submenu-item">
                        ELV (Extra Low Voltage)
                      </Link>
                    </div>
                  )}
                </div>
                <Link
                  to="/services/secondment-team"
                  className="dropdown-item"
                >
                  Secondment Team
                </Link>
              </div>
            )}
          </div>

          <Link to="/portfolio" className={`nav-link ${isActive("/portfolio") ? "active" : ""}`}>
            Portfolio
          </Link>

          <div
            className={`nav-link dropdown ${isActive("/internship") ? "active" : ""}`}
            onMouseEnter={handleInternshipMouseEnter}
            onMouseLeave={handleInternshipMouseLeave}
          >
            <Link to="/internship" className="nav-link-text" style={{ color: 'inherit', textDecoration: 'none' }}>
              Internship
            </Link>
            {internshipDropdown && (
              <div
                className="dropdown-menu"
                onMouseEnter={handleInternshipMouseEnter}
                onMouseLeave={handleInternshipMouseLeave}
              >
                <Link to="/internship/civil-engineering" className="dropdown-item">
                  Civil Engineering
                </Link>
                <Link to="/internship/mechanical-engineering" className="dropdown-item">
                  Mechanical Engineering
                </Link>
                <Link to="/internship/electrical-electronics-engineering" className="dropdown-item">
                  Electrical & Electronics Engineering (EEE)
                </Link>
                <Link to="/internship/electronics-communication-engineering" className="dropdown-item">
                  Electronics & Communication Engineering (ECE)
                </Link>
                <Link to="/internship/mechatronics-engineering" className="dropdown-item">
                  Mechatronics Engineering
                </Link>
                <Link to="/internship/architectural" className="dropdown-item">
                  Architectural (B.Arch)
                </Link>
                <Link to="/internship/structural-environmental-engineering" className="dropdown-item">
                  Structural & Environmental Engineering
                </Link>
              </div>
            )}
          </div>

          <Link to="/career" className={`nav-link ${isActive("/career") ? "active" : ""}`}>
            Career
          </Link>

          <Link to="/contact" className={`nav-link cta-button ${isActive("/contact") ? "active" : ""}`}>
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

