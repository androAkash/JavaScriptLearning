let obj = {
    name:"Akash",
    age: 25,
    company:["Xellier","RzorPay"]
}
console.log(obj.name);
for(let key in obj){
    console.log(key,obj[key]);
}
// let newObj = {...obj}
// let newOne = Object.assign({},obj)
// console.log(newOne);
