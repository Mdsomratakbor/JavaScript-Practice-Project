console.log('hello');
//alert("this is very risk for you")
let b = "What is your age?";
document.getElementById('someText').innerHTML = 'Hello wordl'
let age //= // prompt(b);
document.getElementById('someText').innerHTML = '<h1>Cool</h1>'
//document.getElementById('someText').innerText = age;



//Array 
let fruits = ["bannana", 'apple','orange','pineapple'];
fruits = new Array("bannana", 'apple', 'orange', 'pineapple');
console.log(fruits[0]);

for(let i = 0; i<fruits.length; i++){
    console.log(fruits[i]);
}

// array common methods

console.log('to string',fruits.toString());
console.log(fruits.join('-'))
console.log(fruits, fruits.pop(), fruits);
console.log(fruits.push('blackberries', fruits))
let someNumbers = [32,232,232,23,1,12,42,53,23,53,35,678,452,346,90];
console.log(someNumbers.sort())
console.log(someNumbers.sort((a,b)=>b-a)); // array sorting on decending order
console.log(someNumbers.sort((a,b)=>a-b)) // array sorting on accending order;

let emptyArray = [];
debugger
while(emptyArray.length<100){
    emptyArray.push(emptyArray.length);
}
console.log(emptyArray);

// object in java 

let students = {
    first: 'Md somrat',
    last: 'Akbor',
    age:  22,
    height:  6.3,
    studentInfo: function () { return this.first + '\n' + this.last } 
}
console.log(students.studentInfo());