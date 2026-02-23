import { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Internship.css'; // Reusing styles (ensure these are globally available or imported here)

const ContactForm = () => {
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
        console.log('Form submitted:', formData);
        // Add actual submission logic here
    };

    const slideInLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
    };

    const slideInRight = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="form-container">
            {/* Left Side: Title & Info */}
            <motion.div
                className="form-info-side"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={slideInLeft}
            >
                <h2 className="form-heading">Start Your Project</h2>
                <p className="form-subtext">
                    Ready to optimize your workflow with JSE's Engineering services? Fill out the details and we'll get in touch with you shortly.
                </p>

                <div className="form-contact-details">
                    <p className="form-email">admin@jseeng.com</p>
                </div>

                <div className="form-socials">
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
                        {/* We use an inline outline logo since importing the image might break relative path inside Form component without setup */}
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="none"></path>
                            <path d="M12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5Z" fill="none"></path>
                            <path d="M15.5 10.5L12 14" stroke="currentColor" strokeWidth="2"></path>
                        </svg>
                    </a>

                    {/* YouTube */}
                    <a href="https://www.youtube.com/@JSEEngineeringPvtLtd" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="YouTube">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                        </svg>
                    </a>
                </div>
            </motion.div>

            {/* Right Side: Form */}
            <motion.div
                className="form-input-side"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={slideInRight}
            >
                <form onSubmit={handleSubmit} className="internship-form">
                    <div className="form-group">
                        <label>Your Name*</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="form-input-line"
                        />
                    </div>

                    <div className="form-group">
                        <label>Your Mail ID*</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="form-input-line"
                        />
                    </div>

                    <div className="form-group">
                        <label>Message*</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            rows="4"
                            required
                            className="form-input-line"
                        ></textarea>
                    </div>

                    <button type="submit" className="form-submit-btn">Submit</button>
                </form>
            </motion.div>
        </div>
    );
};

export default ContactForm;
