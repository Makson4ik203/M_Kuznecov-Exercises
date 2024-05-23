"use strict";

function firstFunction() {
  let count = 0;
  for (let x in firstPerson) {
    if (firstPerson[x] == secondPerson[x]) {
      count++;
    }
  }
  if (count == 3) {
    console.log("=)");
  } else {
    console.log("=(");
  }
}

const firstPerson = {
  firstName: "Maksim",
  lastName: "Kuznecov",
  age: 20,
};

const secondPerson = {
  firstName: "Nikita",
  lastName: "Bebrovas",
  age: 25,
};

firstFunction();
