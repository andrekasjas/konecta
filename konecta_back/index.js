const config = require('./config/config');
const createApp = require('./app');

const port = config.port;
const app = createApp();
// Server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});