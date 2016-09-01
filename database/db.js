var mongoose = require("mongoose");
mongoose.Promise = require("bluebird");

module.exports = {
  connect() {
    mongoose.connect(CONFIG.DB_CONN_STRING);

    this.db = mongoose.connection;

    this.User = require("./models/User")(mongoose);

    return mongoose.connection;
  }
}
