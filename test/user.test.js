const req = require("supertest");
const app = require('../src/app');

test('Deve listrar todos os usuários', async () => {
    await req(app).get('/users')
       .then((res) => {
           expect(res.status).toBe(200);
           expect(res.body).toHaveLength(1);
           expect(res.body[0]).toHaveProperty('name', 'Jeferson Macedo')
       });
   });

test('Deve inserir um novo usuário', async () => {
    await req(app).post('/users')
        .send({
        'name': 'Matheus Moraes', 'email': 'matheusmoraes@mail.com'
    }).then((res) =>{
        expect(res.status).toBe(201);
        expect(res.body.name).toBe('Matheus Moraes')
    })
})