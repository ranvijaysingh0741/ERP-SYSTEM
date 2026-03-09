import React, { useState } from "react";
import "../../styles/superadmin.css";

const ActivityLogs = () => {

  const [filterType, setFilterType] = useState("");

  const logs = [
    {
      id: 1,
      admin: "Rahul Admin",
      action: "Approved 5 students",
      center: "Sunrise Public School",
      type: "approved",
      time: "26 Feb 2026, 3:45 PM"
    },
    {
      id: 2,
      admin: "Priya Admin",
      action: "Rejected 2 enrollments",
      center: "Green Valley School",
      type: "rejected",
      time: "26 Feb 2026, 1:20 PM"
    },
    {
      id: 3,
      admin: "Super Admin",
      action: "Created new center",
      center: "Bhopal Education Center",
      type: "created",
      time: "25 Feb 2026, 5:10 PM"
    }
  ];

  const filteredLogs = filterType
    ? logs.filter(log => log.type === filterType)
    : logs;

  return (
    <div className="admin-page">

      <div className="admin-header">
        <h2>Activity Logs</h2>
      </div>

      {/* FILTER */}
      <div className="report-filter">
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="">All Actions</option>
          <option value="approved">Approved</option>
          <option value="rejected">Rejected</option>
          <option value="created">Created</option>
        </select>
      </div>

      {/* TABLE */}
      <div className="report-table">
        <table>
          <thead>
            <tr>
              <th>Admin</th>
              <th>Action</th>
              <th>Center</th>
              <th>Status</th>
              <th>Date & Time</th>
            </tr>
          </thead>

          <tbody>
            {filteredLogs.map(log => (
              <tr key={log.id}>
                <td>{log.admin}</td>
                <td>{log.action}</td>
                <td>{log.center}</td>
                <td>
                  <span className={`log-badge ${log.type}`}>
                    {log.type}
                  </span>
                </td>
                <td>{log.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default ActivityLogs;