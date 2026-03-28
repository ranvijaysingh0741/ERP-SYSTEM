import React from "react";
import { useParams, Link } from "react-router-dom";
import AdminLayout from "../components/AdminLayout";
import "../styles/admin.css";

const CertificateStudents = () => {

  const { type, className } = useParams();

  const students = [
    { enroll: "SCH1001", name: "Rahul Sharma" },
    { enroll: "SCH1002", name: "Priya Verma" },
    { enroll: "SCH1003", name: "Aman Singh" }
  ];

  return (
    <AdminLayout>

      <div className="admin-page">

        <h2>{decodeURIComponent(type)}</h2>
        <h3>{className} - Select Student</h3>

        <table>
          <thead>
            <tr>
              <th>Enrollment</th>
              <th>Name</th>
              <th>Generate</th>
            </tr>
          </thead>

          <tbody>
            {students.map((stu, index) => (
              <tr key={index}>
                <td>{stu.enroll}</td>
                <td>{stu.name}</td>
                <td>
                  <Link
                    to={`/admin/certificate-preview/${type}/${className}/${stu.enroll}`}
                  >
                    Generate
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </AdminLayout>
  );
};

export default CertificateStudents;