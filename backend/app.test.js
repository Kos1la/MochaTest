import request from 'supertest'
import app from "./index.js";

it('should return text', (done) => {
    request(app)
        .get('/')
        .expect('SuperTest')
        .end(done)
})