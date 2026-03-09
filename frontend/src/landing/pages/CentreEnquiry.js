import React from "react";
import "./CentreEnquiry.css";
import logo from "../assets/logo.jpeg";

function CentreEnquiry() {
  return (
    <div className="centre-page">
      {/* HEADER SECTION */}
      <div className="centre-header">
        <h1>TELL US ABOUT YOUR CENTRE</h1>
        <p>Fill your contact details. We will contact you soon..</p>
      </div>

      {/* FORM CARD */}
      <div className="centre-card">
        <div className="centre-logo">
          <img src={logo} alt="Board Logo" />
        </div>

        <form className="centre-form">
          <label>Centre Name</label>
          <input type="text" placeholder="Name" />

          <label>Centre Email ID</label>
          <input type="email" placeholder="Email Id" />

          <label>Contact Number</label>
          <input type="text" placeholder="8000000000" />

          <label>Message</label>
          <textarea placeholder="About you?" rows="5"></textarea>

          <div className="captcha-box">
            <div className="captcha-code">3X90F2</div>
            <input type="text" placeholder="Enter CAPTCHA" />
          </div>

          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
}

export default CentreEnquiry;
