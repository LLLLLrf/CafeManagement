const db = require('./src/models/index')
const express = require('express')
const app = express();
const PORT = process.env.PORT || 12530;
const cors = require('cors')
var corsOptions = {
  origin: "*"
};
app.use(cors(corsOptions));
const uploadRoutes=require('./src/routes/upload.routes')
uploadRoutes(app)
var bodyParser = require('body-parser') 
app.use(bodyParser.urlencoded({ extended: false })) 
app.use(bodyParser.json())
global.__basedir = __dirname
require('./src/routes/goods.routes')(app)
require('./src/routes/orders.routes')(app)


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
db.sequelize.sync();
