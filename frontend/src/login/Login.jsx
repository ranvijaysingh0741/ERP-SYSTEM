import React, { useState } from "react";
import "../landing/pages/LoginPage.css"
import logo from "../landing/assets/logo.jpeg"
import { useNavigate } from "react-router-dom";
import API from "../api/axios";

function Login() {

  const navigate = useNavigate();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleLogin = async () => {

    try{

      const res = await API.post("/auth/login",{
        email,
        password
      })

      localStorage.setItem("token",res.data.token)
      localStorage.setItem("role",res.data.role)

      const role = res.data.role

      if(role==="STUDENT"){
        navigate("/student")
      }

      if(role==="CENTER"){
        navigate("/center")
      }

      if(role==="ADMIN"){
        navigate("/admin")
      }

      if(role==="SUPER_ADMIN"){
        navigate("/superadmin")
      }

    }catch(err){

      alert("Login Failed")

    }

  }

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
            onChange={(e)=>setEmail(e.target.value)}
          />

          <label>PASSWORD</label>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />

          <button className="login-btn" onClick={handleLogin}>
            LOG IN
          </button>

        </div>
      </div>

    </div>
  );
}

export default Login;