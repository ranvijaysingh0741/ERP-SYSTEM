import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AdminLayout from "../components/AdminLayout";
import axios from "axios";

const StudentProfile = () => {

  const { enrollNo } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {

    const loadStudent = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/admin/student/${enrollNo}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`
            }
          }
        );

        setStudent(res.data);

      } catch (err) {
        console.error(err);
      }
    };

    loadStudent();

  }, [enrollNo]); // ✅ FIX

  if (!student) return <h2>Loading...</h2>;

  return (
    <AdminLayout>
      <div>

        <h2>{student.full_name}</h2>
        <p>Enrollment: {student.enrollment_no}</p>
        <p>Status: {student.status}</p>

      </div>
    </AdminLayout>
  );
};

export default StudentProfile;