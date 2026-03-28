import React, { useState } from "react";
import logo from "../assets/logo.png";
import { NavLink, useNavigate } from "react-router-dom"; // ✅ yaha add
import {
  FaTachometerAlt,
  FaUserGraduate,
  FaChevronDown,
  FaCertificate,
  FaMoneyBill,
  FaCog,
  FaSignOutAlt,
  FaClipboardCheck,
  FaChartLine
} from "react-icons/fa";

import "../styles/sidebar.css";

const Sidebar = () => {

  const [openIndex, setOpenIndex] = useState(null);

  const navigate = useNavigate(); // ✅ yaha hona chahiye

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const menuItems = [
    {
      title: "Dashboard",
      icon: <FaTachometerAlt />,
      path: "/admin/dashboard"
    },
    {
      title: "Students",
      icon: <FaUserGraduate />,
      submenu: [
        { title: "All Students", path: "/admin/all-students" },
        { title: "Student Detail", path: "/admin/student-detail" }
      ]
    },
    {
      title: "Certificates",
      icon: <FaCertificate />,
      path: "/admin/certificates"
    },
    {
      title: "Fees",
      icon: <FaMoneyBill />,
      path: "/admin/fees"
    },
    {
      title: "Admissions",
      icon: <FaCog />,
      submenu: [
        {
          title: "Enrollment Requests",
          path: "/admin/enrollments",
          icon: <FaClipboardCheck />
        },
        {
          title: "Regional Reports",
          path: "/admin/reports",
          icon: <FaChartLine />
        }
      ]
    }
  ];

  return (
    <div className="sidebar">

      {/* LOGO */}
      <div className="admin-header">
        <h2>Board of Vocational and Skill Higher Secondary Education</h2>
        <img src={logo} alt="Board Logo" className="board-logo" />
      </div>

      {/* MENU */}
      <ul className="menu">
        {menuItems.map((item, index) => (
          <li key={index} className="dropdown">

            {item.submenu ? (
              <>
                <div
                  className="menu-link dropdown-title"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <div className="left-content">
                    {item.icon}
                    <span>{item.title}</span>
                  </div>

                  <FaChevronDown
                    className={`arrow ${
                      openIndex === index ? "rotate" : ""
                    }`}
                  />
                </div>

                {openIndex === index && (
                  <ul className="submenu">
                    {item.submenu.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <NavLink
                          to={subItem.path}
                          className="submenu-link"
                        >
                          {subItem.icon && (
                            <span style={{ marginRight: "8px" }}>
                              {subItem.icon}
                            </span>
                          )}
                          {subItem.title}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              <NavLink to={item.path} className="menu-link">
                {item.icon}
                <span>{item.title}</span>
              </NavLink>
            )}

          </li>
        ))}
      </ul>

      {/* LOGOUT */}
      <div className="logout" onClick={handleLogout}>
        <FaSignOutAlt />
        <span>Logout</span>
      </div>

    </div>
  );
};

export default Sidebar;