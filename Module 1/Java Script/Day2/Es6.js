let Fruit_basket=["Apple","banana","cheery","strawbeery","pineapple"]
console.log("-For of loop-")
for(var fruit of Fruit_basket.values())
{
    console.log(fruit)
}
console.log("------------------------")
for(var fruit of Fruit_basket)
    {
        console.log(fruit)
    }
    console.log("-For in loop-")
    var person={
        name:"Pranav",
        age:21,
        addr:"pune"
    }    
    for( key in person)
    {
        console.log(`${key}:${person[key]}`);
    }
    console.log("-For loop -")
    for(let i=0;i<Fruit_basket.length;i++)
    {
        console.log(Fruit_basket[i])
    }
    console.log("-for Each-")
    Fruit_basket.forEach(fruit=>console.log(fruit))

    // Function simulating an asynchronous operation
function fetchData(callback) {
    setTimeout(() => {
        const data = 'Data received';
        callback(data); // Call the callback function with the data
    }, 2000); // Simulate a delay of 2 seconds
}
console.log("------------------------------------")
var Emp_data=["pranav","rahul","sujay","kishor","sham"]

Emp_data.forEach(data=>console.log(data))
Emp_data.sort();
console.log(Emp_data)
let filter_data=Emp_data.filter(i=>i.length>=5).map(i=>i.toUpperCase)
console.log("---------data is sort by length")
filter_data.forEach(data => console.log(data))
