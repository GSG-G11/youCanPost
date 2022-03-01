const express = require('express');
const path = require('path');

const router = express.Router();

const filePath = path.join(__dirname, '..', 'public');
router.use(express.static(filePath));

router.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'html', 'home.html'));
});
module.exports = router;
