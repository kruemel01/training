var mongoose = require("mongoose");
mongoose.Promise = require("bluebird");

module.exports = {
  connect() {
    mongoose.connect("mongodb://localhost/training");

    this.db = mongoose.connection;

    this.User = require("./models/User")(mongoose);

    return mongoose.connection;
  }
}
