const { pool } = require("../config/db");


// ===============================
// 1️⃣ Get Admission Status
// ===============================
exports.getStatus = async (req, res) => {
  try {

    const result = await pool.query(
      `SELECT name, class, roll, section, status, rejection_reason
       FROM students
       WHERE user_id = $1`,
      [req.user.id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.json(result.rows[0]);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



// ===============================
// 2️⃣ Get Timetable
// ===============================
exports.getTimetable = async (req, res) => {
  try {

    const student = await pool.query(
      "SELECT id FROM students WHERE user_id = $1",
      [req.user.id]
    );

    if (student.rows.length === 0) {
      return res.status(404).json({ message: "Student not found" });
    }

    const timetable = await pool.query(
      "SELECT * FROM timetable WHERE student_id = $1",
      [student.rows[0].id]
    );

    res.json(timetable.rows);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



// ===============================
// 3️⃣ Get Documents
// ===============================
exports.getDocuments = async (req, res) => {
  try {

    const student = await pool.query(
      "SELECT id FROM students WHERE user_id = $1",
      [req.user.id]
    );

    if (student.rows.length === 0) {
      return res.status(404).json({ message: "Student not found" });
    }

    const docs = await pool.query(
      `SELECT document_name, status, file_url
       FROM documents
       WHERE student_id = $1`,
      [student.rows[0].id]
    );

    res.json(docs.rows);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



// ===============================
// 4️⃣ Get Notifications
// ===============================
exports.getNotifications = async (req, res) => {
  try {

    const notifications = await pool.query(
      `SELECT id, message, created_at, is_read
       FROM notifications
       WHERE user_id = $1
       ORDER BY created_at DESC`,
      [req.user.id]
    );

    res.json(notifications.rows);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



// ===============================
// 5️⃣ Get Student Profile
// ===============================
exports.getProfile = async (req, res) => {
  try {

    const student = await pool.query(
      `SELECT name, class, roll, section,
              dob, gender, phone, email,
              father_name, mother_name, parent_phone,
              address
       FROM students
       WHERE user_id = $1`,
      [req.user.id]
    );

    if (student.rows.length === 0) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.json(student.rows[0]);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



// ===============================
// 6️⃣ Dashboard Summary
// ===============================
exports.getDashboard = async (req, res) => {
  try {

    const student = await pool.query(
      "SELECT id, status, center_name FROM students WHERE user_id=$1",
      [req.user.id]
    );

    const notifications = await pool.query(
      "SELECT COUNT(*) FROM notifications WHERE user_id=$1 AND is_read=false",
      [req.user.id]
    );

    res.json({
      status: student.rows[0]?.status,
      center: student.rows[0]?.center_name,
      notifications: notifications.rows[0].count
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};