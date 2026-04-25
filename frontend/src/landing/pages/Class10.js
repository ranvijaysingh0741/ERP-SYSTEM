import React from "react";
import "./CoursePage.css";

const documents = [
  "8th pass or 9th pass/fail report card",
  "Passport size photographs",
  "Valid ID proof",
  "Date of birth certificate",
  "Admission form with required undertaking",
];

const subjects = [
  { subject: "Language I", papers: "1", marks: "100", duration: "3 Hours" },
  { subject: "Language II", papers: "1", marks: "100", duration: "3 Hours" },
  { subject: "Mathematics", papers: "1", marks: "80 + 20*", duration: "3 Hours" },
  { subject: "Science", papers: "1", marks: "60 + 20* + 20**", duration: "3 Hours" },
  { subject: "Social Science", papers: "1", marks: "80 + 20*", duration: "3 Hours" },
];

const additionalSubjects = [
  "Information Technology",
  "Home Science",
  "Drawing & Painting",
  "Music",
  "Typewriting English",
];

function Class10() {
  return (
    <main className="class-page">
      <div className="class-container">
        <header className="page-hero">
          <span className="course-badge">Secondary Level</span>
          <h1>Class 10 Secondary Programme</h1>
          <p>
            Secondary School Certificate Examination designed for learners
            preparing for higher academic and vocational pathways.
          </p>
        </header>

        <section className="course-summary">
          <article className="summary-card">
            <strong>SSCE</strong>
            <span>Certificate Examination</span>
          </article>
          <article className="summary-card">
            <strong>Twice</strong>
            <span>Exam cycle each year</span>
          </article>
          <article className="summary-card">
            <strong>3 Hours</strong>
            <span>Standard paper duration</span>
          </article>
        </section>

        <section className="page-content">
          <div className="content-block">
            <h2>About The Programme</h2>
            <p>
              SSCE stands for Secondary School Certificate Examination
              equivalent to Class 10. The examination is conducted as per board
              guidelines and the prescribed syllabus. After successfully passing
              the examination, students receive a certificate of qualification.
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
              <h2>Who Can Apply?</h2>
              <p>
                Learners who have completed Upper Primary level or have a valid
                previous class report card can apply for the Secondary
                programme.
              </p>
            </div>
          </div>

          <div className="content-block table-card">
            <h2>Scheme Of Examination</h2>
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Subject</th>
                    <th>Papers</th>
                    <th>Max Marks</th>
                    <th>Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {subjects.map((item, index) => (
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

          <div className="content-block">
            <h2>Additional Subjects</h2>
            <div className="subject-tags">
              {additionalSubjects.map((subject) => (
                <span key={subject}>{subject}</span>
              ))}
            </div>
          </div>

          <p className="note">
            * Multiple Choice Question. ** Practical Examination.
          </p>
        </section>
      </div>
    </main>
  );
}

export default Class10;
