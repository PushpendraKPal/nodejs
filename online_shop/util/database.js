const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database:'node',
    password:'KumarPal@1396'
})

module.exports = pool.promise();