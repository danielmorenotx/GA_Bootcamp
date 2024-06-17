//1
function hello() {
    return "hello"
}

console.log(hello())

//2
function world() {
    return "world"
}

console.log(world())

//3
function named(name) {
    return name
}

console.log(named("Bob"))

//4
function helloName(name) {
    console.log("Hello",name)
}

helloName("Bob")

//5
function multiplySelf(number) {
    console.log(number * number)
}

multiplySelf(5)

//6
function square(number) {
    console.log(number ** 2)
}

square(5)

//7
function sumNumbers(num1 = 10, num2 = 0, num3 = 0) {
    if (num1 !== 10 && num2 === 0 && num3 === 0) {
        return num1;
    }
    
    return num1 + num2 + num3

}

console.log(sumNumbers())

//8
function addZeros(num,numz) {
    for (i=1; i <= numz; i++) {
        num = num.toString() + "0"
    }
    return Number(num)
}

console.log(addZeros(5,5))

//9
function factory() {
    return function() {
        console.log("Hello, World!")
    }
}

anonymousFunction = factory()
anonymousFunction()

//10
let string = "This is a string"

function modifyString() {
    string = "This is a new string"
}

modifyString()
console.log(string)

//11
arr = [1,2,3,4,5]

function removeFirst() {
    arr.shift()
}

removeFirst()
console.log(arr)

//12

arr1 = ["hello","world"]

function arrLength() {
    arr1.push("flabbergasted")
    return arr1.length
}

console.log(arrLength())

function modifyArr() {
    arr1[0] = "Not flabbergasted"
    arr1.push("flabbergasted")
}

console.log(modifyArr())