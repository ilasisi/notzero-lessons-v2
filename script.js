//DOM Selection

//getElementById('hello') css - #hello {} returns Node
const h1 = document.getElementById("hello");
h1.style.color = "red";
h1.classList.toggle("bg-blue");

//getElementByClassName('hello') css - .hello {} returns HTMLCollection
const classEl = document.getElementsByClassName("class");

const classElArray = Array.from(classEl);

classElArray.forEach((el) => {
    el.style.color = "red";
});

// for (let i = 0; i < classEl.length; i++) {
//     const el = classEl[i];

//     el.style.color = "red";
// }

//getElementByTagName('p') css - p {} returns HTMLCollection
const divEl = document.getElementsByTagName("div");
console.log(divEl);

//querySelector('.container div h1') css - .container div h1 {} //returns Node
const classEls = document.querySelector("#container div h1");
classEls.style.color = "green";
// console.log(classEls);

//querySelectorAll('.container div h1') css - .container div h1 {} returns NodeList

const queryAll = document.querySelectorAll("#container div h1");
const fn = (el) => {
    el.style.textDecoration = "underline";
};

queryAll.forEach(fn);

const list = document.querySelector(".list");
list.innerHTML = `
<li>List 1</li>
<li>List 2</li>
`;

const bulb = document.getElementById("bulb");

const on = () => {
    bulb.src = "./images/bulb-on.gif";
    bulb.alt = "Bulb on";
};

const off = () => {
    bulb.src = "./images/bulb-off.gif";
    bulb.alt = "Bulb off";
};

h1.className += " classname";

console.log(h1.className);

console.log(h1.classList);

const fruits = ["Orange", "Pineapple", "Apple", "Banana"];

const ul = document.createElement("ul");
ul.innerHTML = "<h3>Fruits</h3>";

fruits.forEach((fruit, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1} - ${fruit}`;

    ul.appendChild(li);
});

document.body.appendChild(ul);
