const supertest = require('supertest');
const server = require('../server.js');

const request = supertest(server);

describe('end-to-end CRUD publication', () => {
    test('create publication', async () => {
        const res = await request
            .post('/add-new-source')
            .send({
                name: 'de morgen',
                country_id: 'BE',
                website_url: 'https://demorgen.be'
            });
        expect(await res.statusCode).toEqual(200)
    })

    test('read publication from the country', async () => {
        const res = await request
            .get('/sources/BE')
        expect(await res.statusCode).toEqual(200)
    })

    test('update publication with uuid', async () => {
        const res = await request
            .post(`/update-publication/78204893-2c9e-4fd8-a1bb-8786034ddb2a`).send({
                country_id: 'NL'
            })
        expect(await res.statusCode).toEqual(200)
    })

    test('delete publication with name', async () => {
        const res = await request
            .post('/delete-publication')
            .send({
                name: 'de morgen',
            });
        expect(await res.statusCode).toEqual(200)
        const data = await request.get('/sources/NL')
        let publicationWasDelted = true;
        data.body.publication.forEach(d => {
            if (d.name == 'de morgen') {
                publicationWasDelted = false;
            }
        })
        expect(publicationWasDelted).toBe(true)
    })
})