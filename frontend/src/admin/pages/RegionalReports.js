import React from "react";
import AdminLayout from "../components/AdminLayout"; // ✅ ADD
import "../styles/admin.css";

const RegionalReports = () => {

  return (
    <AdminLayout>
      <div className="admin-page">

        <h2>Regional Reports</h2>

        <table>
          <tbody>
            <tr>
              <td>UP</td>
              <td>120</td>
            </tr>
          </tbody>
        </table>

      </div>
    </AdminLayout>
  );
};

export default RegionalReports;