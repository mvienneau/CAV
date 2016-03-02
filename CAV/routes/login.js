var express = require('express');
var router = express.Router();


router.post('/', function(req, res){
  var db = req.db;
  var exists = true;
  db.serialize( function() {
    db.all("select count(*) as count from user where username = \"" + req.body.username + "\"", function(err, row) {
      if (row[0].count == 0){
        exists = false;
        res.json({success: false, error: true});
        res.end();
      }
      if (exists === true){
        res.json({success: true, error: false});
        req.session.username = req.body.username;
        req.session.save();
        res.end();
      }
    });
    /*
    db.all("select count(*) as count from user where password = \"" + req.body.password + "\"", function(err, row) {
      if (row[0].count == 0){
        exists = false;
        res.json({success: false, error: true});
        res.end();
      }
    });
*/
  });

  
})


/* GET users listing. */
router.get('/', function(req, res) {
  var sess = req.session;
  res.render('login', {title: 'CAV', username: sess.username});

  /*
  var db = req.db;
  var collection = [];
  db.serialize(function(){

  	db.each("SELECT username FROM user", function(err, row) {
    	collection.push(row.username);
  	});

    res.render('login', { title: 'CAV' })

    if (sess.username == undefined) {
      res.render('login', { title: 'CAV', username: '' });
    }
    else {
      res.render('login', { title: 'CAV', username: sess.username });
    }
    */

});

module.exports = router;
