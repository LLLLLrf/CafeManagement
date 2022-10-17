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
    const name = req.body.name;
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
    Goods.findAll({ where: condition })
      .then(data => {
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
// // Find all published Docs
// exports.findAllPublished = (req, res) => {
//     Goods.findAll({ where: { published: true } })
//       .then(data => {
//         res.send(data);
//       })
//       .catch(err => {
//         res.status(500).send({
//           message:
//             err.message || "Some error occurred while retrieving docs."
//         });
//       });
//   };

//   exports.getAllUploader = (req,res) => {
//     Goods.findAll({
//       attributes:[
//         Sequelize.fn('DISTINCT',Sequelize.col('uploader')),
//         'uploader'
//       ]
//     })
//       .then((uploader) => {
//         // console.log(count)
//         res.send(uploader)
//       })
//       .catch(err => {
//         res.status(500).send({
//           message:
//             err.message || '无法获取所有类别'
//         })
//       })
//   }

//   exports.findAllByUploader = (req,res) => {
//     const uplder=req.body.uploader
//     Goods.findAll({
//       where: {
//         uploader: uplder
//       },
//       order: [
//         ['updatedAt','DESC']
//       ] 
//     })
//       .then(data => {
//         res.send(data)
//       })
//       .catch(err => {
//         res.status(500).send({
//           message:
//             err.message || '查询失败'
//         })
//       })
//   }