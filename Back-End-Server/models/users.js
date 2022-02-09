const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  socialMedia: {
    type: String,
    required: true
  }
},{versionKey: false})

const User = mongoose.model('users', userSchema)

module.exports = User;
