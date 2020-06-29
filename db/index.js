var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'pw',
  database: 'navBar'
})

connection.connect(() => {"navBar database is connected"});

module.exports = connection;
