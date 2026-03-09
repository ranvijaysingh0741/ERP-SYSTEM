import React from "react";
import { useParams } from "react-router-dom";
import "../styles/fees.css";

const FeeDetails = () => {

  const { session, className, enroll } = useParams();

  const total = 50000;
  const paid = 30000;
  const pending = total - paid;

  return (
    <div className="fee-details">

      <h2>Fee Details</h2>
      <p>Session: {session}</p>
      <p>Class: {className}</p>
      <p>Enrollment: {enroll}</p>

      <div className="fee-cards">
        <div className="fee-card">
          <h3>Total Fees</h3>
          <p>₹ {total}</p>
        </div>

        <div className="fee-card">
          <h3>Paid Amount</h3>
          <p>₹ {paid}</p>
        </div>

        <div className="fee-card pending">
          <h3>Pending Amount</h3>
          <p>₹ {pending}</p>
        </div>
      </div>

      <button className="primary-btn">
        Generate Receipt
      </button>

    </div>
  );
};

export default FeeDetails;