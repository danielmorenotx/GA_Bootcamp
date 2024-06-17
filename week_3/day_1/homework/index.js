// ------ VARIABLES ------

// Selecting the display element
const display = document.getElementById('display');
// Selecting all button elements
const operationButtons = document.getElementsByClassName("operation");
const numberButtons = document.getElementsByClassName("number")
const clearButton = document.getElementById("clear")
const equalsButton = document.getElementById("equals")
// Initializing a variable to hold the accumulated string
let displayScreen = "0";

// ------ FUNCTIONS ------
// number buttons to perform an operation
function numButtonPressed(event) {
    const clickedNumButton = event.target
    numberButtons.style
}

// display numbers on screen
function opButtonPressed(event) {
    const clickedOpButton = event.target
    displayScreen = displayScreen + clickedOpButton.textContent;

    display.textContent = displayScreen;
}

// clearing screen
function clearScreen(event) {
    displayScreen = ""
    display.textContent = displayScreen;
}

// execute equation
function calculate(event) {
    // Split the displayScreen content into values and operator
    const valuesAndOperator = displayScreen.split(/(\+|\-|\*|\/)/);
    // Extract values and operator from the array
    const v1 = parseInt(valuesAndOperator[0]);
    const op = valuesAndOperator[1];
    const v2 = parseInt(valuesAndOperator[2]);

    // stores actual value
    let result;

    // Perform the operation based on the operator
    if (op === "+") {

        result = v1 + v2;
    } else if (op === "-") {
        result = v1 - v2;
    } else if (op === "/") {
        result = v1 / v2;
    } else if (op === "*") {
        result = v1 * v2;
    }

    // Update the display with the result
    display.textContent = result;
}

// ------ EVENT LISTENERS ------
// Adding click event listener to each operation button
for (let i = 0; i < operationButtons.length; i++) {
    operationButtons[i].addEventListener("click",opButtonPressed);
}

for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener("click",numButtonPressed);
}

// adding click event listener for clear button
clearButton.addEventListener("click",clearScreen);

//adding click event listener for equals button
equalsButton.addEventListener("click",calculate);


// 1. I want to be able to select numbers so that I can perform operations with them.
// 2. I want to be able to add two numbers together.
// 3. I want to be able to subtract one number from another.
// 4. I want to be able to multiply two numbers together.
// 5. I want to be able to divide one number by another.
// 6. I want to be able to see the output of the mathematical operation.
// 7. I want to be able to clear all operations and start from 0.