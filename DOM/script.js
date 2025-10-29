const title = document.querySelector(".title")
const button = document.querySelector(".button")

button.addEventListener("click",()=>{
    title.textContent = "Bye Bye Universe from js"
    title.style.color = "red"
    title.style.fontSize = "2rem"
}) 