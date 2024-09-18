//declare Array
let fruits=["Apple","banana","pineapple"]
for(let i=0;i<fruits.length;i++)
{
    console.log(fruits[i])
}

//intializng using constructor
let odd_store=new Array(1,3,5,7,9)
for(let i=0;i<odd_store.length;i++)
    {
        console.log(odd_store[i])
    }
//mutator methods in array

console.log("push method that is used to add last")
fruits.push("guava","strawberry","mango");
console.log(fruits)

console.log("pop method that is used to remove last")
fruits.pop()
console.log(fruits)


console.log("shift method that is used to remove first ")
fruits.shift()
console.log(fruits)

console.log("Unsfit method that is used to Add first")
fruits.unshift("cheery","orange")
console.log(fruits)


console.log("splice  method that is used to replace or remove")
fruits.splice(1,2,"papaya","banana")
console.log(fruits)
console.log("reverse method is used to make the rever")
fruits.reverse()
console.log(fruits)

console.log("sort method is used to make the sort")
fruits.sort()
console.log(fruits)
console.log("Accessor method")
console.log("concat method ")
let basket2=["fghuij","yhgsdxn","oiwkaj","qwdedz","poiuyt"]
console.log(basket2)
let ab=fruits.concat(basket2)
let moreFruits = ["grape", "mango"];
let allFruits = fruits.concat(moreFruits);
console.log(ab)

console.log("slice it return the shallow copy of an portion of array")
console.log(fruits.slice(0,4))


console.log("indexof it return the index copy of element pass")
console.log(fruits.indexOf("cheery"))

console.log("Join all elements in string")
let str=fruits.join()
console.log(str)

console.log("::Iteration method::")
fruits.forEach(Element=>console.log(Element))

console.log("Iteration through filter")
let filter_data=fruits.filter(i=>i.length<6)
console.log(filter_data)

console.log("Iteration through Map")
 filter_data=fruits.map(i=>i.toUpperCase())
console.log(filter_data)

console.log("Iteration through some")
 filter_data=fruits.some(i=>i.length>6)
console.log(filter_data)


console.log("Iteration through every")
 filter_data=fruits.every(i=>i.length>6)
console.log(filter_data)