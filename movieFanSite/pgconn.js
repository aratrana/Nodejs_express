const db = require("./db");

const query = "SELECT *FROM USER WHERE USERID = :1";
db.query(query, (error, dbresponse) => {
  console.log(dbresponse.rows);
});

//pool.end();
