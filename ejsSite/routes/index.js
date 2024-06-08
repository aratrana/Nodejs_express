var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  const date = new Date(2024, 6, 6);
  res.set("Date", date);
  res.set('Cache-Control','no-store')
  res.set('Content-Type','text/html')
  res.render("index", { title: "Express" });
});

module.exports = router;
