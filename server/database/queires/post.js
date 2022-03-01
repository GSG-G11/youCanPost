const connection = require('../config/connection');

const storePost = (user_id, title, content) => connection.query({
  text: 'INSERT INTO users (user_id ,title, content) VALUES ($1 ,$2 ,$3);',
  values: [user_id, title, content],
});

const selectPost = (user_id) => connection.query({
  text: 'SELECT * FROM POSTS WHERE user_id = ($1)',
  values: [user_id],
});

module.exports = { storePost, selectPost };
