const Pool = require("pg").Pool;

const pool = new Pool({
  user: "zachnitzkin",
  password: "ed167919",
  host: "localhost",
  database: "tsov",
  port: "5432",
});

module.exports = pool;
