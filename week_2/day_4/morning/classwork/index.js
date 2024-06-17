function multiply(n,m = 50) {
    console.log(n*m)
    return n*m
}

// multiply2 now does the same thing as multiply
let multiply2 = multiply

let result = multiply(2);
console.log(result)




// Function Practice

function student (name,age,score,address,comment) {
    if (score > 90) {
        grade = "A"
    }   else {
        grade = "B"
    }

    return {
        name: name,
        age: age,
        grade: grade,
        address: address,
        comment: "This is a comment for the student: " + comment
    }
}

console.log(student("Joe", 14,95, "n/a","good job"))

const newStudentFunction = student;

console.log(newStudentFunction("Joe", 14,95, "n/a","good job"))

const thirdStudent = student();

console.log(thirdStudent)

// Side effects

let newName = "daniel"
console.log(newName)

function changeName() {
    newName = "jake" // no 'let' changes original variable
}

changeName()
console.log(newName)