var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', function(req, res, next) {
  res.send('test');
});

router.post('/echo', async function(req, res, next) {
  return res.send(JSON.stringify(req.body));
});

router.get('/env', function(req, res, next) {
  res.send(process.env.MY_SECRET);
});

module.exports = router;
