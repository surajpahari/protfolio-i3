module.exports = app => {

  const express = require('express')
  const router = express.Router()
  const blogs = require("../controllers/blog.controller.js")
  router.post('/create', blogs.create)
}
