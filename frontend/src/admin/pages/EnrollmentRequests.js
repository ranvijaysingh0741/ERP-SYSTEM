import React, { useState } from "react";
import "../styles/enrollmentRequests.css";

const EnrollmentRequests = () => {
  const predefinedReasons = [
    "Incomplete Documents",
    "Invalid ID Proof",
    "Incorrect Personal Details",
    "Fee Not Paid",
    "Duplicate Application"
  ];

  const [requests, setRequests] = useState([
    { id: 1, name: "Rahul Sharma", center: "Lucknow Center", region: "Uttar Pradesh", status: "Pending", reason: "" },
    { id: 2, name: "Priya Verma", center: "Kanpur Center", region: "Uttar Pradesh", status: "Pending", reason: "" }
  ]);

  const handleApprove = (id) => {
    setRequests(requests.map(req =>
      req.id === id ? { ...req, status: "Approved", reason: "" } : req
    ));
  };

  const handleReject = (id, selectedReason, customReason) => {
    const finalReason = customReason || selectedReason;

    if (!finalReason) {
      alert("Please select or write rejection reason");
      return;
    }

    setRequests(requests.map(req =>
      req.id === id ? { ...req, status: "Rejected", reason: finalReason } : req
    ));
  };

  return (
    <div className="enrollment-page">
      <div className="enrollment-header">
        <h2>Enrollment Requests</h2>
        <p>Review, approve, or reject student enrollment applications.</p>
      </div>

      <div className="enrollment-table-card">
        <table className="enrollment-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Center</th>
              <th>Region</th>
              <th>Status</th>
              <th>Reason</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {requests.map(req => (
              <tr key={req.id}>
                <td className="student-name">{req.name}</td>
                <td>{req.center}</td>
                <td>{req.region}</td>
                <td>
                  <span className={`request-status ${req.status.toLowerCase()}`}>
                    {req.status}
                  </span>
                </td>
                <td className="reason-text">{req.reason || "—"}</td>
                <td>
                  {req.status === "Pending" ? (
                    <RejectApproveSection
                      req={req}
                      predefinedReasons={predefinedReasons}
                      onApprove={handleApprove}
                      onReject={handleReject}
                    />
                  ) : (
                    <span className="completed-text">Completed</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const RejectApproveSection = ({ req, predefinedReasons, onApprove, onReject }) => {
  const [selectedReason, setSelectedReason] = useState("");
  const [customReason, setCustomReason] = useState("");

  return (
    <div className="action-panel">
      <select
        className="reason-select"
        value={selectedReason}
        onChange={(e) => setSelectedReason(e.target.value)}
      >
        <option value="">Select Reason</option>
        {predefinedReasons.map((reason, index) => (
          <option key={index} value={reason}>
            {reason}
          </option>
        ))}
      </select>

      <input
        className="reason-input"
        type="text"
        placeholder="Or write custom reason"
        value={customReason}
        onChange={(e) => setCustomReason(e.target.value)}
      />

      <div className="action-buttons">
        <button className="approve-btn" onClick={() => onApprove(req.id)}>
          Approve
        </button>

        <button
          className="reject-btn"
          onClick={() => onReject(req.id, selectedReason, customReason)}
        >
          Reject
        </button>
      </div>
    </div>
  );
};

export default EnrollmentRequests;
