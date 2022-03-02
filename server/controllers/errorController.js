const path = require('path');

const notFound = (req, res) => {
  const file = path.join(__dirname, '..', '..', 'public/html/404.html');
  res.status(404).sendFile(file);
};
const serverError = (err, req, res, next) => {
  const file = path.join(__dirname, '..', '..', 'public/html/500.html');
  res.status(500).sendFile(file);
};
module.exports = { notFound, serverError };
