var evaluateToken = require(CONFIG.ROOT + "/token").evaluateToken;
var decodeToken = require(CONFIG.ROOT + "/token").decodeToken;

function Debug(req, res) {
  decodedToken = decodeToken(req.headers.authorization)
  evaluateToken(decodedToken, function(err, evaluatedToken) {
    res.json({
      UserInfo: req.user,
      TokenInfo: decodedToken,
      Evaluated: evaluatedToken,
      Expiry: new Date(decodedToken.expiry)
    });
  });
}

module.exports = Debug;
