import React, { useEffect, useState } from "react";
import AdminLayout from "../components/AdminLayout";
import "../styles/admin.css";

import {
  getPendingStudents,
  approveStudent,
  rejectStudent
} from "../../api/adminApi";

const EnrollmentRequests = () => {

  const [requests, setRequests] = useState([]);

  // 🔥 LOAD DATA FROM DB
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const res = await getPendingStudents();
      setRequests(res.data);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  // ✅ APPROVE
  const handleApprove = async (id) => {
    try {
      await approveStudent(id);
      loadData(); // refresh
    } catch (err) {
      console.error(err);
    }
  };

  // ✅ REJECT
  const handleReject = async (id) => {
    const reason = prompt("Enter rejection reason:");
    if (!reason) return;

    try {
      await rejectStudent(id, reason);
      loadData();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <AdminLayout>
      <div className="admin-page">

        <h2>Enrollment Requests</h2>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Enrollment</th>
              <th>Center</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {requests.map((req) => (
              <tr key={req.id}>
                <td>{req.id}</td>
                <td>{req.enrollment_no}</td>
                <td>{req.center_id}</td>
                <td>{req.status}</td>

                <td>
                  <button onClick={() => handleApprove(req.id)}>
                    Approve
                  </button>

                  <button onClick={() => handleReject(req.id)}>
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>
    </AdminLayout>
  );
};

export default EnrollmentRequests;