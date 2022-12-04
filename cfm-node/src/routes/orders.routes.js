module.exports = app => {
    const orders = require("../controllers/orders.controller");
    var router = require("express").Router();
    // Create a new Doc
    router.post("/", orders.create);
    // Retrieve all Docs
    router.get("/", orders.findAll);
    // Update a Doc with id
    router.put("/:id", orders.update);
    // Delete a Doc with id
    router.delete("/:id", orders.delete);
    // Delete all Docs
    router.delete("/", orders.deleteAll);
    // find by key word
    router.post("/key",orders.findbyKey);
    // get order by day
    router.post("/lrday",orders.getordersbyDay);
    // find by key word
    router.post("/id",orders.findbyId);

    router.post("/getweekdata",orders.getWeekData);

    router.post("/getmonthdata",orders.getMonthData);

    router.post("/getdaydata",orders.getDayData);

    router.post("/getunpay",orders.getUnpayOrder);

    // router.post("/checkpay",orders.checkpay);

    router.post("/finishbyPublicid",orders.finishbyPublicid)

    app.use('/api/orders', router);
  };