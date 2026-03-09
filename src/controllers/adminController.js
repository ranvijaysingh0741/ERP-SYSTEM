const { pool, setUserContext } = require("../config/db");


// ==========================
// 1️⃣ ASSIGNED CENTERS
// ==========================
exports.getMyCenters = async (req,res)=>{

 const result = await pool.query(
  `SELECT c.*
   FROM centers c
   JOIN admin_centers ac
   ON c.id = ac.center_id
   WHERE ac.admin_id=$1`,
  [req.user.id]
 );

 res.json(result.rows);
};


// ==========================
// 2️⃣ PENDING STUDENTS (RLS)
// ==========================


exports.getPendingStudents = async (req, res) => {

  const client = await pool.connect();

  try {

    // ⭐ VERY IMPORTANT
    await setUserContext(client, req.user.id);

    const result = await client.query(`
      SELECT id,
             enrollment_no,
             center_id,
             status
      FROM students
      WHERE status='pending'
      ORDER BY created_at DESC
    `);

    res.json(result.rows);

  } catch (err) {

    console.error(err);
    res.status(500).json(err.message);

  } finally {
    client.release();
  }
};


// ==========================
// 3️⃣ STUDENT DETAIL
// ==========================
exports.getStudentDetail = async(req,res)=>{

 const client = await pool.connect();

 try{

  await setUserContext(client,req.user.id);

  const result = await client.query(
   `SELECT * FROM students
    WHERE id=$1`,
   [req.params.id]
  );

  res.json(result.rows[0]);

 }finally{
  client.release();
 }
};


// ==========================
// 4️⃣ APPROVE STUDENT
// ==========================
exports.approveStudent = async(req,res)=>{

 const client = await pool.connect();

 try{

  await setUserContext(client,req.user.id);

  await client.query(
   `UPDATE students
    SET status='Approved',
        rejection_reason=NULL
    WHERE id=$1`,
   [req.params.id]
  );

  res.json({message:"Student Approved"});

 }finally{
  client.release();
 }
};


// ==========================
// 5️⃣ REJECT STUDENT
// ==========================
exports.rejectStudent = async(req,res)=>{

 const {reason}=req.body;
 const client=await pool.connect();

 try{

  await setUserContext(client,req.user.id);

  await client.query(
   `UPDATE students
    SET status='Rejected',
        rejection_reason=$1
    WHERE id=$2`,
   [reason,req.params.id]
  );

  res.json({message:"Student Rejected"});

 }finally{
  client.release();
 }
};


// ==========================
// 6️⃣ DASHBOARD STATS
// ==========================
exports.getDashboardStats=async(req,res)=>{

 const client=await pool.connect();

 try{

  await setUserContext(client,req.user.id);

  const total=
   await client.query(
     `SELECT COUNT(*) FROM students`);

  const pending=
   await client.query(
     `SELECT COUNT(*) FROM students
      WHERE status='Pending'`);

  const approved=
   await client.query(
     `SELECT COUNT(*) FROM students
      WHERE status='Approved'`);

  const rejected=
   await client.query(
     `SELECT COUNT(*) FROM students
      WHERE status='Rejected'`);

  res.json({
   total:total.rows[0].count,
   pending:pending.rows[0].count,
   approved:approved.rows[0].count,
   rejected:rejected.rows[0].count
  });

 }finally{
  client.release();
 }
};