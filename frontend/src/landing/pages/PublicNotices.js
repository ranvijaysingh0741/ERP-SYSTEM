import React from "react";
import "./PublicNotices.css";

const PublicNotices = () => {
  const notices = [
    { id: 1, title: "Notice", file: "/files/notice1.pdf" },
    { id: 2, title: "Notice 2", file: "/files/notice2.pdf" },
    { id: 3, title: "Public Notice", file: "/files/public-notice.pdf" },
    { id: 4, title: "Office Order 02", file: "/files/office-order-02.pdf" },
    { id: 5, title: "Office Order 03", file: "/files/office-order-03.pdf" },
    { id: 6, title: "May 2025 Public Notice", file: "/files/may-2025.pdf" },
  ];

  return (
    <section className="public-page">
      <div className="public-container">
        <h1 className="public-title">PUBLIC NOTICE</h1>

        <div className="public-card">
          <div className="table-wrapper">
            <table className="public-table">
              <thead>
                <tr>
                  <th>S.NO.</th>
                  <th>TITLE NAME</th>
                  <th>DOWNLOADS</th>
                </tr>
              </thead>

              <tbody>
                {notices.map((notice, index) => (
                  <tr key={index}>
                    <td>{notice.id}</td>
                    <td>{notice.title}</td>
                    <td>
                      <a
                        href={notice.file}
                        className="download-btn"
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        DOWNLOAD
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicNotices;
