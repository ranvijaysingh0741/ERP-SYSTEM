import React from "react";
import "./Secondary.css";

const documents = [
  "8th pass or 9th pass/fail report card",
  "Passport size photographs",
  "Valid ID proof",
  "Date of birth certificate",
  "Admission form with required student undertaking",
];

const examScheme = [
  { subject: "Language I", papers: "1", marks: "100", duration: "3 Hours" },
  { subject: "Language II", papers: "1", marks: "100", duration: "3 Hours" },
  { subject: "Mathematics", papers: "1", marks: "80 + 20*", duration: "3 Hours" },
  { subject: "Science", papers: "1", marks: "60 + 20* + 20**", duration: "3 Hours" },
  { subject: "Social Science", papers: "1", marks: "80 + 20*", duration: "3 Hours" },
];

const additionalSubjects = [
  { subject: "Music", marks: "40 + 60**", duration: "3 Hours" },
  { subject: "Drawing & Painting", marks: "30 + 70**", duration: "3 Hours" },
  { subject: "Typewriting English", marks: "30 + 70**", duration: "3 Hours" },
  { subject: "Information Technology", marks: "80 + 20*", duration: "3 Hours" },
  { subject: "Home Science", marks: "40 + 60**", duration: "3 Hours" },
];

function Secondary() {
  return (
    <main className="secondary-page">
      <div className="secondary-container">
        <header className="secondary-hero">
          <span className="secondary-badge">Secondary Level</span>
          <h1>Secondary Programme Class 10</h1>
          <p>
            Secondary School Certificate Examination for learners preparing for
            senior secondary education, vocational learning, and future
            academic pathways.
          </p>
        </header>

        <section className="secondary-summary">
          <article>
            <strong>SSCE</strong>
            <span>Secondary School Certificate Examination</span>
          </article>
          <article>
            <strong>Twice</strong>
            <span>Examination cycle each academic year</span>
          </article>
          <article>
            <strong>3 Hours</strong>
            <span>Standard question paper duration</span>
          </article>
        </section>

        <section className="secondary-card">
          <div className="secondary-block">
            <h2>About The Examination</h2>
            <p>
              SSCE stands for Secondary School Certificate Examination,
              equivalent to Class 10. The examination is conducted according to
              the syllabus prescribed by the board. After passing the
              examination, students receive a certificate of qualification.
            </p>
          </div>

          <div className="secondary-grid">
            <div className="secondary-block">
              <h2>Documents Required</h2>
              <ul>
                {documents.map((document) => (
                  <li key={document}>{document}</li>
                ))}
              </ul>
            </div>

            <div className="secondary-block secondary-highlight">
              <h2>Student Pathway</h2>
              <p>
                This programme supports learners moving from foundational
                education into senior secondary study, skill-based courses, and
                career-focused academic choices.
              </p>
            </div>
          </div>

          <div className="secondary-block">
            <h2>Scheme Of Examination</h2>
            <div className="secondary-table-wrap">
              <table className="secondary-table">
                <thead>
                  <tr>
                    <th>S.No.</th>
                    <th>Subject</th>
                    <th>Papers</th>
                    <th>Max Marks</th>
                    <th>Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {examScheme.map((item, index) => (
                    <tr key={item.subject}>
                      <td>{index + 1}</td>
                      <td>{item.subject}</td>
                      <td>{item.papers}</td>
                      <td>{item.marks}</td>
                      <td>{item.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="secondary-block">
            <h2>Additional Subjects If Opted</h2>
            <div className="secondary-table-wrap">
              <table className="secondary-table">
                <thead>
                  <tr>
                    <th>Subject</th>
                    <th>Max Marks</th>
                    <th>Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {additionalSubjects.map((item) => (
                    <tr key={item.subject}>
                      <td>{item.subject}</td>
                      <td>{item.marks}</td>
                      <td>{item.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="secondary-note">
            * Multiple Choice Question. ** Practical Examination.
          </p>
        </section>
      </div>
    </main>
  );
}

export default Secondary;
