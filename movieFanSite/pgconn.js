const PoolClass = require("pg").Pool;

const pool = new PoolClass({
  user: "",
  host: "",
  database: "",
  port: "",
  password: "",
});

const query = "SELECT *FROM USER WHERE USERID = :1";
pool.query(query, (error, dbresponse) => {
  console.log(dbresponse.rows);
});

pool.end();
