import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo/LOGO.png';

import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* Brand Column */}
                <div className="footer-brand">
                    <Link to="/">
                        <img src={logo} alt="JSE Engineering" className="footer-logo" loading="eager" />
                    </Link>
                    <p className="footer-desc">
                        Transforming visions into reality with innovative engineering solutions.
                        Building a sustainable future together.
                    </p>

                    {/* Dummy Socials */}
                    <div className="footer-socials">
                        <a href="#" className="social-icon" aria-label="Facebook">F</a>
                        <a href="#" className="social-icon" aria-label="Twitter">T</a>
                        <a href="#" className="social-icon" aria-label="LinkedIn">in</a>
                        <a href="#" className="social-icon" aria-label="Instagram">IG</a>
                    </div>
                </div>

                {/* Column 1 */}
                <div className="footer-col">
                    <div className="footer-group">
                        <h4 className="footer-heading">Business Types</h4>
                        <ul className="footer-links">
                            <li><Link to="/services/design" className="footer-link">Design Engineering Projects</Link></li>
                        </ul>
                    </div>

                    <div className="footer-group">
                        <h4 className="footer-heading">Discover JSE</h4>
                        <ul className="footer-links">
                            <li><Link to="/about" className="footer-link">Who We Are</Link></li>
                            <li><Link to="/vision" className="footer-link">Our Vision & Mission</Link></li>
                            <li><Link to="/history" className="footer-link">Our History</Link></li>
                            <li><Link to="/leadership" className="footer-link">Our Leadership</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Column 2 */}
                <div className="footer-col">
                    <div className="footer-group">
                        <h4 className="footer-heading">How We Work</h4>
                        <ul className="footer-links">
                            <li><Link to="/solutions" className="footer-link">Our Solutions</Link></li>
                            <li><Link to="/partnership" className="footer-link">Partnership & Collaboration</Link></li>
                        </ul>
                    </div>

                    <div className="footer-group">
                        <h4 className="footer-heading">Resources</h4>
                        <ul className="footer-links">
                            <li><Link to="/blog" className="footer-link">JSE Blog</Link></li>
                            <li><Link to="/brochures" className="footer-link">Brochures</Link></li>
                            <li><Link to="/success-stories" className="footer-link">Success Stories</Link></li>
                            <li><Link to="/videos" className="footer-link">BIM Videos</Link></li>
                            <li><Link to="/faq" className="footer-link">FAQ</Link></li>
                            <li><Link to="/privacy-policy" className="footer-link">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Column 3 */}
                <div className="footer-col">
                    <div className="footer-group">
                        <h4 className="footer-heading">Industries / Sectors</h4>
                        <ul className="footer-links">
                            <li><Link to="/industries/healthcare" className="footer-link">Healthcare</Link></li>
                            <li><Link to="/industries/architecture" className="footer-link">Architecture</Link></li>
                            <li><Link to="/industries/builders" className="footer-link">Builders</Link></li>
                            <li><Link to="/industries/general-contracting" className="footer-link">General Contracting</Link></li>
                            <li><Link to="/industries/engineering" className="footer-link">Engineering</Link></li>
                            <li><Link to="/industries/educational" className="footer-link">Educational</Link></li>
                            <li><Link to="/industries/industrial" className="footer-link">Industrial Infrastructure</Link></li>
                            <li><Link to="/industries/manufacturing" className="footer-link">Manufacturing</Link></li>
                            <li><Link to="/industries/skyscrapers" className="footer-link">Skyscrapers</Link></li>
                        </ul>
                    </div>
                </div>

            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom-container">
                <div className="footer-bottom">
                    <p className="copyright">&copy; {new Date().getFullYear()} JSE Engineering. All rights reserved.</p>
                    <div className="footer-legal-links">
                        <Link to="/terms" className="legal-link">Terms of Service</Link>
                        <Link to="/privacy-policy" className="legal-link">Privacy Policy</Link>
                        <Link to="/cookies" className="legal-link">Cookie Policy</Link>
                        <Link to="/sitemap" className="legal-link">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
