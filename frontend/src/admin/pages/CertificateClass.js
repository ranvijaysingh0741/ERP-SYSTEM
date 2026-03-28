import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import AdminLayout from "../components/AdminLayout";
import "../styles/allStudents.css";

const CertificateClass = () => {

  const { type } = useParams();
  const navigate = useNavigate();

  const classes = ["Class 8", "Class 10", "Class 12"];

  return (
    <AdminLayout>

      <div className="all-students">

        <h2 className="page-title">
          {decodeURIComponent(type)}
        </h2>

        <h3>Select Class</h3>

        <div className="class-container">
          {classes.map((cls, index) => (
            <div
              key={index}
              className="class-card"
              onClick={() =>
                navigate(`/admin/certificate/${type}/${cls}`)
              }
            >
              {cls}
            </div>
          ))}
        </div>

      </div>

    </AdminLayout>
  );
};

export default CertificateClass;