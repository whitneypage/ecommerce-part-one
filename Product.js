var mongoose = require('mongoose')

var schema = new mongoose.Schema ({
	title: { type: String, unique: true, index: true, required: true },
	description: { type: String, required: true },
	price: { type: Number, min: 0 }
});

module.exports = mongoose.model('Product', schema);