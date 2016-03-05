var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  var sess = req.session;
  res.render('account', {title: 'CAV'});


  /*
  db.serialize(function(){

  	db.each("SELECT username FROM user", function(err, row) {
    	collection.push(row.username);
  	});

  	//res.render(collection);
    res.render('account', { title: 'CAV'})

    if (sess.username == undefined) {
      res.render('account', { title: 'CAV', username: '' });
    }
    else {
      res.render('account', { title: 'CAV', username: sess.username });
    }
    */

});

module.exports = router;
