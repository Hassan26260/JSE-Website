import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo/LOGO.png';
import threadsLogo from '../assets/Logo/threads.png';

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

                    {/* Contact Info Below Logo */}
                    <div className="footer-brand-contact" style={{ marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#94a3b8', fontSize: '0.85rem' }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                            <span>admin@jseeng.com</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#94a3b8', fontSize: '0.85rem' }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" />
                            </svg>
                            <span>044 - 4261 1180</span>
                        </div>
                    </div>

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
                            <img src={threadsLogo} alt="Threads" style={{ width: '20px', height: '20px', objectFit: 'contain', filter: 'invert(1)' }} />
                        </a>

                        {/* YouTube */}
                        <a href="https://www.youtube.com/@JSEEngineeringPvtLtd" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="YouTube">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                            </svg>
                        </a>
                    </div>

                </div>

                {/* Column 1 */}
                <div className="footer-col">


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
                <div className="footer-col" style={{ flexGrow: 1.5 }}> {/* Increase width for 2 columns */}
                    <div className="footer-group">
                        <h4 className="footer-heading">Industries / Sectors</h4>
                        <ul className="footer-links industries-list">
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

            {/* Address Grid Section (Single Row) */}
            <div className="footer-addresses-section">

                {/* Unified Address Grid - 6 Columns */}
                <div className="footer-addresses-grid compact-grid">

                    {/* India Group */}
                    <div className="address-group-wrapper india-wrapper">
                        <div className="footer-region-label">India</div>

                        {/* 1. Chennai */}
                        <div className="footer-address-block">
                            <h4 className="footer-address-title">Chennai</h4>
                            <p className="footer-address-text">
                                4th Floor, Karuna Conquest IT Park,<br />
                                Ambattur Industrial Estate,<br />

                                Chennai - 600058,<br />
                                Tamil Nadu
                            </p>
                        </div>
                        {/* 2. Tirunelveli */}
                        <div className="footer-address-block">
                            <h4 className="footer-address-title">Tirunelveli</h4>
                            <p className="footer-address-text">
                                Nellai City Centre Building,<br />
                                Thiruvanthapuram Road,<br />
                                Tirunelveli - 627002,<br />
                                Tamil Nadu
                            </p>
                        </div>
                        {/* 3. Trichy */}
                        <div className="footer-address-block">
                            <h4 className="footer-address-title">Trichy</h4>
                            <p className="footer-address-text">
                                1st Floor, Chintha Tower,<br />
                                Cantonment,<br />
                                Tiruchirappalli - 620001,<br />
                                Tamil Nadu
                            </p>
                        </div>
                        {/* 4. Visakhapatnam */}
                        <div className="footer-address-block">
                            <h4 className="footer-address-title">Visakhapatnam</h4>
                            <p className="footer-address-text">
                                Pravilika Residency, 1st Floor,<br />
                                Central Library Road, Seethampeta,<br />
                                Visakhapatnam - 530016,<br />
                                Andhra Pradesh
                            </p>
                        </div>
                    </div>

                    {/* Separator / Spacer */}
                    <div className="address-group-divider"></div>

                    {/* Overseas Group */}
                    <div className="address-group-wrapper overseas-wrapper">
                        <div className="footer-region-label">Overseas</div>

                        {/* 5. Dubai */}
                        <div className="footer-address-block">
                            <h4 className="footer-address-title">Dubai</h4>
                            <p className="footer-address-text">
                                GREENCO ELECTRO MECHANICAL WORKS LLC<br />
                                MATEENA ST, DEIRA, DUBAI<br />
                                TEL : 00971-4-3920850<br />
                                MOB : 00971-50-2389353<br />
                                Email : <a href="mailto:greenco1@eim.ae">greenco1@eim.ae</a><br />
                                <a href="http://www.greencomep.com" target="_blank" rel="noopener noreferrer">www.greencomep.com</a>
                            </p>
                        </div>
                        {/* 6. Australia */}
                        <div className="footer-address-block">
                            <h4 className="footer-address-title">Australia</h4>
                            <p className="footer-address-text">
                                2/22 John Street, Balwyn,<br />
                                Vic 3103, Australia<br />
                                TEL : +61 0473562928<br />
                                Email : <a href="mailto:justin@jseeng.in">justin@jseeng.in</a>
                            </p>
                        </div>
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
