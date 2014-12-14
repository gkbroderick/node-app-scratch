var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('message', { title: 'A Message', link: 'Back' });
});

module.exports = router;
