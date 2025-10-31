const title = document.querySelector(".title")
const button = document.querySelector(".button")
const inp = document.querySelector("input")
// .input ❌ because I have not decleared that as a class/id
const dropDown = document.querySelector(".drop-down")

button.addEventListener("click",()=>{
    cosmaticChanges(s = "Changes from function",c = "blue",f ="2rem")
})

inp.addEventListener("input",function(data){
    console.log(data);
    
})
dropDown.addEventListener("change",(company)=>{
    title.textContent = ` Welcome to ${company.target.value} Akku`
})
function cosmaticChanges(s,c,f){
    title.textContent = s
    title.style.color = c
    title.style.fontSize = f
} 