import { useEffect, useState } from "react";
import API from "../../api/axios";

export default function AdmissionStatus() {

  const [student,setStudent] = useState({});

  useEffect(()=>{

    API.get("/student/status")
    .then(res=>{
      setStudent(res.data);
    })
    .catch(err=>{
      console.log(err);
    });

  },[])

  return (
    <div style={styles.page}>
      <h2>My Status</h2>

      <div style={styles.card}>
        <table style={styles.table}>
          <tbody>

            <tr>
              <td style={styles.label}>Student Name</td>
              <td>{student.name}</td>
            </tr>

            <tr>
              <td style={styles.label}>Class</td>
              <td>{student.class}</td>
            </tr>

            <tr>
              <td style={styles.label}>Roll No.</td>
              <td>{student.roll}</td>
            </tr>

            <tr>
              <td style={styles.label}>Section</td>
              <td>{student.section}</td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
}

const styles = {

  page: {
    padding: "20px"
  },

  card: {
    background: "#ffffff",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 3px 8px rgba(0,0,0,0.08)",
    maxWidth: "600px"
  },

  table: {
    width: "100%"
  },

  label: {
    fontWeight: "600",
    padding: "12px 0",
    width: "40%"
  }

};