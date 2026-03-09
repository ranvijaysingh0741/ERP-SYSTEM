import React from "react";
import SuperAdminSidebar from "../SuperAdminSidebar";
import "../../styles/superadmin.css";

const SuperAdminLayout = ({ children }) => {
  return (
    <div className="layout">
      <SuperAdminSidebar />

      <div className="main-content">
        <div className="topbar">
          <h2>SUPER ADMIN PANEL</h2>
        </div>

        <div className="page-content">
          {children}   {/* 🔥 THIS MUST BE HERE */}
        </div>
      </div>
    </div>
  );
};

export default SuperAdminLayout;