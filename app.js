
// ============================

const DEVELOPMENT_CONFIG_PATH = "./development.config.js";
const PRODUCTION_CONFIG_PATH = "./production.config.js";

// ============================

// Load dev configuration file.
function setDevelopmentEnv() {
  console.log("Loading development configuration.");
  global.CONFIG = require(DEVELOPMENT_CONFIG_PATH);
}

// Load production configuration file.
function setProductionEnv() {
  console.log("Loading production configuration.");
  global.CONFIG = require(PRODUCTION_CONFIG_PATH);
}

// App initialization
const express = require("express");

var router = require("./router");
var db = require("./database/db");

var app = express();


// Environment specification and configuration.
console.log("Running Training in " + process.env.NODE_ENV + " environment.");
console.log("Preparing application settings...");

if (process.env.NODE_ENV == "development") {
  setDevelopmentEnv();
} else if (process.env.NODE_ENV == "production") {
  setProductionEnv();
} else {
  console.log("ERROR: NODE_ENV is not correctly specified. Assuming development environment.");
  setDevelopmentEnv();
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
