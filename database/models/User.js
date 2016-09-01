
function User(mongoose) {
  var UserSchema = mongoose.Schema({
    username: String
  });

  var UserModel = mongoose.model("User", UserSchema);

  return UserModel;
}

module.exports = User;
