import "../../styles/Page.css";

const SecondmentTeam = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Secondment Team</h1>
        <p>Temporary engineering professionals to support your project needs</p>
      </div>

      <div className="content-section">
        <div className="service-item">
          <h2>What We Offer</h2>
          <p>
            Our Secondment Team service provides temporary engineering
            professionals who can join your organization for specific project
            durations. This flexible solution helps you meet project deadlines
            and handle peak workloads without long-term commitments.
          </p>

          <h2>Benefits</h2>
          <ul style={{ lineHeight: "1.8", color: "#666" }}>
            <li>Short to medium-term engagements</li>
            <li>Experienced professionals ready to contribute</li>
            <li>Flexible contract terms</li>
            <li>Seamless integration with your team</li>
            <li>Cost-effective staffing solution</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SecondmentTeam;

