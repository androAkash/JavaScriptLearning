document.querySelector(".nav")
    .addEventListener("click", () => {
        alert("nav has been clicked")
    })
let ul = document.querySelector("ul")
// document.querySelector("ul")
// .addEventListener("click", (dets) => {
//     dets.target.style.textDecoration =
//         dets.target.style.textDecoration === "line-through" ? "none" : "line-through"
// }
// )
ul.addEventListener("click", (dets) => {
    dets.target.classList.toggle("lt")
})