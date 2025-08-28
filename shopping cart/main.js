let cartTotal = 0;

let shoppingCart = [
    {name: "T-shirt", price: 20},
    {name: "Jean", price: 50},
    {name: "Sneaker", price: 80},
    {name: "Backpack", price: 30},
]

function addToCartTotal (item){
console.log("item added:", item.name);
console.log("item price:", item.pricce);
total = total + item.price;
console.log("running total:", total);
}

shoppingCart.forEach(addToCartTotal);

function checkDiscount(){
if (addToCartTotal > 100){
    addToCartTotal = addToCartTotal * 0.9;
}
cartTotalText.textContent = cartTotal
}


console.log("your cart total is:", addToCartTotal);