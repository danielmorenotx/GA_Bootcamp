const title = document.querySelector("h2")
const button = document.querySelector("button")
const removeStyleButton = document.querySelector("#removeStyleButton")
const hide = document.querySelector("#hide")
const checkbox = document.querySelector("#toggle")
const body = document.querySelector("body")

const sectionParent  = document.querySelector(".section")
const childDiv = document.querySelector(".to-be-removed")
const clear = document.querySelector(".clear")

const commentToBeRemoved = document.querySelector(".comment")
const commentDeleteButton = document.querySelector(".delete-comment")

//calbacks
function handleClick() {
  title.classList.add("title", "border")
}

function handleRemove() {
  title.classList.remove("title", "border")
}

function handleHide() {
  title.classList.add("hide")
}

function handleChange() {
  body.classList.toggle("dark")

  console.log("Toggle on / off");
}

function handleClear() {
  sectionParent.removeChild(childDiv)
}

function handleCommentDelete() {
  commentToBeRemoved.remove()
}

// Event
button.addEventListener("click", handleClick)
removeStyleButton.addEventListener("click", 
handleRemove)
hide.addEventListener("click", handleHide)

checkbox.addEventListener("change", handleChange)


clear.addEventListener('click', handleClear)

//===================================


commentDeleteButton.addEventListener("click", handleCommentDelete)

const lists = document.querySelector(".lists")

lists.innerHTML = ""

//removeChild 
