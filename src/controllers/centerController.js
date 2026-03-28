const { pool } = require('../config/db');
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");

// =====================================
// ✅ ADD STUDENT (FINAL CLEAN VERSION)
// =====================================
exports.addStudent = async (req, res) => {

  let client;

  try {

    if (!req.user)
      return res.status(401).json({ message: "Unauthorized" });

    client = await pool.connect();
    await client.query("BEGIN");

    const {
      full_name,
      email,
      state,
      district,
      course,
      admission_type,
      scholarship_type,
      scholarship_amount
    } = req.body;

    const center_id = req.user.id;
    const enrollment_no = "ENR-" + uuidv4().slice(0, 8);

    // ======================
    // FILE HANDLING
    // ======================
    const files = req.files || {};
    const getFile = (name) =>
      files[name]?.[0]?.filename || null;

    // ======================
    // 1️⃣ CREATE USER
    // ======================
    const password = await bcrypt.hash("123456", 10);

    const userResult = await client.query(
      `INSERT INTO users
       (name,email,password,role,center_id)
       VALUES($1,$2,$3,'student',$4)
       RETURNING id`,
      [full_name, email, password, center_id]
    );

    const user_id = userResult.rows[0].id;

    // ======================
    // 2️⃣ CREATE STUDENT
    // ======================
    const studentResult = await client.query(
      `INSERT INTO students
       (user_id,center_id,state,district,course,enrollment_no)
       VALUES($1,$2,$3,$4,$5,$6)
       RETURNING id`,
      [
        user_id,
        center_id,
        state || null,
        district || null,
        course || null,
        enrollment_no
      ]
    );

    const student_id = studentResult.rows[0].id;

    // ======================
    // 3️⃣ DOCUMENTS
    // ======================
    await client.query(
      `INSERT INTO student_documents
       (student_id,marksheet_path,tc_path,id_proof_path,additional_doc_path)
       VALUES($1,$2,$3,$4,$5)`,
      [
        student_id,
        getFile("marksheet"),
        getFile("tc"),
        getFile("id_proof"),
        getFile("additional_doc")
      ]
    );

    // ======================
    // 4️⃣ SCHOLARSHIP
    // ======================
    if (
      admission_type === "Scholarship" ||
      admission_type === "Free Seat"
    ) {
      await client.query(
        `INSERT INTO scholarship_details
         (student_id,scholarship_type,scholarship_amount,approval_document_path)
         VALUES($1,$2,$3,$4)`,
        [
          student_id,
          scholarship_type || null,
          scholarship_amount || null,
          getFile("approval_document")
        ]
      );
    }

    // ======================
    // ✅ COMMIT
    // ======================
    await client.query("COMMIT");

    // ======================
    // 🔔 NOTIFICATIONS
    // ======================

    // 👉 Center ko notification
    await pool.query(
      `INSERT INTO notifications (user_id, message)
       VALUES ($1, $2)`,
      [
        req.user.id,
        `Student added successfully: ${full_name}`
      ]
    );

    // 👉 Admin ko notification (optional)
    await pool.query(
      `INSERT INTO notifications (user_id, message)
       VALUES ($1, $2)`,
      [
        1,
        `New student added by center: ${full_name}`
      ]
    );

    res.status(201).json({
      message: "Student Added Successfully",
      enrollment_no
    });

  } catch (error) {

    console.error("ADD STUDENT ERROR:", error);

    if (client)
      await client.query("ROLLBACK");

    res.status(500).json({
      message: "Server Error",
      error: error.message
    });

  } finally {
    if (client) client.release();
  }
};


// =====================================
// ✅ GET CENTER STUDENTS (SEARCH + PAGINATION)
// =====================================
exports.getMyStudents = async (req, res) => {
  try {

    const center_id = req.user.id;

    const {
      page = 1,
      limit = 10,
      search = "",
      status = ""
    } = req.query;

    const offset = (page - 1) * limit;

    let query = `
      SELECT 
        s.id,
        s.enrollment_no,
        s.status,
        s.created_at,
        u.name AS student_name,
        u.email
      FROM students s
      JOIN users u ON s.user_id = u.id
      WHERE s.center_id = $1
    `;

    let values = [center_id];

    // 🔍 SEARCH
    if (search) {
      query += ` AND (u.name ILIKE $${values.length + 1} OR u.email ILIKE $${values.length + 1})`;
      values.push(`%${search}%`);
    }

    // 🎯 STATUS FILTER
    if (status && status !== "All Students") {
      query += ` AND s.status = $${values.length + 1}`;
      values.push(status);
    }

    query += ` ORDER BY s.created_at DESC 
               LIMIT $${values.length + 1} 
               OFFSET $${values.length + 2}`;

    values.push(limit, offset);

    const result = await pool.query(query, values);

    res.json(result.rows);

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
};


// =====================================
// ✅ TRACK STATUS
// =====================================
exports.getStudentStatus = async (req, res) => {
  try {

    const student_id = req.params.id;

    const result = await pool.query(
      `SELECT status,rejection_reason
       FROM students
       WHERE id=$1`,
      [student_id]
    );

    res.json(result.rows[0]);

  } catch (err) {
    res.status(500).json(err.message);
  }
};


// =====================================
// 🔔 GET NOTIFICATIONS
// =====================================
exports.getNotifications = async (req, res) => {
  try {

    const result = await pool.query(
      `SELECT * FROM notifications
       WHERE user_id=$1
       ORDER BY created_at DESC`,
      [req.user.id]
    );

    res.json(result.rows);

  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Server Error"
    });
  }
};