// ======================================
// SUPER ADMIN CONTROLLER
// ======================================

const { pool } = require("../config/db");
const bcrypt = require("bcrypt");
const logActivity = require("../utils/logActivity");
console.log("POOL CHECK 👉", pool);

// ======================================
// 1️⃣ DASHBOARD ANALYTICS
// ======================================
exports.getDashboard = async (req, res) => {
  try {

    const students =
      await pool.query(`SELECT COUNT(*) FROM students`);

    const states =
      await pool.query(`SELECT COUNT(*) FROM states`);

    const centers =
      await pool.query(`SELECT COUNT(*) FROM centers`);

    const admissions =
      await pool.query(`SELECT COUNT(*) FROM admissions`);

    res.json({
      total_students: students.rows[0].count,
      total_states: states.rows[0].count,
      total_centers: centers.rows[0].count,
      total_enrollments: admissions.rows[0].count
    });

  } catch (err) {
    res.status(500).json(err.message);
  }
};


// ======================================
// 2️⃣ CREATE ADMIN
// ======================================
exports.createAdmin = async (req, res) => {
  try {

    const { email, password } = req.body;

    const hash = await bcrypt.hash(password, 10);

    const result = await pool.query(
      `INSERT INTO users(email,password,role)
       VALUES($1,$2,'admin')
       RETURNING id`,
      [email, hash]
    );

    await logActivity(
      req.user.id,
      "CREATE_ADMIN",
      `Admin ${email} created`
    );

    res.json({
      message: "Admin Created",
      admin_id: result.rows[0].id
    });

  } catch (err) {
    res.status(500).json(err.message);
  }
};


// ======================================
// 3️⃣ GET ALL ADMINS
// ======================================
exports.getAdmins = async (req, res) => {
  try {

    const result = await pool.query(
      `SELECT id,email
       FROM users
       WHERE role='admin'
       ORDER BY id DESC`
    );

    res.json(result.rows);

  } catch (err) {
    res.status(500).json(err.message);
  }
};


// ======================================
// 4️⃣ DELETE ADMIN
// ======================================
exports.deleteAdmin = async (req, res) => {
  try {

    await pool.query(
      `DELETE FROM users
       WHERE id=$1 AND role='admin'`,
      [req.params.id]
    );

    await logActivity(
      req.user.id,
      "DELETE_ADMIN",
      "Admin deleted"
    );

    res.json({ message: "Admin Deleted" });

  } catch (err) {
    res.status(500).json(err.message);
  }
};


// ======================================
// 5️⃣ ASSIGN CENTER TO ADMIN
// ======================================
exports.assignCenter = async (req, res) => {
  try {

    const { admin_id, center_id } = req.body;

    await pool.query(
      `INSERT INTO admin_centers(admin_id,center_id)
       VALUES($1,$2)`,
      [admin_id, center_id]
    );

    await logActivity(
      req.user.id,
      "ASSIGN_CENTER",
      "Center assigned"
    );

    res.json({ message: "Center Assigned" });

  } catch (err) {
    res.status(500).json(err.message);
  }
};


// ======================================
// 6️⃣ ADD STATE
// ======================================
exports.addState = async (req, res) => {
  try {

    await pool.query(
      `INSERT INTO states(state_name)
       VALUES($1)`,
      [req.body.state_name]
    );

    res.json({ message: "State Added" });

  } catch (err) {
    res.status(500).json(err.message);
  }
};


// ======================================
// 7️⃣ ADD DISTRICT
// ======================================
exports.addDistrict = async (req, res) => {
  try {

    const { state_id, district_name } = req.body;

    await pool.query(
      `INSERT INTO districts(state_id,district_name)
       VALUES($1,$2)`,
      [state_id, district_name]
    );

    res.json({ message: "District Added" });

  } catch (err) {
    res.status(500).json(err.message);
  }
};


// ======================================
// 8️⃣ ADD CENTER
// ======================================
exports.addCenter = async (req, res) => {
  try {

    const { district_id, center_name, address } =
      req.body;

    await pool.query(
      `INSERT INTO centers
       (district_id,center_name,address)
       VALUES($1,$2,$3)`,
      [district_id, center_name, address]
    );

    res.json({ message: "Center Added" });

  } catch (err) {
    res.status(500).json(err.message);
  }
};


// ======================================
// 9️⃣ VIEW ALL ADMISSIONS
// ======================================
exports.getAllAdmissions = async (req, res) => {
  try {

    const result = await pool.query(`
      SELECT 
        a.id,
        a.student_id,
        a.status,
        u.email,
        c.center_name
      FROM admissions a
      JOIN students s 
        ON a.student_id = s.id
      JOIN users u
        ON s.user_id = u.id
      JOIN centers c
        ON s.center_id = c.id
      ORDER BY a.id DESC
    `);

    res.json(result.rows);

  } catch (err) {
    console.error(err);
    res.status(500).json(err.message);
  }
};

// ======================================
// 🔟 OVERRIDE ADMISSION
// ======================================
exports.overrideAdmission = async (req, res) => {
  try {

    const { status, reason } = req.body;

    await pool.query(
      `UPDATE admissions
       SET status=$1,
           override_reason=$2,
           overridden_by=$3,
           override_at=NOW()
       WHERE id=$4`,
      [status, reason, req.user.id, req.params.id]
    );

    await logActivity(
      req.user.id,
      "OVERRIDE",
      "Admission overridden"
    );

    res.json({ message: "Admission Overridden" });

  } catch (err) {
    res.status(500).json(err.message);
  }
};


// ======================================
// 1️⃣1️⃣ STATE REPORT
// ======================================
exports.getStateReport = async (req, res) => {
  try {

    const result = await pool.query(`
      SELECT st.state_name,
             COUNT(s.id) total_students
      FROM states st
      JOIN districts d ON st.id=d.state_id
      JOIN centers c ON d.id=c.district_id
      JOIN students s ON s.center_id=c.id
      GROUP BY st.state_name
    `);

    res.json(result.rows);

  } catch (err) {
    res.status(500).json(err.message);
  }
};


// ======================================
// 1️⃣2️⃣ ACTIVITY LOGS
// ======================================
exports.getActivityLogs = async (req, res) => {
  try {

    const result = await pool.query(
      `SELECT *
       FROM activity_logs
       ORDER BY created_at DESC
       LIMIT 50`
    );

    res.json(result.rows);

  } catch (err) {
    res.status(500).json(err.message);
  }
};