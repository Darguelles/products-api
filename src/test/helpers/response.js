exports.assertObject = function(res, object) {
  res.should.have.status(200);
  res.type.should.equal('application/json');
  res.body.should.be.a('object');
  res.body.should.contain(object);
}

exports.assertNotFound = function(err, res) {
  res.should.have.status(404);
}
