function testChallenge1Task1(myPet) {
  if (!myPet) {
    console.log('Your pet does not exist!');
    return;
  }

  if (!myPet.hasOwnProperty('name')) {
    console.log('Your pet does not have a name!')
    return;
  } else {
    if (typeof myPet.name !== 'string') {
      console.log('Your pets name is not a string!');
      return;
    }
  }

  if (!myPet.hasOwnProperty('age')) {
    console.log('Your pet does not have a age!')
    return;
  } else {
    if (typeof myPet.age !== 'number') {
      console.log('Your pets age is not a number!');
      return;
    }
  }

  if (!myPet.hasOwnProperty('animal')) {
    console.log('Your pet does not have the property animal!');
    return;
  } else {
    if (typeof myPet.animal !== 'string') {
      console.log('Your pets animal type is not a string!');
      return;
    }
  }

  if (!myPet.hasOwnProperty('hasBeenFed')) {
    console.log('Your pet does not have the property hasBeenFed!');
    return;
  } else {
    if (typeof myPet.hasBeenFed !== 'boolean') {
      console.log('Your pets hasBeenFed type is not a boolean!');
      return;
    }
  }

  console.log('Well done your pet is all correct. Move onto the next task!');
}

function testChallenge1Task2(myPet) {
  if (!myPet) {
    return;
  }
  if (myPet.hasOwnProperty('hasBeenFed')) {
    if (myPet.hasBeenFed === true) {
      console.log('Well done, Toby has been fed. Move onto the next task!');
    } else {
      console.log('Toby is still hungry. Try again!');
    }
  }
}
