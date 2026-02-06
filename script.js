fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => {
        console.log(json);
    });

fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        title: "This is title",
        body: "This is body",
    }),
})
    .then((response) => response.json())
    .then((json) => {
        console.log(json);
    });

fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        title: "This is title",
        // body: "This is body",
    }),
})
    .then((response) => response.json())
    .then((json) => {
        console.log(json);
    });

fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PATCH",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        title: "This is title",
        body: "This is body",
    }),
})
    .then((response) => response.json())
    .then((json) => {
        console.log(json);
    });

fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
    headers: {
        "Content-Type": "application/json",
    },
})
    .then((response) => response.json())
    .then((json) => {
        console.log(json);
    });
