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

fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((response) => {
        if (response.ok) {
            response.forEach((post) => {
                const li = document.createElement("li");

                li.innerHTML = `${post.id}: ${post.title}`;

                ul.appendChild(li);
            });
        } else {
            throw new Error("Error from API");
        }
    })
    .catch((error) => console.log(error.message))
    .finally(() => {
        loading.style.display = "none";
    });
