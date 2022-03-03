const express = require('express');
const {
  store,
  selectAllUsers,
  updateUserById,
  selectUserByIdWithPassword,
  selectUserById,
  deleteUser,
  userWithName,
  userPosts,
  storePost,
  selectAllPosts,
} = require('../database/queires');

const router = express.Router();

router.get('/users', (req, res) => {
  selectAllUsers()
    .then((result) => res.json(result.rows))
    .catch((err) => res.status(500).json({ msg: 'Internal Server Error' }));
});

router.get('/home/:id', (req, res) => {
  userPosts(req.params.id)
    .then((data) => res.json(data.rows))
    .catch((err) => res.status(500).json({ msg: 'Internal Server Error' }));
});

router.post('/login', (req, res) => {
  const { name, password } = req.body;
  userWithName(name)
    .then((result) => {
      if (password === result.rows[0].password) {
        res.json({ loged: true, id: result.rows[0].id });
      } else {
        res.json({ loged: false });
      }
    })
    .catch((err) => res.status(500).json({ msg: 'Internal Server Error' }));
});

router.get('/user/:id', (req, res) => {
  selectUserById(req.params.id)
    .then((result) => res.json(result.rows))
    .catch((err) => res.status(500).json({ msg: 'Internal Server Error' }));
});

router.post('/create-user', (req, res) => {
  const { name, password } = req.body;
  store(name, password)
    .then((result) => res.json({ loged: true, id: result.rows[0].id }))
    .catch((err) => res.status(500).json({ msg: 'Internal Server Error' }));
});

router.put('/update-user', (req, res) => {
  const { id, name, password } = req.body;
  updateUserById(id, name, password)
    .then((result) => res.redirect('/'))
    .catch((err) => res.status(500).json({ msg: 'Internal Server Error' }));
});

router.delete('/user/:id', (req, res) => {
  deleteUser(req.params.id)
    .then((result) => res.json(result.rows))
    .catch((err) => res.status(500).json({ msg: 'Internal Server Error' }));
});

router.post('/create-post', (req, res) => {
  const { user_id, title, content } = req.body;
  storePost(user_id, title, content)
    .then((result) => res.json(result.rows))
    .catch((err) => res.status(500).json({ msg: 'Internal Server Error' }));
});

router.get('/allposts', (req, res) => {
  selectAllPosts()
    .then((result) => res.json(result.rows))
    .catch((err) => res.status(500).json({ msg: 'Internal Server Error' }));
});

module.exports = router;
