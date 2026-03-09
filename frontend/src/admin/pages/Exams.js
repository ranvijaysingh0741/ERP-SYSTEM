import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/exams.css";

const Exams = () => {

  const [session, setSession] = useState("2024-2025");

  const exams = [
   
  ];

  return (
    <div className="exams-page">

      <div className="exam-header">
        <h2>Examination Results</h2>

        <div className="session-select">
          <label>Select Year Session:</label>
          <select
            value={session}
            onChange={(e) => setSession(e.target.value)}
          >
            <option value="2023-2024">2023-2024</option>
            <option value="2024-2025">2024-2025</option>
            <option value="2025-2026">2025-2026</option>
          </select>
        </div>
      </div>

      <div className="exam-grid">
        {exams.map((exam, index) => (
          <div key={index} className="exam-card">
            <h3>{exam}</h3>
            <p>Session: {session}</p>

            <Link
              to={`/exam/${encodeURIComponent(exam)}`}
              className="exam-btn"
            >
              Select Class
            </Link>

          </div>
        ))}
      </div>

    </div>
  );
};

export default Exams;