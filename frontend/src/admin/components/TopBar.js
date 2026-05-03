import React from "react";
import { FaBell } from "react-icons/fa";
import "../styles/topbar.css";

const Topbar = () => {
  return (
    <div className="topbar">

      <h2 className="topbar-title">ADMIN PANEL</h2>

      <div className="topbar-right">

        {/* SEARCH */}
        <input
          type="text"
          placeholder="Search anything..."
          className="search-input"
        />

        {/* NOTIFICATION */}
        <div className="icon">
          <FaBell />
        </div>

        {/* PROFILE */}
        <div className="profile">
          <div className="avatar">A</div>
          <div>
            <p className="name">Admin</p>
            <small>Administrator</small>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Topbar;
