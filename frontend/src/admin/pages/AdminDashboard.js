import React, { useEffect, useState } from "react";
import AdminLayout from "../components/AdminLayout";

import AdminOverview from "../components/AdminOverview";
import SummaryCards from "../components/SummaryCards";
import DashboardCards from "../components/DashboardCards";
import CalendarAgenda from "../components/CalendarAgenda";

import { getDashboardStats } from "../../api/adminApi";

import "../styles/dashboard.css";

const AdminDashboard = () => {

  // ✅ backend ke according state
  const [stats, setStats] = useState({
    students: 0,
    centers: 0,
    pending: 0,
    approved: 0
  });

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const res = await getDashboardStats();

      // ✅ safe fallback
      setStats({
        students: res.data.students || 0,
        centers: res.data.centers || 0,
        pending: res.data.pending || 0,
        approved: res.data.approved || 0
      });

    } catch (error) {
      console.error("Dashboard API Error:", error);
    }
  };

  return (
    <AdminLayout>

      {/* TOP INFO */}
      <AdminOverview />

      {/* SUMMARY CARDS */}
      <SummaryCards stats={stats} />

      {/* MAIN SECTION */}
      <div className="dashboard-layout">

        <div className="dashboard-left">
          <DashboardCards stats={stats} />
        </div>

        <div className="dashboard-right">
          <CalendarAgenda />
        </div>

      </div>

    </AdminLayout>
  );
};

export default AdminDashboard;