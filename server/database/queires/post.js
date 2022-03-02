const connection = require('../config/connection');

const storePost = (user_id, title, content) => connection.query({
  text: 'INSERT INTO posts (user_id ,title, content) VALUES ($1 ,$2 ,$3) returning *;',
  values: [user_id, title, content],
});

const selectPost = (user_id) => connection.query({
  text: 'SELECT * FROM POSTS WHERE user_id = ($1)',
  values: [user_id],
});

const selectAllPosts = () => connection.query({
  text: 'SELECT * FROM POSTS',
});

module.exports = { storePost, selectPost, selectAllPosts };
