const express = require('express');
const app = require('./app');
const routes = require('./routes');
const { notFound, serverError } = require('./controllers/errorController');

const router = express.Router();
app.set('port', process.env.PORT || 3000);

router.get('/', (req, res) => {
  res.send('its working');
});

app.use('/', routes);
app.use(notFound);
app.use(serverError);
app.listen(app.get('port'), () => {
  console.log('App running on port', app.get('port'));
});
