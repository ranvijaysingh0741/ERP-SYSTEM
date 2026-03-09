import React from "react";
import "./LatestAnnouncements.css";

const LatestAnnouncements = () => {
  return (
    <section className="announcement-section">
      <div className="announcement-container">
        <h2 className="announcement-title">LATEST ANNOUNCEMENTS</h2>

        <div className="announcement-list">
          <div className="announcement-item">
            <span className="pin">📌</span>
            <p>
              Admissions for 2025-26 are now open.
              <span className="announcement-link"> Apply here</span>
            </p>
          </div>

          <div className="announcement-item">
            <span className="pin">📌</span>
            <p>
              Datesheet for Senior Secondary exams will be released soon.
              <span className="announcement-link"> View datesheet</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestAnnouncements;
