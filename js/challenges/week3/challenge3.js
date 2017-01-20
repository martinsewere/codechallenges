/* Week 2 - Code Challenge 3
* Aim: An introduction to if statements
*/
console.log('-------------------------');
console.log('Week 3 - Challenge 3 has been included!');
console.log('-------------------------');

console.log('-------------------------');
console.log('Task 1 - Basic If Statment');
console.log('-------------------------');
/* Make a basic if statement.
* It should do the following:
* Check if numberOne is less than numberTwo.
* If it is then console.log('number One is less than number two');
*/

var numberOne = 3;
var numberTwo = 4;

/*if () {

}*/

console.log('-------------------------');
console.log('Task 2 - Advanced If Statment');
console.log('-------------------------');
/*
* If iLoveJavascript then console.log('Yes I love javascript');
* Otherwise log out: 'I don't love javascript
* Try changing iLoveJavascript to false, see what happens
*/
var iLoveJavascript = true;

/* if () {

} else {

} */

console.log('-------------------------');
console.log('Task 3 - Logical Opperators');
console.log('-------------------------');
/*
*  || <- OR Use: if (statementOne || statementTwo)
* If either or both statments are true then the condition is true.
*
* && <- AND Use: if (statementOne && statmentTwo)
* If both statements are true then the condition is true
*
* !condition <- NOT condition Use: if(!condition)
* Switches the condition needed
* Example:
* var value = false;
* if(!value) { this would run }
*/


var cheeseIsGreat = true;
var toastIsGreat = true;
var pizzaIsGreat = false;

// Write an if statment that is true when cheeseIsGreat OR pizzaIsGreat
// What do you expect to happen?



// Write an if statement that is true when cheeseIsGreat AND pizzaIsGreat.
// What do you expect to happen?


// Write an if statement that is true when (NOT)pizzaIsGreat
// What do you expect to happen?

// Write an if statement that is true when pizzaIsGreat AND cheeseIsGreat AND toastIsGreat
// What do you expect to happen?


console.log('-------------------------');
console.log('Task 4 - Advanced Logical Opperators');
console.log('-------------------------');
/*
* You can use brackets in logical operators
* Example:
* if ((cheeseIsGreat && pizzaIsGreat) || toastIsGreat) {
   // This would run
  }
  because: Javascript works out:
  cheeseIsGreat AND pizzaIsGreat -> FALSE
  so it does:
  if(FALSE OR toastIsGreat) // toast is great so it works!
*/

// Write an if statement that is true when:
// pizzaIsGreat AND (toast or cheese is great)
// What do you expect o happen?
