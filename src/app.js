const cron = require("node-cron");
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

import config from 'config';
import routes from './routes';
import { getProductsFromQueue } from './application/services/product.service'

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/', routes);

const port = process.env.PORT || config.server.port;

// CRON Job to get SQS messages every minute
cron.schedule("* * * * *", function() {
    getProductsFromQueue()
});

// Swagger config
const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Product API',
        version: '1.0.0',
    },
    license: {
        name: 'Licensed Under MIT',
        url: 'https://spdx.org/licenses/MIT.html',
    },
    servers: [
        {
            url: 'http://localhost:9000',
            description: 'Development server',
        },
    ],
};

const options = {
    swaggerDefinition,
    apis: ['product-catalog-api/routes/*.js'],
};
const swaggerSpec = swaggerJSDoc(options);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port);
console.log('Product REST API server started on port: ' + port);

module.exports = swaggerJSDoc(options)
module.exports = app;
