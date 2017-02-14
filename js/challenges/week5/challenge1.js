/*
  Week 5 - Code Challenge 1
  Aim: Understanding debugging
*/
console.log('-------------------------');
console.log('Week 5 - Challenge 1 has been included!');
console.log('-------------------------');

/*
  Task 1
  Oh no! The code below is caused an error. Fix it before Ray goes crazy!
  Psst - there may be more than one issue...
*/

var people = [
  {
    firstName: 'David',
    age: 25
  },
  {
    firstName: 'Josh',
    age: 24
  },
  {
    firstName: 'Thomas',
    age: 24
  }
];

function getDavid(person) {
  if (person.name === 'David' {
    return person;
  }
}

getDavid();

/*
  Task 2
  Ray is happy that you've found David but he has extended the scope.
  The code below attempts to make the code above more flexible but there seem
  to be some issues...
*/

function getPersonData(person, name, key) {
  if (person[key]) {
    return person[key];
  }

  return 'No data found';
}

getPersonData(people[2], age);


/*
  Task 3
  Uh oh...Legal have got in touch. We can't hold the ages of people.
  The code below attempts to remove the ages of people but for some reason
  it isn't working...
*/

function removePersonData(people, key) {
  people.forEach((person) => {
    person[keys] = null;
  });
}

removePersonData(people[1], 'age');
