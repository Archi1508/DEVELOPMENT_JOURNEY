// const isEven = function(number) {
//     if (number % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// };

const isEven = number => {
    if (number % 2 === 0) 
        {
            return true;
        } 
        else 
        {
            return false;
        }
}

// Write an arrow function called getFullName that takes two parameters:

// firstName
// lastName

// and returns their full name with a space between them.

const getFullName = (firstName,secondName) => firstName + " " + secondName;

// const createStudent = function(name, course) {
//     return {
//         name: name,
//         course: course
//     };
// };

const createStudent = (name,course) => ({
        name: name,
        course: course
  
});