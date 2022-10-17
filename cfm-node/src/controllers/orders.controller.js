const { Sequelize } = require("../models/index");
const db = require("../models/index");
const Orders = db.orders;
const Op = db.Sequelize.Op;
const fs = require('fs');
// Create and Save a new Orders
exports.create = (req, res) => {
  console.log(req)
    // Validate request
    if (!req.body.orderlist) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    // Create a Orders
    const orders = {
      paytime: req.body.paytime,
      finish: req.body.finish,
      orderlist: req.body.orderlist,
      category: req.body.category
    };
    // Save Orders in the database
    Orders.create(orders)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Orders."
        });
      });
  };
// Retrieve all Orders from the database.
exports.findAll = (req, res) => {
    const name = req.body.name;
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
    Orders.findAll({ where: condition })
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
    Orders.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Orders was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Orders with id=${id}. Maybe Orders was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Orders with id=" + id
        });
      });
  };
// Delete a Orders with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Orders.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Orders was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Orders with id=${id}. Maybe Orders was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Orders with id=" + id
        });
      });
  };
// Delete all Materials from the database.
exports.deleteAll = (req, res) => {
    Orders.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Orders were deleted successfully!` });
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
//     Orders.findAll({ where: { published: true } })
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
//     Orders.findAll({
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
//     Orders.findAll({
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