const mongoose = require('mongoose'), Schema = mongoose.Schema;

const CompanySchema = mongoose.Schema({
    name: String,
    image:String,
    price: Number
});

module.exports = mongoose.model('Company', CompanySchema);