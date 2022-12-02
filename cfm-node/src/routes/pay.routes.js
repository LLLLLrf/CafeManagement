module.exports = app => {
    const alipay = require("../middleware/alipay");
    var router = require("express").Router();
    
    router.post("/checkalipay", alipay.checkpay);
    app.use('/api/pay', router);
  };