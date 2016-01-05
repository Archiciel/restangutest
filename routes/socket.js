var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  setTimeout(function(){
    var io = req.app.locals.io;
    io.emit('event',{status: 'done'});
  }, 2000);

  res.send({ status: 'pending' });
});

module.exports = router;
