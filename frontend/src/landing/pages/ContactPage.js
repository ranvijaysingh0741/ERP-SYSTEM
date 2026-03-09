import React from "react";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <section className="contact-page">
      {/* PAGE HEADER */}
      <div className="contact-header">
        <h1>CONTACT PAGE</h1>
      </div>

      <div className="contact-container">
        {/* BOARD OFFICE */}
        <div className="contact-card">
          <h2>Board Office Address</h2>
          <p>
            <strong>The Secretary</strong>
          </p>
          <p>Vidarbha Board of Secondary Education</p>
          <p>Ramtek, Nagpur (Maharashtra)- 441106</p>

          <div className="contact-block">
            <h4>For Admission & Info</h4>
            <p>07114-277419</p>
            <p>contact@vmsmandal.org</p>
          </div>

          <div className="contact-block">
            <h4>For Verification</h4>
            <p>+91 7387787963</p>
            <p>verification@vmsmandal.org</p>
          </div>

          <div className="contact-block">
            <h4>Contact Timing</h4>
            <p>10:00 AM – 05:00 PM</p>
            <p>( Saturday & Sunday Closed )</p>
          </div>
        </div>

        {/* REGIONAL OFFICE */}
        <div className="contact-card">
          <h2>State/Regional Office (Madhya Pradesh)</h2>
          <p>
            <strong>The Regional Secretary</strong>
          </p>
          <p>Vidarbha Board of Secondary Education Regional Office</p>
          <p>New Darpan Colony Thatipur,</p>
          <p>Gwalior (Madhya Pradesh)- 474011</p>

          <div className="contact-block">
            <h4>For Contact</h4>
            <p>+91 9343510828</p>
            <p>contact@vmsmandal.org</p>
          </div>

          <div className="contact-block">
            <h4>Contact Timing</h4>
            <p>10:00 AM – 05:00 PM</p>
            <p>( Saturday & Sunday Closed )</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
