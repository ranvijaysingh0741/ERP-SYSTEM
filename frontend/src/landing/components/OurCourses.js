import React from "react";
import { Link } from "react-router-dom";
import "./OurCourses.css";

function OurCourses() {
  return (
    <section className="courses">
      <h2 className="courses-title">OUR COURSES</h2>

      <div className="courses-container">
        <Link to="/upper-primary" className="course-card">
          <h3>UPPER PRIMARY (CLASS-8th)</h3>
          <p>
            The Upper Primary Examination corresponds to Class 8th and builds
            strong foundational knowledge for secondary education. It follows
            NCERT guidelines and prepares students for higher studies.
          </p>
        </Link>

        <Link to="/secondary" className="course-card">
          <h3>SECONDARY (CLASS-10th)</h3>
          <p>
            The Secondary School Certificate Examination (SSCE) is equivalent to
            Class 10th. It follows CBSE/NCERT standards and serves as a crucial
            academic milestone for students.
          </p>
        </Link>

        <Link to="/senior-secondary" className="course-card">
          <h3>SENIOR SECONDARY (CLASS-12th)</h3>
          <p>
            The Senior Secondary School Certificate Examination (SSSCE)
            corresponds to Class 12th and prepares students for higher education
            and professional career pathways.
          </p>
        </Link>
      </div>
    </section>
  );
}

export default OurCourses;
