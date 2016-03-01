var express = require('express');
var router = express.Router();

router.post('/', function(req, res) {
  var db = req.db;
  db.serialize( function() {
      db.all("select count(*) as count from user where username = \"" + req.body.username + "\"", function(err, row) {
        if (row[0].count == 0 && req.body.username !== '') {
          db.run("insert into user values (null, \"" + req.body.username + "\", \"" + req.body.fullname + "\", \"" + req.body.password + "\")")
          res.json({success: true, error: false});
          req.session.username = req.body.username;
          req.session.save();
          res.end();
        }
        else {
          res.json({success: false, error: true});
          res.end();
        }
    });
  });

});

/* GET users listing. */
router.get('/', function(req, res) {
  var sess = req.session;
  res.render('createAcc', {title: 'CAV', username: sess.username});
  var db = req.db;
  var collection = [];
  /*
  db.serialize(function(){

  	db.each("SELECT username FROM user", function(err, row) {
    	collection.push(row.username);
    });

    res.render('createAcc', { title: 'CAV'});

    if (sess.username == undefined) {
      res.render('createAcc', { title: 'CAV', username: '' });
    }
    else {
      res.render('createAcc', { title: 'CAV', username: sess.username });
    }
    */

});

module.exports = router;
