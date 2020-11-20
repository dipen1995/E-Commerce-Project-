var mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/angularauth", { useNewUrlParser: true })
    .then(() => { console.log('Successfully connected with database.') })
    .catch((err) => { console.log('Error Caught : ' + err) });
module.exports = {
  DB: 'mongodb://localhost:27017/angularauth',
  secret: 'your-token'
}