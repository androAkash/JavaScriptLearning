const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$/
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let form = document.querySelector(".card-content")
let emailError = document.querySelector("#emailError")
let passwordError = document.querySelector("#passwordError")
let emailans = emailPattern.test(email.value)
let passwordans = passwordPattern.test(password.value)

form.addEventListener("submit", (dets) => {
    dets.preventDefault()
    let valid = true
    if (!emailans) {
        emailError.textContent = "Invalid Email"
        document.querySelector(".error").style.display = "initial"
        valid = false
    } else{
        emailError.textContent = ""
    }
    if (!passwordans) {
        passwordError.textContent = "Invalid passowrd"
        valid = false
    }
})