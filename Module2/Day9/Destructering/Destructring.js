





























console.log('Array Destructuring');
let num=[1,2,3,4,5];
const[a,b,c]=num;
console.log(a);
console.log(b);
console.log(c);

console.log('skipping the elements'); 

let colour=['red','blue','green'];
const[firstcolor,secndcolor]=colour;
console.log(firstcolor);
console.log(secndcolor);

console.log('setting the default value');
let fruits=['apple'];
const[first_fruit,secnd_fruit='banana']=fruits
console.log(first_fruit);
console.log("Default value is ::"+secnd_fruit);


console.log('Nested Array');
let Array1=[1,2,[3,4],5];

const[first_ele,secnd_ele,Third_array]=Array1;

const [first,secnd,[first_nested,secnd_nested],third ]=Array1;
console.log(first_ele)
console.log(secnd_ele)
console.log(Third_array)
console.log('.......Nested ElE......')

console.log(first_nested)
console.log(secnd_nested)

console.log('.....Rest param......')
let Array2=[1,2,3,4,5,6,7,8]
const [first1,secnd1,...rest]=Array2;

console.log(first,secnd);
console.log(rest)


console.log(">>>>>>>>>>>>>>>>>>>>< object Destructuring ><<<<<<<<<<<<<<<<<<<<<<<<<<")
console.log("Setting the Default Value")
const person={
    username:'pranav',
     mobnumber:7654324567,
}
 console.log(person)
 const{username,mobnumber,age=24}=person;
 console.log(username)
 console.log(mobnumber)
 console.log(age)

 console.log("Nested Object")

 const pranav={
    lastname:'chavan',
    mobnumber1:9876567980,
    email:'p@gmail.com',
    address:{
        firstAddress:'pune',
        scndAddress:'Nashik'
    },
 }
 const{lastname,mobnumber1,address:{firstAddress,scndAddress='mumbai'}}= pranav;
// console.log(email)
 console.log(lastname);
 console.log(firstAddress)
// console.log(address.scndAddress) 
 console.log(scndAddress)

console.log('Renaming Variables');
 const rahul = {
     firstname1: 'rahul',
     lastname1: 'sharma',
     address: {
         state: 'MH'
     }
 };
 


 console.log('>>>>>>>>>>>>> Destructuring Arrya Objects <<<<<<<<<<<<<<<')

 const array_Object=[
    {name:'rahul',age:21}
    ,{name:'karan',age:24,
        address:{
            state:'MH'
        }
    }
    
 ]

 const[Data1,Data2]=array_Object;
 const[Data3,{address:{state}}]=array_Object
 console.log(Data1)
 console.log(state)
 