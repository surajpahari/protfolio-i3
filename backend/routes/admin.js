const express = require('express')
const router = express.Router()


router.get('/welcome-admin', (req, res) => {
  res.send("Welcome Admin")
})

module.exports = router
