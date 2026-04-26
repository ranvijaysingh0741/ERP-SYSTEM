import React from "react";
import "./PublicNotices.css";

const notices = [
  {
    id: 1,
    title: "General Public Notice",
    category: "Notice",
    date: "10 Apr 2026",
    file: "/files/notice1.pdf",
  },
  {
    id: 2,
    title: "Student Information Notice",
    category: "Student",
    date: "02 Apr 2026",
    file: "/files/notice2.pdf",
  },
  {
    id: 3,
    title: "Public Notice For Stakeholders",
    category: "Public",
    date: "22 Mar 2026",
    file: "/files/public-notice.pdf",
  },
  {
    id: 4,
    title: "Office Order 02",
    category: "Office Order",
    date: "15 Mar 2026",
    file: "/files/office-order-02.pdf",
  },
  {
    id: 5,
    title: "Office Order 03",
    category: "Office Order",
    date: "08 Mar 2026",
    file: "/files/office-order-03.pdf",
  },
  {
    id: 6,
    title: "May 2025 Public Notice",
    category: "Archive",
    date: "12 May 2025",
    file: "/files/may-2025.pdf",
  },
];

const PublicNotices = () => {
  return (
    <main className="public-page">
      <div className="public-container">
        <header className="public-header">
          <span className="public-badge">Notice Desk</span>
          <h1 className="public-title">Public Notices</h1>
          <p>
            View official public communications, office orders, student notices,
            and archived circulars issued by the board.
          </p>
        </header>

        <section className="public-summary">
          <article>
            <strong>{notices.length}</strong>
            <span>Total notices</span>
          </article>
          <article>
            <strong>2026</strong>
            <span>Latest updates</span>
          </article>
          <article>
            <strong>PDF</strong>
            <span>Download format</span>
          </article>
        </section>

        <section className="public-card">
          <div className="table-wrapper">
            <table className="public-table">
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Notice Details</th>
                  <th>Category</th>
                  <th>Date</th>
                  <th>Download</th>
                </tr>
              </thead>

              <tbody>
                {notices.map((notice, index) => (
                  <tr key={notice.title}>
                    <td>{index + 1}</td>
                    <td>
                      <strong>{notice.title}</strong>
                    </td>
                    <td>
                      <span className="notice-chip">{notice.category}</span>
                    </td>
                    <td>{notice.date}</td>
                    <td>
                      <a
                        href={notice.file}
                        className="download-btn"
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Download
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
};

export default PublicNotices;
