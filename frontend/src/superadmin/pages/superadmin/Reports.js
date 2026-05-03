import React, { useState } from "react";
import "../../styles/superadmin.css";

const Reports = () => {

  const [reportType, setReportType] = useState("state");
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");

  const data = [
    {
      state: "Madhya Pradesh",
      district: "Bhopal",
      center: "Center A",
      students: 120,
      teachers: 15,
      staff: 8,
      approved: 110,
      pending: 10
    },
    {
      state: "Uttar Pradesh",
      district: "Lucknow",
      center: "Center B",
      students: 200,
      teachers: 20,
      staff: 12,
      approved: 185,
      pending: 15
    }
  ];

  const filteredData = data.filter(item => {

    if (reportType === "state" && selectedState)
      return item.state === selectedState;

    if (reportType === "district" && selectedDistrict)
      return item.district === selectedDistrict;

    return true;
  });

  const totalStudents = filteredData.reduce((sum, item) => sum + item.students, 0);
  const totalApproved = filteredData.reduce((sum, item) => sum + item.approved, 0);
  const totalPending = filteredData.reduce((sum, item) => sum + item.pending, 0);

  return (
    <div className="admin-page">

      <div className="admin-header">
        <h2>Reports</h2>
      </div>

      {/* REPORT TYPE */}
      <div className="tabs">
        <button onClick={() => setReportType("state")}
          className={reportType === "state" ? "active-tab" : ""}>
          State-wise
        </button>

        <button onClick={() => setReportType("district")}
          className={reportType === "district" ? "active-tab" : ""}>
          District-wise
        </button>

        <button onClick={() => setReportType("center")}
          className={reportType === "center" ? "active-tab" : ""}>
          Center-wise
        </button>
      </div>

      {/* FILTERS */}
      {reportType === "state" && (
        <select
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
        >
          <option value="">Select State</option>
          {[...new Set(data.map(d => d.state))].map((state, index) => (
            <option key={index} value={state}>{state}</option>
          ))}
        </select>
      )}

      {reportType === "district" && (
        <select
          value={selectedDistrict}
          onChange={(e) => setSelectedDistrict(e.target.value)}
        >
          <option value="">Select District</option>
          {[...new Set(data.map(d => d.district))].map((district, index) => (
            <option key={index} value={district}>{district}</option>
          ))}
        </select>
      )}

      {/* SUMMARY CARDS */}
      <div className="stats-grid" style={{ marginTop: "20px" }}>
        <div className="stat-card">
          <h3>{totalStudents}</h3>
          <p>Total Students</p>
        </div>

        <div className="stat-card">
          <h3>{totalApproved}</h3>
          <p>Approved</p>
        </div>

        <div className="stat-card">
          <h3>{totalPending}</h3>
          <p>Pending</p>
        </div>
      </div>

      {/* TABLE */}
      <div className="table-card" style={{ marginTop: "20px" }}>
        <table>
          <thead>
            <tr>
              <th>State</th>
              <th>District</th>
              <th>Center</th>
              <th>Students</th>
              <th>Approved</th>
              <th>Pending</th>
            </tr>
          </thead>

          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index}>
                <td>{item.state}</td>
                <td>{item.district}</td>
                <td>{item.center}</td>
                <td>{item.students}</td>
                <td>{item.approved}</td>
                <td>{item.pending}</td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  );
};

export default Reports;
