var express = require('express');
var router = express.Router();

let users = [
  {
    _id: '1',
    Name: 'Robin Wieruch',
  },
  {
    _id: '2',
    Name: 'Dave Davids',
  }
];

router.get('/', function (req, res, next) {
  return res.send(Object.values(users));
});

router.get('/:userId', (req, res) => {
  return res.send(users.find(u => u._id === req.params.userId));
});

module.exports = router;
