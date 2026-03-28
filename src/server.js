require("dotenv").config();
require("./config/db");

const express = require("express");
const cors = require("cors");

const app = express();


// ===============================
// Middleware
// ===============================

app.use(cors({
  origin: "http://localhost:3000"
}));

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

// Public routes (landing page)
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

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});