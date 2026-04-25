import React from "react";
import { Link } from "react-router-dom";
import "./Portals.css";

const portals = [
  {
    label: "Student Verification",
    description: "Verify student records and academic credentials.",
    to: "/email-verification",
  },
  {
    label: "Student Login",
    description: "Access admission, result, and student services.",
    to: "/login",
  },
  {
    label: "Academic Centre Login",
    description: "Centre access for academic and administrative updates.",
    to: "/centre-enquiry",
  },
];

function Portals() {
  return (
    <section className="portals">
      <h2>Student & Academic Portals</h2>
      <div className="portal-buttons">
        {portals.map((portal) => (
          <Link to={portal.to} className="portal-card" key={portal.label}>
            <strong>{portal.label}</strong>
            <span>{portal.description}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Portals;
