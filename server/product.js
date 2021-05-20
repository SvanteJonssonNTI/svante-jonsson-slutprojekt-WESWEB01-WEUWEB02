//Local Dependencies
const Product = require("./models/Product")

//Imported Dependencies
const isNumber = require('is-number')
const fs = require("fs")

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

//Function gets all products from database
exports.getAllFromDB = async () => {
    return await Product.find()
}

//Function checks if price is valid
exports.checkPrice = (priceIN) => {
    if(isNumber(priceIN)){ //checks if input is a integer
        if(priceIN > 0){
            priceIN = parseFloat(priceIN).toFixed(2) //if price has more than 2 decimals, it is trimmed
            return priceIN
        } else { //If price is 0 or below, -1 is returned to indicate a invalid pricetag
            return -1 
        }
    } else {
        return -1
    }
}

//Function checks if stock is valid
exports.checkStock = (stockIN) => {
    if(isNumber(stockIN)){ //checks if input is a integer
        if(stockIN > 0 && stockIN % 1 == 0){
            return stockIN
        } else { //If price is 0 or below or not a whole number, -1 is returned to indicate a invalid stock amount
            return -1 
        }
    } else {
        return -1
    }
}

//Function checks if imgURL is valid
exports.checkImgURL = (imgURL) => {
    const url = `./client/img/${imgURL}`
    if(fs.existsSync(url)) return url
    return -1 //If url is invalid, -1 is returned to indicate a bad url
}

//Function checks if text is valid
exports.checkText = (textIN, length) => {
    if(textIN.length == 0){
        return -1 //If text is invalid, -1 is returned to indicate a bad text
    }
    text = textIN.trim()
    text = text.substring(0, length) //Text is trimmed to desired length
    return text
}