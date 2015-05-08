var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var bcrypt = require('bcrypt');

var app = express();
var port = 9000;
var mongoUri = 'mongodb://localhost:27017/ecommerce'

var productsCtrl = require('./product-controller');
var User = require('./user.js');

app.use(bodyParser.json());
app.use(cors());

mongoose.connect(mongoUri, function(err) {
    if (err) {
        console.log(err)
        return;
    }
    console.log('Connnected');
    app.listen(port, function() {
        console.log('Now listening at port: ' + port);
    });
})


app.get('/api/products', productsCtrl.get);

app.post('/api/products', productsCtrl.post);

app.put('/api/products', productsCtrl.put);

app.delete('api/products', productsCtrl.delete);



