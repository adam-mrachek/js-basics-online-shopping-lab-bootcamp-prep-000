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
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  }
  if (cart.length === 1) {
    return cartContents += `${cart[i].itemName} at $${cart[i].itemPrice}.`
  }
  for (var i = 0; i < cart.length - 1; i++) {
    cartContents += `${cart[i].itemName} at ${cart[i].itemPrice}, `
  }
  return cartContents;
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
