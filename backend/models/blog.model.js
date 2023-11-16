const sql = require('./db.js')

//creating constructor for Blog class
const Blog = function(blog) {
  this.title = blog.title
  this.about = blog.about
  this.content = blog.content
  this.uploadDate = blog.uploadDate
}

Blog.create = (newBlog, result) => {
  sql.query("INSERT INTO blogs SET ?", newBlog, (err, res) => {
    if (err) {
      console.log(err)
      result(err, null)
      return
    }
    console.log('Blog created', { id: res.insertId, ...newBlog })
    result(null, { id: res.insertId, ...newBlog })
  })
}
