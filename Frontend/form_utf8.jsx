
> -          <form onSubmit={handleSubmit} className="internship-form">
  -
  -            {/* Your Name */}
  -            <div className="form-group">
  -              <label>Your Name*</label>
  -              <input
  -                type="text"
  -                name="name"
  -                value={formData.name}
  -                onChange={handleInputChange}
  -                required
  -                className="form-input-line"
  -              />
  -            </div>
  -
  -            {/* Your Age */}
  -            <div className="form-group">
  -              <label>Your Age*</label>
  -              <input
  -                type="number"
  -                name="age"
  -                value={formData.age}
  -                onChange={handleInputChange}
  -                required
  -                className="form-input-line"
  -              />
  -            </div>
  -
  -            {/* Contact Number */}
  -            <div className="form-group">
  -              <label>Your Contact Number*</label>
  -              <input
  -                type="tel"
  -                name="mobile"
  -                value={formData.mobile}
  -                onChange={handleInputChange}
  -                required
  -                className="form-input-line"
  -              />
  -            </div>
  -
  -            {/* Mail ID */}
  -            <div className="form-group">
  -              <label>Your Mail ID*</label>
  -              <input
  -                type="email"
  -                name="email"
  -                value={formData.email}
  -                onChange={handleInputChange}
  -                required
  -                className="form-input-line"
  -              />
  -            </div>
  -
  -            {/* Residential Address */}
  -            <div className="form-group">
  -              <label>Residential Address*</label>
  -              <textarea
  -                name="address"
  -                value={formData.address}
  -                onChange={handleInputChange}
  -                required
  -                rows="2"
  -                className="form-input-line"
  -              ></textarea>
  -            </div>
  -
  -            {/* College / University */}
  -            <div className="form-group">
  -              <label>Name of College / University*</label>
  -              <input
  -                type="text"
  -                name="college"
  -                value={formData.college}
  -                onChange={handleInputChange}
  -                required
  -                className="form-input-line"
  -              />
  -            </div>
  -
  -            {/* Department / Major */}
  -            <div className="form-group">
  -              <label>Department / Major*</label>
  -              <input
  -                type="text"
  -                name="department"
  -                value={formData.department}
  -                onChange={handleInputChange}
  -                required
  -                className="form-input-line"
  -              />
  -            </div>
  -
  -            {/* Year of Completion */}
  -            <div className="form-group">
  -              <label>Year of completion*</label>
  -              <input
  -                type="text"
  -                name="year"
  -                value={formData.year}
  -                onChange={handleInputChange}
  -                required
  -                className="form-input-line"
  -              />
  -            </div>
  -
  -            {/* Branch Dropdown */}
  -            <div className="form-group">
  -              <label>Branch You Wish To Join*</label>
  -              <select
  -                name="branch"
  -                value={formData.branch}
  -                onChange={handleInputChange}
  -                required
  -                className="form-input-line"
  -              >
  -                <option value="" disabled>Select a Branch</option>
  -                <option value="Chennai" style={{ color: 'black' }}>Chennai</option>
  -                <option value="Tirunelveli" style={{ color: 'black' }}>Tirunelveli</option>
  -                <option value="Trichy" style={{ color: 'black' }}>Trichy</option>
  -                <option value="Vizag" style={{ color: 'black' }}>Vizag</option>
  -              </select>
  -            </div>
  -
  -            {/* Comments */}
  -            <div className="form-group">
  -              <label>Any Comments</label>
  -              <textarea
  -                name="comments"
  -                value={formData.comments}
  -                onChange={handleInputChange}
  -                rows="3"
  -                className="form-input-line"
  -              ></textarea>
  -            </div>
  -
  -            <button type="submit" className="form-submit-btn">Submit</button>
  -
  -          </form>
  -        </div>
  -
  -      </div>
  +      
   
       </div>
     );
  
  commit 33c43738ddfa7940774f7936f6aba59e60dda59e
  Author: Hassan459422 <intern@neuronestai.in>
  Date:   Fri Feb 13 17:37:31 2026 +0530
  
      arigatho
  
  diff --git a/Frontend/src/pages/Internship.jsx b/Frontend/src/pages/Internship.jsx
  index 49d402c..5b85f1a 100644
  --- a/Frontend/src/pages/Internship.jsx
  +++ b/Frontend/src/pages/Internship.jsx
  @@ -2,17 +2,20 @@ import { Link } from "react-router-dom";
   import { useEffect, useRef, useState } from "react";
   import { motion } from "framer-motion";
   import "../styles/Internship.css";
  -import heroGroupImage from "../assets/images-home/internship/enlarging-img.JPG";
  +import heroGroupImage from "../assets/images-home/internship/enlarging-img.jpeg";
   import eligibilityImage from "../assets/images-home/internship/whocanjoin.JPG";
   import hiringImage from "../assets/images-home/internship/hiring.JPG";
   import careerDevImage from "../assets/other/pexels-sora-shimazaki-5926389.jpg";
  +import abroadImage from "../assets/replacement/abroad.JPG"; // New Image
  +import vrImage from "../assets/images-home/virtual.jpeg"; // Fixed Import
   import internVideo from "../assets/images-home/intern-video/1a5cf5c19e1af4f9770f31343bd39fb9_0_14766666.mp4"; // 
Import Video
  -import StickyContact from '../components/StickyContact';
  +// StickyContact import removed
  +import InternshipTimeline from '../components/InternshipTimeline';
   
   const Internship = () => {
     const imageRef = useRef(null);
     const videoRef = useRef(null);
  -  const contactRef = useRef(null);
  +  const formRef = useRef(null);
     const [isPlaying, setIsPlaying] = useState(false);
     const [isFullscreen, setIsFullscreen] = useState(false);
   
  @@ -93,6 +96,18 @@ const Internship = () => {
       return () => window.removeEventListener('scroll', handleScroll);
     }, []);
   
  +  // Force Dark Body Background for this page only
  +  useEffect(() => {
  +    // Save original body style
  +    const originalStyle = window.getComputedStyle(document.body).backgroundColor;
  +    document.body.style.backgroundColor = '#0B1220';
  +
  +    return () => {
  +      // Revert on cleanup
  +      document.body.style.backgroundColor = '';
  +    };
  +  }, []);
  +
     const internships = [
       {
         title: "Civil Engineering",
  @@ -131,13 +146,16 @@ const Internship = () => {
> -            <form onSubmit={handleSubmit} className="internship-form">
  -
  -              {/* Your Name */}
  -              <div className="form-group">
  -                <label>Your Name*</label>
  -                <input
  -                  type="text"
  -                  name="name"
  -                  value={formData.name}
  -                  onChange={handleInputChange}
  -                  required
  -                  className="form-input-line"
  -                />
  -              </div>
  +          <div className="form-socials">
  +            {/* LinkedIn */}
  +            <div className="social-circle">
  +              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
  +                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 
5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 
1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 
2.476v6.759z" />
  +              </svg>
  +            </div>
  +            {/* Facebook */}
  +            <div className="social-circle">
  +              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
  +                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 
1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
  +              </svg>
  +            </div>
  +            {/* Twitter/X */}
  +            <div className="social-circle">
  +              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
  +                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 
21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  +              </svg>
  +            </div>
  +          </div>
  +        </div>
   
  -              {/* Your Age */}
  -              <div className="form-group">
  -                <label>Your Age*</label>
  -                <input
  -                  type="number"
  -                  name="age"
  -                  value={formData.age}
  -                  onChange={handleInputChange}
  -                  required
  -                  className="form-input-line"
  -                />
  -              </div>
  +        {/* Right: The Form */}
  +        <div className="form-input-side">
> +          <form onSubmit={handleSubmit} className="internship-form">
  +
  +            {/* Your Name */}
  +            <div className="form-group">
  +              <label>Your Name*</label>
  +              <input
  +                type="text"
  +                name="name"
  +                value={formData.name}
  +                onChange={handleInputChange}
  +                required
  +                className="form-input-line"
  +              />
  +            </div>
   
  -              {/* Contact Number */}
  -              <div className="form-group">
  -                <label>Your Contact Number*</label>
  -                <input
  -                  type="tel"
  -                  name="mobile"
  -                  value={formData.mobile}
  -                  onChange={handleInputChange}
  -                  required
  -                  className="form-input-line"
  -                />
  -              </div>
  +            {/* Your Age */}
  +            <div className="form-group">
  +              <label>Your Age*</label>
  +              <input
  +                type="number"
  +                name="age"
  +                value={formData.age}
  +                onChange={handleInputChange}
  +                required
  +                className="form-input-line"
  +              />
  +            </div>
   
  -              {/* Mail ID */}
  -              <div className="form-group">
  -                <label>Your Mail ID*</label>
  -                <input
  -                  type="email"
  -                  name="email"
  -                  value={formData.email}
  -                  onChange={handleInputChange}
  -                  required
  -                  className="form-input-line"
  -                />
  -              </div>
  +            {/* Contact Number */}
  +            <div className="form-group">
  +              <label>Your Contact Number*</label>
  +              <input
  +                type="tel"
  +                name="mobile"
  +                value={formData.mobile}
  +                onChange={handleInputChange}
  +                required
  +                className="form-input-line"
  +              />
  +            </div>
   
  -              {/* Residential Address */}
  -              <div className="form-group">
  -                <label>Residential Address*</label>
  -                <textarea
  -                  name="address"
  -                  value={formData.address}
  -                  onChange={handleInputChange}
  -                  required
  -                  rows="2"
  -                  className="form-input-line"
  -                ></textarea>
  -              </div>
  +            {/* Mail ID */}
  +            <div className="form-group">
  +              <label>Your Mail ID*</label>
  +              <input
  +                type="email"
  +                name="email"
  +                value={formData.email}
  +                onChange={handleInputChange}
  +                required
  +                className="form-input-line"
  +              />
  +            </div>
   
  -              {/* College / University */}
  -              <div className="form-group">
  -                <label>Name of College / University*</label>
  -                <input
  -                  type="text"
  -                  name="college"
  -                  value={formData.college}
  -                  onChange={handleInputChange}
  -                  required
  -                  className="form-input-line"
  -                />
  -              </div>
  +            {/* Residential Address */}
  +            <div className="form-group">
  +              <label>Residential Address*</label>
  +              <textarea
  +                name="address"
  +                value={formData.address}
  +                onChange={handleInputChange}
  +                required
  +                rows="2"
  +                className="form-input-line"
  +              ></textarea>
  +            </div>
   
  -              {/* Department / Major */}
  -              <div className="form-group">
  -                <label>Department / Major*</label>
  -                <input
  -                  type="text"
  -                  name="department"
  -                  value={formData.department}
  -                  onChange={handleInputChange}
  -                  required
  -                  className="form-input-line"
  -                />
  -              </div>
  +            {/* College / University */}
  +            <div className="form-group">
  +              <label>Name of College / University*</label>
  +              <input
  +                type="text"
  +                name="college"
  +                value={formData.college}
  +                onChange={handleInputChange}
  +                required
  +                className="form-input-line"
  +              />
  +            </div>
   
  -              {/* Year of Completion */}
  -              <div className="form-group">
  -                <label>Year of completion*</label>
  -                <input
  -                  type="text"
  -                  name="year"
  -                  value={formData.year}
  -                  onChange={handleInputChange}
  -                  required
  -                  className="form-input-line"
  -                />
  -              </div>
  +            {/* Department / Major */}
  +            <div className="form-group">
  +              <label>Department / Major*</label>
  +              <input
  +                type="text"
  +                name="department"
  +                value={formData.department}
  +                onChange={handleInputChange}
  +                required
  +                className="form-input-line"
  +              />
  +            </div>
   
  -              {/* Branch Dropdown */}
  -              <div className="form-group">
  -                <label>Branch You Wish To Join*</label>
  -                <select
  -                  name="branch"
  -                  value={formData.branch}
  -                  onChange={handleInputChange}
  -                  required
  -                  className="form-input-line"
  -                >
  -                  <option value="" disabled>Select a Branch</option>
  -                  <option value="Chennai">Chennai</option>
  -                  <option value="Tirunelveli">Tirunelveli</option>
  -                  <option value="Trichy">Trichy</option>
  -                  <option value="Vizag">Vizag</option>
  -                </select>
  -              </div>
  +            {/* Year of Completion */}
  +            <div className="form-group">
  +              <label>Year of completion*</label>
  +              <input
  +                type="text"
  +                name="year"
  +                value={formData.year}
  +                onChange={handleInputChange}
  +                required
  +                className="form-input-line"
  +              />
  +            </div>
   
  -              {/* Comments */}
  -              <div className="form-group">
  -                <label>Any Comments</label>
  -                <textarea
  -                  name="comments"
  -                  value={formData.comments}
> +            <form onSubmit={handleSubmit} className="internship-form">
  +
  +              {/* Your Name */}
  +              <div className="form-group">
  +                <label>Your Name*</label>
  +                <input
  +                  type="text"
  +                  name="name"
  +                  value={formData.name}
  +                  onChange={handleInputChange}
  +                  required
  +                  className="form-input-line"
  +                />
  +              </div>
  +
  +              {/* Your Age */}
  +              <div className="form-group">
  +                <label>Your Age*</label>
  +                <input
  +                  type="number"
  +                  name="age"
  +                  value={formData.age}
  +                  onChange={handleInputChange}
  +                  required
  +                  className="form-input-line"
  +                />
  +              </div>
  +
  +              {/* Contact Number */}
  +              <div className="form-group">
  +                <label>Your Contact Number*</label>
  +                <input
  +                  type="tel"
  +                  name="mobile"
  +                  value={formData.mobile}
  +                  onChange={handleInputChange}
  +                  required
  +                  className="form-input-line"
  +                />
  +              </div>
  +
  +              {/* Mail ID */}
  +              <div className="form-group">
  +                <label>Your Mail ID*</label>
  +                <input
  +                  type="email"
  +                  name="email"
  +                  value={formData.email}
  +                  onChange={handleInputChange}
  +                  required
  +                  className="form-input-line"
  +                />
  +              </div>
  +
  +              {/* Residential Address */}
  +              <div className="form-group">
  +                <label>Residential Address*</label>
  +                <textarea
  +                  name="address"
  +                  value={formData.address}
  +                  onChange={handleInputChange}
  +                  required
  +                  rows="2"
  +                  className="form-input-line"
  +                ></textarea>
  +              </div>
  +
  +              {/* College / University */}
  +              <div className="form-group">
  +                <label>Name of College / University*</label>
  +                <input
  +                  type="text"
  +                  name="college"
  +                  value={formData.college}
  +                  onChange={handleInputChange}
  +                  required
  +                  className="form-input-line"
  +                />
  +              </div>
  +
  +              {/* Department / Major */}
  +              <div className="form-group">
  +                <label>Department / Major*</label>
  +                <input
  +                  type="text"
  +                  name="department"
  +                  value={formData.department}
  +                  onChange={handleInputChange}
  +                  required
  +                  className="form-input-line"
  +                />
  +              </div>
  +
  +              {/* Year of Completion */}
  +              <div className="form-group">
  +                <label>Year of completion*</label>
  +                <input
  +                  type="text"
  +                  name="year"
  +                  value={formData.year}
  +                  onChange={handleInputChange}
  +                  required
  +                  className="form-input-line"
  +                />
  +              </div>
  +
  +              {/* Branch Dropdown */}
  +              <div className="form-group">
  +                <label>Branch You Wish To Join*</label>
  +                <select
  +                  name="branch"
  +                  value={formData.branch}
  +                  onChange={handleInputChange}
  +                  required
  +                  className="form-input-line"
  +                >
  +                  <option value="" disabled>Select a Branch</option>
  +                  <option value="Chennai">Chennai</option>
  +                  <option value="Tirunelveli">Tirunelveli</option>
  +                  <option value="Trichy">Trichy</option>
  +                  <option value="Vizag">Vizag</option>
  +                </select>
  +              </div>
  +
  +              {/* Comments */}
  +              <div className="form-group">
  +                <label>Any Comments</label>
  +                <textarea
  +                  name="comments"
  +                  value={formData.comments}
  +                  onChange={handleInputChange}
  +                  rows="3"
  +                  className="form-input-line"
  +                ></textarea>
  +              </div>
  +
  +              <button type="submit" className="form-submit-btn">Submit</button>
  +
  +            </form>
  +          </div>
  +
  +        </div>
  +      </section>
  +
       </div>
     );
   };
   
   export default Internship;
  -
  
  commit b5da29da93a07c00d2fb240007c9a80173ed926d
  Author: Hassan459422 <intern@neuronestai.in>
  Date:   Mon Jan 12 09:47:52 2026 +0530
  
      second  push
  
  diff --git a/Frontend/src/pages/Internship.jsx b/Frontend/src/pages/Internship.jsx
  new file mode 100644
  index 0000000..7d6a248
  --- /dev/null
  +++ b/Frontend/src/pages/Internship.jsx
  @@ -0,0 +1,62 @@
  +import { Link } from "react-router-dom";
  +import "../styles/Page.css";
  +
  +const Internship = () => {
  +  const internships = [
  +    {
  +      title: "Civil Engineering",
  +      path: "/internship/civil-engineering",
  +    },
  +    {
  +      title: "Mechanical Engineering",
  +      path: "/internship/mechanical-engineering",
  +    },
  +    {
  +      title: "Electrical & Electronics Engineering (EEE)",
  +      path: "/internship/electrical-electronics-engineering",
  +    },
  +    {
  +      title: "Electronics & Communication Engineering (ECE)",
  +      path: "/internship/electronics-communication-engineering",
  +    },
  +    {
  +      title: "Mechatronics Engineering",
  +      path: "/internship/mechatronics-engineering",
  +    },
  +    {
  +      title: "Architectural (B.Arch)",
  +      path: "/internship/architectural",
  +    },
  +    {
  +      title: "Structural & Environmental Engineering",
  +      path: "/internship/structural-environmental-engineering",
  +    },
  +  ];
  +
  +  return (
  +    <div className="page-container">
  +      <div className="page-header">


