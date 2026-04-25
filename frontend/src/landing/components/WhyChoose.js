import React from "react";
import "./WhyChoose.css";

const reasons = [
  {
    title: "Flexible Learning",
    text: "Study through learner-friendly academic options designed for different student needs.",
  },
  {
    title: "Wide Subject Choice",
    text: "Choose academic and vocational subjects that support higher study and career growth.",
  },
  {
    title: "Student Support",
    text: "Receive guidance for admissions, notices, results, verification, and academic updates.",
  },
  {
    title: "Skill Focused",
    text: "Build practical knowledge through skill-oriented learning pathways.",
  },
  {
    title: "Inclusive Access",
    text: "Education opportunities for learners from different backgrounds and locations.",
  },
  {
    title: "Recognized Pattern",
    text: "Academic structure aligned with familiar school education standards and progression.",
  },
];

function WhyChoose() {
  return (
    <section className="why">
      <h2>Why Choose BVSHSE?</h2>
      <div className="card-container">
        {reasons.map((reason) => (
          <div className="card" key={reason.title}>
            <h3>{reason.title}</h3>
            <p>{reason.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChoose;
