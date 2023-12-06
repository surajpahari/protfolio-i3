//import the model 
const Blog = require('../models/blog.model.js')
exports.test = (req, res) => {
  res.send(req.params)
}
exports.create = (req, res) => {
  res.send(req.body)
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Tutorial
  const blog = new Blog({
    title: req.body.title,
    about: req.body.about,
    content: req.body.content,
    uploadDate: req.body.uploadDate,
  });

  // Save Tutorial in the database
  Blog.create(tutorial, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    else res.send(data);
  });
}

