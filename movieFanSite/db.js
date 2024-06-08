const PoolClass = require("pg").Pool;

const pool = new PoolClass({
  user: "",
  host: "",
  database: "",
  port: "",
  password: "",
});

module.exports = {
  query: (queryText, params, callBack) => {
    return pool.query(queryText, params, callBack);
  },
};
