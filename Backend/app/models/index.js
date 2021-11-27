const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
  sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};
sequelize
  .authenticate()
  .then(() => {
    console.log('Connected to DB');
  })
  .catch(err => {
    console.error('Unable to connect to DB', err);
  });

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.todoList = require("./model.js")(sequelize, Sequelize);

module.exports = db;
/*
db.todoList.findAll().then(users => {
  console.log("All users:", JSON.stringify(users, null, 4));
});*/
