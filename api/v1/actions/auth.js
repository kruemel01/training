var jwt = require("jwt-simple");
var db = require(CONFIG.ROOT + "/database/db");
var generateToken = require(CONFIG.ROOT + "/token").generateToken;

function AuthenticateRequest(req, res) {
  if (!req.body.username || !req.body.password) {
    return res.status(400).json({ success: false, msg: "Username or Password field empty."});
  }
  db.User.findOne({
    username: req.body.username
  }, function(err, user) {
    if (err) throw err;

    if (!user) {
      return res.status(401).json({ success: false, msg: "Invalid username." });
    }

    user.checkPassword(req.body.password, function(err, isMatch) {
      if (err) {
        return res.status(500).json({ success: false, msg: "Internal Server Error (Password Validation)" });
      }
      if (isMatch) {
        res.json({
          success: true,
          payload: {
            token: generateToken(user)
          }
        });
      } else {
        res.status(401).json({ success: false, msg: "Invalid password." });
      }
    });
  })
}

module.exports = AuthenticateRequest;
