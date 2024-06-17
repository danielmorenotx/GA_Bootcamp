console.log("Connected");

// Step 1 - Variable
const header = document.getElementById("header")

const main = document.getElementById("main")

const link1 = document.createElement("a")

const link2 = document.createElement("a")

const title = document.getElementById("title")

const todoListContainer = document.getElementById("todoListContainer")

const todoListButton = document.getElementById("todoListButton")
const todoInput = document.getElementById("todo")

link1.textContent = "Home"
link2.textContent = "main"

// Step 2 - Style
header.style.display = "flex"
header.style.justifyContent = "space-around"
header.style.alignItems = "center"
header.style.border = "1px solid black"
header.style.height = "100px"

title.style.borderBottom = "1px solid black"
title.style.paddingBottom = "5px"

todoListContainer.style.border = "2px dashed grey"
todoListContainer.style.boxShadow = "1px 3px 3px black"
todoListContainer.style.height = "500px"

// DOM
header.appendChild(link1)
header.appendChild(link2)

// let arrayOfInputs = []

// callbacks
function handleClick(params) {
  // console.log(todoInput.value);
  let userInput = todoInput.value;
  // arrayOfInputs.push(userInput)
  // alert(userInput)
  // console.log(userInput);

  const div = document.createElement("div")
  div.style.border = "2px solid black"
  div.style.height = "50px"
  div.style.marginBottom = "20px"

  const h3 = document.createElement("h3")
  h3.textContent = userInput;
  div.appendChild(h3);

  todoListContainer.appendChild(div)

}


//events
todoListButton.addEventListener("click", handleClick)


const todoListText = title.textContent


/////////////////////////
const div1 = document.getElementById("div1")

const div2 = document.getElementById("div2")

const div3 = document.getElementById("div3")

function handleDivClick(params) {
  let div1Text = div1.textContent
  console.log(div1Text);

  let div3textContent = div3.textContent

  // div3textContent = div3textContent + div1Text

  div3.textContent = div3.textContent + div1Text
}

div1.addEventListener("click", handleDivClick)

const target = document.getElementById("target")

const newInput = document.getElementById("newInput")

const appendButton = document.getElementById('appendButton')

function handleAppend() {
  let newInputValue = newInput.value;
  console.log(newInputValue);
  target.textContent = target.textContent + " " + newInputValue
}

appendButton.addEventListener("click", handleAppend)