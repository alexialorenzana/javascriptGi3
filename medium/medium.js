// write a function that would allow you to do this:
//var sharePizza = cutPizzaSlices(8);
//console.log(sharePizza(2));                                                                                                                                                                    
// prints "Each person gets 4.00 slices of pizza"
//console.log(sharePizza(3)); 
// prints "Each person gets 2.67 slices of pizza"

let cutPizzaSlices = (a) => (b) => a / b;

let sharePizza = cutPizzaSlices(8);

console.log(sharePizza(2));
console.log(sharePizza(3));



//A closure is a function having access to the parent scope, 
//even after the parent function has closed.

//const helloWorld = () => {
//return "Hello World from an arrow function"
//}