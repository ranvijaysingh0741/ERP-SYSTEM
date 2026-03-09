export default function Timetable() {
  const timetable = [
    {
      day: "Monday",
      slots: ["Math", "English", "Physics", "Break", "Chemistry", "Computer"]
    },
    {
      day: "Tuesday",
      slots: ["Biology", "Math", "English", "Break", "Physics", "Sports"]
    },
    {
      day: "Wednesday",
      slots: ["Computer", "Chemistry", "Math", "Break", "English", "Physics"]
    },
    {
      day: "Thursday",
      slots: ["Math", "Biology", "Computer", "Break", "Chemistry", "Library"]
    },
    {
      day: "Friday",
      slots: ["English", "Physics", "Math", "Break", "Computer", "Sports"]
    },
    {
      day: "Saturday",
      slots: ["Computer", "Math", "English", "Break", "Activity", "Games"]
    }
  ];

  return (
    <div style={styles.container}>
      <h2>Class Timetable</h2>

      <div style={styles.card}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th>Day / Time</th>
              <th>9–10</th>
              <th>10–11</th>
              <th>11–12</th>
              <th>12–1</th>
              <th>1–2</th>
              <th>2–3</th>
            </tr>
          </thead>
<br/>
          <tbody>
            {timetable.map((row, index) => (
              <tr key={index}>
                <td style={styles.day}>{row.day}</td>

                {row.slots.map((subject, i) => (
                  <td
                    key={i}
                    style={{
                      textAlign: "center",
                      color: subject === "Break" ? "#e67e22" : "#2c3e50",
                      fontWeight: subject === "Break" ? "bold" : "normal"
                    }}
                  >
                    {subject}
                  </td>
                ))}
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
    minHeight: "100vh"
  },

  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    overflowX: "auto"
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
    textAlign: "center"
  },

  day: {
    fontWeight: "bold",
    textAlign: "left",
    paddingLeft: "10px"
  }
};
