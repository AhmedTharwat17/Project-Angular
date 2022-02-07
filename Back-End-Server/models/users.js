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
},{versionKey: false , collection: 'users'})

const User = mongoose.model('user', userSchema)

module.exports = User;
