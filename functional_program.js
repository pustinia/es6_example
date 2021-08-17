"use strict";
// https://github.com/leonardomso/33-js-concepts

// pure functions

let PI = 3.14

const calculateAreaNotPure = (radius) => radius * radius * PI;
console.log(`The results is.. ${calculateAreaNotPure(10)}`);  // not pure...

const calculateAreaPure = (radius , pi) => radius * radius * pi;
console.log(`The results is.. ${calculateAreaPure(10, PI)}`);  // is pure...


// First-Class Citizen Functions.
// set functions in function
function executeFunctions(xNum, yNum) {
    const add = (x, y) => x + y;
    console.log(`sum ${add(xNum, yNum)}`);
}

executeFunctions(1,2);

// Higher-Order Functions
// function as argument
function greaterThan(n){
    return x => x > n;
}
let greaterThanTwo = greaterThan(2);
console.log(greaterThanTwo(5));

// Function Composition
// simplify and compress your functions by taking functions as an argument and return an output

// monads

// doesnt have side-effects
// 