const mongoose = require('mongoose');

//Creates the ProductSchema
const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imgURL: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    }
});

const Product = mongoose.model("Product", ProductSchema);

//Function creates a new product
exports.createProduct = (nameIN, descriptionIN, imgURLIN, priceIN, stockIN) => {
    return new Product({
        name: nameIN,
        description: descriptionIN,
        imgURL: imgURLIN,
        price: priceIN,
        stock: stockIN
    })
}

//Exports a product
module.exports = Product;