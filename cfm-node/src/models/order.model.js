module.exports = (sequelize, Sequelize) => {
    const Orders = sequelize.define("orders", {
      publicid:{
        type: Sequelize.STRING
      },
      paytime: {
        type: Sequelize.STRING
      },
      finish: {
        type: Sequelize.STRING
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