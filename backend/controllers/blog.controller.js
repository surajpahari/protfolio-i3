//import the model 
const Blog = require('../models/blog.model.js')
exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Invalid request"
    })
    return
  }
  const blog = new Blog({
    title: req.body.title,
    about: req.body.about,
    content: req.body.content,
    uplaodDate: req.body.uplaodDate
  })

  blog.create(blog, (data, error) => {
    if (err) {
      res.status(500).send({
        message:
          error.message || "Error while creating jobs"
      })
    }
    else {
      res.send(data)
    }
  })
}

