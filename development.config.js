module.exports = {

  // Application server port.
  PORT: 3000,

  // Database settings
  DB: {

    DATABASE: "trainings",
    USER: "trainingUser",
    PASS: "trainingPass",
    HOST: "localhost",

    // Officially supported: mysql
    // Possibly working: (additional drivers required)
    //  mariadb
    //  sqlite
    //  postgres
    //  mssql
    TYPE: "mysql",

    MAX_CONNECTIONS: 5,
    IDLE: 10000
  }
}
