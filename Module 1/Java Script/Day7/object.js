console.log("object literal")
let person=[{
    id:1,
    name:"rahul",
    addrs:"pune",
    desgt:"engineer",
},
  {  id:2,
    name:"karan",
    addrs:"pune",
    desgt:"enginerr"
}
];
let fruits={
    type:"hybrid",
    name:"banana"

}
//object constructor 
let anotherPerson=new Object();
anotherPerson.name="rahul"
anotherPerson.id=1;
anotherPerson.addrs="pune";

console.log(person)
console.log(person.name)
console.log("Accessing using object properties")


console.log("Object . key")
let KeySet=Object.keys(fruits);
console.log(KeySet);


console.log("Object .values");
let P_Value=Object.values(fruits);
console.log(Object.values(P_Value));

console.log("Object .create()");
let prototype={
    greet(){
        console.log("> hello")
    }
}
let newObject=Object.create(prototype)
newObject.greet();
console.log("Object .entries")

console.log("Sealed Object")
let sealedObject=Object.seal({a:1});
//delete sealedObject.a=3 //not allowed to reconfigured
sealedObject.a=3 //alowed
console.log(sealedObject)