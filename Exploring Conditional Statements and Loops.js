let test_user = { logged_on: true }
let test_products = [{ name: "Apple", price: 0.68 }, { name: "Pear", price: 0.78 }, { name: "Orange", price: 0.56 }];
let test_cart = [{ name: "Apple", price: 0.68 }, { name: "Pear", price: 0.78 }, { name: "Pear", price: 0.78 }];

// Task 1
function addItem(user, cart, item) {
  if (user.logged_on) {
    cart.push(item);
  }
}

// Task 2
test_products.forEach(item => {
  console.log(item);
  addItem(test_user, test_cart, item);
});

// Task 3
let sum = test_cart.reduce((x, y) => x + y.price, 0);
console.log("Cart total: " + sum);
