import React from "react";
import "../styles/admin.css";

const RegionalReports = () => {

  const data = [
    { region: "Uttar Pradesh", total: 120, approved: 90, rejected: 10 },
    { region: "Delhi", total: 80, approved: 70, rejected: 5 }
  ];

  return (
    <div className="admin-page">

      <h2>Regional Reports</h2>

      <table>
        <thead>
          <tr>
            <th>Region</th>
            <th>Total Applications</th>
            <th>Approved</th>
            <th>Rejected</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.region}</td>
              <td>{item.total}</td>
              <td>{item.approved}</td>
              <td>{item.rejected}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default RegionalReports;
