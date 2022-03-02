const path = require('path');
const express = require('express');

const app = express();
const router = require('./controllers/userController');

const filePath = path.join(__dirname, '..', '..', 'public');

app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

app.use(express.static(filePath));
app.use(router);

module.exports = app;
