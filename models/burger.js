var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("BURGER", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(cols, vals, cb) {
    orm.insertOne("BURGER", cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("BURGER", objColVals, condition, function(res) {
      cb(res);
    });
  },
  
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
