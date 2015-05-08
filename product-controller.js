var Product = require('./product-controller');


module.exports = {

  post: function(req, res) {
    var newProduct = new  Product(req.body);
    newProduct.save( function(err, result) {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  },

  get: function(req, res) {
    console.log('req.query: ', req.query);
     Product.find(req.query)
    .exec(function(err, result) {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  },

  put: function(req, res) {
     Product.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  },

  delete: function(req, res) {
    Product.findByIdAndRemove(req.params.id, function(err, result) {
      if (err) return res.status(500).send(err);
      res.send(result);
    });

  },


};