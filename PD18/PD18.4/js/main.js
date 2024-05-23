"use strict";

const person = {
  name: "Maksim",
  age: 18,
  gender: "Male",
  city: "Vilnius",
};

function printPersonProperties(person) {
  for (let property in person) {
    if (person.hasOwnProperty(property)) {
      console.log(property + ": " + person[property]);
    }
  }
}

printPersonProperties(person);
