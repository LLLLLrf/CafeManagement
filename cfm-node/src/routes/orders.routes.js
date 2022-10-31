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
    // get income by day
    router.post("/income",orders.getincomebyday);
    app.use('/api/orders', router);
  };