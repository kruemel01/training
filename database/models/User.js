const Sequelize = require("sequelize");

function User(db) {

  var User = db.define("user", {
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    }
  }, {
    freezeTableName: true
  });

  return User
    .sync({ force: true })
    .then(function() {
      return User;
    });

}

module.exports = User;
