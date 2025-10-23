// for (var i = 0; i < 5; i++) {
//   setTimeout(() => console.log(i), 1000);
// }

let arr = [10,20,30]
for(let i in arr){
    console.log(arr[i])
}

if("0"){
    console.log("Runs")
}
if(0){
    console.log("Does this run?")
}
for(let i = 1; i<=10; i++){
    console.log(i)
}
let a = 0;
while(a < 10){
    console.log(a)
    a++
}
for(let i = 0; i<5; i++){
    if(i===1) continue //means go to the next number
    console.log(i)
}

for(let i = 10; i > 0; i--){
    console.log(i)
}
console.log("Print even")
for(let i = 0; i < 20; i++){
    if(i % 2===0){
        console.log(i)
    }
}
console.log("Print Odd")
for(let i = 0; i < 20; i++){
    if(i % 2===1){
        console.log(i)
    }
}
console.log("Multiplication")
for(let i = 1; i<11 ; i++ ){
    console.log(`5 * ${i} = ${5*i}`)
}
console.log("sum of 10 numbers")
let sum = 0
for(let i = 1; i < 11;i++){
    sum+= i
}
console.log(sum)