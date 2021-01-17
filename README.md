# news organisations API

This API has the purpose of gathering an overview of existing news organizations by country and their RSS feeds (coming soon). This can be usefull as a base for gathering content for a news website/ application or for research purposes. This project is currently in devolpement and is as such not yet deployed.

## Getting started
### Run it locally
You will need [Docker](https://docs.docker.com/get-docker/) installed on your machine.
use `docker-compose up` in the root of the project to run the containers.

The API will be available on [127.0.0.1:3000](127.0.0.1:3000)

Please note that, except for a list of countries, the database will be empty. 
### Query the API

**Add a new news organization:**

POST /add-new-source 

with the body in the following format:
```
{
    name: "",
    country_id: "",
    website_url: ""
} 
```
**Get news organization by country:**

GET /sources/:country_id

**Get all news organizations:**

GET /get-all-publications

**Get all countries with their ID's:**

GET /get-all-countries

**Update news organization:**

GET /update-publication/:uuid

**Delete news organization by name:**

POST /delete-publication

with at least the following property in the body:
```
{
    name: ""
} 
```
**Delete country:**

GET /delete-country/:country_id

## I need help!

please contact me at axelle.vanden.eynde@student.ehb.be if google is unable to find your answer. 

## I want to contribute

Good! Please read the [contribution guidelines](https://github.com/axellevandeneynde/eindstuk-dev5/blob/main/CONTRIBUTING.md) to get yourself started.

## Tech stack
- server: [express.js](https://expressjs.com/)
- testing: [jest](https://jestjs.io/)
- database: [postgreSQL](https://www.postgresql.org/) whith [knex.js](http://knexjs.org/) for - queries.
- build: [Docker](https://docker.com)
- ci: [circleci](https://circleci.com/)
## Testing
all test can be found in `/api/src/__tests__`. You can run them by using the `npm run test` command in `/api`.


