Mistake 1

Forgot to call function.

Wrong

function greet(){}

Correct

greet();

--------------------------------

Mistake 2

Passed Archi without quotes.

Wrong

greet(Archi);

Correct

greet("Archi");

--------------------------------

Mistake 3

Ignored returned value.

Wrong

sum(10,20);

Correct

let answer = sum(10,20);

console.log(answer);

--------------------------------

Mistake 4

Created infinite recursion by calling sum() inside sum().