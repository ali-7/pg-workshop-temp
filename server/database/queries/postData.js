const dbConnection = require("../config/connection");

const postData = (name, location) => {
  const sql = {
    text: 'INSERT INTO users (name, location) VALUES ($1, $2);',
    values: [name, location],
  };
  return dbConnection.query(sql);
};

module.exports = {
  postData
};
