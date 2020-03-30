var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var ORM = require("../config/orm.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
console.log("hi");
});

router.get("/api/addburger/:id", function(req, res) {
    console.log(req.params.id);
ORM.AddBurger(req.params.id);
});

router.put("/api/updateburger/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  cat.update({
    sleepy: req.body.sleepy
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/deleteburger/:id", function(req, res){
    let burgernamer = req.params.id;

})

// Export routes for server.js to use.
module.exports = router;