var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var users = [{name:"tata"},{name:"titi"},{name:"toto"}];
  res.send(users);
});

module.exports = router;
