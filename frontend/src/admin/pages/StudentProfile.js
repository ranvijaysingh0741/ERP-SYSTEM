import React from "react";
import { useParams } from "react-router-dom";
import "../styles/studentProfile.css";

const StudentProfile = () => {

  const { enrollNo } = useParams();

  /* ===== STUDENT DATABASE (Sample) ===== */
  const students = {
    SCH1001: {
      name: "Rahul Sharma",
      class: "Class 5",
      dob: "12-05-2010",
      gender: "Male",
      father: "Amit Sharma",
      contact: "9876543210",
      photo: "https://randomuser.me/api/portraits/boys/12.jpg"
    },

    SCH1002: {
      name: "Priya Verma",
      class: "Class 5",
      dob: "22-08-2010",
      gender: "Female",
      father: "Ramesh Verma",
      contact: "9123456789",
      photo: "https://randomuser.me/api/portraits/girls/25.jpg"
    },

    SCH1003: {
      name: "Aman Singh",
      class: "Class 5",
      dob: "03-01-2011",
      gender: "Male",
      father: "Suresh Singh",
      contact: "9988776655",
      photo: "https://randomuser.me/api/portraits/boys/32.jpg"
    }
  };

  const student = students[enrollNo];

  if (!student) {
    return <h2 style={{ padding: "20px" }}>Student Not Found</h2>;
  }

  return (
    <div className="profile-container">
      <div className="profile-card">

        <div className="profile-header">
          <img
            src={student.photo}
            alt="student"
            className="profile-img"
          />
          <div>
            <h2>{student.name}</h2>
            <p className="enroll-no">
              Enrollment No: {enrollNo}
            </p>
          </div>
        </div>

        <div className="profile-details">
          <div className="detail-box">
            <label>Class</label>
            <span>{student.class}</span>
          </div>

          <div className="detail-box">
            <label>Date of Birth</label>
            <span>{student.dob}</span>
          </div>

          <div className="detail-box">
            <label>Gender</label>
            <span>{student.gender}</span>
          </div>

          <div className="detail-box">
            <label>Father Name</label>
            <span>{student.father}</span>
          </div>

          <div className="detail-box">
            <label>Contact</label>
            <span>{student.contact}</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default StudentProfile;