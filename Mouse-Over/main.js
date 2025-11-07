let box = document.querySelector(".box")
//Can not miss spell "mouseover"
box.addEventListener("mouseover",()=>{
    box.style.backgroundColor = "yellow"
})
box.addEventListener("mouseout",()=>{
    box.style.backgroundColor = "red"
})