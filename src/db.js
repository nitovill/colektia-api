const { Sequelize } = require("sequelize");
const { dbUser, dbPassword, dbHost, dbName, dbPort } = require("../lib/config");
const EmployeeS = require("./models/Employee");

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  port: dbPort,
  dialect: "mysql",
  logging: false,
  native: false,
});

const Employee = EmployeeS(sequelize);

module.exports = {
  conn: sequelize,
  Employee,
};
