"use strict";

function newFunction() {
  const newPerson = firstPerson;
  return newPerson;
}

const firstPerson = {
  firstName: "Maksim",
  lastName: "Kuznecov",
  age: 20,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
console.log(firstPerson);

const secondPerson = newFunction();
secondPerson.firstName = "Nikita";
secondPerson.age = 22;
console.log(secondPerson);
