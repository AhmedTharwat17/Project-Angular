const userController = require('../controllers/users_controller')
module.exports = (app) => {
  // create
  app.post('/users', userController.create)
}
