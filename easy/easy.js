// write a function that would allow you:
//var run = exercise('running');
//console.log(run()); // prints "Today's exercise: running"
//var swim = exercise('swimming');
//console.log(swim()); // prints "Today's exercise: swimming"

let exercise= (exerciseName) => () => `Today's exercise: ${exerciseName}`;
const run = exercise("running");
const swim= exercise("swimming");

console.log(run());
console.log(swim());



//JavaScript variables can belong to the local or global scope.
//Global variables can be made local (private) with closures.

// closures = used for object data privacty, it callbacks functions, 
//and it helps you acces to an outer function's scope from an inner function

// function called exercise("activity") => today is activity

//const exercise = (string) => () => `today we are: ${string}`;

//const run = exercise('running');
//console.log(run());

//const helloWorld = () => {
//return "Hello World from an arrow function"
//}