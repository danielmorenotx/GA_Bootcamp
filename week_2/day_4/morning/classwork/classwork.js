//Display Name

function displayName(name) {
    console.log(name)
}

displayName("Daniel")

//square

function squareSelf(num) {
    return num ** num
}

console.log(squareSelf(5))

// Show side effect

let name = "Jane"
console.log(name)

function funcWithSideEffect() {
    name = "Joe"
}

funcWithSideEffect()
console.log(name)