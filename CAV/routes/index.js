var express = require('express');
var router = express.Router();
//var sess;

/* GET home page. */
router.get('/', function(req, res, next) {
  //sess = req.sess;
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
  /*
  if (sess.username === undefined) {
    res.render('index', { title: 'CAV', username: '' });
  }
  else {
    res.render('index', { title: 'CAV', username: sess.username });
  }
  */
});

//db.close();

module.exports = router;
