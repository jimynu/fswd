function Dish(name, ingredients) {
  this.name = name;
  this.ingredients = ingredients;
}

var restaurant = {};

restaurant.orders = [];

restaurant.orderDish = function(order) {
  this.orders.push(order);
};

restaurant.printOrders = function() {
  for (var i=0; i<this.orders.length; i++) {
    console.log("Order #" + i + ": " + this.orders[i].name);
  }
};

// 1. orders

var pizza = new Dish('Pizza');
var salad = new Dish('Salad');

restaurant.orderDish(pizza);
restaurant.orderDish(salad);
restaurant.printOrders();  //Order #0: Pizza, Order #1: Salad

// 2. ingredients

function Ingredient(name, price) {
  this.name = name;
  this.price = price;
}

var cheese = new Ingredient('Cheese', 5);
var pepperoni = new Ingredient('Pepperoni', 4);
var dough = new Ingredient('Dough', 8);
var lettuce = new Ingredient('Lettuce', 4);
var tomato = new Ingredient('Tomato', 3);

var pizza = new Dish('Pizza', [cheese, pepperoni, dough]);
var salad = new Dish('Salad', [lettuce, cheese, tomato]);

// 3. Dish Cost and Profit

Dish.prototype.cost = function() {
  var cost = 10; // basis-preis
  for (var i in this.ingredients) {
    cost = cost + this.ingredients[i].price;
  }
  console.log(cost);
};

pizza.cost(); // => 27
