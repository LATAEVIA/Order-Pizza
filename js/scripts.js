// Business Logic
var pizzaToppings = [];

function Pizza (pizzaSize, pizzaToppings){
this.pizzaSize = pizzaSize;
this.pizzaToppings = pizzaToppings;
this.pizzaCost = 0;
}

Pizza.prototype.pizzaCalc = function() {
  if (this.pizzaSize === "personal") {
    this.pizzaCost =+ 5;
  } else if (this.pizzaSize === "small") {
    this.pizzaCost =+ 7;
  } else if (this.pizzaSize === "medium") {
    this.pizzaCost =+ 9;
  } else if (this.pizzaSize === "large") {
    this.pizzaCost =+ 11;
  } else {
    alert("Pick your pie primeter please!");
  }
  for (var i = 0; i < this.pizzaToppings.length; i++) {
    this.pizzaCost = this.pizzaCost + .50;
  }
}

// User Interface Logic
$(document).ready(function(){

  $('form.pizza-order').submit(function(event){

    $("input[type=checkbox]:checked").each(function(){
        pizzaToppings.push($(this).val());
        console.log(pizzaToppings);
    });
    var pizzaSize = $('input:radio[name=pizza]:checked').val();
    var newPizza = new Pizza(pizzaSize, pizzaToppings);

    newPizza.pizzaCalc();
    console.log(newPizza);

    $("#priceHide").show();
    $("#priceOutput").text(newPizza.pizzaCost.toFixed(2));

    // $("#sizeHide").show();
    // $("#sizeOutput").text(newPizza.pizzaSize);
    // if (newPizza.pizzaToppings.length >= 1) {
    //   $("#toppingsHide").show();
    //   $("#outputToppings li").each(function(index) {
    //     $(this).append(newPizza.pizzaToppings[index]);
    //     console.log(index);
    //   });
    // } else {
    //   $("#toppingsOutput").append("<li>" + "Would you like to add toppings?" + "</li>");
    // }

    event.preventDefault();
  });
});
// $("#toppingsOutput").append("<li><span id='toppingsOutput'>" + newPizza.pizzaToppings + "</span></li>");
// $("ul#outputToppings").append("<li><span id='toppingsOutput'>" + newPizza.pizzaCost + "</span></li>");
