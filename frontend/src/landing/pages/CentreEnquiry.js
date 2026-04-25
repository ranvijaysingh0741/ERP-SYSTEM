import React from "react";
import "./CentreEnquiry.css";
import logo from "../assets/logo.jpeg";

const centreBenefits = [
  "Academic support for Secondary and Senior Secondary learners",
  "Guidance for admissions, documentation, and student verification",
  "Updates for notices, assignments, examinations, and academic calendars",
];

function CentreEnquiry() {
  return (
    <main className="centre-page">
      <div className="centre-container">
        <div className="centre-header">
          <span className="centre-badge">Centre Partnership</span>
          <h1>Tell Us About Your Centre</h1>
          <p>
            Share your institution details with us. Our academic coordination
            team will review your enquiry and contact you for the next steps.
          </p>
        </div>

        <div className="centre-layout">
          <aside className="centre-info">
            <div className="centre-logo">
              <img src={logo} alt="Board Logo" />
            </div>

            <h2>Become an Academic Support Centre</h2>
            <p>
              Partner with BVSHSE to support learners through accessible,
              skill-oriented, and student-friendly education services.
            </p>

            <div className="centre-benefits">
              {centreBenefits.map((benefit) => (
                <span key={benefit}>{benefit}</span>
              ))}
            </div>
          </aside>

          <section className="centre-card">
            <div className="centre-card-heading">
              <h2>Centre Enquiry Form</h2>
              <p>Fields marked with * are required.</p>
            </div>

            <form className="centre-form">
              <div className="form-grid">
                <div className="form-field">
                  <label htmlFor="centreName">Centre Name *</label>
                  <input id="centreName" type="text" placeholder="Enter centre name" />
                </div>

                <div className="form-field">
                  <label htmlFor="coordinatorName">Coordinator Name *</label>
                  <input
                    id="coordinatorName"
                    type="text"
                    placeholder="Enter coordinator name"
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="centreEmail">Centre Email ID *</label>
                  <input id="centreEmail" type="email" placeholder="name@example.com" />
                </div>

                <div className="form-field">
                  <label htmlFor="contactNumber">Contact Number *</label>
                  <input id="contactNumber" type="tel" placeholder="Enter mobile number" />
                </div>

                <div className="form-field">
                  <label htmlFor="city">City / District</label>
                  <input id="city" type="text" placeholder="Enter city or district" />
                </div>

                <div className="form-field">
                  <label htmlFor="state">State</label>
                  <input id="state" type="text" placeholder="Enter state" />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  placeholder="Tell us about your institution, available facilities, and expected student support."
                  rows="5"
                ></textarea>
              </div>

              <div className="captcha-box">
                <div>
                  <label htmlFor="captcha">Verification Code</label>
                  <div className="captcha-code">3X90F2</div>
                </div>
                <input id="captcha" type="text" placeholder="Enter CAPTCHA" />
              </div>

              <button type="submit">Submit Enquiry</button>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}

export default CentreEnquiry;
