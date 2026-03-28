import React from "react";
import { Outlet } from "react-router-dom";
import SuperAdminSidebar from "../SuperAdminSidebar";
import "../../styles/superadmin.css";

const SuperAdminLayout = () => {
  return (
    <div className="layout">

      <SuperAdminSidebar />

      <div className="main-content">

        <div className="topbar">
          <h2>SUPER ADMIN PANEL</h2>
        </div>

        <div className="dashboard">
          <Outlet />
        </div>

      </div>

    </div>
  );
};

export default SuperAdminLayout;