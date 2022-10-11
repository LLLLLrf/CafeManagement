const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  },
  logging: console.log
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.goods = require("./goods.model")(sequelize, Sequelize);
db.orders = require("./order.model")(sequelize,Sequelize);

module.exports = db;