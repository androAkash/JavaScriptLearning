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

const users =[{
    name: "kirat",
    age:21,
    gender: "male"
},{
    name: "priya",
    age:21,
    gender: "female"
},{
    name: "raman",
    age:11,
    gender: "male"
},
]
function find(arr){
  return arr.filter(u=> u.age > 18 && u.gender === "male")
}
let ans = find(users)
console.log(ans);
