console.log("Object with properties and value ")
Person={
    'name first':"Pranav",
    'age':21,
    'ValidAge':true
}
console.log(Person['name first'])//to acces the propties with space we need to use the array 
console.log("Object with normal properties and values ")
employe={
    name:"rahul",
    id:21,
    Designation:'manager'
} 
console.log(employe.Designation)
console.log("object having function inside using function key ")
person1={
    name:'pranav',
    id:565,
    isemloyed:'true',
    sayHello:function(){
        console.log("hello 1 "+this.name)
    }
}
console.log("object having function inside using Arrow function key using this key word ")

person1.sayHello()
person2={
    name:'rahul',
    id:567,
    isemloyed:'true',
    sayHello:()=>{
        console.log("hello pranav 2"+this.name)//this does not work with arrow function
    }
}
person1.sayHello()
person2.sayHello()

