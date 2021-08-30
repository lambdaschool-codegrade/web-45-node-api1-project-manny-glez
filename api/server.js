// BUILD YOUR SERVER HERE

// Import
const express = require('express')

const server = express()

server.use(express.json()) // Teaches express to read JSON

// Endpoints
// Creates a user using the information sent inside the request body.
server.post('/api/users', (req, res) => {
  const newUser = req.body
  User.create(newUser)
    .then(user => {
      res.status(201).json(user)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: "error" })
    })
})



//module.exports = {}; // EXPORT YOUR SERVER instead of {}
module.exports = server
