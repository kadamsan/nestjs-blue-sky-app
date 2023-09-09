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
## Typeorm Migrations

[Typeorm Migrations](https://typeorm.io/migrations) Please refer to understand migrations

If any changes in database i.e entities, please execute typeorm migration:generate it will generate migration scripts. 

```bash
# generate scripts
$ npm run typeorm:migration:generate

# run scripts
$ npm run typeorm:migration:run

```


## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

- Website - [https://nestjs.com](https://nestjs.com/)

## License

Nest is [MIT licensed](LICENSE).
