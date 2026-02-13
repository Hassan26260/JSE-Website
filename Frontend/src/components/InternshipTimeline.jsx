import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import '../styles/Internship.css';

const timelineSteps = [
    {
        id: 1,
        title: "Entry to JSE Internship",
        description: "Begin your journey by joining our prestigious program.",
        highlight: "Entry"
    },
    {
        id: 2,
        title: "Calculations & Concept Learning",
        description: "Master the foundational engineering calculations and core concepts.",
        highlight: "Calculations"
    },
    {
        id: 3,
        title: "Project Design with Details",
        description: "Dive deep into comprehensive project design and detailing.",
        highlight: "Project Design"
    },
    {
        id: 4,
        title: "Project's Digital Construction in BIM",
        description: "Bring designs to life using advanced BIM digital construction tools.",
        highlight: "Digital Construction"
    },
    {
        id: 5,
        title: "Plant Room Design & Detailing",
        description: "Specialize in the intricate design of plant rooms and MEP systems.",
        highlight: "Plant Room"
    },
    {
        id: 6,
        title: "Project Submission & Drawings",
        description: "Compile and submit professional project drawings and documentation.",
        highlight: "Project Submission"
    },
    {
        id: 7,
        title: "Report Submission & Certification",
        description: "Finalize your internship with a comprehensive report and earn your certificate.",
        highlight: "Certification"
    },
    {
        id: 8,
        title: "Permanent Job Opportunity",
        description: "Top performers secure a permanent position at JSE Engineering.",
        highlight: "Permanent Job"
    }
];

const InternshipTimeline = () => {
    const containerRef = useRef(null);
    const [activeStep, setActiveStep] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Calculate active step based on scroll progress
    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (latest) => {
            const stepSize = 1 / timelineSteps.length;
            const currentStep = Math.min(
                Math.floor(latest / stepSize),
                timelineSteps.length - 1
            );
            setActiveStep(currentStep);
        });
        return () => unsubscribe();
    }, [scrollYProgress]);

    return (
        <section className="internship-timeline-section" ref={containerRef}>
            <div className="internship-scroll-container">

                {/* Left Column: Text Blocks */}
                <div className="internship-timeline-left">
                    {timelineSteps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            className="internship-timeline-text"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ amount: 0.5, margin: "-10% 0px -10% 0px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <div className="internship-step-number">{`0${step.id}`}</div>
                            <h3 className="internship-step-title">
                                {step.title.split(step.highlight).map((part, i, arr) => (
                                    <React.Fragment key={i}>
                                        {part}
                                        {i < arr.length - 1 && <span className="internship-neon-highlight">{step.highlight}</span>}
                                    </React.Fragment>
                                ))}
                            </h3>
                            <p className="internship-step-description">{step.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Right Column: Node Blocks (Synced Scroll) */}
                <div className="internship-timeline-right">
                    {/* Continuous Line Background */}
                    <div className="internship-progress-track">
                        <div className="internship-progress-bg"></div>
                        <motion.div
                            className="internship-progress-fill"
                            style={{ scaleY, transformOrigin: "top" }}
                        />
                    </div>

                    {/* Nodes Stack */}
                    <div className="internship-nodes-wrapper">
                        {timelineSteps.map((step, index) => (
                            <div key={step.id} className="internship-node-block">
                                <div className={`internship-timeline-node ${index === activeStep || index < activeStep ? 'active' : ''}`}>
                                    <div className="internship-node-circle"></div>
                                    <div className={`internship-node-glow ${index === activeStep ? 'pulse' : ''}`}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default InternshipTimeline;
