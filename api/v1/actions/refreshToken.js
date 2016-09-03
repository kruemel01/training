var generateToken = require(CONFIG.ROOT + "/token").generateToken;

function RefreshToken(req, res) {
  console.log(req);
  res.json({
    success: true,
    payload: {
      token: generateToken(req.user)
    }
  })
}

module.exports = RefreshToken;
