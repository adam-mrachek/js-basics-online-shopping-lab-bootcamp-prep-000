var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var newItem = new Object();
 var price = Math.floor(Math.random() * 100);
 newItem.itemName = item;
 newItem.itemPrice = price;
 cart.push(newItem);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  var cartContents = "In your cart, you have ";
  for (var i = 0; i < cart.length; i++) {
    cartContents += `${cart[i].itemName} and ${cart[i].itemPrice}, `
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
