var express = require('express');
var router = express.Router();
var usermodle=require("./users");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.post('/Username', function(req, res, next) {
      usermodle.create({
        user1:"1234",
        user2:"5678"
      }).then(function(val){
        res.send(val)
      })
});   

router.post('/SignIn', function(req, res, next) {
  usermodle.create({
    username:req.body.username,
    
  }).then(function(val){
    res.send(val)
  })
});   




module.exports = router;
