import React from "react";
import { FaCrown } from "react-icons/fa";
import "../styles/adminOverview.css";

const AdminOverview = () => {
  return (
    <div className="admin-overview">
      <div className="admin-info">
        <h4>Head Office / Board Officials</h4>
        <p>
          Full control to manage all centers, students, exams, results,
          <br />
          certificates, fees, users, reports and system settings.
        </p>
      </div>

      <div className="building-image">
        <div className="cloud cloud-one"></div>
        <div className="cloud cloud-two"></div>

        <div className="flag"></div>
        <div className="roof"></div>
        <div className="building-body">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="base"></div>
      </div>

      <button className="admin-badge">
        <FaCrown /> SUPER ADMIN
      </button>
    </div>
  );
};

export default AdminOverview;
