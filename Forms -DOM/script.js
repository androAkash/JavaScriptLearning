const form = document.querySelector("form")
let inputs = document.querySelectorAll("input")
let main = document.querySelector(".main")

form.addEventListener("submit", (dets) => {
    dets.preventDefault()

    //Creating card
    // <div class="card">
    // <div class="profile"></div>

    let card = document.createElement("div")
    card.classList.add("card")

    let profile = document.createElement("div")
    profile.classList.add("profile")

    let profileImage = document.createElement("img")
    profileImage.setAttribute("src", inputs[0].value)

    let name = document.createElement("h3")
    name.textContent = inputs[1].value
    let occupation = document.createElement("h5")
    occupation.textContent = inputs[2].value
    let p = document.createElement("p")
    p.textContent = inputs[3].value

    profile.appendChild(profileImage)
    card.appendChild(profile)

    card.appendChild(name)
    card.appendChild(occupation)
    card.appendChild(p)

    main.appendChild(card)
    inputs.forEach((inp) => {
        if (inp.type !== "submit") {
            inp.value = ""
        }
    })
    console.log(card);
})