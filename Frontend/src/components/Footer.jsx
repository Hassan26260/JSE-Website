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
                            {/* Updated Threads Icon (resembling @ symbol loop) */}
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12.0006 2.05371C6.49508 2.05371 2.04419 6.51656 2.04419 12.0101C2.04419 17.5036 6.49508 21.9665 12.0006 21.9665C16.9295 21.9665 20.9419 18.423 21.8028 13.7388H19.7404C18.9621 17.3195 15.7725 20.0076 12.0006 20.0076C7.57946 20.0076 3.99593 16.4241 3.99593 12.0101C3.99593 7.59616 7.57946 4.01263 12.0006 4.01263C16.3242 4.01263 19.8298 7.42441 19.9922 11.7247C20.0601 13.4398 19.4533 14.8864 18.2721 15.8285C17.0622 16.7915 15.3529 17.0987 13.916 16.5982C13.5186 17.4398 12.7303 17.9715 11.7584 17.9715C10.2223 17.9715 8.94829 16.7323 8.94829 15.1962C8.94829 13.6601 10.2223 12.4209 11.7584 12.4209C12.551 12.4209 13.2507 12.77 13.7299 13.3199C13.8043 12.1691 14.0722 10.9754 14.5456 9.87321C14.7351 9.42971 14.9624 9.02293 15.2285 8.65751C15.8291 7.82869 16.6346 7.39804 17.3917 7.39804C18.7309 7.39804 19.6738 8.09339 20.1983 9.29462C21.0505 11.2384 20.9169 14.2882 19.4891 16.666L21.2042 17.6534C22.6806 15.084 23.1818 11.6961 22.0305 9.05269C21.2588 7.28854 19.7645 5.92209 17.3917 5.92209C16.0371 5.92209 14.717 6.4712 13.626 7.64333C12.4988 6.44781 10.5981 5.51343 8.52875 5.51343C4.94522 5.51343 2.04419 8.41446 2.04419 12.0101C2.04419 15.6058 4.94522 18.5068 8.52875 18.5068C10.7485 18.5068 12.6395 17.3971 13.7668 15.7009C15.6578 16.4892 17.8776 16.0354 19.5103 14.7381C21.143 13.4408 22.0628 11.4589 21.9564 9.01166C21.7374 3.79261 17.3917 0.0537109 12.0006 0.0537109V2.05371ZM11.7584 14.3801C11.3093 14.3801 10.9419 14.0127 10.9419 13.5636C10.9419 13.1145 11.3093 12.7471 11.7584 12.7471C12.2075 12.7471 12.5749 13.1145 12.5749 13.5636C12.5749 14.0127 12.2075 14.3801 11.7584 14.3801Z" />
                            </svg>
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
                                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" />
                                    </svg>
                                    044 - 4261 1180
                                </span><br />
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
