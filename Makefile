endpoint = http://localstack:4566
build-image-name = product-aws-infra

init:
	docker-compose up -d

gen-cli:
	docker run --rm \
      -v ${PWD}:/local openapitools/openapi-generator-cli generate -i src/application/supply-chain/openapi.yaml \
       -g javascript --config src/application/supply-chain/javascript.conf -o src/application/supply-chain/client/