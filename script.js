import messageText, { multiply, subtract, sum } from "./helper.js";
// import { PI, sum as sumUtil } from "./utils.js";
import * as utils from "./utils.js";

//Array descructuring
const array = [9, () => console.log("hjhhjhjh")];

const [value, setValue] = array;

console.log(value);

setValue();

//Object Destructuring

const personObj = {
    firstName: "John",
    lastName: "Doe",
    age: 90,
    car: {
        brand: "Volvo",
    },
};

// const { age, ...rest } = person;

// console.log(rest);
// console.log(personObj.car.brand);

function personDetails({ firstName, lastName, age, car: { brand } }) {
    console.log(`${firstName} ${lastName} - ${age} - ${brand}`);
}

personDetails(personObj);

console.log(sum(12, 10));
console.log(utils.sum(1, 2, 4));
console.log(subtract(10, 4));
console.log(multiply(2, 10));
console.log(utils.PI);
console.log(messageText());

// console.log(userName);
