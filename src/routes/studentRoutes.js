const express = require("express");
const router = express.Router();

const studentController = require("../controllers/studentController");
const authMiddleware = require("../middleware/authMiddleware");

// ===============================
// Protected Student Routes
// ===============================

// Admission Status
router.get(
  "/status",
  authMiddleware,
  studentController.getStatus
);

// Timetable
router.get(
  "/timetable",
  authMiddleware,
  studentController.getTimetable
);

// Documents
router.get(
  "/documents",
  authMiddleware,
  studentController.getDocuments
);

// Notifications
router.get(
  "/notifications",
  authMiddleware,
  studentController.getNotifications
);

// Profile
router.get(
  "/profile",
  authMiddleware,
  studentController.getProfile
);

// Dashboard summary
router.get(
  "/dashboard",
  authMiddleware,
  studentController.getDashboard
);

module.exports = router;