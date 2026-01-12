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
            <h2>Design Services</h2>
            <p>
              Comprehensive design solutions including Architectural BIM, MEP
              Design, HVAC, Electrical Systems, and more.
            </p>
            <Link to="/services/design/architectural-bim" className="page-link">
              Explore Design Services →
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

