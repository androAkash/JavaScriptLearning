function binarySearch(nums, target) {
    let n = nums.length
    let high = n - 1
    let low = 0
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        if (nums[mid] === target) return mid
        else if (nums[mid] > target) {
            high = mid - 1
        }
        else if (nums[mid] < target) {
            low = mid + 1
        }
    }
    return -1
}
console.log(binarySearch([10, 20, 30, 40, 50], 30));
console.log(binarySearch([1, 2, 3, 4, 5], 6));

function reverseArray(arr) {
    let i = 0
    let j = arr.length - 1

    while (i < j) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        i++
        j--
    }
    return arr
}
console.log(reverseArray([1, 2, 3, 4, 5]));
////Sort from sheriyans

////map filter reduce from sheriyans 
// map let you build a new array based on an existing dataset.
//Returns a new array; original remains unchanged.


//ForEach {lazycolum/lazyrows items{}}
let arr = [1, 2, 3, 4, 5]

arr.forEach(function (val) {
    console.log(val);
})
//Add "Mango" at the end and "Pinapple" at the beginning of this array
let fruits = ["Apple", "Banana"];
fruits.push("Mango");
fruits.unshift("Pineapple");
console.log(fruits)

//Interaction method
//map
//exponent ** means power
let prices = [2, 4, 6, 8]
let taxed = prices.map(p => p ** 2)
console.log(taxed);

//filter odd number
let nums = [1, 3, 2, 8]
let odd = nums.filter(n => n % 2 === 1)
console.log(odd);

//sum all the numbers using redudce
let sum = nums.reduce((acc, val) => acc + val)
console.log(sum);

//Double the even numbers and sum them
let even = [2, 4, 6, 8]
let doubleEven = even.map(p => p * 2)
let sumEven = doubleEven.reduce((acc, d) => acc + d)
console.log(doubleEven)
console.log(sumEven);

//Extract names of students who passed
const students = [
    { name: "Riya", marks: 80 },
    { name: "Raj", marks: 30 },
    { name: "Simran", marks: 70 },
]
const passedNames = students
    .filter(s => s.marks > 30)
    .map(s => s.name);

console.log(passedNames);

//Get average marks of all students
const students1 = [
    { name: "A", marks: 90 },
    { name: "B", marks: 80 },
    { name: "C", marks: 70 }
]
const marks = students1.map(p => p.marks)
const totalMarks = marks.reduce((acc, d) => acc + d)
console.log(totalMarks / marks.length);
//Find total price of all products with discount
const cart = [
    { item: "Shoes", price: 2000 },
    { item: "Tshirt", price: 800 },
    { item: "Watch", price: 1500 }
]
const discount = cart.map(p => p.price * 0.9)
const totalDiscountedPrice = discount.reduce((acc, d) => acc + d)
const eachDiscount = cart.forEach(function (val) {
    console.log(val.price * 0.9);
})
console.log(totalDiscountedPrice);
//Get all usernames (in uppercase) who are active
const uesrs = [
    { name: "harsh", active: true },
    { name: "riya", active: false },
    { name: "rohan", active: true }
]
const activeUsers = uesrs.filter(p => p.active)
const activeUsersName = activeUsers.map(p => p.name.toUpperCase())
console.log(activeUsersName);
//Find the highest score using reduce
const scores = [50, 85, 99, 70];
const highest = scores.reduce((acc, d) => (d > acc ? d : acc));
console.log(highest);

//From an array of transactions, find total income > ₹1000
const transactions = [
    { type: "income", amount: 1500 },
    { type: "expense", amount: 400 },
    { type: "income", amount: 800 },
    { type: "income", amount: 2200 }
]
const totalIncome = transactions
.filter(p=>p.type === "income" && p.amount > 1000)
.reduce((acc,d)=> acc + d.amount,0)
console.log(totalIncome);


//Merge Two arrays
let arr1 = [1, 2]
let arr2 = [2, 3]
let arr3 = [...arr1, ...arr2]
console.log(arr3);

