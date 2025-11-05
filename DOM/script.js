const title = document.querySelector(".title")
const button = document.querySelector(".button")
const inp = document.querySelector("input")
// .input ❌ because I have not decleared that as a class/id
const dropDown = document.querySelector(".drop-down")
const h1 = document.querySelector(".h1")
const uploadBtn = document.querySelector(".btn")
const fileInput = document.querySelector("#file")
const uploadBtnTxt = document.querySelector("#btn-txt")

uploadBtn.addEventListener("click",()=>{
    fileInput.click()
})
fileInput.addEventListener("change",(dets)=>{
    if(dets.target.files[0])
    uploadBtnTxt.textContent = dets.target.files[0].name
})
window.addEventListener("keydown",(dets)=>{
    console.log(dets.key)
    if(dets.key === " "){h1.textContent = "SPC"} else{
    h1.textContent = dets.key        
    }
})

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