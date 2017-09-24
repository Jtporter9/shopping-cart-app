var mongoose = require('mongoose')

var Foods = mongoose.Schema({
	name: [{ type: String, required: true }],
	price: { type: Number, default: 0 },
});

module.exports = mongoose.model('Foods', Foods);
