console.log("---------for loop-------------")
let fruits = ['Apple', 'Banana', 'Cherry'];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
console.log("---------for loop-------------")
for (let i = 1; i <= 10; i++) {
    let temp = ""; 
  
    for (let j = 1; j <= i; j++) {
      temp += "*"; 
    }
    
    console.log(temp); 
  }
  console.log("---------do while  loop-------------")
  
let i = 1;

do {
  console.log(i);
  i++;
} while (i <= 5);

console.log("--------- while  loop-------------")
let userInput=5;
 console.log("Enter a number between 1 and 10:");
while (true) {
  
  
  if (userInput >= 1 && userInput <= 10) {
    console.log("Valid input received:", userInput);
    break; 
  } else {
    console.log("Invalid input. Please try again.");
  }
}

console.log("---------continue jump statment--------")
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      continue; 
    }
    else
    {

    console.log(i); 
    }
  }
  