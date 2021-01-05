const supertest = require('supertest');
const server = require('../../server.js')

const request = supertest(server);

describe('/add-new-source api endpoint', () => {
    test('should accept a post request with a new source object', async () => {
        const res = await request
            .post('/add-new-source')
            .send({
                name: 'de morgen',
                country_id: 'BE',
                website_url: 'https://demorgen.be'
            });
        expect(await res.statusCode).toEqual(200)
    });
    test('should not accept a post request with invalid body', async () => {
        const res = await request
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
        const res = await request
            .get('/sources/LAP')
        expect(await res.statusCode).toEqual(400)
    })
    test('should respond data if existing country ID', async () => {
        const res = await request
            .get('/sources/BE')
        expect(await res.body).toBeDefined()
    })
})

describe('/delete-publication with name', () => {
    test('should only accept delete request with name', async () => {
        const res = await request
            .post('/delete-publication').send({
                "bla": "bla"
            })
        expect(await res.statusCode).toEqual(400)
    })
    test('should respond to valid request positively', async () => {
        const res = await request
            .post('/delete-publication').send({
                "name": "The new york times"
            })
        expect(await res.body).toHaveProperty('message')
        expect(await res.statusCode).toEqual(200)
    })
})

describe('/update-publication with uuid', () => {
    test('should respond to valid request positively', async () => {
        const res = await request
            .post('/update-publication/78204893-2c9e-4fd8-a1bb-8786034ddb2a').send({
                name: 'the new york times'
            })
        expect(await res.body).toHaveProperty('message')
        expect(await res.statusCode).toEqual(200)
    })
    test('should respond to request without uuid negativly', async () => {
        const res = await request
            .post('/update-publication/something').send({
                name: 'the new york times'
            })
        expect(await res.statusCode).toEqual(400)
    })
    test('should respond to request with wrong proprety names negatively', async () => {
        const res = await request
            .post('/update-publication/something').send({
                post: 'the new york times'
            })
        expect(await res.statusCode).toEqual(400)
    })
    test('should respond to request with wrong proprety names negatively', async () => {
        const res = await request
            .post('/update-publication/78204893-2c9e-4fd8-a1bb-8786034ddb2a').send({
                post: 'the new york times'
            })
        expect(await res.statusCode).toEqual(400)
    })
    test('should respond to request with empty body negatively', async () => {
        const res = await request
            .post('/update-publication/78204893-2c9e-4fd8-a1bb-8786034ddb2a').send({})
        expect(await res.statusCode).toEqual(400)
    })
})