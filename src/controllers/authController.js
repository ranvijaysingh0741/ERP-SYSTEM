const { pool } = require("../config/db");
const bcrypt = require("bcrypt");
const generateToken = require("../utils/generateToken");

// LOGIN CONTROLLER
exports.login = async (req, res) => {

  try {

    const { email, password } = req.body;

    // 1️⃣ Validate input
    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password required"
      });
    }

    // 2️⃣ Find user
    const user = await pool.query(
      "SELECT * FROM users WHERE email=$1",
      [email.toLowerCase()]
    );

    if (user.rows.length === 0) {
      return res.status(401).json({
        message: "Invalid email or password"
      });
    }

    const dbUser = user.rows[0];

    // 3️⃣ Compare password
    const validPassword = await bcrypt.compare(
      password,
      dbUser.password
    );

    if (!validPassword) {
      return res.status(401).json({
        message: "Invalid email or password"
      });
    }

    // 4️⃣ Generate JWT Token
    const token = generateToken({
      id: dbUser.id,
      role: dbUser.role
    });

    // 5️⃣ Send response
    res.json({
      message: "Login successful",
      token: token,
      role: dbUser.role,
      userId: dbUser.id
    });

  } catch (err) {

    console.error("Login error:", err);

    res.status(500).json({
      message: "Server error"
    });

  }

};