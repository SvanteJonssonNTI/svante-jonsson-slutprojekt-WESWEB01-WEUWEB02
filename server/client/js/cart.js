function addToCart(data)
{   
    let exists = true; //used to see if data should be added or replace
    let cart = [];
    cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart == null || cart.length == 0) { //if the cart is empty or null add product as is
        cart.push(data);
    } else {
        for (let i = 0; i < cart.length; i++) {
            const element = cart[i];
            if(element.name == data.name){
                element.amount = parseInt(element.amount) + parseInt(data.amount)
                cart[i] = element //new amount is inserted
                exists = true;
                break;
            } else {
                exists = false;
            }
        }
        if (!exists) {
            cart.push(data) //since no element with that productName was found, the new product was added
        }   
    }
    
    saveToCart(cart)
}

function removeFromCart(productName)
{
    let cart = [];
    cart = JSON.parse(localStorage.getItem('cart')) || [];

    for (let i = 0; i < cart.length; i++) {
        const element = cart[i];
        if(element.name == productName){
            cart.splice(i, 1, element) //removes element from cart
        }
    }
    saveToCart(cart)
}

function clearCart()
{
    localStorage.removeItem('cart'); //clears cart from localStorage
}

function saveToCart(cart){
    localStorage.setItem('cart', JSON.stringify(cart)); //cart is saved in localStorage
}