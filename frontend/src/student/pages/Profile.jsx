import { useEffect, useState } from "react";
import API from "../../api/axios";

export default function Profile() {

  const [student, setStudent] = useState({});

  useEffect(() => {

    API.get("/student/profile")
      .then(res => {
        setStudent(res.data);
      })
      .catch(err => {
        console.log("Profile API error:", err);
      });

  }, []);

  return (
    <div style={styles.container}>
      <h2>My Profile</h2>

      <div style={styles.card}>
        
        {/* Top Section */}
        <div style={styles.topSection}>
          <img
            src={student.photo || "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}
            alt="student"
            style={styles.photo}
          />

          <div>
            <h3 style={{ margin: "0 0 10px 0" }}>{student.name}</h3>
            <p>Class: {student.class}</p>
            <p>Roll No: {student.roll}</p>
            <p>Section: {student.section}</p>
          </div>
        </div>

        <hr />

        {/* Student Details */}
        <h3>Student Details</h3>
        <div style={styles.grid}>
          <Info label="Date of Birth" value={student.dob} />
          <Info label="Gender" value={student.gender} />
          <Info label="Phone" value={student.phone} />
          <Info label="Email" value={student.email} />
        </div>

        <hr />

        {/* Parent Details */}
        <h3>Parent Details</h3>
        <div style={styles.grid}>
          <Info label="Father Name" value={student.father_name} />
          <Info label="Mother Name" value={student.mother_name} />
          <Info label="Parent Phone" value={student.parent_phone} />
        </div>

        <hr />

        {/* Address */}
        <h3>Address</h3>
        <p style={styles.address}>{student.address}</p>

      </div>
    </div>
  );
}


/* ---------- Reusable Info Component ---------- */
function Info({ label, value }) {
  return (
    <div style={styles.infoBox}>
      <p style={styles.label}>{label}</p>
      <p style={styles.value}>{value || "-"}</p>
    </div>
  );
}


/* ---------- Styles ---------- */
const styles = {

  container: {
    padding: "20px",
    background: "#ffffff",
    minHeight: "10vh"
  },

  card: {
    background: "#eff6fa",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
  },

  topSection: {
    display: "flex",
    alignItems: "center",
    gap: "20px"
  },

  photo: {
    width: "90px",
    height: "90px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "3px solid #3498db"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "15px"
  },

  infoBox: {
    background: "#f4f6f9",
    padding: "10px",
    borderRadius: "6px"
  },

  label: {
    fontSize: "13px",
    color: "#777",
    margin: 0
  },

  value: {
    fontWeight: "bold",
    margin: "3px 0 0 0"
  },

  address: {
    background: "#f4f6f9",
    padding: "12px",
    borderRadius: "6px"
  }

};