import React from "react";
import "./AcademicNotices.css";

const AcademicNotices = () => {
  const holidays = [
    { date: "26-01-2024", day: "Friday", name: "Republic Day" },
    { date: "25-03-2024", day: "Monday", name: "Holi" },
    { date: "29-03-2024", day: "Friday", name: "Good Friday" },
    { date: "17-04-2024", day: "Wednesday", name: "Ram Navami" },
    { date: "21-04-2024", day: "Sunday", name: "Mahavir Jayanti" },
    { date: "23-05-2024", day: "Thursday", name: "Buddha Purnima" },
    { date: "17-06-2024", day: "Monday", name: "Id-Ul-Zuha (Bakrid)" },
    { date: "17-07-2024", day: "Wednesday", name: "Muharram" },
    { date: "15-08-2024", day: "Thursday", name: "Independence Day" },
    { date: "26-08-2024", day: "Monday", name: "Janmashtami" },
    { date: "02-10-2024", day: "Wednesday", name: "Mahatma Gandhi’s Birthday" },
    { date: "12-10-2024", day: "Saturday", name: "Dussehra" },
    { date: "31-10-2024", day: "Thursday", name: "Diwali" },
    { date: "15-11-2024", day: "Friday", name: "Guru Nanak’s Birthday" },
    { date: "25-12-2024", day: "Wednesday", name: "Christmas Day" },
  ];

  return (
    <section className="academic-page">
      <div className="academic-container">
        <h1 className="academic-title">ACADEMIC NOTICE</h1>

        <div className="academic-card">
          <h2>List of Public Holidays</h2>

          <div className="table-wrapper">
            <table className="holiday-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Day</th>
                  <th>Holiday</th>
                </tr>
              </thead>
              <tbody>
                {holidays.map((item, index) => (
                  <tr key={index}>
                    <td>{item.date}</td>
                    <td>{item.day}</td>
                    <td>{item.name}</td>
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

export default AcademicNotices;
