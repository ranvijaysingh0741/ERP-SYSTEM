const { pool} = require("../config/db");


// ✅ 1. View Admission Status
exports.getStatus = async (req, res) => {
  try {

    const result = await pool.query(
      "SELECT status, rejection_reason FROM students WHERE user_id=$1",
      [req.user.id]
    );

    if (result.rows.length === 0)
      return res.status(404).json({ message: "Student not found" });

    res.json(result.rows[0]);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



// ✅ 2. View Timetable
exports.getTimetable = async (req, res) => {
  try {

    const student = await pool.query(
      "SELECT id FROM students WHERE user_id=$1",
      [req.user.id]
    );

    if (student.rows.length === 0)
      return res.status(404).json({ message: "Student not found" });

    const timetable = await pool.query(
      "SELECT * FROM timetable WHERE student_id=$1",
      [student.rows[0].id]
    );

    res.json(timetable.rows);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



// ✅ 3. View Documents
exports.getDocuments = async (req, res) => {
  try {

    const student = await pool.query(
      "SELECT id FROM students WHERE user_id=$1",
      [req.user.id]
    );

    const docs = await pool.query(
      "SELECT * FROM documents WHERE student_id=$1",
      [student.rows[0].id]
    );

    res.json(docs.rows);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



// ✅ 4. View Notifications
exports.getNotifications = async (req, res) => {
  try {

    const notifications = await pool.query(
      `SELECT * FROM notifications
       WHERE user_id=$1
       ORDER BY created_at DESC`,
      [req.user.id]
    );

    res.json(notifications.rows);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};