import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/superadmin.css";

const EnrollmentManagement = () => {

  const navigate = useNavigate();

  const schools = [
    {
      id: 1,
      name: "Sunrise Public School",
      state: "Madhya Pradesh",
      district: "Bhopal",
      students: 120,
      teachers: 15,
      staff: 8,
      pending: 10,
      approved: 110
    },
    {
      id: 2,
      name: "Green Valley School",
      state: "Uttar Pradesh",
      district: "Lucknow",
      students: 200,
      teachers: 20,
      staff: 12,
      pending: 15,
      approved: 185
    }
  ];

  return (
    <div className="admin-page">

      <div className="admin-header">
        <h2>Enrollment Management</h2>
      </div>

      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th>School</th>
              <th>State</th>
              <th>District</th>
              <th>Students</th>
              <th>Teachers</th>
              <th>Staff</th>
              <th>Pending</th>
              <th>Approved</th>
              <th>View</th>
            </tr>
          </thead>

          <tbody>
            {schools.map(school => (
              <tr key={school.id}>
                <td>{school.name}</td>
                <td>{school.state}</td>
                <td>{school.district}</td>
                <td>{school.students}</td>
                <td>{school.teachers}</td>
                <td>{school.staff}</td>
                <td>{school.pending}</td>
                <td>{school.approved}</td>
                <td>
                  <button
                    className="edit-btn"
                    onClick={() => navigate(`/school/${school.id}`)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  );
};

export default EnrollmentManagement;