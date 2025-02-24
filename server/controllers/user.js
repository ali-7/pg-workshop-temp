const { getData } = require("../database/queries/getData");
const { postData } = require("../database/queries/postData");

exports.getUsers = (req, res) => {
  getData()
    .then(result => {
      res.json(result.rows);
    })
    .catch(err => console.log("err:", err));
};

exports.add = (req, res) => {
  const { name, location } = req.body;
  postData(name, location)
    .then(() => res.redirect("/"))
    .catch(err => console.log("err:", err));
};
