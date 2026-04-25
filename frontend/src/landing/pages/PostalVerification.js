import React from "react";
import "./PostalVerification.css";

const requirements = [
  "Application on plain paper or official letterhead",
  "Enrollment number, roll number, certificate number, class, and session",
  "Self-attested photocopy of marksheet or certificate",
  "Clear postal address, phone number, and email ID",
];

const processSteps = [
  "Prepare the application with complete student and document details.",
  "Attach self-attested document photocopies for verification.",
  "Send the application by Speed Post or Registered Post only.",
  "Allow the verification desk time to review and dispatch the response.",
];

const PostalVerification = () => {
  return (
    <main className="postal-page">
      <div className="postal-container">
        <header className="postal-header">
          <span className="postal-badge">Verification Desk</span>
          <h1>Postal Verification</h1>
          <p>
            Apply by post for verification of academic certificates, marksheets,
            and related student records issued by the board.
          </p>
        </header>

        <section className="postal-card">
          <div className="postal-intro">
            <h2>Postal Document Verification Procedure</h2>
            <p>
              Students, organisations, agencies, government departments, and
              employers may request verification of academic documents by
              submitting complete details through registered postal channels.
            </p>
          </div>

          <div className="postal-grid">
            <article className="postal-panel">
              <h3>Required Information</h3>
              <ul>
                {requirements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="postal-panel fee-panel">
              <h3>Fee & Timeline</h3>
              <p>
                Verification fee and postal charges should be submitted as per
                official board instructions. Normal verification processing may
                take up to 30 working days after complete documents are
                received.
              </p>
            </article>
          </div>

          <div className="postal-steps">
            {processSteps.map((step, index) => (
              <div className="postal-step" key={step}>
                <strong>{index + 1}</strong>
                <span>{step}</span>
              </div>
            ))}
          </div>

          <div className="address-box">
            <h3>Postal Address</h3>
            <p>
              The Secretary,
              <br />
              Board of Vocational and Skills Higher Secondary Education,
              <br />
              Bhopal, Madhya Pradesh - 462016
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default PostalVerification;
