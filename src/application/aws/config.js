const AWS = require('aws-sdk');

AWS.config.update({
    region: "us-east-1",
    endpoint: "http://localstack:4566"
})

module.exports = { AWS }