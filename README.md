# news organisations API

This API has the purpose of gathering an overview of existing news organizations by country and their RSS feeds (coming soon). This can be usefull as a base for gathering content for a news website/ application or for research purposes. This project is currently in devolpement and is as such not yet deployed.

## Getting started
### Run it locally
You will need [Docker installed](https://docs.docker.com/get-docker/) on your machine.
use `docker-compose up` in the root of the project to run the containers.

The API will be available on [127.0.0.1:3000](127.0.0.1:3000)

Please note that, except for a list of countries, the database will be empty. 
### Query the API
A list of all country ID's can be found [here](https://github.com/axellevandeneynde/eindstuk-dev5/blob/main/api/src/utils/helpers.js).

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

**Delete news organization by name:**

POST /delete-publication

with at least the following property in the body:
```
{
    name: ""
} 
```
## I need help!

please contact me at axelle.vanden.eynde@student.ehb.be

## I want to contribute

Good! Please read the [contribution guidelines]() to get yourself started.



