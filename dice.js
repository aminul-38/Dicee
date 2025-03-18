/* this function will be called when Roll button is clicked */
function roll() {
  /* this function will generate two random numberber (1 to 6) for each player */
  let playerOne = (Math.floor(Math.random() * 100) % 6) + 1;
  let playerTwo = Math.floor(Math.random() * 6) + 1;
  makeDice(playerOne, "first");
  makeDice(playerTwo, "second");

  /* Changing result */
  if (playerOne > playerTwo) {
    document.getElementById("result").innerHTML = "Player 1 Win !";
  } else if (playerTwo > playerOne) {
    document.getElementById("result").innerHTML = "Player 2 Win !";
  } else {
    document.getElementById("result").innerHTML = "Draw !";
  }
}

/* this function select which numberber is to be placed on the dice */
function makeDice(number, playerNo) {
  if (number === 1) {
    one(playerNo);
  } else if (number === 2) {
    two(playerNo);
  } else if (number === 3) {
    three(playerNo);
  } else if (number === 4) {
    four(playerNo);
  } else if (number === 5) {
    five(playerNo);
  } else {
    six(playerNo);
  }
}

/* individual dice creator functions */
function one(playerNo) {
  document.getElementById(playerNo + "One").style.visibility = "hidden";
  document.getElementById(playerNo + "Two").style.visibility = "hidden";
  document.getElementById(playerNo + "Three").style.visibility = "hidden";
  document.getElementById(playerNo + "Four").style.visibility = "hidden";
  document.getElementById(playerNo + "Five").style.visibility = "visible";
  document.getElementById(playerNo + "Six").style.visibility = "hidden";
  document.getElementById(playerNo + "Seven").style.visibility = "hidden";
  document.getElementById(playerNo + "Eight").style.visibility = "hidden";
  document.getElementById(playerNo + "Nine").style.visibility = "hidden";
}
function two(playerNo) {
  document.getElementById(playerNo + "One").style.visibility = "hidden";
  document.getElementById(playerNo + "Two").style.visibility = "hidden";
  document.getElementById(playerNo + "Three").style.visibility = "visible";
  document.getElementById(playerNo + "Four").style.visibility = "hidden";
  document.getElementById(playerNo + "Five").style.visibility = "hidden";
  document.getElementById(playerNo + "Six").style.visibility = "hidden";
  document.getElementById(playerNo + "Seven").style.visibility = "visible";
  document.getElementById(playerNo + "Eight").style.visibility = "hidden";
  document.getElementById(playerNo + "Nine").style.visibility = "hidden";
}
function three(playerNo) {
  document.getElementById(playerNo + "One").style.visibility = "hidden";
  document.getElementById(playerNo + "Two").style.visibility = "hidden";
  document.getElementById(playerNo + "Three").style.visibility = "visible";
  document.getElementById(playerNo + "Four").style.visibility = "hidden";
  document.getElementById(playerNo + "Five").style.visibility = "visible";
  document.getElementById(playerNo + "Six").style.visibility = "hidden";
  document.getElementById(playerNo + "Seven").style.visibility = "visible";
  document.getElementById(playerNo + "Eight").style.visibility = "hidden";
  document.getElementById(playerNo + "Nine").style.visibility = "hidden";
}
function four(playerNo) {
  document.getElementById(playerNo + "One").style.visibility = "visible";
  document.getElementById(playerNo + "Two").style.visibility = "hidden";
  document.getElementById(playerNo + "Three").style.visibility = "visible";
  document.getElementById(playerNo + "Four").style.visibility = "hidden";
  document.getElementById(playerNo + "Five").style.visibility = "hidden";
  document.getElementById(playerNo + "Six").style.visibility = "hidden";
  document.getElementById(playerNo + "Seven").style.visibility = "visible";
  document.getElementById(playerNo + "Eight").style.visibility = "hidden";
  document.getElementById(playerNo + "Nine").style.visibility = "visible";
}
function five(playerNo) {
  document.getElementById(playerNo + "One").style.visibility = "visible";
  document.getElementById(playerNo + "Two").style.visibility = "hidden";
  document.getElementById(playerNo + "Three").style.visibility = "visible";
  document.getElementById(playerNo + "Four").style.visibility = "hidden";
  document.getElementById(playerNo + "Five").style.visibility = "visible";
  document.getElementById(playerNo + "Six").style.visibility = "hidden";
  document.getElementById(playerNo + "Seven").style.visibility = "visible";
  document.getElementById(playerNo + "Eight").style.visibility = "hidden";
  document.getElementById(playerNo + "Nine").style.visibility = "visible";
}
function six(playerNo) {
  document.getElementById(playerNo + "One").style.visibility = "visible";
  document.getElementById(playerNo + "Two").style.visibility = "hidden";
  document.getElementById(playerNo + "Three").style.visibility = "visible";
  document.getElementById(playerNo + "Four").style.visibility = "visible";
  document.getElementById(playerNo + "Five").style.visibility = "hidden";
  document.getElementById(playerNo + "Six").style.visibility = "visible";
  document.getElementById(playerNo + "Seven").style.visibility = "visible";
  document.getElementById(playerNo + "Eight").style.visibility = "hidden";
  document.getElementById(playerNo + "Nine").style.visibility = "visible";
}
