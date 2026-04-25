import React, { useState } from "react";
import logo from "../assets/logo.jpeg";
import { Link } from "react-router-dom";
import "./Navbar.css";

const navItems = [
  { label: "Home", to: "/" },
  {
    label: "About Us",
    links: [
      { label: "Board Profile", to: "/about" },
      { label: "Message from Chairman", to: "/message-from-chairman" },
      { label: "Mission and Vision", to: "/mission-vision" },
    ],
  },
  {
    label: "Programmes",
    links: [
      { label: "Upper Primary Level", to: "/upper-primary" },
      { label: "Secondary Level", to: "/secondary" },
      { label: "Sr. Secondary Level", to: "/senior-secondary" },
      { label: "Skills & Vocational Level", to: "/skills" },
    ],
  },
  {
    label: "Notices",
    links: [
      { label: "Academic Notice", to: "/academic-notices" },
      { label: "Public Notice", to: "/public-notices" },
      { label: "Time Table", to: "/timetable" },
    ],
  },
  {
    label: "Result & Verification",
    links: [
      { label: "Result", to: "/result" },
      { label: "Email Verification", to: "/email-verification" },
      { label: "Postal Verification", to: "/postal-verification" },
    ],
  },
  { label: "Contact", to: "/contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* TOP BAR */}
      <div className="top-strip">
        <div className="top-right">
          <Link to="/centre-enquiry">CENTRE ENQUIRY</Link>
          <Link to="/login" className="login-link">
            LOGIN
          </Link>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <nav className="navbar">
        <div className="logo-section">
          <Link to="/" onClick={closeMenu}>
            <img src={logo} alt="Board Logo" className="logo" />
          </Link>
          <div className="logo-text">
            <h5>BVSHSE</h5>
            <p>Board of Vocational and Skills Higher Secondary Education</p>
            <p>Bhopal, Madhya Pradesh</p>
          </div>
        </div>

        <button
          className={`nav-toggle ${menuOpen ? "open" : ""}`}
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`nav-menu ${menuOpen ? "show" : ""}`}>
          {navItems.map((item) => (
            <li className={item.links ? "dropdown" : ""} key={item.label}>
              {item.to ? (
                <Link to={item.to} onClick={closeMenu}>
                  {item.label}
                </Link>
              ) : (
                <>
                  <span className="dropdown-label">{item.label}</span>
                  <div className="dropdown-menu">
                    {item.links.map((link) => (
                      <Link to={link.to} onClick={closeMenu} key={link.label}>
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
