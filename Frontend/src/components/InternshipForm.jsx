import { useState } from 'react';
import '../styles/Contact.css'; // Re-use contact form core modal styling classes
import '../styles/Internship.css'; // Access the specific .internship-form row overrides

const InternshipForm = () => {
    // Form State
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        mobile: '',
        email: '',
        address: '',
        college: '',
        department: '',
        year: '',
        branch: '',
        comments: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Internship Application Submitted:", formData);
        alert("Internship Application Submitted! (This is a frontend demo)");
        // Backend logic here (send to hr@jseeng.com)
    };

    return (
        <div className="contact-form-container internship-modal-override" style={{ padding: '2rem' }}>
            <div className="contact-form-header">
                <span className="contact-form-subtitle">Kickstart Your Career</span>
                <h2 className="contact-form-title">Join Our 100-Days<br />Internship Program!</h2>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#94a3b8', marginTop: '1rem', fontSize: '0.9rem' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    <span>hr@jseeng.com</span>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="internship-form">

                {/* Your Name & Age Row */}
                <div className="form-row-2">
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
                        <label>Your Age*</label>
                        <input
                            type="number"
                            name="age"
                            value={formData.age}
                            onChange={handleInputChange}
                            required
                            className="form-input-line"
                        />
                    </div>
                </div>

                {/* Mobile & Email Row */}
                <div className="form-row-2">
                    <div className="form-group">
                        <label>Your Contact Number*</label>
                        <input
                            type="tel"
                            name="mobile"
                            value={formData.mobile}
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
                </div>

                {/* Residential Address */}
                <div className="form-group">
                    <label>Residential Address*</label>
                    <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                        rows="2"
                        className="form-input-line"
                    ></textarea>
                </div>

                {/* College */}
                <div className="form-group">
                    <label>Name of College / University*</label>
                    <input
                        type="text"
                        name="college"
                        value={formData.college}
                        onChange={handleInputChange}
                        required
                        className="form-input-line"
                    />
                </div>

                {/* Department & Year Row */}
                <div className="form-row-2">
                    <div className="form-group">
                        <label>Department / Major*</label>
                        <input
                            type="text"
                            name="department"
                            value={formData.department}
                            onChange={handleInputChange}
                            required
                            className="form-input-line"
                        />
                    </div>
                    <div className="form-group">
                        <label>Year of completion*</label>
                        <input
                            type="text"
                            name="year"
                            value={formData.year}
                            onChange={handleInputChange}
                            required
                            className="form-input-line"
                        />
                    </div>
                </div>

                {/* Branch Dropdown */}
                <div className="form-group">
                    <label>Branch You Wish To Join*</label>
                    <select
                        name="branch"
                        value={formData.branch}
                        onChange={handleInputChange}
                        required
                        className="form-input-line"
                    >
                        <option value="" disabled>Select a Branch</option>
                        <option value="Chennai" style={{ color: 'black' }}>Chennai</option>
                        <option value="Tirunelveli" style={{ color: 'black' }}>Tirunelveli</option>
                        <option value="Trichy" style={{ color: 'black' }}>Trichy</option>
                        <option value="Vizag" style={{ color: 'black' }}>Vizag</option>
                    </select>
                </div>

                {/* Comments */}
                <div className="form-group">
                    <label>Any Comments</label>
                    <textarea
                        name="comments"
                        value={formData.comments}
                        onChange={handleInputChange}
                        rows="3"
                        className="form-input-line"
                    ></textarea>
                </div>

                <div className="form-submit-wrapper" style={{ marginTop: '2rem' }}>
                    <button type="submit" className="contact-submit-btn" style={{ width: '100%', padding: '1rem' }}>
                        Submit Application
                    </button>
                    <div className="btn-glow"></div>
                </div>

            </form>
        </div>
    );
};

export default InternshipForm;
