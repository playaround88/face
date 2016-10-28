var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/index2', function(req, res, next) {
  res.render('index2', { title: '登陆主页' });
});

router.get('/statics', function(req, res, next) {
  res.render('statics', { title: '用户页' });
});

module.exports = router;
