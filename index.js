var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/author', function(req, res, next){
  res.render('author', {title: 'Express', name: 'Ana Clara Pérez'});
});

module.exports = router;
