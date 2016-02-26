var express = require('express');
var router = express.Router();

var fs = require("fs");
var file = "cav.db";
var exists = fs.existsSync(file);
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(file);

/* GET home page. */
router.get('/', function(req, res, next) {

	/*
  	db.serialize(function(){
  		db.run("INSERT INTO artist VALUES (null, ?, null, null, null)", "drake")
  		db.each("SELECT artist_name FROM artist", function(err, row) {
      		console.log("Artist Name: "+row.artist_name);
  		});
  	})
	*/


  res.render('index', { title: 'CAV' });
});

router.get('/search', function(req, res, next) {
  res.render('search', { title: 'CAV' });
});

router.get('/account', function(req, res, next) {
  res.render('account', { title: 'CAV' });
});

router.get('/')

//db.close();

module.exports = router;
