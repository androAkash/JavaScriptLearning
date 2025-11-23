let progress = 0
const progressBar = document.querySelector("#progressBar")
const progressText = document.querySelector("#progressText")
const downloadText = document.querySelector("h3")
let interval = setInterval(() => {
    progress ++
    progressBar.style.width = progress + "%"
    progressText.textContent = progress + "%"

    if(progress >= 100){
        clearInterval(interval)
        setInterval(() => {
            downloadText.textContent = "Downloaded."
        }, 500);
    }
}, 50);