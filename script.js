hello();

function hello() {
    console.log("Hello");
}

const arrowHello = (name, callbackFn) => {
    console.log("Hello " + name);

    setTimeout(callbackFn, 2000);
};

arrowHello("James", () => {
    console.log("khhhhj");
});

const firstName = "John";
const lastName = "Doe";

const fullName = `${firstName} ${lastName}`;

console.log(fullName);

const promise = new Promise((resolve, reject) => {
    const agree = false;

    setTimeout(() => {
        if (agree) {
            resolve("Agreed");
        } else {
            reject("Disagree");
        }
    }, 2000);
});

promise
    .then((response) => console.log(response))
    .catch((error) => console.log(error))
    .finally(() => console.log("hghghghg"));

// fetch("https://meowfacts.herokuapp.com/")
//     .then((response) => response.json())
//     .then((data) => console.log(data.data[0]));

async function fetchData() {
    console.log("Started fetching...");

    try {
        const response = await fetch("https://meowfacts.herokuapp.com/");

        const data = await response.json();

        console.log(data.data);
    } catch (error) {
        console.log(error.message);
    }

    console.log("Done fetching");
}
fetchData();

console.log("End of file");
