class Person{
  constructor(firstName,lastName){
    this.firstName  = firstName;
    this.lastName = lastName;
  }
}

const heroPerson = new Person('rashed','ryhan');
const friendlyPerson = new Person ('Jubair','Mehedi');
console.log('friendlyPerson :>> ', friendlyPerson);
console.log('heroPerson :>> ', heroPerson);



function Person1(firstName,lastName)
{
  this.firstName=firstName;
  this.lastName=lastName;
}
const oldPerson = new Person1 ('Grand','Papa');
console.log('oldPerson :>> ', oldPerson);