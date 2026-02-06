//Callback function
function greet(name, callback) {
    console.log("Hello " + name);

    callback();
}

greet("Doe", () => console.log("Hello callback"));

const date = document.querySelector(".date");

setInterval(() => {
    date.textContent = new Date().toLocaleTimeString();
}, 1000);

//Promises
const promise = new Promise((resolve, reject) => {
    const agree = true;

    if (agree) {
        resolve({ success: true, data: { name: "John" } });
    } else {
        reject("Not agree");
    }
});

promise
    .then((value) => console.log(value))
    .catch((error) => console.log(error))
    .finally(() => console.log("fulfiled"));

const ul = document.querySelector(".list");
const loading = document.querySelector(".loading");

// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => {
//         if (response.ok) {
//             return response.json();
//         } else {
//             throw new Error("Error from API");
//         }
//     })
//     .then((response) => {
//         response.forEach((post) => {
//             const li = document.createElement("li");

//             li.innerHTML = `${post.id}: ${post.title}`;

//             ul.appendChild(li);
//         });
//     })
//     .catch((error) => console.log(error.message))
//     .finally(() => {
//         loading.style.display = "none";
//     });

//Async/Await
// function doSomething() {
//     console.log("Start");
//     for (i = 0; i < 1e9; i++) {}
//     console.log("End");
// }

async function doSomethingAsync() {
    console.log("Start");

    await new Promise((resolve) => setTimeout(resolve, 10000));

    console.log("End");
}

console.log("First");
doSomethingAsync();
console.log("Last");

async function fetchPost() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts",
        );

        if (!response.ok) {
            throw new Error("Failed");
        }

        const posts = await response.json();

        posts.forEach((post) => {
            const li = document.createElement("li");

            li.innerHTML = `${post.id}: ${post.title}`;

            ul.appendChild(li);
        });
    } catch (error) {
        console.log(error.message);
    } finally {
        loading.style.display = "none";
    }
}

fetchPost();

console.log("hjsghsghhgs");
