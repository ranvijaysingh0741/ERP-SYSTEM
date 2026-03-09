export default function AdmissionStatus() {
  return (
    <div style={styles.page}>
      <h2>My Status</h2>

      <div style={styles.card}>
        <table style={styles.table}>
          <tbody>
            <tr>
              <td style={styles.label}>Student Name</td>
              <td>Ananya S.</td>
            </tr>

            <tr>
              <td style={styles.label}>Class</td>
              <td>10th</td>
            </tr>

            <tr>
              <td style={styles.label}>Roll No.</td>
              <td>23</td>
            </tr>

            <tr>
              <td style={styles.label}>Section</td>
              <td>A</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

const styles = {
  page: {
    background: "#e6f0fa",   // light blue full width (change to #fff if you want full white)
    minHeight: "100vh",
    padding: "30px"
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
