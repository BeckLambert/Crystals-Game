//   Global Variables
var targetScore = "";
var roundScore = "";
var wins = "";
var losses = "";
// var crystals = {
//     crystal1: {
//         val: '',
//         name: ''
//     }
// }

// The player will be shown a random number at the start of the game between 19 - 120..
     function startGame() {
        targetScore = 19 + Math.floor(Math.random() * 121);
        console.log("Target Score: " + targetScore);
        $("#target-score").text("Target Score: " + targetScore);
     };

// When the player clicks on a crystal, it will add a specific amount of points to the player's total score with a random hidden value between 1 - 12.
$(".crystals").on("click", function() {
    alert("clicked!");
});
// When they do click one, update the player's score counter.
//     function addToRoundScore() {}


// The player wins if their total score matches the random number from the beginning of the game.
// The player loses if their score goes above the random number.
// The app should show the number of games the player wins and loses. 
 //     function checkIfWon() {}



// The game restarts whenever the player wins or loses.
// When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
//     function gameReset() {}




   
      
