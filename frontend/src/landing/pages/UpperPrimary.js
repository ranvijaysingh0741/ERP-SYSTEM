import React from "react";
import "./UpperPrimary.css";

const documents = [
  "Previous class report card",
  "Passport size photographs",
  "Birth certificate",
  "Transfer certificate if applicable",
  "Valid ID proof",
];

const examScheme = [
  { subject: "Language I", marks: "100", duration: "3 Hours" },
  { subject: "Language II", marks: "100", duration: "3 Hours" },
  { subject: "Mathematics", marks: "100", duration: "3 Hours" },
  { subject: "Science", marks: "100", duration: "3 Hours" },
  { subject: "Social Science", marks: "100", duration: "3 Hours" },
];

const learningGoals = [
  "Build reading, writing, and communication confidence",
  "Strengthen mathematical and scientific thinking",
  "Prepare learners for Secondary level academic progression",
];

function UpperPrimary() {
  return (
    <main className="upper-page">
      <div className="upper-container">
        <header className="upper-hero">
          <span className="upper-badge">Upper Primary Level</span>
          <h1>Upper Primary Programme Class 8</h1>
          <p>
            A foundational academic programme for learners preparing to enter
            Secondary education with stronger subject understanding and study
            habits.
          </p>
        </header>

        <section className="upper-summary">
          <article>
            <strong>Class 8</strong>
            <span>Upper Primary examination level</span>
          </article>
          <article>
            <strong>5</strong>
            <span>Core academic subjects</span>
          </article>
          <article>
            <strong>3 Hours</strong>
            <span>Standard paper duration</span>
          </article>
        </section>

        <section className="upper-card">
          <div className="upper-block">
            <h2>About Upper Primary Education</h2>
            <p>
              The Upper Primary Examination corresponds to Class 8 and forms a
              strong academic foundation for Secondary education. It helps
              students strengthen core concepts before entering Class 10 level
              studies.
            </p>
          </div>

          <div className="upper-grid">
            <div className="upper-block">
              <h2>Documents Required</h2>
              <ul>
                {documents.map((document) => (
                  <li key={document}>{document}</li>
                ))}
              </ul>
            </div>

            <div className="upper-block upper-highlight">
              <h2>Learning Goals</h2>
              <ul>
                {learningGoals.map((goal) => (
                  <li key={goal}>{goal}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="upper-block">
            <h2>Scheme Of Upper Primary Examination</h2>
            <div className="upper-table-wrap">
              <table className="upper-table">
                <thead>
                  <tr>
                    <th>S.No.</th>
                    <th>Subject</th>
                    <th>Max Marks</th>
                    <th>Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {examScheme.map((item, index) => (
                    <tr key={item.subject}>
                      <td>{index + 1}</td>
                      <td>{item.subject}</td>
                      <td>{item.marks}</td>
                      <td>{item.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="upper-note">
            Students should keep all admission documents ready before submitting
            the application form.
          </p>
        </section>
      </div>
    </main>
  );
}

export default UpperPrimary;
