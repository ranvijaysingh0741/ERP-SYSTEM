import React, { useEffect, useState } from "react";
import API from "../../api/axios";

export default function Dashboard() {

  const [data, setData] = useState({});

  useEffect(() => {

    API.get("/student/dashboard")
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        console.log("Dashboard API error:", err);
      });

  }, []);

  const hour = new Date().getHours();
  let greeting = "Welcome";
  if (hour < 12) greeting = "Good Morning ☀";
  else if (hour < 18) greeting = "Good Afternoon 🌤";
  else greeting = "Good Evening 🌙";

  return (
    <div>

      <h1 style={{ marginBottom: "5px" }}>{greeting}, Student 👋</h1>

      <p style={{ color: "#6b4141" }}>
        Here's a quick look at your current status and activities.
      </p>

      {/* Top Cards */}
      <div style={rowStyle}>

        <HoverCard bg="#dcecfc">
          <h3>Admission Status</h3>
          <p style={{ color: "green", fontWeight: "bold" }}>
            {data.status || "Pending"}
          </p>
        </HoverCard>

        <HoverCard bg="#dcecfc">
          <h3>My School Center</h3>
          <p>{data.center || "Loading..."}</p>
        </HoverCard>

        <HoverCard bg="#dcecfc">
          <h3>Notifications</h3>
          <p>{data.notifications || 0} New Notifications</p>
        </HoverCard>

      </div>

      {/* Row 2 */}
      <div style={rowStyle}>

        <Box>
          <h3>Latest Notifications</h3>
          <p>✔ Your admission has been approved!</p>
          <p>📄 Document verification completed.</p>
        </Box>

        <Box>
          <h3>Quick Info</h3>
          <p><b>Next Class:</b> Mathematics</p>
          <p><b>Time:</b> 10:00 AM – 11:00 AM</p>
          <p><b>Teacher:</b> Mr. Sharma</p>
          <AnimatedButton text="Full Timetable" />
        </Box>

      </div>

      {/* Timetable */}
      <div style={{ marginTop: "25px" }}>
        <Box>

          <h3>My Timetable</h3>

          <table width="100%" style={{ marginTop: "10px" }}>
            <thead>
              <tr style={{ textAlign: "left" }}>
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
                <td>
                  <AnimatedButton text="View" small />
                </td>
              </tr>
            </tbody>

          </table>

        </Box>
      </div>

    </div>
  );
}

/* ---------- Reusable Components ---------- */

function HoverCard({ children, bg }) {
  return (
    <div
      style={{
        background: bg,
        padding: "22px",
        borderRadius: "14px",
        minWidth: "240px",
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.08)",
        transition: "all 0.3s ease",
        cursor: "pointer"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "0 12px 25px rgba(0,0,0,0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.08)";
      }}
    >
      {children}
    </div>
  );
}

function Box({ children }) {
  return (
    <div
      style={{
        background: "#cfe0f1",
        padding: "22px",
        borderRadius: "14px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
        flex: 1,
        transition: "0.3s"
      }}
    >
      {children}
    </div>
  );
}

function AnimatedButton({ text, small }) {
  return (
    <button
      style={{
        marginTop: "10px",
        padding: small ? "6px 12px" : "10px 18px",
        border: "none",
        background: small
          ? "linear-gradient(135deg, #2ecc71, #27ae60)"
          : "linear-gradient(135deg, #3498db, #2980b9)",
        color: "#ffffff",
        borderRadius: "8px",
        cursor: "pointer",
        transition: "0.3s",
        fontWeight: "500"
      }}
      onMouseEnter={(e) => (e.target.style.transform = "scale(1.08)")}
      onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
    >
      {text}
    </button>
  );
}

const rowStyle = {
  display: "flex",
  gap: "20px",
  marginTop: "25px",
  flexWrap: "wrap"
};