require("dotenv").config();
const { pool } = require("./config/db");

const express = require("express");
const cors = require("cors");

const app = express();


// ===============================
// 🔥 AUTO TABLE CREATE (IMPORTANT)
// ===============================
const createTable = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name TEXT,
        email TEXT UNIQUE,
        password TEXT,
        role TEXT
      );
    `);

    console.log("✅ Users table ready");
  } catch (err) {
    console.error("❌ Table create error:", err);
  }
};

createTable();


// ===============================
// Middleware
// ===============================

// 🔥 Allow all origins (production safe)
app.use(cors());

app.use(express.json());


// ===============================
// Routes
// ===============================

// Auth
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

// Student
const studentRoutes = require("./routes/studentRoutes");
app.use("/api/student", studentRoutes);

// Center
const centerRoutes = require("./routes/centerRoutes");
app.use("/api/center", centerRoutes);

// Admin
const adminRoutes = require("./routes/adminRoutes");
app.use("/api/admin", adminRoutes);

// Super Admin
const superAdminRoutes = require("./routes/superAdminRoutes");
app.use("/api/superadmin", superAdminRoutes);

// Public routes
const publicRoutes = require("./routes/publicRoutes");
app.use("/api/public", publicRoutes);


// ===============================
// Static Files
// ===============================
app.use("/uploads", express.static("uploads"));


// ===============================
// Test Route
// ===============================
app.get("/", (req, res) => {
  res.send("Backend Running ✅");
});


// ===============================
// Server Start
// ===============================
const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on port ${PORT}`);
});