module.exports = app => {
  const router = require('express').Router()
  const blogs = require("../controllers/blog.controller.js")
  router.get('/test/:id', blogs.test)
  router.post('/create', blogs.create)
  app.use('/api/blogs', router);
}
