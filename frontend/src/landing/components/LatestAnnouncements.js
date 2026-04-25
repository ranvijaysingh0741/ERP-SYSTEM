import React from "react";
import { Link } from "react-router-dom";
import "./LatestAnnouncements.css";

const announcements = [
  {
    tag: "Admission",
    date: "2025-26",
    title: "Admissions for the new academic session are now open.",
    action: "Apply here",
    to: "/contact",
  },
  {
    tag: "Examination",
    date: "Soon",
    title: "Senior Secondary exam datesheet will be released shortly.",
    action: "View datesheet",
    to: "/result",
  },
  {
    tag: "Student Notice",
    date: "New",
    title: "Students can check important board updates and result information online.",
    action: "Check updates",
    to: "/result",
  },
];

const LatestAnnouncements = () => {
  return (
    <section className="announcement-section">
      <div className="announcement-container">
        <div className="announcement-header">
          <span className="announcement-badge">Notice Board</span>
          <h2 className="announcement-title">Latest Announcements</h2>
          <p className="announcement-subtitle">
            Stay updated with admissions, examination dates, student notices, and
            important board information.
          </p>
        </div>

        <div className="announcement-content">
          <div className="announcement-feature">
            <span className="announcement-feature-label">Important</span>
            <h3>Academic updates at one place</h3>
            <p>
              Quick access to fresh notices, admission alerts, examination
              updates, and student support information.
            </p>
            <Link to="/contact" className="announcement-feature-link">
              Contact office
            </Link>
          </div>

          <div className="announcement-list">
            {announcements.map((announcement) => (
              <article className="announcement-item" key={announcement.title}>
                <div className="announcement-icon" aria-hidden="true">
                  {announcement.tag.charAt(0)}
                </div>

                <div className="announcement-text">
                  <div className="announcement-meta">
                    <span>{announcement.tag}</span>
                    <span>{announcement.date}</span>
                  </div>
                  <h3>{announcement.title}</h3>
                  <Link to={announcement.to} className="announcement-link">
                    {announcement.action}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestAnnouncements;
