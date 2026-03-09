import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const FeeClass = () => {

  const { session } = useParams();
  const navigate = useNavigate();

  const classes = [
"Class 8",
    "Class 10","Class 12"
  ];

  return (
    <div style={{padding:"30px"}}>

      <h2>Session: {session}</h2>
      <h3>Select Class</h3>

      <div className="class-container">
        {classes.map((cls, index) => (
          <div
            key={index}
            className="class-card"
            onClick={() => navigate(`/fees/${session}/${cls}`)}
          >
            {cls}
          </div>
        ))}
      </div>

    </div>
  );
};

export default FeeClass;