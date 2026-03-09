import React from "react";
import "./ContactInfoSection.css";

const ContactInfoSection = () => {
  return (
    <section className="contact-wrapper">
      <div className="contact-card">
        <div className="contact-row top-row">
          <div className="contact-box">
            <h3>CONTACT NUMBER</h3>
            <p>+91 9343510828</p>
          </div>

          <div className="contact-box">
            <h3>EMAIL ID</h3>
            <p>contact@vmsmandal.org</p>
          </div>
        </div>

        <div className="contact-row bottom-row">
          <div className="contact-box full-width">
            <h3>CONTACT TIMING</h3>
            <p>10:00 AM - 05:00 PM</p>
            <p>( Saturday & Sunday Closed )</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfoSection;
