var express = require("express");
var activeApis = require("./api/active");

function sendIndex(req, res, next) {
  res.sendFile(__dirname + "/app/index.html");
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

router.use("/assets", express.static("app"));
router.use(sendIndex);

module.exports = router;
