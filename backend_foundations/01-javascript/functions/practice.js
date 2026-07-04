// function hello () {
//     console.log("Hello Javascript");
// }
// // call function
// hello();

// function greet (name) {
//     console.log("welcome " + name);
// }
// // add space after welcome and pass argument as string 
// greet("Archi");

// function sum(a, b) {
//     let ans = a + b;
//     return ans;
// }

// console.log(sum(10, 20));

// // store result in a variable otherwise it is lost
// // Code after a return statement is never executed.

// function isEven (n) {
//     if(n%2==0)
//     {
//         return  true;
        
//     }
//     else
//     { 
//         return false;
//     }
// }
// console.log(isEven(56));


// function findLargest(a,b) {
//     if(a>b)
//     {
//         return a;
//     }
//     else 
//     {
//         return b; 
//     }
// }

// console.log(findLargest(20,25));

function test() {
    console.log("A");
    return 100;
    console.log("B");
}

let x = test();

console.log(x);
// // output = A 100;

