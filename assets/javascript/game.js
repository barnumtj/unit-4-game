var randomNumber;
var randomImageNumber;
var totalScore;
var playerScore;
var wins = 0
var losses = 0
var blueCrystal;
var redCrystal;
var greenCrystal;
var pinkCrystal;
 
function reset() {
  totalScore = [];
  displayTotal();
  randomNumber = 1 + Math.floor(Math.random() * 51) + 69;
  randomImageNumber = 1 + Math.floor(Math.random() * 100);
  


// sets random number into HTML
$(".randomNumber").html(randomNumber)

blueCrystal = Math.floor(Math.random() * 11) + 1;

redCrystal = Math.floor(Math.random() * 11) + 1;

greenCrystal = Math.floor(Math.random() * 11) + 1;

pinkCrystal = Math.floor(Math.random() * 11) + 1;

}

function checkValue() {
  if (playerScore > randomNumber) {
    reset();
  } else if (playerScore === randomNumber) {
    reset();
  }
}

// adds number totalScore  array after image is clicked

$("#blue").click(function() {
    totalScore.push(blueCrystal)
    displayTotal()
    checkValue();
  });

  $("#red").click(function() {
    totalScore.push(redCrystal)
    displayTotal()
    checkValue();
  });

  $("#green").click(function() {
    totalScore.push(greenCrystal)
    displayTotal()
    checkValue();
  });

  $("#pink").click(function() {
   totalScore.push(pinkCrystal)
   displayTotal()
   checkValue();
  });

  reset();

  function displayTotal() {
    playerScore = 0;  //sets playerScore to 0 each time at the start of the function
    if(totalScore.length >= 1) { //if theres anything in the array
      for(var i = 0; i < totalScore.length; i++) { //loop through it and add it to playerScore
        playerScore += totalScore[i];
        
      }
    }


  $("#scoreCard").html(playerScore)
  if (randomNumber === playerScore) {
  wins++;
  $(".wins").html("Wins: " + wins)
  console.log(wins) }
  else if (playerScore > randomNumber)
  losses++;
  $(".losses").html("Losses: " + losses)
}

$("#scoreCard").html(playerScore)




  




