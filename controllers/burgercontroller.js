var express = require("express");

var router = express.Router();


var BURGER = require("../models/burger.js");


router.get("/", function(req, res) {
  BURGER.selectAll(function(data) {
    var hbsObject = {
      BURGER: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/BURGER", function(req, res) {
  BURGER.insertOne([
    "BURGER_NAME", "DEVOURED"], [
    req.body.BURGER_NAME,"0"], 
    function(result) {
    
    res.json({ id: result.insertId });
  });
});

router.put("/api/BURGER/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  BURGER.updateOne(
      {
     DEVOURED:"1"
    }, 
    condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});





// Export routes for server.js to use.
module.exports = router;
