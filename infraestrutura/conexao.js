const mysql = require('mysql')

const conexao = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'estudos',
  password: 'Estudos_2020',
  database: 'estudos'
})

module.exports = conexao
