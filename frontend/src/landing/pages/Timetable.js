import React from "react";
import "./Timetable.css";

const timetables = [
  { id: 1, session: "May 2025", type: "Latest", file: "/files/may-2025.pdf" },
  { id: 2, session: "December 2024", type: "Archive", file: "/files/december-2024.pdf" },
  { id: 3, session: "May 2024", type: "Archive", file: "/files/may-2024.pdf" },
  { id: 4, session: "October 2023", type: "Archive", file: "/files/october-2023.pdf" },
  { id: 5, session: "April 2023", type: "Archive", file: "/files/april-2023.pdf" },
  { id: 6, session: "October 2022", type: "Archive", file: "/files/october-2022.pdf" },
  { id: 7, session: "April 2022", type: "Archive", file: "/files/april-2022.pdf" },
  { id: 8, session: "October 2021", type: "Archive", file: "/files/october-2021.pdf" },
  { id: 9, session: "April 2021", type: "Archive", file: "/files/april-2021.pdf" },
  { id: 10, session: "October 2020", type: "Archive", file: "/files/october-2020.pdf" },
  { id: 11, session: "April 2020", type: "Archive", file: "/files/april-2020.pdf" },
  { id: 12, session: "October 2019", type: "Archive", file: "/files/october-2019.pdf" },
  { id: 13, session: "April 2019", type: "Archive", file: "/files/april-2019.pdf" },
  { id: 14, session: "October 2018", type: "Archive", file: "/files/october-2018.pdf" },
  { id: 15, session: "April 2018", type: "Archive", file: "/files/april-2018.pdf" },
];

const Timetable = () => {
  return (
    <main className="timetable-page">
      <div className="timetable-container">
        <header className="timetable-header">
          <span className="timetable-badge">Exam Desk</span>
          <h1 className="timetable-title">Time Table</h1>
          <p>
            Download examination schedules for current and previous sessions.
            Students should check the latest timetable before preparing travel
            or examination plans.
          </p>
        </header>

        <section className="timetable-summary">
          <article>
            <strong>{timetables.length}</strong>
            <span>Records available</span>
          </article>
          <article>
            <strong>May 2025</strong>
            <span>Latest session</span>
          </article>
          <article>
            <strong>PDF</strong>
            <span>Download format</span>
          </article>
        </section>

        <section className="timetable-card">
          <div className="timetable-card-heading">
            <h2>Time Table Records</h2>
            <span>Updated archive</span>
          </div>

          <div className="table-wrapper">
            <table className="timetable-table">
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Session</th>
                  <th>Type</th>
                  <th>Download</th>
                </tr>
              </thead>

              <tbody>
                {timetables.map((item, index) => (
                  <tr key={item.session}>
                    <td>{index + 1}</td>
                    <td>
                      <strong>{item.session}</strong>
                    </td>
                    <td>
                      <span className="session-chip">{item.type}</span>
                    </td>
                    <td>
                      <a
                        href={item.file}
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

export default Timetable;
