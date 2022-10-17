module.exports = (sequelize, Sequelize) => {
    const Goods = sequelize.define("goods", {
      name: {
        type: Sequelize.STRING
      },
      class: {
        type: Sequelize.STRING
      },
      ask:{
        type: Sequelize.JSON
      },
      sale: {
        type: Sequelize.BOOLEAN
      },
      image_name: {
        type: Sequelize.STRING
      },
      image: {
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