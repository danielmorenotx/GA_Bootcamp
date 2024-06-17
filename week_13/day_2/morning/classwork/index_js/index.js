// const and let
const person = "Joe"
const age = 12

let description = person + " is " + age + " year old";

console.log(description);

description = "None"

console.log(description);

console.log('====================================');
console.log();
console.log('====================================');

// template string

const name = "jane";
const ageOfPerson = 45;

// '' | "" | ``
const greeting = `Hello my name is ${name} i am ${ageOfPerson} years old`

console.log(greeting);


// Arrays and Objects

const people = ['Joe', 'Jane', 'Joe'] 
console.log(people[2]);

const info = {name: 'John', age: 25}
console.log(info.name, info.age);

const numbers = [1,2,3,4]

const doubleNumbers = numbers.map(num => num * 2)

console.log(doubleNumbers);


// spread operator
const additionalNumbers = [...numbers, 10, 20]

const newPerson = {name:"dave", age: 45}
const updatedPerson = {...newPerson, age: 55}

console.log(newPerson);

console.log(updatedPerson);

// Array/object destructuring
// object destructuring
const student = {nameOfStudent: "jane", ageOfStudent: 18}

const {nameOfStudent, ageOfStudent} = student;

console.log(nameOfStudent, ageOfStudent);


const car = {make: "toyota", model: "rav4"}
const {make, model} = car;
console.log(make, model);

const carDescription = `This car is made by ${make} and its model is ${model}`

console.log(carDescription);

// array destructuring
const programmingLanguage = ['Java', 'JS', 'Ruby']
const [java, js , ruby] = programmingLanguage

console.log(java, js, ruby);

const devices = ['Awesome Tablet', 'Good Laptop', 'Nice Phone']
const [tablet, laptop, phone] = devices

console.log(tablet, laptop, phone);


// Arrow Functions
// Go from 'Normal named' functions to arrow functions

function addOld(num1, num2) {
  return num1 + num2
}

const add = (num1, num2) => num1 + num2;


// DOM manipulation
const header = document.getElementById("header")
header.textContent = "Hello JavaScript!"

const list = document.getElementById("list")
const arrayOfLists = ['Tablet', 'Laptop', 'Phone', 'Key']

for (let i = 0; i < arrayOfLists.length; i++) {
  const newItem = document.createElement("li");
  newItem.textContent = arrayOfLists[i]
  list.appendChild(newItem)
}

// Adding event listeners

const button = document.getElementById("clickme");
button.addEventListener('click', () => {
  alert("Button is clicked!")
})

// Changing styles
const box = document.getElementById("box");
box.style.width = '100px'
box.style.height = '100px'
box.style.border = '1px solid black'
box.style.margin = '10px'
box.style.backgroundColor = "red";


const arrayOfBlogs = [];

function loadBlogs() {
  fetch('http://localhost:8080/blogs/all-blogs')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    arrayOfBlogs.push(...data);
    displayBlogs(data);
  })
  .catch(error => {
    console.error('Error fetching blogs: ', error)
  })
}

// function to display all blogs on the html
function displayBlogs(arrayOfBlogs) {
  const list = document.getElementById("list"); // Retrieve the list element
  list.innerHTML = ''; // clears the existing list

  for (let i = 0; i < arrayOfBlogs.length; i++) {
    const newBlog = document.createElement('li') // create a list item...
    newBlog.textContent = arrayOfBlogs[i].title + ': ' + arrayOfBlogs[i].content;
    list.appendChild(newBlog)
  }
}

loadBlogs()

window.onload = function() {
  loadBlogs();
}

// // Load Posts
// function loadBlogs() {
//   fetch("http://localhost:8080/blogs/all-blogs")
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       handlePosts(data);
//     })
//     .catch((error) => {
//       console.log("Crtical error", error);
//     });
// }

// loadBlogs();

// const listPosts = document.getElementById("list");


// function handlePosts(data) {
//     data.forEach((postInList) => {
//         // createa a title
//         const newBlog = document.createElement("li")
//         const newBlogContainer = document.createElement("div");
//         const newBlogTitle = document.createElement("h1");
//         newBlogTitle.textContent = postInList.postTitle;
//         newBlogContainer.appendChild(newBlogTitle);
//     //Create a paragraph
//     const newBlogPost = document.createElement("p");
//     newBlogPost.textContent = postInList.postContent;
//         newBlogTitle.appendChild(newBlogPost);
//         //Create media URL
//         // const newBlogMedia = document.createElement("p")
//         newBlog.appendChild(newBlogContainer)
//         listPosts.appendChild(newBlog);
//   });
// }