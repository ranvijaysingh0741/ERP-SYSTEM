import React from "react";
import "./CoursePage.css";

const documents = [
  "Class 10 pass certificate",
  "Passport size photographs",
  "Valid ID proof",
  "Date of birth certificate",
  "Admission form with required undertaking",
];

const coreSubjects = [
  { subject: "Language I", marks: "100", duration: "3 Hours" },
  { subject: "Language II", marks: "100", duration: "3 Hours" },
  { subject: "Stream subject", marks: "100", duration: "3 Hours" },
];

const streams = [
  {
    title: "Science Stream",
    subjects: ["Physics", "Chemistry", "Mathematics / Biology"],
  },
  {
    title: "Commerce Stream",
    subjects: ["Business Studies", "Accountancy", "Economics / Mathematics"],
  },
  {
    title: "Humanities / Arts Stream",
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

function Class12() {
  return (
    <main className="class-page">
      <div className="class-container">
        <header className="page-hero">
          <span className="course-badge">Senior Secondary Level</span>
          <h1>Class 12 Senior Secondary Programme</h1>
          <p>
            Senior Secondary School Certificate Examination for learners moving
            toward higher education, professional study, and career pathways.
          </p>
        </header>

        <section className="course-summary">
          <article className="summary-card">
            <strong>SSSCE</strong>
            <span>Certificate Examination</span>
          </article>
          <article className="summary-card">
            <strong>3</strong>
            <span>Major academic streams</span>
          </article>
          <article className="summary-card">
            <strong>100</strong>
            <span>Marks per subject</span>
          </article>
        </section>

        <section className="page-content">
          <div className="content-block">
            <h2>About The Programme</h2>
            <p>
              SSSCE stands for Senior Secondary School Certificate Examination
              equivalent to Class 12. The examination is conducted according to
              the syllabus prescribed by the board, and successful learners are
              awarded a certificate of qualification.
            </p>
          </div>

          <div className="content-grid">
            <div className="content-block">
              <h2>Documents Required</h2>
              <ul>
                {documents.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="content-block highlight-block">
              <h2>Programme Pathways</h2>
              <p>
                Students can choose academic subjects by stream and add
                vocational or skill-focused subjects based on interest and
                eligibility.
              </p>
            </div>
          </div>

          <div className="content-block table-card">
            <h2>Core Examination Scheme</h2>
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>S.No</th>
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

          <div className="content-block">
            <h2>Subject Scheme By Stream</h2>
            <div className="stream-grid">
              {streams.map((stream) => (
                <article className="stream-card" key={stream.title}>
                  <h3>{stream.title}</h3>
                  <ul>
                    {stream.subjects.map((subject) => (
                      <li key={subject}>{subject}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>

          <div className="content-block">
            <h2>Additional Subject List</h2>
            <div className="subject-tags">
              {additionalSubjects.map((subject) => (
                <span key={subject}>{subject}</span>
              ))}
            </div>
          </div>

          <p className="note">
            Practical, internal, and multiple-choice components may apply as
            prescribed by the board for specific subjects.
          </p>
        </section>
      </div>
    </main>
  );
}

export default Class12;
