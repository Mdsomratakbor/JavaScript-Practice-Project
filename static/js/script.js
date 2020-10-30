// Challange 1: Your Age in Days

function AgeInDays() {
  let birthYear = prompt("what year were you born.. Good friend?");
  let ageInDayss = (2020 - birthYear) * 360;
  let h1 = document.createElement("h1");
  let textAnswer = document.createTextNode(
    "Your are " + ageInDayss + " days old."
  );
  h1.setAttribute("id", "ageInDays");
  h1.appendChild(textAnswer);
  document.getElementById("flex-box-result").appendChild(h1);
}

function reset() {
  document.getElementById("ageInDays").remove();
}

// Challange 2: Cat Generator
function GenerateCat() {
  let image = document.createElement("img");
  let div = document.getElementById("flex-cat-gen");
  image.src =
    "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
  div.appendChild(image);
}

// Chllange 3: Rock, Paper, Scissor

function rpsGame(yourChoice) {
  //console.log(yourChoice.id)
  let humenChoice, botChoice;
  humenChoice = yourChoice.id;
  botChoice = numberToChoise(randomRPSToInt());
  console.log("computerchoice", botChoice);
  let results = decideWinner(humenChoice, botChoice);
  console.log(results);
  message = finalMessage(results);
  console.log(message);
  rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randomRPSToInt() {
  return Math.floor(Math.random() * 3);
}

function numberToChoise(number) {
  return ["rock", "paper", "scissors"][number];
}
function decideWinner(yourChoice, computerChoice) {
  let rpsDatabase = {
    rock: { scissors: 1, rock: 0.5, paper: 0 },
    paper: { rock: 1, paper: 0.5, scissors: 0 },
    scissors: { paper: 1, scissors: 0.5, rock: 0 },
  };
  let yourScore = rpsDatabase[yourChoice][computerChoice];
  let computerScore = rpsDatabase[computerChoice][yourChoice];
  return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
  if (yourScore === 0) {
    return { message: "Your lost!", color: "red" };
  } else if (yourScore === 0.5) {
    return { message: "You tied!", color: "yellow" };
  } else {
    return { message: "You won!", color: "green" };
  }
}

function rpsFrontEnd(humenImgChoice, botImgChoice, finalMessage) {
  var imagesDatabase = {
    rock: document.getElementById("rock").src,
    paper: document.getElementById("paper").src,
    scissors: document.getElementById("scissors").src,
  };
  // let's remove the all images

  document.getElementById("rock").remove();
  document.getElementById("paper").remove();
  document.getElementById("scissors").remove();

  let humenDiv = document.createElement("div");
  let botDiv = document.createElement("div");
  let messageDiv = document.createElement("div");

  humenDiv.innerHTML =
    "<img src='" +
    imagesDatabase[humenImgChoice] +
    "' class='img-fluid img-thumbnail' height=150 width=150  style='box-shadow:0px 10px 50px 233, 1'/>";
  messageDiv.innerHTML =
    "<h1 class='mt-3' style='color:" +
    finalMessage["color"] +
    "; font-size:60px; padding:30px;'>" +
    finalMessage["message"] +
    "</h1>";
  botDiv.innerHTML =
    "<img src='" +
    imagesDatabase[botImgChoice] +
    "' class='img-fluid img-thumbnail' height=150 width=150  style='box-shadow:0px 10px 50px 233, 1'/>";

  document.getElementById("flex-box-rps-div").appendChild(humenDiv);
  document.getElementById("flex-box-rps-div").appendChild(messageDiv);
  document.getElementById("flex-box-rps-div").appendChild(botDiv);
}

// Challenge 4: Color change of all Buttons

let all_buttons = document.getElementsByTagName("button");
console.log(all_buttons);

let copyAllButtons = [];
for (let i = 0; i < all_buttons.length; i++) {
  copyAllButtons.push(all_buttons[i].classList[1]);
  console.log(copyAllButtons);
}

function buttonColorChange(buttonThingy) {
  console.log(buttonThingy.value);
  if (buttonThingy.value === "red") {
    buttonsNewColor("btn-danger");
  } else if (buttonThingy.value === "green") {
    buttonsNewColor("btn-success");
  } else if (buttonThingy.value === "reset") {
    buttonsNewColor(copyAllButtons);
  } else if (buttonThingy.value === "random") {
    buttonsNewColor("random");
  }
}
function buttonsNewColor(value) {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    if (value == "random") {
      all_buttons[i].classList.add(
        ["btn-warning", "btn-primary", "btn-info", "btn-dark"][
          Math.floor(Math.random() * 4)
        ]
      );
    } else if (!Array.isArray(value)) all_buttons[i].classList.add(value);
    else all_buttons[i].classList.add(value[i]);
  }
}
