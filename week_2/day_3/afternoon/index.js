console.log("connected")

let car = "new car"
let year = 2024

let carInfo = {
    car: car,
    year: year
}

// single path

if (carInfo.car === "new car") {
    console.log("Your new car is from year",year)
}

// double path

if (carInfo.year < 2016) {
    console.log("You need good insurance");
} else {
    console.log("You good.")
}

/// Three+ path

const val = 3;

if (val === 1) {
  console.log('val is one');
} else if (val === 2) {
  console.log('val is two');
} else if (val === 3) {
  console.log('val is three');
} else {
  console.log('not one, two, or three');
}

// For loop

const movies = ["LotR","Spider-Man","No Country"]

for (let num = 0; num < 3; num++) {
    console.log(movies[num])
}

// While loop

let numb = 1

while (numb <= 10) {
  numb++
  console.log("running")
}

let numbr = 1

while (numbr <= 20) {
  console.log(numbr,'multiplied by 45 is',numbr*45)
  numbr++
}

console.log(numbr);

// Arrays using loops

