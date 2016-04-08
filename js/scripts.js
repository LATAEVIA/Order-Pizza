// Business Logic
var pizzaToppings = [];
var addfour = 4
function Pizza (pizzaSize, pizzaToppings){
this.pizzaSize = pizzaSize;
this.pizzaToppings = pizzaToppings;
this.pizzaCost = 0;
}

Pizza.prototype.pizzaCalc = function() {
  if (this.pizzaSize === "personalPizza") {
    this.pizzaCost =+ 4;
  } else if (this.pizzaSize === "smallPizza") {
    this.pizzaCost =+ 6;
  } else if (this.pizzaSize === "mediumPizza") {
    this.pizzaCost =+ 8;
  } else if (this.pizzaSize === "largePizza") {
    this.pizzaCost =+ 10;
  } else {
    alert("Pick your pie primeter please!");
  }
  for (var i = 1; i <= this.pizzaToppings.length; i++) {
    this.pizzaCost = this.pizzaCost + .5;
  }
}

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
