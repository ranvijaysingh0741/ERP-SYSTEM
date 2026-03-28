import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Dashboard from "./Dashboard";
import AdmissionStatus from "./AdmissionStatus";
import Documents from "./Documents";
import Timetable from "./Timetable";
import Notifications from "./Notifications";
import Profile from "./Profile";

import "./StudentDashboard.css";

export default function StudentDashboard() {

  const [activePage, setActivePage] = useState("dashboard");

  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem("token");

    navigate("/login");

  };

  const renderPage = () => {

    if (activePage === "dashboard") return <Dashboard />;

    if (activePage === "admission") return <AdmissionStatus />;

    if (activePage === "documents") return <Documents />;

    if (activePage === "timetable") return <Timetable />;

    if (activePage === "notifications") return <Notifications />;

    if (activePage === "profile") return <Profile />;

    return <Dashboard />;

  };

  return (

    <div className="dashboard">

      {/* Sidebar */}
      <div className="sidebar">

        <h2>Student Panel</h2>

        <p className="welcome">Welcome Student 👋</p>

        <Menu text="Dashboard" page="dashboard" {...{activePage,setActivePage}}/>

        <Menu text="My Status" page="admission" {...{activePage,setActivePage}}/>

        <Menu text="Documents" page="documents" {...{activePage,setActivePage}}/>

        <Menu text="Timetable" page="timetable" {...{activePage,setActivePage}}/>

        <Menu text="Notifications" page="notifications" {...{activePage,setActivePage}}/>

        <Menu text="Profile" page="profile" {...{activePage,setActivePage}}/>

        {/* Logout Button */}
        <p className="logout" onClick={handleLogout}>
          Logout
        </p>

      </div>

      {/* Main Section */}
      <div className="main">

        <div className="header">

          <h2>Student Dashboard</h2>

        </div>

        <div className="content">

          {renderPage()}

        </div>

      </div>

    </div>

  );

}

function Menu({text,page,activePage,setActivePage}){

  return(

    <p
      className={activePage===page ? "menu active":"menu"}
      onClick={()=>setActivePage(page)}
    >
      {text}
    </p>

  )

}