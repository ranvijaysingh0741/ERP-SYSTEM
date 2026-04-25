import React from "react";
import "./Recognition.css";

const recognitionPoints = [
  "Skill-oriented academic structure for school-level learners",
  "Curriculum aligned with recognized school education patterns",
  "Support for higher education, employment, and vocational pathways",
];

function Recognition() {
  return (
    <section className="recognition">
      <h2>Accreditations & Approvals</h2>
      <div className="recognition-card">
        <p>
          BVSHSE is committed to accessible, inclusive, and skill-focused
          education that helps learners continue academics and prepare for
          career pathways with confidence.
        </p>

        <div className="recognition-points">
          {recognitionPoints.map((point) => (
            <span key={point}>{point}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Recognition;
