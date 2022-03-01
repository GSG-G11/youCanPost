const connection = require('../config/connection');

const storePost = (user_id, title, content) => connection.query({
  text: 'INSERT INTO users (user_id ,title, content) VALUES ($1 ,$2 ,$3);',
  values: [user_id, title, content],
});

module.exports = { storePost };
