var number1=13;
var number2=14;

const result=()=>{
   return number1+number2;    
}

console.log(result())

// Write an anonymous function that takes two parameters (a number and a string) and prints a greeting message combining them. Assign this function to a variable and invoke it.

 var rollno=12
 var name='pranav'

 const greetmsg=(rollno,name)=>{
    var combine=name+rollno
    return combine; 
}
 console.log(greetmsg(rollno,name))

 //Write an anonymous function that logs `"Hello after 2 seconds!"` after a 2-second delay using `setTimeout`.

 const msglog=()=>{
     setTimeout(()=>{
        console.log("Hello after 2 seconds!")
     },2000)
 }
 msglog();

 //Use the `forEach()` method with an anonymous function to log each element of an array to the console

 const fruits=['apple','cheery','banana','mango'];
 fruits.forEach((i)=>{
    console.log(i)
 })

 