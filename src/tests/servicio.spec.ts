import routesServicios from '../routes/servicio.routes';
import request from 'supertest';

/**
 * POST: Testear si se creará un nuevo resgistro para las solicitudes
 */
it('Se crea una nueva solicitud y responde un json', done => {
  request(routesServicios)
    .post('/api/v1/solicitudes')
    .send({
      "id_cliente": 2,
      "descripcion": "Arreglar tv",
    })
    .set('Accept', 'application/json')
    .expect('Content-Type', '/json/')
    .expect(200, done());
})

/**
 * GET: Testear si se obtuvo una lista de las solicitudes
 */
 it('Se obtiene una lista de las solicitudes y responde un json', done => {
  request(routesServicios)
    .get('/api/v1/solicitudes')
    .set('Accept', 'application/json')
    .expect('Content-Type', '/json/')
    .expect(200, done());
})

/**
 * GET: Testear si obtiene la lista de servicios asignados a los tecnicos
 */
 it('Se obtiene una lista de los servicios que tiene el tecnico y responde un json', done => {
  request(routesServicios)
    .post('/api/v1/tecnicos/1/solicitudes')
    .set('Accept', 'application/json')
    .expect('Content-Type', '/json/')
    .expect(200, done());
})

/**
 * PUT: Testear si se actualizará el estado del servicio que tiene el tecnico mediante un token
 */
 it('Testear si se actualizará el estado del servicio que tiene el tecnico mediante un token', done => {
  request(routesServicios)
    .put('/api/v1/solicitudes/fa4edbd123e29671efe3cb957e7069a748ff3ecf')
    .send({
      "estado": "Completado"
    })
    .set('Accept', 'application/json')
    .expect('Content-Type', '/json/')
    .expect(200, done());
})



