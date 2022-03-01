const { join } = require('path');
const { readFileSync } = require('fs');
const connection = require('../config/connection');

const sql = readFileSync(join(__dirname, 'users.sql')).toString();
connection.query(sql);
