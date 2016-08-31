var router = require("express").Router();

router.get("/", function (req, res, next) {
  res.send("TRAINING API VERSION 1 @ localhost:3000")
});

module.exports = router;
