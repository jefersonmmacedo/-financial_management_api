const supertest = require('supertest');
const req = supertest('http://localhost:3001');

test('Deve responder na posta 3001', async () => {
  await req.get('/').then((res) => expect(res.status).toBe(200));
});
