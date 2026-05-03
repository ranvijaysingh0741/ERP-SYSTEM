import React, { useState } from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUserGraduate,
  FaChevronDown,
  FaCertificate,
  FaMoneyBill,
  FaCog,
  FaSignOutAlt,
  FaClipboardCheck,
  FaChartLine,
  FaBars,
  FaTimes
} from "react-icons/fa";

import "../styles/sidebar.css";

const Sidebar = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false);

  const closeSidebar = () => setShowSidebar(false);

  const menuItems = [
    { title: "Dashboard", icon: <FaTachometerAlt />, path: "/" },
    {
      title: "Students",
      icon: <FaUserGraduate />,
      submenu: [
        { title: "All Students", path: "/all-students" },
        { title: "Student Detail", path: "/student-detail" }
      ]
    },
    { title: "Certificates", icon: <FaCertificate />, path: "/certificates" },
    { title: "Fees", icon: <FaMoneyBill />, path: "/fees" },
    {
      title: "Admissions",
      icon: <FaCog />,
      submenu: [
        { title: "Enrollment Requests", path: "/admin/enrollments", icon: <FaClipboardCheck /> },
        { title: "Regional Reports", path: "/admin/reports", icon: <FaChartLine /> }
      ]
    }
  ];

  return (
    <>
      <button
        className="mobile-menu-btn"
        onClick={() => setShowSidebar(!showSidebar)}
      >
        {showSidebar ? <FaTimes /> : <FaBars />}
      </button>

      {showSidebar && <div className="sidebar-overlay" onClick={closeSidebar}></div>}

      <div className={`sidebar ${showSidebar ? "show-sidebar" : ""}`}>
        <div className="admin-header">
          <h2>Board of Vocational and Skill Higher Secondary Education</h2>
          <img src={logo} alt="Board Logo" className="board-logo" />
        </div>

        <ul className="menu">
          {menuItems.map((item, index) => (
            <li key={index} className="dropdown">
              {item.submenu ? (
                <>
                  <div
                    className="menu-link dropdown-title"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <div className="left-content">
                      {item.icon}
                      <span>{item.title}</span>
                    </div>

                    <FaChevronDown className={`arrow ${openIndex === index ? "rotate" : ""}`} />
                  </div>

                  {openIndex === index && (
                    <ul className="submenu">
                      {item.submenu.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <NavLink
                            to={subItem.path}
                            className="submenu-link"
                            onClick={closeSidebar}
                          >
                            {subItem.icon && <span style={{ marginRight: "8px" }}>{subItem.icon}</span>}
                            {subItem.title}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <NavLink to={item.path} className="menu-link" onClick={closeSidebar}>
                  {item.icon}
                  <span>{item.title}</span>
                </NavLink>
              )}
            </li>
          ))}
        </ul>

        <div className="logout">
          <FaSignOutAlt />
          <span>Logout</span>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
