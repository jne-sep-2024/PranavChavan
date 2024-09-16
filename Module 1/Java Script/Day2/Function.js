

let a=31
console.log("--------Function block----------")
function show(){
    console.log("Hello")
}
    show()
console.log("-----parameter Function--------")    
function add(num1,num2)
{
    console.log(num2+","+num1)
    console.log(num1+num2)
}
add(6,7)
console.log("------return function--------")
function substraction(num1,num2,num3)
{
    return num1-num2-num3
}
let Total=add(3,4,5)
console.log(Total)
let name="pranav"
console.log("------ function expression --------")
// Function expression cannot be hoisted 
const User_name = function(name) {
    return `Hello, ${name}!`;
};

console.log(User_name('Pranav')); 
console.log("------ function Arrow --------")
const Age = (age) =>  
`Hello, ${age}!`;
console.log(Age(21));
console.log("------ function Anonymous --------")
let addition=function(a,b)
{
    return a+b
};
console.log(addition(2,4))

let c=21
let b=31
console.log(c+b)



