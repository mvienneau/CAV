var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  var sess = req.session;
  res.render('search', {title: 'CAV'});
  var db = req.db;
  var collection = [];
  /*
  db.serialize(function(){

  	db.each("SELECT username FROM user", function(err, row) {
    	collection.push(row.username);
  	});

    res.render('search', { title: 'CAV' });

    if (sess.username == undefined) {
      res.render('search', { title: 'CAV', username: '' });
    }
    else {
      res.render('search', { title: 'CAV', username: sess.username });
    }
    */

});

module.exports = router;
