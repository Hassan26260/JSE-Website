import img1 from '../assets/images-home/architectural-bim.webp';
import img2 from '../assets/images-home/mep-design.webp';
import img3 from '../assets/images-home/Steel Structure.jpg';
import img4 from '../assets/images-home/skyscraper.webp';
import img5 from '../assets/images-home/hvac-design.webp';

// Dummy Data for Projects
export const DUMMY_PROJECTS = [
    {
        _id: "1",
        title: "Luxury High-Rise Residence",
        category: "Architectural & Structural",
        subCategory: "Residential",
        country: "UAE",
        image: img4,
        description: "A state-of-the-art residential tower in the heart of Dubai, featuring modern architectural design and robust structural engineering.",
        gallery: [
            img4,
            img1
        ]
    },
    {
        _id: "2",
        title: "Commercial Complex MEP Design",
        category: "MEP",
        subCategory: "Commercial",
        country: "SAUDI ARABIA",
        image: img2,
        description: "Comprehensive MEP design and coordination for a sprawling commercial complex in Riyadh, ensuring energy efficiency and system integration.",
        gallery: [
            img2,
            img5
        ]
    },
    {
        _id: "3",
        title: "Industrial Steel Structure",
        category: "Steel Structural Detailing",
        subCategory: "Industrial",
        country: "MALAYSIA",
        image: img3,
        description: "Detailed steel structural modeling and fabrication drawings for a large-scale industrial facility in Kuala Lumpur.",
        gallery: [
            img3
        ]
    },
    {
        _id: "4",
        title: "Hospital Building BIM Model",
        category: "Architectural & Structural",
        subCategory: "Healthcare",
        country: "DUBAI",
        image: img1,
        description: "Full-scale BIM implementation for a multi-specialty hospital, facilitating clash detection and construction management.",
        gallery: [
            img1,
            img2
        ]
    }
];

// Dummy Data for Jobs
export const DUMMY_JOBS = [
    {
        _id: "101",
        title: "Senior BIM Modeler",
        type: "Full Time",
        salary: "Competitive",
        location: "Chennai, India",
        desc: "We are looking for an experienced BIM Modeler to join our dynamic team and work on international projects.",
        details: {
            roleOverview: "As a Senior BIM Modeler, you will be responsible for creating high-quality BIM models and coordinating with other disciplines.",
            responsibilities: [
                "Develop detailed 3D BIM models using Revit.",
                "Coordinate with architectural, structural, and MEP teams.",
                "Perform clash detection and resolution.",
                "Prepare construction documentation and shop drawings."
            ],
            qualifications: [
                "Bachelor's degree in Engineering or Architecture.",
                "5+ years of experience in BIM modeling.",
                "Proficiency in Revit, Navisworks, and AutoCAD.",
                "Strong understanding of building codes and standards."
            ],
            experience: "5 - 8 Years",
            freshers: false
        }
    },
    {
        _id: "102",
        title: "Junior MEP Engineer",
        type: "Full Time",
        salary: "As per Industry Standards",
        location: "Tirunelveli, India",
        desc: "An excellent opportunity for fresh graduates or junior engineers to kickstart their career in MEP design.",
        details: {
            roleOverview: "Support senior engineers in the design and drafting of MEP systems for various building projects.",
            responsibilities: [
                "Assist in HVAC, Electrical, and Plumbing design calculations.",
                "Drafting of MEP systems using AutoCAD and Revit.",
                "Prepare material take-offs and specifications.",
                "Coordinate with project teams to ensure timely delivery."
            ],
            qualifications: [
                "Bachelor's degree in Mechanical or Electrical Engineering.",
                "0-2 years of experience.",
                "Basic knowledge of AutoCAD and Revit is preferred.",
                "Eagerness to learn and grow."
            ],
            experience: "0 - 2 Years",
            freshers: true
        }
    },
    {
        _id: "103",
        title: "Structural Design Engineer",
        type: "Contract",
        salary: "Negotiable",
        location: "Dubai, UAE",
        desc: "Join our on-site team in Dubai for a challenging structural engineering role on a prestigious project.",
        details: {
            roleOverview: "Lead the structural design and analysis for high-rise building projects, ensuring structural integrity and safety.",
            responsibilities: [
                "Perform structural analysis and design using ETABS and SAFE.",
                "Review and approve structural drawings and calculations.",
                "Coordinate with architects and contractors on-site.",
                "Ensure compliance with local building authorities and standards."
            ],
            qualifications: [
                "Master's degree in Structural Engineering.",
                "8+ years of relevant experience.",
                "Strong knowledge of international building codes (ACI, Eurocode).",
                "Experience with high-rise buildings."
            ],
            experience: "8+ Years",
            freshers: false
        }
    }
];
