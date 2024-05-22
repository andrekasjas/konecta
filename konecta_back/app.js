const express = require('express');
const cors = require('cors');

const routerApi = require('./routes');
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');


const createApp = () => {
  // App
  const app = express();

  app.use(express.json());
  app.use(cors());

  require('./utils/auth')

  app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  // Routes
  routerApi(app);

  // Middlewares
  app.use(logErrors);
  app.use(boomErrorHandler);
  app.use(errorHandler);

  return app;
}


module.exports = createApp;