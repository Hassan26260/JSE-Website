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
                        <img src={logo} alt="JSE Engineering" className="footer-logo" loading="lazy" />
                    </Link>
                    {/* Socials */}
                    <div className="footer-socials">
                        {/* Facebook */}
                        <a href="https://www.facebook.com/people/JSE-Engineering-Private-Limited/61566541223516/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                        </a>

                        {/* LinkedIn */}
                        <a href="https://www.linkedin.com/company/jseengineeringpvtltd/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                <rect x="2" y="9" width="4" height="12"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                        </a>

                        {/* Instagram */}
                        <a href="https://www.instagram.com/jse_engineering_pvt.ltd?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                        </a>

                        {/* Threads */}
                        <a href="https://www.threads.net/@jse_engineering_pvt.ltd" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Threads">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 2a10 10 0 1 0 10 10 10 10 0 0 0-10-10z"></path>
                                <path d="M14.5 9a2.5 2.5 0 0 0-5 0v6a2.5 2.5 0 0 0 5 0"></path>
                                <path d="M12 17a5 5 0 0 1-5-5"></path>
                            </svg>
                        </a>

                        {/* YouTube */}
                        <a href="https://www.youtube.com/@JSEEngineeringPvtLtd" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="YouTube">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="white"></polygon>
                            </svg>
                        </a>
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
                            <li><Link to="/who-we-are" className="footer-link">Who We Are</Link></li>
                            <li><Link to="/vision-mission" className="footer-link">Our Vision & Mission</Link></li>
                            <li><Link to="/history" className="footer-link">Our History</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Column 2 */}
                <div className="footer-col">

                    <div className="footer-group">
                        <h4 className="footer-heading">Resources</h4>
                        <ul className="footer-links">
                            <li><Link to="/blog" className="footer-link">JSE Blog</Link></li>
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

            {/* Address Grid Section */}
            <div className="footer-addresses-section">
                <div className="footer-addresses-container">
                    {/* Block 1: Overseas (Dubai) */}
                    <div className="footer-address-block">
                        <h4 className="footer-address-title">Overseas</h4>
                        <p className="footer-address-text">
                            <strong>GREENCO ELECTRO MECHANICAL WORKS LLC</strong><br />
                            PO BOX 81323 116, AL MULLA 1 BUILDING,<br />
                            MATEENA ST, DEIRA, DUBAI<br />
                            TEL : 00971-4-3920850<br />
                            MOB : 00971-50-2389353<br />
                            Email : <a href="mailto:greenco1@eim.ae">greenco1@eim.ae</a><br />
                            <a href="http://www.greencomep.com" target="_blank" rel="noopener noreferrer">www.greencomep.com</a>
                        </p>
                    </div>

                    {/* Block 2: Our Academy */}
                    <div className="footer-address-block">
                        <h4 className="footer-address-title">Our Academy</h4>
                        <p className="footer-address-text">
                            <a href="http://www.jseacademy.com" target="_blank" rel="noopener noreferrer">www.jseacademy.com</a><br />
                            044 - 4261 1180<br />
                            044 - 4261 2769
                        </p>
                    </div>

                    {/* Block 3: TamilNadu (Chennai) */}
                    <div className="footer-address-block">
                        <h4 className="footer-address-title">TamilNadu (Head Office)</h4>
                        <p className="footer-address-text">
                            4th Floor, Karuna Conquest IT Park,<br />
                            No. 7 MTH Road, Sai Nagar,<br />
                            Ambattur Industrial Estate,<br />
                            Chennai - 600058<br />
                            <br />
                            <strong>JSE ENGINEERING PVT LTD</strong><br />
                            <a href="mailto:jobs@jseeng.in">jobs@jseeng.in</a><br />
                            <a href="mailto:admin@jseeng.com">admin@jseeng.com</a>
                        </p>
                    </div>

                    {/* Block 4: Visakhapatnam */}
                    <div className="footer-address-block">
                        <h4 className="footer-address-title">Andhra Pradesh</h4>
                        <p className="footer-address-text">
                            Pravilika Residency, 1st Floor,<br />
                            Near Sri Krishna Vidya Mandar,<br />
                            Central Library Road, Seethampeta,<br />
                            Visakhapatnam - 530016
                        </p>
                    </div>

                    {/* Block 5: Tirunelveli */}
                    <div className="footer-address-block">
                        <h4 className="footer-address-title">Tirunelveli</h4>
                        <p className="footer-address-text">
                            Nellai City Centre Building,<br />
                            Thiruvanthapuram Road,<br />
                            Near Palayamkottai Bus Stand,<br />
                            Tirunelveli - 627002
                        </p>
                    </div>

                    {/* Block 6: Trichy */}
                    <div className="footer-address-block">
                        <h4 className="footer-address-title">Trichy</h4>
                        <p className="footer-address-text">
                            1st Floor, Chintha Tower,<br />
                            No. 8G, 7C, Williams Road,<br />
                            Cantonment,<br />
                            Tiruchirappalli - 620001
                        </p>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom-container">
                <div className="footer-bottom">
                    <p className="copyright">&copy; {new Date().getFullYear()} JSE Engineering. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
