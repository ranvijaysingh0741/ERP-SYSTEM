import React from "react";
import {
  FaUsers,
  FaSchool,
  FaMapMarkedAlt,
  FaClipboardCheck,
  FaArrowUp,
  FaChartLine,
  FaCheckCircle,
  FaBuilding,
  FaUserTimes
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

import "../../styles/superadmin.css";

const SuperAdminDashboard = () => {
  const stats = [
    { title: "Total Students", value: 1250, icon: <FaUsers />, color: "#4a6cf7", growth: "12.5%" },
    { title: "Total Schools", value: 35, icon: <FaSchool />, color: "#28a745", growth: "8.3%" },
    { title: "Total States", value: 8, icon: <FaMapMarkedAlt />, color: "#ff7b00", growth: "5.1%" },
    { title: "Total Enrollments", value: 1320, icon: <FaClipboardCheck />, color: "#7f5af0", growth: "15.3%" }
  ];

  const monthlyData = [
    { month: "Jan", students: 110 },
    { month: "Feb", students: 180 },
    { month: "Mar", students: 235 },
    { month: "Apr", students: 215 },
    { month: "May", students: 270 }
  ];

  const approvalData = [
    { name: "Approved", value: 85 },
    { name: "Pending", value: 15 }
  ];

  const COLORS = ["#525df1", "#f9205b"];

  const activityLogs = [
    { action: "Admin Rahul approved 10 students", time: "10 mins ago", icon: <FaCheckCircle /> },
    { action: "New Center added in Bhopal", time: "1 hour ago", icon: <FaBuilding /> },
    { action: "Admin Priya rejected 2 applications", time: "Today 12:30 PM", icon: <FaUserTimes /> }
  ];

  return (
    <div className="admin-page">
      <div className="admin-header">
        <h1>Super Admin Dashboard</h1>
        <p>Welcome back! Here's what's happening with your platform today.</p>
      </div>

      <div className="stats-grid">
        {stats.map((item, index) => (
          <div key={index} className="stat-card">
            <div className="stat-main">
              <div className="stat-icon" style={{ background: item.color }}>
                {item.icon}
              </div>

              <div>
                <h3>{item.value}</h3>
                <p>{item.title}</p>
              </div>
            </div>

            <div className="growth-text">
              <FaArrowUp />
              <span>{item.growth}</span> from last month
            </div>
          </div>
        ))}
      </div>

      <div className="charts-grid">
        <div className="chart-card">
          <div className="chart-title">
            <h3>
              <FaChartLine /> Monthly Enrollment Growth
            </h3>
            <select>
              <option>This Year</option>
            </select>
          </div>

          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="students" fill="#536dfe" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <div className="chart-title">
            <h3>Approval Status</h3>
            <select>
              <option>This Year</option>
            </select>
          </div>

          <div className="approval-box">
            <ResponsiveContainer width="60%" height={260}>
              <PieChart>
                <Pie
                  data={approvalData}
                  dataKey="value"
                  outerRadius={100}
                  label={({ value }) => `${value}%`}
                >
                  {approvalData.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>

            <div className="approval-legend">
              <p><span className="dot blue"></span> Approved <br /><small>85% (1122)</small></p>
              <p><span className="dot pink"></span> Pending <br /><small>15% (198)</small></p>
            </div>
          </div>
        </div>
      </div>

      <div className="logs-card">
        <div className="logs-header">
          <h3>Activity Logs</h3>
          <button>View All</button>
        </div>

        <ul>
          {activityLogs.map((log, index) => (
            <li key={index}>
              <div className="log-left">
                <div className="log-icon">{log.icon}</div>
                <strong>{log.action}</strong>
              </div>
              <span>{log.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SuperAdminDashboard;
