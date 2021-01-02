const request = require('supertest');
const server = require('../../server');

describe('/add-new-source should accept a post request with a new source object', async () => {
    const res = await request(server).post('/add-new-source').send({
        name: 'De Morgen',
        country_ID: 'BE',
        Website_url: 'https://www.demorgen.be/'
    })
    expect(res.statusCode).toEqual(200)
})