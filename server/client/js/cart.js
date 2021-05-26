function addToCart()
{   
    data = { //temporary sample product
        name: "tjo",
        amount: 2,
        price: 10
    }
    let cart = [];
    cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart == null || cart.length == 0) { //if the cart is empty or null add product as is
        cart.push(data);
    } else {
        for (let i = 0; i < cart.length; i++) {
            const element = cart[i];
            if(element.name == data.name){
                element.amount += data.amount
                cart[i].push(element) //new amount is inserted (this is currently not working)
            }
        }
    }
    
    localStorage.setItem('cart', JSON.stringify(cart)); //updated cart is saved in localStorage
}

function removeFromCart()
{
    
}

function clearCart()
{
    localStorage.removeItem('cart'); //clears cart from localStorage
}