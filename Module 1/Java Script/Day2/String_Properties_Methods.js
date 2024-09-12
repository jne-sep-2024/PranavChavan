console.log("printing the name with length and the properties (Length)")
let f_name="pranav"
let l_name="chavan"
let full_name=" pranav chavan"
console.log(f_name)
console.log(f_name.length)

console.log("methods in string ")
console.log("method 1 charAt()")
console.log(f_name.charAt(5))
console.log("Method 2 charCodeAt()")
console.log(f_name.charCodeAt(0))
console.log("Method 3 concat method")
console.log(f_name.concat(' ',l_name))
console.log("Method 4 includes")
console.log(f_name.includes("p",0))  
console.log("Method 5 endswith")
console.log(f_name.endsWith("a"))  
console.log("Method 6 endswith")
console.log(f_name.substring(0,3)) 

console.log("Method 6 toLowercase")
console.log(f_name.toLowerCase) 
console.log("Method 6 toUpperCase")
console.log(f_name.toUpperCase)  

console.log("Method 6 trim")
console.log(f_name.trim())  

console.log("method to trim from start white space ")
console.log(full_name.trimStart()) ///remove white space from front
console.log("method to trim from end white space ")
console.log(full_name.trimEnd())
console.log("---------------String to array-------")
let Fruit_basket=['apple','banana','mango','orange']
console.log(Fruit_basket)
console.log("converting array to string::")
const basket=Fruit_basket.toString()
console.log(basket)
console.log(basket.charAt(2))
const temp=basket.split(",")//splitting string to array
console.log(temp[0])//accessing the array element that is splitted
console.log("-------Methods to Convert Arrays of Strings into a Single String----")
 f_name=Fruit_basket.join(",")
 console.log(f_name)//convert into single string 
 let a=Array.from(Fruit_basket)//coverting array of string to single array
 console.log(a[0])
  a=Array.from(f_name)//coverting  string to single array with each caharcter
 console.log(a[0])