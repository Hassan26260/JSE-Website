
// Logic extracted from Portfolio.jsx to share real project data across the site

// --- DESCRIPTION MAPPING ---
// Maps exact folder names (project titles) to descriptions provided by the user.
const PROJECT_DESCRIPTIONS = {
    "Holiday inn Staybridge Dubai": "The Holiday Inn Staybridge Suites consists of a 9-storey hotel building comprising 250 rooms located at Dubai World Central, Dubai. With the area of 43,000m² this project combines two buildings: a four star hotel and another for residential use. The concrete building is composed by two levels of underground parking, atrium and another 7 upper floors.\n\nThe sustainability and efficiency of the building was a very present issue in the design and development of this new development. For this project, JSE ENGINEERING were appointed as BIM consultant for Architectural, Structural and MEP services.",
    "Princton Home": "JSE ENGINEERING team developed Architectural & Structural 3D models to LOD 350 for this buildings.\n\nAll 2D installation drawings were extracted from 3D model.",
    "Villa Project - India": "The building area for this Villa is 250 square meters.\n\nUSE ENGINEERING team has developed Architectural & Structural 3D models to LOD 300 and LOD 400.\n\nAll 2D installation drawings were extracted from 3D models.",
    "Warehouse Development - Singapore": "The building area for warehouse is 15,000 square meters.\n\nJSE ENGINEERING team has developed Architectural & Structural 3D models to LOD 300 and LOD 400.\n\nAll 2D installation drawings were extracted from 3D models.",
    "Etisalat Data Center - Dubai": "With the area of 31,100 Square meters, this project consists of 6 buildings. One is Admin building with Ground floor, First and Roof level, IT building with Ground floor, First and Roof level, Service building 1,2 & 3 with Ground floor, First and Roof level and DEWA building with Ground and Roof floor.\n\nJSE ENGINEERING team has developed Architectural & Structural 3D models to LOD 400 from LOD 300.",
    "Etisalat Data - Dubai": "With the area of 31,100 Square meters, this project consists of 6 buildings. One is Admin building with Ground floor, First and Roof level, IT building with Ground floor, First and Roof level, Service building 1,2 & 3 with Ground floor, First and Roof level and DEWA building with Ground and Roof floor.\n\nJSE ENGINEERING team has developed Architectural & Structural 3D models to LOD 400 from LOD 300.",
    "IMPZ District Cooling Plant - Dubai": "Emirates Central Cooling Systems plans to construct district cooling plants, in Dubai International Media Production Zone (IMPZ) will have a capacity of 35,000 RT. This cooling plant consists of Basement level, Mezzanine level, Ground floor, 2-28.5 meters height Cooling towers & Mechanical plant area on above roof with Steel Structure.\n\nJSE ENGINEERING team has developed Architectural & Structural (Concrete and Steel) 3D models to LOD 300 and LOD 400 for external elevations.",
    "International Media Production - Dubai": "Emirates Central Cooling Systems plans to construct district cooling plants, in Dubai International Media Production Zone (IMPZ) will have a capacity of 35,000 RT. This cooling plant consists of Basement level, Mezzanine level, Ground floor, 2-28.5 meters height Cooling towers & Mechanical plant area on above roof with Steel Structure.\n\nJSE ENGINEERING team has developed Architectural & Structural (Concrete and Steel) 3D models to LOD 300 and LOD 400 for external elevations.",
    "WAFRA residential - Abu Dhabi": "The plot where Wafra Residential Tower is situated, Plot C-5, comprises of an area of 86,000 square meters. The residential tower comprising a Basement level, Ground floor, 4 Parking levels, Amenities, 29 additional Storey's and 2 Roofs.\n\nJSE ENGINEERING team has developed Architectural & Structural 3D models to LOD 300 and LOD 400 for this building.",
    "Wafra Residential - Abu Dhabi": "The plot where Wafra Residential Tower is situated, Plot C-5, comprises of an area of 86,000 square meters. The residential tower comprising a Basement level, Ground floor, 4 Parking levels, Amenities, 29 additional Storey's and 2 Roofs.\n\nJSE ENGINEERING team has developed Architectural & Structural 3D models to LOD 300 and LOD 400 for this building.",
    "Recycling Plant - Singapore": "JSE ENGINEERING team developed Architectural & Structural 3D models to LOD 350 for this buildings.\n\nAll 2D installation drawings were extracted from 3D model",
    "One Clarton - London": "One Carlton House Terrace, located in Westminster, UK, is renowned as one of London's most prestigious addresses, offering stunning views of The Mall, St James's Park, and Buckingham Palace.\n\nThe property boasts a built-up area of 29,500 sq ft and involves extensive basement excavation, a new swimming pool, and a glass roof terrace.",
    "Multi Purpose Hall - Qatar": "JSE ENGINEERING was appointed to prepare detailed, coordinated engineering drawings for electrical and mechanical services.\n\nMEP Contractor: ETA\nOur Client: FRICO\nDrawings Prepared: 1035 Nos",
    "District Cooling Plant": "JSE ENGINEERING are appointed by Ms. Voltas to prepare detailed, coordinated 2D drawings for complete Mechanical, Electrical and Public Health services (MEP) for TECOM C District Cooling Plant in Tecom C.\n\nCapacity: 50,000 Refrigeration tons, 10 chiller modules, 2 Thermal energy storage tanks.",
    "Avenus - l11": "Larsen & Toubro Ltd JSE ENGINEERING appointed to prepare detailed coordinated MEP shop drawings\n\nOur Client: L&T LTD\nDrawings Prepared: 500 Nos",
    "The Regen": "JSE ENGINEERING was appointed to prepare detailed, engineering drawings for electrical and mechanical services\n\nOur Client: VOLTAS INTERNATIONAL\nDrawings Prepared: 250 Nos",
    "Mushireb Heart Of Doha": "JSE ENGINEERING was responsible for the Air conditioning and ventilation design and detailed shop drawings.\n\nOur Client: THERMO.LLC\nMEP Contractor: ETA\nDrawings Prepared: 250 Nos",
    "Integrated Health Care": "JSE ENGINEERING was appointed to prepare detailed, coordinated engineering drawings for electrical and mechanical services. The project comprises a 220-bed 60,000 Sqm Hospital and ambulatory care facility.\n\nMEP Contractor: VOLTAS\nOur Client: FRICO\nDrawings Prepared: 900 Nos",
    "Oman Convention": "JSE ENGINEERING was appointed to prepare detailed, coordinated engineering drawings for electrical and mechanical services.\n\nOur Client: BAHWAN ENGINEERING COMPANY\nDrawings Prepared: 650 Nos",
    "Palm Jemirah": "JSE ENGINEERING was appointed to prepare detailed, coordinated engineering drawings for electrical and mechanical services\n\nMEP Contractor: BK GULF\nOur Client: VINS\nDrawings Prepared: 1200 Nos",
    "Al-Zeina Towers - Abu Dhabi": "JSE ENGINEERING was appointed to prepare detailed, engineering drawings for electrical and mechanical services.\n\nMEP Contractor: BK GULF\nOur Client: VINS\nDrawings Prepared: 1500 Nos",
    "Nad Al Sheeba": "JSE ENGINEERING was appointed to prepare detailed, engineering drawings for electrical and mechanical services.\n\nOur Client: GUANGSHA CONSTRUCTION\nDrawings Prepared: 1250 Nos",
    "Muscat International - Oman": "New Muscat International Airport terminal covers 580,000 sqm and features 118 check-in counters, 10 baggage reclaim belts, 82 immigration counters, 45 gates as well as a new ATC tower, 97 m high.\n\nJSE ENGINEERING was appointed by Ms. BEC, OMAN, for detailed design duties up to producing fully coordinated installation drawings for MEP services.",
    "Four Seasons Branded Residency": "Muscat Branded Residences building includes a comprehensive range of floors, from the basement to the top roof. The detailed work on the Yacht Club, Parking, Chiller Plant, Dry Stack, and Engineering Workshop buildings, along with the extraction of complete 2D shop drawings, showcases significant achievement.",
    "Four Seasons - hotel, building": "Awarded the project for the 4-Star Hotel in Muscat. The successful generation and construction of a coordinated BIM Model for MEP services is a significant achievement, especially for a building of such complexity with 8 floors, a roof, and a top roof.",
    "Aurum One Development": "The completion of the Luxury Residential Towers with an integrated mall. Utilizing a coordinated BIM Model for MEP services ensured a seamless integration of all mechanical, electrical, and plumbing systems across the extensive structure.",
    "Nikki Beach Restaurant": "Situated on Yiti Bay just 30 minutes from the Muscat airport, Nikki Beach Resort & Spa Muscat will feature 140 rooms and 30 villas with private pools.\n\nFacilities include beach club, three signature Nikki Beach restaurants (Café Nikki, Escape, and Soul Lounge), three swimming pools, pool bar, and spa.",
    "al ain hospital abudhabi": "JSE ENGINEERING was appointed to prepare detailed, coordinated engineering drawings for electrical and mechanical services.\n\nDrawings Prepared: 1500 Nos",
    "AL AIN Hospital UAE": "JSE ENGINEERING was appointed to prepare detailed, coordinated engineering drawings for electrical and mechanical services.\n\nDrawings Prepared: 1500 Nos",
    "Salhia Mall Extention": "JSE ENGINEERING team developed Architectural & Structural 3D models to LOD 350 for this buildings.\n\nAll 2D installation drawings were extracted from 3D model."
};


// --- LOCATION MAPPING ---
const PROJECT_LOCATIONS = {
    // DUBAI
    "Holiday inn Staybridge Dubai": "DUBAI",
    "Etisalat Data Center - Dubai": "DUBAI",
    "Etisalat Data - Dubai": "DUBAI",
    "IMPZ District Cooling Plant - Dubai": "DUBAI",
    "International Media Production - Dubai": "DUBAI",
    "District Cooling Plant": "DUBAI", // Tecom C is in Dubai
    "Palm Jemirah": "DUBAI",
    "The Regen": "DUBAI",

    // UAE (Abu Dhabi, etc.)
    "WAFRA residential - Abu Dhabi": "UAE",
    "Wafra Residential - Abu Dhabi": "UAE",
    "Al-Zeina Towers - Abu Dhabi": "UAE",
    "al ain hospital abudhabi": "UAE",
    "AL AIN Hospital UAE": "UAE",

    // OMAN (Mapping to SAUDI ARABIA for now as requested? Or just keep real country?)
    // User requested: UAE, SAUDI ARABIA, DUBAI, MALAYSIA.
    // I will map Oman to 'Other' internally but user only gave 4 filters.
    // Let's assume Middle East projects might go to UAE/Saudi for now or just 'Other'.
    "Muscat International - Oman": "OTHERS",
    "Four Seasons Branded Residency": "OTHERS", // Muscat
    "Four Seasons - hotel, building": "OTHERS", // Muscat
    "Nikki Beach Restaurant": "OTHERS", // Muscat
    "Oman Convention": "OTHERS",

    // QATAR
    "Multi Purpose Hall - Qatar": "OTHERS",
    "Mushireb Heart Of Doha": "OTHERS",

    // SINGAPORE / MALAYSIA
    "Warehouse Development - Singapore": "MALAYSIA", // Grouping Singapore with Malaysia for this filter request as they are close? Or just OTHERS.
    "Recycling Plant - Singapore": "MALAYSIA", // User asked for Malaysia, I'll put SG projects there or OTHERS.
    // Let's use OTHERS for strictness, but if user wants Malaysia filter populated, I might need Malaysian projects.

    // INDIA
    "Villa Project - India": "OTHERS",
    "Avenus - l11": "OTHERS",

    // UK
    "One Clarton - London": "OTHERS",
};

// --- DYNAMIC IMPORT FOR ARCHITECTURE, STEEL & MEP (BIM) ---
const archGlob = import.meta.glob('../assets/portfolio.img/archi/**/*.{png,jpg,jpeg,webp}', { eager: true });
const steelGlob = import.meta.glob('../assets/portfolio.img/steel/**/*.{png,jpg,jpeg,webp}', { eager: true });
const mepGlob = import.meta.glob('../assets/portfolio.img/BIM/**/*.{png,jpg,jpeg,webp}', { eager: true });

// Helper to process glob data
const processDynamicProjects = (globData, category, isMEP = false) => {
    const projectsMap = {};

    Object.keys(globData).forEach((path) => {
        // Path examples:
        // Archi/Steel: ../assets/portfolio.img/archi/ProjectName/image.jpg
        // MEP: ../assets/portfolio.img/BIM/SubCat/ProjectName/image.jpg

        const parts = path.split('/');
        const fileName = parts.pop();
        let projectName, subCategory;

        if (isMEP) {
            projectName = parts.pop();
            subCategory = parts.pop(); // e.g. Hospitals
        } else {
            projectName = parts.pop();
        }

        if (!projectName) return;

        if (!projectsMap[projectName]) {
            projectsMap[projectName] = {
                id: `${category.toLowerCase().substring(0, 3)}-${projectName.replace(/\s+/g, '-')}`,
                title: projectName,
                category: category,
                subCategory: subCategory || null,
                image: null,
                gallery: [],
                // LOOKUP DESCRIPTION
                description: PROJECT_DESCRIPTIONS[projectName] || null,
                // LOOKUP LOCATION, Default to 'OTHERS' if not found
                country: PROJECT_LOCATIONS[projectName] || "OTHERS"
            };
        }

        const imgUrl = globData[path].default;
        projectsMap[projectName].gallery.push(imgUrl);

        if (fileName.toLowerCase().includes('main-img')) {
            projectsMap[projectName].image = imgUrl;
        }
    });

    return Object.values(projectsMap).map(p => {
        if (!p.image && p.gallery.length > 0) {
            p.image = p.gallery[0];
        }
        return p;
    });
};

export const ARCH_PROJECTS = processDynamicProjects(archGlob, "Architectural & Structural");
export const STEEL_PROJECTS = processDynamicProjects(steelGlob, "Steel Structural Detailing");
export const MEP_PROJECTS = processDynamicProjects(mepGlob, "MEP", true);

export const ALL_REAL_PROJECTS = [...MEP_PROJECTS, ...STEEL_PROJECTS, ...ARCH_PROJECTS];
