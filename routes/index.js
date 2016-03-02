var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { bodyclass: 'welcome', title: 'The Division Map', description: 'An interactive Map for The Division.'});
});

module.exports = router;
