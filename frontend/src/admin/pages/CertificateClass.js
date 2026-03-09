import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const CertificateClass = () => {

  const { type } = useParams();
  const navigate = useNavigate();

  const classes = [
    "Nursery","LKG","UKG",
    "Class 1","Class 2","Class 3",
    "Class 4","Class 5","Class 6",
    "Class 7","Class 8","Class 9",
    "Class 10","Class 11","Class 12"
  ];

  return (
    <div style={{padding:"30px"}}>
      <h2>{decodeURIComponent(type)}</h2>
      <h3>Select Class</h3>

      <div className="class-container">
        {classes.map((cls, index) => (
          <div
            key={index}
            className="class-card"
            onClick={() => navigate(`/certificate/${type}/${cls}`)}
          >
            {cls}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificateClass;