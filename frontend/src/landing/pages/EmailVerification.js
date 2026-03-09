import React from "react";
import "./EmailVerification.css";

const EmailVerification = () => {
  return (
    <div className="verification-page">
      <div className="verification-container">
        <h1>Email Verification</h1>

        <div className="verification-card">
          <h2>For Email Verification</h2>
          <p>Click the button given below to send an e-mail</p>

          <a href="mailto:contact@vmsmandal.org" className="email-btn">
            contact@vmsmandal.org
          </a>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;
