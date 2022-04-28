/**
//
 */

// Log to console
/*
console.log("Hello World");
console.log(123);
console.log(true);
var greeting = (greeting);
console.log([1,2,3,4]);
console.log({a:1, b:2});
console.table({a:1, b:2});

console.error("This is some error");
console.clear();
console.warn("This is a warning");
console.time("Hello");
  console.log("Hello World");
  console.log("Hello World");
  console.log("Hello World");
  console.log("Hello World");
  console.log("Hello World");
  console.log("Hello World");
  console.log("Hello World");
  console.log("Hello World");
console.timeEnd("Hello")

Multi
Line
Comments
*/

//var, let, const. (-var- and -let- can be reassign)

// var name = "John";
// console.log(name);
// name = "Cena";
// console.log(name);

// //Initialazing var

// var greeting;
// console.log(greeting);
// greeting = "Hello" 
// console.log(greeting);

// Variable can include: letters, numbers, _, $
// Can not start with number

// SELECT WHAT YOU WANT TO SELECT AND CTRL + / 

// CONST

  // const name = "John";
  // console.log(name); 
  // Can not reassign
  // name = "Sarah";
  // Have to assign a value
  // const greeting;

// const person = {
//   name: "John",
//   age: 30
// }

// person.name = "Sarah"

// // console.log(person);

// // You can change the stuff that it's withing CONST (person) BUT CANNOT CHANGE the CONST (person) ITSELF. --- Eventhough we change the data inside the object its still set to that object ---

// const numbers = [1,2,3,4,5];
// numbers.push(6);
// // You can do this since, it's not a new array it's mutate.
// // numbers=[1,2,3,4,5,6]
// // This cannot be done since it's a whole new entity

// console.log(numbers);

  /* Primitive data, acces by the actual value
  -String
  -Number
  -Boolean
  -Null
  -Undefined
  -Symbols (ES6)
  */

  /* Reference data types/Objects
  -Arrays
  - Object Literals
  - Functions
  - Dates
  - Anything Else...
*/
// //-------------------------------------------------------------------------------

// let val;

// // Number to string
// val = String(5);
// val = String(4+4);
// // Bool to string
// val = String(true);
// // Date to string
// val = String(new Date());
// val = String([1,2,3,4]);

// // toString()
// val = (5).toString();
// val = (true).toString();

// String to number
// val = Number("5");
// val = Number(true);
// val = Number(false);
// val = Number(null);
// val = Number("Hello");  // Won't work since isn't a number
// Val = Number ([1,2,3]); // Won't work since isn't a number

// val = parseInt('100.30'); 
// val = parseFloat('100.30'); //Used to add decimals

// Output
// console.log(val);
// console.log(typeof val);
// //console.log(val.length); //Only works for strings
// console.log(val.toFixed()); //Only works for numbers, if a number is placed within purple brackets it adds decimals.

// This is call type coersion
// const val1 = '5';
// const val2 = 6;
// // // const sum = (val1 + val2); // Will show result as string if one of the values assign is an string.
// const sum = Number(val1 + val2); // Shows the result as a number but does not plus them, just show both numbers separate.

// console.log(sum);
// console.log(typeof sum);

// const num1 = 100;
// const num2 = 50;
// let val;

// // Simple
// val = num1 + num2;
// val = num1 * num2;
// val = num1 - num2;
// val = num1 / num2;
// val = num1 % num2;

// // Math Object
// val = Math.PI;
// val = Math.E;
// val = Math.round(2.4);
// val = Math.ceil(2.4);
// val = Math.floor(2.8);
// val = Math.sqrt(64);
// val = Math.abs(-3);
// val = Math.pow(8, 2);
// val = Math.min(2,33,4,55,6,2,1);
// val = Math.max(2,33,4,55,6,2,1);
// val = Math.random();

// val = Math.floor(Math.random() * 20 + 1); // We * by 20 (can be any number) in order to make the random numbers be assign within that amount of number, we add the + 1 because with out it, the numbers that will be shown will be from 1.65468515 to 19.65465454 and we warp the whole function into Math.floor in order to round the number and take out the decimals.


// console.log(val);



// const firstName = 'William';
// const lastName = 'Dueo'
// const age = 36;
// const str = 'Hello there my name is Brad'
// const tags = 'web design, web development, programing';

// let val;

// val = firstName + lastName;

// // Concatenation
// val = firstName + ' ' + lastName;

// // Append
// val = 'Brad ';
// val += 'Lois';

// val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// // Escaping

// val = 'That\'s something you shouldn\'t have done'
// val = "That's something you shouldn't have done"

// // Lenght

// val = firstName.length;

// //Concat()
// val = firstName.concat(' ', lastName); //can put two arguments in here.

// // Change case
// val = firstName.toUpperCase();
// val = firstName.toLowerCase();

// val = firstName[2]; //array start in 0 an goes on

// // indexOf()
// val = firstName.indexOf('l'); //Start from the begging 
// val = firstName.lastIndexOf('l'); //Start from the end

// chartAt()
// val = firstName.charAt('2');
// // Get last character
// val = firstName.charAt(firstName.length - 1)
// // Substring()
// val = firstName.substring(0, 4); //Gives the string from position 0 to position 4, this will return Will, this works to take that out of the string.

// // slice()
// val = firstName.slice(0,4); // It's mostly used to pull things out of arrays, its very similar to substring.
// val = firstName.slice(-4); // the difference between slice and substring, it's that you can put negative number in it so it looks for it backwards to frontwards.

// //Split() - Can split a string into an array base on the separator, the separator it's whatever it's within the parenthesis and it should be within a string "".
// val = str.split(" ");
// val = tags.split(",");

// //Replace(); with this you can replace something inside the string
// val = str.replace('Brad', 'Jack');

// // Includes() // It will return true or false if the paramater wihin it, it's there or not, if it's there return true if not false.
// val = str.includes('Hello');

// console.log(val);

// const name = 'John';
// const age = 30;
// const job = 'Web Developer';
// const city = 'Miami';
// let html;

// //Without template strings (es5)

// html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + ' </li><li>Job: ' +  job + ' </li><li>City: ' + city +' </li></ul>';

// html = '<ul>' +
//    '<li>Name: ' + name + '</li>' +
//    '<li>Age: ' + age + '</li>' +
//    '<li>Job: ' + job + '</li>' +
//    '<li>City: ' + city + '</li>';+
//       '</ul>';

// function hello(){
//   return 'Hello';
// }

// // With template strings (es6)
// html = `
// <ul>
//   <li>Name: ${name}</li>
//   <li>Age: ${age}</li>
//   <li>Job: ${job}</li>
//   <li>City: ${city}</li>
//   <li>Expression: ${2+2}</li>
//   <li>Function: ${hello()}</li>
//   <li>If Statement ${age > 30 ? 'Over 30' : 'Under 30'}</li>
//   </ul>
//   `;

// document.body.innerHTML = html;

// Create some arrays

// const numbers = [43,56,33,23,44,36,5];
// const numbers2 = new Array(22,45,33,76,54);
// const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
// const mixed = [ 22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];

// let val;
// // Get array length
// val = numbers.length;
// // Check if is array
// val = Array.isArray(numbers);
// // Get single value
// val = numbers[3];
// val = numbers[0];
// // Insert into array
// numbers[2] = 100;
// // Find index of value
// val = numbers.indexOf(36);

// // MUTATING ARRAYS
// // Add on to end
// numbers.push(250);
// // Add on to front
// numbers.unshift(120);
// //Take off from end
// numbers.pop();
// // Take off from front
// numbers.shift();
// // Splice values
// numbers.splice();
// // Reverse
// numbers.reverse();

// // Concatenate array
// val = numbers.concat(numbers2);

// // Sorting arrays
// val = fruit.sort();
// val = numbers.sort(); //Numbers cannot be sort like that we have to call out sort by adding a fuction call to compere it. (this works with funcion in order to look from a number from bigger to smaller and smaller to bigger.)

// // Use the "compare funcion" // in the funcion you can put whatever whithin the parthesis, what matters it's how you return it, usually what goes in the parenthesis it's x, y or a, b.
// val = numbers.sort(function(x, y){ 
//   return x - y;
// });

// // Reverse order
// val = numbers.sort(function(x, y){ 
//   return y - x;
// });

// Find
// function under50(num){
//   return num < 50;
// }

// val = numbers.find(under50)

// console.log(numbers);
// console.log(val);

// const person = {
//   firstName: 'Steve',
//   lastName: 'Smith',
//   age: 45,
//   email: 'joh@dk.com',
//   hobbies: ['music', 'sports'],
  // address: {
  //   city: 'Miami',
  //   state: 'FL'
  // },
//   getBirthYear: function(){
//     return 2021 - this.age;
//   }
// }

// let val;

// val = person;
// val = person.age;
// val = person.hobbies[1]
// val = person.address.state;
// val = person.getBirthYear();
// console.log(val);



// const person =  {
//   name: 'Joh',
//   lastName: 'Nutz',
//   age: 65,

//   address: {
//     city: 'Miami',
//     state: 'FL'
//   },
  
//  this: function(){
//    return 2021 - this.age;
//  }
// }


// let val;

// val = person.lastName;
// val = person.this(66);

// console.log(val);

// const today = new Date();
// let birthday = new Date('9-10-1891 11:54:00')
// birthday = new Date()

// val = today.getDay();
// val = today.getMonth();
// val = today.getDay()
// val = today.getFullYear();
// val = today.getHours();
// val = today.getMinutes();
// val = today.getMilliseconds();
// val = today.getTime();

// birthday.setMonth(3)
// birthday.setDate(12);
// birthday.setFullYear(1981);
// birthday.setHours(3);
// birthday.setMinutes(30);
// console.log(birthday);


// const id = 100;

// // EQUAL TO

// if(id == 100){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // NOT EQUAL TO 

// if(id != 101){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // EQUAL TO VALUE & TYPE

// if(id === 100){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

//Test if undefined

// if(typeof id !== 'undefined'){
//   console.log(`The is ID ${id}`);
// } else {
//   console.log ('No ID');
// }

// GREATER OR LESS THAN

// if(id > 200){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// const color = 'red';

// if(color === 'red'){
//   console.log('Color is red');
// } else if (color === 'blue') {
//   console.log('Color is blue');
// } else {
//   console.log('Color isn\'t blue nor red')
// }

// const color = 'gray';

// if(color === 'red'){
//   console.log('The color is red');
// } else if (color === 'Orange'){
//   console.log('The color is Orange');
// } else {
//   console.log('Return')
// }

//REFERENCE
// const food = [23]

// if(food < 0 || food > 15){
//   console.log(`${food} Has to pay`)
// } else {
//   console.log(`${food} It's free`);
// }

// AND &&
// const dude = 'john'
// const old = 66;

// if(old > 23 && old < 30){
//   console.log(`${old} Is a john`);
// } else if(old >= 30 && old <= 40){
//   console.log(`${old} is test 2`)
// } else {
//   console.log(`${old} Is and adult`);
// }

// // OR ||

// const food = [23]

// if(food < 0 || food > 15){
//   console.log(`${food} Has to pay`)
// } else {
//   console.log(`${food} It's free`);
// }

// TERNARY OPERATOR

// console.log(id === 100 ? 'CORRECT' : 'INCORRECT');


// const color = 'red';

// switch(color){
// case 'red':
//   console.log('Color is red');
//   break;
// case 'blue':
//   console.log('Color is blue');
//   break;
// default:
//   console.log('Color is not red or blue');
//   break;
// }

// switch(new Date().getDay()){
//     case 0:
//       day = 'Sunday';
//       break;
//     case 1:
//       day = 'Monday';
//       break;
//     case 2:
//       day = 'Tuesday';
//       break;
//     case 3:
//       day = 'Wednesday';
//       break;
//     case 4:
//       day = 'Thursday';
//       break;
//     case 5:
//       day = 'Friday';
//       break;
// }

// console.log(`Today is ${day}`)

// FUNCTION DECLARATIONS

// function greet(firstName, lastName){
//  return 'Hello' + ' ' + firstName + ' ' + lastName;
// }
// console.log(greet('John', 'Doe'));

// function greet(firstName = 'John', lastName = 'Doe'){
//   return 'Hello ' + firstName + ' ' + lastName;
//  }
// //  console.log(greet('cc', 'xx'));

// // FUNCTION EXPRESIONS

// const square = function(x){
//   return x*x;
// };

// // console.log(square(4));

// // IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS - IIFEs

// (function(){
//   console.log('IIFE Ran..')
// })()

// (function(name){
//   console.log('Hello ' + name);
// })('Brad');


// const square = function(x = 4){
//   return x * 55;
// };

// console.log(square())

// PROPERTY METHODS

// const todo = {
//   add: function (){
//     console.log('Add todo..');
//   },
//   edit: function(id){
//     console.log(`Edit todo ${id}`);
//   }
// }

// todo.delete = function(){
//   console.log('Delete todo...')
// }

// todo.add();
// todo.edit(22);
// todo.delete();

// FOR LOOP

// for(let i = 0; i < 10; i++){
//   if(i === 2){
//     console.log('Yess');
//     continue;
//   }
//   if(i===5){
//     console.log('Stop');
//     break;
//   }
//   console.log('Number ' + i);
// }

// WHILE LOOP

// let i = 0;

// while(i < 10){
  
//   i++;
//   if(i === 5){
//     console.log('Its my fav num');
//     continue;
//   }
//   if(i===7){
//     console.log('until here');
//     break;
//   }
//   console.log('Number ' + i);
// }


// DO WHILE LOOP

// let i = 100;

// do {
//   console.log('Number ' + i);
//   i++;
// }

// while(i < 10);

// LOOP TROUGH ARRAY
// const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];


// for(let i = 0; i < cars.length; i++){
//   console.log(cars[i]);
// }

// FOREACH
// cars.forEach(function(car){
//   console.log(car);
// })

// FOREACH
// cars.forEach(function(car, index, array){
//   console.log(`${index} : ${car}`);
//   console.log(array);
// });


// MAP (used to return a different array)

// const users = [
//   {id: 1, name: 'John'},
//   {id: 2, name: 'Sara'},
//   {id: 3, name: 'Karen'}
// ];

// const ids = users.map(function(user){
//   return user.id;
// });

// console.log(ids);


// FOR IN LOOP

// const user = {
//   firstName: 'Yee',
//   age: 52,
//   address: 'Youmama'
// };

// for(let x in user){
//   console.log(`${x} : ${user[x]}`)
// }


// WINDOW METHODS / OBJECTS / PROPERTIES

// Alert

// alert('Hello World');

//Prompt

// const input = prompt();
// alert(input);

// Confirm
// if(confirm('Are you sure')){
//   console.log('Yes');
// } else {
//   console.log("No");
// }

// let val;

// // Outter height and width
// val = window.outerHeight;
// val = window.outerWidth;

// // Inner height and width
// val = window.innerHeight;
// val = window.innerWidth;

// // Scroll points
// val = window.scrollY;
// val = window.scrollX;
// // {/* <div style='margin-top: 1000px;'></div> */}

// // Location Object
// val = window.location;
// val = window.location.hostname;
// val = window.location.port;
// val = window.location.href;
// val = window.location.search;

// Redirect
// window.location.href = 'http://google.com';
//Reload
// window.location.reload();

// History Object

// window.history.go(-1);
// val = window.history.length;

//Navigator Object
// val = window.navigator;
// val = window.navigator.appName;
// val = window.navigator.appVersion;
// val = window.navigator.userAgent;
// val = window.navigator.platform;
// val = window.navigator.vendor;
// val = window.navigator.language;

//Globral Scope
// var a = 1;
// let b = 2;
// const c = 3;

// function test(){
// var a = 4;
// let b = 5;
// const c = 6;
// console.log('Function Scope: ', a, b, c);
// }

// test();

// if(true){
//   //Block Scope
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log('If Scope: ', a, b, c);
// }

// let val;

// val = document;
// val = document.all;
// val = document.all[2];
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.domain;
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;

// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;

// val = document.links;
// val = document.links[0];
// val = document.links[0].id;
// val = document.links[0].className;
// val = document.links[0].classList;

// val = document.images;

// val = document.scripts;
// val = document.scripts[2].getAttribute('src');

// let scripts = document.scripts;

// let scriptsArr = Array.from(scripts)

// scriptsArr.forEach(function(script) {
//   console.log(script.getAttribute('src'));
// });

// console.log(val);



// Single Elemet Selector


// //document.getElementById()

// console.log(document.getElementById('task-title'));

// //Get things from the element

// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className)
// // LAST PART YOU CAN ALSO DO IT THIS WAY AND IT'S BETTER
// const taskTitle = document.getElementById('task-title');
// //Change styling

// document.getElementById('task-title').style.background = '#333';
// document.getElementById('task-title').style.color = '#fff';
// document.getElementById('task-title').style.padding = '5px';
// document.getElementById('task-title').style.padding = '5px';
// // document.getElementById('task-title').style.display = 'none';

// // Change Content
// document.getElementById('task-title').textContent = 'Task List';
// document.getElementById('task-title').innerText = 'My List'
// document.getElementById('task-title').innerHTML = '<span style ="color:red">Task List</span>';

// // ----------------------------------------------------

// taskTitle.style.background = '#333';
// taskTitle.style.color = '#fff';
// taskTitle.style.padding = '5px';
// taskTitle.style.padding = '5px';
// //taskTitle.style.display = 'none';

// // Change Content
// taskTitle.textContent = 'Task List';
// taskTitle.innerText = 'My List'
// taskTitle.innerHTML = '<span style ="color:red">Task List</span>';

// document.querySelector()

// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h5'));

// document.querySelector('li').style.color = 'red';
// document.querySelector('ul li').style.color = 'blue';

// document.querySelector('li:last-child').style.color = 'red';
// document.querySelector('li:nth-child(3)').style.color = 'purple';
// document.querySelector('li:nth-child(4)').textContent = 'Hello World';
// document.querySelector('li:nth-child(odd)').style.background = '#ccc';
// document.querySelector('li:nth-child(even)').style.background = '#ccc';


// document.getElementsByClassName

// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red';
// items[3].textContent = 'Hello'


// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

// console.log(listItems);

// // document.getElementsByTagName
// let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'red';
// lis[3].textContent = 'Hello'

// //Conver HTML collection into array
// lis = Array.from(lis);

// lis.reverse();

// console.log(lis);


// val = document.scripts;
// val = document.scripts[2].getAttribute('src');

// let scripts = document.scripts;

// let scriptsArr = Array.from(scripts);

// scriptsArr.forEach(function(script){
//   console.log(script.getAttribute('src'))
// })
// const btn = document.querySelector('submit');

// btn.addEventListener('click', () => {
//   window.scrollTo({
//     end: 5,
//     left: 5,
//     behavior: 'smooth',
//   })
// })


// const dogs = {
//   Fido: 'Mutt',
//   Hunter: 'Doberman',
//   Snoopie: 'Beagle'
// };
// // New variable
// const myDog = "Snoopie";

// const myBread = dogs[myDog];

// console.log(myBread);


// const testObj = {
//   12: "Namath",
//   16: "Montana",
//   19: "Unitas"
// };

// const playerNumber = 19;
// const player = testObj[playerNumber];

// //Player is a variable where the object in this case "16" is called, the variable playerNumber it's just calling the object value and testObj is where we are looking the information from. 
// console.log(player);

// const myDog = {
//   "name": "Coder",
//   "legs": 4,
//   "tails": 1,
//   "friends": ["freeCodeCamp Campers"]
// };

// myDog.name = 'Happy Coder';
// myDog['name'] = 'Sad Jumper'

// console.log(myDog);

// const myDog = {
//   "name": "Happy Coder",
//   "legs": 4,
//   "tails": 1,
//   "friends": ["freeCodeCamp Campers"]
// };

// myDog.bark = 'woof'
// console.log(myDog);

// const someObj = {
//   propName: "John",
//   Age : 17,
//   propYes : 'diaz'
// };

// function propPrefix(str) {
//   const s = "prop";
//   return s + str;
// }

// const someProp = propPrefix("Yes");
// console.log(someObj[someProp]);


// // Setup
// function phoneticLookup(val) {
//   let result = "";

//   // Only change code below this line
//   var lookup = {
// "alpha": "Adams",
// "bravo": "Boston",
// "charlie": "Chicago",
// "delta": "Denver",
// "echo": "Easy",
// "foxtrot": "Frank"
//   }

//   // Only change code above this line
//   return result = lookup[val];
// }

// lookup = phoneticLookup("alpha");



// console.log(lookup);


// // const alpha = {
// //   1:"Z",
// //   2:"Y",
// //   3:"X",
// //   4:"W",
// //   24:"C",
// //   25:"B",
// //   26:"A"
// // };

// // alpha[2];
// // alpha[24];

// // const value = 25;
// // alpha[value];

// // console.log(alpha[value]);


// Setup
// function phoneticLookup(yes) {
//   let result = "";

//   var lookup = {
//    "alpha": "Adams",
//    "bravo": "Boston",
//    "charlie": "Chicago",  
//    "delta": "Denver",    
//    "echo": "Easy",     
//    "foxtrot": "Frank"
//   }

  
//   return result = lookup[yes];
// }
// console.log(phoneticLookup('charlie'));

// code here can NOT use carName

// function myFunction() {
//   let carName = "Volvo";
//   // code here CAN use carName
// return carName;

// }

// console.log(myFunction());

// // code here can NOT use carName

// const someObj = {
//   propName: "John",
//   Age : 17,
//   propYes : 'diaz'
// };

// function propPrefix(str) {
//   const s = "prop";
//   return s + str;
// }

// const someProp = propPrefix("Yes");
// console.log(someObj[someProp]);


// // Setup
// function phoneticLookup(val) {
//   let result = "";

//   // Only change code below this line
//   var lookup = {
// "alpha": "Adams",
// "bravo": "Boston",
// "charlie": "Chicago",
// "delta": "Denver",
// "echo": "Easy",
// "foxtrot": "Frank"
//   }

//   // Only change code above this line
//   return result = lookup[val];
// }

// lookup = phoneticLookup("alpha");



// console.log(lookup);


// // const alpha = {
// //   1:"Z",
// //   2:"Y",
// //   3:"X",
// //   4:"W",
// //   24:"C",
// //   25:"B",
// //   26:"A"
// // };

// // alpha[2];
// // alpha[24];

// // const value = 25;
// // alpha[value];

// // console.log(alpha[value]);


// // Setup
// function lookingUp(x) {
//   let result = "";

//   var lookup = {
//    "alpha": "Adams",
//    "bravo": "Boston",
//    "charlie": "Chicago",  
//    "delta": "Denver",    
//    "echo": "Easy",     
//    "foxtrot": "Frank"
//   }
//   result = lookup[x];
  
//   return result;
// }

// console.log(lookingUp('charlie'));

// const myObj = {
//   top: "hat",
//   bottom: "pants"
// };

// myObj.hasOwnProperty("top");
// myObj.hasOwnProperty("middle");

// console.log(myObj.hasOwnProperty('middle'))

// function checkObj(obj, checkProp) {
//   // Only change code below this line
//   // checkObj(obj) = {
//   //   joh: 'yes',
//   //   ana: 'no'
//   // }
//   if(obj.hasOwnProperty(checkObj)){
//     return obj[checkProp]
//   } else{
//     return 'Not Found'
//   }
  
//   // Only change code above this line
// }

// console.log(checkObj.hasOwnProperty('obj'));

// const myMusic = [
//   {
//     "artist": "Billy Joel",
//     "title": "Piano Man",
//     "release_year": 1973,
//     "formats": [
//       "CD",
//       "8T",
//       "LP"
//     ],
//     "gold": true
//   },

//   {
//     'artist': 'vin dicel',

//     'title' : 'fast',
//     'release_year': 2000,
//     'formats': [
//       'cd',
//       'sportify',
//       'apple music'
//     ]
//   }
// ];

// const ourStorage = {
//   "desk": {
//     "drawer": "stapler"
//   },
//   "cabinet": {
//     "top drawer": { 
//       "folder1": "a file",
//       "folder2": "secrets"
//     },
//     "bottom drawer": "soda"
//   }
// };

// console.log(ourStorage.cabinet['top drawer'].folder1)

// // Setup
// const recordCollection = {
//   2548: {
//     albumTitle: 'Slippery When Wet',
//     artist: 'Bon Jovi',
//     tracks: ['Let It Rock', 'You Give Love a Bad Name']
//   },
//   2468: {
//     albumTitle: '1999',
//     artist: 'Prince',
//     tracks: ['1999', 'Little Red Corvette']
//   },
//   1245: {
//     artist: 'Robert Palmer',
//     tracks: []
//   },
//   5439: {
//     albumTitle: 'ABBA Gold'
//   }
// };

// // Only change code below this line
// function updateRecords(records, id, prop, value) {
//   if(prop !== "tracks" && value !== ""){
//    records[id][prop] = value};
// }



// // Setup
// var recordCollection = {
//   2548: {
//     albumTitle: 'Slippery When Wet',
//     artist: 'Bon Jovi',
//     tracks: ['Let It Rock', 'You Give Love a Bad Name']
//   },
//   2468: {
//     albumTitle: '1999',
//     artist: 'Prince',
//     tracks: ['1999', 'Little Red Corvette']
//   },
//   1245: {
//     artist: 'Robert Palmer',
//     tracks: []
//   },
//   5439: {
//     albumTitle: 'ABBA Gold'
//   }
// };

// // Only change code below this line
// function updateRecords(records, id, prop, value) {
//   if (prop !== 'tracks' && value !== "") {
//     records[id][prop] = value;
//   } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
//     records[id][prop] = [value];
//   } else if (prop === "tracks" && value !== "") {
//     records[id][prop].push(value);
//   } else if (value === "") {
//     delete records[id][prop];
//   }
//   return records;
// }
// updateRecords(recordCollection, 1245, 'tourist', 'Cena');

// console.log(recordCollection[2548])

// const greet = function(){
//   return 'hello world';
// }

// console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));

// const bill = (products, tax) => {
//   let total = 0;
//   for(let i =  0; i < products.length; i++){ 
//     total += products[i] + products[i] * tax;
//   }
//     return total;
// }

// console.log(bill([10,15,55], 0.2));

// const myFunc = (callbackFunc) => {
//   // do something
//   let value = 50;
//   callbackFunc(value);
// };

// myFunc(value => {
//   // do something
//   console.log(value);
// })

// let people = ['mario', 'mercedes', 'john'];

// people.forEach((val) => {
//   console.log(val);
// })

// const ourArray = [];
// let i = 0;

// while (i < 5) {
//   ourArray.push(i);
//   i++;
// }

// console.log(ourArray)

//Mientras i sea 0 o menor el array ''ourArray'' agregara 1 digito como indica .push hasta que llegue a 5.