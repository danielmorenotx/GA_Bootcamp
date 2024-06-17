// ---------- VARIABLES ----------
// -- calculator --
const display = document.getElementById("display")
const allButtons = document.getElementsByClassName("button")
const eqButton = document.getElementById("equals")
const clearButton = document.getElementById("clear")

// -- body --
const body = document.querySelector("body")
const darkSwitch = document.getElementById("dark-switch")

// -- history box --
const clearHistoryButton = document.getElementById("clear-history")
let historyList = document.getElementById("listed-history")

// -- default screen and calculation --
let displayScreen = ""
let storedCalculation = ""

// ---------- CALLBACKS ----------

// -- Callback for number button click --
function numClicked(event) {
    const clickedNum = event.target;
    let number = clickedNum.textContent
    console.log("clicked number:",number)

    // the final output of an equation will be a number
    // if the display screen is a number, the next button will start a new equation
    if (typeof displayScreen === "number") {
        displayScreen = "";
        storedCalculation = "";
        displayScreen = number;
        display.textContent = displayScreen;
        storedCalculation = storedCalculation.concat(number);
    
    // tests if the stored calculation has an operator in it
    } else if (/[+\-*\/]/.test(storedCalculation)) {
        
        // checks if the most recent button pushed is an operator
        // if yes, the screen is populated with the new number
        if ("/*-+".includes(storedCalculation[storedCalculation.length - 1])) {
            displayScreen = "";
            displayScreen = number;
            display.textContent = displayScreen;
            storedCalculation = storedCalculation.concat(number);
        
        // if no, it concats the number to the existing string
        } else {
            displayScreen = displayScreen.concat(number)
            display.textContent = displayScreen
            storedCalculation = storedCalculation.concat(number)
        }
    // concats the button number to the display screen
    } else {
        displayScreen = displayScreen.concat(number);
        display.textContent = displayScreen;
        storedCalculation = displayScreen;
    }
    
    console.log("stored calculation:",storedCalculation)
}

// -- callback for operator button click --
function opClicked(event) {
    const clickedOp = event.target
    let operator = clickedOp.textContent
    console.log("clicked op:",operator)

    if (typeof displayScreen === "number") {
        displayScreen = displayScreen.toString()
        storedCalculation = displayScreen + operator
    } else {
        storedCalculation = storedCalculation.concat(operator)
    }
    
    console.log("stored calculation:",storedCalculation)
}

// -- callback for equals button click --
function calculate() {
    let calcArray = storedCalculation.split(/(\+|\-|\*|\/)/)
    let result = parseInt(calcArray[0])
    let secondNum = parseInt(calcArray[2])
    

    if (calcArray[1] == "+") {
        result += secondNum;
    } else if (calcArray[1] == "-") {
        result -= secondNum
    } else if (calcArray[1] == "*") {
        result *= secondNum
    } else if (calcArray[1] == "/") {
        if (result == 0) {
            result = 0;
        } else if (secondNum == 0) {
            result = "Error"
        } else {
            result /= secondNum
        }
    }

    displayScreen = result;
    display.textContent = displayScreen
    console.log("Display result:",result)

    // create a new function for the history outside
    // call the function here

    //history content
    let equationHistory = document.createElement("div")
    historyList.appendChild(equationHistory)
    equationHistory.classList.add("history")

    let singleEquation = document.createElement("div")
    let singleDelete = document.createElement("button")

    equationHistory.appendChild(singleEquation)
    equationHistory.appendChild(singleDelete)

    singleEquation.textContent = storedCalculation + "=" + result
    singleDelete.textContent = "Delete"

    singleDelete.addEventListener("click", function deleteEquation() {
        equationHistory.remove();
    });

    historyList.prepend(equationHistory);

}

function historyContent() {
    let equationHistory = document.createElement("div")
    historyList.appendChild(equationHistory)
    equationHistory.classList.add("history")

    let singleEquation = document.createElement("div")
    let singleDelete = document.createElement("button")

    equationHistory.appendChild(singleEquation)
    equationHistory.appendChild(singleDelete)

    singleEquation.textContent = storedCalculation + "=" + result
    singleDelete.textContent = "Delete"

    singleDelete.addEventListener("click", function deleteEquation() {
        equationHistory.remove();
    });

    historyList.prepend(equationHistory);
}

// -- callback for clear button --
function clearDisplay(event) {
    displayScreen = ""
    display.textContent = displayScreen;
    storedCalculation = ""
}

// -- callback to clear history --
function clearHistory() {
    // Convert NodeList to array
    const divElements = Array.from(historyList.querySelectorAll("div"));
    // Iterate over the array and remove each element
    divElements.forEach(element => {
        element.remove();
    });
}

// -- callback for dark mode switch --
function darkMode() {
    body.classList.toggle("dark")
}


// ---------- EVENTS ----------

// -- add listeners to all buttons --
for (let i = 0; i < allButtons.length; i++) {
    
    const buttonText = allButtons[i].textContent;

    if ("0123456789".includes(allButtons[i].textContent)) {
        allButtons[i].addEventListener("click", numClicked)
    } else if ("-+*/".includes(allButtons[i].textContent)) {
        allButtons[i].addEventListener("click",opClicked)
    } else if ("C".includes(allButtons[i].textContent)) {
        allButtons[i].addEventListener("click",clearDisplay)
    } else if ("=" === eqButton.textContent) {
        allButtons[i].addEventListener("click",calculate)
    }
}

// -- clear History button --
clearHistoryButton.addEventListener("click",clearHistory)

// -- dark mode --
darkSwitch.addEventListener("change", darkMode)