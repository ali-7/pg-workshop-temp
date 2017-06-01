const dbConnection = require('../database/db_connection.js');

const output = (cb) =>{
    dbConnection.query(`SELECT * FROM users`
    , (err, res) => {
    if (err) cb(err);
    cb(null, res.rows);
  });
};

module.exports = output;
