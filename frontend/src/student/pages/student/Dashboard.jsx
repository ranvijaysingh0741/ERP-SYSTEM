export default function Dashboard() {
  return (
    <div>
      <h1>Welcome, Student 👋</h1>
      <p>Here's a quick look at your current status and activities.</p>

      {/* Top Cards */}
      <div style={{ display: "flex", gap: "20px", marginTop: "20px", flexWrap: "wrap" }}>
        
        <div style={card("#d4edda")}>
          <h3>Admission Status</h3>
          <p style={{ color: "green", fontWeight: "bold" }}>Approved ✔</p>
        </div>

       
        <div style={card("#d6eaf8")}>
          <h3>My School Center</h3>
          <p>Mumbai Center</p>
        </div>

        <div style={card("#e8daef")}>
          <h3>Notifications</h3>
          <p>1 New Notification</p>
        </div>

      </div>

      {/* Row 2 */}
      <div style={{ display: "flex", gap: "20px", marginTop: "25px", flexWrap: "wrap" }}>

        {/* Latest Notifications */}
        <div style={box()}>
          <h3>Latest Notifications</h3>
          <p>✔ Your admission has been approved! (20 min ago)</p>
          <p>📄 Document verification completed successfully. (1 day ago)</p>
        </div>

        {/* Quick Info */}
        <div style={box()}>
          <h3>Quick Info</h3>
          <p><b>Next Class:</b> Mathematics</p>
          <p><b>Time:</b> 10:00 AM – 11:00 AM</p>
          <p><b>Teacher:</b> Mr. Sharma</p>
          <button style={btn}>Full Timetable</button>
        </div>

      </div>

      {/* Row 3 */}
      <div style={{ display: "flex", gap: "20px", marginTop: "25px", flexWrap: "wrap" }}>

        {/* Timetable */}
        <div style={{ flex: 2, ...box() }}>
          <h3>My Timetable</h3>
          <table width="100%">
            <thead>
              <tr>
                <th>Day</th>
                <th>Subject</th>
                <th>Time</th>
                <th>Teacher</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Monday</td>
                <td>Mathematics</td>
                <td>10:00 AM – 11:00 AM</td>
                <td>Mr. Sharma</td>
                <td><button style={btnSmall}>View</button></td>
              </tr>
            </tbody>
          </table>
        </div>

       
      </div>

    </div>
  );
}

const card = (bg) => ({
  background: bg,
  padding: "20px",
  borderRadius: "10px",
  minWidth: "220px",
  boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
});

const box = () => ({
  background: "#fff",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  flex: 1
});

const btn = {
  marginTop: "10px",
  padding: "8px 12px",
  border: "none",
  background: "#3498db",
  color: "#fff",
  borderRadius: "5px",
  cursor: "pointer"
};

const btnSmall = {
  padding: "5px 10px",
  border: "none",
  background: "#2ecc71",
  color: "#fff",
  borderRadius: "5px",
  cursor: "pointer"
};