import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUserGraduate } from "react-icons/fa";
import "../styles/allStudents.css";

const AllStudents = () => {
  const navigate = useNavigate();

  const classes = [
    { name: "Class 8", students: 120 },
    { name: "Class 10", students: 150 },
    { name: "Class 12", students: 98 }
  ];

  return (
    <div className="all-students">
      <h2 className="page-title">All Students (Class Wise)</h2>

      <div className="class-container">
        {classes.map((cls, index) => (
          <div
            key={index}
            className="class-card"
            onClick={() => navigate(`/class/${cls.name}`)}
          >
            <div className="class-icon">
              <FaUserGraduate />
            </div>

            <h3>{cls.name}</h3>

            <span className="student-count">
              {cls.students} Students
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllStudents;
