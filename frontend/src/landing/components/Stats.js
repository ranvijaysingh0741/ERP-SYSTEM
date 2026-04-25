import React from "react";
import "./Stats.css";

const stats = [
  { value: "25,000+", label: "Students supported through academic programmes" },
  { value: "3", label: "Learning levels from Upper Primary to Senior Secondary" },
  { value: "2", label: "Mediums of study: Hindi and English" },
  { value: "ODL", label: "Flexible open and distance learning support" },
];

function Stats() {
  return (
    <section className="stats">
      <h2>Our Achievements</h2>
      <div className="stats-grid">
        {stats.map((item) => (
          <article className="stats-card" key={item.value}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Stats;
