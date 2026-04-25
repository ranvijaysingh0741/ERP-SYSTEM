import React from "react";
import "./NoticeBoard.css";

const notices = [
  {
    type: "Admission",
    title: "Admissions Open for 2026 Session",
    detail: "Applications are invited for eligible learners across available programmes.",
  },
  {
    type: "Senior Secondary",
    title: "Admissions Open - Senior Secondary Level",
    detail: "Students can apply for Class XII level academic and vocational pathways.",
  },
  {
    type: "Assignment",
    title: "Last date to upload assignments: 15 January 2026",
    detail: "Learners should complete and submit required work before the deadline.",
  },
  {
    type: "Secondary",
    title: "Admissions Open - Secondary Level",
    detail: "Class X level registration is available for the current admission cycle.",
  },
];

function NoticeBoard() {
  return (
    <section className="notice">
      <h2>Notice Board</h2>
      <ul>
        {notices.map((notice) => (
          <li key={notice.title}>
            <span>{notice.type}</span>
            <strong>{notice.title}</strong>
            <small>{notice.detail}</small>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default NoticeBoard;
