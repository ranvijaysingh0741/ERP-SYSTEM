import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import AdminLayout from "../components/AdminLayout"; // ✅ ADD

const FeeClass = () => {

  const { session } = useParams();
  const navigate = useNavigate();

  const classes = ["Class 8", "Class 10", "Class 12"];

  return (
    <AdminLayout>
      <div style={{ padding: "30px" }}>

        <h2>Session: {session}</h2>

        <div className="class-container">
          {classes.map((cls, index) => (
            <div
              key={index}
              className="class-card"
              onClick={() => navigate(`/admin/fees/${session}/${cls}`)} // ✅ FIX
            >
              {cls}
            </div>
          ))}
        </div>

      </div>
    </AdminLayout>
  );
};

export default FeeClass;