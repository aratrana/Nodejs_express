const path = require('path')
const express = require("express");
const app = express();
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const helmet = require('helmet')
app.use(helmet())
app.set('view engine', 'ejs')
app.set('views',path.join(__dirname,'views'))
//2.
//Define a view engine
//EJS
//Mustache
//Handlebars
//Jade/Pug/Hbs/Views
//3.Inside one of our route we have a res.render
//4
app.get("/", (req, res, next) => {
  console.log(req);
  res.render("index");
});

app.listen(3000);
