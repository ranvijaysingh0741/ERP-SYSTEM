import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/fees.css";

const Fees = () => {

  const [session, setSession] = useState("2024-2025");
  const navigate = useNavigate();

  return (
    <div className="fees-page">

      <h2>Fees Module</h2>

      <div className="session-select">
        <label>Select Session:</label>
        <select
          value={session}
          onChange={(e) => setSession(e.target.value)}
        >
          <option>2023-2024</option>
          <option>2024-2025</option>
          <option>2025-2026</option>
        </select>
      </div>

      <button  style={{background:"#8b5e3c", padding:"20px"}}


        className="primary-btn"
        onClick={() => navigate(`/fees/${session}`)}
      >
        Select Class
      </button>

    </div>
  );
};

export default Fees;