import React from "react";
import "../styles/adminOverview.css";

const AdminOverview = () => {
  return (
    <div className="admin-overview">

      <div className="admin-text">
        <h2>Admin Panel</h2>

        <h4>Head Office / Board Officials</h4>

        <p>
          Full control to manage all centers, students, exams,
          results, certificates, fees, users, reports and
          system settings.
        </p>
      </div>

      <div className="admin-badge">
        SUPER ADMIN
      </div>

    </div>
  );
};

export default AdminOverview;