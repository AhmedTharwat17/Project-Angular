const User = require('../models/users')

module.exports = {
  create(req, res){
    var user = new User({
      username:req.body.username,
      email: req.body.email,
      password:req.body.password,
      socialMedia:req.body.socialMedia
    });
    user.save();
  }
}
