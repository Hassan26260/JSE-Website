import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import '../styles/FAQ.css';

const faqData = [
  {
    category: "Company & Services",
    questions: [
      {
        q: "What services does JSE Engineering Private Limited offer?",
        a: "We offer a comprehensive range of services including Architectural BIM, HVAC Design, Plumbing and Public Health, MEP Design, BIM Modelling, Electrical System Design, ELV, Steel Structure Detailing & Tekla, and Firefighting Design."
      },
      {
        q: "What are the different levels of development (LOD) offered by JSE in BIM?",
        a: "At JSE, we offer comprehensive BIM services across various LODs:\n• LOD 100: Conceptual Design\n• LOD 200: Schematic Design\n• LOD 300: Detailed Design\n• LOD 350: Advanced Design for Construction Documentation\n• LOD 400: Fabrication & Installation\n• LOD 500: As-Built for Operations & Maintenance"
      },
      {
        q: "What industries do you cater to with your BIM services?",
        a: "JSE provides BIM services to a wide range of industries, including Manufacturing, Healthcare (Hospitals, Clinics, Research Labs), Skyscrapers and High-Rise Buildings, Infrastructure (Bridges, Roads, Railways), Education (Schools, Universities), Builders & General Contracting."
      },
      {
        q: "Do you offer customized solutions for specific project needs?",
        a: "We work closely with our clients to deliver personalized engineering solutions tailored to their unique project requirements."
      }
    ]
  },
  {
    category: "Technical & Delivery",
    questions: [
      {
        q: "What software tools do you use for BIM services?",
        a: "At JSE, we employ cutting-edge BIM software to deliver accurate and efficient designs like Revit (For comprehensive architectural and MEP modeling), Tekla (For steel structure detailing and fabrication), Navisworks (For 3D model integration and clash detection), AutoCAD (For detailed drafting and design), Dynamo (For advanced parametric design), and others for various services, including Architectural BIM, MEP design, structural detailing & fire safety engineering."
      },
      {
        q: "What format of file do you accept?",
        a: "When it comes to sharing draft models or other files between two parties, JSE accepts almost all types of PDF, CAD & image file formats."
      }
    ]
  },
  {
    category: "Process & Engagement Models",
    questions: [
      {
        q: "What is the JSE Secondment Team Service?",
        a: "Clients can select architects, engineers, or managers after virtual interviews for specific projects through our secondment service. These professionals can work on-site or remotely, with JSE handling team support and quality delivery."
      },
      {
        q: "How does JSE's Virtual Team for Hire service work?",
        a: "Clients can hire a dedicated virtual team from JSE for remote project support. This service allows companies to scale their workforce without the cost and logistics of permanent staffing."
      },
      {
        q: "What is the process for working with JSE on a BIM project?",
        a: "Our streamlined process involves:\n• Initial consultation and scope definition.\n• Drafting concepts and pricing.\n• Resource deployment and project execution.\n• Ongoing collaboration and quality checks.\n• Final project handover with continued post-support."
      }
    ]
  },
  {
    category: "Team & Contact",
    questions: [
      {
        q: "What is the experience level of your resources?",
        a: "Every project expects different levels of experienced candidate. At JSE, we offer resources ranging from 2 years to 15 years. Interested? Call us to try your projects!"
      },
      {
        q: "How can I get in touch with JSE Engineering Private Limited?",
        a: "Want to add value to your projects? You can contact us through our website contact form, email us at jse@jseeng.com, or call us at +044-4261 1180 or 044-4261 2769. Our sales executive is eagerly waiting to support your ideas."
      }
    ]
  }
];

const FAQAccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-accordion-item">
      <button
        className="faq-accordion-header"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="faq-question-text">{question}</span>
        <div className={`faq-toggle-btn ${isOpen ? 'open' : ''}`}>
          {isOpen ? <Minus size={18} strokeWidth={2.5} /> : <Plus size={18} strokeWidth={2.5} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="faq-accordion-body-overflow"
          >
            <div className="faq-accordion-body">
              {answer.split('\n').map((line, idx) => (
                <p key={idx} className="faq-answer-line">{line}</p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  return (
    <div className="faq-page">
      {/* Abstract Design Hero Section */}
      <section className="faq-hero">
        <div className="faq-hero-bg-shapes">
          {/* Custom Modern Geometric Graphic with JSE Blue (#144AE0) */}
          <div className="faq-shape shape-circle"></div>
          <div className="faq-shape shape-grid"></div>
        </div>
        
        <div className="faq-hero-content">
          <motion.h1 
            className="faq-hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Frequently Asked<br/>Questions
          </motion.h1>
          <motion.p 
            className="faq-hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Your questions answered, your projects elevated
          </motion.p>
        </div>
      </section>

      {/* Structured Accordion Grid */}
      <section className="faq-content-section">
        <div className="faq-container">
          {faqData.map((categoryGroup, index) => (
            <motion.div 
              key={index} 
              className="faq-category-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h2 className="faq-category-title">{categoryGroup.category}</h2>
              <div className="faq-accordion-group">
                {categoryGroup.questions.map((item, qIndex) => (
                  <FAQAccordionItem 
                    key={qIndex} 
                    question={item.q} 
                    answer={item.a} 
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FAQ;
