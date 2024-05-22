const request = require('supertest');
const createApp = require('../app');

describe('tests for /usuarios path', () => {

  let app = null;
  let server = null;
  let api = null;

  beforeEach(() => {
    app = createApp();
    server = app.listen(9000);
    api = request(app);
  });

  describe('GET /usuarios', () => {
    // tests for /usuarios
  });

  describe('POST /usuarios', () => {

    test('should return a 400 Bad request with password invalid', async () => {
      const inputData = {
        email: "andresmogollob@mail.com",
        password: "-----"
      };
      const { statusCode, body } = await api.post('/api/v1/usuarios').send(inputData);
      expect(statusCode).toBe(400);
      expect(body.message).toMatch(/password/);
    });

    test('should return a 400 Bad request with email invalid', async () => {
      const inputData = {
        email: "----",
        password: "najshash1212as"
      };
      const { statusCode, body } = await api.post('/api/v1/usuarios').send(inputData);
      expect(statusCode).toBe(400);
      expect(body.message).toMatch(/email/);
    });

  });

  describe('PUT /usuarios', () => {
    // tests for /usuarios
  });


  afterEach(() => {
    server.close();
  })
});