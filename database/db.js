const Sequelize = require("sequelize");

const User = require("./models/User");

module.exports = {
  init() {
    this.database = new Sequelize(
      CONFIG.DB.DATABASE,
      CONFIG.DB.USER,
      CONFIG.DB.PASS,
      {
        host: CONFIG.DB.HOST,
        dialect: CONFIG.DB.TYPE,

        pool: {
          max: CONFIG.DB.MAX_CONNECTIONS,
          min: 0,
          idle: CONFIG.DB.IDLE
        }
      }
    );

    _User = User(this.database);

    return Promise.all([
      _User
    ]).then(function() {
      this.User = _User;
    });
  }
}
