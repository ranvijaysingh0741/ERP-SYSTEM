const {pool} = require('../config/db');

const logActivity = async (userId, action, description) => {
  await pool.query(
    `INSERT INTO activity_logs (user_id, action_type, description)
     VALUES ($1,$2,$3)`,
    [userId, action, description]
  );
};

module.exports = logActivity;