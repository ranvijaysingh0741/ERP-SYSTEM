import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../components/AdminLayout";
import { getStudents } from "../../api/adminApi";
import * as XLSX from "xlsx";
import "../styles/allStudents.css";

const AllStudents = () => {

  const navigate = useNavigate();

  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 5;

  // 🔥 LOAD DATA
  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    try {
      const res = await getStudents();
      setStudents(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  // 🔍 FILTER
  const filteredStudents = students.filter((stu) =>
  (stu.enrollment_no || "")
    .toLowerCase()
    .includes(search.toLowerCase())
);

  // 📄 PAGINATION
  const indexOfLast = currentPage * studentsPerPage;
  const indexOfFirst = indexOfLast - studentsPerPage;

  const currentStudents = filteredStudents.slice(indexOfFirst, indexOfLast);

  // 📥 EXPORT EXCEL
  const exportToExcel = () => {

    const worksheet = XLSX.utils.json_to_sheet(students);

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Students");

    XLSX.writeFile(workbook, "students.xlsx");
  };

  return (
    <AdminLayout>
      <div className="all-students">

        <h2 className="page-title">All Students</h2>

        {/* 🔍 SEARCH */}
        <input
          type="text"
          placeholder="Search student..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ marginBottom: "10px", padding: "8px", width: "250px" }}
        />

        {/* 📥 EXPORT */}
        <button
          onClick={exportToExcel}
          style={{ marginLeft: "10px", padding: "8px" }}
        >
          Export Excel
        </button>

        {/* TABLE */}
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Enrollment</th>
              <th>Center</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {currentStudents.map((stu) => (
              <tr key={stu.id}>
                <td>{stu.id}</td>

                <td
                  style={{ cursor: "pointer", color: "blue" }}
                  onClick={() =>
                    navigate(`/admin/student/${stu.enrollment_no}`)
                  }
                >
                  {stu.enrollment_no}
                </td>

                <td>{stu.center_id}</td>
                <td>{stu.status}</td>
              </tr>
            ))}
          </tbody>

        </table>

        {/* 📄 PAGINATION */}
        <div style={{ marginTop: "20px" }}>

          <button
            onClick={() => setCurrentPage(prev => prev - 1)}
            disabled={currentPage === 1}
          >
            Prev
          </button>

          <span style={{ margin: "0 10px" }}>
            Page {currentPage}
          </span>

          <button
            onClick={() => setCurrentPage(prev => prev + 1)}
            disabled={indexOfLast >= filteredStudents.length}
          >
            Next
          </button>

        </div>

      </div>
    </AdminLayout>
  );
};

export default AllStudents;