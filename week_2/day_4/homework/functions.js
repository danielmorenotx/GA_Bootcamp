//Basic Functions

// Problem 1 - Greeting Function

function greetings(name) {
    return "Hello " + name;
}

console.log(greetings("Daniel"))

// Problem 2 - Concatenator: Write a function that takes two strings, 
// concatenates them, and returns the result

function concatenator(string1,string2) {
    return string1.concat(string2);
}

console.log(concatenator("Hello","Daniel"))

// Problem 3 - Power Function: Write a function that takes 
// two parameters, a base and an exponent, 
// and returns the base raised to the power of the exponent.

function power(base,exponent) {
    return base**exponent;
}

console.log(power(2,5))


// Problem 4 - Array Sum: Write a function that takes an array 
// of numbers and returns the sum of all elements.

function arraySum(arr) {
    let sum = 0

    for (let i = 0; i < arr.length; i ++) {
        sum += arr[i]
    }

    return sum
}

const testList = [1,2,3]
console.log(arraySum(testList))

// Problem 5 - Counter Function: Write a function that returns another function. 
// This inner function, when called with an array, 
// will return the total number of elements in the array.

function returnFunc() {
    return function(arr) {
        return arr.length
    }
}

anonymousFunc = returnFunc()
console.log(anonymousFunc(testList))

// Problem 6 - Array Modifier: Declare an array of strings in a global scope.
// Write a function that adds a new string to the array. 
// The function should not return anything.

globalStrings = ["this","is","global"]

function addString(newItem) {
    globalStrings.push(newItem)
}

addString("!")
console.log(globalStrings)

// Complex Challenges

// Problem 1 - Array Filter and Modifier: Write a function that takes a 
// number array i.e [12,13,14,15,16].
// The function should create a new local array and adds all even numbers
// from the number array then return the new array.

function returnEven(globArr) {
    const evenNumbers = globArr.filter(i => i % 2 === 0)
    //                        element to keep => condition to keep
    return evenNumbers
}

let testArr = [12,13,14,15,16]
console.log(returnEven(testArr))


// Problem 2 - Write a function that will return the highest,
// lowest and average salary from an array like the one below

const employees = [
    { id: 1, name: "John Doe", department: "Engineering", salary: 70000 },
    { id: 2, name: "Jane Smith", department: "Marketing", salary: 65000 },
    { id: 3, name: "Sam Williams", department: "Engineering", salary: 80000 },
    { id: 4, name: "Sandra Lee", department: "Finance", salary: 75000 }
  ];

function findInfo(lst) {
    const salaries = []

    for (let i = 0; i < lst.length; i++) {
        salaries.push(lst[i].salary)
    }

    const maxNum = Math.max(...salaries)
    const minNum = Math.min(...salaries)
    const avgNum = salaries.reduce((acc,salary) => acc + salary, 0) / salaries.length

    const salInfo = {
        highest: maxNum,
        lowest: minNum,
        average: avgNum
    }

    return salInfo
}
  
console.log(findInfo(employees)) 
  
//Expected out put
// returns:

//     higest: 80000,
//     lowest: 65000,
//     average: 72500

