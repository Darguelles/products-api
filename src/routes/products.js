import express from 'express';

import products from '../application/controllers/products';

const routes  = express.Router({ mergeParams: true });

routes.route('/')
    .get(products.list)
    .post(products.create);

routes.route('/:productId')
    .put(products.update)
    .get(products.read)
    .delete(products.delete);

module.exports = routes;
