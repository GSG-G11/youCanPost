// Add code below to connect to your database
require('env2')('config.env');
const { Pool } = require('pg');

const {
  NODE_ENV, DB_URL, DEV_DB_URL, TEST_DB_URL,
} = process.env;

let dbUrl = '';
if (NODE_ENV === 'production') {
  dbUrl = DB_URL;
} else if (NODE_ENV === 'development') {
  dbUrl = DEV_DB_URL;
} else if (NODE_ENV === 'test') {
  dbUrl = TEST_DB_URL;
} else {
  throw new Error('No Database is found !');
}

const options = {
  connectionString: dbUrl,
  ssl: false,
};

const connection = new Pool(options);
module.exports = connection;
