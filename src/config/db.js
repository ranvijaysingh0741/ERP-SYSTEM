const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const setUserContext = async (client, userId) => {
  await client.query(
    `SET app.current_user_id='${userId}'`
  );
};

module.exports = { pool, setUserContext };