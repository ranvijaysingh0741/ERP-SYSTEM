const router = require("express").Router();
const authController = require("../controllers/authController");

// ===============================
// AUTH ROUTES
// ===============================

// ✅ Register User
router.post("/register", authController.register);

// ✅ Login User
router.post("/login", authController.login);

module.exports = router;