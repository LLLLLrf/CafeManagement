module.exports = (sequelize, Sequelize) => {
    const Goods = sequelize.define("goods", {
      name: {
        type: Sequelize.STRING
      },
      sale: {
        type: Sequelize.BOOLEAN
      },
      image_address: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.FLOAT
      },
      describe: {
        type: Sequelize.STRING
      },
    });
    return Goods;
  };