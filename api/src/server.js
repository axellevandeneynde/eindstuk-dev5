const Hapi = require('@hapi/hapi');
require('dotenv').config()
const Helpers = require('./utils/helpers')
const fs = require('fs');

//--------- DB CONNECTION --------
const pg = require('knex')({
    client: 'pg',
    version: '9.6',
    searchPath: ['knex', 'public'],
    connection: process.env.PG_CONNECTION_STRING ? process.env.PG_CONNECTION_STRING : 'postgres://example:example@localhost:5432/test'
});
initialiseTables();


//--------- ROUTES --------
const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: '0.0.0.0'
    });

    //-- Create new source --
    server.route({
        method: 'POST',
        path: '/add-new-source',
        handler: (request, h) => {
            console.log('handling request /add-new-source');
            let newSource = request.payload;
            if (Helpers.checkIfValidSourceObject(newSource)) {
                newSource.uuid = Helpers.generateUUID();
                newSource.country_id = newSource.country_id.toUpperCase();
                pg('publications')
                    .insert(newSource)
                return { status: `news source was added with uuid ${newSource.uuid}` }
            }
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();


//--------- INITIALISE TABLES --------
// Checks if tables already exist in DB, 
// otherwhise tables are created and filled when applicable

async function initialiseTables() {
    await pg.schema.hasTable("publications").then(async (exists) => {
        if (!exists) {
            await pg.schema
                .createTable("publications", (table) => {
                    table.increments();
                    table.uuid("uuid");
                    table.string("name");
                    table.string("country_id");
                    table.string("website_url");
                })
                .then(async () => {
                    console.log("created table publications");
                });
        } else {
            console.log('table publications exists')
        }
    });
    await pg.schema.hasTable("countries").then(async (exists) => {
        if (!exists) {
            await pg.schema
                .createTable("countries", (table) => {
                    table.increments();
                    table.uuid("uuid");
                    table.string("name");
                    table.string("code");
                })
                .then(async () => {
                    console.log("created table countries");
                    console.log("filling table countries...");
                    const countries = Helpers.getCountries();
                    countries.forEach(async (country) => {
                        const uuid = Helpers.generateUUID();
                        await pg.table("countries").insert({ uuid, name: country.name, code: country.code });
                    });
                    console.log("table countries filled");
                })
        } else {
            console.log("table countries exists")
        }
    });
}