console.log("conditional statements")
//if-else
var student_age1=24;
var student_age2=34;
console.log("-------if/else-------")
if(student_age1<student_age2)
{

    console.log("age2 is greater")
}
else
{
    console.log("age1 is greater")
}

console.log("-------nested if/if/else/else-------")
let age = 20;
let hasId = true;

if (age >= 18) {
  if (hasId) {
    console.log("You are allowed to enter the club.");
  } else {
    console.log("You ned an ID to eter the club.");
  }
} else {
  console.log("You are not old enogh to eter the club.");
}

console.log("-------ladder if//else/if/else-------")
let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade::: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else if (score >= 60) {
  console.log("Grade:: D");
} else {
  console.log("Grade::F");
}

console.log("-------Switch Statement-------")

let num = 15;

switch (true) {
  case (num < 10):
    console.log("Less than 10");
    break;
  case (num >= 10 && num <= 20):
    console.log("Between 10 and 20");
    break;
  case (num > 20):
    console.log("Greater than 20");
    break;
  default:
    console.log("Out of range");
}
