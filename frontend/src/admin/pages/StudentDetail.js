import React from "react";
import { Link } from "react-router-dom";
import "../styles/studentDetail.css";

const StudentDetail = () => {

  const students = [
    { enroll: "SCH1001", name: "Rahul Sharma", class: "Class 1" },
    { enroll: "SCH1002", name: "Priya Verma", class: "Class 1" },
    { enroll: "SCH1003", name: "Aman Singh", class: "Class 1" }
  ];

  return (
    <div className="student-detail-page">

      <h2>Student Detail (Enrollment List)</h2>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Enrollment No</th>
              <th>Name</th>
              <th>Class</th>
              <th>View</th>
            </tr>
          </thead>

          <tbody>
            {students.map((stu, index) => (
              <tr key={index}>
                <td>{stu.enroll}</td>
                <td>{stu.name}</td>
                <td>{stu.class}</td>
                <td>
                  <Link to={`/student/${stu.enroll}`} className="view-btn">
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default StudentDetail;
