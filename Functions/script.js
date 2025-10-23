//Create a great function
function greet(name) {
    console.log("Hello " + name);
    
} 
greet("From Razorpay")
//Sum all numbers using rest parameter
function getSum(...nums) {
    const total = nums.reduce((parm,val)=> parm + val, 0)
    console.log(total);
       
}
getSum(10,2)
//Make a closure counter
function counter() {
    let count = 0
  return  function () {
       count ++
       console.log(count);
        
    }
}
let getResult = counter();
let getResult2 = counter();
getResult()
getResult()
getResult2()

// Write a function that returns another function
function returnFunction() {
    return function(){
        console.log("RazorPay welcomes you")   
    }
}
const welcome = returnFunction();
welcome();
//Use a function to log even numbers in an array
let arr = [1,2,3,4,5,6,7,8,9,10]
function showEvenNumbers() {
    for(let i of arr){
        if(i % 2 === 0){
         console.log(i);
        }
       
    }
}
showEvenNumbers()
//BMI
function BMI(weight,height) {
    let bmi = weight/(height*height)
    return bmi.toFixed(2)
}

// function makeAdder(x) { 
//     return function(y) {
//         return x + y
//     }
// }
// const add5 = makeAdder(5) 
// const add10 = makeAdder(10)//12

// console.log(add5(2));
// console.log(add10(2));

function test() {
    let x = 1
    return function() {
        x++
        console.log(x); //2
    }
}
const fn1 = test() //2
const fn2 = fn1 //2
fn2()//2
fn1()//3
const greet1 = (v) =>{
    console.log(`Hello ${v}`)
}
greet1("Akash")