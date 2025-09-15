// let myButton = document.querySelector("#my-button");
// myButton.addEventListener("click", toggleMe);
// let myImg = document.querySelector("#myImage");
// let helloMsg = document.querySelector("#hello");
// myImg.addEventListener("mouseover", addMe);
// myImg.addEventListener("mouseout", removeMe);
// function addMe() {
//   myImg.classList.add("round");
// }
// function removeMe() {
//   myImg.classList.remove("round");
// }
// function toggleMe() {
//   let myName = myImg.dataset.catname;
//   helloMsg.textContent = "Hi I am " + myName;
//   myImg.classList.toggle("round");
// }

// let allParagraphs = document.querySelectorAll("p");
// //allParagraphs.forEach(changeColor);

// function changeColor(item) {
//   //console.log(item);
//   item.style.backgroundColor = "limegreen";
//   // item.textContent = "New text content";
// }
// console.log(allParagraphs);

// const myStatus = document.getElementById("status");
// console.log(myStatus);
// myStatus.addEventListener("mouseover", function () {
//   myStatus.style.backgroundColor = "lightgreen";
// });
// myStatus.addEventListener("mouseout", function () {
//   myStatus.style.backgroundColor = "lightblue";
// });


// find certain properties
let windowWidth = window.innerWidth;
console.log(windowWidth);
// find infomation about url location
// console.log(window.location);
// find html ele
// console.log(document.title);
// set the tittle
// document.title =" new tittle"
// document.body.style.backgroundColor= "Red";
// navigator can find more details of hardware/software -> language, userAgent(computer browser info)
// console.log(window.navigator.userAgent);

const myImage = document.querySelector("#myImage");
console.log(myImage);

const helloParagraph = document.querySelector("#hello");
console.log(helloParagraph);

const myParagraph = document.querySelectorAll("p");
console.log(myParagraph);

myParagraph.forEach(changeParaBG);

function changeParaBG(item){
    console.log(item);
    item.style.backgroundColor="red"
}
// first find content hello p
console.log(helloParagraph.textContent);

function updateCatName(){
    console.log("Hello");
helloParagraph.textContent = `Hi! My name is ${myImage.dataset.catname}`;
// classList.add() add a class
// classList.remove
// classList.toggle 
myImage.classList.toggle("round");
}

// create element 
const newPara = document.createElement("p");
newPara.textContent = "I'm a new paragraph!";
newPara.classList.add("coral-box");
// outerSection.appendChild(newPara);
// myButton.appendChild(newPara);

// find outer section
const outerSection = document.querySelector(".outer");
const myButton = document.querySelector("#my-button");

myButton.addEventListener("click", function(){
    alert("button is clicked");
});

// look at para in console
console.log(newPara);

const myHeader = document.querySelector("header");
// find my cat name
let catName = myImage.dataset.catname;
myHeader.innerHTML += `<h2>I think ${catName} pretty cool </h2>`;

let x = 0;
x = x+2;
x += 4;

// ADD MOUSEenter eventlistener to img
myImage.addEventListener("mouseenter", addRoundClass);

function addRoundClass(){
    myImage.classList.add("round");
};

myImage.removeEventListener("mouseleave", removeRoundClass);

function removeRoundClass(){
    myImage.classList.remove("round");
}