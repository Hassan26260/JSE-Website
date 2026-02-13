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
                    <p className="form-email">info@jseengineering.com</p>
                </div>

                <div className="form-socials">
                    <div className="social-circle">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                    </div>
                    <div className="social-circle">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                        </svg>
                    </div>
                    <div className="social-circle">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                    </div>
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
