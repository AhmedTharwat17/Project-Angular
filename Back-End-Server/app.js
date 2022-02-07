const express = require('express')
//2
const mainRoutes = require('./routes/main_routes')
const userRoutes = require('./routes/users_routes')
//5
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/angularProject', {useNewUrlParser: true, useUnifiedTopology: true})

// 1
const app = express()

//4
app.use(express.json())
app.use(express.urlencoded({extended: false}))
//3
mainRoutes(app)
userRoutes(app)

// custom middle ware for errors
app.use((err, req, res, next)=>{
  res.status(422).send({error: err.message})
})


module.exports = app;
