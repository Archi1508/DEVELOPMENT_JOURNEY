// Object Practice 1 — Basic Object

// Create an object called student with these properties:

// name → "Archi"
// age → 22
// course → "JavaScript"

// Then:

// Print the student's name using dot notation.
// Change the age to 23.
// Add a new property city with value "Delhi".
// Print the city using bracket notation.

// const student = {
//     name:"Archi",
//     age:20,
//     course:"JavaScript"

// }

//     student.age=23,
//     student.city="Delhi"
    
// console.log(student.name);
// console.log(student.age);
// console.log(student["city"]);



// Practice 2 — Methods

// Create an object called calculator with:

// A property num1 = 10
// A property num2 = 20
// A method called add that prints the sum of num1 and num2
// Call the add method.

// const calculator ={
//     num1:10,
//     num2:20,

//     add: function()  {
//         console.log(calculator.num1+calculator.num2)
//     }

// }
// calculator.add();



// Create an object called user:

// name → "Archi"
// address → a nested object containing:
// city → "Delhi"
// country → "India"

// Then:

// Print the city using dot notation.
// Print the country using bracket notation.
// Add a new property age → 22.


// const user ={
//     name:"Archi",
//     address: {
//     city:"delhi",
//     country:"india"
//     }

// }
// user.age=22
// console.log(user.address.city);
// console.log(user.address["country"]);


// product
// ├── name → "Laptop"
// ├── price → 50000
// └── brand → "Dell"


// const product ={
//     name:"laptop",
//     price:5000,
//     brand:"Delhi"
// }
// for(let key in product)
// {
//     console.log(product[key])
// }