import React, { useEffect } from "react";
import {
  FaUsers,
  FaSchool,
  FaMapMarkedAlt,
  FaClipboardCheck
} from "react-icons/fa";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";

import { useNavigate } from "react-router-dom";
import "../../styles/superadmin.css";

const SuperAdminDashboard = () => {

  const navigate = useNavigate();

  useEffect(() => {

    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    }

  }, [navigate]);

  const stats = [
    { title: "Total Students", value: 1250, icon: <FaUsers />, color: "#4a6cf7" },
    { title: "Total Schools", value: 35, icon: <FaSchool />, color: "#28a745" },
    { title: "Total States", value: 8, icon: <FaMapMarkedAlt />, color: "#ff7b00" },
    { title: "Total Enrollments", value: 1320, icon: <FaClipboardCheck />, color: "#7f5af0" }
  ];

  const monthlyData = [
    { month: "Jan", students: 100 },
    { month: "Feb", students: 150 },
    { month: "Mar", students: 200 },
    { month: "Apr", students: 180 },
    { month: "May", students: 220 }
  ];

  const approvalData = [
    { name: "Approved", value: 1100 },
    { name: "Pending", value: 150 }
  ];

  const COLORS = ["#28a745", "#ff4d4f"];

  const activityLogs = [
    { action: "Admin Rahul approved 10 students", time: "10 mins ago" },
    { action: "New Center added in Bhopal", time: "1 hour ago" },
    { action: "Admin Priya rejected 2 applications", time: "Today 12:30 PM" },
    { action: "Super Admin overrode approval", time: "Yesterday 5:00 PM" }
  ];

  return (
    <div className="admin-page">

      <div className="admin-header">
        <h2>Super Admin Dashboard</h2>
      </div>

      {/* STATS */}
      <div className="stats-grid">
        {stats.map((item, index) => (
          <div key={index} className="stat-card">
            <div className="stat-icon" style={{ background: item.color }}>
              {item.icon}
            </div>
            <div>
              <h3>{item.value}</h3>
              <p>{item.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CHARTS */}
      <div className="charts-grid">

        <div className="chart-card">
          <h3>Monthly Enrollment Growth</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="students" fill="#4a6cf7" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3>Approval Status</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={approvalData} dataKey="value" outerRadius={90}>
                {approvalData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

      </div>

      {/* ACTIVITY LOGS */}
      <div className="logs-card">
        <h3>Activity Logs</h3>
        <ul>
          {activityLogs.map((log, index) => (
            <li key={index}>
              <strong>{log.action}</strong>
              <span style={{ float: "right", color: "#888" }}>
                {log.time}
              </span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default SuperAdminDashboard;