import express from 'express';

import products from '../application/controllers/products';

const routes  = express.Router({ mergeParams: true });

/**
 * @swagger
 * paths:
 *  /products:
 *    get:
 *      summary: Retrieve a list of all stored products
 *      description: Retrieve a list of saved products in database.
 *    post:
 *      summary: Store a new product in API
 *      description: Save a new product in API database.
 */
routes.route('/')
    .get(products.list)
    .post(products.create);

/**
 * @swagger
 * paths:
 *  /products/:productId:
 *    get:
 *      summary: Retrieve a single stored product matching the given ID
 *      description: Retrieve a single stored product matching the given ID
 *    put:
 *      summary: Update a stored product matching the given ID
 *      description: Update a stored product matching the given ID
 *    delete:
 *      summary: Deletes a stored product matching the given ID
 *      description: Deletes a stored product matching the given ID
 */
routes.route('/:productId')
    .put(products.update)
    .get(products.read)
    .delete(products.delete);

module.exports = routes;
