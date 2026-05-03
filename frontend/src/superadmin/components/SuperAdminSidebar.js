import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaChartPie,
  FaUserShield,
  FaMapMarkedAlt,
  FaClipboardList,
  FaChartBar,
  FaHistory,
  FaUserCircle,
  FaSignOutAlt,
  FaBars,
  FaTimes
} from "react-icons/fa";

const SuperAdminSidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const closeSidebar = () => setShowSidebar(false);

  return (
    <>
      <button
        className="mobile-menu-btn"
        onClick={() => setShowSidebar(!showSidebar)}
      >
        {showSidebar ? <FaTimes /> : <FaBars />}
      </button>

      {showSidebar && (
        <div className="sidebar-overlay" onClick={closeSidebar}></div>
      )}

      <div className={`super-sidebar ${showSidebar ? "show-sidebar" : ""}`}>
        <h2 className="logo">Super Admin</h2>

        <ul className="sidebar-menu">
          <li>
            <Link to="/" onClick={closeSidebar}>
              <FaChartPie /> Dashboard
            </Link>
          </li>

          <li>
            <Link to="/admin-management" onClick={closeSidebar}>
              <FaUserShield /> Admin Accounts
            </Link>
          </li>

          <li>
            <Link to="/locations" onClick={closeSidebar}>
              <FaMapMarkedAlt /> Locations
            </Link>
          </li>

          <li>
            <Link to="/enrollment" onClick={closeSidebar}>
              <FaClipboardList /> Enrollments
            </Link>
          </li>

          <li>
            <Link to="/reports" onClick={closeSidebar}>
              <FaChartBar /> Reports
            </Link>
          </li>

          <li>
            <Link to="/activity-logs" onClick={closeSidebar}>
              <FaHistory /> Activity Logs
            </Link>
          </li>
        </ul>

        <div className="sidebar-bottom">
          <Link to="/profile" onClick={closeSidebar}>
            <FaUserCircle /> Profile Settings
          </Link>

          <div className="logout-btn">
            <FaSignOutAlt /> Logout
          </div>
        </div>
      </div>
    </>
  );
};

export default SuperAdminSidebar;
