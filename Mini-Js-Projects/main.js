const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let form = document.querySelector(".card-content")
let emailError = document.querySelector("#emailError")
let passwordError = document.querySelector("#passwordError")


form.addEventListener("submit", (dets) => {
    dets.preventDefault()
    let valid = true
    let emailans = emailPattern.test(email.value.trim())
    let passwordans = passwordPattern.test(password.value.trim())
    if (!emailans) {
        emailError.textContent = "Invalid Email"
        emailError.style.display = "initial"
        valid = false
    } else {
        emailError.textContent = ""
        emailError.style.display = "none";
    }
    if (!passwordans) {
        passwordError.textContent = "Invalid passowrd"
        passwordError.style.display = "initial"
        valid = false
    } else {
        passwordError.textContent = ""
        passwordError.style.display = "none";
    }
    if (valid) {
        alert("Form submitted successfully!")
        form.reset()
    }
})
//DOM → Tailwind → API mini apps → JS deep concepts → React/Next.js → Projects → Job