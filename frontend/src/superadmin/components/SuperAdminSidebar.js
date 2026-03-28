import React from "react";
import { Link, useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <div className="super-sidebar">

      <h2 className="logo">Super Admin</h2>

      <ul className="sidebar-menu">

        <li>
          <Link to="/superadmin">
            <FaChartPie /> Dashboard
          </Link>
        </li>

        <li>
          <Link to="/superadmin/admin-management">
            <FaUserShield /> Admin Accounts
          </Link>
        </li>

        <li>
          <Link to="/superadmin/locations">
            <FaMapMarkedAlt /> Locations
          </Link>
        </li>

        <li>
          <Link to="/superadmin/enrollment">
            <FaClipboardList /> Enrollments
          </Link>
        </li>

        <li>
          <Link to="/superadmin/reports">
            <FaChartBar /> Reports
          </Link>
        </li>

        <li>
          <Link to="/superadmin/activity-logs">
            <FaHistory /> Activity Logs
          </Link>
        </li>

      </ul>

      {/* ===== BOTTOM SECTION ===== */}
      <div className="sidebar-bottom">

        <Link to="/superadmin/profile">
          <FaUserCircle /> Profile Settings
        </Link>

        <div className="logout-btn" onClick={handleLogout}>
          <FaSignOutAlt /> Logout
        </div>

      </div>

    </div>
  );
};

export default SuperAdminSidebar;