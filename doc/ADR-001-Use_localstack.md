# ADR 001 - Use Localstack

##Context
The application needs to be integrated with AWS resources (DynamoDB and SQS). In order to simulate a 
local AWS environment, Localstack is a great choice to deploy an internal AWS infrastructure via Docker container.

##Decision
Implement Localstack with a predefined configuration. This configuration should be applied at application startup and
executed inside the Docker environment. I have provided a CloudFormation structure file but seems like 
current Localstack versions has issues wupporting this service, so I'm creating the needed resources direcly.

##Reference
- [Localstack](https://localstack.cloud)

##Status
- Accepted
