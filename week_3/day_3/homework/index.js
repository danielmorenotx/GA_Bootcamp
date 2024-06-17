// ---------- VARIABLES ----------

// -- elements --
const jokesBtn = document.getElementById("jokesBtn")
const catsBtn = document.getElementById("catFactsBtn")
const memesBtn = document.getElementById("memesBtn")
const content = document.getElementById("content")
const btnContainer = document.getElementById("container")

const deleteBtn = document.createElement("button")
deleteBtn.textContent = "Delete"
deleteBtn.classList.add("delete-btn")

const undoContainer = document.getElementById("undo-delete-container");

// ---------- LISTENERS ----------

jokesBtn.addEventListener('click', fetchJokes);
catsBtn.addEventListener('click', fetchCats);
memesBtn.addEventListener('click', fetchMemes);
deleteBtn.addEventListener("click", pressDeleteButton);

// ---------- SO FETCH ----------
// -- jokes API call --
function fetchJokes() {
    clearContent();

    fetch("https://official-joke-api.appspot.com/random_ten")
        .then((response) => {return response.json();})
        .then((data) => { // readable format of the response
            console.log(data)
            const randomIndex = Math.floor(Math.random() * data.length);
            const randomJoke = data[randomIndex]
            
            const jokeSetup = document.createElement("div");
            jokeSetup.classList.add("item");
            jokeSetup.textContent = randomJoke.setup;
            content.appendChild(jokeSetup);
            console.log(randomJoke.setup);

            const jokePunchline = document.createElement("div");
            jokePunchline.classList.add("item");
            jokePunchline.textContent = randomJoke.punchline;
            content.appendChild(jokePunchline);
            console.log(randomJoke.punchline);

            addDeleteButton();
            })
        .catch((err) => {console.log(err)});
}

// -- cat API call --
function fetchCats() {
    clearContent();

    fetch("https://catfact.ninja/facts?limit=10")
        .then((response) => {return response.json();})
        .then((data) => {
            console.log(data)
            const randomIndex = Math.floor(Math.random() * data.data.length);
            const randomFact = data.data[randomIndex]

            const felineFact = document.createElement("div")
            felineFact.classList.add("item")
            felineFact.textContent = randomFact.fact
            content.appendChild(felineFact)

            addDeleteButton();
        })
        .catch((err) => {console.log(err)});
}

// -- memes API call --
function fetchMemes() {
    clearContent();

    fetch("https://api.imgflip.com/get_memes")
        .then((response) => response.json())
        .then((data) => {
            const randomIndex = Math.floor(Math.random() * data.data.memes.length);
            const randomMeme = data.data.memes[randomIndex];
            
            const itemContainer = document.createElement("div")
            const img = document.createElement("img");
            itemContainer.classList.add("item")
            img.classList.add("img")
            img.src = randomMeme.url;
            content.append(itemContainer)
            itemContainer.appendChild(img);

            addDeleteButton();
        })
        .catch((err) => console.log(err));
}

// ---------- FUNCTIONS ----------
// -- clear content --
function clearContent() {
    content.innerHTML = ""
    content.style.display = "block"
}

// -- append delete button --
function addDeleteButton() {
    content.append(deleteBtn)
}

// -- hides content when delete button is pressed --
function pressDeleteButton() {
    content.style.display = "none";

    removeUndoDelete()

}

function removeUndoDelete() {
    // adds the undo delete button and adds text content
    const undoDeleteBtn = document.createElement("button")
    undoDeleteBtn.textContent = "Undo Delete"
    // adds undo delete button to empty undo delete button container
    undoContainer.append(undoDeleteBtn)
    // adds event listener to undo delete button on click
    undoDeleteBtn.addEventListener("click", pressUndo);
    // adds a top margin to the container
    undoDeleteBtn.style.margin = "50px"
    // adds slow fade to the undo delete button
    undoDeleteBtn.classList.add("fade-out")
    
    setTimeout(function() {
        undoDeleteBtn.classList.add('fade');
    }, 500);
    setTimeout(function() {
        undoContainer.removeChild(undoDeleteBtn)
    }, 3500)
}

function pressUndo() {
    // changes the content back to block
    content.style.display = "block"

    //removes undo delete button from HTML
    const undoDeleteBtn = undoContainer.querySelector("button");
    if (undoDeleteBtn) {
        undoContainer.removeChild(undoDeleteBtn);
    }
}