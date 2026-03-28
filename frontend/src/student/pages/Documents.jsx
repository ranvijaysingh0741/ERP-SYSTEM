import { useEffect, useState } from "react";
import API from "../../api/axios";

export default function Documents() {

  const [docs, setDocs] = useState([]);

  useEffect(() => {

    API.get("/student/documents")
      .then(res => {
        setDocs(res.data);
      })
      .catch(err => {
        console.log("Documents API error:", err);
      });

  }, []);

  return (
    <div style={styles.container}>
      <h2>My Documents</h2>

      <div style={styles.card}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Document Name</th>
              <th style={styles.th}>Status</th>
              <th style={styles.th}>Action</th>
            </tr>
          </thead>

          <tbody>

            {docs.map((doc, index) => (
              <tr key={index} style={styles.row}>
                
                <td>{doc.document_name}</td>

                <td>
                  <span
                    style={{
                      color: doc.status === "Uploaded" ? "green" : "orange",
                      fontWeight: "bold"
                    }}
                  >
                    {doc.status}
                  </span>
                </td>

                <td>
                  {doc.status === "Uploaded" ? (
                    <button style={styles.downloadBtn}>
                      Download
                    </button>
                  ) : (
                    <button style={styles.uploadBtn}>
                      Upload
                    </button>
                  )}
                </td>

              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    background: "#ffffff",
    minHeight: "10vh"
  },

  card: {
    background: "#e9f1fa",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
  },

  table: {
    width: "100%",
    borderCollapse: "collapse"
  },

  th: {
    textAlign: "left",
    paddingBottom: "10px",
    borderBottom: "1px solid #ddd"
  },

  row: {
    borderBottom: "1px solid #f1f1f1",
    height: "50px"
  },

  uploadBtn: {
    background: "#3498db",
    color: "#fff",
    border: "none",
    padding: "6px 12px",
    borderRadius: "6px",
    cursor: "pointer"
  },

  downloadBtn: {
    background: "#2ecc71",
    color: "#fff",
    border: "none",
    padding: "6px 12px",
    borderRadius: "6px",
    cursor: "pointer"
  }
};