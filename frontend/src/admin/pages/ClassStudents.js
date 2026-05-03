import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/classStudents.css";

const ClassStudents = () => {

  const { className } = useParams();
  const [search, setSearch] = useState("");

  /* ===== SAMPLE STUDENT DATA ===== */
  const students = [
    {
      roll: 1,
      enroll: "SCH1001",
      name: "Rahul Sharma",
      photo: "https://i.pravatar.cc/40?img=1"
    },
    {
      roll: 2,
      enroll: "SCH1002",
      name: "Priya Verma",
      photo: "https://i.pravatar.cc/40?img=2"
    },
    {
      roll: 3,
      enroll: "SCH1003",
      name: "Aman Singh",
      photo: "https://i.pravatar.cc/40?img=3"
    }
  ];

  /* ===== SEARCH FILTER ===== */
  const filteredStudents = students.filter((stu) =>
    stu.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="class-students">

      <h2>{className} - Students List</h2>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search Student..."
        className="search-input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* TABLE */}
      <div className="table-container">
        <table>

          <thead>
            <tr>
              <th>Photo</th>
              <th>Roll No</th>
              <th>Enrollment No</th>
              <th>Student Name</th>
            </tr>
          </thead>

          <tbody>
            {filteredStudents.map((stu, index) => (
              <tr key={index}>

                <td>
                  <img
                    src={stu.photo}
                    alt="student"
                    className="student-photo"
                  />
                </td>
<td>
  <Link
    to={`/student/${stu.enroll}`}
    className="enroll-link"
  >
    {stu.enroll}
  </Link>
</td>

                {/* ✅ CLICKABLE ENROLLMENT */}
                <td>
                  <Link
                    to={`/student/${stu.enroll}`}
                    className="enroll-link"
                  >
                    {stu.enroll}
                  </Link>
                </td>

                <td>{stu.name}</td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  );
};

export default ClassStudents;
