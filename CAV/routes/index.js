var express = require('express');
var router = express.Router();

var fs = require("fs");
var file = "cav.db";
var exists = fs.existsSync(file);
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(file);

/* GET home page. */
router.get('/', function(req, res, next) {

	//DO NOT UNCOMMENT UNLESS YOU WANT 5000000 DRAKES IN OUR TABLE
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

//db.close();

module.exports = router;
