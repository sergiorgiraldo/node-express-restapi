import { Router } from 'express';
import models from '../models'

const router = Router();

router.get('/', (req, res) => {
  return res.send(Object.values(models.users));
});

router.post('/', (req, res) => {
  const newId = Object.keys(models.users).length + 1;
  const newUser = {[newId]: {
    id: newId,
    username: req.body.who,
  }};
  Object.assign(models.users, newUser);
  return res.send(models.users);
});

router.get('/:userId', (req, res) => {
  return res.send(models.users[req.params.userId]);
});

export default router;
