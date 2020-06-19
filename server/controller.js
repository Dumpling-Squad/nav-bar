const db = require('../db/model.js');

const controller = {
  get: (req, res) => {
    db.get((err, results) => {
      if(err) {
        res.status(400).send("err retrieving from db");
      } else {
        res.status(200).send(results);
      }
    })
  }
  // post: () => {

  // }
}

module.exports = controller;
