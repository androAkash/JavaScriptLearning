const city = "Kolkata"
// city = "Bengaluru" can not redeclare
let myName = "Akash" //Can re declare
myName = "Dev"
console.log(city)
console.log(myName)

const person = {name:"Akku"}
console.log(person.name)
person.name = "Dev"
console.log(person.name)

firstHello()

function firstHello(){
    console.log("Hello Javascript")
}