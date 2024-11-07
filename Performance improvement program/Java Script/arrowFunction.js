//Write an arrow function that takes two numbers as parameters and returns their sum.
var num1 = 1;
var num2 = 2;
const sum = (num2, num1) => {
    return num1 + num2;
}

console.log(sum(num1, num2))
//  Write an arrow function that takes a string and returns the string in uppercase. Use implicit return (single expression without curly braces)


var name = 'pranav';

const name_toUppercase = (name) => name.toUpperCase();

console.log(name_toUppercase(name))  // This will log 'PRANAV'

//Create an arrow function that takes two parameters (a number and a string). If the string is not provided, set a default value of `"Unknown"`. Return a message combining both parameters.

var rollno = 123;
var first_name = null;

const message = (rollno, first_name) => {
    if (first_name == null) {
        first_name = "unkown";
        return [rollno, first_name]
    }
    else {
        return [first_name, rollno];
    }

}
console.log(message(rollno, first_name))

//Use the `map()` method with an arrow function to double each number in an array of numbers.

const numberList = [1, 2, 3, 4, 5];
const doubleNumber = numberList.map(i => i * 2)
console.log(doubleNumber)

//Use the `filter()` method with an arrow function to filter out all even numbers from an array of numbers.

const numberList1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evenNumber = numberList1.filter((i)=> i % 2 == 0)
console.log(evenNumber)

// Create an object with a method that uses an arrow function inside it to show how the `this` context behaves inside an arrow function.
const obj = {
    name: 'pranav',
    msg: function() {
      setTimeout(() => {
        console.log(this.name);  
      }, 1000);
    }
  };
  
  obj.msg();  

  const UserDetails={
    name:'rahul',
    rollno:121,
    msg: function(){
       setTimeout(()=>{
        console.log(this.name,this.rollno);  
       },1100)
    }
  }

  UserDetails.msg();


 