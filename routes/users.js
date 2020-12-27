import Users from '../models/users';

const express = require('express');

const router = express.Router();

router.get('/', async (req, res, next) => {
  const users = await req.context.models.Users.find();
  res.send(users);
});

router.get('/:id', getUser, async (req, res, next) => {
  res.send(res.user);
});

router.delete('/:id', getUser, async (req, res, next) => {
  try {
    await res.user.remove();
    res.json({message: "User deleted"})
  } catch (error) {
    res.status(500).json({message: error.message});
  }
});

router.patch('/:id', getUser, async (req, res, next) => {
  if(req.body.Name != null) res.user.Name = req.body.Name;
  if(req.body.Phone != null) res.user.Phone = req.body.Phone;
  try {
    const updatedUser = await res.user.save();
    res.json(updatedUser)
  } catch (error) {
    res.status(400).json({message: error.message});
  }
});

router.post('/', async (req, res, next) => {
  const user = new Users({
    Name: req.body.Name,
    Phone: req.body.Phone
  })
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

async function getUser(req, res, next){
  let user;
  try {
    user = await Users.findById(req.params.id);
    if(user == null) return res.status(404).json({message: 'Cannot find user'});
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
  res.user = user;
  next();
}

module.exports = router;
