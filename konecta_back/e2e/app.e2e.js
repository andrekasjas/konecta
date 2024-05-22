const request = require('supertest');

const createApp = require('../app');

describe('test app', () => {

  let app = null;
  let server = null;
  let api = null;

  beforeEach(() => {
    app = createApp()
    server = app.listen(9000);
    api = request(app);
  });


  test('GET /', async () => {
    const response = await api.get('/');
    expect(response).toBeTruthy();
    expect(response.text).toBe('Hello World!');
  });

  afterAll(() => {
    server.close();
  });

});
