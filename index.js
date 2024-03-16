"use strict";
// var - from begining of the js
// const let - from ES6 onwards
// let - block scope
// const - block scope
// var - function scope
// types in javascript
// 1. number
// 2. string
// 3. boolean
// 4. undefined
// 5. null
// 6. bigint
// 7. symbol
// 8. function
// 9. object
// const sym = Symbol("hello");
// console.log(typeof sym);
// const obj = Object("hello");
// console.log(typeof obj);

// let bigint = BigInt(123464664)
// console.log(Math.pow(2, 53) - 1); // 9007199254740991

// typecasting
// let str = '123';
// console.log(typeof str);
// // str = Number(str);
// str = +"10";
// console.log(typeof str);
// console.log(str);

// let number = 123;
// console.log(typeof number);
// // number = String(number);
// number = number + "10";
// console.log(number);

// let bool = true;
// console.log(typeof bool);
// false == 0 ? console.log("true") : console.log("false");
// true == 1 ? console.log("true") : console.log("false");

// var salary = null;
// var age;

// console.log(salary, age);

// console.log(new Date());
// console.log(Date());
// let sum = function() {
//     return arguments[0] + 0;
//   }

//   sum = function() {
//     return arguments[0] + 10;
//   };
// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(88, 55));


let obj = {
  name: "John",
  age: 30,
  "likes birds": true,
  1: "hello",
  true: "TRUE",
  this: "Current Context",
};
console.log(obj["likes birds"]);
console.log(obj["1"]);
console.log(obj[true]);
console.log(obj["this"]);

