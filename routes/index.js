const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express MongoDB example' });
});

router.get('/test', (req, res, next) => {
  res.send('test');
});

router.post('/echo', async (req, res, next) => res.send(req.body));

router.get('/env', (req, res, next) => {
  res.send(process.env.MY_SECRET);
});

module.exports = router;
