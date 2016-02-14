var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MY HOME PAGE' });
});
/* GET about page. */
router.get('/aboutme', function(req, res, next) {
  res.render('aboutme', { title: 'ABOUT ME' });
});
/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'PROJECTS' });
});
/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'SERVICES' });
});
/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'CONTACT ME' });
});
module.exports = router;
