// Business Logic
var pizzaToppings = [];

function Pizza (pizzaSize, pizzaToppings){
this.pizzaSize = pizzaSize;
this.pizzaToppings = pizzaToppings;
this.pizzaCost = 0;
}

Pizza.prototype.pizzaCalc = function() {
  if (this.pizzaSize === "personalPizza") {
    this.pizzaCost =+ 5;
  } else if (this.pizzaSize === "smallPizza") {
    this.pizzaCost =+ 7;
  } else if (this.pizzaSize === "mediumPizza") {
    this.pizzaCost =+ 9;
  } else if (this.pizzaSize === "largePizza") {
    this.pizzaCost =+ 11;
  } else {
    alert("Pick your pie primeter please!");
  }
  for (var i = 0; i < this.pizzaToppings.length; i++) {
    this.pizzaCost = this.pizzaCost + .5;
  }
}

// Pizza.prototype.orderAndPrice = function() {
//   return this.newLocation + " " + this.newLandmark + " " + this.newSeason;
// }

// User Interface Logic
$(document).ready(function(){

  $('form.pizza-order').submit(function(event){
    event.preventDefault();
    $("input[type=checkbox]:checked").each(function(){
        pizzaToppings.push($(this).val());
        console.log(pizzaToppings);
    });
    var pizzaSize = $('input:radio[name=pizza]:checked').val();
    var newPizza = new Pizza(pizzaSize, pizzaToppings);

    newPizza.pizzaCalc();
    console.log(newPizza);
    
  });
});
