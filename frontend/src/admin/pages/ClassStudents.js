import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import AdminLayout from "../components/AdminLayout"; // ✅ ADD
import "../styles/classStudents.css";

const ClassStudents = () => {

  const { className } = useParams();
  const [search, setSearch] = useState("");

  const students = [
    { enroll: "SCH1001", name: "Rahul Sharma" },
    { enroll: "SCH1002", name: "Priya Verma" }
  ];

  const filteredStudents = students.filter((stu) =>
    stu.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AdminLayout>
      <div className="class-students">

        <h2>{className} - Students List</h2>

        <input
          type="text"
          placeholder="Search Student..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <table>
          <tbody>
            {filteredStudents.map((stu, index) => (
              <tr key={index}>
                <td>
                  <Link to={`/admin/student/${stu.enroll}`}> {/* ✅ FIX */}
                    {stu.enroll}
                  </Link>
                </td>
                <td>{stu.name}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </AdminLayout>
  );
};

export default ClassStudents;