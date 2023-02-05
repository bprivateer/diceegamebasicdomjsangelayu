

//Dice one img1

  var randomNumber1 = Math.floor(Math.random()*6) + 1;

  var randomDiceImg1 = "images/dice" + randomNumber1 + ".png";

  var dice1 = document.querySelectorAll("img")[0];



  dice1.setAttribute("src", randomDiceImg1);


//Dice 2 image

  var dice2 = document.querySelectorAll("img")[1];

  var randomNumber2 = Math.floor(Math.random()*6) + 1;

  var randomDiceImg2 = "images/dice"+randomNumber2+".png";

  dice2.setAttribute("src", randomDiceImg2);

// displays the winner text

  var winner = document.querySelector("h2");


// this will show the winner

function whoWon (){
  if(randomNumber1 > randomNumber2){
    return winner.textContent="Dice 1 Wins!";
  } else if( randomNumber2 > randomNumber1){
    return winner.textContent="Dice 2 Wins!";
  } else{
    return winner.textContent="It's a draw!";
  }
}

whoWon();
