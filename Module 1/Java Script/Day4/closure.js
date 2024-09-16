
function createCounter() {

    let count = 0;


    return function() {
        count++;
        console.log(count);
    };
}


const counter = createCounter();


counter(); 
   counter(); 
  counter(); 


  function createCounter(start) {
    let count = start;
    return function() {
        count++;
        return count;
    };
}

const counterA = createCounter(5);
const counterB = createCounter(10);

console.log(counterA()); 
console.log(counterA()); 
console.log(counterB()); 
console.log(counterB()); 