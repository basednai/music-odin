const pool = require("./pool");

const getAll = async () => {
  const { rows } = await pool.query("SELECT * FROM songs");
  return rows;
};

module.exports = { getAll };
