/* Week 3 - Code Challenge 1
* Aim: Recap what you learnt last week
*/
console.log('-------------------------');
console.log('Week 3 - Challenge 1 has been included!');
console.log('-------------------------');

// Make a variable called myPet. It should be an object and have the following:
// name: Toby, age: 2, animal: dog, hasBeenFed: false

var myPet;

testChallenge1Task1(myPet);

console.log('-------------------------');
console.log('Challenge 1 - Task 2- Feed your Pet');
console.log('-------------------------');
/*
* Toby has now been fed. Can you updated your pet below this line to
* ensure his record is kept up to date.
* NOTE: You do not need to update line 11. You can just update myPet below.
*/


testChallenge1Task2(myPet);


console.log('-------------------------');
console.log('Challenge 1 - Task 3- Vets');
console.log('-------------------------');
/*
* Below is a variable called animals. These are animals in a vet.
* animals is an array meaning you can access items like such: animals[0] (returns the first animal)
*/
var animals = [{
                name: 'Charlie',
                type: 'Cat'
              },
              {
                name: 'Ant',
                type: 'Lion'
              },
              {
                name: 'Phil',
                type: 'Developer'
              },
              {
                name: 'Lucy',
                type: 'Eagle'
              }];

// Can you console out the number of animals?
// Hint: in an array you can use arrayName.length to find the length


// From the animals array can you console out the name of the eagle?

// Can you add another animal to the array using the .push method?
// The animal should be an object with a name and a type.
