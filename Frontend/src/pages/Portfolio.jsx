import React, { useState, useMemo, useEffect } from "react";
import "../styles/Home.css";
import "../styles/Portfolio.css";
import api from "../services/api"; // API Disabled for now
// import { DUMMY_PROJECTS } from "../data/dummyData"; // Switched to Real Static Data
// import { ALL_REAL_PROJECTS } from "../data/realPortfolio";

const Portfolio = () => {
  // State for Multi-Select Filters
  const [selectedCategories, setSelectedCategories] = useState(["All"]);
  const [selectedCountries, setSelectedCountries] = useState(["All"]);
  const [selectedSectors, setSelectedSectors] = useState(["All"]);

  // Projects Data
  const [allProjects, setAllProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // Dropdown visibility state
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [isSectorDropdownOpen, setIsSectorDropdownOpen] = useState(false);

  // Modal State
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const { data } = await api.get('/projects');
      setAllProjects(data);
    } catch (error) {
      console.error("Failed to fetch projects", error);
    } finally {
      setLoading(false);
    }
  };

  const filterOptions = [
    "MEP",
    "Architectural & Structural",
    "Steel Structural Detailing"
  ];

  const sectorOptions = useMemo(() => {
    const sectors = new Set();
    allProjects.forEach(project => {
      if (project.category === "MEP" && project.subCategory) {
        sectors.add(project.subCategory);
      }
    });
    return Array.from(sectors).sort();
  }, [allProjects]);

  const countryOptions = [
    "UAE",
    "SAUDI ARABIA",
    "DUBAI",
    "MALAYSIA"
  ];

  const getImageUrl = (path) => {
    if (!path) return '';
    if (path.startsWith('http')) return path;
    return `http://localhost:5000${path}`;
  };


  // -- Event Handlers --

  const toggleSelection = (item, currentSelection, setSelection, allValue = "All") => {
    if (item === allValue) {
      setSelection([allValue]);
      return;
    }

    let newSelection = [...currentSelection];

    if (newSelection.includes(allValue)) {
      newSelection = newSelection.filter(i => i !== allValue);
    }

    if (newSelection.includes(item)) {
      newSelection = newSelection.filter(i => i !== item);
    } else {
      newSelection.push(item);
    }

    if (newSelection.length === 0) {
      setSelection([allValue]);
    } else {
      setSelection(newSelection);
    }
  };

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.custom-dropdown-container')) {
        setIsCategoryDropdownOpen(false);
        setIsCountryDropdownOpen(false);
        setIsSectorDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);


  // -- Render Logic --

  const showSectorFilter = selectedCategories.includes("MEP") && !selectedCategories.includes("All");

  const contentToRender = allProjects.filter(project => {
    const pCountry = project.country ? project.country.toUpperCase() : "OTHERS";
    const matchesCountry = selectedCountries.includes("All") || selectedCountries.includes(pCountry);
    const matchesCategory = selectedCategories.includes("All") || selectedCategories.includes(project.category);

    let matchesSector = true;
    if (showSectorFilter && project.category === "MEP") {
      matchesSector = selectedSectors.includes("All") || selectedSectors.includes(project.subCategory);
    }

    return matchesCountry && matchesCategory && matchesSector;
  });

  const FilterDropdown = ({ title, options, selected, onToggle, isOpen, setIsOpen }) => (
    <div className="custom-dropdown-container" style={{ position: 'relative', display: 'inline-block', minWidth: '200px' }}>
      <button
        className="dropdown-btn"
        onClick={(e) => { e.stopPropagation(); setIsOpen(!isOpen); }}
        style={{
          width: '100%',
          padding: '0.75rem 1rem',
          backgroundColor: 'transparent',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '8px',
          textAlign: 'left',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: 'pointer',
          fontWeight: '500',
          color: 'white',
          boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
        }}
      >
        <span>{title} {selected.includes("All") ? "" : `(${selected.length})`}</span>
        <span style={{ fontSize: '0.8rem', opacity: 0.6 }}>▼</span>
      </button>

      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          zIndex: 50,
          marginTop: '0.5rem',
          backgroundColor: '#0f172a',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '8px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 10px 15px -3px rgba(0, 0, 0, 0.1)',
          padding: '0.5rem',
          maxHeight: '300px',
          overflowY: 'auto'
        }}>
          <div
            onClick={() => onToggle("All")}
            style={{
              padding: '0.5rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              borderRadius: '4px',
              backgroundColor: selected.includes("All") ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
              color: 'white'
            }}
          >
            <input type="checkbox" checked={selected.includes("All")} readOnly style={{ cursor: 'pointer' }} />
            <span>All</span>
          </div>

          <div style={{ height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.1)', margin: '0.5rem 0' }}></div>

          {options.map(option => (
            <div
              key={option}
              onClick={() => onToggle(option)}
              style={{
                padding: '0.5rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                borderRadius: '4px',
                backgroundColor: selected.includes(option) ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                color: 'white'
              }}
            >
              <input type="checkbox" checked={selected.includes(option)} readOnly style={{ cursor: 'pointer' }} />
              <span>{option}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="portfolio-page">
      <div className="container" style={{ paddingTop: "12rem", paddingBottom: "8rem" }}>

        <div className="portfolio-header" style={{ marginBottom: "3rem" }}>
          <p className="dash-tagline">Our Projects</p>
          <h1 className="section-title" style={{ textAlign: "left", margin: "0", fontFamily: "system-ui, Segoe UI, Roboto, sans-serif", fontWeight: "800" }}>
            HELPING YOU BUILD YOUR LEGACY
          </h1>
        </div>

        <div className="portfolio-filter-toolbar" style={{
          display: 'flex',
          gap: '1rem',
          marginBottom: '2rem',
          flexWrap: 'wrap',
          alignItems: 'center'
        }}>
          <span style={{ fontWeight: '600', color: '#6b7280', marginRight: '0.5rem' }}>Filter By:</span>

          <FilterDropdown
            title="Country"
            options={countryOptions}
            selected={selectedCountries}
            onToggle={(item) => toggleSelection(item, selectedCountries, setSelectedCountries)}
            isOpen={isCountryDropdownOpen}
            setIsOpen={(val) => { setIsCountryDropdownOpen(val); setIsCategoryDropdownOpen(false); setIsSectorDropdownOpen(false); }}
          />

          <FilterDropdown
            title="Category"
            options={filterOptions}
            selected={selectedCategories}
            onToggle={(item) => toggleSelection(item, selectedCategories, setSelectedCategories)}
            isOpen={isCategoryDropdownOpen}
            setIsOpen={(val) => { setIsCategoryDropdownOpen(val); setIsCountryDropdownOpen(false); setIsSectorDropdownOpen(false); }}
          />

          {showSectorFilter && (
            <FilterDropdown
              title="Sector"
              options={sectorOptions}
              selected={selectedSectors}
              onToggle={(item) => toggleSelection(item, selectedSectors, setSelectedSectors)}
              isOpen={isSectorDropdownOpen}
              setIsOpen={(val) => { setIsSectorDropdownOpen(val); setIsCategoryDropdownOpen(false); setIsCountryDropdownOpen(false); }}
            />
          )}

          {(!selectedCountries.includes("All") || !selectedCategories.includes("All") || !selectedSectors.includes("All")) && (
            <button
              onClick={() => { setSelectedCountries(["All"]); setSelectedCategories(["All"]); setSelectedSectors(["All"]); }}
              style={{
                marginLeft: 'auto',
                border: 'none',
                background: 'none',
                color: '#ef4444',
                textDecoration: 'underline',
                cursor: 'pointer',
                fontSize: '0.875rem'
              }}
            >
              Clear All Filters
            </button>
          )}
        </div>

        {loading ? (<p>Loading Projects...</p>) : (
          <div className="portfolio-grid">
            {contentToRender.map((item) => (
              <div
                key={item._id}
                className="portfolio-card"
                onClick={() => openProjectModal(item)}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={getImageUrl(item.image)}
                  alt={item.title}
                  className="portfolio-img"
                  loading="lazy"
                  width="800"
                  height="600"
                />
                <div className="portfolio-overlay">
                  <div className="portfolio-content">
                    <h3 className="portfolio-title">{item.title}</h3>
                    <button className="portfolio-cta">
                      Explore <span className="arrow">→</span>
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

        {!loading && contentToRender.length === 0 && (
          <div className="no-projects">
            <p>No projects match your selected filters.</p>
          </div>
        )}
      </div>

      {selectedProject && (
        <div className="project-modal-overlay" onClick={closeProjectModal}>
          <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal-btn" onClick={closeProjectModal}>×</button>

            <div className="modal-carousel">
              {selectedProject.gallery && selectedProject.gallery.length > 0 ? (
                <>
                  <div className="carousel-image-container">
                    <img
                      src={getImageUrl(selectedProject.gallery[currentImageIndex])}
                      alt={`Slide ${currentImageIndex}`}
                      className="modal-img"
                    />
                  </div>

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

            <div className="modal-info">
              <h2 className="modal-title">{selectedProject.title}</h2>
              <h4 className="modal-subtitle" style={{ marginTop: '1rem' }}>About Project</h4>
              <p className="modal-description" style={{ whiteSpace: 'pre-line' }}>
                {selectedProject.description || "We were awarded with a 5 star hotel in which we succesfully generated and constructed Model of MEP services for the complete building consisting of Basement ﬂoor+ Ground+8 storey + Roof +Top Roof and Complete 2D shop drawings had been extracted and implemented in construction for our client M/s. BK Gulf, Dubai."}
              </p>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
