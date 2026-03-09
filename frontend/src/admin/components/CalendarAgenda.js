import React, { useState } from "react";
import "../styles/calendar.css";

const CalendarAgenda = () => {

  const [currentDate, setCurrentDate] = useState(new Date());

  /* ===== CHANGE MONTH ===== */
  const changeMonth = (direction) => {
    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + direction,
      1
    );
    setCurrentDate(newDate);
  };

  /* ===== DATE CALCULATION ===== */
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();

  const days = [];

  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }

  for (let i = 1; i <= totalDays; i++) {
    days.push(i);
  }

  const today = new Date();

  return (
    <div className="calendar-card">

      {/* HEADER */}
      <div className="calendar-header">
        <button onClick={() => changeMonth(-1)}>◀</button>

        <h3>
          {currentDate.toLocaleString("default", {
            month: "long",
            year: "numeric"
          })}
        </h3>

        <button onClick={() => changeMonth(1)}>▶</button>
      </div>

      {/* WEEK DAYS */}
      <div className="calendar-days">
        {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(day =>
          <span key={day}>{day}</span>
        )}
      </div>

      {/* DATES */}
      <div className="calendar-grid">
        {days.map((day, index) => {

          const isToday =
            day &&
            today.getDate() === day &&
            today.getMonth() === month &&
            today.getFullYear() === year;

          return (
            <span
              key={index}
              className={isToday ? "today" : ""}
            >
              {day}
            </span>
          );
        })}
      </div>

      {/* ===== AGENDA ===== */}
      <h4 className="agenda-title">Agenda</h4>

      <div className="agenda-item purple">
        <span>08:00</span>
        <div>
          <small>All Grade</small>
          <p>Homeroom & Announcement</p>
        </div>
      </div>

      <div className="agenda-item yellow">
        <span>10:00</span>
        <div>
          <small>Grade 3–5</small>
          <p>Math Review & Practice</p>
        </div>
      </div>

      <div className="agenda-item blue">
        <span>10:30</span>
        <div>
          <small>Grade 6–8</small>
          <p>Science Experiment</p>
        </div>
      </div>

    </div>
  );
};

export default CalendarAgenda;