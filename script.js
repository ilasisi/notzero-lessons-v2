//JS Variable

//var is deprecated and is no more recommended
//let and const
//let - can not be redeclare but can be re-assign
//const - can not be redeclare and can not be re-assign

//let
let fullName1 = "James";
fullName1 = "Doe";

//const
const userAge = 20;

//userAge = 20; // this will. throw an error

let name = "James",
    email; //this works with let and not with const

const a = 100;
const b = 200;
let total = 100;

total = a + b;

console.log(total);

//Data types
//Number
//String
//Boolean
//Object
//Array
//Null
//Undefined
//Symbol
//Set
//Map

//number
const age = 10;
const pi = 3.14;
console.log(typeof age, typeof pi);

//string
const firstName = 'John "25"';
const lastName = "Doe";
const fullName = firstName + " - " + lastName + " " + "Details";
const fullName2 = `${firstName} - ${lastName} Details`;
console.log(fullName2);
console.log(typeof fullName2);

const multiLine = `Hello,
How are you?
`;

console.log(multiLine);

//boolean
const isEligible = false;
const isDone = true;

console.log(typeof isDone, typeof isEligible);

//Object
const car = {
    brand: "Toyota",
    chasisNo: 1234,
    isNew: false,
};

console.log(typeof car.brand);
console.log(typeof car);

//Array
const array = [1, "James", true, fullName, car, { name: "John" }];
console.log(array);
console.log(typeof array);

//Null
let empty = null;
console.log(typeof empty);

//Undefined
let notDefined = undefined;
console.log(typeof notDefined);
