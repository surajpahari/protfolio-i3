const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'underside',
  database: 'protfolio'
})

connection.connect()

connection.end()
