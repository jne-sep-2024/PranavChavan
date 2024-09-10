console.log("A-------------Arithmetic operator------------")
var number1=23;
var number2=24;
console.log("Addition Operator + ::"+(number1+number2))
console.log("Multilication Operator * ::"+(number1*number2))
console.log("Division Operator / ::"+(number1/number2))
console.log("substarction Operator - ::"+(number1-number2))
console.log("Modules Operator %::"+(number1-number2))
console.log("exponentioal operator ** "+(number1 ** number2))
console.log("------------Assignment operator------------")
var number1=23;//asssignment =
var number2=24;
console.log("Addiing assign Operator + ::"+(number1+=5))
console.log("Substracting assign Operator * ::"+(number1=-5))
console.log("Division asign Operator / ::"+(number1/=5))
console.log("substarction Operator - ::"+(number1-=5))
console.log("Modules Operator %::"+(number1**=6))
console.log("------------Comparison operator------------")
var number1=23;
var number2=24;
console.log("equals Operator + ::"+(number1==number2))
console.log("not equals Operator * ::"+(number1!=number2))
console.log("greater than Operator / ::"+(number1>=number2))
console.log("less than equals too  Operator - ::"+(number1<=number2))
console.log("Modules Operator %::"+(number1**=6))

console.log("------------logical operator------------")
var number1=23;
var number2=24;
let  result=true
console.log("&& both true Operator + ::"+(number1&&number2))
console.log("|| or any one  equals Operator * ::"+(number1||number2))
console.log("logical not ! return opposite Operator  ::"+(!true))


console.log("------------Unary operator------------")
var number1=23;
var number2=24;
let str=+"-87"
console.log("increment  Operator + ::"+(number1--))
console.log("decrement  Operator * ::"+(number1++))
console.log("unary + convrt to number"+str)

console.log("------------Ternary operator------------")
let age=21
let result1=(age>18)?true:false
console.log(result1)

console.log("------------Type of operator------------")
var num=43
var name="pranav"
console.log(typeof(num))
console.log(typeof(name))

console.log("------------Bitwise operator------------")
let andResult = 4& 2; 
let orResult = 4 |2; 
let xorResult = 4 ^ 2; 

console.log("& both true Operator + ::"+(andResult))
console.log("|| or any one  equals Operator * ::"+(orResult))
console.log("xor  Operator  ::"+(xorResult))
