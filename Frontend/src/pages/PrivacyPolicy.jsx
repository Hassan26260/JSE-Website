import React from 'react';
import '../styles/PrivacyPolicy.css';

const PrivacyPolicy = () => {
    return (
        <div className="privacy-page">
            {/* Hero Section */}
            <section className="privacy-hero">
                <div className="privacy-hero-content">
                    <div className="privacy-breadcrumbs">
                        Home &gt; <span>Privacy Policy</span>
                    </div>
                    <h1 className="privacy-title">Privacy Policy</h1>
                </div>
            </section>

            {/* Content Section */}
            <section className="privacy-content-section">
                <div className="privacy-container">

                    {/* Intro Section */}
                    <div className="privacy-intro-box">
                        <h2 className="privacy-intro-title">We Are 'Leaders in Consulting Engineering and Architecture World'</h2>
                        <p className="privacy-intro-text">
                            At JSE Engineering Pvt Ltd (hereafter referred to as "JSE"), we are committed to safeguarding the privacy of our clients, partners, and users. This Privacy Policy outlines how we collect, use, protect, and share your personal and project-related information across all our branches and services. By using our website or services, you agree to the practices described in this policy.
                        </p>
                    </div>

                    <div className="privacy-separator"></div>

                    {/* Split Layout Rows */}

                    {/* 1. Information We Collect */}
                    <div className="privacy-row">
                        <div className="privacy-col-left">
                            <h3>1. Information We Collect</h3>
                        </div>
                        <div className="privacy-col-right">
                            <p>We collect various types of information from our clients and users to provide and improve our services:</p>
                            <ul className="privacy-list-styled">
                                <li><strong>Personal Identification Information:</strong> Name, email address, contact information, company details, and other related data.</li>
                                <li><strong>Project-Related Information:</strong> Technical drawings, 3D models, BIM files, and other proprietary materials are shared with us for project execution.</li>
                                <li><strong>Website Usage Information:</strong> IP address, browser type, access times, and pages visited, collected through cookies and similar technologies.</li>
                            </ul>
                        </div>
                    </div>

                    {/* 2. How We Use */}
                    <div className="privacy-row">
                        <div className="privacy-col-left">
                            <h3>2. How We Use Your Information</h3>
                        </div>
                        <div className="privacy-col-right">
                            <p>JSE uses your personal and project-related information for the following purposes:</p>
                            <ul className="privacy-list-styled">
                                <li><strong>Service Provision:</strong> To deliver BIM services, architectural design, HVAC, plumbing, MEP, electrical system design, Tekla-based steel structure detailing, and other related engineering solutions.</li>
                                <li><strong>Client Communication:</strong> To provide project updates, technical support, and respond to inquiries.</li>
                                <li><strong>Project Execution:</strong> To collaborate with engineers, contractors, and stakeholders to fulfill project requirements.</li>
                                <li><strong>Internal Research:</strong> To improve our services, optimize client experience, and enhance project management practices.</li>
                            </ul>
                        </div>
                    </div>

                    {/* 3. Protection */}
                    <div className="privacy-row">
                        <div className="privacy-col-left">
                            <h3>3. Protection of Project Models and Files</h3>
                        </div>
                        <div className="privacy-col-right">
                            <p>We understand the importance of safeguarding your intellectual property and project data. JSE ensures the following protections:</p>
                            <ul className="privacy-list-styled">
                                <li><strong>Data Encryption:</strong> All project models, technical drawings, and sensitive files are encrypted during transfer and storage.</li>
                                <li><strong>Secure File Management:</strong> Files and models are stored in secure servers with restricted access, and only authorized personnel can access them.</li>
                                <li><strong>Confidentiality Agreements:</strong> All JSE employees, consultants, and contractors are bound by confidentiality agreements to ensure the protection of client data.</li>
                                <li><strong>Backup and Recovery:</strong> Regular data backups are maintained to ensure the integrity and availability of project files, ensuring that no data is lost in case of technical failures.</li>
                            </ul>
                        </div>
                    </div>

                    {/* 4. Sharing */}
                    <div className="privacy-row">
                        <div className="privacy-col-left">
                            <h3>4. Sharing of Information</h3>
                        </div>
                        <div className="privacy-col-right">
                            <p>We do not sell or share your personal or project-related information with third parties except as required for:</p>
                            <ul className="privacy-list-styled">
                                <li><strong>Project Execution:</strong> Sharing relevant information with project partners, contractors, or consultants directly involved in your project, always under confidentiality agreements.</li>
                                <li><strong>Legal Compliance:</strong> If required by law or legal process to disclose information.</li>
                            </ul>
                        </div>
                    </div>

                    {/* 5. How We Protect */}
                    <div className="privacy-row">
                        <div className="privacy-col-left">
                            <h3>5. How We Protect Your Information</h3>
                        </div>
                        <div className="privacy-col-right">
                            <p>We take the security of your data seriously. JSE implements industry-standard measures to protect the integrity of your personal information and project data, including:</p>
                            <ul className="privacy-list-styled">
                                <li><strong>Data Security Protocols:</strong> Regular audits, firewalls, and cybersecurity systems to prevent unauthorized access or data breaches.</li>
                                <li><strong>Restricted Access:</strong> Limiting access to sensitive information only to those employees who need it to perform their work duties.</li>
                                <li><strong>Regular Security Reviews:</strong> Continuous assessment and improvement of security protocols.</li>
                            </ul>
                        </div>
                    </div>

                    {/* 6. Data Retention */}
                    <div className="privacy-row">
                        <div className="privacy-col-left">
                            <h3>6. Data Retention</h3>
                        </div>
                        <div className="privacy-col-right">
                            <p>We retain your personal and project-related data only as long as necessary to fulfill the purposes for which it was collected or as required by applicable laws. Once the data is no longer needed, it will be securely deleted.</p>
                        </div>
                    </div>

                    {/* 7. Your Rights */}
                    <div className="privacy-row">
                        <div className="privacy-col-left">
                            <h3>7. Your Rights</h3>
                        </div>
                        <div className="privacy-col-right">
                            <p>As a client or user, you have the right to:</p>
                            <ul className="privacy-list-styled">
                                <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
                                <li><strong>Correction:</strong> Request corrections to any inaccuracies in your data.</li>
                                <li><strong>Deletion:</strong> Request deletion of your personal data, subject to legal retention requirements.</li>
                                <li><strong>Data Portability:</strong> Request a copy of your data in a structured, machine-readable format.</li>
                            </ul>
                        </div>
                    </div>

                    {/* 8. Cross-Border */}
                    <div className="privacy-row">
                        <div className="privacy-col-left">
                            <h3>8. Cross-Border Data Transfers</h3>
                        </div>
                        <div className="privacy-col-right">
                            <p>JSE operates across several locations, including <strong>Dubai, Chennai, Australia, Vizag, and Tirunelveli</strong>. Data may be transferred and processed outside your country of residence. We ensure all data transferred internationally is protected in line with applicable privacy laws and regulations.</p>
                        </div>
                    </div>

                    {/* 9. Cookies */}
                    <div className="privacy-row">
                        <div className="privacy-col-left">
                            <h3>9. Cookies</h3>
                        </div>
                        <div className="privacy-col-right">
                            <p>Our website uses cookies to improve user experience, analyze traffic, and provide targeted advertisements. You can choose to accept or decline cookies through your browser settings.</p>
                        </div>
                    </div>

                    {/* 10. Changes */}
                    <div className="privacy-row">
                        <div className="privacy-col-left">
                            <h3>10. Changes to This Privacy Policy</h3>
                        </div>
                        <div className="privacy-col-right">
                            <p>JSE reserves the right to modify or update this Privacy Policy at any time. Any significant changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.</p>
                        </div>
                    </div>

                    {/* 11. Contact Us */}
                    <div className="privacy-row">
                        <div className="privacy-col-left">
                            <h3>11. Contact Us</h3>
                        </div>
                        <div className="privacy-col-right">
                            <p>If you have any questions about this Privacy Policy or how your information is handled, feel free to contact our technical team.</p>

                            <div className="privacy-contact-box">
                                <h4>JSE Engineering Pvt Ltd</h4>

                                <div className="contact-section">
                                    <h5>Email:</h5>
                                    <ul>
                                        <li>Australia: <a href="mailto:justin@jseeng.in">justin@jseeng.in</a></li>
                                        <li>UAE: <a href="mailto:greenco1@emirates.net.ae">greenco1@emirates.net.ae</a></li>
                                        <li>Chennai: <a href="mailto:jse@jseeng.com">jse@jseeng.com</a></li>
                                    </ul>
                                </div>

                                <div className="contact-section">
                                    <h5>Phone:</h5>
                                    <ul>
                                        <li>Australia: 00971-4-4579150</li>
                                        <li>Chennai: 044-4261 1180</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default PrivacyPolicy;
