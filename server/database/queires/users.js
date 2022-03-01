const connection = require('../config/connection');

const store = (name, password) => connection.query({
  text: 'INSERT INTO users (name, password) VALUES ($1, $2);',
  values: [name, password],
});

module.exports = { store };
