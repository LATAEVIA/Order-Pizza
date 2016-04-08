// Business Logic
var pizzaToppings = [];

function Pizza (pizzaSize, pizzaToppings){
this.pizzaSize = pizzaSize;
this.pizzaToppings = pizzaToppings;
}


// User Interface Logic
$(document).ready(function(){

  $('form.pizza-order').submit(function(event){
    event.preventDefault();
    $("input[type=checkbox]:checked").each(function(){
        pizzaToppings.push($(this).val());
    });
    var pizzaSize = $('input:radio[name=pizza]:checked').val();
    var newPizza = new Pizza(pizzaSize, pizzaToppings);
  });
});
