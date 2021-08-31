// BUILD YOUR SERVER HERE

// Imports
const express = require('express')
const User = require('./users/model')

const server = express()

// Endpoints
// [GET] Returns an array users.
server.get('/api/users', (req, res) => {
  User.find()
    .then(users => {
      res.json(users)
    })
    .catch(err => {
      res.status(500).json({
        message: 'error getting users',
        err: err.message
      })
    })
})

// [GET] Returns the user object with the specified id.
server.get('/api/users/:id', (req, res) => {
  User.findById(req.params.id)
  .then(user => {
    if (!user) {
      res.status(404).json({
        message: 'the user with the specified ID does not exist',
      })
    }
      res.json(user)
    })
    .catch(err => {
      res.status(500).json({
        message: 'error getting users',
        err: err.message
      })
    })
})

server.use('*', (req, res) => {
  res.status(404).json({
    message: 'not found'
  })
})



//module.exports = {}; // EXPORT YOUR SERVER instead of {}
module.exports = server;
