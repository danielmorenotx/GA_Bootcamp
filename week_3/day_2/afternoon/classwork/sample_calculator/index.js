console.log("index.js loaded")

let buttons = {}
let calcQueue = ["0"]

document.querySelectorAll("div.button").forEach(button => {
    buttons[button.textContent] = button
});

let display = document.querySelector(".display")
updateDisplay()

// add listeners to all buttons
for (let label in buttons) {
    button = buttons[label]
    if ("0123456789".includes(label)) {
        button.addEventListener("click", numberClicked)
    } else if ("-*/+".includes(label)) {
        button.addEventListener("click", operandClicked)
    } else if ("C" === label) {
        button.addEventListener("click", clearQueue)
    } else if ("=" === label) {
        button.addEventListener("click", evaluateQueue)
    }
}

function numberClicked(event) {
    if (calcQueue[0] === '0' && calcQueue.length === 1)
        calcQueue = [""]

    if (!isNaN(calcQueue[0]))
        calcQueue[calcQueue.length-1] += event.currentTarget.textContent
    
    updateDisplay()
}

function operandClicked(event) {
    if (!"+-/*".includes(calcQueue[calcQueue.length - 1]))
        calcQueue.push(event.currentTarget.textContent, "")
    updateDisplay()
}

function updateDisplay() {
    display.textContent = calcQueue.reduce((outString, el) => outString + el + " ", "")
    console.log("Current Queue: ", calcQueue)
}

function clearQueue(event) {
    calcQueue = ["0"]
    updateDisplay()
}

function evaluateQueue(event) {
    while (calcQueue.length > 1) {
        nextNum = doMath(calcQueue[0], calcQueue[2], calcQueue[1])
        calcQueue.splice(0, 3, nextNum)
    }
    updateDisplay()
}

function doMath(num1, num2, operand) {
    let a = Number(num1)
    let b = Number(num2)
    let result;

    switch (operand) {
        case "+":
            result = a + b
            break
        case "-":
            result = a - b
            break
        case "*":
            result = (a * b)
            break
        case "/":
            if (b !== 0) 
                result = (a / b)
            else
                result = NaN
            break
        default:
            result = NaN
            break
    }

    if (result % 1 != 0)
        return result.toFixed(2)

    return "" + result
}

console.log(buttons);