const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, "This is a required field."],
		minLength: [3, "The product title must be longer than 3 characters."]
	},
	price: {
		type: Number,
		required: [true, "This is a required field."],
		min: [0.01, "The price must be more than $0.01."],
		max: [1000000.00, "The price must be less than $1,000,000.00."]
	},
	description: {
		type: String,
		required: [true, "This is a required field."],
		minLength: [10, "The product description must be longer than 10 characters."]
	}
}, {timestamps: true});

module.exports.Product = mongoose.model("Product", ProductSchema);
