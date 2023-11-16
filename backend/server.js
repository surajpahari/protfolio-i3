const express = require('express')
const app = express()
app.get('/', (req, res) => {
  res.status(500).json({ message: "Error" })
  res.send("This is expressJs")
})
app.post('/create', (req, res) => {
  res.send('la thik cha')
})
app.listen(4000)
