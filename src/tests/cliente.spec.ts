import routesClientes from '../routes/cliente.routes';
import request from 'supertest';

/**
 * POST: Testear si se creará un nuevo resgistro para los clientes
 */
it('Se crea un cliente y responde un json con mensaje', done => {
  request(routesClientes)
    .post('/api/v1/clientes')
    .send({
      "nombre": "Elias Colon",
      "direccion": "carrera 8b",
      "correo": "eliascolon98@gmail.com",
      "telefono": 30007880154
    })
    .set('Accept', 'application/json')
    .expect('Content-Type', '/json/')
    .expect(200, done());
})

/**
 * GET: Testear si se obtuvo una lista de los clientes
 */
 it('Se obtiene una lista de los clientes y responde un json', done => {
  request(routesClientes)
    .get('/api/v1/clientes')
    .set('Accept', 'application/json')
    .expect('Content-Type', '/json/')
    .expect(200, done());
})

/**
 * GET: Testear si obtuvo un cliente en especifico
 */
 it('Se obtiene una lista de del cliente y responde un json', done => {
  request(routesClientes)
    .post('/api/v1/clientes/1')
    .set('Accept', 'application/json')
    .expect('Content-Type', '/json/')
    .expect(200, done());
})

/**
 * PUT: Testear si se actualizará un cliente
 */
 it('Se actualiza un cliente y responde un json con mensaje', done => {
  request(routesClientes)
    .put('/api/v1/clientes/1')
    .send({
      "nombre": "Elias Colon",
      "direccion": "carrera 8b",
      "correo": "eliascolon98@gmail.com",
      "telefono": 30007880154
    })
    .set('Accept', 'application/json')
    .expect('Content-Type', '/json/')
    .expect(200, done());
})


/**
 * DELETE: Testear si se elimina un cliente en especifico
 */
 it('Se crea un cliente y responde un json con mensaje', done => {
  request(routesClientes)
    .delete('/api/v1/clientes/2')
    .set('Accept', 'application/json')
    .expect('Content-Type', '/json/')
    .expect(200, done());
})

