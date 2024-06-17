console.log("test")

// Normal Function declaration

function hello(params) {
  
}

let helloVar = hello;

// ES6 arrow functions

const arrowHellow = () => {

}

console.log(helloVar);
console.log(arrowHellow);


// Arrays with functions

let arrayOfAllKind = ["cheese", "Black", 12, true, arrowHellow, helloVar]


// Objects with functions

const objectOfAllKind = {
  name: "joe",
  age: 20,
  isLoggedIn: false,
  calculateSalary: function(params) {
  }
}
console.log(objectOfAllKind.calculateSalary);


// passing a function as a parameter

function activity(walk) {
  // 
  //

  //
  //
  walk()
}


function walk() {
  console.log("Hi i am walking");
}





activity(walk)

console.log('====================================');
console.log();
console.log('====================================');


function planDayOut(eat, watchMovie, walk) {
  //
  //
  console.log("Our day out plan includes:");
  eat();
  watchMovie();
  walk();
  return function() {console.log("today  was fun")}
  //
  //
}

function eat() {
  console.log("Eating at our favorite restaurant at the domain.");
}

function watchMovie() {
  console.log("Watching a new movie at ipic.");
}

function walk() {
  console.log("Going for a walk in the park.");
}

// Organizing the day by passing activities as arguments to the plan
// IIFE - investigate

let result = planDayOut(eat, watchMovie, walk);
result();


console.log('====================================');
console.log("For each");
console.log('====================================');
// for each

const friends = ["ross", "rachel", "joey", "monica", "phoebe", "chandler"];

// using loops
// for (let i = 0; i < friends.length; i++) {
//   console.log("Sending email to ", friends[i])
// }

// using for each
// friends.forEach(sayHi);


function give10DollarsToAPerson(name) {
  console.log("I am giving 10$ to ", name);
}

friends.forEach(give10DollarsToAPerson)


// second example

let students = ['Alex', 'Bobby', 'Charlie'];
// hello [name]

function sayHello(name) {
  console.log("Hello ", name);
}

students.forEach(sayHello)

// third example

const friends2 = ["ross", "rachel", "joey", "monica", "phoebe", "chandler"];

// UPPERCASE ["ROSS", "RACHEL"]


//callback
function toUpperCase(name) {
  console.log(name.toUpperCase());
}

// HOF
friends2.forEach(toUpperCase)

console.log(friends2);



console.log('====================================');
console.log("Map");
console.log('====================================');


let number = [1,2,3,4,5]


// callback
function multiplyBy100(num) {
  return num * 100
}

// map HOF
let numberX100 = number.map(multiplyBy100)

console.log(numberX100);

/// example 2

let people = [
  {
    name: "joe", 
    age : 30
  },
  {
    name: "jane", 
    age : 20
  },
  {
    name: "dave", 
    age : 40
  }
]

let joe = {
  name: "joe", 
  age : 30
};

// Two ways to add key value pair (properties) to objects
// joe.address = "123 st, NY"
// joe["account"] = "12313124"

function addAddressToPeople(person) {
  person.address = "123 st, NY"
}

addAddressToPeople(joe)

console.log(joe);


function addFiveYears(person) {
  person.age = person.age + 5
  return person;
}


let peopleWithCorrectAge = people.map(addFiveYears);

console.log(peopleWithCorrectAge);

console.log('====================================');
console.log("Map example 2");
console.log('====================================');

const numbers = [
  15,
  18,
  3921,
  327,
  88,
  1235,
  1,
  55855,
  34,
  5,
  9,
  9019,
  156,
  874,
  76,
  444,
  12346
]


function multiplyBy5(number) {
  return number * 5
}

let newArrayOfNumbers = numbers.map(multiplyBy5)

console.log(newArrayOfNumbers);
console.log(numbers);


console.log('====================================');
console.log("Filter");
console.log('====================================');

const numbersToFilter = [ 15,156,87,76,444,12346 ]
// get all that are greater than 100


// FOR LOOP
let newArrayOfBigNumbers = []

for(let i = 0; i < numbersToFilter.length; i++) {
  let currentItem = numbersToFilter[i];

  if (currentItem > 100) {
    newArrayOfBigNumbers.push(currentItem)
  }
}

console.log(newArrayOfBigNumbers);

// Filter

//Step 1
function isNumberLargerThan100(num) {
  // Step 2
  if (num > 100) {
    return true
  }
}

// Step 3

let largeNumberArrayWithFilter = numbersToFilter.filter(isNumberLargerThan100)

console.log(largeNumberArrayWithFilter);

console.log('====================================');
console.log("Another filter excercise");
console.log('====================================');

let cars = ["Toyota", "Nissan", "vw", "ford", "bq"]
// filter all the car names with two letter names


// step 1
function filterCarNames(carName) {
  // Step 2

  // return carName.length == 2;

  // OR

  if (carName.length == 2) {
    return true
  }

}

function filterCarNames2(carName) {
  // Step 2

  // return carName.length == 2;

  // OR

  if (carName.length === 2 || carName.length === 4) {
    return true
  }

}

//step 3
let shortNamedCars = cars.filter(filterCarNames2)

console.log(shortNamedCars);


console.log('====================================');
console.log("reduce");
console.log('====================================');


let words = ['JavaScript', 'is', 'fun', 'to', 'learn']; 

// 'JavaScript is fun to learn'

let joinedString = ""

for(let i = 0; i < words.length; i++) {
  joinedString = joinedString + " " + words[i]
}

console.log(joinedString.trim());

// Reduce

// Step 1
function joinWords(accum, word) {
    return accum + " " + word
}

let lastString = words.reduce(joinWords)

console.log(lastString);

let salaries = [
  {
    name: "joe",
    salary: 90000
  },
  {
    name: "jane",
    salary: 60000
  },
  {
    name: "dave",
    salary: 120000
  }
]

let salary = [10000, 20000, 30000]

//step 1

function addSalaries(accum, nextSalary) {
  return accum + nextSalary;
}

let totalSalaries = salary.reduce(addSalaries)


console.log(totalSalaries);