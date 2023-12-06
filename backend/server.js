const express = require('express')

const blogRoutes = require("./routes/blog.routes.js");
const app = express()
app.get('/', (req, res) => {
  res.status(500).json({ message: "Error" })
  res.send("This is expressJs")
})
app.get('/test', (req, res) => {
  res.send('la thik cha')
})

require("./routes/blog.routes.js")(app);
app.listen(4000)
