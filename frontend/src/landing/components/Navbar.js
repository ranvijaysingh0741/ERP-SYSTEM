import React from "react";
import logo from "../assets/logo.jpeg";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
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
          <img src={logo} alt="Board Logo" className="logo" />
          <h5>Board of Vocational and Skills Higher Secondary Education</h5>
          <p>Ramtek, Nagpur (Maharashtra)</p>
        </div>

        <ul className="nav-menu">
          <li>
            <Link to="/">HOME</Link>
          </li>

          <li className="dropdown">
            ABOUT US ▼
            <div className="dropdown-menu">
              <Link to="/about">Board Profile</Link>
              <Link to="/message-from-chairman">Message from Chairman</Link>
              <Link to="/mission-vision">Mission and Vision</Link>
            </div>
          </li>

          <li className="dropdown">
            PROGRAMMES ▼
            <div className="dropdown-menu">
              <Link to="/upper-primary">Open Basic Education Level</Link>
              <Link to="/secondary">Secondary Level</Link>
              <Link to="/senior-secondary">Sr. Secondary Level</Link>
              <Link to="/skills">Skills & Vocational Level</Link>
            </div>
          </li>

          <li className="dropdown">
            NOTICES ▼
            <div className="dropdown-menu">
              <Link to="/academic-notices">Academic Notice</Link>
              <Link to="/public-notices">Public Notice</Link>
              <Link to="/timetable">Time Table</Link>
            </div>
          </li>

          <li className="dropdown">
            RESULT & VERIFICATION ▼
            <div className="dropdown-menu">
              <Link to="/result">Result</Link>
              <Link to="/email-verification">Email Verification</Link>
              <Link to="/postal-verification">Postal Verification</Link>
            </div>
          </li>

          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
