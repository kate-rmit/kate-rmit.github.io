const options = ["ROCK", "PAPER", "SCISSOR"];

const rockButton =document.querySelector("#rock-button");
const paperButton = document.querySelector("#paper-button");
const scissorButton = document.querySelector("#scissor-button");

const selection = document.querySelector("#selection");
const result = document.querySelector("#result");

rockButton.addEventListener("click", function(){
    checkResult(0);
});

paperButton.addEventListener("click", function(){
    checkResult(1);
});

scissorButton.addEventListener("click", function(){
    checkResult(2);
});

function checkResult(mySelection){
    let userSelection = options[mySelection];
    console.log(mySelection)
    let randomSelect= Math.floor( Math.random()*3);
    console.log(randomSelect);
    let computerSelection = option[randomSelect];

    selection.innerHTML =`
    <p id="my-choice">
    <span class="${userSelection.toLowerCase()}">You picked: ${userSelection}</span>
    </p>
      <p id="computer-choice">
    <span class="${computer.toLowerCase()}"> Computer picked: ${computer}</span>
    </p> `
}