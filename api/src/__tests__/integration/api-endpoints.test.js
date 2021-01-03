const request = require('supertest');
const server = require('../../server.js')

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
    test('should not accept a post request with invalid body', async () => {
        const res = await request(server)
            .post('/add-new-source')
            .send([{
                name: 'de morgen',
                country_id: 'BE',
                bla: 'https://demorgen.be'
            }]);
        expect(await res.statusCode).toEqual(400)
    });
})

describe('/sources/:country_id endpiont get sources from country', () => {
    test('should not accept non existing country ID', async () => {
        const res = await request(server)
            .get('/sources/LAP')
        expect(await res.statusCode).toEqual(400)
    })
    test('should respond data if existing country ID', async () => {
        const res = await request(server)
            .get('/sources/BE')
        expect(await res.body).toBeDefined()
    })
})