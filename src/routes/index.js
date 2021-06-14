import express from 'express';

import products from './products';

const routes  = express.Router();

routes.use('/products', products);

// Healthcheck
routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Ok' });
});

module.exports = routes;
