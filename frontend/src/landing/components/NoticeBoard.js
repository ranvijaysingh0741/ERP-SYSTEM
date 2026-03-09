import React from "react";
import "./NoticeBoard.css";

function NoticeBoard() {
  return (
    <section className="notice">
      <h2>Notice Board</h2>
      <ul>
        <li>Admissions Open for 2026 Session</li>
        <li>Admissions Open – Senior Secondary Level</li>
        <li>Last date to upload assignments: 15 January 2026</li>
        <li>Admissions Open – Secondary Level</li>
      </ul>
    </section>
  );
}

export default NoticeBoard;
