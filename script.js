//Loops

//for
let array = [];
let brands = ["Google", "Meta", "Apple", "Amazon", "Netflix"];

// for (let i = 0; i < 9; i++) {
//     array.push("Lesson" + " " + (i + 1));
// }

// for (let i = 0; i < brands.length; i++) {
//     console.log(brands[i]);
// }

//while
let i = 0;

while (i < 0) {
    array.push("Lesson" + " " + (i + 1));
    i++;
}

//do ... while
do {
    array.push("Lesson" + " " + (i + 1));
    i++;
} while (i < 9);

// console.log(array);

//for ... of //array
const fruits = ["Mango", "Orange", "Banana"];

// for (fruit of fruits) {
//     console.log(fruit);
// }

//for ... in // object
// const car = {
//     brand: "Toyota",
//     color: "Black",
//     chasisNo: "123-HNKDMS",
//     engine: 12762637627662,
// };

// for (key in car) {
//     console.log(key + ": " + car[key]);
// }

// for (key in brands) {
//     console.log(brands[key]);
// }

// const menu = [
//     {
//         name: "New Tab",
//         icon: "tab",
//         link: "https://www.tab.com",
//     },
//     {
//         name: "New Window",
//         icon: "window",
//         link: "https://www.window.com",
//     },
//     {
//         name: "New Incognito Mode",
//         icon: "incognito",
//         link: "https://www.incognito.com",
//     },
// ];

// for (item of menu) {
//     console.log(`${item.name} - ${item.icon} - ${item.link}`);
// }

//Functions
function greet(name, age, location) {
    console.log(
        `My name is ${name}, I am ${age} years old, living at ${location}`,
    );
}

const greet2 = function (name = "Guest") {
    return "Hello " + name;
};

const greet3 = () => {
    return 1 + 10;
};

const greet4 = () => 2 + 2;

greet("Bob", 20, "Lagos");
greet("James", 12, "Calabar");
greet("Doe", 45, "London");
greet("John", 62, "Ghana");

const sum = (a = 1, b = 2) => a + b;

console.log(greet3());
console.log(greet2());
console.log(greet4());

console.log(sum(10));

function loanShark(
    loanAmount,
    tenor,
    interest = 0.075,
    vat = 0.025,
    managementFee = 0.01,
) {
    if (tenor <= 0 || tenor > 24) {
        throw Error("Please enter a valid tenor");
    }

    if (tenor > 3 && tenor < 6) {
        interest = 0.1;
    } else if (tenor >= 6 && tenor < 9) {
        interest = 0.12;
    } else if (tenor >= 9 && tenor < 12) {
        interest = 0.15;
    } else if (tenor >= 12) {
        interest = 0.2;
    } else {
        interest = 0.075;
    }

    const interestAmount = loanAmount * interest;
    const vatAmount = (loanAmount - interestAmount) * vat;
    const managementAmount = loanAmount * managementFee;

    const totalRepaymentAmount =
        loanAmount + interestAmount + vatAmount + managementAmount;

    output("Total repayment amount", totalRepaymentAmount);
    output("Interest amount", interestAmount);
    output("VAT amount", vatAmount);
    output("Management fee", managementAmount);
}

loanShark(2_000_000, 5);
loanShark(2_000_000, 5, 0.05, 0.03);

function output(title, amount) {
    console.log(
        title,
        Intl.NumberFormat("en-NG", {
            style: "currency",
            currency: "NGN",
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(amount),
    );
}

function isOdd(number) {
    if (typeof number !== "number") {
        throw TypeError("A number is required");
    }
    return Math.abs(number) % 2 === 1;
}

const number = 12.9;

console.log(parseFloat(number) + 12);
