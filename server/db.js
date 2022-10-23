const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "pga.teste123",
  host: "localhost",
  port: 5432,
  database: "userscrud"
});

module.exports = pool;
