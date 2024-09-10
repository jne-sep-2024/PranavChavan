
var num1 = 21;

var num2="12.3"
console.log("Number Properties");

// Access Number properties through the Number object
console.log("Number.MIN_VALUE: " + Number.MIN_VALUE); // Smallest positive value representable
console.log("Number.MAX_VALUE: " + Number.MAX_VALUE); // Largest positive value representable
console.log("Number.POSITIVE_INFINITY: " + Number.POSITIVE_INFINITY); // Represents positive infinity

// Use Number methods to check properties of num1
console.log("Number.isInteger(num1): " + Number.isInteger(num1)); // Checks if num1 is an integer
console.log("Number.isNaN(num1): " + Number.isNaN(num1)); // Checks if num1 is NaN (Not-a-Number)
console.log("Number convert to flaot from string: " + Number.parseFloat(num2)); // convetting to float from string
console.log("Number to string : " + num1.toString()); // convrting to string form int
