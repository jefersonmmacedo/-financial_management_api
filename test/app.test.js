const req = require("supertest");
const app = require('../src/app');

test('Deve responder na raiz', async () => {
 await req(app).get('/')
    .then((res) => {
        expect(res.status).toBe(200);
    });
});