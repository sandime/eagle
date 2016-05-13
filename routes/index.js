var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { });
//if you want to get json res.send {} users: 'will', 'laura'
});
//this is the return value of require route/index
module.exports = router;
