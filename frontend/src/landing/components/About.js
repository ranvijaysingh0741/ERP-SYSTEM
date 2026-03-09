import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="about-container">
        <h2>ABOUT</h2>
        <h3>BOARD OF VOCATIONAL AND SKILLS HIGHER SECONDARY EDUCATION</h3>

        <p>
          Board of Vocational and Skills Higher Secondary Education has been
          established by an Act 1882. The board aims to extend support to
          students of minority communities, weaker sections, and especially
          promote girls' education.
        </p>

        <p>
          The board runs Secondary and Senior Secondary level courses in English
          and Hindi medium following CBSE/NCERT pattern.
        </p>

        <a href="/contact">
          <button className="contact-btn">CONTACT US TODAY</button>
        </a>
      </div>

      {/* 👇 ADD WAVE HERE (OUTSIDE CONTAINER, INSIDE SECTION) */}
      <div className="about-wave">
        <svg viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fillOpacity="0.15"
            d="M0,224L80,197C160,171,320,117,480,112C640,107,800,149,960,170C1120,192,1280,192,1360,192L1440,192L1440,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}

export default About;
