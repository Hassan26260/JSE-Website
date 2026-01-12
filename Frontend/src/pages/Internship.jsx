import { Link } from "react-router-dom";
import "../styles/Page.css";

const Internship = () => {
  const internships = [
    {
      title: "Civil Engineering",
      path: "/internship/civil-engineering",
    },
    {
      title: "Mechanical Engineering",
      path: "/internship/mechanical-engineering",
    },
    {
      title: "Electrical & Electronics Engineering (EEE)",
      path: "/internship/electrical-electronics-engineering",
    },
    {
      title: "Electronics & Communication Engineering (ECE)",
      path: "/internship/electronics-communication-engineering",
    },
    {
      title: "Mechatronics Engineering",
      path: "/internship/mechatronics-engineering",
    },
    {
      title: "Architectural (B.Arch)",
      path: "/internship/architectural",
    },
    {
      title: "Structural & Environmental Engineering",
      path: "/internship/structural-environmental-engineering",
    },
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Internship Programs</h1>
        <p>Shape your engineering career with hands-on experience</p>
      </div>

      <div className="content-section">
        <div className="internship-grid">
          {internships.map((internship, index) => (
            <Link
              key={index}
              to={internship.path}
              className="internship-card"
            >
              <h3>{internship.title}</h3>
              <p>Apply Now →</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Internship;

