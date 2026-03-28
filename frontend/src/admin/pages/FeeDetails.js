import React from "react";
import { useParams } from "react-router-dom";
import AdminLayout from "../components/AdminLayout"; // ✅ ADD
import "../styles/fees.css";

const FeeDetails = () => {

  const { session, className, enroll } = useParams();

  return (
    <AdminLayout>
      <div className="fee-details">

        <h2>Fee Details</h2>

        <p>Session: {session}</p>
        <p>Class: {className}</p>
        <p>Enrollment: {enroll}</p>

      </div>
    </AdminLayout>
  );
};

export default FeeDetails;