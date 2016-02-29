var express = require('express');
var router = express.Router();
//var sess;

/* GET users listing. */
router.get('/', function(req, res) {
  sess = req.sess;
  var db = req.db;
  var collection = [];
  db.serialize(function(){

  	db.each("SELECT username FROM user", function(err, row) {
    	collection.push(row.username);
  	});

  	//res.render(collection);
    res.render('account', { title: 'CAV'})
    /*
    if (sess.username == undefined) {
      res.render('account', { title: 'CAV', username: '' });
    }
    else {
      res.render('account', { title: 'CAV', username: sess.username });
    }
    */
  })

});

module.exports = router;
