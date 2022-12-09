module.exports = {
    HOST: "localhost",
    USER: "cfm",
    PASSWORD: "cfm123456",
    DB: "cfmdb",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };