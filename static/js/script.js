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
  let results = decideWinner(humenChoice, botChoice);
  message = finalMessage(results);
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

let copyAllButtons = [];
for (let i = 0; i < all_buttons.length; i++) {
  copyAllButtons.push(all_buttons[i].classList[1]);
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

// Challegne 5: Blackjack
let blackjackGame = {
  you: {
    scoreSpan: "#your-blackjack-result",
    div: "#your-box",
    score: 0,
  },
  dealer: {
    scoreSpan: "#dealer-blackjack-result",
    div: "#dealer-box",
    score: 0,
  },
  cards: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "K", "J", "Q", "A"],
  cardsMap: {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    K: 10,
    J: 10,
    Q: 10,
    A: [1, 11],
  },
  wins: 0,
  losses: 0,
  draws: 0,
  isStand: false,
  turnOver: false,
};

const YOU = blackjackGame["you"];
const DEALER = blackjackGame["dealer"];
const hitSound = new Audio("static/sounds/swish.m4a");
const winSound = new Audio("static/sounds/cash.mp3");
const lostSound = new Audio("static/sounds/aww.mp3");

document
  .querySelector("#blackjack-hit-button")
  .addEventListener("click", BlackjackHit);

document
  .querySelector("#blackjack-stand-button")
  .addEventListener("click", DealerLogic);

document
  .querySelector("#blackjack-deal-button")
  .addEventListener("click", BlackjackDeal);

// generate random number
function RandomCard() {
  let randomIndex = Math.floor(Math.random() * 13);
  return blackjackGame["cards"][randomIndex];
}

// click hit button then call this function
function BlackjackHit() {
  if (blackjackGame["isStand"] === false) {
    let card = RandomCard();
    ShowCard(card, YOU);
    UpdateScore(card, YOU);
    ShowScore(YOU);     
  }
}

// card image show function
function ShowCard(card, activePlayer) {
  if (activePlayer["score"] <= 21) {
    let cardImage = document.createElement("img");
    cardImage.src = `static/images/${card}.png`;
    document.querySelector(activePlayer["div"]).appendChild(cardImage);
    hitSound.play();
  }
}

// click deal button then call this function
function BlackjackDeal() {
  if (blackjackGame["turnOver"] === true) {
    blackjackGame["isStand"] = false;
    let yourImages = document
      .querySelector("#your-box")
      .querySelectorAll("img");
    let dealerImages = document
      .querySelector("#dealer-box")
      .querySelectorAll("img");

    for (i = 0; i < yourImages.length; i++) {
      yourImages[i].remove();
    }
    for (i = 0; i < dealerImages.length; i++) {
      dealerImages[i].remove();
    }
    YOU["score"] = 0;
    DEALER["score"] = 0;

    document.querySelector("#your-blackjack-result").textContent = 0;
    document.querySelector("#dealer-blackjack-result").textContent = 0;
    document.querySelector("#your-blackjack-result").style.color = "#ffffff";
    document.querySelector("#dealer-blackjack-result").style.color = "#ffffff";
    document.querySelector("#blackjack-result").textContent = "Let's play";
    document.querySelector("#blackjack-result").style.color = "black";
    blackjackGame["turnOver"] = false;
  }
}

function UpdateScore(card, activePlayer) {
  if (card === "A") {
    // If adding 11 Keeps me below 21, add 11, Otherwise, add 1
    if (activePlayer["score"] + blackjackGame["cardsMap"][card][1] <= 21) {
      activePlayer["score"] += blackjackGame["cardsMap"][card][1];
    } else {
      activePlayer["score"] += blackjackGame["cardsMap"][card][0];
    }
  } else {
    activePlayer["score"] += blackjackGame["cardsMap"][card];
  }
}
function ShowScore(activePlayer) {
  if (activePlayer["score"] > 21) {
    document.querySelector(activePlayer["scoreSpan"]).textContent = "BUST!";
    document.querySelector(activePlayer["scoreSpan"]).style.color = "red";
  } else {
    document.querySelector(activePlayer["scoreSpan"]).textContent =
      activePlayer["score"];
  }
}

function Sleep(ms){
return new Promise(resolve => setTimeout(resolve, ms))
}

async function DealerLogic() {
  blackjackGame["isStand"] = true;
  while(DEALER['score']<16 && blackjackGame['isStand'] === true){
 let card = RandomCard();
 ShowCard(card, DEALER);
 UpdateScore(card, DEALER);
 ShowScore(DEALER);
 await Sleep(1000)
  }
 
  if (DEALER["score"] > 15) {
    blackjackGame["turnOver"] = true;
    let winner = ComputeWinner();
    ShowResult(winner);
  }
}

// compute winner and return who jus won
// update the wins, draws, and losses
function ComputeWinner() {
  let winner;
  if (YOU["score"] <= 21) {
    // condition : higher score than dealer or when dealer busts but you're 21 or under 21
    if (YOU["score"] > DEALER["score"] || DEALER["score"] > 21) {
      blackjackGame["wins"]++;
      winner = YOU;
    } else if (YOU["score"] < DEALER["score"]) {
      blackjackGame["losses"]++;
      winner = DEALER;
    } else if (YOU["score"] === DEALER["score"]) {
      blackjackGame["draws"]++;
    }
  }
  // condition : when user busts but dealer doens't
  else if (YOU["score"] > 21 && DEALER["score"] <= 21) {
    blackjackGame["losses"]++;
    winner = DEALER;
  }
  // conditon : when you and the dealer busts\
  else if (YOU["score"] > 21 && DEALER["score"] > 21) {
    blackjackGame["draws"]++;
  }
  return winner;
}

function ShowResult(winner) {
  let message, messageColor;
  if (blackjackGame["turnOver"] === true) {
    if (winner === YOU) {
      document.querySelector("#wins").textContent = blackjackGame["wins"];
      message = "You won !";
      messageColor = "green";
      winSound.play();
    } else if (winner === DEALER) {
      document.querySelector("#losses").textContent = blackjackGame["losses"];
      message = "You lost !";
      messageColor = "red";
      lostSound.play();
    } else {
      document.querySelector("#draw").textContent = blackjackGame["losses"];
      message = "You draw !";
      messageColor = "black";
    }
    document.querySelector("#blackjack-result").textContent = message;
    document.querySelector("#blackjack-result").style.color = messageColor;
  }
}



// challenge 6 : Random User generate

const url = "https://randomuser.me/api/?results=10";
fetch(url)
.then(response=> response.json())
.then(data=> {
  let authors = data.results;
  for(let i =0; i<authors.length; i++){
  let div = document.createElement('div');
  let image = document.createElement('img');
  let p = document.createElement('p');
  p.appendChild(document.createTextNode(`${title(authors[i].name.first)}${title(authors[i].name.last)}`));
  image.src = authors[i].picture.large;
  div.appendChild(image);
  div.appendChild(p);
  document.getElementById("user").appendChild(div);
  }
})
let title = str=>str[0].toUpperCase() + str[0].slice(1);
