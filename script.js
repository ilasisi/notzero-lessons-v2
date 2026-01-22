//Operators

//Arithmetic
const loanAmount = 2_000_000;

let interest = 0.075;

const tenor = 6;

if (tenor <= 0 || tenor > 24) {
    throw Error("Please enter a valid tenor");
}

//if...else if ... else
// if (tenor > 3 && tenor < 6) {
//     interest = 0.1;
// } else if (tenor >= 6 && tenor < 9) {
//     interest = 0.12;
// } else if (tenor >= 9 && tenor < 12) {
//     interest = 0.15;
// } else if (tenor >= 12) {
//     interest = 0.2;
// } else {
//     interest = 0.075;
// }

switch (tenor) {
    case 6:
        interest = 0.1;
        break;
    case 9:
        interest = 0.12;
        break;
    case 12:
        interest = 0.15;
        break;
    default: {
        interest = 0.075;
        break;
    }
}

console.log(interest);

const vat = 2.5 / 100;
const managementFee = 1 / 100;

const interestAmount = loanAmount * interest;
const vatAmount = (loanAmount - interestAmount) * vat;
const managementAmount = loanAmount * managementFee;

const totalRepaymentAmount =
    loanAmount + interestAmount + vatAmount + managementAmount;

console.log(
    "Total repayment amount",
    Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(totalRepaymentAmount),
);

console.log(
    "Interest amount",
    Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(interestAmount),
);

console.log(
    "VAT amout",
    Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(vatAmount),
);

console.log(
    "Managemenent fee",
    Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(managementAmount),
);

const number = 9;

console.log(number % 2 === 0 ? "Even" : "Odd");

console.log(2 ** 3);

//Assignment
let a = 12;
// a = a + 20;
a += 20;

console.log(a);

let message = "Hello, Good ";

const timeOfDay = "afternoon";

message += timeOfDay;

console.log(message);

//Comparison
const b = 30;
const c = 12;
const d = 21;

// if (typeof d !== "number") {
//     throw Error("Not a number");
// }

console.log(c == d); //loose comparison
console.log(c === d); //strict comparison

console.log(c != d); //loose comparison
console.log(c == d); //strict comparison

console.log(d > c); // can only be used for numeric values
console.log(d < c); // can only be used for numeric values
console.log(d >= c); // can only be used for numeric values
console.log(d <= c); // can only be used for numeric values

console.log(!true);

console.log(d + c);

//Logical && - ||
console.log(d > 20 && (a === b || c < 20));

//Conditional Statement
//if
if (c == d) {
    console.log("Is equal");
} else {
    //if...else
    console.log("Not equal");
}

c < d ? console.log("Is equal") : console.log("Not equal");
//ternary
//switch
