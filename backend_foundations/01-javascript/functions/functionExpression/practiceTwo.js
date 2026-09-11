// Practice Question 1

// Write a function expression named calculateSquare that:

// Takes a number as a parameter.
// Calculates its square.
// Returns the square.
// Store the returned value in a variable called result.
// Print result.

// const calculateSquare = function(num)
// {
//     return num*num;
// }
// const result = calculateSquare(20);
// console.log(result);

// 🧩 Practice Question 2

// Write a function expression called addNumbers that:

// Takes two parameters a and b
// Returns their sum
// Calls the function with 15 and 25
// Stores the returned value in result
// Prints result

// const addNumbers = function(a,b)
// {
//     return a+b;
// }
// const result = addNumbers(15,25);
// console.log(result);

// Practice Question 3 — 🟡 Medium

// Let's make it a little harder and introduce something new without leaving Function Expressions.

// 🧩 Challenge: Grade Calculator

// Write a function expression called calculateGrade that:

// Takes marks as a parameter.
// Returns:
// "A" if marks are 90 or above
// "B" if marks are 75–89
// "C" if marks are 60–74
// "D" if marks are below 60
// Call the function with 82.
// Store the returned value in a variable called grade.
// Print grade.

const gradeCalculator = function(marks)
{
    if(marks>=90)
    { return "A";}
    else if(marks>=75 && marks<=89)
    { return "B";}
    else if(marks>=60 && marks<=74)
    { return "C";}
    else
    { return "D";}
}
const grade = gradeCalculator(82);
console.log(grade);

const gradeCalculator = function(marks) {
    if (marks >= 90) { return "A";}
    else if (marks >= 75) {return "B";}
    else if (marks >= 60) { return "C";}
    else {return "D"; }
};
const grade = gradeCalculator(82);
console.log(grade);

