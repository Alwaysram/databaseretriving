const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'naresh',
    password: 'NAResh@123'
});

module.exports = pool.promise();