let basket1=["apple","banana","guava"]
console.log("get the length of array p")
console.log(basket1.length)
console.log("----Method---")

console.log("-Concat Method-")
let basket2=["orange","mango","pinepaple"]
let All_Fruits=basket1.concat(basket2)
console.log(All_Fruits)
console.log("-Filter Method-")
console.log(basket1.filter(i=>i.length>5))
console.log("-find Method-")//returns the first element that is sorted 
let element=[1,2,3,4,5,6,7,8,9]
console.log(element.find(i=>i%2==0))

console.log("-find index Method-")//find the first element sorted by index
console.log(element.findIndex(i=>i%2==0))
console.log("-for Each Itertaion-")
All_Fruits.forEach(fruit=> console.log(fruit))
console.log("-join method-")//join method join all array element into string
let temp=All_Fruits.join()
console.log(temp)
console.log(typeof temp)
console.log("-method pop and push -")//method push pop
console.log(All_Fruits.pop(2))
console.log("After pop::"+All_Fruits)
All_Fruits.push("cheery")
console.log("After push::"+All_Fruits)
console.log("-reduce method-")
let sum=element.reduce((acc,i)=>i+acc)
console.log(sum)
console.log("-Reverse Method-")
basket1.reverse()
basket1.forEach(basket=>console.log(basket))
console.log("-splice method Method-")
All_Fruits.splice(2)
All_Fruits.forEach(basket=>console.log(basket))
console.log("-unshift method-")
let len=All_Fruits.unshift("strawbeery,chilli")
console.log(len)
console.log(All_Fruits)

console.log("-Values()-")
for(let value of All_Fruits.values())
{
    console.log(value)
}
