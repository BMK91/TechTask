const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let studentSchema = new Schema({
  fname: {
    type: String
  },
  lname: {
    type: String
  },
  email: {
    type: String
  },
  passwd: {
    type: String
  },
  rpasswd: {
    type: String
  },
}, {
    collection: 'users'
  })

module.exports = mongoose.model('User', studentSchema)