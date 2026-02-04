//Array Methods

const numbers = [1, 2, 3, 5, 6, 7, 11, 55];
const brands = ["Google", "Meta", "Netflix", "Amazon"];
const arrayOfArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9, [10, 11, 12]],
];

//Array.length
// console.log(numbers.length);

//Array.toString()
// console.log(numbers.toString());

//Array.at()
// console.log(brands.at(0));

//Array.join()
// console.log(numbers.join("|"));

//Array.flat()
// console.log(arrayOfArray.flat().flat());

//Array.indexOf()
// console.log(brands.indexOf("Netflix"));

//Array.pop()
const fruits = ["Mango", "Guava", "Pineapple"];
// const removedFruit = fruits.pop();

// console.log(fruits);
// console.log(removedFruit);

//Array.push()
const fruits2 = ["Banana", "Apple", "Grape"];
// const newFruitLength = fruits2.push("Orange");

// console.log(fruits2);
// console.log(newFruitLength);

//Array.shift()
const fruits3 = ["Strawberry", "Carrot", "Cucumber"];
// const removedFruit3 = fruits3.shift();

// console.log(fruits3);
// console.log(removedFruit3);
//Array.unshift()
const fruits4 = ["Mango", "Guava", "Pineapple"];
// const newFruitLength2 = fruits4.unshift("Orange");

// console.log(fruits4);
// console.log(newFruitLength2);

//Array.concat()
const newFruits = fruits.concat(fruits2, fruits3);

// console.log(newFruits);

//Array.splice()
// fruits4[fruits4.length] = "new item";
fruits4.splice(1, 0, "Banana");

// console.log(fruits4);

//Array.slice()

const carBrands = ["Honda", "Toyota", "Volvo", "Tesla", "Benz"];

const topCarBrand = carBrands.slice(0, 3);
// console.log(topCarBrand);
// console.log(carBrands);

//Array.find()
const states = [
    { name: "Oyo", index: 1, assigned: true },
    { name: "Ogun", index: 2, assigned: false },
    { name: "Lagos", index: 3, assigned: false },
    { name: "Delta", index: 4, assigned: true },
    { name: "Oyo", index: 45, assigned: true },
];

// const state = states.find((state) => state.name === "Oyo");

// console.log(state);

// const toyota = carBrands.find((value) => value === "Toyota");
// console.log(toyota);

//Array.include()
// console.log(carBrands.includes("Toyota"));

//Array.some()
// const oyo = states.some((state) => state.name === "Oyo");

// console.log(oyo);

//Array.every()
// const assignedStates = states.every((state) => state.assigned === true);

// console.log(assignedStates);

//Array.filter()
const notAssignedState = states.filter((state) => state.assigned === false);

console.log(notAssignedState);

//Array.sort()
console.log(brands.sort());
//Array.reverse()
console.log(brands.reverse());
//Array.reduce()

//Array.forEach()
//Array.map()
