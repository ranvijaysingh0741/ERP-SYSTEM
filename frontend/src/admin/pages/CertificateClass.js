import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaFileAlt } from "react-icons/fa";
import "../styles/certificateClass.css";

const CertificateClass = () => {

  const { type } = useParams();
  const navigate = useNavigate();

  const classes = [
    { name: "Class 8", students: 120 },
    { name: "Class 10", students: 150 },
    { name: "Class 12", students: 98 }
  ];

  return (
    <div className="certificate-page">

      {/* HEADER */}
      <h2 className="certificate-title">
        {decodeURIComponent(type)}
      </h2>
      <p className="certificate-subtitle">
        Select a class to generate certificate
      </p>

      {/* CARDS */}
      <div className="certificate-grid">
        {classes.map((cls, index) => (
          <div
            key={index}
            className="certificate-card"
            onClick={() => navigate(`/certificate/${type}/${cls.name}`)}
          >

            <div className="certificate-icon">
              <FaFileAlt />
            </div>

            <h3>{cls.name}</h3>
            <p>{cls.students} Students</p>

            <button className="certificate-btn">
              Generate →
            </button>

          </div>
        ))}
      </div>

    </div>
  );
};

export default CertificateClass;
