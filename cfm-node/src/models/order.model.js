module.exports = (sequelize, Sequelize) => {
    const Orders = sequelize.define("orders", {
      publicid:{
        type: Sequelize.INTEGER
      },
      paytime: {
        type: Sequelize.STRING
      },
      finish: {
        type: Sequelize.INTEGER
      },
      orderlist: {
        type: Sequelize.JSON
      },
      category: {
        type: Sequelize.STRING
      },
      totalprice:{
        type: Sequelize.DOUBLE
      }
    });
    return Orders;
  };