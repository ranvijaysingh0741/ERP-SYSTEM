import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="vms-footer">
      <div className="vms-footer-container">
        {/* CONTACT US */}
        <div className="vms-footer-section">
          <h3>CONTACT US</h3>
          <p>The Secretary</p>
          <p>
            Board of Vocational and Skills Higher Secondary Education
            <br />
            Bhopal, Madhya Pradesh - 462016
          </p>
          <p>contact@bnse.co.in</p>
        </div>

        {/* QUICK LINK */}
        <div className="vms-footer-section">
          <h3>QUIK LINK</h3>
          <ul>
            <li>
              <Link to="/">Online Course Material</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Result</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* PROGRAMMES */}
        <div className="vms-footer-section">
          <h3>PROGRAMMES</h3>
          <ul>
            <li>
              <Link to="/">Open Basic Education Level</Link>
            </li>
            <li>
              <Link to="/secondary">Secondary (Class X)</Link>
            </li>
            <li>
              <Link to="/senior-secondary">Senior Secondary (XII)</Link>
            </li>
            <li>
              <Link to="/">Skills & Vocational Level</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="vms-footer-bottom">
        Copyright © {new Date().getFullYear()} <strong>VBSE</strong> | All
        Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
