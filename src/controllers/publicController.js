const { pool } = require('../config/db');

exports.getNotices = async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT * FROM notices ORDER BY created_at DESC`
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

exports.getPrograms = async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT * FROM programs`
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

exports.getStats = async (req, res) => {
  try {
    const students =
      await pool.query(`SELECT COUNT(*) FROM students`);

    const centers =
      await pool.query(`SELECT COUNT(*) FROM centers`);

    res.json({
      total_students: students.rows[0].count,
      total_centers: centers.rows[0].count
    });
  } catch (err) {
    res.status(500).json(err.message);
  }
};