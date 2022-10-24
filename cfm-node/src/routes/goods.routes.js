module.exports = app => {
    const goods = require("../controllers/goods.controller");
    var router = require("express").Router();
    // Create a new Doc
    router.post("/", goods.create);
    // Retrieve all Docs
    router.get("/", goods.findAll);
    // Retrieve all Docs
    router.get("/:name", goods.findOne);
    // Update a Doc with id
    router.put("/:id", goods.update);
    // Delete a Doc with id
    router.delete("/:id", goods.delete);
    // Delete all Docs
    router.delete("/", goods.deleteAll);
    app.use('/api/goods', router);
  };