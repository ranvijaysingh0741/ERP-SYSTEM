import React from "react";
import { Link } from "react-router-dom";
import AdminLayout from "../components/AdminLayout"; // ✅ ADD
import "../styles/studentDetail.css";

const StudentDetail = () => {

  const students = [
    { enroll: "SCH1001", name: "Rahul Sharma" }
  ];

  return (
    <AdminLayout>
      <div className="student-detail-page">

        <h2>Student Detail</h2>

        <table>
          <tbody>
            {students.map((stu, index) => (
              <tr key={index}>
                <td>{stu.enroll}</td>
                <td>{stu.name}</td>
                <td>
                  <Link to={`/admin/student/${stu.enroll}`}>View</Link> {/* ✅ FIX */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </AdminLayout>
  );
};

export default StudentDetail;