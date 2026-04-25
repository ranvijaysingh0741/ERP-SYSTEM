import React from "react";
import "./ChairmanMessage.css";

const focusPoints = [
  "Accessible learning for students from different backgrounds",
  "Academic and vocational pathways for future readiness",
  "Flexible support through regular, private, and ODL modes",
];

function ChairmanMessage() {
  return (
    <main className="chairman-page">
      <div className="chairman-container">
        <div className="chairman-header">
          <span className="chairman-badge">Leadership Message</span>
          <h1>Message From The Chairman</h1>
          <p>
            A message for parents, learners, academic centres, and all
            stakeholders working toward inclusive and skill-oriented education.
          </p>
        </div>

        <article className="chairman-card">
          <div className="chairman-profile">
            <div className="chairman-avatar" aria-hidden="true">
              C
            </div>
            <div>
              <h2>Chairman</h2>
              <p>Board of Vocational and Skills Higher Secondary Education</p>
            </div>
          </div>

          <div className="chairman-message">
            <h2>Respected Parents and Dear Students,</h2>

            <p>
              The Board of Vocational and Skills Higher Secondary Education is
              committed to supporting learners through accessible, meaningful,
              and skill-focused education.
            </p>

            <p>
              With the passage of time, education has changed. Every parent
              wants their child to receive quality education, practical
              knowledge, and the confidence to become a responsible citizen.
            </p>

            <p>
              BVSHSE conducts Upper Primary, Secondary, and Senior Secondary
              level examinations through regular, private, and ODL modes. These
              academic pathways help learners continue education and prepare for
              higher studies.
            </p>

            <p>
              Our aim is to provide equal learning opportunities and encourage
              students to build a bright future through discipline, knowledge,
              and skill development.
            </p>

            <div className="signature">
              <span>Yours Faithfully,</span>
              <strong>Chairman, BVSHSE</strong>
            </div>

            <div className="chairman-focus">
              {focusPoints.map((point) => (
                <span key={point}>{point}</span>
              ))}
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}

export default ChairmanMessage;
