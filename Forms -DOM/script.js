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
    profileImage.setAttribute("src",
        "https://images.unsplash.com/photo-1713480958670-c484aca04602?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687")

    let name = document.createElement("h3")
    name.textContent = "Name name"
    let occupation = document.createElement("h5")
    occupation.textContent = "Occupation"
    let p = document.createElement("p")
    p.textContent = "description"

    profile.appendChild(profileImage)
    card.appendChild(profile)

    card.appendChild(name)
    card.appendChild(occupation)
    card.appendChild(p)

    main.appendChild(card )
    console.log(card);
})