var jwt = require("jwt-simple");
var db = require("./database/db");

module.exports = {
  generateToken(user) {
    var nextWeek = new Date();
    nextWeek = nextWeek.setDate(nextWeek.getDate() + 7);
    unencodedToken = {
      id: user._id,
      expiry: nextWeek
    }
    return "JWT " + jwt.encode(unencodedToken, CONFIG.SECRET);
  },
  evaluateToken(token, cb) {
    db.User.findOne({ _id: token.id }, function(err, user) {
      if (err) {
        return cb(err, false);
      }
      if (user) {
        cb(null, user);
      } else {
        cb(null, false);
      }
    });
  },
  decodeToken(token) {
    return jwt.decode(token, CONFIG.SECRET);
  }
}
