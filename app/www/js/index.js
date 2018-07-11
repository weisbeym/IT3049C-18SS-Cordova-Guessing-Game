const begin = document.getElementById("begin");
const playButton = document.getElementById("playButton");
const reset = document.getElementById("reset");
const resetButton = document.getElementById("resetButton");
const game = document.getElementById("game");
const number = document.getElementById("number");
const guess = document.getElementById("guess");
const input = document.getElementById("input");
let rand = Math.floor(Math.random() * 11);
let count;

playButton.addEventListener("click", function(){
    begin.classList.add("hidden");
    game.classList.remove("hidden");
});

function init() {
    // reset couter
    count = 0;
    // get a random number from 0 - 10
    rand = Math.floor(Math.random() * 11);
    // display random number
    number.innerHTML = `<strong>${rand}</strong>`;
    console.log(rand);
    console.log(input.value);
};

guess.addEventListener("submit", function(event){
    // prevent reload 
    event.preventDefault();

    // get the inputted value
    const inputVal = input.value;

    // if the user guessed wrong tell them and increment the counter
    // if they are right, tell them they won and in how many turns plus display the reset
    if(inputVal != rand) {
        alert("Wrong! try again :)");
        count++;
    } else if(inputVal == rand) {
        alert(`you Won! It only took ${count} turns.`);
        reset.classList.remove("hidden");
    }

});

resetButton.addEventListener("click", () => {
    reset.classList.add("hidden");
    init();
});
        
// initiat the app 
document.addEventListener("deviceready", init);