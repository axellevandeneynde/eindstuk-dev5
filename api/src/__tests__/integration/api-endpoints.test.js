const request = require('supertest');
const server = '0.0.0.0:3000';

describe('/add-new-source api endpoint', () => {
    test('should accept a post request with a new source object', async () => {
        const res = await request(server)
            .post('/add-new-source')
            .send({
                name: 'de morgen',
                country_id: 'BE',
                website_url: 'https://demorgen.be'
            });
        expect(await res.statusCode).toEqual(200)
    });
})