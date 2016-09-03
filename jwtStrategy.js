var JwtStrategy = require("passport-jwt").Strategy;
var ExtractJwt = require("passport-jwt").ExtractJwt;

var evaluateToken = require("./token").evaluateToken;
var db = require("./database/db");

module.exports = function(passport) {
  var opts = {
    secretOrKey: CONFIG.SECRET,
    jwtFromRequest: ExtractJwt.fromAuthHeader()
  };

  var strategy = new JwtStrategy(opts, function(jwt_payload, done) {
    evaluateToken(jwt_payload, done);
  });

  passport.use(strategy);
}
