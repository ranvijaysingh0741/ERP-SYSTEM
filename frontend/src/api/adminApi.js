import axios from "axios";

const API = "https://erp-backend-lrfi.onrender.com/api/admin";

// 🔐 TOKEN
const getToken = () => localStorage.getItem("token");

// COMMON HEADER
const authHeader = () => ({
  headers: {
    Authorization: `Bearer ${getToken()}`
  }
});

/* ===============================
   DASHBOARD
================================ */
export const getDashboardStats = () =>
  axios.get(`${API}/dashboard`, authHeader());

/* ===============================
   ALL STUDENTS
================================ */
export const getStudents = () =>
  axios.get(`${API}/students`, authHeader());

/* ===============================
   PENDING ENROLLMENTS
================================ */
export const getPendingStudents = () =>
  axios.get(`${API}/pending`, authHeader());

/* ===============================
   APPROVE STUDENT
================================ */
export const approveStudent = (id) =>
  axios.put(`${API}/approve/${id}`, {}, authHeader());

/* ===============================
   REJECT STUDENT
================================ */
export const rejectStudent = (id, reason) =>
  axios.put(`${API}/reject/${id}`, { reason }, authHeader());

/* ===============================
   REGIONAL REPORTS
================================ */
export const getRegionalReports = () =>
  axios.get(`${API}/reports`, authHeader());