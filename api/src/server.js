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
//-- Create new source --
app.post('/add-new-source', async (req, res) => {
    await initialiseTables();
    console.log('handling request /add-new-source');
    let newSource = req.body;
    if (Helpers.checkIfValidSourceObject(newSource)) {
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


//-- get news sources --
app.get('/sources/:country_id', async (req, res) => {
    await initialiseTables();
    if (Helpers.checkIfValidCountryId(req.params.country_id)) {
        pg.from('publications')
            .select(['name', 'website_url', 'country_id'])
            .where({ 'country_id': req.params.country_id.toUpperCase() })
            .then(data => {
                res.status(200).send({ publications: data })
            })

    } else {
        res.status(400).send({ message: 'invalid country_id' })
    }
})



//--------- INITIALISE TABLES --------
// Checks if tables already exist in DB, 
// otherwhise tables are created and filled when applicable

async function initialiseTables() {
    await pg.schema.hasTable("countries").then(async (exists) => {
        if (!exists) {
            await pg.schema
                .createTable("countries", (table) => {
                    // table.increments();
                    table.string("name");
                    table.string("code").unique().primary();
                })
                .then(async () => {
                    console.log("created table countries");
                    console.log("filling table countries...");
                    const countries = Helpers.getCountries();
                    countries.forEach(async (country) => {
                        await pg.table("countries").insert({ name: country.name, code: country.code });
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
                        table.increments();
                        table.uuid("uuid");
                        table.string("name");
                        table.string("website_url");
                        table.string("country_id").references("code").inTable("countries");
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