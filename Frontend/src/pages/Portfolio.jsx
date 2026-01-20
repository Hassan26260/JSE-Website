import React, { useState, useMemo, useEffect } from "react";
import "../styles/Home.css";
import "../styles/Portfolio.css";

// Import Centralized Real Portfolio Data
import { ARCH_PROJECTS, STEEL_PROJECTS, MEP_PROJECTS } from "../data/realPortfolio";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeSubCategory, setActiveSubCategory] = useState(null);

  // Modal State
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filters = [
    "All",
    "MEP",
    "Steel Detailing",
    "Architectural Structure"
  ];

  // Derive All Projects
  const allProjects = useMemo(() => {
    return [...MEP_PROJECTS, ...STEEL_PROJECTS, ...ARCH_PROJECTS];
  }, []);

  // Derive MEP Subcategories dynamically from MEP_PROJECTS
  const mepSubCategories = useMemo(() => {
    const subCats = {};
    MEP_PROJECTS.forEach(project => {
      if (!project.subCategory) return;

      if (!subCats[project.subCategory]) {
        subCats[project.subCategory] = {
          id: `cat-${project.subCategory.replace(/\s+/g, '-')}`,
          title: project.subCategory,
          image: project.image || project.gallery[0], // Use project main image as subcat thumb
          hasMain: false
        };
      }
    });
    return Object.values(subCats);
  }, []);

  // -- Event Handlers --

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    setActiveSubCategory(null);
  };

  const handleSubCategoryClick = (subCatTitle) => {
    setActiveSubCategory(subCatTitle);
  };

  const handleBackToMEP = () => {
    setActiveSubCategory(null);
  };

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    // Disable background scroll
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  // -- Modal Navigation --
  const nextImage = () => {
    if (selectedProject && currentImageIndex < selectedProject.gallery?.length - 1) {
      setCurrentImageIndex(prev => prev + 1);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(prev => prev - 1);
    }
  };


  // -- Render Logic --
  let contentToRender = [];
  let isFolderView = false;

  if (activeFilter === "MEP" && !activeSubCategory) {
    contentToRender = mepSubCategories;
    isFolderView = true;
  } else {
    if (activeFilter === "All") {
      contentToRender = allProjects;
    } else if (activeFilter === "MEP") {
      contentToRender = allProjects.filter(p => p.category === "MEP" && p.subCategory === activeSubCategory);
    } else {
      contentToRender = allProjects.filter(p => p.category === activeFilter);
    }
  }

  return (
    <div className="portfolio-page">
      <div className="container" style={{ paddingTop: "12rem", paddingBottom: "8rem" }}>

        {/* Header */}
        <div className="portfolio-header" style={{ marginBottom: "3rem" }}>
          <p className="dash-tagline">Our Projects</p>
          <h1 className="section-title" style={{ textAlign: "left", margin: "0", fontFamily: "system-ui, Segoe UI, Roboto, sans-serif", fontWeight: "800" }}>
            HELPING YOU BUILD YOUR LEGACY
          </h1>
        </div>

        {/* Filter Menu */}
        <div className="portfolio-filter-container">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`portfolio-filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => handleFilterClick(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Breadcrumb for MEP */}
        {activeFilter === "MEP" && activeSubCategory && (
          <div style={{ marginBottom: "2rem" }}>
            <button
              onClick={handleBackToMEP}
              className="back-btn"
              style={{
                background: "none",
                border: "none",
                color: "#144AE0",
                cursor: "pointer",
                fontSize: "1rem",
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem"
              }}
            >
              ← Back to MEP Categories
            </button>
            <h2 style={{ marginTop: "1rem", fontSize: "1.5rem" }}>{activeSubCategory} Projects</h2>
          </div>
        )}

        {/* Grid */}
        <div className="portfolio-grid">
          {contentToRender.map((item) => (
            <div
              key={item.id}
              className="portfolio-card"
              onClick={() => {
                if (isFolderView) {
                  handleSubCategoryClick(item.title);
                } else if (item.category === "Architectural Structure" || item.category === "Steel Detailing" || item.category === "MEP") {
                  openProjectModal(item);
                }
              }}
              style={{ cursor: "pointer" }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="portfolio-img"
                loading="lazy"
                width="800"
                height="600"
              />
              <div className="portfolio-overlay">
                <div className="portfolio-content">
                  <h3 className="portfolio-title">{item.title}</h3>
                  {isFolderView ? (
                    <span className="view-more">View Projects →</span>
                  ) : (
                    <button className="portfolio-cta">
                      Explore <span className="arrow">→</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {contentToRender.length === 0 && (
          <div className="no-projects">
            <p>No projects found in this category yet.</p>
          </div>
        )}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="project-modal-overlay" onClick={closeProjectModal}>
          <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal-btn" onClick={closeProjectModal}>×</button>

            {/* Carousel */}
            <div className="modal-carousel">
              {selectedProject.gallery && selectedProject.gallery.length > 0 ? (
                <>
                  <div className="carousel-image-container">
                    <img
                      src={selectedProject.gallery[currentImageIndex]}
                      alt={`Slide ${currentImageIndex}`}
                      className="modal-img"
                    />
                  </div>

                  {/* Controls */}
                  <div className="carousel-controls">
                    <button
                      className="carousel-btn prev"
                      onClick={prevImage}
                      disabled={currentImageIndex === 0}
                    >
                      ←
                    </button>
                    <span className="carousel-counter">
                      {currentImageIndex + 1} / {selectedProject.gallery.length}
                    </span>
                    <button
                      className="carousel-btn next"
                      onClick={nextImage}
                      disabled={currentImageIndex === selectedProject.gallery.length - 1}
                    >
                      →
                    </button>
                  </div>
                </>
              ) : (
                <p>No images available.</p>
              )}
            </div>

            {/* About Section */}
            <div className="modal-info">
              <h2 className="modal-title">{selectedProject.title}</h2>
              <h4 className="modal-subtitle">About Project</h4>
              <p className="modal-description" style={{ whiteSpace: 'pre-line' }}>
                {selectedProject.description || "This project represents one of our key architectural achievements, showcasing our commitment to precision, sustainability, and innovative design."}
              </p>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
