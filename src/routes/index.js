import express from 'express';

import products from './products';

const routes  = express.Router();

/**
 * @swagger
 * paths:
 *  /products:
 *    get:
 *      summary: Retrieve a list of all stored products
 *      description: Retrieve a list of saved products in database.
 */
routes.use('/products', products);

// Healthcheck
routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Ok' });
});

module.exports = routes;
