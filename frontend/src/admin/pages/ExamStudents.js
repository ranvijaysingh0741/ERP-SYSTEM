import React from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/studentDetail.css";

const ExamStudents = () => {

  const { examName, className } = useParams();

  /* Sample Student Data */
  const students = [
    { enroll: "SCH1001", name: "Rahul Sharma" },
    { enroll: "SCH1002", name: "Priya Verma" },
    { enroll: "SCH1003", name: "Aman Singh" }
  ];

  return (
    <div className="student-detail-page">

      <h2>{decodeURIComponent(examName)}</h2>
      <h3>{className} - Student List</h3>

      <div className="table-container">
        <table>

          <thead>
            <tr>
              <th>Enrollment No</th>
              <th>Student Name</th>
              <th>View Result</th>
            </tr>
          </thead>

          <tbody>
            {students.map((stu, index) => (
              <tr key={index}>
                <td>{stu.enroll}</td>
                <td>{stu.name}</td>
                <td>
                  <Link
                    to={`/exam-result/${stu.enroll}`}
                    className="view-btn"
                  >
                    View Result
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

export default ExamStudents;