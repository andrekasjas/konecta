const express = require('express');
const routerApi = require('./routes');
const cors = require('cors');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

const config = require('./config/config');

// App
const app = express();
const port = config.port;

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

// Server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});