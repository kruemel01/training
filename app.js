var express = require("express");

var router = require("./router");

var app = express();

console.log(process.env.NODE_ENV);

app.use("/", router);

app.listen(3000);
