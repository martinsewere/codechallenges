/* Week 4 - Code Challenge 4
* Aim: For loops
*/
console.log('-------------------------');
console.log('Week 4 - Challenge 4 has been included!');
console.log('-------------------------');
/*
* Task 1 - Write a for in loop for the variable product
*/

var product = {
  name: 'broadband',
  price: 30,
  discount: 10,
  showDiscount: true,
  tags: ['great value', 'awesome product']
};


/*
* Task 2 - Nested loops
* Nested loops are not great because they take along time to run (depending on the number of loops)
* This task is to show you that you can do nested loops, but should be
* done with caution
* Create a for loop to loop through products. Within this for loop create a for in loop
* to console log out the current products values.
*/

var products = [
  {
    name: 'broadband',
    price: 30,
    discount: 10,
    showDiscount: true,
    tags: ['great value', 'awesome product']
  },
  {
    name: 'infinity',
    price: 40,
    discount: 2,
    showDiscount: false,
    tags: ['superfaster', 'great for browsing']
  },
  {
    name: 'tv',
    price: 10,
    discount: 0,
    showDiscount: false,
    tags: ['tv', 'great watching']
  },
];
