var bcrypt = require("bcrypt-nodejs");

function User(mongoose) {
  var UserSchema = mongoose.Schema({
    username: {
      type: String,
      unique: true,
      required: true
    },
    passwdHash: {
      type: String,
      required: true
    }
  });

  UserSchema.pre("save", function(next) {
    var user = this;
    if (this.isModified("passwdHash") || this.isNew) {
      bcrypt.genSalt(10, function (err, salt) {
        if (err) {
          return next(err);
        }
        bcrypt.hash(user.passwdHash, salt, function() {}, function(err, hash) {
          if (err) {
            return next(err);
          }
          user.passwdHash = hash;
          next();
        });
      });
    } else {
      return next();
    }
  });

  UserSchema.methods.checkPassword = function(pass, cb) {
    bcrypt.compare(pass, this.passwdHash, function(err, isMatch) {
      if (err) {
        return cb(err);
      }
      cb(null, isMatch);
    });
  }

  var UserModel = mongoose.model("User", UserSchema);

  return UserModel;
}

module.exports = User;
