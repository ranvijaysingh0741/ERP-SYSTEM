const { pool } = require('../config/db');
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");


// =====================================
// ✅ ADD STUDENT (FINAL SAFE VERSION)
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
    const enrollment_no =
      "ENR-" + uuidv4().slice(0,8);

    // ======================
    // SAFE FILE HANDLING
    // ======================
    const files = req.files || {};

    const getFile = (name) =>
      files[name]?.[0]?.filename || null;


    // ======================
    // 1️⃣ CREATE USER
    // ======================
    const password =
      await bcrypt.hash("123456",10);

    const userResult =
      await client.query(
        `INSERT INTO users
        (name,email,password,role,center_id)
        VALUES($1,$2,$3,'student',$4)
        RETURNING id`,
        [
          full_name,
          email,
          password,
          center_id
        ]
      );

    const user_id = userResult.rows[0].id;


    // ======================
    // 2️⃣ CREATE STUDENT
    // ======================
    const studentResult =
      await client.query(
        `INSERT INTO students
        (user_id,center_id,
         state,district,course,
         enrollment_no)
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

    const student_id =
      studentResult.rows[0].id;


    // ======================
    // 3️⃣ DOCUMENTS
    // ======================
    await client.query(
      `INSERT INTO student_documents
      (student_id,
       marksheet_path,
       tc_path,
       id_proof_path,
       additional_doc_path)
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
        (student_id,
         scholarship_type,
         scholarship_amount,
         approval_document_path)
         VALUES($1,$2,$3,$4)`,
        [
          student_id,
          scholarship_type || null,
          scholarship_amount || null,
          getFile("approval_document")
        ]
      );
    }

    await client.query("COMMIT");

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

    if (client)
      client.release();
  }
};



// =====================================
// ✅ GET CENTER STUDENTS
// =====================================
exports.getMyStudents = async (req, res) => {

  try {

    const center_id = req.user.id;

    const result = await pool.query(
      `SELECT id,
              enrollment_no,
              status,
              created_at
       FROM students
       WHERE center_id=$1
       ORDER BY created_at DESC`,
      [center_id]
    );

    res.json(result.rows);

  } catch (err) {
    res.status(500).json(err.message);
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