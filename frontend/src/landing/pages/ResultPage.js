import React from "react";
import "./ResultPage.css";
import logo from "../assets/logo.jpeg";

function ResultPage() {
  return (
    <section className="result-page">
      <div className="result-header">
        <h1>SEARCH RESULT</h1>
        <br />
      </div>

      <div className="result-container">
        <div className="result-card">
          <div className="logo-section">
            <img src={logo} alt="Board Logo" className="logo" />
            <h5>Board of Vocational and Skills Higher Secondary Education</h5>
            <p>Bhopal(Madhya Pradesh)</p>
          </div>

          <label>ENROLMENT NUMBER</label>
          <input type="text" placeholder="Enrolment Number" />

          <label>D.O.B.</label>
          <input type="date" />

          <button className="search-btn">SEARCH</button>
        </div>
      </div>
    </section>
  );
}

export default ResultPage;
