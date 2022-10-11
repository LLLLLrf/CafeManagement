const db = require('./models/index')
const express = require('express')
const app = express();
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
db.sequelize.sync();
