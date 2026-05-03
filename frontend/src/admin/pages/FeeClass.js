import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaMoneyBillWave } from "react-icons/fa";
import "../styles/feesClass.css";

const FeeClass = () => {

  const { session } = useParams();
  const navigate = useNavigate();

  const classes = [
    { name: "Class 8", students: 120 },
    { name: "Class 10", students: 150 },
    { name: "Class 12", students: 98 }
  ];

  return (
    <div className="fees-page">

      {/* HEADER */}
      <h2 className="fees-title">Session: {session}</h2>
      <p className="fees-subtitle">Select a class to manage fees</p>

      {/* CARDS */}
      <div className="fees-grid">
        {classes.map((cls, index) => (
          <div
            key={index}
            className="fees-card"
            onClick={() => navigate(`/fees/${session}/${cls.name}`)}
          >

            <div className="fees-icon">
              <FaMoneyBillWave />
            </div>

            <h3>{cls.name}</h3>
            <p>{cls.students} Students</p>

            <button className="fees-btn">
              Manage Fees →
            </button>

          </div>
        ))}
      </div>

    </div>
  );
};

export default FeeClass;
