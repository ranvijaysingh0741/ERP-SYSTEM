import React from "react";
import { useParams } from "react-router-dom";
import "../../styles/superadmin.css";

const SchoolDetails = () => {

  const { id } = useParams();

  const schoolData = {
    1: {
      name: "Sunrise Public School",
      students: [
        { name: "Rahul Sharma", enroll: "SCH1001", status: "Approved" },
        { name: "Priya Verma", enroll: "SCH1002", status: "Pending" }
      ],
      teachers: 15,
      staff: 8
    },
    2: {
      name: "Green Valley School",
      students: [
        { name: "Aman Singh", enroll: "SCH2001", status: "Approved" },
        { name: "Neha Gupta", enroll: "SCH2002", status: "Approved" }
      ],
      teachers: 20,
      staff: 12
    }
  };

  const school = schoolData[id];

  if (!school) return <h3>School Not Found</h3>;

  const totalStudents = school.students.length;
  const approved = school.students.filter(s => s.status === "Approved").length;
  const pending = school.students.filter(s => s.status === "Pending").length;

  return (
    <div className="admin-page">

      <div className="admin-header">
        <h2>{school.name}</h2>
      </div>

      {/* SUMMARY CARDS */}
      <div className="stats-grid">
        <div className="stat-card">
          <h3>{totalStudents}</h3>
          <p>Total Students</p>
        </div>

        <div className="stat-card">
          <h3>{approved}</h3>
          <p>Approved</p>
        </div>

        <div className="stat-card">
          <h3>{pending}</h3>
          <p>Pending</p>
        </div>

        <div className="stat-card">
          <h3>{school.teachers}</h3>
          <p>Teachers</p>
        </div>

        <div className="stat-card">
          <h3>{school.staff}</h3>
          <p>Staff</p>
        </div>
      </div>

      {/* STUDENT LIST */}
      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Enrollment No</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {school.students.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.enroll}</td>
                <td>{student.status}</td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  );
};

export default SchoolDetails;
