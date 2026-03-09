import React from "react";
import "./Timetable.css";

const Timetable = () => {
  const timetables = [
    { id: 1, title: "April 2013", file: "/files/april-2013.pdf" },
    { id: 2, title: "October 2013", file: "/files/october-2013.pdf" },
    { id: 3, title: "April 2014", file: "/files/april-2014.pdf" },
    { id: 4, title: "October 2014", file: "/files/october-2014.pdf" },
    { id: 5, title: "April 2015", file: "/files/april-2015.pdf" },
    { id: 6, title: "October 2015", file: "/files/october-2015.pdf" },
    { id: 7, title: "April 2016", file: "/files/april-2016.pdf" },
    { id: 8, title: "October 2016", file: "/files/october-2016.pdf" },
    { id: 9, title: "April 2017", file: "/files/april-2017.pdf" },
    { id: 10, title: "October 2017", file: "/files/october-2017.pdf" },
    { id: 11, title: "April 2018", file: "/files/april-2018.pdf" },
    { id: 12, title: "October 2018", file: "/files/october-2018.pdf" },
    { id: 13, title: "April 2019", file: "/files/april-2019.pdf" },
    { id: 14, title: "October 2019", file: "/files/october-2019.pdf" },
    { id: 15, title: "April 2020", file: "/files/april-2020.pdf" },
    { id: 16, title: "October 2020", file: "/files/october-2020.pdf" },
    { id: 17, title: "April 2021", file: "/files/april-2021.pdf" },
    { id: 18, title: "October 2021", file: "/files/october-2021.pdf" },
    { id: 19, title: "April 2022", file: "/files/april-2022.pdf" },
    { id: 20, title: "October 2022", file: "/files/october-2022.pdf" },
    { id: 21, title: "April 2023", file: "/files/april-2023.pdf" },
    { id: 22, title: "October 2023", file: "/files/october-2023.pdf" },
    { id: 23, title: "May 2024", file: "/files/may-2024.pdf" },
    { id: 24, title: "December 2024", file: "/files/december-2024.pdf" },
    { id: 25, title: "May 2025", file: "/files/may-2025.pdf" },
  ];

  return (
    <section className="timetable-page">
      <div className="timetable-container">
        <h1 className="timetable-title">TIME TABLE</h1>

        <div className="timetable-card">
          <h2>Time Table Records</h2>

          <div className="table-wrapper">
            <table className="timetable-table">
              <thead>
                <tr>
                  <th>S.NO</th>
                  <th>SESSION</th>
                  <th>DOWNLOAD</th>
                </tr>
              </thead>

              <tbody>
                {timetables.map((item, index) => (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>
                      <a
                        href={item.file}
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

export default Timetable;
