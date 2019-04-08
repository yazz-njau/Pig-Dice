$(document).ready(function(){

  $("#roll").click(function(event){
var randomNumber = Math.floor(Math.random() * 6) + 1; //1 - 6
var playerOneImages = "images/dice"+randomNumber+".png";
var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1 - 6
var playerOneImages1 = "images/dice"+randomNumber1+".png";

document.querySelector('.img1').setAttribute('src', playerOneImages);
document.querySelector('.img2').setAttribute('src', playerOneImages1);


if (playerOneImages > playerOneImages1) {
  document.querySelector('h1').innerHTML = "Player 1 Win"
} else if (playerOneImages > playerOneImages1) {
  document.querySelector('h1').innerHTML = "Player 2 Win"
}else {
  document.querySelector('h1').innerHTML = 'Roll Again'
}
});
});

//The project code uses constructors in Javascript.
//The project makes use of prototypes in Javascript.
//The project implements one or more Javascript functions.
//The project separates the business logic code from the UI logic code.
//The web app uses bootstrap and media queries to make it fully responsive.
//The javascript code uses the correct syntax of camel case naming of variables. I.e var myVariable = "stores something"; instead of var my_var = "stores something", or, var MyVar = "stores something" , or,  var my-Var = "stores something"
