let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let dataSchema = new Schema({
  email: String,
  password: String,
  integer: Number
});

module.exports = mongoose.model('data', dataSchema);
