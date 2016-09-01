var mongoose = require("mongoose");

module.exports = {
  init() {
    mongoose.connect("mongodb://localhost/training");

    this.db = mongoose.connection

    this.User = require("./models/User")(mongoose);

    return mongoose.connection;
  }
}
