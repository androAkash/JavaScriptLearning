//Localstorage
//SessionStorage
//Cookies

//CRUD -> LocalStorage

localStorage.setItem("name","Akash") //Create
localStorage.getItem("name") //Read
localStorage.setItem("name","Aliah") //Update
localStorage.clear()//Delete

//CRUD -> SessionStorage

sessionStorage.setItem("otp","1234")//Create
sessionStorage.getItem("otp")//Read
sessionStorage.setItem("otp","3345")
sessionStorage.clear()

//Cookies
document.cookie = "userName=akash"
//We can expire the cookie
//it can take only ~4kb storage
//it doesnt take any effect from tab changes or opening/closing the browser

//JSON
let tasks = ["eat","code","sleep"]
localStorage.setItem("tasks",JSON.stringify(tasks))
//Using parse we can read the json
let showTasks = JSON.parse(localStorage.getItem("tasks"))
console.log(showTasks);
