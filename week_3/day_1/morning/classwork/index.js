// using tag name
const h1 = document.querySelector("h1")
console.log(h1)

// using the ID
const h1WithId = document.querySelector("#h1-2")
console.dir(h1WithId)

// using classes
const h1WithClass = document.querySelector(".header")
console.dir(h1WithClass)

const h1WithClass2 = document.querySelector(".header3")
console.dir(h1WithClass2)

h1.textContent = "New Title"
h1WithId.textContent = "DOM 2 Updated" //recommended
h1WithClass.textContent = "DOM 3 Updated"

// querySelectorAll()

let titles = document.querySelectorAll("h1") // array

function countUpdates(title) {
    for (let i = 0; i < titles.length; i++) {
        console.log(titles[i]);
        let currentH1Element = titles[i];
        currentH1Element.textContent = "Updated for " + i
    }
}

console.dir(titles.forEach(countUpdates))

// getElementById

const button = document.getElementById("button-1")
const counter = document.getElementById("counter")

console.dir(button)
console.dir(counter)

// getElementsByClassName

const subheaders = document.getElementsByClassName("subheader")
console.dir(subheaders)

// modifying styles

const container = document.getElementById("container")

container.style.border = "3px dashed red"
container.style.height = "150px"
container.style.boxShadow = "1px 2px 3px grey"

// add classes to nodes
// container.classList.add("container")

button.addEventListener("click",countUpdates)


