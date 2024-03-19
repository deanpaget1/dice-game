Object.onload = refreshDice();

function refreshDice() {
  var diceOneValue = 6;
  var diceTwoValue = 6;

  diceOneValue = Math.floor(Math.random() * 6) + 1;
  diceTwoValue = Math.floor(Math.random() * 6) + 1;

  setNewDiceOne(diceOneValue);
  setNewDiceTwo(diceTwoValue);

  if (diceOneValue > diceTwoValue) {
    document.querySelector(".title h1").textContent = "Player One Wins!";
    document.querySelector("#first-dice h2").innerHTML =
      "WINNER! <img src='./photos/trophy.png' width='30px'>";
    document.querySelector("#second-dice h2").innerHTML =
      "LOSER! <img src='./photos/loser.png' width='30px'>";
  } else if (diceTwoValue > diceOneValue) {
    document.querySelector(".title h1").textContent = "Player Two Wins!";
    document.querySelector("#second-dice h2").innerHTML =
      "WINNER! <img src='./photos/trophy.png' width='30px'>";
    document.querySelector("#first-dice h2").innerHTML =
      "LOSER! <img src='./photos/loser.png' width='30px'>";
  } else {
    document.querySelector(".title h1").textContent = "Draw! Roll Again!";
    document.querySelector("#first-dice h2").textContent = "ROLL AGAIN!";
    document.querySelector("#second-dice h2").textContent = "ROLL AGAIN!";
  }
}

function setNewDiceOne(number) {
  if (number === 1) {
    document.getElementById("dice-o-dot-o").style.display = "none";
    document.getElementById("dice-o-dot-tw").style.display = "none";
    document.getElementById("dice-o-dot-th").style.display = "none";
    document.getElementById("dice-o-dot-fo").style.display = "none";
    document.getElementById("dice-o-dot-fi").style.display = "block";
    document.getElementById("dice-o-dot-s").style.display = "none";
    document.getElementById("dice-o-dot-se").style.display = "none";
    document.getElementById("dice-o-dot-ei").style.display = "none";
    document.getElementById("dice-o-dot-ni").style.display = "none";
  } else if (number === 2) {
    document.getElementById("dice-o-dot-o").style.display = "none";
    document.getElementById("dice-o-dot-tw").style.display = "none";
    document.getElementById("dice-o-dot-th").style.display = "block";
    document.getElementById("dice-o-dot-fo").style.display = "none";
    document.getElementById("dice-o-dot-fi").style.display = "none";
    document.getElementById("dice-o-dot-s").style.display = "none";
    document.getElementById("dice-o-dot-se").style.display = "block";
    document.getElementById("dice-o-dot-ei").style.display = "none";
    document.getElementById("dice-o-dot-ni").style.display = "none";
  } else if (number === 3) {
    document.getElementById("dice-o-dot-o").style.display = "none";
    document.getElementById("dice-o-dot-tw").style.display = "none";
    document.getElementById("dice-o-dot-th").style.display = "block";
    document.getElementById("dice-o-dot-fo").style.display = "none";
    document.getElementById("dice-o-dot-fi").style.display = "block";
    document.getElementById("dice-o-dot-s").style.display = "none";
    document.getElementById("dice-o-dot-se").style.display = "block";
    document.getElementById("dice-o-dot-ei").style.display = "none";
    document.getElementById("dice-o-dot-ni").style.display = "none";
  } else if (number === 4) {
    document.getElementById("dice-o-dot-o").style.display = "block";
    document.getElementById("dice-o-dot-tw").style.display = "none";
    document.getElementById("dice-o-dot-th").style.display = "block";
    document.getElementById("dice-o-dot-fo").style.display = "none";
    document.getElementById("dice-o-dot-fi").style.display = "none";
    document.getElementById("dice-o-dot-s").style.display = "none";
    document.getElementById("dice-o-dot-se").style.display = "block";
    document.getElementById("dice-o-dot-ei").style.display = "none";
    document.getElementById("dice-o-dot-ni").style.display = "block";
  } else if (number === 5) {
    document.getElementById("dice-o-dot-o").style.display = "block";
    document.getElementById("dice-o-dot-tw").style.display = "none";
    document.getElementById("dice-o-dot-th").style.display = "block";
    document.getElementById("dice-o-dot-fo").style.display = "none";
    document.getElementById("dice-o-dot-fi").style.display = "block";
    document.getElementById("dice-o-dot-s").style.display = "none";
    document.getElementById("dice-o-dot-se").style.display = "block";
    document.getElementById("dice-o-dot-ei").style.display = "none";
    document.getElementById("dice-o-dot-ni").style.display = "block";
  } else {
    resetDice();
  }
}

function setNewDiceTwo(number) {
  if (number === 1) {
    document.getElementById("dice-t-dot-o").style.display = "none";
    document.getElementById("dice-t-dot-tw").style.display = "none";
    document.getElementById("dice-t-dot-th").style.display = "none";
    document.getElementById("dice-t-dot-fo").style.display = "none";
    document.getElementById("dice-t-dot-fi").style.display = "block";
    document.getElementById("dice-t-dot-s").style.display = "none";
    document.getElementById("dice-t-dot-se").style.display = "none";
    document.getElementById("dice-t-dot-ei").style.display = "none";
    document.getElementById("dice-t-dot-ni").style.display = "none";
  } else if (number === 2) {
    document.getElementById("dice-t-dot-o").style.display = "none";
    document.getElementById("dice-t-dot-tw").style.display = "none";
    document.getElementById("dice-t-dot-th").style.display = "block";
    document.getElementById("dice-t-dot-fo").style.display = "none";
    document.getElementById("dice-t-dot-fi").style.display = "none";
    document.getElementById("dice-t-dot-s").style.display = "none";
    document.getElementById("dice-t-dot-se").style.display = "block";
    document.getElementById("dice-t-dot-ei").style.display = "none";
    document.getElementById("dice-t-dot-ni").style.display = "none";
  } else if (number === 3) {
    document.getElementById("dice-t-dot-o").style.display = "none";
    document.getElementById("dice-t-dot-tw").style.display = "none";
    document.getElementById("dice-t-dot-th").style.display = "block";
    document.getElementById("dice-t-dot-fo").style.display = "none";
    document.getElementById("dice-t-dot-fi").style.display = "block";
    document.getElementById("dice-t-dot-s").style.display = "none";
    document.getElementById("dice-t-dot-se").style.display = "block";
    document.getElementById("dice-t-dot-ei").style.display = "none";
    document.getElementById("dice-t-dot-ni").style.display = "none";
  } else if (number === 4) {
    document.getElementById("dice-t-dot-o").style.display = "block";
    document.getElementById("dice-t-dot-tw").style.display = "none";
    document.getElementById("dice-t-dot-th").style.display = "block";
    document.getElementById("dice-t-dot-fo").style.display = "none";
    document.getElementById("dice-t-dot-fi").style.display = "none";
    document.getElementById("dice-t-dot-s").style.display = "none";
    document.getElementById("dice-t-dot-se").style.display = "block";
    document.getElementById("dice-t-dot-ei").style.display = "none";
    document.getElementById("dice-t-dot-ni").style.display = "block";
  } else if (number === 5) {
    document.getElementById("dice-t-dot-o").style.display = "block";
    document.getElementById("dice-t-dot-tw").style.display = "none";
    document.getElementById("dice-t-dot-th").style.display = "block";
    document.getElementById("dice-t-dot-fo").style.display = "none";
    document.getElementById("dice-t-dot-fi").style.display = "block";
    document.getElementById("dice-t-dot-s").style.display = "none";
    document.getElementById("dice-t-dot-se").style.display = "block";
    document.getElementById("dice-t-dot-ei").style.display = "none";
    document.getElementById("dice-t-dot-ni").style.display = "block";
  } else {
    resetDice();
  }
}

//Reset the dice back to all six
function resetDice() {
  document.getElementById("dice-o-dot-o").style.display = "block";
  document.getElementById("dice-o-dot-tw").style.display = "none";
  document.getElementById("dice-o-dot-th").style.display = "block";
  document.getElementById("dice-o-dot-fo").style.display = "block";
  document.getElementById("dice-o-dot-fi").style.display = "none";
  document.getElementById("dice-o-dot-s").style.display = "block";
  document.getElementById("dice-o-dot-se").style.display = "block";
  document.getElementById("dice-o-dot-ei").style.display = "none";
  document.getElementById("dice-o-dot-ni").style.display = "block";

  document.getElementById("dice-t-dot-o").style.display = "block";
  document.getElementById("dice-t-dot-tw").style.display = "none";
  document.getElementById("dice-t-dot-th").style.display = "block";
  document.getElementById("dice-t-dot-fo").style.display = "block";
  document.getElementById("dice-t-dot-fi").style.display = "none";
  document.getElementById("dice-t-dot-s").style.display = "block";
  document.getElementById("dice-t-dot-se").style.display = "block";
  document.getElementById("dice-t-dot-ei").style.display = "none";
  document.getElementById("dice-t-dot-ni").style.display = "block";
}