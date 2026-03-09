import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/allStudents.css";

const ExamClass = () => {

  const { examName } = useParams();
  const navigate = useNavigate();

  const classes = [
    "Nursery",
    "LKG",
    "UKG",
    "Class 1",
    "Class 2",
    "Class 3",
    "Class 4",
    "Class 5",
    "Class 6",
    "Class 7",
    "Class 8",
    "Class 9",
    "Class 10",
    "Class 11",
    "Class 12"
  ];

  return (
    <div className="all-students">

      <h2>{examName}</h2>
      <h3>Select Class</h3>

      <div className="class-container">
        {classes.map((cls, index) => (
          <div
            key={index}
            className="class-card"
            onClick={() => navigate(`/exam/${examName}/${cls}`)}
          >
            {cls}
          </div>
        ))}
      </div>

    </div>
  );
};

export default ExamClass;