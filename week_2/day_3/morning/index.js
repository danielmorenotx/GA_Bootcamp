console.log("connected")

let movies = ["LotR", "Spider-Man", "No Country for Old Men"]

console.log(movies)

const lotr = movies[0]
const noCountry = movies[2]
console.log(lotr)
console.log(noCountry)

movies[2] = "There Will Be Blood"

console.log(movies)

let tasks = []

// push will return the number of items in an array
// equal to array.length after new elements are added
console.log(tasks.push("clean","wash","sweep"))

// pop will return the element that was removed
console.log(tasks.pop())

// removes first element and shifts everything back
console.log(tasks.shift())

//adds new element to the front
console.log(tasks.unshift("scrub"))

// Objects
let car = {
    color: 'black',
    make: 'Toyota',
    model: 'Corolla',
    miles: 2000,
    year: '2023'
}

let carMake = car.make;

console.log(carMake)

//adds a key:value to the object
car.seats = 4

// objects can be values of keys

const mymovies = {
    year: 1998,
    genre: "comedy",
    runtime: 90,
    rating: 5,
    cast: {
        amount: 50,
        location: "LA"
    },
    cinemas: ['Austin',"Dallas"],
    sequel: {
        title: "The Hobbit",
        year: 2017,
        cinemas: ["NY","LA"]
    }
}

console.log(mymovies.cast.amount)
console.log(mymovies.length)

console.log(mymovies.sequel.cinemas.length)