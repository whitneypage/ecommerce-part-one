var mongoose = require('mongoose');


var productSchema = var new mongoose.Schema({
	title: {
		type: String,
		unique: true,
		required: true,
	},
	description: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true,
		min: 0
	}
})


var Product = mongoose.model('Product', productSchema);
module.exports = User;