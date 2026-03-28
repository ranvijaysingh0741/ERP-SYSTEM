const { pool } = require("../config/db");
const bcrypt = require("bcrypt");
const generateToken = require("../utils/generateToken");

// ===============================
// REGISTER CONTROLLER
// ===============================
exports.register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // 1️⃣ Validate input
    if (!name || !email || !password || !role) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    // 2️⃣ Check existing user
    const existingUser = await pool.query(
      "SELECT * FROM users WHERE email=$1",
      [email.toLowerCase()]
    );

    if (existingUser.rows.length > 0) {
      return res.status(400).json({
        message: "User already exists"
      });
    }

    // 3️⃣ Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 4️⃣ Insert user
    const newUser = await pool.query(
      "INSERT INTO users (name, email, password, role) VALUES ($1,$2,$3,$4) RETURNING *",
      [name, email.toLowerCase(), hashedPassword, role]
    );

    res.status(201).json({
      message: "User registered successfully ✅",
      user: newUser.rows[0]
    });

  } catch (err) {
    console.error("Register error:", err);

    res.status(500).json({
      message: "Server error"
    });
  }
};


// ===============================
// LOGIN CONTROLLER
// ===============================
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

    // 4️⃣ Generate token
    const token = generateToken({
      id: dbUser.id,
      role: dbUser.role
    });

    // 5️⃣ Response
    res.json({
      message: "Login successful ✅",
      token,
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