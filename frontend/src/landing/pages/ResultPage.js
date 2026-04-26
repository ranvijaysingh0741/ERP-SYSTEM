import React from "react";
import "./ResultPage.css";
import logo from "../assets/logo.jpeg";

const resultHelp = [
  "Enter enrolment number exactly as printed on your admit card.",
  "Use date of birth from your registration record.",
  "Contact support if your record is not found.",
];

function ResultPage() {
  return (
    <main className="result-page">
      <div className="result-wrap">
        <header className="result-header">
          <span className="result-badge">Student Service</span>
          <h1>Search Result</h1>
          <p>
            Check Secondary, Senior Secondary, and vocational programme results
            using your enrolment details.
          </p>
        </header>

        <section className="result-card">
          <div className="result-logo-section">
            <img src={logo} alt="Board Logo" className="result-logo" />
            <div>
              <h2>BVSHSE Result Portal</h2>
              <p>Board of Vocational and Skills Higher Secondary Education</p>
            </div>
          </div>

          <form className="result-form">
            <label htmlFor="enrollment">Enrolment Number</label>
            <input id="enrollment" type="text" placeholder="Enter enrolment number" />

            <label htmlFor="dob">Date of Birth</label>
            <input id="dob" type="date" />

            <button className="search-btn" type="submit">
              Search Result
            </button>
          </form>

          <div className="result-help">
            {resultHelp.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default ResultPage;
