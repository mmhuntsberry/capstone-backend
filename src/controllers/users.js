const pool = require("../sql/connection");

const list = (req, res) => {
  console.log(pool);
  pool.query("SELECT * FROM users", (err, rows, fields) => {
    res.json(rows);
  });
};

module.exports = {
  list,
};
