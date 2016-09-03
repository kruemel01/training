var router = require("express").Router();

var passport = require(CONFIG.ROOT + "/app").passport;

var AuthenticateRequest = require("./actions/auth");
var RefreshToken = require("./actions/refreshToken");
var AddUser = require("./actions/addUser");

router.get("/", function (req, res, next) {
  res.send("TRAINING API VERSION 1 @ localhost:3000")
});
router.post("/auth", AuthenticateRequest);
router.post("/auth/token", passport.authenticate("jwt", { session: false }), RefreshToken);
router.post("/user", AddUser);

module.exports = router;
