const express = require('express')
const router = express.Router()


router.get('/welcome-admin', (req, res) => {
  res.send("Welcome Admin")
})

router.post('/create', (req, res) => {
  res.send("you are here")
})
module.exports = router
