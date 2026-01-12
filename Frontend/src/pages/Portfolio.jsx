import React, { useState } from "react";
import "../styles/Home.css"; // Keep for shared utilities like .dash-tagline if needed, or rely on global
import "../styles/Portfolio.css"; // New dedicated CSS

// Import new portfolio images
import p1 from "../assets/portfolio.img/pexels-jgathisan0612-1580112.webp";
import p2 from "../assets/portfolio.img/pexels-jimbear-998499.webp";
import p3 from "../assets/portfolio.img/pexels-mantasink-1106476.webp";
import p4 from "../assets/portfolio.img/pexels-pixabay-210598.webp";
import p5 from "../assets/portfolio.img/pexels-pixabay-273209.webp";
import p6 from "../assets/portfolio.img/pexels-pixasquare-1123982.webp";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All",
    "Hospitality",
    "Masterplanning",
    "Residential",
    "Entertainment",
    "Commercial",
    "Industrial"
  ];

  // Projects Data with new images
  const projects = [
    {
      id: 1,
      title: "Luxury Resort Masterplan",
      category: "Hospitality",
      image: p1
    },
    {
      id: 2,
      title: "Urban City Center",
      category: "Masterplanning",
      image: p2
    },
    {
      id: 3,
      title: "Skyline Residential Tower",
      category: "Residential",
      image: p3
    },
    {
      id: 4,
      title: "Theme Park Districting",
      category: "Entertainment",
      image: p4
    },
    {
      id: 5,
      title: "Tech Park Commercial Hub",
      category: "Commercial",
      image: p5
    },
    {
      id: 6,
      title: "Industrial Manufacturing Unit",
      category: "Industrial",
      image: p6
    },
    // Reuse some images for remaining items to fill grid
    {
      id: 7,
      title: "Beachfront Villa Compound",
      category: "Residential",
      image: p1
    },
    {
      id: 8,
      title: "Shopping Mall Complex",
      category: "Commercial",
      image: p3
    },
    {
      id: 9,
      title: "Eco-Industrial Park",
      category: "Industrial",
      image: p2
    }
  ];

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="portfolio-page">
      <div className="container" style={{ paddingTop: "12rem", paddingBottom: "8rem" }}>

        {/* Header */}
        <div className="portfolio-header" style={{ marginBottom: "3rem" }}>
          <p className="dash-tagline">Our Projects</p>
          <h1 className="section-title" style={{ textAlign: "left", margin: "0", marginLeft: "3.5rem", fontFamily: "system-ui, Segoe UI, Roboto, sans-serif", fontWeight: "800" }}>
            HELPING YOU BUILD YOUR LEGACY
          </h1>
        </div>

        {/* Filter Menu */}
        <div className="portfolio-filter-container">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`portfolio-filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="portfolio-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="portfolio-card">
              <img
                src={project.image}
                alt={project.title}
                className="portfolio-img"
                loading="eager"
                width="800"
                height="600"
              />
              <div className="portfolio-overlay">
                <div className="portfolio-content">
                  <h3 className="portfolio-title">{project.title}</h3>
                  <button className="portfolio-cta">
                    Explore <span className="arrow">→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Portfolio;
