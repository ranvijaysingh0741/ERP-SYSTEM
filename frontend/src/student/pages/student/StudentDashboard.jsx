import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Dashboard from "./Dashboard";
import AdmissionStatus from "./AdmissionStatus";
import Documents from "./Documents";
import Timetable from "./Timetable";
import Notifications from "./Notifications";
import Profile from "./Profile";

export default function StudentDashboard() {

  const [activePage, setActivePage] = useState("dashboard");
  const navigate = useNavigate();

  const renderPage = () => {
    switch (activePage) {
      case "dashboard":
        return <Dashboard />;
      case "admission":
        return <AdmissionStatus />;
      case "documents":
        return <Documents />;
      case "timetable":
        return <Timetable />;
      case "notifications":
        return <Notifications />;
      case "profile":
        return <Profile />;
      default:
        return <Dashboard />;
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <div style={styles.container}>

      {/* Sidebar */}
      <div style={styles.sidebar}>
        <h2>Student Panel</h2>

        <p style={styles.welcome}>Welcome Student 👋</p>

        <MenuItem text="Dashboard" page="dashboard" activePage={activePage} setActivePage={setActivePage}/>
        <MenuItem text="My Status" page="admission" activePage={activePage} setActivePage={setActivePage}/>
        <MenuItem text="Documents" page="documents" activePage={activePage} setActivePage={setActivePage}/>
        <MenuItem text="Timetable" page="timetable" activePage={activePage} setActivePage={setActivePage}/>
        <MenuItem text="Notifications" page="notifications" activePage={activePage} setActivePage={setActivePage}/>
        <MenuItem text="Profile" page="profile" activePage={activePage} setActivePage={setActivePage}/>

        <hr />

        <p style={styles.logout} onClick={handleLogout}>
          Logout
        </p>
      </div>

      {/* Main Area */}
      <div style={styles.main}>

        {/* Header */}
        <div style={styles.header}>
          <h2>Student Dashboard</h2>

          <div style={styles.headerRight}>

            {/* Notification */}
            <div
              style={styles.bell}
              onClick={() => setActivePage("notifications")}
            >
              🔔
              <span style={styles.badge}>1</span>
            </div>

            {/* Profile */}
            <div
              style={styles.profile}
              onClick={() => setActivePage("profile")}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="student"
                style={styles.avatar}
              />
              <span>Student</span>
            </div>

          </div>
        </div>

        {/* Page Content */}
        <div style={styles.content}>
          {renderPage()}
        </div>

      </div>

    </div>
  );
}

/* Sidebar Menu Item */
function MenuItem({ text, page, activePage, setActivePage }) {
  return (
    <p
      onClick={() => setActivePage(page)}
      style={{
        padding: "10px",
        borderRadius: "6px",
        cursor: "pointer",
        background: activePage === page ? "#34495e" : "transparent"
      }}
    >
      {text}
    </p>
  );
}

/* Styles */
const styles = {
  container:{
    display:"flex",
    minHeight:"100vh",
    background:"#ffffff"
  },

  sidebar:{
    width:"220px",
    background:"#2c3e50",
    color:"white",
    padding:"20px"
  },

  welcome:{
    fontSize:"14px",
    marginBottom:"15px",
    color:"#dfe6e9"
  },

  logout:{
    cursor:"pointer",
    color:"#ff7675",
    fontWeight:"bold"
  },

  main:{
    flex:1,
    display:"flex",
    flexDirection:"column",
    background:"#ffffff"
  },

  header:{
    height:"70px",
    background:"#ffffff",
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    padding:"0 20px",
    boxShadow:"0 2px 6px rgba(0,0,0,0.1)"
  },

  headerRight:{
    display:"flex",
    alignItems:"center",
    gap:"20px"
  },

  bell:{
    position:"relative",
    fontSize:"20px",
    cursor:"pointer"
  },

  badge:{
    position:"absolute",
    top:"-6px",
    right:"-8px",
    background:"red",
    color:"#fff",
    borderRadius:"50%",
    padding:"2px 6px",
    fontSize:"12px"
  },

  profile:{
    display:"flex",
    alignItems:"center",
    gap:"8px",
    cursor:"pointer"
  },

  avatar:{
    width:"35px",
    height:"35px",
    borderRadius:"50%",
    border:"2px solid #3498db"
  },

  content:{
    flex:1,
    padding:"20px",
    background:"#ffffff"
  }
};