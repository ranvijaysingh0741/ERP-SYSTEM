import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../components/AdminLayout"; // ✅ ADD
import "../styles/fees.css";

const Fees = () => {

  const [session, setSession] = useState("2024-2025");
  const navigate = useNavigate();

  return (
    <AdminLayout>
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

        <button
          className="primary-btn"
          onClick={() => navigate(`/admin/fees/${session}`)} // ✅ FIX
        >
          Select Class
        </button>

      </div>
    </AdminLayout>
  );
};

export default Fees;