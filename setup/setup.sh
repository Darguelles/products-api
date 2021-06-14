#!/bin/sh

cd /setup

# Wait just in case LocalStack delays the start
sleep 7s

aws  --endpoint-url=http://localstack:4566 dynamodb create-table \
                --table-name Product \
                --attribute-definitions AttributeName=id,AttributeType=S \
                --key-schema AttributeName=id,KeyType=HASH \
                --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5

aws  --endpoint-url=http://localstack:4566 sqs create-queue --queue-name product-queue