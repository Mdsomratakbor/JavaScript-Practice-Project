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
console.log(yourChoice.id)
 let humenChoice, botChoice;
 //let results = decideWinner(humenChoice, botChoice);
 // message = finalMessage(results);
 rpsFrontEnd(yourChoice.id, botChoice, message);
}