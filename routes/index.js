var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My home Page' });
});
/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('aboutme', { title: 'About Me' });
});
/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'projects' });
});
/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'services' });
});
/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'contact Me' });
});
module.exports = router;
