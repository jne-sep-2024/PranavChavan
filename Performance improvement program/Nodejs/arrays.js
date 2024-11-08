let numerList=[1,2,3,4,5]
let str="epsilon";

  //from 
let arr=Array.from(str);
console.log(typeof arr,arr);

//at
console.log(numerList.at(2));  
console.log(numerList.at(-1)); 

//concat
const arr3 = arr.concat(numerList);
console.log(arr3);

//copyWithin()
console.log(arr3.copyWithin(0,3))

//fill
 arr = [1, 2, 3, 4];
arr.fill(0, 1, 3);
console.log(arr);

//filter()
const evenNumbers = numerList.filter(num => num % 2 === 0);
console.log(evenNumbers);

//find()
const found = numerList.find(num => num >2);
console.log(found); 

//findIndex()
const index = numerList.findIndex(num => num > 2);
console.log(index);

//findLastIndex()
const lastIndex = arr.findLastIndex(num => num > 2);
console.log(lastIndex);

//includes()
let res=numerList.indexOf(6);
console.log(res)

//join()
arr = ['M', 'S', 'D'];
console.log(arr.join(','));

//map()
const format1=numerList.map((num)=>num*2)
console.log(format1)

//forEach()
arr.forEach(i=>console.log(i));

//reduce()
  let sum=numerList.reduce((accumulator,currentValue)=>{
    return accumulator+currentValue;
  },0)
  console.log(sum)

//reduceRight() from right to left
sum=numerList.reduceRight((accumulator,currentValue)=>{
    return accumulator+currentValue
},0)

//slice() get the shaolw copy of arr
numerList=numerList.slice(0,2);
console.log(numerList)

//shift()
temp=numerList.shift(1);
console.log(temp)

//unshift()
List=numerList.unshift(1,2,3,4,5)
console.log('****',List)//gett the lngth
console.log(numerList)

//toSpliced()
list=numerList.splice(0,3,9,8,7,6,4);
console.log(list)
console.log(numerList)