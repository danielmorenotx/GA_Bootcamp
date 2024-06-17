/*
Exercise 1: Define an empty array

1) Create an empty array and assign it to a variable called `foods`.

Exercise 1 has been completed for you:
*/

const foods = [];  

console.log('Exercise 1 result:', foods);

/*
Exercise 2: Add strings to the array

1) Add 'pizza' and 'cheeseburger' to the `foods` array. 

Note: 'pizza' should be the first item in the array, followed by 'cheeseburger'.

Complete Exercise 2 in the space below:
*/

foods.push("pizza","cheeseburger")

console.log('Exercise 2 result:', foods);

/*
Exercise 3: Insert at the beginning

1) Insert the string 'taco' at the beginning of the `foods` array.

Complete Exercise 3 in the space below:
*/

foods.unshift("taco")

console.log('Exercise 3 result:', foods);

/*
Exercise 4: Access an array element

1) Retrieve the 'pizza' string from the array based on its position (index) in
   the array.  

2) Assign it to a variable called `favFood`.

Complete Exercise 4 in the space below:
*/

let favFood = foods[1]

console.log('Exercise 4 result:', favFood);

/*
Exercise 5: Print all items using a for loop

1) Use a for loop to iterate through the `foods` array.

2) Print each item in the array to the console.

Complete Exercise 5 in the space below:
*/

// Your for loop here

for (let i = 0; i < foods.length; i++) {
    console.log(foods[i])
}

console.log('Exercise 5 result: See above for printed items.');


/*
Exercise 6: Find a specific item with a for loop

1) Use a for loop to search for the item 'cheeseburger' in the `foods` array.

2) If found, print 'Cheeseburger is at index X', where X is the index of 'cheeseburger' in the array. Otherwise, print 'Cheeseburger not found'.

Complete Exercise 7 in the space below:
*/

// Your for loop here

for (let i = 0; i < foods.length; i++) {
    if (foods[i] === "cheeseburger") {
        console.log("Exercise 7 result:","Cheeseburger is at index X', where X is the index of", i)
    }
}

/*
Exercise 7: Sum all numbers in an array

1) Given an array of numbers, find the sum of all elements.

2) Use a for loop to iterate through the array and sum the elements.

3) Assign the sum to a variable called `totalSum` and print it.

Given array for Exercise 8:
*/

const numbers = [10, 20, 30, 40, 50]; // Example array
totalSum = 0

for (let i = 0; i < numbers.length; i ++) {
    totalSum += numbers[i]
}

console.log(totalSum)


// Exercise 8

// Part 1 - Create User Object

const user = {
    name: "John Doe",
    age: 30,
    email: "johndoe@example.com",
    isLoggedIn: false
  };
  
// Part 2 - Accessing Object Properties

  console.log(user.name, user.email);
  
// Part 3 - Modifying Object Properties

user.isLoggedIn = true

console.log(user)

// Part 4 - Adding New Properties

user.hobbies = ["reading","gaming","hiking"]
console.log(user.hobbies)

// Part 5 - Removing Properties

delete user.email
console.log(user)

// Part 6 - Nested Objects

user.address = {
    street: "123 Main Street",
    city: "Austin",
    country: "USA"
}

console.log(user.address.city)

// Part 7 - Optional Challenge - Looping Through Object Properties

for (let key in user) {
    console.log(user[key])
}