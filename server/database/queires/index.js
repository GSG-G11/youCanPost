const {
  store,
  selectAllUsers,
  updateUserById,
  selectUserByIdWithPassword,
  selectUserById,
  deleteUser,
  userWithName,
  userPosts,
} = require('./users');

const { storePost, selectPost, selectAllPosts } = require('./post');

module.exports = {
  store,
  selectAllUsers,
  updateUserById,
  selectUserByIdWithPassword,
  selectUserById,
  deleteUser,
  userWithName,
  userPosts,
  storePost,
  selectPost,
  selectAllPosts,
};
