var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const users = await req.context.models.User.find();
  return res.send(users);
});

module.exports = router;
