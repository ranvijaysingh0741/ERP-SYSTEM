import React from "react";
import "./SeniorSecondary.css";

const documents = [
  "Class 10 pass certificate",
  "Passport size photographs",
  "Valid ID proof",
  "Date of birth certificate",
  "Admission form with required student undertaking",
];

const coreSubjects = [
  { subject: "Language I", marks: "100", duration: "3 Hours" },
  { subject: "Language II", marks: "100", duration: "3 Hours" },
  { subject: "Stream subject", marks: "100", duration: "3 Hours" },
];

const streams = [
  {
    title: "Science Stream",
    description: "For learners preparing for technical, medical, and science pathways.",
    subjects: ["Physics", "Chemistry", "Mathematics / Biology"],
  },
  {
    title: "Commerce Stream",
    description: "For learners interested in business, finance, accounts, and economics.",
    subjects: ["Business Studies", "Accountancy", "Economics / Mathematics"],
  },
  {
    title: "Humanities / Arts Stream",
    description: "For learners pursuing social sciences, public service, and liberal studies.",
    subjects: ["History", "Sociology", "Geography / Economics / Philosophy"],
  },
];

const additionalSubjects = [
  "Information Technology",
  "Physical Education",
  "Yoga",
  "Drawing & Painting",
  "Music",
  "Dance",
  "Agriculture",
  "Home Science",
  "Computer Science",
];

function SeniorSecondary() {
  return (
    <main className="senior-page">
      <div className="senior-container">
        <header className="senior-hero">
          <span className="senior-badge">Senior Secondary Level</span>
          <h1>Senior Secondary Programme Class 12</h1>
          <p>
            Senior Secondary School Certificate Examination for learners moving
            toward higher education, professional courses, and career-focused
            pathways.
          </p>
        </header>

        <section className="senior-summary">
          <article>
            <strong>SSSCE</strong>
            <span>Senior Secondary School Certificate Examination</span>
          </article>
          <article>
            <strong>3</strong>
            <span>Major academic stream options</span>
          </article>
          <article>
            <strong>100</strong>
            <span>Marks per core subject</span>
          </article>
        </section>

        <section className="senior-card">
          <div className="senior-block">
            <h2>About The Examination</h2>
            <p>
              SSSCE stands for Senior Secondary School Certificate Examination,
              equivalent to Class 12. The examination is conducted according to
              the syllabi prescribed by the board. After successfully passing
              the examination, students receive a certificate of qualification.
            </p>
          </div>

          <div className="senior-grid">
            <div className="senior-block">
              <h2>Documents Required</h2>
              <ul>
                {documents.map((document) => (
                  <li key={document}>{document}</li>
                ))}
              </ul>
            </div>

            <div className="senior-block senior-highlight">
              <h2>Student Pathway</h2>
              <p>
                Students may choose a stream based on academic interest,
                eligibility, and future goals in higher education, vocational
                study, or employment.
              </p>
            </div>
          </div>

          <div className="senior-block">
            <h2>Core Examination Scheme</h2>
            <div className="senior-table-wrap">
              <table className="senior-table">
                <thead>
                  <tr>
                    <th>S.No.</th>
                    <th>Subject</th>
                    <th>Max Marks</th>
                    <th>Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {coreSubjects.map((item, index) => (
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

          <div className="senior-block">
            <h2>Subject Scheme By Stream</h2>
            <div className="stream-grid">
              {streams.map((stream) => (
                <article className="stream-card" key={stream.title}>
                  <h3>{stream.title}</h3>
                  <p>{stream.description}</p>
                  <ul>
                    {stream.subjects.map((subject) => (
                      <li key={subject}>{subject}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>

          <div className="senior-block">
            <h2>Additional Subject List</h2>
            <div className="subject-tags">
              {additionalSubjects.map((subject) => (
                <span key={subject}>{subject}</span>
              ))}
            </div>
          </div>

          <p className="senior-note">
            Practical, internal, and multiple-choice components may apply as
            prescribed by the board for specific subjects.
          </p>
        </section>
      </div>
    </main>
  );
}

export default SeniorSecondary;
