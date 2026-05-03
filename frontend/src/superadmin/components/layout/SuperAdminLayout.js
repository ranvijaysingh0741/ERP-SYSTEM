import React from "react";
import { FaBars, FaBell, FaSearch, FaChevronDown } from "react-icons/fa";
import SuperAdminSidebar from "../SuperAdminSidebar";
import "../../styles/superadmin.css";

const SuperAdminLayout = ({ children }) => {
  return (
    <div className="layout">
      <SuperAdminSidebar />

      <div className="main-content">
        <div className="topbar">
          <div className="menu-box">
            <FaBars />
          </div>

          <h2>SUPER ADMIN PANEL</h2>

          <div className="topbar-search">
            <FaSearch />
            <input type="text" placeholder="Search anything..." />
          </div>

          <div className="notification">
            <FaBell />
            <span>4</span>
          </div>

          <div className="admin-profile">
            <div className="profile-circle">SA</div>
            <div>
              <h4>Super Admin</h4>
              <p>Administrator</p>
            </div>
            <FaChevronDown />
          </div>
        </div>

        <div className="page-content">{children}</div>
      </div>
    </div>
  );
};

export default SuperAdminLayout;
