import React, { useState } from "react";
import "./LoginPage.css";
import logo from "../assets/logo.jpeg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginPage() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {

    try {

      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email: email,
        password: password
      });
      console.log("LOGIN RESPONSE:", res.data);

      const token = res.data.token;
      const role = res.data.role;

      localStorage.setItem("token", token);
      localStorage.setItem("role", role);

      // Role Based Redirect

      if (role === "student") {
        navigate("/student");
      }

      else if (role === "center") {
        navigate("/center");
      }

      else if (role === "admin") {
        navigate("/admin");
      }

      else if (role === "super_admin") {
        navigate("/superadmin");
      }

    } catch (error) {

  console.log("LOGIN ERROR:", error.response?.data);

  const message =
    error.response?.data?.message || "Invalid email or password";

  alert(message);

}

  };

  return (
    <div className="login-wrapper">

      <div className="login-header">
        <h1>LOGIN</h1>
      </div>

      <div className="login-container">

        <div className="login-card">

          <img src={logo} alt="logo" className="login-logo" />

          <label>EMAIL</label>
          <input
            type="text"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>PASSWORD</label>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="captcha-section">
            <img
              src="https://dummyimage.com/120x40/ffffff/000&text=QVP2Y2"
              alt="captcha"
              className="captcha-img"
            />
            <button className="refresh-btn">⟳</button>
          </div>

          <input type="text" placeholder="Enter CAPTCHA" />

          <button  type="button" className="login-btn" onClick={handleLogin}>
            LOG IN
          </button>

        </div>

      </div>

    </div>
  );
}

export default LoginPage;