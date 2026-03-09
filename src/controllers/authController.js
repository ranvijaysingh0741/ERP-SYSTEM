const { pool } = require('../config/db');
const bcrypt = require("bcrypt");
const generateToken = require("../utils/generateToken");

// LOGIN CONTROLLER
exports.login = async (req, res) => {
  try {

    const { email, password } = req.body;

    // 1️⃣ Find user
    const user = await pool.query(
      "SELECT * FROM users WHERE email=$1",
      [email]
    );

    if (user.rows.length === 0) {
      return res.status(400).json({
        message: "User not found"
      });
    }

    const dbUser = user.rows[0];

    // 2️⃣ Compare password
    const validPassword = await bcrypt.compare(
      password,
      dbUser.password
    );

    if (!validPassword) {
      return res.status(400).json({
        message: "Invalid password"
      });
    }

    // 3️⃣ Generate JWT Token
    const token = generateToken(dbUser);

    // 4️⃣ Send response
    res.json({
      message: "Login successful",
      token,
      role: dbUser.role,
      userId: dbUser.id
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Server Error"
    });
  }
};