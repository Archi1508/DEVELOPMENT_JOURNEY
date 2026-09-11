// Your Practice 1 — Array Basics

// Write code to:

// Create an array called fruits
// Store "Apple", "Mango", "Banana", "Orange" in it
// Print the first element
// Print the third element
// Print the length of the array

// const fruits = ["Apple", "Mango", "Banana", "Orange"]
// console.log(fruits[1]);
// console.log(fruits[2]);

// console.log(fruits.length);

// for(let i=0;i<fruits.length;i++)
// {
//     console.log(fruits[i]);
// }


// const numbers = [10, 20, 30, 40, 50];

// for(let i=0;i<numbers.length;i++)
// {
//     console.log(numbers[i]);
// }

// numbers.push(20);


// Create:

// const numbers = [10, 20, 30];

// Then use push() to:

// Add 40
// Add 50
// Print the array


// const number = [10,20,30]
// number.push(40,50);
// number.pop();
// number.shift();
// number.unshift(20);
// for(let i=0;i<number.length;i++)
// {
//     console.log(number[i]);
// }


//splice
// splice(start, deleteCount, itemsToAdd)
// const nums = [10,20,30,40,50]
// nums.splice(3,2) //remove
// nums.splice(4,0,55) //add
// nums.splice(4,1,7) //replace



// const numbers = [10, 20, 30, 40, 50];
// numbers.forEach(function(num){
//     console.log(num);
// });

// const values = [2, 4, 6, 8];
// const doubled = values.map(function(num){
//     return num*2;
// });

// const nums = [5, 10, 15, 20, 25, 30];
// const greaterThan15 = nums.filter(function(number){
//     return number>15
// });

// const calSum = [5, 10, 15, 20];
// const total = calSum.reduce(function(acc,num){
//     return acc+num;
// },0);


// Create:

// const message = "hello javascript";

// Write code to:

// Print its length.
// Convert it to uppercase.
// Check whether it includes "javascript".
// Find the index of "javascript".

// const message = "hello javascript"
// console.log(message.length);
// message.toUpperCase();
// message.includes("javascript")
// message.indexOf("javascript")


// Your practice

// Write code with:

// const name = "Archi";
// const course = "JavaScript";
// const duration = 3;

// Print this using one template literal:

// My name is Archi. I am learning JavaScript for 3 months.

// Don't concatenate with +. Use ${}.

const name = "Archi"
const course = "Javascript"
const duration = 3
console.log(`My name is ${name}. I am learning ${course} for ${duration} months`);

const text = "Apple,Banana,Mango";
const fruits = text.split(",");