# Product API
Code assignment for Phillips interview process.

## Features
The project exposes API methods to support the following operations:

- Create new product
- List all products
- Update existing product
- Delete products
- Find product by ID

Example request:
- Create new product:

POST `localhost:9000/products`
Body: 
```
{
    "name": "testxxxx444xx",
    "quantity": 3,
    "price": 5
}
```

Response:
- Status: 201

You can get more detail in the [Swagger documentation](http://localhost:9000/docs/).

## Getting started

### Prerequisites
You need to have Docker installed in your machine or the NVM manager to use the version 8.9.4.

### Development environment
You will find a [docker-compose](docker-compose.yml) file with the external services used to run this application:
- Localstack: Used to simulate an AWS environment in your local machine
- Setup: To use the [setup](setup) files and configure our AWS resources (DynamoSB, SQS)
- ProductAPI: This API running inside Docker and connected with Localstack services.

#### Running local development environment
You will need to install the Node dependencies using `npm install`. Also, you will need to change the 
Localstack URL from `localstack:4566` to `localhost:4566` in the AWS config [file](src/application/aws/config.js.) 

#### Running docker-compose development environment
You can use the provided [Makefile](Makefile) to start downloading the Docker images and create the infrastructure. Also,
you can use directly the `docker-compose up` command.

### Generate SupplyChain API client
The supply chain client was generated using the provided [openapi.yml](src/application/supply-chain/openapi.yml) file,
using the [openapi-codegen](https://github.com/OpenAPITools/openapi-generator) tool.

Once generated, just run `npm run build` to get the dist folder with the exported methods.

If you don't want to generate the client code using the openapi-code-generator you can use the 
docker image for that purpose:

```
docker run --rm \
      -v ${PWD}:/local openapitools/openapi-generator-cli generate -i src/application/supply-chain/openapi.yaml \
       -g javascript --config src/application/supply-chain/javascript.conf -o src/application/supply-chain/client/
```

### Architecture
You can find more details in the [ADR](doc) folder.

### Tests

Run integration tests:

```
npm test
```

### Proposed improvements

#### ProductAPI
- Delete elements from SQS to avoid being reprocessed
- Provide a webhook to allow SupplyChain sync updates in our database.
- Integration test covering more test cases, such error status and messages.
- Implement API client methods such get products, delete products.
- Implement unit tests covering expected outputs and errors returned.
- Define BDD to write the unit tests based on use cases.
- Implement DLQ for non-consumed messages with more than 1 day in the queue.


