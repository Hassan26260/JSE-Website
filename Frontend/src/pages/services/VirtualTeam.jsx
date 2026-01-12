import "../../styles/Page.css";

const VirtualTeam = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Virtual Team for Hire</h1>
        <p>Flexible engineering teams ready to integrate with your projects</p>
      </div>

      <div className="content-section">
        <div className="service-item">
          <h2>What We Offer</h2>
          <p>
            Our Virtual Team for Hire service provides you with access to
            skilled engineering professionals who can seamlessly integrate with
            your existing projects. Whether you need additional capacity,
            specialized expertise, or flexible staffing solutions, we have the
            right team for you.
          </p>

          <h2>Benefits</h2>
          <ul style={{ lineHeight: "1.8", color: "#666" }}>
            <li>Scalable team size based on project needs</li>
            <li>Access to diverse engineering expertise</li>
            <li>Cost-effective solution without overhead</li>
            <li>Quick onboarding and integration</li>
            <li>Flexible engagement models</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VirtualTeam;

