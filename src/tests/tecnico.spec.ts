import routesTecnicos from '../routes/tecnico.routes';
import request from 'supertest';

/**
 * POST: Testear si se creará un nuevo resgistro para los tecnicos
 */
it('Se crea un tecnico y responde un json con mensaje', done => {
  request(routesTecnicos)
    .post('/api/v1/tecnicos')
    .send({
      "nombre": "Elias Colon"
    })
    .set('Accept', 'application/json')
    .expect('Content-Type', '/json/')
    .expect(200, done());
})

/**
 * GET: Testear si se obtuvo una lista de los tecnicos
 */
 it('Se obtiene una lista de los tecnicos y responde un json', done => {
  request(routesTecnicos)
    .get('/api/v1/tecnicos')
    .set('Accept', 'application/json')
    .expect('Content-Type', '/json/')
    .expect(200, done());
})

/**
 * GET: Testear si obtuvo un tecnico en especifico
 */
 it('Se obtiene una lista de del tecnico y responde un json', done => {
  request(routesTecnicos)
    .post('/api/v1/tecnicos/1')
    .set('Accept', 'application/json')
    .expect('Content-Type', '/json/')
    .expect(200, done());
})

/**
 * PUT: Testear si se actualizará un tecnico
 */
 it('Se actualiza un tecnico y responde un json con mensaje', done => {
  request(routesTecnicos)
    .put('/api/v1/tecnicos/1')
    .send({
      "nombre": "Elias Colon 2"
    })
    .set('Accept', 'application/json')
    .expect('Content-Type', '/json/')
    .expect(200, done());
})


/**
 * DELETE: Testear si se elimina un tecnico en especifico
 */
 it('Se crea un tecnico y responde un json con mensaje', done => {
  request(routesTecnicos)
    .delete('/api/v1/tecnicos/2')
    .set('Accept', 'application/json')
    .expect('Content-Type', '/json/')
    .expect(200, done());
})

