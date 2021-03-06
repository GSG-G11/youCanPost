const connection = require('../config/connection');
// insert to users
const store = (name, password) => connection.query({
  text: 'INSERT INTO users (name, password) VALUES ($1, $2) Returning * ;',
  values: [name, password],
});

// select all users to test perposes
const selectAllUsers = () => connection.query({
  text: 'SELECT id,name FROM users',
});

// select user with password
const selectUserByIdWithPassword = (id) => connection.query({
  text: 'SELECT * FROM users WHERE id = ($1)',
  values: [id],
});

// select user without get password
const selectUserById = (id) => connection.query({
  text: 'SELECT id,name FROM users WHERE id = ($1)',
  values: [id],
});

// updata user if you have id
const updateUserById = (id, name, password) => connection.query({
  text: `UPDATE users 
    SET name = ($1),
    password = ($2)
    WHERE id = ($3);`,
  values: [name, password, id],
});

// delete user with id
const deleteUser = (id) => connection.query({
  text: 'DELETE FROM users WHERE id = ($1);',
  values: [id],
});

// get the first user with name
const userWithName = (name) => connection.query({
  text: 'SELECT * FROM users WHERE name = ($1) limit 1',
  values: [name],
});

// get the posts related to user user with name
const userPosts = (id) => connection.query({
  text: 'select users.name, posts.title, posts.content from users join posts ON posts.user_id =users.id where users.id = ($1)',
  values: [id],
});

module.exports = {
  store,
  selectAllUsers,
  updateUserById,
  selectUserByIdWithPassword,
  selectUserById,
  deleteUser,
  userWithName,
  userPosts,
};
