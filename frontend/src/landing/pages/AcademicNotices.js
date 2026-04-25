import React from "react";
import "./AcademicNotices.css";

const notices = [
  {
    date: "20 Apr 2026",
    tag: "Admission",
    title: "Academic session 2026 admission guidelines released",
    description:
      "Students and study centres are advised to review eligibility, documents, and registration instructions before submission.",
    status: "New",
  },
  {
    date: "15 Apr 2026",
    tag: "Assignments",
    title: "Assignment submission window open for Secondary and Senior Secondary",
    description:
      "Learners should upload completed assignments through the prescribed channel before the final deadline.",
    status: "Active",
  },
  {
    date: "08 Apr 2026",
    tag: "Examination",
    title: "Practical examination instructions for vocational subjects",
    description:
      "Academic centres must follow the practical assessment format and maintain student attendance records.",
    status: "Important",
  },
];

const calendar = [
  { date: "01 May 2026", day: "Friday", event: "Academic registration review begins" },
  { date: "15 May 2026", day: "Friday", event: "Assignment upload deadline" },
  { date: "05 Jun 2026", day: "Friday", event: "Practical assessment schedule update" },
  { date: "21 Jun 2026", day: "Sunday", event: "Student record verification window" },
  { date: "15 Aug 2026", day: "Saturday", event: "Independence Day" },
  { date: "02 Oct 2026", day: "Friday", event: "Mahatma Gandhi Jayanti" },
  { date: "25 Dec 2026", day: "Friday", event: "Christmas Day" },
];

const AcademicNotices = () => {
  return (
    <section className="academic-page">
      <div className="academic-container">
        <div className="academic-header">
          <span className="academic-badge">Notice Desk</span>
          <h1 className="academic-title">Academic Notices</h1>
          <p>
            Find the latest academic circulars, examination instructions,
            assignment updates, and important dates for students and centres.
          </p>
        </div>

        <div className="academic-layout">
          <div className="academic-card notice-panel">
            <div className="academic-card-heading">
              <h2>Latest Updates</h2>
              <span>{notices.length} notices</span>
            </div>

            <div className="academic-notice-list">
              {notices.map((notice) => (
                <article className="academic-notice" key={notice.title}>
                  <div className="academic-notice-meta">
                    <span>{notice.tag}</span>
                    <time>{notice.date}</time>
                  </div>
                  <h3>{notice.title}</h3>
                  <p>{notice.description}</p>
                  <strong>{notice.status}</strong>
                </article>
              ))}
            </div>
          </div>

          <div className="academic-card calendar-panel">
            <div className="academic-card-heading">
              <h2>Important Dates</h2>
              <span>2026</span>
            </div>

            <div className="table-wrapper">
              <table className="holiday-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Day</th>
                    <th>Event</th>
                  </tr>
                </thead>
                <tbody>
                  {calendar.map((item) => (
                    <tr key={item.event}>
                      <td>{item.date}</td>
                      <td>{item.day}</td>
                      <td>{item.event}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="academic-note">
              Dates may be revised by official board circular. Students should
              check this page regularly for updates.
            </div>
          </div>
        </div>

        <div className="academic-help">
          <h2>For Academic Centres</h2>
          <p>
            Please circulate all notices to enrolled students and maintain
            acknowledgement records wherever required.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AcademicNotices;
