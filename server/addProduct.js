//Local Dependencies
const Product = require("./models/Product")

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

//Function checks if price is valid
exports.checkPrice = (priceIN) => {
    if(true){ //checks if input is a integer
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
//decimal inte ok, inte negativa tal, och inga bokstäver
exports.checkStock = (priceIN) => {

}

//Function checks if imgURL is valid
exports.checkImgURL = (priceIN) => {

}