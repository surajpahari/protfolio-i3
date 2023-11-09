const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.status(500).json({ message: "Error" })
  res.send("This is expressJs")
})
const adminRouter = require('./routes/admin')
app.use('/admin', adminRouter)
app.listen(3000)
