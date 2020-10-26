// Challange 1: Your Age in Days

function AgeInDays(){
let birthYear = prompt('what year were you born.. Good friend?');
let ageInDayss = (2020-birthYear)*360;
let h1 = document.createElement('h1');
let textAnswer = document.createTextNode('Your are '+ageInDayss+' days old.');
h1.setAttribute('id', 'ageInDays');
h1.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    document.getElementById('ageInDays').remove();
}


// Challange 2: Cat Generator
function GenerateCat(){
    let image = document.createElement('img');
    let div = document.getElementById('flex-cat-gen');
    image.src="http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
}

// Chllange 3: Rock, Paper, Scissor

function rpsGame(yourChoice){
//console.log(yourChoice.id)
 let humenChoice, botChoice;
  humenChoice = yourChoice.id;
  botChoice = numberToChoise(randomRPSToInt());
  console.log('computerchoice',botChoice);
 let results = decideWinner(humenChoice, botChoice);
 console.log(results)
  message = finalMessage(results);
  console.log(message)
 //rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randomRPSToInt(){
    return Math.floor(Math.random()*3);
}

function numberToChoise(number){
    return ['rock', 'paper', 'scissors'][number];
}
function decideWinner(yourChoice, computerChoice){
    let rpsDatabase = {
        'rock':{'scissors':1,'rock':0.5, 'paper':0},
        'paper':{'rock':1, 'paper':0.5, 'scissors':0},
        'scissors':{'paper':1, 'scissors':0.5, 'rock':0},   
    }
    let yourScore = rpsDatabase[yourChoice][computerChoice];
    let computerScore = rpsDatabase[computerChoice][yourChoice];
    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]){
if(yourScore === 0){
return {'message' :'Your lost!', 'color':'red'};
}
else if(yourScore === 0.5){
    return {'message' :'You tied!', 'color':'yellow'};
}
else{
    return {'message':'You won!','color':'green'}
}
}