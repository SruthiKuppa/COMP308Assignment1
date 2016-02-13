var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express on Azure' });
});
/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About Me' });
});
/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'contact Me' });
});
/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'projects' });
});
module.exports = router;
