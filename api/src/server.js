const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
require('dotenv').config()
const Helpers = require('./utils/helpers')

//--------- Server setup --------
const app = express();
http.Server(app);

app.use(bodyParser.json());

//--------- DB CONNECTION --------
const pg = require('knex')({
    client: 'pg',
    version: '9.6',
    searchPath: ['knex', 'public'],
    connection: process.env.PG_CONNECTION_STRING ? process.env.PG_CONNECTION_STRING : 'postgres://example:example@localhost:5432/test'
});
// initialiseTables();


//--------- ROUTES --------

/**
* Endpoint (post) to create a new publication/source
* @params: {Object} publication - request body
* @params: {string} publication.name
* @params: {string} publication.country_id
* @params: {string} publication.website_url
* @returns: {object} message with uuid - response body
*/
app.post('/add-new-source', async (req, res) => {
    await initialiseTables();
    console.log('handling request /add-new-source');
    let newSource = req.body;
    if (Helpers.isValidSourceObject(newSource)) {
        newSource.uuid = Helpers.generateUUID();
        newSource.country_id = newSource.country_id.toUpperCase();
        pg.table('publications')
            .insert(newSource).then(
                res.status(200).send({ message: `news source was added with uuid ${newSource.uuid}` })
            )
    } else {
        res.status(400).send({ message: 'invalid news source object' })
    }

})


/**
* Endpoint (get) to get news publication/source with uuid
* @params: {string} uuid - request parameter
* @returns: {object} publication - response body
*/-
    app.get('/sources/:country_id', async (req, res) => {
        await initialiseTables();
        if (Helpers.isValidCountryId(req.params.country_id)) {
            pg.from('publications')
                .select(['name', 'website_url', 'country_id'])
                .where({ 'country_id': req.params.country_id.toUpperCase() })
                .then(data => {
                    res.status(200).send({ publication: data })
                })

        } else {
            res.status(400).send({ message: 'invalid country_id' })
        }
    })

/**
* Endpoint (post) to delete publication/source
* @params: {Object} publication - request body
* @params: {string} publication.name
* @params: {string} [publication.country_id]
* @params: {string} [publication.website_url]
* @returns: {object} message - response body
*/
app.post('/delete-publication', async (req, res) => {
    await initialiseTables();
    if (Helpers.isValidPublicationNameObject(req.body)) {
        await pg.from('publications').where({ name: req.body.name }).del();
        res.status(200).send({ message: 'delete request handled' })
    } else {
        res.status(400).send()
    }
})

/**
* Endpoint (post) to update a new publication/source
* @params: {string} uuid - request parameter
* @params: {Object} publication - request body
* @params: {string} publication.name
* @params: {string} publication.country_id
* @params: {string} publication.website_url
* @returns: {object} message with uuid - response body
*/
app.post('/update-publication/:uuid', async (req, res) => {
    await initialiseTables();
    console.log('handling request /update-publication')
    if (Helpers.isUuid(req.params.uuid) && Helpers.isValidPropertyNames(req.body)) {
        await pg.from('publications')
            .where({ uuid: req.params.uuid })
            .update(req.body)
        res.status(200).send({ message: 'update request handled' })
    } else {
        res.status(400).send()
    }
})

/**
* Endpoint (get) to get all publications joint with country
* @returns: {Object[]} publications - response body
*/
app.get('/get-all-publications', async (req, res) => {
    await initialiseTables();
    console.log('handling request /get-all-publications')
    await pg.select('*')
        .from('publications')
        .join('countries', 'countries.country_id', '=', 'publications.country_id')
        .then(data => {
            res.status(200).send(data);
        })

})

/**
* Endpoint (get) to get all countries
* @returns: {Object[]} countries - response body
*/
app.get('/get-all-countries', async (req, res) => {
    await initialiseTables();
    console.log('handling request /get-all-countries')
    await pg.from('countries')
        .select('*')
        .then(data => {
            res.status(200).send(data);
        })
})

/**
* Endpoint (get) to delete a country - DO NOT USE!
* @params: {string} country_id - request parameter
* @returns: {Object} message - response body
*/

// DO NOT USE!!! THIS IS JUST FOR EXERCICE PURPOSE.
app.get('/delete-country/:country_id', async (req, res) => {
    await initialiseTables();
    console.log('handling request /delete-all-countries')
    if (Helpers.isValidCountryId(req.params.country_id)) {
        await pg.from('publications').where({ country_id: req.params.country_id }).del();
        await pg.from('countries').where({ country_id: req.params.country_id }).del();
        res.status(200).send({ message: 'delete request handled' })
    } else {
        res.status(400).send({ message: 'invalid country_id' })
    }
})


//--------- INITIALISE TABLES --------

/**
* Checks if tables already exist in DB, 
* otherwhise tables are created and filled when applicable
*/
async function initialiseTables() {
    await pg.schema.hasTable("countries").then(async (exists) => {
        if (!exists) {
            await pg.schema
                .createTable("countries", (table) => {
                    // table.increments();
                    table.string("country");
                    table.string("country_id").unique().primary();
                })
                .then(async () => {
                    console.log("created table countries");
                    console.log("filling table countries...");
                    const countries = Helpers.getCountries();
                    countries.forEach(async (country) => {
                        await pg.table("countries").insert({ country: country.country, country_id: country.country_id });
                    });
                    console.log("table countries filled");
                })
        } else {
            console.log("table countries exists")
        }
    }).then(
        pg.schema.hasTable("publications").then(async (exists) => {
            if (!exists) {
                await pg.schema
                    .createTable("publications", (table) => {
                        table.uuid("uuid").unique().primary();
                        table.string("name");
                        table.string("website_url");
                        table.string("country_id").references("country_id").inTable("countries");
                    })
                    .then(async () => {
                        console.log("created table publications");
                    });
            } else {
                console.log('table publications exists')
            }
        }))
}

module.exports = app;