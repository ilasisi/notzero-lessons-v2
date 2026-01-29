//Event Listeners

//onclick
//ondblclick
//onmouseup
//onmousedown
//oncontextmenu
//onmouseenter
//onmouseover
//onmouseleave
//onmouseout

//Form events
//oninput
//onkeyup
//onkeydown
//onfocus
//onblur
//onchange
//onselect
//onsubmit
//oninvalid

//draggable="true"
//ondrag
//ondragend
//ondragover
//ondragstart
//ondragleave
//ondrop

//window event
//load
//copy
//cut
//offline
//online

const incEl = document.querySelector(".inc");
const decEl = document.querySelector(".dec");
const numEl = document.querySelector(".number");
const dblEl = document.querySelector(".dblbtn");
const messageEl = document.querySelector(".message");
const selectEl = document.querySelector(".select");

const title = document.querySelector(".title");
const description = document.querySelector(".description");

incEl.addEventListener("click", increment);
decEl.addEventListener("click", decrement);

dblEl.addEventListener("dblclick", function () {
    console.log("Double clicked!");
});

let number = 0;

function increment() {
    number += 1;
    numEl.textContent = number;
}

function decrement() {
    number -= 1;
    numEl.textContent = number;
}

// document.addEventListener("mouseup", (event) => {
//     console.log(event);
// });

// document.addEventListener("mousedown", (event) => {
//     console.log(event);
// });

// document.addEventListener("contextmenu", (event) => {
//     console.log(event);
// });

// title.addEventListener("mouseenter", (event) => {
//     console.log(event);
//     description.style.display = "block";
// });

// title.addEventListener("mouseleave", (event) => {
//     description.style.display = "none";
// });

// messageEl.addEventListener("input", (event) => {
//     const message = event.target.value;
//     document.querySelector(".text").textContent = message;
// });

// messageEl.addEventListener("keyup", (event) => {
//     const message = event.target.value;
//     console.log(message);
// });

// messageEl.addEventListener("keydown", (event) => {
//     const message = event.target.value;
//     console.log(message);
// });

// messageEl.addEventListener("keyup", (event) => {
//     const message = event.target.value;

//     if (event.key === "Enter") {
//         alert(message);
//     }
// });

// messageEl.focus();

// messageEl.addEventListener("focus", () => {
//     console.log("Focused");
// });

// messageEl.addEventListener("blur", () => {
//     console.log("Unfocused");
// });

// messageEl.addEventListener("select", (event) => {
//     console.log(event);
// });

// selectEl.addEventListener("change", (event) => {
//     console.log(event.target.value);
// });

document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();

    console.log("Submitted");
});

messageEl.addEventListener("invalid", (event) => {
    event.preventDefault();
    messageEl.style.borderColor = "red";
});

// document.querySelector("h5").addEventListener("drag", (event) => {
//     console.log(event.clientX, event.clientY);
// });

// document.querySelector("h5").addEventListener("dragstart", (event) => {
//     console.log(event);
// });

// document.querySelector("h5").addEventListener("dragend", (event) => {
//     console.log(event);
// });

// window.addEventListener("copy", (event) => {
//     console.log(event);
// });

// window.addEventListener("cut", (event) => {
//     console.log(event);
// });

window.addEventListener("offline", (event) => {
    console.log("You are offline");
});

window.addEventListener("online", (event) => {
    console.log("You are online");
});
