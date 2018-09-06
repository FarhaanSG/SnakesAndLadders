var dice1 = document.getElementById("dice1");
var dice2 = document.getElementById("dice2");

var diceMessage1 = document.getElementById("status1");
var diceMessage2 = document.getElementById("status2");

var first = true;
var first2 = true;

var players = [];
var whoseTurn = 0;
players[0] = "Player One's Turn";
players[1] = "Player Two's Turn";


var playerOne = 0;
var playerTwo = 0;
var gameOver = false;

document.getElementsByClassName('playerTurn')[0].innerHTML = players[whoseTurn];

function rollDice1(){
  // if (gameOver == false) {
    var d1 = Math.floor(Math.random() * 6) + 1;
    dice1.innerHTML = d1;
    diceMessage1.innerHTML = "You rolled "+d1+".";

    // if (whoseTurn = 0) {
      if (first){
        if(d1 == 6){
          diceMessage1.textContent = "You rolled a 6!";
          document.getElementById('1').className += ' piece1';
          console.log(document.getElementById(1));
          playerOne = 1;
          first = false;
          // else if(d1 !== 6){
          //   document.getElementById('1').className += ' piece1';
          //   console.log(document.getElementById(1));
          // whoeTurn = 1;
          // playerTwo = 1;
          // }
        }
      }
      else{
        document.getElementById(String(playerOne)).className = 'a';
        console.log(d1);
        console.log(playerOne);
        playerOne = playerOne + d1;
        console.log(playerOne);
        document.getElementById(String(playerOne)).className += ' piece1';
      }
    // }
    // else {
    //   document.getElementById('1').className += ' piece2';
    //   console.log(document.getElementById(1));
    //   whoeTurn = 2;
    //   playerTwo = 2;
    // }
  // }
}




function rollDice2(){
  var d2 = Math.floor(Math.random() * 6) + 1;
  dice2.innerHTML = d2;
  diceMessage2.innerHTML = "You rolled "+d2+".";

  if (first2){
    if(d2 == 6){
      diceMessage2.textContent = "You rolled a 6!";
      document.getElementById('1').className += ' piece2';
      console.log(document.getElementById(1));
      playerTwo = 1;
      first2 = false;
      // else if(d1 !== 6){
      //   document.getElementById('1').className += ' piece1';
      //   console.log(document.getElementById(1));
      whoeTurn = 0;
      playerOne = 1;
      // }
    }
  }
  else{
    document.getElementById(String(playerTwo)).className = 'a';
    console.log(d2);
    console.log(playerTwo);
    playerTwo = playerTwo + d2;
    console.log(playerTwo);
    document.getElementById(String(playerTwo)).className += ' piece2';
  }
}
