import React from "react";
import { Link } from "react-router-dom";
import {
  FaChartPie,
  FaUserShield,
  FaMapMarkedAlt,
  FaClipboardList,
  FaChartBar,
  FaHistory,
  FaUserCircle,
  FaSignOutAlt
} from "react-icons/fa";

const SuperAdminSidebar = () => {
  return (
    <div className="super-sidebar">

      <h2 className="logo">Super Admin</h2>

      <ul className="sidebar-menu">

        <li>
          <Link to="/">
            <FaChartPie /> Dashboard
          </Link>
        </li>

        <li>
          <Link to="/admin-management">
            <FaUserShield /> Admin Accounts
          </Link>
        </li>

        <li>
          <Link to="/locations">
            <FaMapMarkedAlt /> Locations
          </Link>
        </li>

        <li>
          <Link to="/enrollment">   {/* FIXED */}
            <FaClipboardList /> Enrollments
          </Link>
        </li>

        <li>
          <Link to="/reports">
            <FaChartBar /> Reports
          </Link>
        </li>

        <li>
          <Link to="/activity-logs">
            <FaHistory /> Activity Logs
          </Link>
        </li>

      </ul>

      {/* ===== BOTTOM SECTION ===== */}
      <div className="sidebar-bottom">

        <Link to="/profile">
          <FaUserCircle /> Profile Settings
        </Link>

        <div className="logout-btn">
          <FaSignOutAlt /> Logout
        </div>

      </div>

    </div>
  );
};

export default SuperAdminSidebar;