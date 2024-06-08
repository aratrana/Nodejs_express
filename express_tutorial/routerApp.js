const express = require("express");
const app = express();
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const helmet = require("helmet");
app.use(helmet());

const router = require("./theRouter");
const adminRouter = require("./adminRouter");
app.use("/", router);
app.use("/admin", adminRouter);
app.listen(3000);
