var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Galen-Tiny-App', link: 'A Message' });
});

module.exports = router;
