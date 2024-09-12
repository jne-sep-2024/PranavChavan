console.log("Hello")
console.log("What you want to order")
console.log("Processing")
setTimeout(function(){
          console.log("Order Done :)")
},2000)
console.log("Please have a sit for some time ")

console.log("Callback with return ::")
function getcheese(callback){
    let cheese
    setTimeout(()=>{
        const cheese="cheeeeeeeseeeeeee"
        console.log("here is your chesseeeee")
        callback(cheese);
    },3000)
    console.log(cheese)
}
getcheese((cheese)=>{
    console.log("got the cheese"+cheese)
})

console.log("------------------------------------------------------")
console.log("Another example of callbackhell")

// Function to simulate getting cheese asynchronously
function getCheese(callback) {
    setTimeout(() => {
      const cheese = "cheese"; // Fixed string to be "cheese"
      console.log("Here is my cheese: " + cheese);
      callback(cheese);
    }, 2000);
  }
  
  // Function to simulate making dough asynchronously
  function makeDough(cheese, callback) {
    setTimeout(() => {
      const dough = cheese + " dough"; // Fixed string concatenation to include cheese
      console.log("Here is my dough");
      callback(dough);
    }, 2000);
  }
  
  // Function to simulate baking pizza asynchronously
  function bakePizza(dough, callback) {
    setTimeout(() => {
      const pizza = dough + " pizza"; // Fixed string concatenation to include dough
      console.log("Here is my pizza");
      callback(pizza);
    }, 2000);
  }
  
  // Usage example with nested callbacks
  getCheese((cheese) => {
    makeDough(cheese, (dough) => {
      bakePizza(dough, (pizza) => {
        console.log("Got my pizza:", pizza);
      });
    });
  });
  