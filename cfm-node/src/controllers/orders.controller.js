const { Sequelize } = require("../models/index");
const db = require("../models/index");
const Orders = db.orders;
const Op = db.Sequelize.Op;
const alipay = require("../middleware/alipay")
const axios = require("axios")
var intervalObj=new Array();
var timesRun=new Array()
// Create and Save a new Orders
exports.create = (req, res) => {
  // console.log(req)
  // Validate request
  if (!req.body.orderlist) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a Orders
  const orders = {
    publicid:req.body.publicid,
    paytime: '0',
    finish: req.body.finish,
    orderlist: req.body.orderlist,
    category: req.body.category,
    totalprice:req.body.totalprice
  };
  // Save Orders in the database
  Orders.create(orders)
  .then(data => {
    alipay.payapi(data.dataValues)
    .then(url=>{
      res.send(url)
      timesRun[data.dataValues.publicid]=0
      intervalObj[data.dataValues.publicid]=setInterval(checkpay, 2000, data.dataValues.publicid);
      // checkpay(data.dataValues.publicid)
    })
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
    Orders.findAll({ where: condition , order: [['createdAt', 'DESC']]})
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
// find by name key word
exports.findbyKey = (req, res) => {
    var key = req.body.key;
    var keycondition=[]
    for(let i=0;i<key.length;i++){
      keycondition.push({orderlist: { [Op.like]: Sequelize.literal(`'%${key[i]}%'`) }})
    }
    var condition = { [Op.or]:[keycondition] };
    Orders.findAll({ where: condition })
      .then(data => {
        res.send(data)
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving orders."
        });
      });
  };
// get orders by day
exports.getordersbyDay=(req,res)=>{
  const lday=req.body.lday
  const rday=req.body.rday
  Orders.findAll({where:{[Op.and]:[{createdAt:{[Op.gte]:new Date(lday)}},{createdAt:{[Op.lte]:new Date(rday)}}]}})
  .then(data=>{
    res.send(data)
  })
  .catch(err=>{
    res.status(500).send({
      message:err.message
    })
  })
}

exports.findbyId= (req, res) => {
  const id = req.body.id;
  Orders.findAll({ where: {id:id} })
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving orders."
      });
    });
};

exports.getWeekData=(req,res)=>{
  const { QueryTypes } = require('sequelize');
  var sql="select DATE_FORMAT(updatedAt,'%Y-%m-%d') as day ,sum(totalprice) as price from orders where updatedAt>=DATE_SUB(now(),INTERVAL 7 DAY) group by day order by day desc limit 7;"
  db.sequelize.query(sql, { type: QueryTypes.SELECT })
  .then(data=>{
    res.send(data)
  })
}

exports.getMonthData=(req,res)=>{
  const { QueryTypes } = require('sequelize');
  var sql="select DATE_FORMAT(updatedAt,'%Y-%m') as month ,sum(totalprice) as price from orders where updatedAt>=DATE_SUB(now(),INTERVAL 365 DAY) group by month order by month desc limit 12;"
  db.sequelize.query(sql, { type: QueryTypes.SELECT })
  .then(data=>{
    res.send(data)
  })
}

exports.getMonthSales=(req,res)=>{
  const { QueryTypes } = require('sequelize');
  var sql="select DATE_FORMAT(updatedAt,'%Y-%m') as month ,sum(totalprice) as price from orders where updatedAt>=DATE_SUB(now(),INTERVAL 365 DAY) group by month order by month desc limit 12;"
  db.sequelize.query(sql, { type: QueryTypes.SELECT })
  .then(data=>{
    res.send(data)
  })
}
exports.getDayData=(req,res)=>{
  Orders.findAll({where:{createdAt:{[Op.lt]:new Date()-24*60*60*1000}}})
  .then(data=>{
    res.send(data)
  })
  .catch(err=>{
    res.status(500).send({
      message:err.message
    })
  })
}

exports.getUnpayOrder=(req,res)=>{
  Orders.findAll({where:{paytime:'0'}})
  .then(data=>{
    res.send(data)
  })
  .catch(err=>{
    res.status(500).send({
      message:err.message
    })
  })
}

function updatepay(publicid){
  var date = new Date()
  var DD = String(date.getDate()).padStart(2, '0');
  var MM = String(date.getMonth() + 1).padStart(2, '0');
  var yyyy = date.getFullYear();
  var hh = String(date.getHours()).padStart(2, '0');
  var mm = String(date.getMinutes()).padStart(2, '0');
  var ss = String(date.getSeconds()).padStart(2, '0');
  var showtime=yyyy+'-'+MM+'-'+DD+' '+hh+':'+mm+':'+ss
  Orders.update({paytime:showtime}, {
    where: { publicid: publicid }
  })
  .then(data=>{
    if(data[0]==1){
      clearInterval(intervalObj[publicid])
    }
  })
  .catch();
}
function updateunpay(publicid,status){
  // console.log(publicid,status)
  Orders.update({paytime:status}, {
    where: { publicid: publicid }
  })
  .catch();
}

function checkpay(publicid){
  timesRun[publicid] += 1;
  if(timesRun[publicid] === 60){
    clearInterval(intervalObj[publicid])
  }
  alipay.checkpay({outTradeNo:publicid})
  .then(data=>{
      axios({
      method: 'GET',
      url: data
    })
    .then(data => {
      let r = data.data.alipay_trade_query_response;
      if(r.code === '10000') { // 接口调用成功
        switch(r.trade_status) {
          case 'WAIT_BUYER_PAY':
            // res.send('交易创建，等待买家付款');
            updateunpay(publicid,'WAIT_BUYER_PAY')
            break;
          case 'TRADE_CLOSED':
            // res.send('未付款交易超时关闭，或支付完成后全额退款');
            updateunpay(publicid,'TRADE_CLOSED')
            break;
          case 'TRADE_SUCCESS':
            // res.send('交易支付成功');
            updatepay(publicid)
            // close setInterval
            break;
          case 'TRADE_FINISHED':
            // res.send('交易结束，不可退款');
            updateunpay(publicid,'TRADE_FINISHED')
            break;
        }
      } else if(r.code === '40004') {
        updateunpay(publicid,'FAKE')
        // res.send('交易不存在');
      }
    })
    .catch(err => {
      clearInterval(intervalObj[publicid])
    });
  })
}

// exports.checkpay=(req,res)=>{
//   const publicid=req.body.publicid
//   alipay.checkpay({outTradeNo:publicid})
//   .then(data=>{
//       axios({
//       method: 'GET',
//       url: data
//     })
//     .then(data => {
//       console.log(data)
//       let r = data.data.alipay_trade_query_response;
//       if(r.code === '10000') { // 接口调用成功
//         switch(r.trade_status) {
//           case 'WAIT_BUYER_PAY':
//             res.send('交易创建，等待买家付款');
//             break;
//           case 'TRADE_CLOSED':
//             res.send('未付款交易超时关闭，或支付完成后全额退款');
//             break;
//           case 'TRADE_SUCCESS':
//             // updatepay(publicid)
//             res.send('交易支付成功');
//             break;
//           case 'TRADE_FINISHED':
//             res.send('交易结束，不可退款');
//             break;
//         }
//       } else if(r.code === '40004') {
//             // updatepay(publicid)
//         res.send('交易不存在');
//       }
//     })
//     .catch(err => {
//       res.json({
//         msg: '查询失败',
//         err
//       });
//     });
//   })
// }

exports.finishbyPublicid=(req,res)=>{
  const publicid = req.body.publicid;
  Orders.update({finish:'1'}, {
    where: { publicid: publicid }
  })
  .then(num => {
    if (num == 1) {
      res.send({
        message: "Orders was updated successfully."
      });
    } else {
      res.send({
        message: `Cannot update Orders with publicid=${publicid}. Maybe Orders was not found or req.body is empty!`
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: "Error updating Orders with id=" + publicid+err
    });
  });
}