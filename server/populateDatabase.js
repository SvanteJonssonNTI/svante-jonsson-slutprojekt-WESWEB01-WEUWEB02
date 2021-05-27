const product = require("./product");
const db = require("./dbModule");
const adjectives = require("./adjectives")

console.log()

db.connectToMongoose("webshop")

productCreate();


async function productCreate() {
    for(let i = 0; i < 20; i++){
        await db.saveToMongoose(
            product.createProduct((adjectives[Math.floor(Math.random() * adjectives.length)] + " Ljus"), "lite beskrivnings text", "/img/nedladdning.jpg", Math.floor(Math.random() * 2000), Math.floor(Math.random() * 2000))
            )
    }
    
}