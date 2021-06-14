import chai from 'chai';
import chaiHttp from 'chai-http';

import app from '../app';
import mockProducts from './mock/product';

chai.use(chaiHttp);

const testProduct1 = mockProducts.products.mockProduct1;

describe('Products', () => {

  describe('/POST products', () => {
    it('it should save created product', (done) => {
      chai.request(app)
          .post('/products')
          .body(testProduct1)
          .end((err, res) => {
              res.should.have.status(201);
              res.type.should.equal('application/json');
              res.body.should.include.keys('name', 'product 1');
              done();
          });
    });
  })

  describe('/GET products/:productId', () => {
    it('it should list specific product by given id', (done) => {
      chai.request(app)
        .get('/products/' + testProduct1.id)
        .end((err, res) => {
          res.should.have.status(200);
          res.type.should.equal('application/json');
          res.body.should.include.keys('name', 'product 1');
          done();
        });
    });
  });
});
