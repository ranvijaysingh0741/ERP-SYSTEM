import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaFileAlt,
  FaExchangeAlt,
  FaUserCheck,
  FaUniversity
} from "react-icons/fa";
import "../styles/certificates.css";

const Certificates = () => {
  const navigate = useNavigate();

  const certificateTypes = [
    { name: "Transfer Certificate", icon: <FaExchangeAlt /> },
    { name: "Bonafide Certificate", icon: <FaUniversity /> },
    { name: "Character Certificate", icon: <FaUserCheck /> },
    { name: "Migration Certificate", icon: <FaFileAlt /> }
  ];

  return (
    <div className="cert-page">
      <h2 className="cert-title">Certificates</h2>

      <div className="cert-grid">
        {certificateTypes.map((type, index) => (
          <div
            key={index}
            className="cert-card"
            onClick={() =>
              navigate(`/certificate/${encodeURIComponent(type.name)}`)
            }
          >
            <div className="cert-icon">{type.icon}</div>
            <h3>{type.name}</h3>
            <button className="cert-btn">Select</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
