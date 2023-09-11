<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) Framework TypeScript.

## Installation

```bash
$ npm install
```

## Environment variable configuration

Create .env file at root folder, please refer .env.sample at the same location. It is requried by docker-compose.yml file while spining postgis and pgadmin.

Also create .env.development, .env.staging and .env.production at location './src/shared/config/env/', please refer .env.sample at the same location. It is requried by docker-compose.yml file.

Please refer docker-compose.yml file for details.

## Before running the app create database

Database name as mentioned in environment file.

```bash

-- Database: db_changeit

-- DROP DATABASE IF EXISTS db_changeit;

CREATE DATABASE db_changeit
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United States.1252'
    LC_CTYPE = 'English_United States.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

```

## Running the app

If one have postgis i.e database setup already configured

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
## Running the app using docker

[Docker](https://docs.docker.com/) is an open platform for developing, shipping, and running applications.

The applcation is also spining up local postgis server with docker-compose along with pgadmin.

```bash
# development
$ docker-compose up development -d

# staging
$ docker-compose up staging -d

# production mode
$ docker-compose up production -d
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Swagger UI

Swagger UI allows anyone — be it your development team or your end consumers — to visualize and interact with the API’s resources.

```bash
http://localhost:3000/docs
```
## Project Documentation

[Compodoc](https://compodoc.app/) is a documentation tool for Angular applications. Since Nest and Angular share similar project and code structures, Compodoc works with Nest applications as well.

Generation
```bash
$ npx @compodoc/compodoc -p tsconfig.json -s
```
[See the official documentation](https://compodoc.app/guides/usage.html) for more options.

Open your browser and navigate to http://localhost:8080

## Typeorm Migrations

[Typeorm Migrations](https://typeorm.io/migrations) Please refer to understand migrations

If any changes in database i.e entities, please execute typeorm migration:generate it will generate migration scripts. 

```bash
# generate scripts
$ npm run typeorm:migration:generate

# run scripts
$ npm run typeorm:migration:run

```

## Import GeoJSON to PostGIS:

[Ogr2ogr](https://gdal.org/programs/ogr2ogr.html) is the swiss-army knife when it comes to conversion of GIS data. It is part of the Geospatial Data Abstraction Library and provides an easy way to convert data between common storage formats: GeoJSON, Shapefile, PostGIS and others.

For install and how to import GeoJSON to PostGIS, Please refer the links

[GDAL](https://mapscaping.com/installing-gdal-for-beginners/) Please refer to understand installion

[Import GeoJSON to PostGIS](https://morphocode.com/using-ogr2ogr-convert-data-formats-geojson-postgis-esri-geodatabase-shapefiles/) Please refer to import

```bash
# Import GeoJSON to PostGIS (Command Line)
$ C:\OSGeo4W\bin>ogr2ogr -f "PostgreSQL" PG:"dbname=your-database-name user=your-username password=mypassword" /path/to/jour/GeoJSon/file -nln table-name -append
```

## Hosting Application

Two ways to deploy application

1. [phusionpassenger](https://www.phusionpassenger.com/)

Passenger® is an app server that runs and automanages your web apps with ease. Also improves security, reliability and scalability.

[Deploying a Node.js app on a Linux/Unix production server](https://www.phusionpassenger.com/library/walkthroughs/deploy/nodejs/ownserver/nginx/oss/trusty/deploy_app.html)

2. [Kubernetes](https://kubernetes.io/)

Kubernetes, also known as K8s, is an open-source system for automating deployment, scaling, and management of containerized applications.

[Deploy a Container Web App on Amazon EKS](https://aws.amazon.com/tutorials/deploy-webapp-eks/) One can use Kubernetes (k8s) from any cloud provider.


## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

- Website - [https://nestjs.com](https://nestjs.com/)

## License

Nest is [MIT licensed](LICENSE).
