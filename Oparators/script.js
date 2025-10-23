//Oparators
let a = "12"
a = +"12"   
//It will converts into integer
let b;
b = +"akash"
//Itll give us Nan -> Not an number

//Ternery oparator ?: using inline if else {Swift funda}

let score = 100
let grade = score >= 90 ? "A" : score >= 75 ? "B" : score >= 50 ? "C" : "Fail"
console.log(grade)

//Tricky
let x = 10
let y = x++
console.log(x,y) //answer is x = 11 , y = 10 {beacuse we are not increment y}

let t = 10
let t1 = ++t
console.log(t1,t) //answer is t = 11 , t1 = 11 {instant increament}

let count = 5
let print = count-- === 5 ? "Matched" : "Unmatched" // answer is matched because js "--/++" after the variable increment latter
console.log(print)