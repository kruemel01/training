const express = require("express");
var bodyParser = require("body-parser");
var passport = require("passport");


var router = require("./router");
var db = require("./database/db");


// ============================

const DEVELOPMENT_CONFIG_PATH = "./development.config.js";
const PRODUCTION_CONFIG_PATH = "./production.config.js";

// ============================

// Load dev configuration file.
function setDevelopmentEnv(app) {

  var morgan = require("morgan");

  console.log("Loading development configuration.");
  global.CONFIG = require(DEVELOPMENT_CONFIG_PATH);
  app.use(morgan("dev"));

}

// Load production configuration file.
function setProductionEnv(app) {
  console.log("Loading production configuration.");
  global.CONFIG = require(PRODUCTION_CONFIG_PATH);
}

// App initialization

var app = express();

// Access to request params.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Use passport authentication.
app.use(passport.initialize());

// Environment specification and configuration.
console.log("Running Training in " + process.env.NODE_ENV + " environment.");
console.log("Preparing application settings...");

if (process.env.NODE_ENV == "development") {
  setDevelopmentEnv(app);
} else if (process.env.NODE_ENV == "production") {
  setProductionEnv(app);
} else {
  console.log("ERROR: NODE_ENV is not correctly specified. Assuming development environment.");
  setDevelopmentEnv(app);
}

// Connect to db.
console.log("Connecting to database.")
conn = db.connect();

// Attach router to main app.
app.use("/", router);

// Catch connection errors
conn.on("error", function(err) {
  console.log("Error while connecting to database:");
  console.log(err);
});

// Start Server once DB connection is established
conn.once("open", function() {
  console.log("Database connection established.");

  app.listen(CONFIG.PORT, function(err) {
    if (err) {
      console.log("Error while opening server:");
      console.log(err);
    } else {
      console.log("Server listening on port " + CONFIG.PORT);
    }
  });

});
