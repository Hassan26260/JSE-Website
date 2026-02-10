import { Link } from "react-router-dom";
import "../styles/Page.css";

const Services = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Our Services</h1>
        <p>Comprehensive engineering solutions tailored to your needs</p>
      </div>

      <div className="content-section">
        <div className="service-list">

          <div className="service-item">
            <h2>MEP Engineering</h2>
            <p>Comprehensive MEP solutions including HVAC, Electrical, and Firefighting.</p>
            <Link to="/services/design/mep-design" className="page-link">Explore MEP →</Link>
          </div>

          <div className="service-item">
            <h2>Architectural BIM</h2>
            <p>Revolutionizing architecture with detailed BIM models.</p>
            <Link to="/services/design/architectural-bim" className="page-link">Explore Architecture →</Link>
          </div>

          <div className="service-item">
            <h2>Structural Engineering</h2>
            <p>Advanced structural engineering and analysis.</p>
            <Link to="/services/design/structural" className="page-link">Explore Structural →</Link>
          </div>

          <div className="service-item">
            <h2>Steel Structure Detailing</h2>
            <p>Accurate Tekla detailing and steel structures.</p>
            <Link to="/services/design/steel-structure-detailing" className="page-link">Explore Steel →</Link>
          </div>

          <div className="service-item">
            <h2>Infrastructural Services</h2>
            <p>Robust infrastructure solutions for modern communities.</p>
            <Link to="/services/infrastructural-services" className="page-link">Explore Infrastructure →</Link>
          </div>

          <div className="service-item">
            <h2>Virtual Team for Hire</h2>
            <p>
              Access skilled engineering professionals through our flexible
              virtual team solutions. Perfect for scaling your projects without
              the overhead.
            </p>
            <Link to="/services/virtual-team" className="page-link">
              Learn More →
            </Link>
          </div>

          <div className="service-item">
            <h2>Secondment Team</h2>
            <p>
              Temporary engineering professionals to support your project needs.
              Flexible engagement models to suit your requirements.
            </p>
            <Link to="/services/secondment-team" className="page-link">
              Learn More →
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Services;

