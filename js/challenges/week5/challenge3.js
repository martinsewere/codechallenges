/*
  Week 5 - Code Challenge 3
  Aim: Object manipulation
*/
console.log('-------------------------');
console.log('Week 5 - Challenge 3 has been included!');
console.log('-------------------------');

var product = {
  name: 'Unlimited Broadband',
  filters: ['broadband', 'unlimited'],
  price: 22,
  discount: 2,
  applyDiscount: true
};

/*
  Task 1
  Log whether product needs to apply the discount
*/


/*
  Task 2
  Log the full price of the product in the format £PRICE
*/

/*
  Task 3
  Complete the following function to work out the current price
  if a discount is applied or not.
*/

function getPriceData(product) {

}

var currentPrice = getPriceData(product);
console.log(currentPrice === 20);

/*
  Task 4
  Can you put product and newProduct into allProducts
*/
var allProducts = [],
  newProduct = {
    name: 'BT Infinity',
    filters: ['fibre'],
    price: 30,
    discount: 5,
    applyDiscount: false
};

console.log(allProducts.length === 2); // Should return true

/*
  Task 5
  Loop through all the products and log the product names
*/



/*
  Task 6
  Can you add a new product to the allProducts variable. It should be the following:
  The product is Unlimited BT Infinity, it has unlimited and fibre filters. It costs £45 normally but this week is £42.
*/

console.log(allProducts.length === 3); // Should return true

/*
  Task 7
  Loop through all the keys avaiable for one product and log the keys.
  Hint: Remember objects are effectively key-value pairs.
*/


/*
  BONUS
  Can you filter the allProducts variable to provide only products that are 'unlimited'.
  This will be using the filters property of the objects.
*/
