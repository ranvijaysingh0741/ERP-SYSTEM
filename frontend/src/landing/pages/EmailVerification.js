import React from "react";
import "./EmailVerification.css";

const requiredDetails = [
  "Student full name",
  "Enrollment or roll number",
  "Class / programme name",
  "Scanned certificate or marksheet copy",
];

const steps = [
  "Prepare student and certificate details.",
  "Attach a clear scanned copy of the document.",
  "Send the email to the verification desk.",
];

const EmailVerification = () => {
  const mailLink =
    "mailto:verification@bnse.co.in?subject=Email%20Verification%20Request%20-%20BVSHSE";

  return (
    <main className="verification-page">
      <div className="verification-container">
        <header className="verification-header">
          <span className="verification-badge">Verification Desk</span>
          <h1>Email Verification</h1>
          <p>
            Submit certificate or marksheet verification requests by email with
            complete student details and scanned documents.
          </p>
        </header>

        <section className="verification-layout">
          <article className="verification-card">
            <h2>Send Verification Request</h2>
            <p>
              Use the official email desk for document verification. Include all
              required details so the team can process your request smoothly.
            </p>

            <a href={mailLink} className="email-btn">
              verification@bnse.co.in
            </a>
          </article>

          <article className="verification-card details-card">
            <h2>Required Details</h2>
            <ul>
              {requiredDetails.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="verification-steps">
          {steps.map((step, index) => (
            <div className="step-card" key={step}>
              <strong>{index + 1}</strong>
              <span>{step}</span>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
};

export default EmailVerification;
