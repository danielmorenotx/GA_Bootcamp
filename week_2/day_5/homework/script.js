console.log("script file wire up!!!")

// 1. allNames:
// Use .forEach to print all persons names in the console.

function printNames(n) {
    console.log(n.name)
}

data.forEach(printNames)

// single line solution

data.forEach(person => console.log(person.name))

// 2. totalAgeAllPersons:
// Find the total combined age of all persons.


function totalAge(acc,person) {
    return acc + person.age
}

let totalAges = data.reduce(totalAge,0)
console.log(totalAges)

//single line solutions

console.log(data.reduce((acc,person) => sum + person.age, 0))

// 3. totalAgeAllPets:
// Find the total combined age of all pets.

const totalCombinedAge = data.reduce((accum, person) => {
    
    for (const pet of person.pets) {
        accum += pet.age;
    }
    return accum;
}, 0);

console.log(totalCombinedAge)

// TEACHER ANSWER

// add all peoples total pets age together
function personPetsAccumulator(totalSum, person) {
    //turn peoples pets array into single value
    function petsAccumulator(petSum, pets) {
        return petSum + pets.age
    }
    return totalSum + person.pets.reduce(petsAccumulator, 0)
}

let totalPetAge;
totalPetAge = data.reduce(personPetsAccumulator, 0);
console.log(totalPetAge);

//single line solution
totalPetAge = data.reduce((accum, person) => accum + + 
person.pets.reduce((accum, pet) => accum + pet.age, 0), 0)
console.log(totalPetAge)

// 4. oldEnough:
// Use .filter() to create an array of people old enough to be president.

function bePresident(person) {
    return person.age >= 35
}

let oldEnough = data.filter(bePresident)
console.log(oldEnough)

// single line solution

oldenough = data.filter(person => person.age >= 35)
console.log(sadPeople)

// 5. sadPeople:
// Use .filter() to create an array of "sad" people (people with no pets).

function noPets(person) {
    return person.pets.length === 0
}

let sadPeople = data.filter(noPets)
console.log(sadPeople)

//single line solution
sadPeople = data.filter(person => person.pets.length === 0)
console.log(sadPeople)

// 6. warAndPeace:
// Use.map() to create an array called warAndPeace that has, in each index the string "war" or "peace"
// * the string "war" if the person at that has BOTH a cat AND a dog.
// * the string "peace" otherwise.

function warAndPeace(person) {
    
    let hasCat = false
    let hasDog = false
    
    for (const pet of person.pets) {
        if (pet.type == "cat") {
            hasCat = true
        } else if (pet.type == "dog") {
            hasDog = true
        }

        if (hasCat && hasDog) {
            return "war"
        }
    }
    return "peace"
}

let warOrPeace = data.map(warAndPeace)
console.log(warOrPeace)

// TEACHER ANSWER

function warOrPeace(person) {
    
    function isCatPresent(accum, pet) {
        return accum || pet.type === "cat"
    }

    function isDogPresent(accum, pet) {
        return accum || pet.type === "dog"
    }
    
    if (person.pets.reduce(isCatPresent, false) && person.pets.reduce(isDogPresent, false))
        return "war"

    return "peace"
}

let warAndPeace;

warAndPeace= data.map(warOrPeace)
console.log(warAndPeace);

// single line
warAndPeace = data.map(person => 
    person.pets.reduce((accum, pet) => accum | pet.type === "cat", false) && 
    person.pets.reduce((accum, pet) => accum | pet.type === "dog", false) ? "war" : "peace") // if condition is true ? "do this" : "else do this"
console.log(warAndPeace);


// 7. justSpock:
// Create an array of all the pet objects where the pets named is "spock".

function justSpock(person) {
    for (const pet of person.pets) {
        if (pet.name.toLowerCase() == "spock") {
            return true
        }
    }
    return false
}

let petSpock = data.filter(justSpock)
console.log(petSpock)

// TEACHER ANSWER

//takes every person and returns their pets array
function replaceWithPets(person) {
    return person.pets
}

// goes through every element in the array, dumps them into a concat function
// puts it at the end of the accumulator
function flattenArray(accum, subArray) {
    // accum is an empty array initially
    return accum.concat(...subArray)
}

//
function filterSpock(pet) {
    return pet.name === "spock"
}

let allSpocks;

allSpocks = data.map(replaceWithPets).reduce(flattenArray, []).filter(filterSpock)
console.log(allSpocks);

//single line solution

allSpocks = data.map(person => person.pets)
    .reduce((accum, subArray) => accum.concat(...subArray), [])
    .filter(pet => pet.name === "spock")
console.log(allSpocks);

//flat map solution




// HUNGRY FOR MORE???

// 8. catYears:
// Find the total combined age of all cats (type: "cat").

function catYears(person) {
    return person.pets.reduce((accum,pet) => {
        if (pet.type == "cat") {
            return accum + pet.age
        }
    return accum
    }, 0);
}

let totalCatYears = data.reduce((accum,person) => accum + catYears(person),0)
console.log(totalCatYears)

// TEACHER ANSWER

function catFilter(pet) {
    return pet.type === "cat"
}

let catYears = data.map(replaceWithPets)
    .reduce(flattenArray, [])
    .filter(catFilter)
    .reduce(addObjectAge, 0)

console.log(catYears);

// 9. combinedAgeOfAllPetsOfDrinkers:
// Find the combined age of all pets belonging to people old enough to legally purchase alcohol

function combinedAgeofAllPetsOfDrinkers(person) {
    if (person.age >= 21) {
        return person.pets.reduce((accum, pet) => {
            return accum + pet.age;
        }, 0);
    }
    return 0;
}

const totalCombinedAgeOfDrinkersPets = data.reduce((accum, person) => accum + combinedAgeofAllPetsOfDrinkers(person), 0);

console.log(totalCombinedAgeOfDrinkersPets);


// 10. youngestPets:
// Create an array containing the youngest pet each pet owner has.
// Here's the answer: 
/*
[ { type: 'rock', name: 'herbert', age: 126003219 },
  { type: 'cat', name: 'colby', age: 1 },
  { type: 'guinea pig', name: 'kirk', age: 1 },
  { type: 'dog', name: 'midnight', age: 3 },
  { type: 'dog', name: 'quinn', age: 8 },
  { type: 'dog', name: 'hazel', age: 7 },
  { type: 'monstera', name: 'holey', age: 1 },
  { type: 'goldfish', name: 'betsy', age: 4 },
  { type: 'cat', name: 'rosie', age: 0.005 },
  { type: 'dog', name: 'nacho', age: 1 },
  { type: 'bearded dragon', name: 'ferg', age: 3 },
  { type: 'cockatoo', name: 'spockatoo', age: 33 },
  { type: 'cat', name: 'mija', age: 6 },
  { type: 'cat', name: 'caesar', age: 3 },
  { type: 'cat', name: 'eddie', age: 7 },
  { type: 'cat', name: 'rocky', age: 5 },
  { type: 'snake', name: 'reginald', age: 12 } ]
*/

// didn't know how to do this so I asked chatGPT

const youngestPets = {};

// Iterate through each person in the data array
data.forEach(person => {
    // Iterate through each pet of the current person
    person.pets.forEach(pet => {
        // If the person already has a youngest pet stored and the current pet is younger, update the youngest pet
        if (!youngestPets[person.name] || pet.age < youngestPets[person.name].age) {
            youngestPets[person.name] = pet;
        }
    });
});

// Extract the youngest pets from the object into an array
const youngestPetsArray = Object.values(youngestPets);

console.log(youngestPetsArray);

// TEACHER ANSWER

function replaceWithYoungestPet(person) {

    function keepYoungestPet(accum, pet) {
        if (pet.age < accum.age)
            return pet
        return accum
    }

    return person.pets.reduce(keepYoungestPet, {age: Number.MAX_SAFE_INTEGER})
}

function filterNames(pet) {
    return pet.name !== undefined
}

let youngestPets = data.map(replaceWithYoungestPet).filter(filterNames)
console.log(youngestPets);


// 11. petNameString:
// Create a string that is all the pets names separated by spaces (order doesn't matter).

const petNameString = data.flatMap(person => person.pets.map(pet => pet.name));

const petString = petNameString.join(' ');

console.log(petString); 

// TEACHER ANSWER


// turn all people into pets arrays
function concatNames(accum, pet) {
    
    
    return accum + pet.name + " "
}

// take all pets arrays and flatten them
let petNameString = data.map(replaceWithPets)
    .reduce(flattenArray)
    .reduce(concatNames, "")

console.log(petNameString);