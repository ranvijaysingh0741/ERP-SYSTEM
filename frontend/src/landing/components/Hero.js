import React from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";

function Hero() {

  const navigate = useNavigate();

  return (
    <section className="hero">
      <h1>BOARD OF VOCATIONAL AND SKILLS HIGHER SECONDARY EDUCATION</h1>
      <p>
        Admissions Open for 2026 Session | Secondary & Senior Secondary Programs
      </p>

      <button onClick={() => navigate("/login")}>
        Apply Now
      </button>

    </section>
  );
}

export default Hero;