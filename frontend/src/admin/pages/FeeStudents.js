import React from "react";
import { useParams, Link } from "react-router-dom";
import AdminLayout from "../components/AdminLayout"; // ✅ ADD

const FeeStudents = () => {

  const { session, className } = useParams();

  const students = [
    { enroll: "SCH1001", name: "Rahul Sharma" }
  ];

  return (
    <AdminLayout>
      <div style={{ padding: "30px" }}>

        <h2>{className} - Student Fees</h2>

        <table>
          <tbody>
            {students.map((stu, index) => (
              <tr key={index}>
                <td>{stu.enroll}</td>
                <td>{stu.name}</td>
                <td>
                  <Link to={`/admin/fees-details/${session}/${className}/${stu.enroll}`}> {/* ✅ FIX */}
                    View
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

export default FeeStudents;