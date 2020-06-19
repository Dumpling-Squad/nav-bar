const db = require('./index.js');

const dbHelpers = {
  get: (callback) => {
    var queryString = `SELECT * FROM products;`
    db.query(queryString, (err, results) => {
      if(err) {
        callback(err);
      } else {
        callback(null, results);
      }
    })
  }
}

module.exports = dbHelpers;