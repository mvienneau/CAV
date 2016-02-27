var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  var db = req.db;
  var collection = [];
  db.serialize(function(){

  	db.each("SELECT username FROM user", function(err, row) {
    	collection.push(row.username);
  	});

  	res.render('createAcc', { title: 'CAV' });
  })


});

module.exports = router;
