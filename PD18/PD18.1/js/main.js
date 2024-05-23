"use strict";

const student = {
  firstName: "Maksim",
  lastName: "Kuznecov",
  age: 18,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(student.fullName());
