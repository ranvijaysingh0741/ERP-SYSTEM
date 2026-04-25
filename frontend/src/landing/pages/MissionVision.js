import React from "react";
import "./MissionVision.css";

const goals = [
  "Provide inclusive academic opportunities for learners across communities.",
  "Support students in building education and career goals with confidence.",
  "Promote skill-oriented learning for higher education and employment.",
  "Deliver transparent academic and administrative support services.",
  "Encourage knowledge, responsibility, discipline, and lifelong learning.",
];

function MissionVision() {
  return (
    <main className="mission-page">
      <div className="mission-container">
        <header className="mission-header">
          <span className="mission-badge">Our Direction</span>
          <h1>Mission And Vision</h1>
          <p>
            BVSHSE works to make school education accessible, purposeful, and
            skill-focused for learners preparing for a stronger future.
          </p>
        </header>

        <section className="mission-card">
          <div className="mission-intro">
            <h2>Creativity, Innovation, And Excellence</h2>
            <p>
              Our mission is to help students gain knowledge, clarity, and
              practical skills while supporting academic growth through flexible
              learning pathways.
            </p>
          </div>

          <div className="mission-grid">
            <article>
              <span>Mission</span>
              <h3>Accessible Education</h3>
              <p>
                To provide student-friendly academic programmes that support
                learners from different backgrounds and learning needs.
              </p>
            </article>

            <article>
              <span>Vision</span>
              <h3>Future Ready Learners</h3>
              <p>
                To build confident, responsible, and skilled learners prepared
                for higher studies, employment, and social contribution.
              </p>
            </article>
          </div>

          <div className="mission-goals">
            <h2>Core Objectives</h2>
            <ul>
              {goals.map((goal) => (
                <li key={goal}>{goal}</li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}

export default MissionVision;
