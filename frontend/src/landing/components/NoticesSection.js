import React from "react";
import { Link } from "react-router-dom";
import "./NoticesSection.css";

const NoticesSection = () => {
  return (
    <section className="notices-section">
      <div className="notices-container">
        <h2 className="notices-title">NOTICES</h2>

        <div className="notices-grid">
          <Link to="/academic-notices" className="notice-card">
            <h3>ACADEMIC NOTICES</h3>
            <p>
              Stay updated with important academic announcements including exam
              schedules, syllabus changes, and internal assessments. All updates
              are posted here for students and educators.
            </p>
          </Link>

          <Link to="/public-notices" className="notice-card">
            <h3>PUBLIC NOTICES</h3>
            <p>
              Find official communications from the board regarding policies,
              public statements, and regulatory updates. This ensures
              transparency for all stakeholders.
            </p>
          </Link>

          <Link to="/datesheet" className="notice-card">
            <h3>DATESHEET</h3>
            <p>
              Access the latest examination datesheets for Secondary and Senior
              Secondary levels. Plan your preparation with accurate timelines
              and subject-wise schedules.
            </p>
          </Link>

          <Link to="/timetable" className="notice-card">
            <h3>TIME TABLE</h3>
            <p>
              View detailed timetables for classes, practicals, and exams.
              Organized by course and medium to help students manage their study
              routines effectively.
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NoticesSection;
