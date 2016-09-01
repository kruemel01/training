var db = require("../../../database/db");

function AddUser(req, res) {
  if (!req.body.username || !req.body.password) {
    res.status(400).json({ success: false, msg: "Username or password field empty." });
  } else {
    var newUser = new db.User({
      username: req.body.username,
      passwdHash: req.body.password
    });

    newUser.save(function(err) {
      if (err) {
        return res.status(409).json({ success: false, msg: "Username already exists." });
      }
      res.json({
        success: true,
        payload: { username: newUser.username },
        msg: "Successfully created user."
      });
    });
  }
}

module.exports = AddUser;
