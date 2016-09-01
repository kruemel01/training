var express = require("express");
var activeApis = require("./api/active");

function sendIndex(req, res, next) {
  res.sendFile(__dirname + "/client_dist/index.html");
}

function loadApis(Router, ApiArray) {
  ApiArray.forEach((path) => {
    CurrentApi = require("./api/" + path);
    attachApi(CurrentApi, Router);
  });
}

function attachApi(Api, Router) {
  Router.use("/api/v" + Api.version, Api.router);
}

var router = express.Router();

loadApis(router, activeApis)

router.use("/assets", express.static("client_dist"));
router.use(/\/((?!api\/).)*/, sendIndex);

module.exports = router;
