var router = require("express").Router();

var AuthenticateRequest = require("./actions/auth");
var AddUser = require("./actions/addUser");

router.get("/", function (req, res, next) {
  res.send("TRAINING API VERSION 1 @ localhost:3000")
});
router.post("/auth", AuthenticateRequest);
router.post("/user", AddUser);

module.exports = router;
