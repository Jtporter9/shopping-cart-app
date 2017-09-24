var Food = require('../models/foodsModel.js');

module.exports = {
	// addFood: function (req, res) {
	// 	var newFood = new Food(req.body);
	// 	newFood.save(function (err, result) {
	// 		if (err) return res.status(500).send(err);
	// 		else res.send(result);
	// 	});
	// },
	findFood: function (req, res, next) {
		Food.find().then(function (food, err) {
			if (err) {
				res.status(500).send(err);
			} else {
				res.send(food);
			}
		})
	},
	// findFoodById: function (req, res, next) {
	// 	Food.findById(req.params.id).populate('messages').exec().then(function (food, err) {
	// 		if (err) {
	// 			res.status(500).send(err);
	// 		} else {
	// 			res.send(food);
	// 		}
	// 	})
	// },

	// updateFood: function (req, res, next) {
	// 	Food.findByIdAndUpdate(req.params.id, req.body, function (err, updatedFood) {
	// 		if (err) {
	// 			res.status(500).send(err);
	// 		} else {
	// 			res.send(updatedFood);
	// 		}
	// 	})
	// },
	// deleteFood: function (req, res, next) {
	// 	Food.findByIdAndRemove(req.params.id, req.body, function (err, deletedFood) {
	// 		if (err) {
	// 			res.status(500).send(err);
	// 		} else {
	// 			res.send(deletedFoods);
	// 		}
	// 	});
	// }
}