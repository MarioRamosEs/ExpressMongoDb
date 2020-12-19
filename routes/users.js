import mongoose from 'mongoose';

const express = require('express');

const router = express.Router();

router.get('/', async (req, res, next) => {
  // return res.send(JSON.stringify(req.context.models));
  const users = await req.context.models.Users.find();
  return res.send(users);
});

router.post('/', async (req, res, next) => {
  const user = await req.context.models.Users.create({
    _id: new mongoose.mongo.ObjectId(),
    Name: req.body.Name,
    Phone: req.body.Phone
  });
  return res.send(user);
});

module.exports = router;
