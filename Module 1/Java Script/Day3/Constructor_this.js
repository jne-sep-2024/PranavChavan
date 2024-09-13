console.log("Costructor with object calling and fuction inside it ")
function car(model,wheels,company){
  this.car=car,
  this.wheels=wheels,
  this.company=company,
    this.drive=function(){
    console.log("Car is moving")
}
}
const c1=new car("Terrano",4,"nissan");
c1.drive()
console.log(c1.company)
