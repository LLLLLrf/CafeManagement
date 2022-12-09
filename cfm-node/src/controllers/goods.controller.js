const { Sequelize } = require("../models/index");
const db = require("../models/index");
const Goods = db.goods;
const Op = db.Sequelize.Op;
const fs = require('fs');
// Create and Save a new Goods
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    // Create a Goods
    const goods = {
      name: req.body.name,
      class: req.body.class,
      ask: req.body.ask,
      sale: req.body.sale,
      image_name: req.body.image_name,
      image: 0,
      price: req.body.price,
      describe: req.body.describe,
    };
    // Save Goods in the database
    Goods.create(goods)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Goods."
        });
      });
  };
// Retrieve all Goods from the database.
exports.findAll = (req, res) => {
    Goods.findAll({ where: null })
      .then(data => {
        const directoryPath = __basedir + "/uploads/";
        for(let i=0;i<data.length;i++){
          let fileName = data[i].dataValues.image_name;
          let bitmap = fs.readFileSync(directoryPath + fileName);
          let base64str = Buffer.from(bitmap, 'binary').toString('base64');
          data[i].dataValues.image="data:image/png;base64,"+base64str
        }
        res.send(data)
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving materials."
        });
      });
  };
  // Retrieve all Goods from the database.
exports.findOne = (req, res) => {
    const name = req.params.name;
    var condition = { name: name } 
    Goods.findAll({ where: condition })
      .then(data => {
        const directoryPath = __basedir + "/uploads/";
        for(let i=0;i<data.length;i++){
          let fileName = data[i].dataValues.image_name;
          let bitmap = fs.readFileSync(directoryPath + fileName);
          let base64str = Buffer.from(bitmap, 'binary').toString('base64');
          data[i].dataValues.image="data:image/png;base64,"+base64str
        }
        res.send(data)
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving materials."
        });
      });
  };
// Update a Good by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    Goods.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Goods was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Goods with id=${id}. Maybe Goods was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Goods with id=" + id
        });
      });
  };
// Delete a Goods with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Goods.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Goods was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Goods with id=${id}. Maybe Goods was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Goods with id=" + id
        });
      });
  };
// Delete all Materials from the database.
exports.deleteAll = (req, res) => {
    Goods.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Goods were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all docs."
        });
      });
  };
// find by class
exports.findbyclass = (req, res) => {
    const cato = req.params.cato;
    var condition = { class: cato } 
    Goods.findAll({ where: condition })
      .then(data => {
        const directoryPath = __basedir + "/uploads/";
        for(let i=0;i<data.length;i++){
          let fileName = data[i].dataValues.image_name;
          let bitmap = fs.readFileSync(directoryPath + fileName);
          let base64str = Buffer.from(bitmap, 'binary').toString('base64');
          data[i].dataValues.image="data:image/png;base64,"+base64str
        }
        res.send(data)
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving materials."
        });
      });
  };
