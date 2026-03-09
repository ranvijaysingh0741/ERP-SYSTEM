import React, { useEffect } from "react";
import AdminOverview from "../components/AdminOverview";
import SummaryCards from "../components/SummaryCards";
import DashboardCards from "../components/DashboardCards";
import CalendarAgenda from "../components/CalendarAgenda";
import { useNavigate } from "react-router-dom";
import "../styles/dashboard.css";

const Dashboard = () => {

  const navigate = useNavigate();

  useEffect(() => {

    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    }

  }, [navigate]);

  return (
    <div>

      {/* ADMIN PANEL INFO */}
      <AdminOverview />

      {/* SUMMARY */}
      <SummaryCards />

      {/* MAIN DASHBOARD */}
      <div className="dashboard-layout">

        <div className="dashboard-left">
          <DashboardCards />
        </div>

        <div className="dashboard-right">
          <CalendarAgenda />
        </div>

      </div>

    </div>
  );
};

export default Dashboard;