const normalPerson = {
  name: "kalimuddin",
  id: 231,
  salary: 15000,
  age: 45,
  chargeBill: function (amount,tax) {
    console.log(this);
    this.salary = this.salary - amount-tax;
    return this.salary;
  },
};

/* normalPerson.chargeBill(1000,100);
normalPerson.chargeBill(3000,300);
console.log("normalPerson.salary :>> ", normalPerson.salary); */

const heroPerson ={
  name:'hero',
  id:121,
  age:43,
  salary:20000
}

/* const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
heroChargeBill(1000,400);
console.log(heroPerson.salary);
console.log('heroPerson :>> ', heroPerson); */


// call

/* normalPerson.chargeBill.call(heroPerson,5000);
console.log('heroPerson.salary :>> ', heroPerson.salary); */

//apply

normalPerson.chargeBill.apply(heroPerson,[4000,400]);
console.log('heroPerson.salary :>> ', heroPerson.salary);
